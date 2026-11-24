import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutBentoSection from './components/sections/AboutBentoSection';
import WebProjectsSection from './components/sections/WebProjectsSection';
import DesignMasonrySection from './components/sections/DesignMasonrySection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import { LenisProvider } from './context/LenisContext';

export default function App() {
  // Global smooth scroll reveal for desktop, tablet, and mobile windows
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-init, .reveal-scale, [data-reveal]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <LenisProvider>
      <div className="min-h-screen bg-[#F7F6F2] text-[#1C1B19] flex flex-col font-sans selection:bg-[#2E5BFF]/20 selection:text-[#1C1B19]">
        {/* Floating Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <HeroSection />
          <AboutBentoSection />
          <WebProjectsSection />
          <DesignMasonrySection />
          <ExperienceSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LenisProvider>
  );
}
