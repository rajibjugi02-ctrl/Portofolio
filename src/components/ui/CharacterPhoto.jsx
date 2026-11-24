import { useState, useRef } from 'react';
import { SiReact } from 'react-icons/si';
import { CanvaIcon } from './Icons';
import heroImg from '../../assets/hero.png';

/**
 * CharacterPhoto Component - Modern Minimalist Pixel Framing
 * Features:
 * 1. Crisp 2px charcoal border with 6px hard pixel shadow.
 * 2. Window title bar with colored pixel dots.
 * 3. Tactile floating pixel badges (React & Canva).
 */
export default function CharacterPhoto({ 
  className = '', 
  size = 'large', 
  showBadges = true,
  alt = 'Muhammad Rajib Zahir'
}) {
  const containerDimensions = size === 'large'
    ? 'w-[270px] h-[350px] sm:w-[320px] sm:h-[420px] lg:w-[360px] lg:h-[460px]'
    : 'w-[230px] h-[300px] sm:w-[260px] sm:h-[340px]';

  return (
    <div className={`relative group select-none ${className}`}>
      {/* Offset Pixel Border Behind Photo */}
      <div 
        className="absolute inset-0 bg-[#2E5BFF] translate-x-2 translate-y-2 border-2 border-[#1C1B19] -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-200"
      />

      {/* Main Pixel Frame Container */}
      <div
        className={`relative ${containerDimensions} bg-[#EFECE6] border-2 border-[#1C1B19] shadow-[4px_4px_0px_0px_#1C1B19] rounded-none overflow-hidden flex flex-col justify-between`}
      >
        {/* Pixel Window Title Bar */}
        <div className="w-full bg-[#FFFFFF] border-b-2 border-[#1C1B19] px-2.5 py-1.5 flex items-center justify-between z-20">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 bg-[#D95D39] border border-[#1C1B19]" />
            <span className="w-2.5 h-2.5 bg-[#E2B734] border border-[#1C1B19]" />
            <span className="w-2.5 h-2.5 bg-[#3D7A5A] border border-[#1C1B19]" />
          </div>
          <span className="font-mono text-[10px] font-bold text-[#1C1B19] uppercase tracking-wider">
            PORTRAIT.RAW
          </span>
          <span className="font-mono text-[9px] text-[#2E5BFF] font-bold">
            16 Y.O
          </span>
        </div>

        {/* Character Photo */}
        <div className="relative flex-1 flex items-end justify-center overflow-hidden bg-gradient-to-b from-[#F7F6F2] to-[#E2DDD4]">
          <img
            src={heroImg}
            alt={alt}
            draggable={false}
            className="relative z-0 w-full h-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </div>

        {/* Floating Tactile Pixel Badges */}
        {showBadges && (
          <>
            {/* Top-Right Badge: Canva */}
            <div className="absolute top-10 right-3 z-20 pointer-events-none animate-iso-float">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] font-pixel text-[11px] text-[#1C1B19] uppercase font-bold">
                <CanvaIcon size={12} className="text-[#00C4CC]" />
                <span>Canva Design</span>
              </div>
            </div>

            {/* Bottom-Left Badge: React */}
            <div className="absolute bottom-3 left-3 z-20 pointer-events-none animate-iso-float-slow">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] font-pixel text-[11px] text-[#1C1B19] uppercase font-bold">
                <SiReact size={12} className="text-[#2E5BFF]" />
                <span>React / Next.js</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
