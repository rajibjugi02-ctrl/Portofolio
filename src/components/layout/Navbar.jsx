import { useState, useEffect } from 'react';
import { 
  HiMenuAlt3, 
  HiX, 
  HiArrowSmRight, 
  HiChevronRight, 
  HiOutlineMail 
} from 'react-icons/hi';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import portfolioData from '../../data/portfolio.json';

const NAV_ITEMS = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang Saya', href: '#about' },
  { label: 'Proyek Web', href: '#web-projects' },
  { label: 'Desain Canva', href: '#design-showcase' },
  { label: 'Pengalaman', href: '#experience' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { profile } = portfolioData;

  // Active section detection with balanced threshold
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

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

  // Silky smooth scroll with dynamic navbar offset
  const scrollToTarget = (href) => {
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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(href.replace('#', ''));
    scrollToTarget(href);
  };

  // Close mobile menu on Escape key
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
      {/* ================= DESKTOP FLOATING PILL NAVBAR ================= */}
      <header className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-fit transition-all duration-300 pointer-events-auto">
        <nav
          className={`flex items-center gap-6 px-5 py-2.5 rounded-full bg-white/85 backdrop-blur-xl border border-neutral-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 ${
            scrolled ? 'bg-white/95 shadow-[0_12px_36px_rgb(0,0,0,0.09)] border-neutral-300/90' : ''
          }`}
          aria-label="Navigasi Utama"
        >
          {/* Logo / Brand Name - Strict single line */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2.5 text-[#1A1A1A] font-bold tracking-tight text-sm pr-3 border-r border-[#EAEAEA] whitespace-nowrap select-none"
          >
            <span className="w-7 h-7 rounded-full bg-[#4A6B82] text-white flex items-center justify-center text-xs font-bold shadow-sm transition-transform group-hover:scale-105 flex-shrink-0">
              RZ
            </span>
            <span className="group-hover:text-[#4A6B82] transition-colors whitespace-nowrap">
              Rajib Zahir
            </span>
          </a>

          {/* Navigation Links with Smooth Active Pill Transition */}
          <ul className="flex items-center gap-1 list-none m-0 p-0 whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.href} className="inline-block whitespace-nowrap">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`inline-block px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? 'bg-[#1A1A1A] text-white shadow-sm font-semibold scale-100'
                        : 'text-[#666666] hover:text-[#1A1A1A] hover:bg-neutral-100 font-medium'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Contact CTA */}
          <div className="pl-3 border-l border-[#EAEAEA] flex items-center whitespace-nowrap">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#4A6B82] hover:bg-[#3D586C] whitespace-nowrap transition-all duration-200 shadow-sm active:scale-95 group"
            >
              <span>Hubungi</span>
              <HiArrowSmRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE FLOATING NAVBAR & ENHANCED POPOVER ================= */}
      {/* Dimmed Blur Backdrop for Mobile Menu (Tap outside to close) */}
      <div
        className={`fixed inset-0 bg-neutral-950/35 backdrop-blur-sm z-40 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div className="md:hidden fixed top-4 right-4 left-4 z-50 flex flex-col pointer-events-none">
        {/* Floating Top Capsule Bar */}
        <div className="w-full flex items-center justify-between pointer-events-auto px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-xl border border-neutral-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 text-xs font-bold text-[#1A1A1A] whitespace-nowrap select-none"
          >
            <span className="w-6 h-6 rounded-full bg-[#4A6B82] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 shadow-sm">
              RZ
            </span>
            <span className="whitespace-nowrap">Rajib Zahir</span>
          </a>

          {/* Animated Toggle Hamburger / Close Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 ${
              mobileMenuOpen
                ? 'bg-neutral-900 text-white rotate-90 shadow-md'
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rotate-0'
            }`}
            aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
          >
            {mobileMenuOpen ? <HiX className="w-4 h-4" /> : <HiMenuAlt3 className="w-4 h-4" />}
          </button>
        </div>

        {/* Floating Mobile Popover Menu Card with Smooth Spring Transitions */}
        <div
          className={`w-full mt-2.5 p-3.5 sm:p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-neutral-200/90 shadow-[0_24px_60px_rgba(0,0,0,0.15)] pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-top select-none ${
            mobileMenuOpen
              ? 'opacity-100 translate-y-0 scale-100 visible'
              : 'opacity-0 -translate-y-3 scale-95 invisible pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 30}ms` : '0ms'
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium whitespace-nowrap transition-all duration-200 active:scale-[0.98] ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white font-semibold shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/80 active:bg-neutral-100'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {isActive ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 animate-pulse" />
                  ) : (
                    <HiChevronRight className="w-4 h-4 text-neutral-300" />
                  )}
                </a>
              );
            })}

            {/* Bottom Actions & Contact CTA */}
            <div className="pt-2.5 mt-1 border-t border-neutral-100 flex flex-col gap-2.5">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3.5 px-4 rounded-2xl text-sm font-semibold text-white bg-[#4A6B82] hover:bg-[#3D586C] shadow-sm active:scale-[0.98] transition-all whitespace-nowrap flex items-center justify-center gap-2 group"
              >
                <span>Hubungi Sekarang</span>
                <HiArrowSmRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>

              {/* Quick Social Icons Row */}
              <div className="flex items-center justify-center gap-3 pt-1 text-neutral-500">
                <a
                  href={`mailto:${profile?.email || 'rajibjugi02@gmail.com'}`}
                  className="p-2 rounded-full hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                  aria-label="Email"
                  title="Email"
                >
                  <HiOutlineMail className="w-4 h-4" />
                </a>
                <a
                  href={profile?.socials?.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-neutral-100 hover:text-neutral-900 transition-colors"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <SiGithub className="w-4 h-4" />
                </a>
                <a
                  href={profile?.socials?.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-neutral-100 hover:text-[#0077B5] transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href={profile?.socials?.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-neutral-100 hover:text-[#E4405F] transition-colors"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <SiInstagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
