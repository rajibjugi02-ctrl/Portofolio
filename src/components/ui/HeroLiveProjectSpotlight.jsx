import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HiOutlineLockClosed, HiExternalLink } from 'react-icons/hi';
import { SiVercel } from 'react-icons/si';
import PixelCard from './PixelCard';
import PixelBadge from './PixelBadge';
import MorphSkeletonImage from './MorphSkeletonImage';

/**
 * HeroLiveProjectSpotlight
 * Menampilkan pratinjau interaktif dari proyek website nyata (Musickus, Webkelas, WebRoa, Aetheria)
 * di landing page dengan tab switcher, browser frame, dan direct link Vercel.
 */
export default function HeroLiveProjectSpotlight({ projects = [] }) {
  // Prioritaskan proyek utama yang diminta: Musickus, Webkelas, WebRoa, Aetheria
  const spotlightProjects = useMemo(() => {
    if (!projects || projects.length === 0) return [];
    const targetNames = ['musickus', 'webkelas', 'webroa', 'aetheria'];
    const matched = projects.filter((p) =>
      targetNames.some((name) => p.title.toLowerCase().includes(name))
    );
    return matched.length > 0 ? matched : projects.slice(0, 4);
  }, [projects]);

  const [activeId, setActiveId] = useState(
    spotlightProjects[0]?.id || projects[0]?.id || 'web-1'
  );

  const currentProject = useMemo(() => {
    return (
      spotlightProjects.find((p) => p.id === activeId) ||
      spotlightProjects[0] ||
      projects[0]
    );
  }, [spotlightProjects, projects, activeId]);

  if (!currentProject) return null;

  return (
    <div className="w-full max-w-[500px] flex flex-col gap-3">
      {/* 1. Project Switcher Tabs / Pills */}
      <div className="flex items-center gap-2 p-1.5 bg-[#FFFFFF] border-2 border-[#1C1B19] shadow-[3px_3px_0px_0px_#1C1B19] overflow-x-auto no-scrollbar">
        <span className="font-mono text-[10px] font-bold text-[#5E5C56] uppercase px-2 whitespace-nowrap select-none">
          Karya:
        </span>
        <div className="flex items-center gap-1.5 flex-1">
          {spotlightProjects.map((item) => {
            const isActive = item.id === currentProject.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={`flex-1 py-1 px-2.5 font-pixel text-xs uppercase font-bold tracking-tight border-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1C1B19] text-white border-[#1C1B19] shadow-[2px_2px_0px_0px_#2E5BFF]'
                    : 'bg-[#F7F6F2] text-[#1C1B19] border-[#1C1B19] hover:bg-[#EFECE6]'
                }`}
                aria-pressed={isActive}
              >
                {item.title.split(' ')[0]}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 2. Minimalist Browser Preview Frame */}
      <PixelCard
        variant="white"
        shadowSize="lg"
        className="w-full p-0 overflow-hidden bg-white border-2 border-[#1C1B19]"
      >
        {/* Browser Chrome Header */}
        <div className="px-3.5 py-2.5 bg-[#EFECE6] border-b-2 border-[#1C1B19] flex items-center justify-between gap-2 select-none">
          {/* Traffic Light Dots */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className="w-2.5 h-2.5 bg-[#D95D39] border border-[#1C1B19]" />
            <span className="w-2.5 h-2.5 bg-[#E2B734] border border-[#1C1B19]" />
            <span className="w-2.5 h-2.5 bg-[#3D7A5A] border border-[#1C1B19]" />
          </div>

          {/* Clean Address Bar with SSL Lock */}
          <div className="flex-1 max-w-[240px] px-2.5 py-1 bg-[#FFFFFF] border border-[#1C1B19] text-[11px] font-mono text-[#1C1B19] flex items-center justify-center gap-1.5 truncate shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]">
            <HiOutlineLockClosed className="w-3 h-3 text-[#3D7A5A] flex-shrink-0" />
            <span className="truncate">{currentProject.domain || currentProject.liveUrl.replace('https://', '').replace('/', '')}</span>
          </div>

          {/* Vercel Live Status Badge */}
          <div className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-[#1C1B19] uppercase bg-[#FFFFFF] px-2 py-0.5 border border-[#1C1B19] flex-shrink-0">
            <SiVercel className="w-2.5 h-2.5 text-[#1C1B19]" />
            <span className="hidden sm:inline">LIVE</span>
          </div>
        </div>

        {/* Viewport Screenshot with Bar Morph Skeleton Loading */}
        <div className="relative aspect-[16/10] bg-[#E2DDD4] overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0.7, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0.7, scale: 0.985 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full"
            >
              <MorphSkeletonImage
                src={currentProject.mockupImage}
                alt={`Pratinjau ${currentProject.title}`}
                className="w-full h-full"
                imgClassName="transition-transform duration-300 group-hover:scale-[1.02]"
                fallbackTitle={currentProject.title}
                fallbackCategory={currentProject.category}
                fallbackDomain={currentProject.domain}
              />
            </motion.div>
          </AnimatePresence>

          {/* Quick Hover Action Overlay */}
          <a
            href={currentProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-[#1C1B19]/55 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 z-20"
            aria-label={`Buka website live ${currentProject.title}`}
          >
            <span className="px-4 py-2 bg-[#FFFFFF] text-[#1C1B19] font-pixel text-xs uppercase font-bold border-2 border-[#1C1B19] shadow-[3px_3px_0px_0px_#1C1B19] flex items-center gap-2 hover:bg-[#2E5BFF] hover:text-white transition-colors">
              <span>Buka Website</span>
              <HiExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* 3. Key Info, Tech Badges & Direct Link Footer */}
        <div className="p-4 sm:p-5 bg-[#FFFFFF] border-t-2 border-[#1C1B19]">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="font-mono text-[10px] font-bold text-[#2E5BFF] uppercase tracking-wider block mb-0.5">
                {currentProject.category}
              </span>
              <h3 className="font-pixel text-lg sm:text-xl font-bold text-[#1C1B19] tracking-tight uppercase leading-tight">
                {currentProject.title}
              </h3>
            </div>
            <PixelBadge variant="sage" size="sm">
              VERCEL PROD
            </PixelBadge>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#5E5C56] leading-relaxed mb-3 line-clamp-2">
            {currentProject.description}
          </p>

          {/* Tech Stack Pills & Direct Launch Button */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#EAEAEA]">
            <div className="flex flex-wrap items-center gap-1.5">
              {currentProject.techStack?.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 bg-[#F7F6F2] border border-[#1C1B19] text-[10px] font-mono font-semibold text-[#1C1B19]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              href={currentProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1C1B19] text-white hover:bg-[#2E5BFF] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] font-pixel text-xs uppercase font-bold transition-colors whitespace-nowrap ml-auto"
            >
              <span>Buka Web</span>
              <HiExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </div>
      </PixelCard>
    </div>
  );
}
