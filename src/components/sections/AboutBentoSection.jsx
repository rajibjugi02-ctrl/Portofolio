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
  HiOutlineVideoCamera
} from 'react-icons/hi';
import { motion } from 'motion/react';
import { CapCutIcon } from '../ui/Icons';
import LogoLoop from '../ui/LogoLoop/LogoLoop';
import CharacterPhoto from '../ui/CharacterPhoto';
import PixelCard from '../ui/PixelCard';
import PixelBadge from '../ui/PixelBadge';
import SplitTextReveal from '../ui/SplitTextReveal';
import { IsometricTerminal, IsometricCube } from '../ui/PixelIsometricIcons';
import portfolioData from '../../data/portfolio.json';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function AboutBentoSection() {
  const { profile, skills } = portfolioData;
  const { biodata } = profile;
  const revealRef = useScrollReveal();

  const techLogos = [
    {
      title: 'TypeScript',
      node: <SiTypescript className="text-[#3178C6]" size={40} />,
      hoverColor: '#3178C6',
    },
    {
      title: 'Next.js',
      node: <SiNextdotjs className="text-[#1C1B19]" size={40} />,
      hoverColor: '#1C1B19',
    },
    {
      title: 'Tailwind CSS',
      node: <SiTailwindcss className="text-[#2E5BFF]" size={40} />,
      hoverColor: '#2E5BFF',
    },
    {
      title: 'Supabase',
      node: <SiSupabase className="text-[#3D7A5A]" size={40} />,
      hoverColor: '#3D7A5A',
    },
    {
      title: 'HTML5',
      node: <SiHtml5 className="text-[#D95D39]" size={40} />,
      hoverColor: '#D95D39',
    },
    {
      title: 'CSS3',
      node: <SiCss className="text-[#2E5BFF]" size={40} />,
      hoverColor: '#2E5BFF',
    },
    {
      title: 'JavaScript',
      node: <SiJavascript className="text-[#E2B734]" size={40} />,
      hoverColor: '#E2B734',
    },
    {
      title: 'PHP',
      node: <SiPhp className="text-[#777BB4]" size={40} />,
      hoverColor: '#777BB4',
    },
    {
      title: 'Figma',
      node: <SiFigma className="text-[#F24E1E]" size={40} />,
      hoverColor: '#F24E1E',
    },
    {
      title: 'CapCut',
      node: <CapCutIcon size={38} className="text-[#1C1B19]" />,
      hoverColor: '#1C1B19',
    },
    {
      title: 'Videography',
      node: <HiOutlineVideoCamera className="text-[#2E5BFF]" size={40} />,
      hoverColor: '#2E5BFF',
    },
    {
      title: 'Git',
      node: <SiGit className="text-[#F05032]" size={40} />,
      hoverColor: '#F05032',
    },
    {
      title: 'GitHub',
      node: <SiGithub className="text-[#181717]" size={40} />,
      hoverColor: '#181717',
    },
    {
      title: 'Vercel',
      node: <SiVercel className="text-[#1C1B19]" size={40} />,
      hoverColor: '#1C1B19',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-28">
      <div 
        ref={revealRef} 
        className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 w-full reveal-init"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <IsometricTerminal size={22} />
            <span className="font-pixel text-xs font-bold tracking-widest text-[#2E5BFF] uppercase">
              TENTANG SAYA • PROFIL & BIODATA
            </span>
          </div>
          
          <SplitTextReveal
            text="Mengenal Muhammad Rajib Zahir"
            as="h2"
            className="font-pixel text-3xl sm:text-5xl font-bold text-[#1C1B19] tracking-tight mb-4 uppercase"
          />

          <p className="font-sans text-[#5E5C56] text-base sm:text-lg leading-relaxed">
            Siswa SMK Negeri 1 Ciomas jurusan PPLG yang memadukan keahlian Web Development, Desain Grafis, Video Editing, dan Videografi.
          </p>
        </div>

        {/* Bento Grid Container with Motion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Biodata Resmi (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-7 h-full"
          >
            <PixelCard
              variant="white"
              shadowSize="normal"
              className="p-6 sm:p-8 flex flex-col justify-between h-full"
            >
              <div>
                {/* Window-style header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#1C1B19]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#2E5BFF] text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center">
                      <HiOutlineUser className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-pixel text-base sm:text-lg font-bold text-[#1C1B19] uppercase">
                        Biodata Resmi
                      </h3>
                      <p className="font-mono text-xs text-[#5E5C56]">IDENTITAS & INFORMASI AKADEMIK</p>
                    </div>
                  </div>

                  <PixelBadge variant="sage" size="sm">
                    SMK N 1 CIOMAS
                  </PixelBadge>
                </div>

                {/* Biodata Key-Value Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Nama Lengkap */}
                  <div className="p-3 bg-[#F7F6F2] border-2 border-[#1C1B19]">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#5E5C56] mb-1 uppercase">
                      <HiOutlineUser className="w-3.5 h-3.5 text-[#2E5BFF]" />
                      <span>Nama Lengkap</span>
                    </div>
                    <div className="font-sans text-sm font-bold text-[#1C1B19]">
                      {biodata?.fullName || 'Muhammad Rajib Zahir'}
                    </div>
                  </div>

                  {/* Usia */}
                  <div className="p-3 bg-[#F7F6F2] border-2 border-[#1C1B19]">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#5E5C56] mb-1 uppercase">
                      <HiOutlineCalendar className="w-3.5 h-3.5 text-[#3D7A5A]" />
                      <span>Usia</span>
                    </div>
                    <div className="font-sans text-sm font-bold text-[#1C1B19]">
                      {biodata?.age || '16 Tahun'}
                    </div>
                  </div>

                  {/* Sekolah */}
                  <div className="p-3 bg-[#F7F6F2] border-2 border-[#1C1B19]">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#5E5C56] mb-1 uppercase">
                      <HiOutlineAcademicCap className="w-3.5 h-3.5 text-[#2E5BFF]" />
                      <span>Sekolah</span>
                    </div>
                    <div className="font-sans text-sm font-bold text-[#1C1B19]">
                      {biodata?.school || 'SMK Negeri 1 Ciomas'}
                    </div>
                  </div>

                  {/* Jurusan */}
                  <div className="p-3 bg-[#F7F6F2] border-2 border-[#1C1B19]">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#5E5C56] mb-1 uppercase">
                      <HiOutlineBookOpen className="w-3.5 h-3.5 text-[#D95D39]" />
                      <span>Jurusan</span>
                    </div>
                    <div className="font-sans text-sm font-bold text-[#1C1B19]">
                      {biodata?.major || 'PPLG (Pengembangan Perangkat Lunak dan Gim)'}
                    </div>
                  </div>

                  {/* Domisili */}
                  <div className="p-3 bg-[#F7F6F2] border-2 border-[#1C1B19]">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#5E5C56] mb-1 uppercase">
                      <HiOutlineLocationMarker className="w-3.5 h-3.5 text-[#D95D39]" />
                      <span>Domisili</span>
                    </div>
                    <div className="font-sans text-sm font-bold text-[#1C1B19]">
                      {biodata?.domicile || 'Bogor, Jawa Barat, Indonesia'}
                    </div>
                  </div>

                  {/* Minat & Fokus */}
                  <div className="p-3 bg-[#F7F6F2] border-2 border-[#1C1B19]">
                    <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#5E5C56] mb-1 uppercase">
                      <HiOutlineLightningBolt className="w-3.5 h-3.5 text-[#2E5BFF]" />
                      <span>Minat & Fokus</span>
                    </div>
                    <div className="font-sans text-xs font-bold text-[#1C1B19] leading-relaxed">
                      {biodata?.focus || 'Graphic Design, Video Editing, Web Development (Front-End), & Videography'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom summary line */}
              <div className="mt-6 pt-4 border-t-2 border-[#1C1B19] flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#5E5C56]">
                <span>SMK N 1 Ciomas (PPLG) • Terbuka untuk Kolaborasi</span>
                <span className="font-bold text-[#2E5BFF]">{profile.email}</span>
              </div>
            </PixelCard>
          </motion.div>

          {/* Card 2: Character Photo Visual (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-5 h-full"
          >
            <PixelCard
              variant="stone"
              shadowSize="normal"
              className="p-6 sm:p-8 flex flex-col items-center justify-center text-center bg-[#EFECE6] h-full"
            >
              <div className="flex items-center gap-2 mb-4">
                <IsometricCube size={16} color="#2E5BFF" />
                <span className="font-pixel text-xs font-bold text-[#1C1B19] uppercase tracking-wider">
                  KARAKTER & IDENTITAS DIRI
                </span>
              </div>

              {/* Character Photo in Pixel Frame */}
              <div className="my-2">
                <CharacterPhoto size="compact" showBadges={true} />
              </div>

              <div className="mt-4">
                <h4 className="font-pixel text-base font-bold text-[#1C1B19] uppercase">
                  Muhammad Rajib Zahir
                </h4>
                <p className="font-sans text-xs text-[#5E5C56] mt-1 max-w-xs">
                  Siswa PPLG SMK Negeri 1 Ciomas yang antusias terhadap visual kreatif dan teknologi web modern.
                </p>
              </div>
            </PixelCard>
          </motion.div>

          {/* Card 3: Latar Belakang & Cerita (6 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.12 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-6 h-full"
          >
            <PixelCard
              variant="white"
              shadowSize="normal"
              className="p-6 sm:p-8 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-8 h-8 bg-[#2E5BFF] text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center mb-4">
                  <HiOutlineCode className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold text-[#5E5C56] uppercase tracking-wider block mb-1">
                  LATAR BELAKANG
                </span>
                <h3 className="font-pixel text-xl sm:text-2xl font-bold text-[#1C1B19] tracking-tight mb-4 uppercase">
                  Dedikasi Koding Front-End & Kreativitas Media
                </h3>
                <p className="font-sans text-sm text-[#5E5C56] leading-relaxed mb-4">
                  {profile.aboutParagraphs[0]}
                </p>
                <p className="font-sans text-sm text-[#5E5C56] leading-relaxed">
                  {profile.aboutParagraphs[1]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-[#1C1B19] flex items-center gap-2 font-mono text-xs font-bold text-[#3D7A5A]">
                <HiOutlineCheckCircle className="w-4 h-4 flex-shrink-0" />
                <span>Web Development • Desain Grafis • Video Editing • Kameramen</span>
              </div>
            </PixelCard>
          </motion.div>

          {/* Card 4: CORE COMPETENCIES (6 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.16 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-6 h-full"
          >
            <PixelCard
              variant="white"
              shadowSize="normal"
              className="p-6 sm:p-8 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-8 h-8 bg-[#3D7A5A] text-white border-2 border-[#1C1B19] shadow-[2px_2px_0px_0px_#1C1B19] flex items-center justify-center mb-4">
                  <HiOutlineSparkles className="w-4 h-4" />
                </div>
                <span className="font-mono text-xs font-bold text-[#3D7A5A] uppercase tracking-wider block mb-1">
                  CORE COMPETENCIES
                </span>
                <h3 className="font-pixel text-xl sm:text-2xl font-bold text-[#1C1B19] tracking-tight mb-4 uppercase">
                  Keahlian Pemrograman & Desain Grafis
                </h3>

                {/* Verified Actual Skills List as Pixel Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.coreCompetencies.map((skill, index) => (
                    <PixelBadge
                      key={index}
                      variant={skill.category.includes('Design') ? 'terracotta' : skill.category.includes('Video') ? 'sage' : 'cobalt'}
                      size="md"
                    >
                      {skill.name}
                    </PixelBadge>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#F7F6F2] border-2 border-[#1C1B19] font-mono text-xs text-[#5E5C56] flex items-center justify-between">
                <span>Bebas AI Slop & Template Kaku</span>
                <span className="font-bold text-[#2E5BFF]">100% Praktik Nyata</span>
              </div>
            </PixelCard>
          </motion.div>

          {/* Card 5: Tooling & Framework Ecosystem (12 cols on lg) */}
          {/* Note: Guardrail compliance: We do NOT touch or wrap internal LogoLoop elements */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26, delay: 0.2 }}
            className="lg:col-span-12"
          >
            <PixelCard
              variant="white"
              shadowSize="normal"
              className="p-6 sm:p-8 overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <span className="font-mono text-xs font-bold text-[#5E5C56] uppercase tracking-wider block mb-1">
                    TOOLING & FRAMEWORK EKOSISTEM
                  </span>
                  <h3 className="font-pixel text-xl sm:text-2xl font-bold text-[#1C1B19] uppercase tracking-tight">
                    Bahasa & Alat Kreatif yang Dikuasai
                  </h3>
                </div>
                <p className="font-mono text-xs text-[#5E5C56]">
                  Hover atau drag untuk berinteraksi dengan logo
                </p>
              </div>

              {/* LogoLoop Integration: coordinates preserved untouched */}
              <div className="py-2">
                <LogoLoop
                  logos={techLogos}
                  speed={90}
                  direction="left"
                  logoHeight={38}
                  gap={50}
                  hoverSpeed={0}
                  scaleOnHover={true}
                  fadeOut={true}
                  muted={0.3}
                  labels="hover"
                  draggable={true}
                />
              </div>
            </PixelCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
