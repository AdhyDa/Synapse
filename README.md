# ⚡ Synapse — UI/UX Group Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14%2B-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4%2B-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11%2B-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-Hosted-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

**Synapse** adalah platform portofolio kelompok interaktif berbasis web yang memamerkan hasil karya dan studi kasus UI/UX Design dari dua proyek utama dengan spektrum visual kontras 180 derajat: **Bidang Pendidikan (Humanis & Ramah)** dan **Bidang Industri (Presisi & High Data-Density)**.

---

## 🎨 Visual Identity & Dual Design Spectrum

Sistem desain di dalam Synapse dibangun berdasarkan fondasi *Design Tokens* yang fleksibel untuk memfasilitasi dua karakter visual yang saling bertolak belakang secara harmonis:

| Parameter | 🎓 Proyek Pendidikan (Education Domain) | 🏭 Proyek Industri (Industry Domain) |
|---|---|---|
| **Tone & Voice** | Humanis, hangat, approachable, dan membakar semangat belajar. | Presisi, mekanikal, teknikal, dan berorientasi data/telemetri. |
| **Primary Color** | System Blue (`#3B82F6`) | Steel Cyan (`#06B6D4`) / Midnight Slate (`#0F172A`) |
| **Accent Color** | Yellow Sun (`#F59E0B`) | Safety Orange (`#EA580C`) / Alert Red (`#EF4444`) |
| **Background** | Soft Cream (`#FAFAF9`) | Carbon Black (`#090D16`) / Industrial Slate (`#0F172A`) |
| **Typography** | Plus Jakarta Sans & DM Sans | Space Grotesk, Inter, & JetBrains Mono (Monospace Data) |
| **Shapes & Cards** | Soft rounded corners (`12px` - `16px`), Pill buttons, soft shadows. | Sharp corners (`2px` - `4px`), Hairline borders (`1px`), dense grid matrix. |

---

## ✨ Key Features & UX Highlights

* **Split-View Hero Section:** Layar pembuka interaktif terbelah 50/50 yang mengekspos kontras visual kedua proyek utama secara bersamaan dengan efek ekspansi dinamis saat di-hover.
* **Sticky Horizontal Scroll Showcase:** Galeri pameran karya (*case study showcase*) yang bergerak secara horizontal mengikuti alur guliran layar (*scroll-driven timeline*) dengan kontrol ritme navigasi penuh di tangan pengguna.
* **Interactive Design System Preview:** Komponen dokumentasi *tokens* warna, skala tipografi, dan gaya tombol/kartu yang dapat diuji coba langsung side-by-side.
* **Detailed Case Study Pages (`/proyek/[slug]`):** Dokumentasi studi kasus UI/UX mendalam mencakup riset *Empathize*, *Wireframe*, hingga *Figma Interactive Prototype Embed*.
* **Assignment Archive & Team Roles:** Index tabel penugasan mingguan yang terfilter serta pembagian kontribusi peran anggota kelompok.

---

## 🛠️ Tech Stack

### Front-End & Animation
* **Framework:** Next.js 14+ (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS, `clsx`, `tailwind-merge`
* **Animations:** Framer Motion (Layout Animations & Scroll-driven motion)
* **Icons:** Lucide React (`lucide-react`)

### Deployment & Storage
* **Hosting Platform:** Vercel (Optimized image pipeline via `next/image`)
* **Content Management:** Static JSON Data / Markdown (MDX)

---

## 📁 Repository Structure

```text
├── app/
│   ├── layout.tsx                  # Root layout & font configurations
│   ├── page.tsx                    # Hybrid One-Page Portfolio Landing
│   ├── globals.css                 # Custom utility classes & token variables
│   └── proyek/
│       └── [slug]/
│           └── page.tsx            # Dynamic Case Study Route
├── components/
│   ├── ui/                         # Reusable atomic UI components (Button, Badge, Card, Modal)
│   ├── navbar/
│   │   └── FloatingNavbar.tsx     # Glassmorphic floating navigation
│   ├── sections/
│   │   ├── HeroSplit.tsx           # Interactive 50/50 Split Hero
│   │   ├── ShowcaseHorizontal.tsx # Sticky horizontal scroll showcase
│   │   ├── DesignSystemPreview.tsx# Dual-spectrum token guide
│   │   ├── AssignmentArchive.tsx  # Weekly course assignment index
│   │   └── TeamSection.tsx        # Team member profile & roles
│   └── case-study/                 # Components for detailed project articles
├── data/                           # Mock database for projects, assignments, and team members
├── types/                          # Strict TypeScript interfaces
└── public/                         # Static assets, mockups, and screenshots

```

---

## 🚀 Getting Started

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda:

### Prerequisites

* **Node.js** v18.17.0 atau versi yang lebih baru.
* **npm** / **pnpm** / **yarn** package manager.

### Installation

1. **Clone repositori ini:**
```bash
git clone [https://github.com/AdhyDa/Synapse.git](https://github.com/AdhyDa/Synapse.git)
cd Synapse

```


2. **Install dependensi:**
```bash
npm install
# atau
pnpm install

```


3. **Jalankan server pengembangan:**
```bash
npm run dev
# atau
pnpm dev

```


4. **Buka di browser:**
Akses `http://localhost:3000` pada peramban Anda untuk melihat tampilan aplikasi.

---

## 👥 Team Members & Contributions

Proyek ini dikembangkan oleh kelompok mahasiswa **UI/UX Design - Informatics Engineering, State University of Malang**:

* **[Adhyaksa Daudi Musthofa Akhyar]**
* **[Azahra Brilian]**
* **[Dinda Nurul Azizah]**
* **[Fadlilah Aditya Ahmad]**

---

## 📄 License

Proyek ini dibuat untuk memenuhi tugas akademik mata kuliah UI/UX Design. Hak cipta penuh atas aset desain dan kode sumber berada pada tim pengembang.
