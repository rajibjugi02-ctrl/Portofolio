import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  HiOutlineX, 
  HiChevronLeft, 
  HiChevronRight,
  HiArrowLeft 
} from 'react-icons/hi';

/**
 * DesignLightboxModal Component
 * Ultra-Clean Modern Minimalist Lightbox:
 * - Pure, deep cinematic backdrop (bg-black/90 backdrop-blur-2xl)
 * - Sleek floating top pill (bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full)
 * - Prominent "Kembali" pill button & subtle close button with high contrast
 * - Refined typography in muted silver & white (no neon AI-slop colors)
 * - Centered artwork stage preserving native 9:16 or 4:5 ratios
 * - Minimalist floating navigation arrows
 * - Slender bottom caption card with subtle editorial metadata
 */
export default function DesignLightboxModal({
  isOpen = false,
  initialIndex = 0,
  items = [],
  onClose = () => {}
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const total = items.length;

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  // Robust scroll lock cleanup
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      return;
    }

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevBodyOverflow || '';
      document.documentElement.style.overflow = prevHtmlOverflow || '';
    };
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    onClose();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, total]);

  if (!isOpen || !items || items.length === 0 || typeof document === 'undefined') {
    return null;
  }

  const currentItem = items[currentIndex] || items[0];
  const isNineSixteen = currentItem.height === 1920 || (currentItem.height / currentItem.width > 1.5);
  const aspectRatioText = isNineSixteen ? 'Rasio 9:16' : 'Rasio 4:5';

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-between p-4 sm:p-7 select-none animate-fade-in overflow-y-auto"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Detail Karya Desain"
    >
      {/* ================= MODERN MINIMALIST FLOATING HEADER ================= */}
      <div
        className="w-full max-w-2xl mx-auto bg-neutral-900/80 backdrop-blur-2xl border border-white/[0.12] rounded-full px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-between gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)] z-50 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent High-Contrast "Kembali" Button */}
        <button
          type="button"
          onClick={handleClose}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 font-semibold text-xs transition-all duration-200 active:scale-95 shadow-sm flex-shrink-0"
          aria-label="Kembali ke Galeri"
        >
          <HiArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali</span>
        </button>

        {/* Clean Minimalist Typography (No Neon Badges) */}
        <div className="flex-1 flex flex-col items-center min-w-0 px-2 text-center">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-neutral-400 truncate max-w-full">
            {currentItem.category}
          </span>
          <h3 className="text-white font-medium text-xs sm:text-sm tracking-tight truncate max-w-full">
            {currentItem.title}
          </h3>
        </div>

        {/* Clean Close [X] Button */}
        <button
          type="button"
          onClick={handleClose}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-neutral-200 hover:text-neutral-950 flex items-center justify-center transition-all duration-200 active:scale-95 border border-white/10 flex-shrink-0"
          aria-label="Tutup Detail"
          title="Tutup (Esc)"
        >
          <HiOutlineX className="w-4 h-4" />
        </button>
      </div>

      {/* ================= CENTER ARTWORK STAGE & FLOATING ARROWS ================= */}
      <div
        className="flex-1 flex items-center justify-center relative w-full max-w-4xl my-3 sm:my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-1 sm:left-4 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900/70 hover:bg-white text-neutral-200 hover:text-neutral-950 border border-white/15 backdrop-blur-xl flex items-center justify-center active:scale-95 transition-all duration-200 shadow-xl"
          aria-label="Karya Sebelumnya"
        >
          <HiChevronLeft className="w-5 h-5" />
        </button>

        {/* Artwork Image (Native 9:16 or 4:5 ratio without crop) */}
        <img
          src={currentItem.img}
          alt={currentItem.title}
          className="max-h-[62vh] sm:max-h-[68vh] w-auto max-w-[88vw] sm:max-w-[80vw] object-contain rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.85)] border border-white/[0.08] select-none transition-all duration-300 animate-modal-in"
        />

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-1 sm:right-4 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900/70 hover:bg-white text-neutral-200 hover:text-neutral-950 border border-white/15 backdrop-blur-xl flex items-center justify-center active:scale-95 transition-all duration-200 shadow-xl"
          aria-label="Karya Berikutnya"
        >
          <HiChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ================= MINIMALIST BOTTOM CAPTION CARD ================= */}
      <div
        className="w-full max-w-xl mx-auto bg-neutral-900/80 backdrop-blur-2xl border border-white/[0.12] rounded-2xl px-5 py-3.5 sm:px-6 sm:py-4 text-center shadow-[0_8px_32px_rgba(0,0,0,0.6)] z-50 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-normal mb-2">
          {currentItem.description}
        </p>
        <div className="flex items-center justify-center gap-2.5 text-[11px] text-neutral-400 font-mono tracking-wider">
          <span>0{currentIndex + 1} / 0{total}</span>
          <span className="text-neutral-600">•</span>
          <span>{aspectRatioText}</span>
        </div>
      </div>
    </div>,
    document.body
  );
}
