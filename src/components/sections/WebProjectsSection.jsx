import { useState, useRef, useEffect } from 'react';
import { HiExternalLink, HiChevronLeft, HiChevronRight, HiOutlineLockClosed } from 'react-icons/hi';
import { SiVercel } from 'react-icons/si';
import portfolioData from '../../data/portfolio.json';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function WebProjectsSection() {
  const { webProjects } = portfolioData;
  const revealRef = useScrollReveal();
  const sliderRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Monitor scroll position to update active index & button states
  const checkScrollPosition = () => {
    const el = sliderRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const children = Array.from(el.children);
    if (children.length === 0) return;

    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      const distance = Math.abs(child.offsetLeft - el.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    checkScrollPosition();
    el.addEventListener('scroll', checkScrollPosition, { passive: true });
    window.addEventListener('resize', checkScrollPosition);

    return () => {
      el.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);

  const scroll = (direction) => {
    const el = sliderRef.current;
    if (!el) return;

    const card = el.children[0];
    const cardWidth = card ? card.offsetWidth + 24 : 400;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToIndex = (index) => {
    const el = sliderRef.current;
    if (!el || !el.children[index]) return;

    const target = el.children[index];
    const offset = target.offsetLeft - el.offsetLeft;
    el.scrollTo({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="web-projects" className="py-24 md:py-32 relative scroll-mt-28">
      <div 
        ref={revealRef} 
        className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full reveal-init"
      >
        
        {/* Section Header with Desktop Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#4A6B82] uppercase mb-2.5 inline-block">
              Bagian 1 • Rekayasa Web
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
              Karya Website Asli Buatan Saya
            </h2>
            <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
              Koleksi 3 proyek website fungsional yang telah aktif di-deploy di Vercel dengan arsitektur modern Next.js, TypeScript, database real-time Supabase, dan integrasi multi-API.
            </p>
          </div>

          {/* Desktop Controls (Counter + Prev/Next buttons) */}
          <div className="hidden md:flex items-center gap-4 self-end select-none">
            {/* Slide Counter */}
            <div className="text-xs font-semibold text-[#888888] bg-white px-4 py-2 rounded-full border border-[#EAEAEA] shadow-soft-sm whitespace-nowrap">
              <span className="text-[#1A1A1A] font-bold">0{activeIndex + 1}</span> / 0{webProjects.length}
            </div>

            {/* Prev Button */}
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? 'bg-white hover:bg-[#1A1A1A] hover:text-white border-neutral-300 text-[#1A1A1A] shadow-soft-sm hover:scale-105 active:scale-95'
                  : 'bg-white/60 border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40'
              }`}
              aria-label="Proyek Sebelumnya"
            >
              <HiChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? 'bg-white hover:bg-[#1A1A1A] hover:text-white border-neutral-300 text-[#1A1A1A] shadow-soft-sm hover:scale-105 active:scale-95'
                  : 'bg-white/60 border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40'
              }`}
              aria-label="Proyek Berikutnya"
            >
              <HiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= HORIZONTAL CAROUSEL SLIDER ================= */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-6 pt-2 px-1"
          >
            {webProjects.map((project, idx) => (
              <div
                key={project.id}
                className="w-[88vw] sm:w-[440px] md:w-[calc(50%-14px)] lg:w-[calc(33.333%-22px)] flex-shrink-0 snap-start"
              >
                <article className="group h-full flex flex-col justify-between bg-white rounded-3xl border border-[#EAEAEA] shadow-soft-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 overflow-hidden">
                  
                  {/* Minimalist Browser Mockup Frame */}
                  <div className="border-b border-[#EAEAEA] bg-[#F6F6F6] rounded-t-3xl overflow-hidden">
                    {/* Browser Control Bar */}
                    <div className="px-4 py-3 flex items-center justify-between border-b border-[#EAEAEA] bg-[#F0F0F0]/80">
                      {/* 3 macOS Window Dots */}
                      <div className="flex items-center gap-1.5 select-none">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/40 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/40 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/40 inline-block" />
                      </div>

                      {/* Small Address Bar with Lock and Vercel Domain */}
                      <div className="flex-1 max-w-[210px] mx-auto px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-[10px] sm:text-[11px] font-mono text-[#555555] flex items-center justify-center gap-1.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] truncate">
                        <HiOutlineLockClosed className="w-3 h-3 text-[#5C7A67] flex-shrink-0" />
                        <span className="truncate">{project.domain || project.liveUrl.replace('https://', '')}</span>
                      </div>

                      {/* Vercel Status Tag */}
                      <div className="flex items-center gap-1 text-[10px] font-semibold text-[#1A1A1A] select-none">
                        <SiVercel className="w-2.5 h-2.5" />
                        <span className="hidden sm:inline">Live</span>
                      </div>
                    </div>

                    {/* Browser Viewport with Real Screenshot & Fallback */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-[#EAEAEA]">
                      <img
                        src={project.mockupImage}
                        alt={`Screenshot live ${project.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 select-none"
                        onError={(e) => {
                          // Clean fallback placeholder if API screenshot is loading or offline
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#2B3A42] text-white p-6 text-center select-none">
                              <span class="text-xs font-bold uppercase tracking-wider text-[#61DAFB] mb-2">${project.category}</span>
                              <h4 class="text-2xl font-extrabold tracking-tight mb-2">${project.title}</h4>
                              <span class="text-xs font-mono text-neutral-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">${project.domain}</span>
                            </div>
                          `;
                        }}
                      />

                      {/* Hover Overlay with Quick Visit Action */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-semibold text-xs backdrop-blur-[2px]"
                        aria-label={`Buka website ${project.title}`}
                      >
                        <span className="px-5 py-2.5 rounded-full bg-white text-[#1A1A1A] font-bold shadow-lg flex items-center gap-2 hover:bg-neutral-100 transition-colors">
                          <span>Kunjungi Website</span>
                          <HiExternalLink className="w-4 h-4 text-[#4A6B82]" />
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Card Content Area (Uniform height layout) */}
                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category Tag */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold text-[#4A6B82] uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-bold text-[#888888]">
                          #0{idx + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-3 group-hover:text-[#4A6B82] transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-[#666666] leading-relaxed mb-6 font-normal">
                        {project.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech, techIdx) => {
                          const isCore = ['TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'].includes(tech);
                          return (
                            <span
                              key={techIdx}
                              className={`px-2.5 py-1 text-[11px] rounded-md whitespace-nowrap transition-colors ${
                                isCore
                                  ? 'bg-[#EBF1F5] text-[#2C4A5E] border border-[#D5E2EC] font-semibold'
                                  : 'bg-[#FAFAFA] text-[#666666] border border-[#EAEAEA] font-medium'
                              }`}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Action Button: Direct Live Website Link */}
                    <div className="pt-5 border-t border-[#EAEAEA] flex items-center justify-between">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1A1A1A] text-white hover:bg-[#333333] text-xs font-semibold shadow-soft-sm hover:shadow-soft-md transition-all duration-200 active:scale-95 whitespace-nowrap"
                      >
                        <span>Kunjungi Website ({project.title})</span>
                        <HiExternalLink className="w-3.5 h-3.5 flex-shrink-0 text-[#61DAFB]" />
                      </a>
                    </div>

                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* ================= PAGINATION & MOBILE CONTROLS ================= */}
        <div className="flex items-center justify-between sm:justify-center gap-4 mt-8 pt-2 select-none">
          
          {/* Mobile Prev Button */}
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`md:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              canScrollLeft
                ? 'bg-white hover:bg-[#1A1A1A] hover:text-white border-neutral-300 text-[#1A1A1A] shadow-soft-sm active:scale-95'
                : 'bg-white/60 border-neutral-200 text-neutral-300 opacity-40 cursor-not-allowed'
            }`}
            aria-label="Proyek Sebelumnya"
          >
            <HiChevronLeft className="w-4 h-4" />
          </button>

          {/* Dynamic Pagination Indicator Dots */}
          <div className="flex items-center justify-center gap-2">
            {webProjects.map((_, dotIdx) => {
              const isActive = activeIndex === dotIdx;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-8 bg-[#4A6B82]'
                      : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Buka slide proyek ${dotIdx + 1}`}
                />
              );
            })}
          </div>

          {/* Mobile Next Button */}
          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`md:hidden w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              canScrollRight
                ? 'bg-white hover:bg-[#1A1A1A] hover:text-white border-neutral-300 text-[#1A1A1A] shadow-soft-sm active:scale-95'
                : 'bg-white/60 border-neutral-200 text-neutral-300 opacity-40 cursor-not-allowed'
            }`}
            aria-label="Proyek Berikutnya"
          >
            <HiChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
