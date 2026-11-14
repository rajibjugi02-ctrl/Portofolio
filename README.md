# Portofolio Profesional — Muhammad Rajib Zahir

> **Web Developer & Creative Designer**  
> Harmoni rekayasa kode bersih (React.js, Tailwind CSS) dan estetika desain komunikasi visual (Canva, Editorial Design). Siap di-deploy langsung ke Vercel.

---

## 🚀 Fitur & Keunggulan Utama

1. **Floating Pill Navbar Modern**:
   - Desktop: Floating pill navbar di tengah atas dengan backdrop-blur semi-transparan, active section tracker, dan tombol CTA.
   - Mobile: Floating button responsif yang membuka menu card mengambang dengan transisi Tailwind yang halus.
2. **Hero Section Profesional**:
   - Frame profil foto minimalis, headline tegas peran ganda, ringkasan pengenalan, status ketersediaan kerja, dan 2 tombol CTA interaktif.
3. **Bento Grid & `<LogoLoop />` (About & Skills)**:
   - Layout grid asimetris minimalis bergaya Modern Editorial (bebas AI-slop).
   - Menampilkan filosofi kerja, keunggulan sinergi Front-End + Canva, daftar hard/soft skills, serta animasi infinite marquee logo alat dan bahasa pemrograman.
4. **Dedicated Web Development Showcase**:
   - Kartu proyek dengan zoom halus pada mockup image, judul, deskripsi mendalam, badge stack teknologi, serta tombol Live Demo & Source Code.
5. **Dedicated Graphic Design & Canva Gallery (`<Masonry />`)**:
   - Bagian terpisah khusus karya desain grafis Canva (poster promosi, brand identity, slide presentasi korporat, feed sosmed, dan flyer digital).
   - Dilengkapi layout dinamis Masonry, efek zoom, filter blur to focus, dan Lightbox modal interaktif.
6. **Experience & Education Timeline**:
   - Timeline vertikal elegan dengan filter riwayat (Semua, Pekerjaan, Pendidikan & Organisasi).
7. **Contact & Footer Section**:
   - Kartu CTA ajakan kolaborasi dengan aksi kirim email langsung, tombol salin email dengan feedback, dan tautan jejaring sosial.

---

## 🛠️ Tech Stack & Dependensi

- **Core**: React 19, Vite
- **Styling**: Tailwind CSS v3, PostCSS, Autoprefixer
- **Icons**: React Icons (`react-icons/si`, `react-icons/fa6`, `react-icons/hi`), Hugeicons (`@hugeicons/react`, `@hugeicons/core-free-icons`)
- **Typography**: Plus Jakarta Sans & Inter (Google Fonts)
- **Animasi & Interaksi**: React Bits (`LogoLoop`, `Masonry`)

---

## 📁 Struktur Direktori

```text
portofolio/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── hero.png
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── AboutBentoSection.jsx
│   │   │   ├── WebProjectsSection.jsx
│   │   │   ├── DesignMasonrySection.jsx
│   │   │   ├── ExperienceSection.jsx
│   │   │   └── ContactSection.jsx
│   │   └── ui/
│   │       ├── Icons.jsx
│   │       ├── LogoLoop/
│   │       │   ├── LogoLoop.jsx
│   │       │   └── LogoLoop.css
│   │       └── Masonry/
│   │           ├── Masonry.jsx
│   │           └── Masonry.css
│   ├── data/
│   │   └── portfolio.json
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

---

## 💻 Menjalankan Secara Lokal

1. **Install dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan development server**:
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:5173`.

3. **Build untuk produksi**:
   ```bash
   npm run build
   ```

4. **Preview hasil build**:
   ```bash
   npm run preview
   ```

---

## ☁️ Panduan Deploy ke Vercel

1. **Deploy via GitHub**:
   - Push repository ini ke akun GitHub Anda.
   - Buka [Vercel Dashboard](https://vercel.com/) dan pilih **Add New Project**.
   - Import repository GitHub Anda.
   - Vercel akan secara otomatis mendeteksi Framework Preset **Vite**.
   - Klik **Deploy**.

2. **Deploy via Vercel CLI**:
   ```bash
   npx vercel
   ```
   Ikuti petunjuk di terminal untuk langsung mempublikasikan website ke domain Vercel.
