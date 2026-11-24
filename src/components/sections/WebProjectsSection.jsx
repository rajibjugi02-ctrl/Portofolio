import { useState, useRef, useEffect } from 'react';
import { 
  HiChevronLeft, 
  HiChevronRight, 
  HiOutlineLockClosed, 
  HiExternalLink,
  HiOutlineDocumentText
} from 'react-icons/hi';
import { SiVercel } from 'react-icons/si';
import { motion } from 'motion/react';
import PixelButton from '../ui/PixelButton';
import PixelBadge from '../ui/PixelBadge';
import PixelCard from '../ui/PixelCard';
import SplitTextReveal from '../ui/SplitTextReveal';
import MorphSkeletonImage from '../ui/MorphSkeletonImage';
import ProjectDetailModal from '../ui/ProjectDetailModal';
import { IsometricWindow } from '../ui/PixelIsometricIcons';
import portfolioData from '../../data/portfolio.json';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function WebProjectsSection() {
  const { webProjects } = portfolioData;
  const sliderRef = useRef(null);
  const revealRef = useScrollReveal();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

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
    <section id="web-projects" className="py-20 md:py-28 relative scroll-mt-28">
      <div 
        ref={revealRef} 
        className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full reveal-init"
      >
        
        {/* Section Header with Desktop Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <IsometricWindow size={20} />
              <span className="font-pixel text-xs font-bold tracking-widest text-[#2E5BFF] uppercase">
                BAGIAN 1 • REKAYASA WEB
              </span>
            </div>
            
            <SplitTextReveal
              text="Karya Website Asli Buatan Saya"
              as="h2"
              className="font-pixel text-3xl sm:text-5xl font-bold text-[#1C1B19] tracking-tight mb-4 uppercase"
            />

            <p className="font-sans text-[#5E5C56] text-base sm:text-lg leading-relaxed">
              Koleksi {webProjects.length} proyek website fungsional yang telah aktif di-deploy di Vercel dengan arsitektur modern Next.js, TypeScript, database real-time Supabase, dan integrasi multi-API.
            </p>
          </div>

          {/* Desktop Controls (Counter + Tactile Prev/Next buttons) */}
          <div className="hidden md:flex items-center gap-3 self-end select-none">
            {/* Slide Counter */}
            <div className="font-mono text-xs font-bold text-[#1C1B19] bg-[#FFFFFF] px-3.5 py-2 border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] whitespace-nowrap">
              <span>PROYEK 0{activeIndex + 1}</span> / 0{webProjects.length}
            </div>

            {/* Prev Button */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 border-2 border-[#1C1B19] flex items-center justify-center transition-all duration-100 ${
                canScrollLeft
                  ? 'bg-white hover:bg-[#EFECE6] text-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none'
                  : 'bg-[#EFECE6] text-[#A8A49C] border-[#A8A49C] cursor-not-allowed opacity-50'
              }`}
              aria-label="Proyek Sebelumnya"
            >
              <HiChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 border-2 border-[#1C1B19] flex items-center justify-center transition-all duration-100 ${
                canScrollRight
                  ? 'bg-white hover:bg-[#EFECE6] text-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none'
                  : 'bg-[#EFECE6] text-[#A8A49C] border-[#A8A49C] cursor-not-allowed opacity-50'
              }`}
              aria-label="Proyek Berikutnya"
            >
              <HiChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* ================= HORIZONTAL CAROUSEL SLIDER ================= */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-6 pt-2 px-1"
          >
            {webProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="w-[88vw] sm:w-[440px] md:w-[calc(50%-14px)] lg:w-[calc(33.333%-22px)] flex-shrink-0 snap-start"
              >
                <PixelCard
                  variant="white"
                  shadowSize="normal"
                  className="group h-full flex flex-col justify-between overflow-hidden"
                >
                  {/* Pixel Browser Mockup Frame Header */}
                  <div className="border-b-2 border-[#1C1B19] bg-[#EFECE6] overflow-hidden">
                    {/* Browser Control Bar */}
                    <div className="px-3 py-2 flex items-center justify-between border-b-2 border-[#1C1B19] bg-[#FFFFFF]">
                      {/* 3 Pixel Window Dots */}
                      <div className="flex items-center gap-1.5 select-none">
                        <span className="w-2.5 h-2.5 bg-[#D95D39] border border-[#1C1B19]" />
                        <span className="w-2.5 h-2.5 bg-[#E2B734] border border-[#1C1B19]" />
                        <span className="w-2.5 h-2.5 bg-[#3D7A5A] border border-[#1C1B19]" />
                      </div>

                      {/* Address Bar with Lock and Vercel Domain */}
                      <div className="flex-1 max-w-[210px] mx-auto px-2 py-0.5 bg-[#F7F6F2] border border-[#1C1B19] text-[10px] font-mono text-[#1C1B19] flex items-center justify-center gap-1 truncate shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
                        <HiOutlineLockClosed className="w-2.5 h-2.5 text-[#3D7A5A] flex-shrink-0" />
                        <span className="truncate">{project.domain || project.liveUrl.replace('https://', '')}</span>
                      </div>

                      {/* Vercel Status Tag */}
                      <div className="flex items-center gap-1 font-mono text-[9px] font-bold text-[#1C1B19] uppercase select-none">
                        <SiVercel className="w-2.5 h-2.5" />
                        <span className="hidden sm:inline">LIVE</span>
                      </div>
                    </div>

                    {/* Browser Viewport with Bar Morph Skeleton Loading */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-[#E2DDD4]">
                      <MorphSkeletonImage
                        src={project.mockupImage}
                        alt={`Screenshot live ${project.title}`}
                        className="w-full h-full"
                        imgClassName="transition-transform duration-300 group-hover:scale-[1.03]"
                        fallbackTitle={project.title}
                        fallbackCategory={project.category}
                        fallbackDomain={project.domain}
                      />

                      {/* Hover Overlay with Quick Visit Action */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-[#1C1B19]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 z-20"
                        aria-label={`Buka website ${project.title}`}
                      >
                        <span className="px-4 py-2 bg-[#FFFFFF] text-[#1C1B19] font-pixel text-xs uppercase font-bold border-2 border-[#1C1B19] shadow-[3px_3px_0px_0px_#1C1B19] flex items-center gap-1.5 hover:bg-[#2E5BFF] hover:text-white transition-colors">
                          <span>Kunjungi Website</span>
                          <HiExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category Tag */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-[10px] font-bold text-[#2E5BFF] uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="font-mono text-[10px] font-bold text-[#5E5C56]">
                          #0{idx + 1}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-pixel text-xl sm:text-2xl font-bold text-[#1C1B19] tracking-tight mb-3 group-hover:text-[#2E5BFF] transition-colors uppercase">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-sm text-[#5E5C56] leading-relaxed mb-5 font-normal">
                        {project.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.map((tech, techIdx) => {
                          const isCore = ['TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'].includes(tech);
                          return (
                            <PixelBadge
                              key={techIdx}
                              variant={isCore ? 'cobalt' : 'stone'}
                              size="sm"
                            >
                              {tech}
                            </PixelBadge>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom CTA Row with Case Study Modal Trigger */}
                    <div className="pt-4 border-t-2 border-[#1C1B19] flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 font-pixel text-xs font-bold uppercase text-[#1C1B19] hover:text-[#2E5BFF] transition-colors"
                      >
                        <HiOutlineDocumentText className="w-4 h-4 text-[#2E5BFF]" />
                        <span>Studi Kasus</span>
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 bg-[#1C1B19] text-white hover:bg-[#2E5BFF] border border-[#1C1B19] font-pixel text-[11px] font-bold uppercase transition-colors"
                      >
                        <span>Demo Live</span>
                        <HiExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Slide Controls */}
        <div className="flex md:hidden items-center justify-between mt-4 px-2 select-none">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`px-3 py-1.5 border-2 border-[#1C1B19] font-pixel text-xs uppercase font-bold flex items-center gap-1 ${
              canScrollLeft
                ? 'bg-white text-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] active:translate-x-[1px] active:translate-y-[1px]'
                : 'bg-[#EFECE6] text-[#A8A49C] border-[#A8A49C] opacity-50'
            }`}
          >
            <HiChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          <span className="font-mono text-xs font-bold text-[#1C1B19]">
            0{activeIndex + 1} / 0{webProjects.length}
          </span>

          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`px-3 py-1.5 border-2 border-[#1C1B19] font-pixel text-xs uppercase font-bold flex items-center gap-1 ${
              canScrollRight
                ? 'bg-white text-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] active:translate-x-[1px] active:translate-y-[1px]'
                : 'bg-[#EFECE6] text-[#A8A49C] border-[#A8A49C] opacity-50'
            }`}
          >
            <span>Next</span>
            <HiChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Project Case Study Drawer Modal */}
        <ProjectDetailModal
          isOpen={!!selectedProject}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
