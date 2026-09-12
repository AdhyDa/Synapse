## 1. Design Overview

### Product

**Synapse**

### Design Purpose

`DESIGN.md` mendefinisikan sistem visual, struktur layout, komponen, interaction pattern, responsive behavior, state, dan accessibility untuk website portfolio kelompok **Synapse**.

Synapse merupakan portfolio yang mendokumentasikan karya UI/UX kelompok, termasuk proyek dalam bidang Pendidikan dan Industri.

Website memiliki **visual identity tersendiri** dan tidak menggabungkan visual direction dari kedua bidang tersebut.

Bidang Pendidikan dan Industri merupakan **kategori konten**, sedangkan Synapse memiliki design language independen.

---

# 2. Design Principles

## 2.1 Editorial Portfolio

Synapse menggunakan pendekatan visual seperti editorial portfolio modern:

* Large typography.
* Generous whitespace.
* Strong visual hierarchy.
* Large project imagery.
* Asymmetric composition.
* Controlled interaction.
* Minimal decorative elements.
* Content sebagai fokus utama.

Inspirasi layout dapat mengambil pendekatan showcase portfolio seperti yang umum digunakan pada platform Awwwards.

Namun, Synapse tidak menyalin layout atau identitas visual dari website tertentu.

---

## 2.2 Negative Space First

Whitespace merupakan bagian utama dari komposisi.

Ruang kosong tidak dianggap sebagai area yang harus selalu diisi.

Penggunaan whitespace bertujuan untuk:

* memberikan jeda visual;
* meningkatkan hierarchy;
* memperkuat typography;
* membuat artwork lebih menonjol;
* memberikan kesan premium/editorial.

---

## 2.3 Content Over Decoration

Animasi, visual effect, dan interaction digunakan untuk membantu pengguna memahami dan menjelajahi konten.

Tidak menggunakan:

* gradient sebagai elemen visual utama;
* decorative animation yang tidak memiliki fungsi;
* excessive shadows;
* excessive rounded cards;
* autoplay carousel yang menghilangkan kontrol pengguna.

---

## 2.4 Calm but Expressive

Synapse harus terasa:

* modern;
* editorial;
* confident;
* sophisticated;
* clean;
* expressive tetapi tidak berlebihan.

Motion digunakan secara subtle dengan beberapa interaction yang lebih expressive pada bagian Hero dan Project Showcase.

---

# 3. User Flows

## 3.1 Primary Reviewer Flow

```text
Landing Page
     │
     ▼
Welcome / Introduction
     │
     ▼
Split-View Hero
   │
   ▼
Project Showcase
   │
   ├── Project Pendidikan
   │       │
   │       ▼
   │   Project Detail
   │       │
   │       ├── Overview
   │       ├── Documentation
   │       ├── Research
   │       ├── Wireframe
   │       ├── Final Design
   │       └── Figma Prototype
   │
   └── Project Industri
           │
           ▼
       Project Detail
```

Tujuan utama flow ini adalah membuat reviewer dapat menemukan karya tanpa harus memahami struktur internal website terlebih dahulu.

---

## 3.2 Homepage Exploration Flow

```text
Navbar
   │
   ▼
Welcome / Intro
   │
   ▼
Split-View Hero
   │
   ▼
Featured Projects
   │
   ▼
Design System Preview
   │
   ▼
Team
   │
   ▼
Weekly Assignment Archive
   │
   ▼
Footer
```

Pengguna dapat berpindah antar-section menggunakan navbar atau anchor navigation.

---

## 3.3 Project Exploration Flow

```text
Project Showcase
      │
      ▼
Project Card
      │
      ▼
Project Detail
      │
      ├── Project Overview
      │
      ├── Process
      │
      ├── Research
      │
      ├── Wireframe
      │
      ├── Final Design
      │
      └── Prototype
              │
              ▼
         Figma Prototype
```

---
## 3.4 Theme Flow

```text
Initial Theme
      │
      ├── Light
      │
      └── Dark
             │
             ▼
       Theme Toggle
             │
             ▼
      Update UI Theme
```

## 3.5 Admin Flow

CMS menggunakan **Sanity**.

```text
Admin
 │
 ▼
Authentication
 │
 ▼
Sanity Studio
 │
 ├── Projects
 ├── Team Members
 ├── Weekly Assignments
 └── Portfolio Content
          │
          ▼
       Publish
          │
          ▼
    Public Website
```

Pengelolaan konten tidak dilakukan melalui custom dashboard pada website publik.

---

