import { 
  SiJavascript, 
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiHtml5, 
  SiCss, 
  SiPhp,
  SiGit, 
  SiFigma, 
  SiVercel, 
  SiGithub 
} from 'react-icons/si';
import { 
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineLocationMarker,
  HiOutlineLightningBolt,
  HiOutlineSparkles,
  HiOutlineCode,
  HiOutlineCheckCircle,
  HiOutlineVideoCamera,
  HiOutlineCamera
} from 'react-icons/hi';
import { CanvaIcon, CapCutIcon } from '../ui/Icons';
import LogoLoop from '../ui/LogoLoop/LogoLoop';
import CharacterPhoto from '../ui/CharacterPhoto';
import portfolioData from '../../data/portfolio.json';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function AboutBentoSection() {
  const { profile, skills } = portfolioData;
  const { biodata } = profile;
  const revealRef = useScrollReveal();

  // Tech & Tool logos customized for actual skills
  const techLogos = [
    {
      title: 'TypeScript',
      node: <SiTypescript className="text-[#3178C6]" size={42} />,
      hoverColor: '#3178C6',
    },
    {
      title: 'Next.js',
      node: <SiNextdotjs className="text-[#000000]" size={42} />,
      hoverColor: '#000000',
    },
    {
      title: 'Tailwind CSS',
      node: <SiTailwindcss className="text-[#06B6D4]" size={42} />,
      hoverColor: '#06B6D4',
    },
    {
      title: 'Supabase',
      node: <SiSupabase className="text-[#3ECF8E]" size={42} />,
      hoverColor: '#3ECF8E',
    },
    {
      title: 'HTML5',
      node: <SiHtml5 className="text-[#E34F26]" size={42} />,
      hoverColor: '#E34F26',
    },
    {
      title: 'CSS3',
      node: <SiCss className="text-[#1572B6]" size={42} />,
      hoverColor: '#1572B6',
    },
    {
      title: 'JavaScript',
      node: <SiJavascript className="text-[#F7DF1E]" size={42} />,
      hoverColor: '#F7DF1E',
    },
    {
      title: 'PHP',
      node: <SiPhp className="text-[#777BB4]" size={42} />,
      hoverColor: '#777BB4',
    },
    {
      title: 'Canva',
      node: <CanvaIcon size={42} className="text-[#00C4CC]" />,
      hoverColor: '#00C4CC',
    },
    {
      title: 'Figma',
      node: <SiFigma className="text-[#F24E1E]" size={42} />,
      hoverColor: '#F24E1E',
    },
    {
      title: 'CapCut',
      node: <CapCutIcon size={40} className="text-[#1A1A1A]" />,
      hoverColor: '#1A1A1A',
    },
    {
      title: 'Videography',
      node: <HiOutlineVideoCamera className="text-[#4A6B82]" size={42} />,
      hoverColor: '#4A6B82',
    },
    {
      title: 'Git',
      node: <SiGit className="text-[#F05032]" size={42} />,
      hoverColor: '#F05032',
    },
    {
      title: 'GitHub',
      node: <SiGithub className="text-[#181717]" size={42} />,
      hoverColor: '#181717',
    },
    {
      title: 'Vercel',
      node: <SiVercel className="text-[#000000]" size={42} />,
      hoverColor: '#000000',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative scroll-mt-28">
      <div 
        ref={revealRef} 
        className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full reveal-init"
      >
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-[#4A6B82] uppercase mb-2.5 inline-block">
            Tentang Saya • Profil & Biodata
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
            Mengenal Muhammad Rajib Zahir
          </h2>
          <p className="text-[#666666] text-base sm:text-lg leading-relaxed">
            Siswa SMK Negeri 1 Ciomas jurusan PPLG yang memadukan keahlian Web Development, Desain Grafis, Video Editing, dan Videografi.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Biodata Resmi (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-[#EAEAEA] shadow-soft-sm hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#EAEAEA]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#EBF1F5] text-[#4A6B82] flex items-center justify-center">
                    <HiOutlineUser className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1A1A] tracking-tight">
                      Biodata Resmi
                    </h3>
                    <p className="text-xs text-[#888888]">Identitas & Informasi Akademik</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-[#EFF4F0] text-[#5C7A67] text-xs font-semibold whitespace-nowrap">
                  SMK N 1 Ciomas
                </span>
              </div>

              {/* Biodata Key-Value Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Nama Lengkap */}
                <div className="p-4 rounded-2xl bg-[#F9F9F9] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#888888] mb-1">
                    <HiOutlineUser className="w-3.5 h-3.5 text-[#4A6B82]" />
                    <span>Nama Lengkap</span>
                  </div>
                  <div className="text-sm font-bold text-[#1A1A1A]">
                    {biodata?.fullName || 'Muhammad Rajib Zahir'}
                  </div>
                </div>

                {/* Usia */}
                <div className="p-4 rounded-2xl bg-[#F9F9F9] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#888888] mb-1">
                    <HiOutlineCalendar className="w-3.5 h-3.5 text-[#5C7A67]" />
                    <span>Usia</span>
                  </div>
                  <div className="text-sm font-bold text-[#1A1A1A]">
                    {biodata?.age || '16 Tahun'}
                  </div>
                </div>

                {/* Sekolah (Updated Label) */}
                <div className="p-4 rounded-2xl bg-[#F9F9F9] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#888888] mb-1">
                    <HiOutlineAcademicCap className="w-3.5 h-3.5 text-[#4A6B82]" />
                    <span>Sekolah</span>
                  </div>
                  <div className="text-sm font-bold text-[#1A1A1A]">
                    {biodata?.school || 'SMK Negeri 1 Ciomas'}
                  </div>
                </div>

                {/* Jurusan (Updated Label) */}
                <div className="p-4 rounded-2xl bg-[#F9F9F9] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#888888] mb-1">
                    <HiOutlineBookOpen className="w-3.5 h-3.5 text-[#C27D38]" />
                    <span>Jurusan</span>
                  </div>
                  <div className="text-sm font-bold text-[#1A1A1A]">
                    {biodata?.major || 'PPLG (Pengembangan Perangkat Lunak dan Gim)'}
                  </div>
                </div>

                {/* Domisili / Alamat (Bogor) */}
                <div className="p-4 rounded-2xl bg-[#F9F9F9] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#888888] mb-1">
                    <HiOutlineLocationMarker className="w-3.5 h-3.5 text-[#E4405F]" />
                    <span>Domisili / Alamat</span>
                  </div>
                  <div className="text-sm font-bold text-[#1A1A1A]">
                    {biodata?.domicile || 'Bogor, Jawa Barat, Indonesia'}
                  </div>
                </div>

                {/* Minat & Fokus */}
                <div className="p-4 rounded-2xl bg-[#F9F9F9] border border-[#EAEAEA]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#888888] mb-1">
                    <HiOutlineLightningBolt className="w-3.5 h-3.5 text-[#00C4CC]" />
                    <span>Minat & Fokus</span>
                  </div>
                  <div className="text-xs font-bold text-[#1A1A1A] leading-relaxed">
                    {biodata?.focus || 'Graphic Design, Video Editing, Web Development (Front-End), & Videography / Kameramen'}
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom summary note */}
            <div className="mt-6 pt-4 border-t border-[#EAEAEA] flex flex-wrap items-center justify-between gap-2 text-xs text-[#777777]">
              <span>Siswa SMK Negeri 1 Ciomas (PPLG) • Aktif & Terbuka untuk Kolaborasi</span>
              <span className="font-semibold text-[#4A6B82]">{profile.email}</span>
            </div>
          </div>

          {/* Card 2: Interactive Character Photo Visual (5 cols on lg) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-[#EAEAEA] shadow-soft-sm hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-4">
              Karakter & Identitas Diri
            </span>

            {/* Character Photo */}
            <div className="my-2">
              <CharacterPhoto size="compact" showBadges={true} />
            </div>

            <div className="mt-5">
              <h4 className="text-base font-bold text-[#1A1A1A]">Muhammad Rajib Zahir</h4>
              <p className="text-xs text-[#666666] mt-1 max-w-xs">
                Siswa PPLG SMK Negeri 1 Ciomas yang antusias terhadap visual kreatif dan teknologi web.
              </p>
            </div>
          </div>

          {/* Card 3: Latar Belakang & Cerita (6 cols on lg) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-9 border border-[#EAEAEA] shadow-soft-sm hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#EBF1F5] text-[#4A6B82] flex items-center justify-center mb-5">
                <HiOutlineCode className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                Latar Belakang
              </span>
              <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight mb-4">
                Dedikasi Koding Front-End & Kreativitas Media
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-4">
                {profile.aboutParagraphs[0]}
              </p>
              <p className="text-sm text-[#666666] leading-relaxed">
                {profile.aboutParagraphs[1]}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EAEAEA] flex items-center gap-2 text-xs font-semibold text-[#5C7A67]">
              <HiOutlineCheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>Kombinasi Web Development, Desain Grafis, Video Editing & Kameramen</span>
            </div>
          </div>

          {/* Card 4: Kartu Keahlian (CORE COMPETENCIES) (6 cols on lg) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-9 border border-[#EAEAEA] shadow-soft-sm hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#EFF4F0] text-[#5C7A67] flex items-center justify-center mb-5">
                <HiOutlineSparkles className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-[#5C7A67] uppercase tracking-wider block mb-1">
                CORE COMPETENCIES
              </span>
              <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight mb-4">
                Keahlian Pemrograman, Desain Grafis & Kreatif Media
              </h3>

              {/* Verified Actual Skills List */}
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.coreCompetencies.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-[#F9F9F9] hover:bg-[#F0F0F0] text-[#1A1A1A] border border-[#EAEAEA] transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#F9F9F9] border border-[#EAEAEA] text-xs text-[#666666] flex items-center justify-between">
              <span>Bebas AI Slop & Template Kaku</span>
              <span className="font-bold text-[#4A6B82]">100% Praktik Nyata</span>
            </div>
          </div>

          {/* Card 5: Wide Full Bento Card for <LogoLoop /> (12 cols on lg) */}
          <div className="lg:col-span-12 bg-white rounded-3xl p-7 sm:p-10 border border-[#EAEAEA] shadow-soft-sm hover:-translate-y-1 hover:shadow-xl hover:border-neutral-300 transition-all duration-300 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-7">
              <div>
                <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                  Tooling & Framework Ekosistem
                </span>
                <h3 className="text-xl font-bold text-[#1A1A1A] tracking-tight">
                  Bahasa & Alat Kreatif yang Dikuasai
                </h3>
              </div>
              <p className="text-xs text-[#888888]">
                Arahkan kursor atau drag untuk berinteraksi dengan logo
              </p>
            </div>

            {/* LogoLoop Integration */}
            <div className="py-2">
              <LogoLoop
                logos={techLogos}
                speed={90}
                direction="left"
                logoHeight={42}
                gap={56}
                hoverSpeed={0}
                scaleOnHover={true}
                fadeOut={true}
                muted={0.4}
                labels="hover"
                draggable={true}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
