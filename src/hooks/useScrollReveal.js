import { useEffect, useRef } from 'react';

/**
 * useScrollReveal Hook
 * Observes element visibility and toggles reveal classes for smooth scroll animations.
 */
export default function useScrollReveal(options = { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('reveal-active');
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return ref;
}