# 4. Screen Inventory

|ID|Screen|Route|Priority|Description|
|---|---|---|---|---|
|SCR-01|Homepage|`/`|P1|Landing page utama Synapse|
|SCR-02|Project Detail|`/proyek/[slug]`|P1|Detail karya dan dokumentasi proyek|
|SCR-03|Sanity Studio|External / CMS|P1|Pengelolaan konten|
|SCR-04|Authentication|Sanity-managed|P1|Akses admin/CMS|
|SCR-05|404|`/not-found`|P1|Fallback halaman tidak ditemukan|
|SCR-06|Error|Dynamic|P1|Fallback ketika terjadi error|
|SCR-07|Loading|Dynamic|P1|Loading state|

### Home Sections

S01 memiliki struktur:

1. Navbar
2. Welcome / Negative Space
3. Split-View Hero
4. Project Showcase
5. Design System Preview
6. Team
7. Weekly Assignment Archive
8. Footer

---

# 5. Screen Layouts

# 5.1 Home

## Global Structure

```text
┌───────────────────────────────────────┐
│ Navbar                                │
├───────────────────────────────────────┤
│                                       │
│                                       │
│         WELCOME / NEGATIVE SPACE      │
│                                       │
│              SYNAPSE                  │
│          Caption / Body               │
│                                       │
│                                       │
├───────────────────────────────────────┤
│                                       │
│          SPLIT-VIEW HERO              │
│                                       │
│       Education | Industry            │
│                                       │
├───────────────────────────────────────┤
│                                       │
│       PROJECT SHOWCASE                │
│                                       │
│       Horizontal / Editorial          │
│                                       │
├───────────────────────────────────────┤
│       DESIGN SYSTEM PREVIEW           │
├───────────────────────────────────────┤
│       TEAM                            │
├───────────────────────────────────────┤
│       WEEKLY ARCHIVE                  │
├───────────────────────────────────────┤
│       FOOTER                          │
└───────────────────────────────────────┘
```

---

# 5.2 Navbar

Navbar bersifat minimal dan tidak mengambil terlalu banyak visual attention.

### Content

* Synapse / Logo.
* Navigation links.
* Dark/Light mode toggle.

### Navigation

```text
Projects
Design System
Team
Archive
```

Pada mobile, navigation dapat berubah menjadi menu drawer atau compact menu.

### Behavior

Navbar dapat menggunakan sticky positioning apabila diperlukan untuk mempertahankan akses navigasi.

---

# 5.3 Welcome / Negative Space

Bagian ini berada:

```text
Navbar
   ↓
Welcome
   ↓
Split-View Hero
```

Welcome section merupakan halaman pembuka yang sangat luas dengan **white/negative space**.

### Content

Hanya menampilkan:

```text
SYNAPSE

[body / caption]
```

Tidak menggunakan:

* image hero;
* card;
* gradient;
* decorative illustration;
* excessive animation.

### Composition

Logo/nama **Synapse** menjadi focal point.

Caption berada di bawahnya dengan hierarchy yang jauh lebih kecil.

### Intended Feeling

* Calm.
* Spacious.
* Confident.
* Premium.
* Anticipatory.

Whitespace menjadi elemen utama, bukan kekosongan yang harus ditambal.

---

# 5.4 Split-View Hero

Split-View Hero memperkenalkan dua kategori portfolio:

```text
┌──────────────────┬──────────────────┐
│                  │                  │
│    PENDIDIKAN    │     INDUSTRI     │
│                  │                  │
│    Explore →     │     Explore →    │
│                  │                  │
└──────────────────┴──────────────────┘
```

### Interaction

Desktop:

* Dua area berbagi viewport.
* Hover dapat mengubah proporsi area secara subtle.
* Typography/image dapat merespons pointer secara ringan.

Mobile:

* Dua panel disusun secara vertikal atau menggunakan interaction yang tetap dapat diakses melalui touch.

### Important Rule

Split-View Hero tidak mengubah Synapse menjadi gabungan dua design system.

Panel hanya berfungsi sebagai **entry point kategori portfolio**.

---

# 5.5 Project Showcase

Project Showcase merupakan salah satu bagian visual utama website.

### Visual Direction

Menggunakan pendekatan:

* editorial;
* large imagery;
* asymmetric layout;
* generous spacing;
* typography-driven composition;
* visual storytelling.

### Interaction

Desktop:

```text
Scroll ↓
    │
    ▼
Horizontal Project Movement
```

Pengguna tetap mengontrol perpindahan.

