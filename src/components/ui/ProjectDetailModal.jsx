import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HiX, 
  HiExternalLink, 
  HiOutlineLockClosed, 
  HiOutlineSparkles,
  HiOutlineCheckCircle
} from 'react-icons/hi';
import { SiVercel } from 'react-icons/si';
import PixelBadge from './PixelBadge';
import { useLenis } from '../../context/LenisContext';

/**
 * ProjectDetailModal
 * Modal drawer ringkas yang memberikan ringkasan studi kasus (peran, stack, tantangan utama,
 * dan tautan live) saat kartu proyek diklik tanpa memenuhi halaman utama.
 */
export default function ProjectDetailModal({ isOpen, project, onClose }) {
  const lenis = useLenis();

  // Kunci scroll Lenis saat modal terbuka agar tidak terjadi scrolling ganda di background
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [isOpen, lenis]);

  // Listener tombol Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none">
          {/* Dimmed Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1C1B19]/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Card with Pixel Art Framing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative z-10 w-full max-w-2xl bg-[#FFFFFF] border-3 border-[#1C1B19] shadow-[6px_6px_0px_0px_#1C1B19] overflow-hidden max-h-[92vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            {/* Header / Browser Chrome */}
            <div className="px-4 py-3 bg-[#EFECE6] border-b-2 border-[#1C1B19] flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#D95D39] border border-[#1C1B19]" />
                <span className="w-2.5 h-2.5 bg-[#E2B734] border border-[#1C1B19]" />
                <span className="w-2.5 h-2.5 bg-[#3D7A5A] border border-[#1C1B19]" />
                <span className="ml-1 font-mono text-[11px] font-bold text-[#1C1B19] uppercase tracking-wider">
                  STUDI KASUS PROYEK
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="w-7 h-7 bg-white hover:bg-[#1C1B19] hover:text-white border-2 border-[#1C1B19] shadow-[1px_1px_0px_0px_#1C1B19] flex items-center justify-center transition-colors active:translate-x-[1px] active:translate-y-[1px]"
                aria-label="Tutup Modal"
              >
                <HiX className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-5 sm:p-7 overflow-y-auto no-scrollbar space-y-6">
              {/* Category, Title & Domain Bar */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#2E5BFF] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-[#1C1B19] bg-[#F7F6F2] px-2 py-0.5 border border-[#1C1B19]">
                    <SiVercel className="w-2.5 h-2.5" />
                    <span>PRODUCTION LIVE</span>
                  </div>
                </div>

                <h2
                  id="modal-project-title"
                  className="font-pixel text-2xl sm:text-3xl font-bold text-[#1C1B19] tracking-tight uppercase mb-3 leading-tight"
                >
                  {project.title}
                </h2>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F7F6F2] border border-[#1C1B19] text-xs font-mono text-[#5E5C56]">
                  <HiOutlineLockClosed className="w-3.5 h-3.5 text-[#3D7A5A]" />
                  <span>{project.domain || project.liveUrl.replace('https://', '').replace('/', '')}</span>
                </div>
              </div>

              {/* Project Narrative & Context */}
              <div className="p-4 bg-[#F7F6F2] border-l-4 border-[#2E5BFF] border-y border-r border-[#1C1B19]">
                <div className="flex items-center gap-2 mb-1.5 text-xs font-pixel font-bold uppercase text-[#1C1B19]">
                  <HiOutlineSparkles className="w-4 h-4 text-[#2E5BFF]" />
                  <span>Gambaran & Peran Pembuatan:</span>
                </div>
                <p className="font-sans text-sm text-[#1C1B19] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Highlights & Architecture */}
              <div>
                <span className="font-pixel text-xs font-bold uppercase tracking-wider text-[#1C1B19] block mb-2.5">
                  Spesifikasi & Keunggulan:
                </span>
                <ul className="space-y-2 list-none p-0 m-0">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-[#5E5C56]">
                    <HiOutlineCheckCircle className="w-4 h-4 text-[#3D7A5A] mt-0.5 flex-shrink-0" />
                    <span>Arsitektur modern berbasis Next.js App Router dan TypeScript untuk keandalan tipe data.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-[#5E5C56]">
                    <HiOutlineCheckCircle className="w-4 h-4 text-[#3D7A5A] mt-0.5 flex-shrink-0" />
                    <span>Tata letak responsif dan pixel-perfect dengan Tailwind CSS yang optimal di layar ponsel maupun desktop.</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-[#5E5C56]">
                    <HiOutlineCheckCircle className="w-4 h-4 text-[#3D7A5A] mt-0.5 flex-shrink-0" />
                    <span>Di-deploy langsung secara continuous deployment di edge network Vercel.</span>
                  </li>
                </ul>
              </div>

              {/* Tech Stack Tags */}
              <div>
                <span className="font-pixel text-xs font-bold uppercase tracking-wider text-[#1C1B19] block mb-2.5">
                  Teknologi yang Digunakan:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack?.map((tech, idx) => (
                    <PixelBadge key={idx} variant="stone" size="sm">
                      #{tech}
                    </PixelBadge>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 bg-[#EFECE6] border-t-2 border-[#1C1B19] flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-white hover:bg-[#DDD8CE] text-[#1C1B19] font-pixel text-xs uppercase font-bold border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] active:translate-x-[1px] active:translate-y-[1px] transition-colors"
              >
                Tutup
              </button>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 bg-[#2E5BFF] hover:bg-[#1B47EB] text-white font-pixel text-xs uppercase font-bold border-2 border-[#1C1B19] shadow-[3px_3px_0px_0px_#1C1B19] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all ml-auto"
              >
                <span>Kunjungi Website Live</span>
                <HiExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
