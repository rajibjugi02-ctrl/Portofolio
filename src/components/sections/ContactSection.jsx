import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  HiOutlineMail, 
  HiOutlineClipboardCopy, 
  HiCheck, 
  HiOutlineExternalLink 
} from 'react-icons/hi';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { CanvaIcon } from '../ui/Icons';
import PixelCard from '../ui/PixelCard';
import PixelBadge from '../ui/PixelBadge';
import { IsometricCube } from '../ui/PixelIsometricIcons';
import SplitTextReveal from '../ui/SplitTextReveal';
import portfolioData from '../../data/portfolio.json';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function ContactSection() {
  const { profile } = portfolioData;
  const { contact } = profile;
  const [copiedType, setCopiedType] = useState(null);
  const revealRef = useScrollReveal();

  const handleCopy = (text, type) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const cardEntrance = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 26,
      delay
    },
    whileHover: { y: -4 }
  });

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-28">
      <div 
        ref={revealRef} 
        className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full reveal-init"
      >
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <IsometricCube size={20} color="#2E5BFF" />
            <span className="font-pixel text-xs font-bold tracking-widest text-[#2E5BFF] uppercase">
              MARI BERKOLABORASI
            </span>
          </div>
          <SplitTextReveal
            text="Siap Mewujudkan Visi Digital & Desain Anda Bersama?"
            as="h2"
            className="font-pixel text-3xl sm:text-5xl font-bold text-[#1C1B19] tracking-tight mb-4 uppercase leading-tight"
          />
          <p className="font-sans text-[#5E5C56] text-base sm:text-lg leading-relaxed font-normal">
            Pintu komunikasi selalu terbuka untuk peluang kolaborasi proyek web development, desain visual Canva, maupun dokumentasi kreatif.
          </p>
        </div>

        {/* 5-Channel Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-5xl mx-auto">
          
          {/* Card 1: Primary Email (7 cols on md) */}
          <motion.div
            {...cardEntrance(0.05)}
            className="md:col-span-7 flex flex-col"
          >
            <PixelCard
              variant="white"
              shadowSize="normal"
              className="p-6 sm:p-8 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5 border-b-2 border-[#1C1B19] pb-4">
                  <div className="w-10 h-10 bg-[#2E5BFF] text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5" />
                  </div>
                  <PixelBadge variant="cobalt" size="sm">
                    KANAL UTAMA
                  </PixelBadge>
                </div>

                <span className="font-mono text-xs font-bold text-[#5E5C56] uppercase tracking-wider block mb-1">
                  {contact.primaryEmail.label}
                </span>
                <h3 className="font-pixel text-lg sm:text-2xl font-bold text-[#1C1B19] tracking-tight mb-2 break-all uppercase">
                  {contact.primaryEmail.value}
                </h3>
                <p className="font-sans text-sm text-[#5E5C56] leading-relaxed mb-6 font-normal">
                  Jalur tercepat untuk tawaran kerja sama, proyek pembuatan website, dan konsultasi teknis.
                </p>
              </div>

              {/* Actions: Mailto + Copy to Clipboard */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-[#1C1B19]">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={contact.primaryEmail.href}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 font-pixel text-xs font-bold uppercase tracking-wider text-white bg-[#1C1B19] hover:bg-[#2D2B27] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#2E5BFF] transition-colors whitespace-nowrap"
                >
                  <HiOutlineMail className="w-4 h-4 text-[#2E5BFF] flex-shrink-0" />
                  <span>Kirim Email</span>
                </motion.a>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={() => handleCopy(contact.primaryEmail.value, 'primary')}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 font-pixel text-xs font-bold uppercase tracking-wider bg-[#F7F6F2] hover:bg-[#EFECE6] text-[#1C1B19] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] transition-colors whitespace-nowrap"
                  aria-label="Salin Email Utama"
                >
                  {copiedType === 'primary' ? (
                    <>
                      <HiCheck className="w-4 h-4 text-[#3D7A5A] flex-shrink-0" />
                      <span className="text-[#3D7A5A]">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <HiOutlineClipboardCopy className="w-4 h-4 text-[#5E5C56] flex-shrink-0" />
                      <span>Salin</span>
                    </>
                  )}
                </motion.button>
              </div>
            </PixelCard>
          </motion.div>

          {/* Card 2: Canva / Email Desain (5 cols on md) */}
          <motion.div
            {...cardEntrance(0.1)}
            className="md:col-span-5 flex flex-col"
          >
            <PixelCard
              variant="stone"
              shadowSize="normal"
              className="p-6 sm:p-8 flex flex-col justify-between h-full bg-[#EFECE6]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5 border-b-2 border-[#1C1B19] pb-4">
                  <div className="w-10 h-10 bg-white text-[#00C4CC] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center">
                    <CanvaIcon size={20} className="text-[#00C4CC]" />
                  </div>
                  <PixelBadge variant="terracotta" size="sm">
                    DESAIN GRAFIS
                  </PixelBadge>
                </div>

                <span className="font-mono text-xs font-bold text-[#5E5C56] uppercase tracking-wider block mb-1">
                  {contact.canvaEmail.label}
                </span>
                <h3 className="font-pixel text-base sm:text-xl font-bold text-[#1C1B19] tracking-tight mb-2 break-all uppercase">
                  {contact.canvaEmail.value}
                </h3>
                <p className="font-sans text-sm text-[#5E5C56] leading-relaxed mb-6 font-normal">
                  Akun khusus kebutuhan aset desain, template grafis Canva, dan kolaborasi media visual.
                </p>
              </div>

              {/* Actions: Mailto + Copy to Clipboard */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-[#1C1B19]">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={contact.canvaEmail.href}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 font-pixel text-xs font-bold uppercase tracking-wider text-white bg-[#1C1B19] hover:bg-[#2D2B27] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#00C4CC] transition-colors whitespace-nowrap"
                >
                  <CanvaIcon size={14} className="text-[#00C4CC] flex-shrink-0" />
                  <span>Email Desain</span>
                </motion.a>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  type="button"
                  onClick={() => handleCopy(contact.canvaEmail.value, 'canva')}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 font-pixel text-xs font-bold uppercase tracking-wider bg-[#FFFFFF] hover:bg-[#F7F6F2] text-[#1C1B19] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] transition-colors whitespace-nowrap"
                  aria-label="Salin Email Canva"
                >
                  {copiedType === 'canva' ? (
                    <>
                      <HiCheck className="w-4 h-4 text-[#3D7A5A] flex-shrink-0" />
                      <span className="text-[#3D7A5A]">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <HiOutlineClipboardCopy className="w-4 h-4 text-[#5E5C56] flex-shrink-0" />
                      <span>Salin</span>
                    </>
                  )}
                </motion.button>
              </div>
            </PixelCard>
          </motion.div>

          {/* Card 3: GitHub (4 cols on lg) */}
          <motion.div
            {...cardEntrance(0.15)}
            className="md:col-span-6 lg:col-span-4 flex flex-col"
          >
            <PixelCard
              variant="white"
              shadowSize="normal"
              className="p-6 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-9 h-9 bg-[#1C1B19] text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#5E5C56] flex items-center justify-center mb-4">
                  <SiGithub className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold text-[#5E5C56] uppercase tracking-wider block mb-1">
                  {contact.github.label}
                </span>
                <h4 className="font-pixel text-base font-bold text-[#1C1B19] tracking-tight mb-1 uppercase">
                  {contact.github.username}
                </h4>
                <p className="font-mono text-xs text-[#2E5BFF] mb-3">
                  {contact.github.display}
                </p>
                <p className="font-sans text-xs text-[#5E5C56] leading-relaxed mb-5">
                  Repositori kode sumber terbuka, riwayat komit proyek, dan eksplorasi antarmuka web.
                </p>
              </div>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={contact.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-[#F7F6F2] hover:bg-[#1C1B19] text-[#1C1B19] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] font-pixel text-xs uppercase font-bold transition-colors"
              >
                <span>Lihat GitHub</span>
                <HiOutlineExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </PixelCard>
          </motion.div>

          {/* Card 4: Instagram (4 cols on lg) */}
          <motion.div
            {...cardEntrance(0.2)}
            className="md:col-span-6 lg:col-span-4 flex flex-col"
          >
            <PixelCard
              variant="white"
              shadowSize="normal"
              className="p-6 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-9 h-9 bg-[#FDF2F4] text-[#E4405F] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center mb-4">
                  <SiInstagram className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold text-[#5E5C56] uppercase tracking-wider block mb-1">
                  {contact.instagram.label}
                </span>
                <h4 className="font-pixel text-base font-bold text-[#1C1B19] tracking-tight mb-1 uppercase">
                  {contact.instagram.username}
                </h4>
                <p className="font-mono text-xs text-[#E4405F] mb-3">
                  {contact.instagram.display}
                </p>
                <p className="font-sans text-xs text-[#5E5C56] leading-relaxed mb-5">
                  Kanal publikasi visual, cerita kegiatan sekolah SMK Negeri 1 Ciomas, dan karya fotografi potret.
                </p>
              </div>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={contact.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-[#F7F6F2] hover:bg-[#E4405F] text-[#1C1B19] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] font-pixel text-xs uppercase font-bold transition-colors"
              >
                <span>Ikuti Instagram</span>
                <HiOutlineExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </PixelCard>
          </motion.div>

          {/* Card 5: LinkedIn (4 cols on lg) */}
          <motion.div
            {...cardEntrance(0.25)}
            className="md:col-span-12 lg:col-span-4 flex flex-col"
          >
            <PixelCard
              variant="white"
              shadowSize="normal"
              className="p-6 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-9 h-9 bg-[#EBF3F8] text-[#0077B5] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center mb-4">
                  <FaLinkedin className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold text-[#5E5C56] uppercase tracking-wider block mb-1">
                  {contact.linkedin.label}
                </span>
                <h4 className="font-pixel text-base font-bold text-[#1C1B19] tracking-tight mb-1 uppercase">
                  {contact.linkedin.username}
                </h4>
                <p className="font-mono text-xs text-[#0077B5] mb-3">
                  {contact.linkedin.display}
                </p>
                <p className="font-sans text-xs text-[#5E5C56] leading-relaxed mb-5">
                  Jejaring profesional, rekam jejak pengalaman organisasi OSIS, dan portofolio pengembangan web.
                </p>
              </div>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={contact.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-[#F7F6F2] hover:bg-[#0077B5] text-[#1C1B19] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] font-pixel text-xs uppercase font-bold transition-colors"
              >
                <span>Koneksi LinkedIn</span>
                <HiOutlineExternalLink className="w-3.5 h-3.5" />
              </motion.a>
            </PixelCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