Tidak menggunakan infinite auto-carousel.

### Mobile

Horizontal showcase dipertahankan dengan touch/swipe interaction.

Card dapat menggunakan viewport-relative width sehingga sebagian item berikutnya tetap terlihat sebagai affordance bahwa konten dapat digeser.

---

# 5.6 Project Detail

```text
┌─────────────────────────────────────┐
│ Project Hero                        │
│                                     │
│ Project Name                        │
│ Category                            │
│ Short Description                   │
└─────────────────────────────────────┘

Project Overview

Project Information

Documentation

Research
[if available]

Wireframe
[if available]

Final Design

Prototype
[Embed / Figma Link]

Next Project
```

### Project Hero

Menampilkan:

* project title;
* category;
* short description;
* hero visual.

### Project Overview

Berisi informasi singkat mengenai:

* tujuan proyek;
* konteks;
* peran kelompok;
* output.

### Documentation

Dokumentasi tidak harus menggunakan struktur yang sama untuk seluruh proyek.

Section hanya ditampilkan jika data tersedia.

### Prototype

Prototype dapat ditampilkan menggunakan:

* Figma embed; atau
* external Figma link.

Jika embed tidak dapat digunakan, sistem harus menyediakan fallback link.

---

# 5.7 Design System Preview

Section ini menunjukkan bahwa portfolio memiliki kemampuan membangun sistem desain.

### Content

* Color samples.
* Typography.
* Component samples.
* Visual comparison.
* Interactive switch/comparison.

### Layout

```text
DESIGN SYSTEM

[Preview / Comparison]

Colors
Typography
Components
```

Preview bersifat demonstratif dan tidak menggantikan dokumentasi design system yang lebih lengkap jika tersedia.

---

# 5.8 Team

Team section menggunakan layout editorial yang tidak terlalu card-heavy.

### Content per Member

```text
Photo

Name
Role
```

Foto menjadi elemen visual utama.

### Responsive

Desktop:

```text
[Member] [Member] [Member] [Member]
```

Tablet:

```text
[Member] [Member]
[Member] [Member]
```

Mobile:

```text
[Member]
[Member]
[Member]
```

Jumlah kolom mengikuti available width.

---

# 5.9 Weekly Assignment Archive

Archive menggunakan tabel karena tujuan utamanya adalah scanning informasi.

### Example

| Week | Assignment | Description | Project |
| ---- | ---------- | ----------- | ------- |
| 01   | ...        | ...         | ...     |
| 02   | ...        | ...         | ...     |
| 03   | ...        | ...         | ...     |

### Responsive Behavior

Desktop:

Full table.

Mobile:

Tabel dapat berubah menjadi stacked row/card atau horizontal scroll terkontrol.

Tidak memaksakan tabel desktop ke layar mobile hingga teks menjadi mikroskopis.

---

# 5.10 Footer

Footer berisi:

* Synapse identity.
* Navigation.
* Copyright.
* Relevant external links jika diperlukan.

Footer tidak perlu menjadi area dekoratif yang berat.

---

# 6. Component List

## 6.1 Global Components

* `Navbar`
* `ThemeToggle`
* `Footer`
* `SectionHeading`
* `Container`
* `ResponsiveImage`
* `Link`
* `Button`

---

## 6.2 Home Components

* `WelcomeSection`
* `SplitViewHero`
* `ProjectShowcase`
* `ProjectShowcaseItem`
* `DesignSystemPreview`
* `TeamSection`
* `TeamMember`
* `AssignmentArchive`

---

## 6.3 Project Components

* `ProjectHero`
* `ProjectMeta`
* `ProjectOverview`
* `ProjectDocumentation`
* `ResearchSection`
* `WireframeSection`
* `FinalDesignSection`
* `PrototypeEmbed`
* `PrototypeFallback`
* `NextProjectNavigation`

---

## 6.4 CMS Components

Content is managed through Sanity Studio.

Content schemas should include at minimum:

* `project`
* `teamMember`
* `weeklyAssignment`

Additional schemas may be created only when justified by content requirements.

---

## 6.5 State Components

* `LoadingState`
* `EmptyState`
* `ErrorState`
* `SuccessFeedback`
* `Skeleton`
* `RetryButton`

---

# 7. Design Tokens

# 7.1 Brand Colors

Synapse menggunakan visual identity independen dari kategori Pendidikan dan Industri.

### Light Theme

