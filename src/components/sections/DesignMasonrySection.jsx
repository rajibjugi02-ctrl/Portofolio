import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { CanvaIcon } from '../ui/Icons';
import { HiOutlineCursorClick, HiOutlineFilter } from 'react-icons/hi';
import Masonry from '../ui/Masonry/Masonry';
import DepthCarousel from '../ui/DepthCarousel';
import DesignLightboxModal from '../ui/DesignLightboxModal';
import PixelBadge from '../ui/PixelBadge';
import SplitTextReveal from '../ui/SplitTextReveal';
import { IsometricFolder } from '../ui/PixelIsometricIcons';
import portfolioData from '../../data/portfolio.json';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function DesignMasonrySection() {
  const { designProjects } = portfolioData;
  const revealRef = useScrollReveal();
  const [selectedDesignIndex, setSelectedDesignIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { key: 'all', label: 'Semua Karya', count: designProjects.length },
    {
      key: 'poster',
      label: 'Poster Event OSIS',
      count: designProjects.filter((p) => p.category.includes('Poster')).length
    },
    {
      key: 'social',
      label: 'Media Sosial & Feed',
      count: designProjects.filter(
        (p) => p.category.includes('Feed') || p.category.includes('Brosur')
      ).length
    },
    {
      key: 'photo',
      label: 'Foto & Dokumentasi',
      count: designProjects.filter(
        (p) =>
          p.category.includes('Fotografi') || p.category.includes('Dokumentasi')
      ).length
    }
  ];

  const filteredDesigns = useMemo(() => {
    if (activeFilter === 'poster') {
      return designProjects.filter((p) => p.category.includes('Poster'));
    }
    if (activeFilter === 'social') {
      return designProjects.filter(
        (p) => p.category.includes('Feed') || p.category.includes('Brosur')
      );
    }
    if (activeFilter === 'photo') {
      return designProjects.filter(
        (p) =>
          p.category.includes('Fotografi') || p.category.includes('Dokumentasi')
      );
    }
    return designProjects;
  }, [activeFilter, designProjects]);

  const handleOpenLightbox = (index) => {
    setSelectedDesignIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedDesignIndex(null);
  };

  return (
    <section id="design-showcase" className="py-20 md:py-28 relative bg-[#EFECE6]/40 border-y-2 border-[#1C1B19] scroll-mt-28">
      <div
        ref={revealRef}
        className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full reveal-init"
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2.5">
              <IsometricFolder size={20} />
              <span className="font-pixel text-xs font-bold tracking-widest text-[#2E5BFF] uppercase">
                BAGIAN 2 • DESAIN GRAFIS & CANVA
              </span>
            </div>
            
            <SplitTextReveal
              text="Galeri Eksplorasi Desain Visual"
              as="h2"
              className="font-pixel text-3xl sm:text-5xl font-bold text-[#1C1B19] tracking-tight mb-4 uppercase"
            />

            <p className="font-sans text-[#5E5C56] text-base sm:text-lg leading-relaxed">
              Karya komunikasi visual berbasis Canva dengan penekanan pada estetika editorial, hierarki tipografi yang tegas, serta penyampaian pesan yang berkarakter.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#1C1B19] bg-white px-3.5 py-2 border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] self-start md:self-auto whitespace-nowrap">
            <HiOutlineCursorClick className="w-4 h-4 text-[#2E5BFF]" />
            <span className="hidden sm:inline">KLIK FOTO UNTUK ZOOM</span>
            <span className="inline sm:hidden">KETUK UNTUK ZOOM</span>
          </div>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 select-none">
          <span className="font-mono text-xs font-bold text-[#5E5C56] uppercase mr-1 flex items-center gap-1.5">
            <HiOutlineFilter className="w-3.5 h-3.5 text-[#2E5BFF]" />
            <span>Filter Kategori:</span>
          </span>
          {filterOptions.map((opt) => {
            const isActive = activeFilter === opt.key;
            return (
              <motion.button
                key={opt.key}
                type="button"
                onClick={() => setActiveFilter(opt.key)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`px-3.5 py-1.5 font-pixel text-xs uppercase font-bold border-2 transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#1C1B19] text-white border-[#1C1B19] shadow-[2px_2px_0px_0px_#2E5BFF]'
                    : 'bg-white text-[#1C1B19] border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] hover:bg-[#EFECE6]'
                }`}
              >
                <span>{opt.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 border ${
                  isActive ? 'bg-[#2E5BFF] text-white border-transparent' : 'bg-[#F7F6F2] text-[#5E5C56] border-[#1C1B19]/20'
                }`}>
                  {opt.count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Desktop View: Masonry Grid */}
        <div className="hidden md:block min-h-[500px]">
          <Masonry
            key={activeFilter}
            items={filteredDesigns}
            columnWidth={280}
            gap={18}
            radius={0}
            animateFrom="bottom"
            stagger={0.06}
            blurToFocus={false}
            revealOnScroll={true}
            hoverEffect="lift"
            captions="hover"
            lightbox={false}
            onItemClick={(item) => {
              const idx = filteredDesigns.findIndex((p) => p.id === item.id);
              handleOpenLightbox(idx !== -1 ? idx : 0);
            }}
            draggable={false}
          />
        </div>

        {/* Mobile View: 3D Depth Carousel */}
        <div className="block md:hidden">
          <DepthCarousel 
            key={activeFilter}
            items={filteredDesigns} 
            onOpenLightbox={(idx) => handleOpenLightbox(idx)}
          />
        </div>

        {/* Unified Lightbox Modal with Pixel Art Styling */}
        <DesignLightboxModal
          isOpen={selectedDesignIndex !== null}
          initialIndex={selectedDesignIndex ?? 0}
          items={filteredDesigns}
          onClose={handleCloseLightbox}
        />
      </div>
    </section>
  );
}
