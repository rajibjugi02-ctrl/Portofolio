import { HiArrowUp, HiOutlineMail } from 'react-icons/hi';
import { SiGithub, SiInstagram } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { CanvaIcon } from '../ui/Icons';
import portfolioData from '../../data/portfolio.json';

export default function Footer() {
  const { profile } = portfolioData;
  const { contact } = profile;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-[#1C1B19] bg-[#FFFFFF] py-12">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Brand & Title */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
            <span className="w-6 h-6 bg-[#2E5BFF] text-white border border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center font-mono text-xs font-bold flex-shrink-0">
              RZ
            </span>
            <span className="font-pixel font-bold text-[#1C1B19] text-base sm:text-lg uppercase tracking-wide whitespace-nowrap">
              {profile.name}
            </span>
          </div>
          <p className="font-mono text-xs text-[#5E5C56] max-w-sm">
            {profile.role} • SMK Negeri 1 Ciomas (PPLG)
          </p>
        </div>

        {/* Social Icons Row */}
        <div className="flex flex-col items-center md:items-end gap-3 select-none">
          <div className="flex items-center gap-2">
            <a
              href={contact.primaryEmail.href}
              className="w-8 h-8 bg-[#F7F6F2] hover:bg-[#1C1B19] text-[#1C1B19] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center transition-all active:translate-x-[1px] active:translate-y-[1px]"
              aria-label="Kirim Email"
              title="Email Utama"
            >
              <HiOutlineMail className="w-3.5 h-3.5" />
            </a>

            <a
              href={contact.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#F7F6F2] hover:bg-[#1C1B19] text-[#1C1B19] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center transition-all active:translate-x-[1px] active:translate-y-[1px]"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <SiGithub className="w-3.5 h-3.5" />
            </a>

            <a
              href={contact.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#F7F6F2] hover:bg-[#E4405F] text-[#1C1B19] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center transition-all active:translate-x-[1px] active:translate-y-[1px]"
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <SiInstagram className="w-3.5 h-3.5" />
            </a>

            <a
              href={contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#F7F6F2] hover:bg-[#0077B5] text-[#1C1B19] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center transition-all active:translate-x-[1px] active:translate-y-[1px]"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
            </a>

            <a
              href={contact.canvaEmail.href}
              className="w-8 h-8 bg-[#F7F6F2] hover:bg-[#00C4CC] text-[#1C1B19] hover:text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center transition-all active:translate-x-[1px] active:translate-y-[1px]"
              aria-label="Canva Email"
              title="Canva / Email Desain"
            >
              <CanvaIcon size={14} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <p className="font-mono text-[11px] text-[#5E5C56] whitespace-nowrap">
              &copy; {new Date().getFullYear()} MUHAMMAD RAJIB ZAHIR. ALL RIGHTS RESERVED.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-7 h-7 bg-[#FFFFFF] hover:bg-[#2E5BFF] hover:text-white text-[#1C1B19] border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center transition-all active:translate-x-[1px] active:translate-y-[1px] flex-shrink-0"
              aria-label="Kembali ke atas"
              title="Kembali ke atas"
            >
              <HiArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