| Token                    | Value     | Usage                |
| ------------------------ | --------- | -------------------- |
| `--color-background`     | `#FFF8E7` | Main background      |
| `--color-primary`        | `#930500` | Primary brand/accent |
| `--color-secondary`      | `#95BBEA` | Secondary accent     |
| `--color-text-primary`   | `#1A1A1A` | Primary text         |
| `--color-text-secondary` | `#5C5C5C` | Secondary text       |
| `--color-surface`        | `#FFFDF7` | Elevated surface     |
| `--color-border`         | `#DED8C9` | Borders/dividers     |

### Dark Theme

Dark theme menggunakan turunan visual yang tetap mempertahankan karakter Synapse.

| Token                         | Value     | Usage            |
| ----------------------------- | --------- | ---------------- |
| `--color-background-dark`     | `#11110F` | Main background  |
| `--color-primary-dark`        | `#FF6B63` | Primary accent   |
| `--color-secondary-dark`      | `#95BBEA` | Secondary accent |
| `--color-text-primary-dark`   | `#F8F4EA` | Primary text     |
| `--color-text-secondary-dark` | `#BDB8AD` | Secondary text   |
| `--color-surface-dark`        | `#1B1B18` | Elevated surface |
| `--color-border-dark`         | `#34342F` | Borders/dividers |

Dark palette bersifat provisional dan dapat disesuaikan setelah visual testing.

### No Gradient Rule

Synapse **tidak menggunakan gradient** sebagai bagian dari design system.

Gunakan:

* solid color;
* contrast;
* whitespace;
* typography;
* image composition;
* borders;
* controlled shadows.

---

# 7.2 Typography

Typography menggunakan sistem yang sederhana dan editorial.

### Primary Font

**Plus Jakarta Sans**

Digunakan sebagai primary typeface untuk:

* heading;
* body;
* navigation;
* metadata;
* UI.

### Type Scale

| Token        | Size | Suggested Use             |
| ------------ | ---: | ------------------------- |
| `display-xl` | 96px | Hero / major title        |
| `display-lg` | 72px | Large section heading     |
| `display-md` | 56px | Project heading           |
| `heading-xl` | 48px | Major heading             |
| `heading-lg` | 40px | Section heading           |
| `heading-md` | 32px | Subsection                |
| `heading-sm` | 24px | Card/project title        |
| `body-lg`    | 20px | Introductory text         |
| `body-md`    | 16px | Default body              |
| `body-sm`    | 14px | Metadata                  |
| `caption`    | 12px | Caption / supporting text |

### Responsive Type

Display sizes should scale down on smaller screens.

Example:

```text
Desktop:
96px

Tablet:
72px

Mobile:
48px
```

Actual values may be implemented using fluid typography such as `clamp()`.

---

# 7.3 Font Weight

| Token      | Weight |
| ---------- | -----: |
| `regular`  |    400 |
| `medium`   |    500 |
| `semibold` |    600 |
| `bold`     |    700 |

Avoid excessive use of bold typography.

---

# 7.4 Spacing

Base spacing unit:

**4px**

| Token      | Value |
| ---------- | ----: |
| `space-1`  |   4px |
| `space-2`  |   8px |
| `space-3`  |  12px |
| `space-4`  |  16px |
| `space-5`  |  20px |
| `space-6`  |  24px |
| `space-8`  |  32px |
| `space-10` |  40px |
| `space-12` |  48px |
| `space-16` |  64px |
| `space-20` |  80px |
| `space-24` |  96px |
| `space-32` | 128px |
| `space-40` | 160px |
| `space-48` | 192px |

Large spacing should be intentionally used around major sections.

---

# 7.5 Layout

### Container

Recommended maximum content width:

```text
1440px
```

with responsive horizontal padding.

### Section Spacing

Major sections should generally use generous vertical spacing:

```text
Desktop:
120–200px

Tablet:
96–144px

Mobile:
72–112px
```

Values are guidelines rather than rigid requirements.

---

# 7.6 Border Radius

Synapse uses a restrained radius system.

| Token         | Value |
| ------------- | ----: |
| `radius-sm`   |   4px |
| `radius-md`   |   8px |
| `radius-lg`   |  16px |
| `radius-xl`   |  24px |
| `radius-pill` | 999px |

Rounded corners should be used selectively.

Do not make every element rounded.

---

# 7.7 Shadows

Shadows are subtle.

Preferred usage:

* elevated navigation;
* interactive overlay;
* modal/dialog;
* selected surface.

Avoid strong generic card shadows.

---

# 8. Motion & Interaction

## 8.1 Motion Principles

Motion should feel:

