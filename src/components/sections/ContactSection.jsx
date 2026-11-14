import { useState } from 'react';
import { 
  HiOutlineMail, 
  HiOutlineClipboardCopy, 
  HiCheck, 
  HiOutlineExternalLink 
} from 'react-icons/hi';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { CanvaIcon } from '../ui/Icons';
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

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-gradient-to-b from-transparent via-[#F9F9F9]/80 to-transparent scroll-mt-28">
      <div 
        ref={revealRef} 
        className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full reveal-init"
      >
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EBF1F5] text-[#4A6B82] text-xs font-bold tracking-wider uppercase mb-4 whitespace-nowrap">
            Mari Berkolaborasi
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4 leading-tight">
            Siap Mewujudkan Visi Digital & Desain Anda Bersama?
          </h2>
          <p className="text-[#666666] text-base sm:text-lg leading-relaxed font-normal">
            Pintu komunikasi selalu terbuka untuk peluang kolaborasi proyek web development, desain visual Canva, maupun dokumentasi kreatif.
          </p>
        </div>

        {/* 5-Channel Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 max-w-5xl mx-auto">
          
          {/* Card 1: Primary Email (7 cols on md) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-7 sm:p-8 border border-[#EAEAEA] shadow-soft-sm hover:shadow-soft-md hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#4A6B82]/10 to-transparent rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF1F5] text-[#4A6B82] flex items-center justify-center shadow-sm">
                  <HiOutlineMail className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#EBF1F5] text-[#4A6B82] uppercase tracking-wider">
                  Kanal Utama
                </span>
              </div>

              <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                {contact.primaryEmail.label}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight mb-2 break-all">
                {contact.primaryEmail.value}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-6 font-normal">
                Jalur tercepat untuk tawaran kerja sama, proyek pembuatan website, dan konsultasi teknis.
              </p>
            </div>

            {/* Actions: Mailto + Copy to Clipboard */}
            <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#EAEAEA]">
              <a
                href={contact.primaryEmail.href}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs font-semibold shadow-soft-sm transition-all active:scale-95 whitespace-nowrap"
              >
                <HiOutlineMail className="w-4 h-4 text-[#61DAFB] flex-shrink-0" />
                <span>Kirim Email Langsung</span>
              </a>

              <button
                type="button"
                onClick={() => handleCopy(contact.primaryEmail.value, 'primary')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#F9F9F9] hover:bg-[#EAEAEA] text-[#1A1A1A] border border-[#EAEAEA] text-xs font-semibold transition-all active:scale-95 whitespace-nowrap"
                aria-label="Salin Email Utama"
              >
                {copiedType === 'primary' ? (
                  <>
                    <HiCheck className="w-4 h-4 text-[#5C7A67] flex-shrink-0" />
                    <span className="text-[#5C7A67]">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <HiOutlineClipboardCopy className="w-4 h-4 text-[#666666] flex-shrink-0" />
                    <span>Salin Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Canva / Email Desain (5 cols on md) */}
          <div className="md:col-span-5 bg-white rounded-3xl p-7 sm:p-8 border border-[#EAEAEA] shadow-soft-sm hover:shadow-soft-md hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#00C4CC]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#E0F7F8] text-[#00C4CC] flex items-center justify-center shadow-sm">
                  <CanvaIcon size={24} className="text-[#00C4CC]" />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#E0F7F8] text-[#00A2A8] uppercase tracking-wider">
                  Kreatif Visual
                </span>
              </div>

              <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                {contact.canvaEmail.label}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#1A1A1A] tracking-tight mb-2 break-all">
                {contact.canvaEmail.value}
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-6 font-normal">
                Akun khusus kebutuhan aset desain, template grafis Canva, dan kolaborasi media visual.
              </p>
            </div>

            {/* Actions: Mailto + Copy to Clipboard */}
            <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-[#EAEAEA]">
              <a
                href={contact.canvaEmail.href}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs font-semibold shadow-soft-sm transition-all active:scale-95 whitespace-nowrap"
              >
                <CanvaIcon size={14} className="text-[#00C4CC] flex-shrink-0" />
                <span>Email Desain</span>
              </a>

              <button
                type="button"
                onClick={() => handleCopy(contact.canvaEmail.value, 'canva')}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-[#F9F9F9] hover:bg-[#EAEAEA] text-[#1A1A1A] border border-[#EAEAEA] text-xs font-semibold transition-all active:scale-95 whitespace-nowrap"
                aria-label="Salin Email Canva"
              >
                {copiedType === 'canva' ? (
                  <>
                    <HiCheck className="w-4 h-4 text-[#5C7A67] flex-shrink-0" />
                    <span className="text-[#5C7A67]">Tersalin!</span>
                  </>
                ) : (
                  <>
                    <HiOutlineClipboardCopy className="w-4 h-4 text-[#666666] flex-shrink-0" />
                    <span>Salin</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: GitHub (4 cols on lg) */}
          <div className="md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-7 border border-[#EAEAEA] shadow-soft-sm hover:shadow-soft-md hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-neutral-100 text-[#181717] flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                <SiGithub className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                {contact.github.label}
              </span>
              <h4 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-1">
                {contact.github.username}
              </h4>
              <p className="text-xs text-[#666666] font-mono mb-4">
                {contact.github.display}
              </p>
              <p className="text-xs text-[#666666] leading-relaxed mb-6">
                Repositori kode sumber terbuka, riwayat komit proyek, dan eksplorasi antarmuka web.
              </p>
            </div>

            <a
              href={contact.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#F9F9F9] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#EAEAEA] text-xs font-semibold transition-all duration-200 active:scale-95"
            >
              <span>Kunjungi Profil GitHub</span>
              <HiOutlineExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Instagram (4 cols on lg) */}
          <div className="md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-7 border border-[#EAEAEA] shadow-soft-sm hover:shadow-soft-md hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#FDF2F4] text-[#E4405F] flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                <SiInstagram className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                {contact.instagram.label}
              </span>
              <h4 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-1">
                {contact.instagram.username}
              </h4>
              <p className="text-xs text-[#666666] font-mono mb-4">
                {contact.instagram.display}
              </p>
              <p className="text-xs text-[#666666] leading-relaxed mb-6">
                Kanal publikasi visual, cerita kegiatan sekolah SMK Negeri 1 Ciomas, dan karya fotografi potret.
              </p>
            </div>

            <a
              href={contact.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#F9F9F9] hover:bg-[#E4405F] text-[#1A1A1A] hover:text-white border border-[#EAEAEA] text-xs font-semibold transition-all duration-200 active:scale-95"
            >
              <span>Ikuti di Instagram</span>
              <HiOutlineExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 5: LinkedIn (4 cols on lg) */}
          <div className="md:col-span-12 lg:col-span-4 bg-white rounded-3xl p-7 border border-[#EAEAEA] shadow-soft-sm hover:shadow-soft-md hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#EBF3F8] text-[#0077B5] flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                <FaLinkedin className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                {contact.linkedin.label}
              </span>
              <h4 className="text-lg font-bold text-[#1A1A1A] tracking-tight mb-1">
                {contact.linkedin.username}
              </h4>
              <p className="text-xs text-[#666666] font-mono mb-4">
                {contact.linkedin.display}
              </p>
              <p className="text-xs text-[#666666] leading-relaxed mb-6">
                Jejaring profesional, rekam jejak pengalaman organisasi OSIS, dan portofolio pengembangan web.
              </p>
            </div>

            <a
              href={contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#F9F9F9] hover:bg-[#0077B5] text-[#1A1A1A] hover:text-white border border-[#EAEAEA] text-xs font-semibold transition-all duration-200 active:scale-95"
            >
              <span>Koneksi LinkedIn</span>
              <HiOutlineExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}