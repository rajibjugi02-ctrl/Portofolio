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
    <footer className="border-t border-[#EAEAEA] bg-white py-14">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Brand & Title */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
            <span className="w-7 h-7 rounded-full bg-[#4A6B82] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-sm">
              RZ
            </span>
            <span className="font-bold text-[#1A1A1A] text-base tracking-tight whitespace-nowrap">
              {profile.name}
            </span>
          </div>
          <p className="text-xs text-[#888888] max-w-sm">
            {profile.role} • Rekayasa Web Front-End, Desain Grafis Canva, Video Editing & Videography
          </p>
        </div>

        {/* Social Icons Row */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-2">
            <a
              href={contact.primaryEmail.href}
              className="p-2.5 rounded-full bg-[#F9F9F9] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#EAEAEA] shadow-soft-sm transition-all duration-200 active:scale-95"
              aria-label="Kirim Email"
              title="Email Utama"
            >
              <HiOutlineMail className="w-4 h-4" />
            </a>

            <a
              href={contact.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#F9F9F9] hover:bg-[#1A1A1A] text-[#1A1A1A] hover:text-white border border-[#EAEAEA] shadow-soft-sm transition-all duration-200 active:scale-95"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <SiGithub className="w-4 h-4" />
            </a>

            <a
              href={contact.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#F9F9F9] hover:bg-[#E4405F] text-[#1A1A1A] hover:text-white border border-[#EAEAEA] shadow-soft-sm transition-all duration-200 active:scale-95"
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <SiInstagram className="w-4 h-4" />
            </a>

            <a
              href={contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#F9F9F9] hover:bg-[#0077B5] text-[#1A1A1A] hover:text-white border border-[#EAEAEA] shadow-soft-sm transition-all duration-200 active:scale-95"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>

            <a
              href={contact.canvaEmail.href}
              className="p-2.5 rounded-full bg-[#F9F9F9] hover:bg-[#00C4CC] text-[#1A1A1A] hover:text-white border border-[#EAEAEA] shadow-soft-sm transition-all duration-200 active:scale-95"
              aria-label="Canva Email"
              title="Canva / Email Desain"
            >
              <CanvaIcon size={16} />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-xs text-[#888888] whitespace-nowrap">
              &copy; {new Date().getFullYear()} Muhammad Rajib Zahir. Hak cipta dilindungi.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#F9F9F9] hover:bg-[#EAEAEA] text-[#1A1A1A] flex items-center justify-center transition-colors border border-[#EAEAEA] active:scale-95 flex-shrink-0"
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
