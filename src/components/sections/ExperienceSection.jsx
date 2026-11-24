import { useState } from 'react';
import { motion } from 'motion/react';
import {
  HiOutlineVideoCamera,
  HiOutlineCode,
  HiOutlineCheck,
  HiOutlineSparkles
} from 'react-icons/hi';
import { FaTrophy } from 'react-icons/fa6';
import PixelCard from '../ui/PixelCard';
import PixelBadge from '../ui/PixelBadge';
import { IsometricFloppy } from '../ui/PixelIsometricIcons';
import SplitTextReveal from '../ui/SplitTextReveal';
import portfolioData from '../../data/portfolio.json';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function ExperienceSection() {
  const { experiences } = portfolioData;
  const [filter, setFilter] = useState('all');
  const revealRef = useScrollReveal();

  const filteredExperiences = experiences.filter((item) => {
    if (filter === 'org') return item.type === 'organization';
    if (filter === 'edu') return item.type === 'education';
    if (filter === 'comp') return item.type === 'competition';
    return true;
  });

  const getExperienceIcon = (type) => {
    switch (type) {
      case 'organization':
        return <HiOutlineVideoCamera className="w-4 h-4 text-[#2E5BFF]" />;
      case 'education':
        return <HiOutlineCode className="w-4 h-4 text-[#3D7A5A]" />;
      case 'competition':
        return <FaTrophy className="w-4 h-4 text-[#D95D39]" />;
      default:
        return <HiOutlineSparkles className="w-4 h-4 text-[#2E5BFF]" />;
    }
  };

  const filterButtons = [
    { key: 'all', label: 'Semua Pengalaman' },
    { key: 'org', label: 'Organisasi OSIS KSIT' },
    { key: 'edu', label: 'Pendidikan PPLG' },
    { key: 'comp', label: 'Prestasi E-Sports' }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 relative scroll-mt-28">
      <div
        ref={revealRef}
        className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full reveal-init"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <IsometricFloppy size={20} />
            <span className="font-pixel text-xs font-bold tracking-widest text-[#2E5BFF] uppercase">
              RIWAYAT & PERJALANAN NYATA
            </span>
          </div>
          <SplitTextReveal
            text="Pengalaman & Pendidikan"
            as="h2"
            className="font-pixel text-3xl sm:text-5xl font-bold text-[#1C1B19] tracking-tight mb-4 uppercase"
          />
          <p className="font-sans text-[#5E5C56] text-base sm:text-lg leading-relaxed">
            Cerita autentik seputar dinamika organisasi OSIS, pembelajaran kejuruan PPLG, hingga prestasi kompetisi di lingkungan sekolah.
          </p>

          {/* Filter Pixel Buttons with Motion */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 select-none">
            {filterButtons.map((btn) => {
              const active = filter === btn.key;
              return (
                <motion.button
                  key={btn.key}
                  type="button"
                  onClick={() => setFilter(btn.key)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className={`px-4 py-1.5 font-pixel text-xs uppercase font-bold border-2 border-[#1C1B19] transition-colors ${
                    active
                      ? 'bg-[#1C1B19] text-white shadow-[2px_2px_0px_0px_#2E5BFF]'
                      : 'bg-white text-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] hover:bg-[#EFECE6]'
                  }`}
                >
                  {btn.label}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l-2 border-[#1C1B19] space-y-10">
          {filteredExperiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 26,
                delay: index * 0.08
              }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              {/* Timeline Indicator Node - Pixel Square */}
              <div className="absolute -left-[31px] sm:-left-[43px] top-2 w-7 h-7 bg-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] group-hover:bg-[#EFECE6] flex items-center justify-center transition-colors">
                {getExperienceIcon(item.type)}
              </div>

              {/* Card Body with Pixel Art Styling */}
              <PixelCard
                variant="white"
                shadowSize="normal"
                className="p-6 sm:p-8"
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#5E5C56] tracking-wider uppercase whitespace-nowrap">
                      {item.category}
                    </span>
                    <span className="text-[#1C1B19]">•</span>
                    <span className="font-mono text-xs font-semibold text-[#1C1B19]">
                      {item.period}
                    </span>
                  </div>

                  {item.badge && (
                    <PixelBadge
                      variant={
                        item.type === 'competition'
                          ? 'terracotta'
                          : item.type === 'organization'
                          ? 'cobalt'
                          : 'sage'
                      }
                      size="sm"
                    >
                      {item.badge}
                    </PixelBadge>
                  )}
                </div>

                {/* Title & Organization */}
                <h3 className="font-pixel text-xl sm:text-2xl font-bold text-[#1C1B19] tracking-tight mb-1 group-hover:text-[#2E5BFF] transition-colors uppercase">
                  {item.title}
                </h3>
                <div className="font-mono text-xs font-bold text-[#2E5BFF] mb-4">
                  {item.organization}
                </div>

                {/* Personal Narrative Story Box */}
                <div className="p-4 bg-[#F7F6F2] border-l-4 border-[#2E5BFF] border-y border-r border-[#1C1B19] font-sans text-sm text-[#1C1B19] leading-relaxed italic mb-5">
                  &ldquo;{item.description}&rdquo;
                </div>

                {/* Key Highlight Bullets */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mb-5">
                    <span className="font-pixel text-xs font-bold text-[#1C1B19] uppercase tracking-wider block mb-2.5">
                      Tanggung Jawab & Kontribusi:
                    </span>
                    <ul className="space-y-2 list-none p-0 m-0">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#5E5C56]">
                          <span className="w-1.5 h-1.5 bg-[#2E5BFF] border border-[#1C1B19] mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags Badges */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t-2 border-[#1C1B19]">
                    {item.tags.map((tag, tagIdx) => (
                      <PixelBadge
                        key={tagIdx}
                        variant="stone"
                        size="sm"
                      >
                        #{tag}
                      </PixelBadge>
                    ))}
                  </div>
                )}
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