* smooth;
* controlled;
* intentional;
* editorial.

### Standard Duration

| Type               |  Duration |
| ------------------ | --------: |
| Micro interaction  | 150–200ms |
| UI transition      | 200–300ms |
| Section transition | 300–500ms |
| Hero interaction   | 400–700ms |

---

## 8.2 Hero Motion

Split-View Hero may use:

* panel expansion;
* subtle image movement;
* typography translation;
* opacity changes.

Motion should not make content difficult to access.

---

## 8.3 Scroll Motion

Allowed:

* reveal-on-scroll;
* subtle translation;
* scale;
* horizontal project movement;
* parallax ringan.

Avoid:

* excessive zoom;
* continuous looping animation;
* motion that blocks scrolling;
* forced animation sequences.

---

## 8.4 Reduced Motion

When `prefers-reduced-motion: reduce` is enabled:

* disable non-essential animation;
* reduce transform movement;
* avoid parallax;
* maintain content accessibility;
* retain functional interaction.

---

# 9. Responsive Design

## Breakpoints

Recommended breakpoints:

```text
Mobile:
< 768px

Tablet:
768px – 1023px

Desktop:
≥ 1024px
```

Additional breakpoints may be introduced when content requires them.

---

## Responsive Rules

### Navigation

Desktop:

```text
Logo | Projects | Design System | Team | Archive | Theme
```

Mobile:

```text
Logo | Menu | Theme
```

---

### Split View

Desktop:

Two-column split.

Mobile:

Two vertically stacked panels or touch-friendly equivalent.

---

### Project Showcase

Desktop:

Horizontal scroll experience.

Mobile:

Touch-based horizontal scrolling remains supported.

---

### Team

Desktop:

Multi-column editorial grid.

Mobile:

Single-column or compact grid.

---

### Archive

Desktop:

Full table.

Mobile:

Horizontal scroll or stacked responsive representation.

---

# 10. UI States

# 10.1 Loading State

Loading state digunakan ketika data CMS atau project sedang dimuat.

### Pattern

Gunakan:

* skeleton;
* placeholder block;
* subtle opacity animation.

Hindari spinner besar yang memenuhi layar apabila loading dapat dilakukan secara progressive.

Example:

```text
┌──────────────────────────────┐
│ ███████████████████          │
│ ███████████                  │
│                              │
│ █████████████████████████    │
└──────────────────────────────┘
```

---

# 10.2 Empty State

Digunakan ketika data yang valid belum tersedia.

### Pattern

```text
[Simple visual]

Belum ada karya yang tersedia.

Content untuk section ini belum ditambahkan.
```

Jika relevan, admin dapat diberikan CTA menuju CMS.

Empty state tidak menggunakan ilustrasi kompleks yang mengalihkan perhatian dari pesan utama.

---

# 10.3 Error State

Error state harus:

1. menjelaskan bahwa terjadi masalah;
2. menggunakan bahasa yang mudah dipahami;
3. menyediakan tindakan yang relevan.

Example:

```text
Konten tidak dapat dimuat.

Silakan coba lagi.

[ Coba Lagi ]
```

Error teknis internal tidak ditampilkan secara mentah kepada pengguna publik.

---

# 10.4 Success State

Digunakan terutama pada area admin/CMS atau interaction yang membutuhkan confirmation.

Example:

```text
✓ Perubahan berhasil disimpan.
```

Success feedback harus:

* singkat;
* jelas;
* tidak menghalangi workflow.

---

# 11. Accessibility Notes

Synapse menargetkan **WCAG 2.1 Level AA**.

## 11.1 Color Contrast

Semua kombinasi foreground/background harus memenuhi contrast requirement yang relevan.

Jangan menggunakan warna sebagai satu-satunya indikator informasi.

Contoh:

```text
Status
✓ Success
✕ Error
```

bukan hanya:

```text
Green
Red
```

---

## 11.2 Keyboard Navigation

Seluruh fungsi penting harus dapat diakses menggunakan keyboard.

Focus state harus:

* terlihat;
* memiliki contrast yang cukup;
* tidak tertutup oleh sticky navigation.

---

## 11.3 Semantic HTML

Gunakan semantic elements:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Heading hierarchy harus konsisten.

