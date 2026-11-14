import { useState, useEffect } from 'react';
import { HiArrowRight, HiCode, HiOutlineMail } from 'react-icons/hi';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { CanvaIcon } from '../ui/Icons';
import CharacterPhoto from '../ui/CharacterPhoto';
import portfolioData from '../../data/portfolio.json';
import useScrollReveal from '../../hooks/useScrollReveal';

// Dynamic role titles for typewriter effect
const ROLES = [
  'Web Developer & Creative Designer',
  'Front-End Web Developer',
  'Canva Graphic Designer',
  'Video Editor & Videographer'
];

/**
 * Animated number counter with smooth easeOutExpo curve
 */
function CountUpNumber({ end = 0, suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Snappy easeOutExpo
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
  const revealRef = useScrollReveal();

  // Typewriter animation state for Role Title
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  useEffect(() => {
    const fullText = ROLES[roleIndex % ROLES.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80);

        if (currentText.length + 1 === fullText.length) {
          // Pause 2.2s after completing the full title
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(35);

        if (currentText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => prev + 1);
          setTypingSpeed(250);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  // Dynamic stats bound directly to data lengths
  const stats = [
    { label: 'Tahun Eksplorasi', end: 2, suffix: '+' },
    { label: 'Proyek Web Live', end: webProjects.length, suffix: '' },
    { label: 'Karya Desain Canva', end: designProjects.length, suffix: '+' },
    { label: 'Dedikasi Belajar', end: 100, suffix: '%' },
  ];

  // Silky smooth scroll with dynamic navbar offset
  const handleScrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navOffset = window.innerWidth < 768 ? 76 : 96;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden scroll-mt-32"
    >
      {/* Background radial gradient accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#4A6B82]/8 via-[#5C7A67]/6 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      {/* Main Wide Container (max-w-[1380px]) */}
      <div 
        ref={revealRef} 
        className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full reveal-init"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols on lg): Typography, CTAs, & Stats */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1A1A1A] tracking-tight leading-[1.08] mb-4">
              {profile.name}
            </h1>

            {/* Role Sub-heading with Typing Effect */}
            <div className="inline-flex items-center min-h-[38px] sm:min-h-[44px] mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#4A6B82] via-[#2F4A5C] to-[#5C7A67] bg-clip-text text-transparent tracking-tight">
                {currentText}
              </span>
              <span className="inline-block w-[3px] h-6 sm:h-8 bg-[#4A6B82] ml-1.5 rounded-full animate-pulse align-middle" />
            </div>

            {/* Sub-headline / Short Bio */}
            <p className="text-base sm:text-lg text-[#666666] leading-relaxed max-w-2xl mb-9 font-normal">
              {profile.shortBio}
            </p>

            {/* Primary Action Buttons with Sliding Arrow Micro-Interaction */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#web-projects"
                onClick={(e) => handleScrollToSection(e, '#web-projects')}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#1A1A1A] text-white hover:bg-[#333333] font-semibold text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.18)] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
              >
                <HiCode className="w-4 h-4 text-[#61DAFB] flex-shrink-0" />
                <span>Jelajahi Karya</span>
                <HiArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
              </a>

              <a
                href="#about"
                onClick={(e) => handleScrollToSection(e, '#about')}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-[#1A1A1A] border border-neutral-200/90 hover:border-[#4A6B82] hover:bg-[#F9F9F9] font-semibold text-sm transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
              >
                <span>Tentang Saya</span>
                <HiArrowRight className="w-4 h-4 text-[#666666] group-hover:text-[#4A6B82] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
              </a>
            </div>

            {/* Social Quick Connect */}
            <div className="flex items-center gap-3 mb-10 text-[#666666]">
              <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider pr-1">
                Kanal:
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="p-2.5 rounded-full bg-white hover:bg-neutral-100 text-[#1A1A1A] border border-neutral-200/80 shadow-sm hover:shadow transition-all"
                aria-label="Kirim Email Langsung"
                title={profile.email}
              >
                <HiOutlineMail className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-neutral-100 text-[#1A1A1A] border border-neutral-200/80 shadow-sm hover:shadow transition-all"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <SiGithub className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-neutral-100 text-[#0077B5] border border-neutral-200/80 shadow-sm hover:shadow transition-all"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white hover:bg-neutral-100 text-[#E4405F] border border-neutral-200/80 shadow-sm hover:shadow transition-all"
                aria-label="Instagram Profile"
                title="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.canva}
                className="p-2.5 rounded-full bg-white hover:bg-neutral-100 text-[#00C4CC] border border-neutral-200/80 shadow-sm hover:shadow transition-all"
                aria-label="Canva Email"
                title="Email Desain Canva"
              >
                <CanvaIcon size={16} />
              </a>
            </div>

            {/* Quick Stats Bar with Smooth Count Up Animation */}
            <div className="w-full pt-6 border-t border-neutral-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center lg:text-left">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
                      <CountUpNumber end={stat.end} suffix={stat.suffix} />
                    </span>
                    <span className="text-xs font-medium text-[#777777] tracking-tight">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols on lg): Character Photo with Interactive 3D Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <CharacterPhoto size="large" />
          </div>

        </div>

        {/* Subtle Visual Bridge / Scroll Down to About Section */}
        <div className="w-full flex justify-center mt-12 sm:mt-16 pt-2">
          <a
            href="#about"
            onClick={(e) => handleScrollToSection(e, '#about')}
            className="group inline-flex flex-col items-center gap-2 text-xs font-medium text-neutral-400 hover:text-neutral-900 transition-colors cursor-pointer select-none"
            aria-label="Gulir ke Tentang Saya"
          >
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-400 group-hover:text-neutral-900 transition-colors">
              Eksplorasi Profil
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-neutral-300 group-hover:border-neutral-900 flex items-start justify-center p-1 transition-all duration-300 group-hover:translate-y-0.5">
              <div className="w-1.5 h-2 rounded-full bg-neutral-400 group-hover:bg-neutral-900 animate-bounce transition-colors" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
