import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  HiOutlineX,
  HiChevronLeft,
  HiChevronRight,
  HiArrowLeft
} from 'react-icons/hi';
import { useLenis } from '../../context/LenisContext';
import PixelButton from './PixelButton';
import PixelBadge from './PixelBadge';

/**
 * DesignLightboxModal - Modern Minimalist Pixel Art Lightbox
 */
export default function DesignLightboxModal({
  isOpen = false,
  initialIndex = 0,
  items = [],
  onClose = () => { }
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const total = items.length;
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
      return;
    }

    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    lenis?.stop();

    return () => {
      document.body.style.overflow = prevBodyOverflow || '';
      document.documentElement.style.overflow = prevHtmlOverflow || '';
      lenis?.start();
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      lenis?.start();
    };
  }, [lenis]);

  const handleClose = () => {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    lenis?.start();
    onClose();
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

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
  const aspectRatioText = isNineSixteen ? 'RASIO 9:16' : 'RASIO 4:5';

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-[#1C1B19]/85 backdrop-blur-[3px] flex flex-col items-center justify-between p-3 sm:p-6 select-none animate-fade-in overflow-y-auto"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label="Detail Karya Desain"
    >
      {/* ================= MODERN PIXEL HEADER ================= */}
      <div
        className="w-full max-w-2xl mx-auto bg-[#FFFFFF] border-2 border-[#1C1B19] shadow-[4px_4px_0px_0px_#1C1B19] px-3.5 py-2 flex items-center justify-between gap-3 z-50 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent Tactile "Kembali" Button */}
        <button
          type="button"
          onClick={handleClose}
          className="inline-flex items-center gap-1.5 px-3 py-1 font-pixel text-xs font-bold uppercase tracking-wider text-white bg-[#2E5BFF] hover:bg-[#1B47EB] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex-shrink-0"
          aria-label="Kembali ke Galeri"
        >
          <HiArrowLeft className="w-3.5 h-3.5" />
          <span>Kembali</span>
        </button>

        {/* Pixel Category & Title */}
        <div className="flex-1 flex flex-col items-center min-w-0 px-2 text-center">
          <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-[#2E5BFF] truncate max-w-full">
            {currentItem.category}
          </span>
          <h3 className="font-pixel text-xs sm:text-sm font-bold text-[#1C1B19] uppercase tracking-tight truncate max-w-full">
            {currentItem.title}
          </h3>
        </div>

        {/* Pixel Close [X] Button */}
        <button
          type="button"
          onClick={handleClose}
          className="w-7 h-7 bg-[#EFECE6] hover:bg-[#D95D39] hover:text-white text-[#1C1B19] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center transition-all active:translate-x-[1px] active:translate-y-[1px] flex-shrink-0"
          aria-label="Tutup Detail"
          title="Tutup (Esc)"
        >
          <HiOutlineX className="w-4 h-4" />
        </button>
      </div>

      {/* ================= CENTER ARTWORK STAGE & ARROWS ================= */}
      <div
        className="flex-1 flex items-center justify-center relative w-full max-w-4xl my-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-1 sm:left-4 z-50 w-10 h-10 bg-white hover:bg-[#2E5BFF] hover:text-white text-[#1C1B19] border-2 border-[#1C1B19] shadow-[3px_3px_0px_0px_#1C1B19] flex items-center justify-center active:translate-x-[1px] active:translate-y-[1px] transition-all"
          aria-label="Karya Sebelumnya"
        >
          <HiChevronLeft className="w-5 h-5" />
        </button>

        {/* Artwork Image in Sharp Pixel Frame */}
        <img
          src={currentItem.img}
          alt={currentItem.title}
          className="max-h-[60vh] sm:max-h-[66vh] w-auto max-w-[86vw] sm:max-w-[78vw] object-contain border-2 border-[#1C1B19] shadow-[6px_6px_0px_0px_#1C1B19] bg-white select-none transition-all duration-200 animate-modal-in"
        />

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-1 sm:right-4 z-50 w-10 h-10 bg-white hover:bg-[#2E5BFF] hover:text-white text-[#1C1B19] border-2 border-[#1C1B19] shadow-[3px_3px_0px_0px_#1C1B19] flex items-center justify-center active:translate-x-[1px] active:translate-y-[1px] transition-all"
          aria-label="Karya Berikutnya"
        >
          <HiChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* ================= PIXEL BOTTOM CAPTION CARD ================= */}
      <div
        className="w-full max-w-xl mx-auto bg-[#FFFFFF] border-2 border-[#1C1B19] shadow-[4px_4px_0px_0px_#1C1B19] px-4 py-3 text-center z-50 animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-sans text-[#1C1B19] text-xs sm:text-sm leading-relaxed font-normal mb-2">
          {currentItem.description}
        </p>
        <div className="flex items-center justify-center gap-2.5 font-mono text-[11px] font-bold text-[#5E5C56]">
          <span className="text-[#2E5BFF]">KARYA 0{currentIndex + 1} / 0{total}</span>
          <span>•</span>
          <span>{aspectRatioText}</span>
        </div>
      </div>
    </div>,
    document.body
  );
}