Contoh:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
```

---

## 11.4 Images

Semua gambar informatif harus memiliki alternative text yang sesuai.

Gambar dekoratif dapat menggunakan empty alt:

```html
alt=""
```

Jangan menggunakan filename sebagai alt text.

---

## 11.5 Interactive Elements

Button harus digunakan untuk action.

Link digunakan untuk navigation.

Jangan membuat:

```html
<div onclick="...">
```

sebagai pengganti button apabila elemen tersebut merupakan kontrol interaktif.

---

## 11.6 Touch Targets

Interactive elements pada mobile harus memiliki ukuran touch target yang memadai.

Target minimum:

**44 × 44px**

---

## 11.7 Motion Accessibility

Website harus menghormati:

```text
prefers-reduced-motion
```

Pengguna tidak boleh kehilangan akses terhadap konten hanya karena animation dinonaktifkan.

---

## 11.8 Figma Prototype Accessibility

Prototype embed harus memiliki fallback.

Jika embed gagal:

```text
Prototype tidak dapat ditampilkan.

[Buka Prototype di Figma]
```

Dengan demikian reviewer tetap dapat mengakses prototype.

---

## 11.9 Dark Mode Accessibility

Dark mode harus mempertahankan:

* readable text;
* sufficient contrast;
* visible focus;
* distinguishable borders;
* accessible interactive states.

Dark mode tidak boleh sekadar membalik warna secara otomatis.

---

# 12. Content Design Rules

## 12.1 Copy

Copy harus:

* singkat;
* informatif;
* tidak berlebihan;
* mudah dipindai.

---

## 12.2 Project Titles

Judul proyek harus menjadi visual anchor.

Hindari judul terlalu panjang dalam display typography.

---

## 12.3 Metadata

Metadata dapat digunakan untuk informasi seperti:

```text
Category
Year
Role
Tools
```

Metadata menggunakan typography yang lebih kecil daripada title dan body.

---

# 13. Design System Organization

Design system dapat dikelola dalam Figma dengan struktur:

```text
00 - Guidelines
01 - Pendidikan
02 - Industri
03 - Portofolio
```

Synapse website menggunakan halaman `03 - Portofolio` sebagai referensi visual untuk identitas website.

Figma dapat menggunakan:

* semantic color variables;
* typography styles;
* spacing variables;
* reusable components;
* component playground.

Struktur tersebut mengikuti fondasi dokumentasi Figma yang telah ditentukan sebelumnya.

---

# 14. Design Constraints

Ketentuan berikut bersifat wajib:

1. Tidak menggunakan gradient.
2. Synapse memiliki visual identity sendiri.
3. Visual Pendidikan dan Industri tidak digunakan sebagai visual identity utama website.
4. Whitespace merupakan bagian penting dari layout.
5. Tidak menggunakan autoplay infinite carousel.
6. Horizontal project showcase harus tetap dapat dikontrol pengguna.
7. Dark mode dan light mode wajib tersedia.
8. Website harus responsive.
9. Website menargetkan WCAG 2.1 AA.
10. Animation tidak boleh mengganggu usability.
11. CMS menggunakan Sanity.
12. Admin content management dilakukan melalui Sanity Studio.
13. Project detail harus mendukung Figma embed atau external link.
14. Tidak semua project diwajibkan memiliki struktur case study yang identik.
15. Komponen dan visual treatment harus konsisten dengan design tokens.

---

# 15. Design Quality Checklist

Sebelum sebuah screen dianggap selesai, periksa:

### Visual

* [ ] Tidak ada gradient.
* [ ] Hierarchy typography jelas.
* [ ] Whitespace cukup.
* [ ] Visual tidak terlalu padat.
* [ ] Brand colors digunakan sesuai semantic role.
* [ ] Dark/light mode tersedia dan tetap readable.

### Interaction

* [ ] Semua interaction dapat dipahami.
* [ ] Horizontal showcase dapat dikontrol pengguna.
* [ ] Motion tidak berlebihan.
* [ ] Reduced motion didukung.
* [ ] Hover bukan satu-satunya cara memahami interaction.

### Responsive

* [ ] Mobile.
* [ ] Tablet.
* [ ] Desktop.
* [ ] Tidak ada unintended horizontal overflow.
* [ ] Touch interaction dapat digunakan.

### Accessibility

* [ ] WCAG 2.1 AA diperhatikan.
* [ ] Keyboard navigation.
* [ ] Visible focus.
* [ ] Semantic HTML.
* [ ] Alt text.
* [ ] Contrast.
* [ ] Accessible touch target.

### Content

* [ ] Project information jelas.
* [ ] Prototype dapat diakses.
* [ ] Empty state tersedia.
* [ ] Loading state tersedia.
* [ ] Error state tersedia.
* [ ] Success feedback tersedia jika diperlukan.
