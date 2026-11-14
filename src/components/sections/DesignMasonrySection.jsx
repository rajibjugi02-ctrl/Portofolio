import { useState } from 'react';
import { CanvaIcon } from '../ui/Icons';
import { HiOutlineCursorClick } from 'react-icons/hi';
import Masonry from '../ui/Masonry/Masonry';
import DepthCarousel from '../ui/DepthCarousel';
import DesignLightboxModal from '../ui/DesignLightboxModal';
import portfolioData from '../../data/portfolio.json';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function DesignMasonrySection() {
  const { designProjects } = portfolioData;
  const revealRef = useScrollReveal();
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(null);

  const handleOpenLightbox = (index) => {
    setSelectedDesignIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedDesignIndex(null);
  };

  return (
    <section id="design-showcase" className="py-24 md:py-32 relative bg-[#F4F4F4]/60 border-y border-[#EAEAEA] scroll-mt-28">
      <div
        ref={revealRef}
        className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full reveal-init"
      >

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#00C4CC] uppercase mb-2.5">
              <CanvaIcon size={14} className="text-[#00C4CC]" />
              <span>Bagian 2 • Desain Grafis & Canva</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
              Galeri Eksplorasi Desain Visual
            </h2>
            <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
              Karya komunikasi visual berbasis Canva dengan penekanan pada estetika editorial, hierarki tipografi yang tegas, serta penyampaian pesan yang berkarakter.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#666666] bg-white px-4 py-2 rounded-full border border-[#EAEAEA] shadow-soft-sm self-start md:self-auto whitespace-nowrap">
            <HiOutlineCursorClick className="w-4 h-4 text-[#4A6B82]" />
            <span className="hidden sm:inline">Klik kartu untuk Lightbox Zoom</span>
            <span className="inline sm:hidden">Geser kartu / Ketuk untuk Zoom</span>
          </div>
        </div>

        {/* Desktop View: Masonry Grid delegating click to custom Lightbox */}
        <div className="hidden md:block min-h-[500px]">
          <Masonry
            items={designProjects}
            columnWidth={280}
            gap={16}
            radius={12}
            animateFrom="bottom"
            stagger={0.06}
            blurToFocus={true}
            revealOnScroll={true}
            hoverEffect="zoom"
            captions="hover"
            lightbox={false}
            onItemClick={(item) => {
              const idx = designProjects.findIndex((p) => p.id === item.id);
              handleOpenLightbox(idx !== -1 ? idx : 0);
            }}
            draggable={false}
          />
        </div>

        {/* Mobile View: 3D Depth Carousel (Coverflow Style) */}
        <div className="block md:hidden">
          <DepthCarousel 
            items={designProjects} 
            onOpenLightbox={(idx) => handleOpenLightbox(idx)}
          />
        </div>

        {/* Unified Revamped Lightbox Modal for Desktop & Mobile */}
        <DesignLightboxModal
          isOpen={selectedDesignIndex !== null}
          initialIndex={selectedDesignIndex ?? 0}
          items={designProjects}
          onClose={handleCloseLightbox}
        />

      </div>
    </section>
  );
}
