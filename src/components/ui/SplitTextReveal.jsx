import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SplitTextReveal
 * Word-by-word reveal animation using GSAP ScrollTrigger & gsap.context()
 * Wraps words in overflow-hidden containers and animates them upward from 100% yPercent.
 */
export default function SplitTextReveal({
  text = '',
  as: Component = 'h2',
  className = '',
  stagger = 0.06,
  delay = 0,
  triggerStart = 'top 88%',
  once = true,
  ...props
}) {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);

  const words = text ? text.split(' ') : [];

  useEffect(() => {
    if (!containerRef.current || words.length === 0) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(wordsRef.current, { yPercent: 0, opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordsRef.current,
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          ease: 'power3.out',
          stagger: stagger,
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerStart,
            once: once,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, stagger, delay, triggerStart, once, words.length]);

  return (
    <Component
      ref={containerRef}
      className={`select-none ${className}`}
      {...props}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0 pb-[0.08em]"
        >
          <span
            ref={(el) => {
              wordsRef.current[index] = el;
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
