import { useState } from 'react';
import {
  HiOutlineVideoCamera,
  HiOutlineCode,
  HiOutlineCheck,
  HiOutlineSparkles
} from 'react-icons/hi';
import { FaTrophy } from 'react-icons/fa6';
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
        return <HiOutlineVideoCamera className="w-4 h-4 text-[#4A6B82]" />;
      case 'education':
        return <HiOutlineCode className="w-4 h-4 text-[#5C7A67]" />;
      case 'competition':
        return <FaTrophy className="w-4 h-4 text-[#C27D38]" />;
      default:
        return <HiOutlineSparkles className="w-4 h-4 text-[#4A6B82]" />;
    }
  };

  return (
    <section id="experience" className="py-24 md:py-32 relative scroll-mt-28">
      <div
        ref={revealRef}
        className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full reveal-init"
      >

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#4A6B82] uppercase mb-2.5 inline-block">
            Riwayat & Perjalanan Nyata
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
            Pengalaman & Pendidikan
          </h2>
          <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
            Cerita autentik seputar dinamika organisasi OSIS, pembelajaran kejuruan PPLG, hingga prestasi kompetisi di lingkungan sekolah.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${filter === 'all'
                  ? 'bg-[#1A1A1A] text-white shadow-soft-sm'
                  : 'bg-white text-[#666666] hover:text-[#1A1A1A] border border-[#EAEAEA]'
                }`}
            >
              Semua Pengalaman
            </button>
            <button
              type="button"
              onClick={() => setFilter('org')}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${filter === 'org'
                  ? 'bg-[#1A1A1A] text-white shadow-soft-sm'
                  : 'bg-white text-[#666666] hover:text-[#1A1A1A] border border-[#EAEAEA]'
                }`}
            >
              Organisasi OSIS KSIT
            </button>
            <button
              type="button"
              onClick={() => setFilter('edu')}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${filter === 'edu'
                  ? 'bg-[#1A1A1A] text-white shadow-soft-sm'
                  : 'bg-white text-[#666666] hover:text-[#1A1A1A] border border-[#EAEAEA]'
                }`}
            >
              Pendidikan PPLG
            </button>
            <button
              type="button"
              onClick={() => setFilter('comp')}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${filter === 'comp'
                  ? 'bg-[#1A1A1A] text-white shadow-soft-sm'
                  : 'bg-white text-[#666666] hover:text-[#1A1A1A] border border-[#EAEAEA]'
                }`}
            >
              Prestasi E-Sports
            </button>
          </div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l-2 border-[#EAEAEA] space-y-12">
          {filteredExperiences.map((item) => (
            <div key={item.id} className="relative group">

              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[43px] top-2 w-8 h-8 rounded-full bg-white border-2 border-[#EAEAEA] group-hover:border-[#4A6B82] flex items-center justify-center shadow-soft-sm transition-colors">
                {getExperienceIcon(item.type)}
              </div>

              {/* Card Body with Editorial Styling */}
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#EAEAEA] shadow-soft-sm hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300 transition-all duration-300">

                {/* Header Row: Category Tag, Period, and Special Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#888888] tracking-wider uppercase whitespace-nowrap">
                      {item.category}
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="text-xs font-semibold text-[#666666]">
                      {item.period}
                    </span>
                  </div>

                  {/* Special Highlight Badge (e.g., 2 Periode, Juara 2) */}
                  {item.badge && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border whitespace-nowrap ${item.badgeColor || 'bg-[#F9F9F9] text-[#1A1A1A] border-[#EAEAEA]'}`}>
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-1 group-hover:text-[#4A6B82] transition-colors">
                  {item.title}
                </h3>
                <div className="text-sm font-semibold text-[#4A6B82] mb-5">
                  {item.organization}
                </div>

                {/* Personal Narrative Story Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F9F9] border-l-4 border-[#4A6B82] text-sm text-[#444444] leading-relaxed italic mb-6">
                  &ldquo;{item.description}&rdquo;
                </div>

                {/* Key Highlight Bullets */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mb-6">
                    <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider block mb-3">
                      Tanggung Jawab & Kontribusi:
                    </span>
                    <ul className="space-y-2.5 list-none p-0 m-0">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#555555]">
                          <HiOutlineCheck className="w-4 h-4 text-[#5C7A67] mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags Badges */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#EAEAEA]">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#F9F9F9] text-[#555555] border border-[#EAEAEA]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
