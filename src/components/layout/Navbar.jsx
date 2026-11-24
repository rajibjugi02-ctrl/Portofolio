import { useState, useEffect } from 'react';
import { 
  HiArrowSmRight, 
  HiChevronRight, 
  HiOutlineMail 
} from 'react-icons/hi';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'motion/react';
import { useLenis } from '../../context/LenisContext';
import portfolioData from '../../data/portfolio.json';

const NAV_ITEMS = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Proyek Web', href: '#web-projects' },
  { label: 'Desain Canva', href: '#design-showcase' },
  { label: 'Pengalaman', href: '#experience' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { profile } = portfolioData;
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'web-projects', 'design-showcase', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTarget = (href) => {
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
    if (!target) return;

    const navOffset = window.innerWidth < 768 ? -76 : -96;

    if (lenis) {
      lenis.scrollTo(target, { offset: navOffset, duration: 1.15 });
    } else {
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(href.replace('#', ''));
    scrollToTarget(href);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ================= DESKTOP PIXEL FLOATING NAVBAR ================= */}
      <header className="hidden md:block fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto max-w-fit transition-all duration-200 pointer-events-auto">
        <nav
          className={`flex items-center gap-5 border-2 border-[#1C1B19] rounded-none transition-all duration-300 ease-out ${
            scrolled
              ? 'px-4 py-2 bg-[#FFFFFF] shadow-[5px_5px_0px_0px_#1C1B19]'
              : 'px-5 py-2.5 bg-[#FFFFFF] shadow-[3px_3px_0px_0px_#1C1B19]'
          }`}
          aria-label="Navigasi Utama"
        >
          {/* Logo / Brand Name Pixel */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 text-[#1C1B19] font-pixel text-base font-bold pr-3 border-r-2 border-[#1C1B19] whitespace-nowrap select-none"
          >
            <span className="w-6 h-6 bg-[#2E5BFF] text-white border border-[#1C1B19] flex items-center justify-center text-xs font-mono font-bold shadow-[2px_2px_0px_0px_#1C1B19] transition-transform group-hover:-translate-y-0.5">
              RZ
            </span>
            <span className="group-hover:text-[#2E5BFF] transition-colors tracking-wide">
              Rajib Zahir
            </span>
          </a>

          {/* Navigation Links with Motion Sliding Pill Indicator */}
          <ul className="flex items-center gap-1 list-none m-0 p-0 whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.href} className="relative inline-block whitespace-nowrap">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative z-10 inline-block px-3 py-1 font-pixel text-xs tracking-wider uppercase transition-colors duration-150 ${
                      isActive
                        ? 'text-white font-bold'
                        : 'text-[#5E5C56] hover:text-[#1C1B19]'
                    }`}
                  >
                    {item.label}
                  </a>

                  {/* Physics-Based Sliding Active Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#1C1B19] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#2E5BFF] z-0 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Contact CTA Tactile Button */}
          <div className="pl-3 border-l-2 border-[#1C1B19] flex items-center whitespace-nowrap">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 font-pixel text-xs font-bold uppercase tracking-wider text-white bg-[#2E5BFF] hover:bg-[#1B47EB] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
            >
              <span>Hubungi</span>
              <HiArrowSmRight className="w-3.5 h-3.5 flex-shrink-0" />
            </a>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE FLOATING NAVBAR ================= */}
      {/* Dimmed Backdrop with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#1C1B19]/50 backdrop-blur-[2px] z-40 md:hidden pointer-events-auto"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="md:hidden fixed top-3 right-3 left-3 z-50 flex flex-col pointer-events-none">
        {/* Floating Top Bar */}
        <div className="w-full flex items-center justify-between pointer-events-auto px-3.5 py-2 bg-[#FFFFFF] border-2 border-[#1C1B19] shadow-[4px_4px_0px_0px_#1C1B19] rounded-none">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 font-pixel text-sm font-bold text-[#1C1B19] whitespace-nowrap select-none"
          >
            <span className="w-6 h-6 bg-[#2E5BFF] text-white border border-[#1C1B19] flex items-center justify-center text-[10px] font-mono font-bold shadow-[1px_1px_0px_0px_#1C1B19]">
              RZ
            </span>
            <span className="tracking-wide">Rajib Zahir</span>
          </a>

          {/* Animated Hamburger Morph Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 border-2 border-[#1C1B19] bg-[#FFFFFF] shadow-[2px_2px_0px_0px_#1C1B19] flex flex-col items-center justify-center gap-1 p-1 transition-colors active:translate-x-[1px] active:translate-y-[1px]"
            aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="w-4 h-0.5 bg-[#1C1B19] block origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="w-4 h-0.5 bg-[#1C1B19] block origin-center"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -5.5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="w-4 h-0.5 bg-[#1C1B19] block origin-center"
            />
          </button>
        </div>

        {/* Floating Mobile Popover Menu Card with AnimatePresence Spring Morph */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="w-full mt-2 p-3.5 bg-[#FFFFFF] border-2 border-[#1C1B19] shadow-[6px_6px_0px_0px_#1C1B19] rounded-none pointer-events-auto origin-top select-none"
            >
              <div className="flex flex-col gap-1.5">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-3.5 py-2.5 font-pixel text-xs tracking-wider uppercase border-2 transition-all duration-100 ${
                        isActive
                          ? 'bg-[#1C1B19] text-white border-[#1C1B19] shadow-[2px_2px_0px_0px_#2E5BFF]'
                          : 'border-[#1C1B19] text-[#1C1B19] bg-[#F7F6F2] hover:bg-[#EFECE6]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive ? (
                        <span className="w-2 h-2 bg-[#2E5BFF] border border-white" />
                      ) : (
                        <HiChevronRight className="w-4 h-4 text-[#5E5C56]" />
                      )}
                    </a>
                  );
                })}

                {/* Bottom Actions */}
                <div className="pt-2 mt-1 border-t-2 border-[#1C1B19] flex flex-col gap-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full text-center py-2.5 px-4 font-pixel text-xs font-bold uppercase tracking-wider text-white bg-[#2E5BFF] hover:bg-[#1B47EB] border-2 border-[#1C1B19] shadow-[3px_3px_0px_0px_#1C1B19] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2"
                  >
                    <span>Hubungi Sekarang</span>
                    <HiArrowSmRight className="w-4 h-4" />
                  </a>

                  {/* Social Icons Row */}
                  <div className="flex items-center justify-center gap-2 pt-1 text-[#1C1B19]">
                    <a
                      href={`mailto:${profile?.email || 'rajibjugi02@gmail.com'}`}
                      className="p-1.5 border border-[#1C1B19] bg-[#EFECE6] hover:bg-[#2E5BFF] hover:text-white transition-colors shadow-[1px_1px_0px_0px_#1C1B19]"
                      aria-label="Email"
                    >
                      <HiOutlineMail className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={profile?.socials?.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 border border-[#1C1B19] bg-[#EFECE6] hover:bg-[#1C1B19] hover:text-white transition-colors shadow-[1px_1px_0px_0px_#1C1B19]"
                      aria-label="GitHub"
                    >
                      <SiGithub className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={profile?.socials?.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 border border-[#1C1B19] bg-[#EFECE6] hover:bg-[#0077B5] hover:text-white transition-colors shadow-[1px_1px_0px_0px_#1C1B19]"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={profile?.socials?.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 border border-[#1C1B19] bg-[#EFECE6] hover:bg-[#E4405F] hover:text-white transition-colors shadow-[1px_1px_0px_0px_#1C1B19]"
                      aria-label="Instagram"
                    >
                      <SiInstagram className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
