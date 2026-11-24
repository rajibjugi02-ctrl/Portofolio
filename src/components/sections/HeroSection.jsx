import { useState, useEffect } from 'react';
import { HiArrowRight, HiCode, HiOutlineMail } from 'react-icons/hi';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { motion } from 'motion/react';
import { CanvaIcon } from '../ui/Icons';
import PixelButton from '../ui/PixelButton';
import PixelBadge from '../ui/PixelBadge';
import PixelCard from '../ui/PixelCard';
import SplitTextReveal from '../ui/SplitTextReveal';
import HeroLiveProjectSpotlight from '../ui/HeroLiveProjectSpotlight';
import { useLenis } from '../../context/LenisContext';
import portfolioData from '../../data/portfolio.json';

const ROLES = [
  'Web Developer & Creative Designer',
  'Front-End Web Developer (Next.js/React)',
  'Canva & Figma Graphic Designer',
  'Video Editor & Videographer'
];

function CountUpNumber({ end = 0, suffix = '', duration = 1400 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function HeroSection() {
  const { profile, webProjects = [], designProjects = [] } = portfolioData;
  const lenis = useLenis();

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  useEffect(() => {
    const fullText = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(60);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(350);
        } else {
          setTypingSpeed(30);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const stats = [
    { label: 'Tahun Eksplorasi', end: 2, suffix: '+' },
    { label: 'Proyek Web Live', end: webProjects.length, suffix: '' },
    { label: 'Karya Desain Canva', end: designProjects.length, suffix: '+' },
    { label: 'Dedikasi Belajar', end: 100, suffix: '%' },
  ];

  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    if (href === '#hero') {
      if (lenis) {
        lenis.scrollTo('#hero', {
          duration: 1.25,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { offset: -96, duration: 1.15 });
      } else {
        const navOffset = window.innerWidth < 768 ? 76 : 96;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden scroll-mt-28"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Retro-Modern Pixel Hero Typography with Smooth Settle Re-entry */}
          <motion.div
            initial={{ opacity: 0.85, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            
            {/* Pixel Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 mb-4"
            >
              <PixelBadge variant="cobalt" size="md">
                <span className="w-2 h-2 bg-[#2E5BFF] border border-[#1C1B19] animate-pulse" />
                <span>ONLINE • SMK N 1 CIOMAS (PPLG)</span>
              </PixelBadge>
              <PixelBadge variant="stone" size="md">
                <span>BOGOR, ID</span>
              </PixelBadge>
            </motion.div>

            {/* GSAP Word-by-Word SplitTextReveal Headline */}
            <SplitTextReveal
              text="MUHAMMAD RAJIB ZAHIR"
              as="h1"
              className="font-pixel text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1C1B19] tracking-tight uppercase mb-3 leading-[1.05]"
              stagger={0.07}
            />

            {/* Role Typewriter Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="font-mono text-xs uppercase text-[#5E5C56] font-bold tracking-wider">
                Peran:
              </span>
              <div className="font-mono text-xs sm:text-sm font-bold text-[#2E5BFF] bg-[#EBF0FF] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] px-2.5 py-1">
                <span>{currentText}</span>
                <span className="inline-block w-2 h-3.5 bg-[#2E5BFF] ml-0.5 align-middle animate-pulse" />
              </div>
            </motion.div>

            {/* Authentic Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="font-sans text-base sm:text-lg text-[#5E5C56] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              {profile.shortBio}
            </motion.p>

            {/* Primary Action Tactile Buttons with Motion Micro-Interactions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-9 w-full sm:w-auto"
            >
              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98, x: 2, y: 2 }}>
                <PixelButton
                  variant="primary"
                  size="md"
                  href="#web-projects"
                  onClick={(e) => handleScrollToSection(e, '#web-projects')}
                  className="gap-2.5"
                >
                  <HiCode className="w-4 h-4 flex-shrink-0" />
                  <span>Jelajahi Karya</span>
                  <HiArrowRight className="w-4 h-4 flex-shrink-0" />
                </PixelButton>
              </motion.div>

              <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98, x: 2, y: 2 }}>
                <PixelButton
                  variant="secondary"
                  size="md"
                  href="#about"
                  onClick={(e) => handleScrollToSection(e, '#about')}
                  className="gap-2"
                >
                  <span>Tentang Saya</span>
                  <HiArrowRight className="w-4 h-4 text-[#5E5C56] flex-shrink-0" />
                </PixelButton>
              </motion.div>
            </motion.div>

            {/* Social Channels Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex items-center gap-2.5 mb-9 text-[#1C1B19]"
            >
              <span className="font-mono text-xs font-bold text-[#5E5C56] uppercase tracking-wider pr-1">
                Kanal:
              </span>
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${profile.email}`}
                className="w-9 h-9 bg-[#FFFFFF] hover:bg-[#EFECE6] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center text-[#1C1B19] transition-colors"
                aria-label="Email"
                title={profile.email}
              >
                <HiOutlineMail className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#FFFFFF] hover:bg-[#1C1B19] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center text-[#1C1B19] transition-colors"
                aria-label="GitHub"
                title="GitHub"
              >
                <SiGithub className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#FFFFFF] hover:bg-[#0077B5] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center text-[#1C1B19] transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={profile.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#FFFFFF] hover:bg-[#E4405F] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center text-[#1C1B19] transition-colors"
                aria-label="Instagram"
                title="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={profile.socials.canva}
                className="w-9 h-9 bg-[#FFFFFF] hover:bg-[#00C4CC] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center text-[#1C1B19] transition-colors"
                aria-label="Canva"
                title="Canva"
              >
                <CanvaIcon size={16} />
              </motion.a>
            </motion.div>

            {/* Quick Stats Grid with Motion Stagger */}
            <div className="w-full pt-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 260,
                      damping: 26,
                      delay: 0.6 + i * 0.08,
                    }}
                    whileHover={{ y: -3 }}
                  >
                    <PixelCard
                      variant="white"
                      shadowSize="sm"
                      className="p-3 bg-white"
                    >
                      <span className="font-pixel text-2xl sm:text-3xl font-bold text-[#1C1B19] tracking-tight block">
                        <CountUpNumber end={stat.end} suffix={stat.suffix} />
                      </span>
                      <span className="font-mono text-[11px] font-medium text-[#5E5C56] uppercase tracking-tight">
                        {stat.label}
                      </span>
                    </PixelCard>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column (5 cols): Live Interactive Project Spotlight with Settle Re-entry */}
          <motion.div
            initial={{ opacity: 0.85, scale: 0.985, y: 14 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative w-full"
          >
            <HeroLiveProjectSpotlight projects={webProjects} />
          </motion.div>

        </div>

        {/* Subtle Visual Bridge / Scroll Down to About Section */}
        <div className="w-full flex justify-center mt-12 sm:mt-16">
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            href="#about"
            onClick={(e) => handleScrollToSection(e, '#about')}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFFFFF] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] hover:bg-[#EFECE6] font-pixel text-xs uppercase tracking-wider select-none cursor-pointer"
            aria-label="Gulir ke Tentang Saya"
          >
            <span className="text-[#1C1B19]">Eksplorasi Profil</span>
            <span className="font-mono text-[#2E5BFF] font-bold animate-bounce">↓</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
