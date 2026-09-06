# Synapse — Design System & Interface Specification

## 1. Design Overview

**Synapse** adalah portfolio website kelompok UI/UX Design yang berfungsi sebagai media dokumentasi, showcase, dan review akademik.

Website menampilkan karya dari dua domain utama:

- Pendidikan
    
- Industri
    

Namun, **kedua domain tersebut tidak memiliki visual language yang berbeda pada website**.

Synapse menggunakan satu visual identity yang konsisten untuk seluruh website.

### Design Direction

Synapse menggunakan pendekatan:

- Editorial
    
- Minimal
    
- Spacious
    
- Contemporary
    
- Academic
    
- Creative
    
- Content-first
    
- Typography-driven
    
- Subtle interaction
    

Inspirasi utama untuk project showcase berasal dari pola editorial dan gallery pada Awwwards, terutama penggunaan whitespace, typography besar, grid yang terstruktur, visual karya sebagai focal point, dan navigasi yang minimal. Awwwards sendiri menggunakan pendekatan gallery/curation dengan hierarki tipografi kuat dan layout yang memberi ruang besar pada konten.

Synapse **tidak menggunakan gradient** sebagai bagian dari design system.

---

# 2. Design Principles

## 2.1 Content First

Karya dan dokumentasi UI/UX merupakan fokus utama.

Dekorasi tidak boleh mengalahkan informasi proyek.

## 2.2 Spacious by Default

Whitespace merupakan elemen visual utama.

Section tidak perlu dipenuhi konten hanya untuk menghindari ruang kosong.

## 2.3 Typography as Structure

Hierarchy terutama dibangun melalui:

- ukuran typography,
    
- weight,
    
- spacing,
    
- alignment,
    
- dan contrast.
    

Bukan melalui banyak warna atau dekorasi.

## 2.4 Editorial Presentation

Project diperlakukan seperti editorial content atau curated gallery.

Setiap karya harus memiliki ruang yang cukup untuk menjadi focal point.

## 2.5 Motion With Purpose

Animasi digunakan untuk:

- menunjukkan hubungan antar-elemen,
    
- memberikan feedback,
    
- memperkuat navigasi,
    
- dan meningkatkan sense of continuity.
    

Animasi tidak boleh menghambat pembacaan konten.

## 2.6 Accessible by Default

Accessibility menjadi bagian dari design system sejak awal dan menargetkan WCAG 2.1 AA.

---

# 3. User Flows

## 3.1 Primary Public Flow

```text
Landing
   │
   ▼
Intro / Welcome
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

Pengguna tidak harus mengikuti seluruh halaman secara linear.

Navbar harus memungkinkan pengguna berpindah langsung ke section utama.

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

Bagian yang tidak tersedia untuk sebuah proyek tidak perlu dirender.

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

Preferensi theme sebaiknya dipertahankan ketika pengguna kembali mengunjungi website.

Jika belum ada preferensi tersimpan, sistem dapat mengikuti preferensi sistem operasi pengguna.

---

## 3.5 Admin Flow

Karena CMS menggunakan Sanity, pengelolaan konten dilakukan melalui **Sanity Studio**, bukan custom admin dashboard pada public website.

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
  └── Site Content
          │
          ▼
       Publish
          │
          ▼
    Public Website
```

Public website tidak menyediakan authentication untuk pengunjung umum.

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

---

# 5. Homepage Layout

## 5.1 Global Structure

```text
┌──────────────────────────────────────┐
│ Navbar                               │
├──────────────────────────────────────┤
│                                      │
│          Welcome / Intro             │
│                                      │
│                                      │
├──────────────────────────────────────┤
│                                      │
│          Split-View Hero             │
│                                      │
├──────────────────────────────────────┤
│                                      │
│        Project Showcase              │
│                                      │
├──────────────────────────────────────┤
│                                      │
│      Design System Preview           │
│                                      │
├──────────────────────────────────────┤
│                                      │
│             Team                     │
│                                      │
├──────────────────────────────────────┤
│                                      │
│      Weekly Assignment Archive       │
│                                      │
├──────────────────────────────────────┤
│ Footer                               │
└──────────────────────────────────────┘
```

---

# 6. Screen: Navbar

## Purpose

Memberikan akses cepat ke section utama.

## Layout

Desktop:

```text
┌──────────────────────────────────────────────┐
│ Synapse        Work   System   Team   Archive │
│                                      ◐ Theme │
└──────────────────────────────────────────────┘
```

Karakter:

- compact,
    
- minimal,
    
- horizontal,
    
- sticky,
    
- tidak mendominasi hero.
    

## Elements

- Synapse logo/wordmark.
    
- Work anchor.
    
- Design System anchor.
    
- Team anchor.
    
- Archive anchor.
    
- Theme toggle.
    

## Mobile

Navbar berubah menjadi:

```text
┌──────────────────────────┐
│ Synapse          Menu ☰ │
└──────────────────────────┘
```

Menu dapat membuka navigation drawer atau compact overlay.

---

# 7. Screen: Welcome / Intro

Ini merupakan section pembuka sebelum Split-View Hero.

Tujuannya adalah memberikan **ruang kosong yang sangat luas** sehingga identitas Synapse menjadi focal point pertama.

## Layout

```text
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│                                              │
│                    SYNAPSE                   │
│                                              │
│             Group UI/UX Portfolio            │
│                                              │
│                                              │
│                                              │
│                                              │
└──────────────────────────────────────────────┘
```

## Content

Primary:

**Synapse**

Secondary:

Short caption/body yang menjelaskan bahwa Synapse merupakan portfolio dan dokumentasi karya UI/UX kelompok.

Copy final dikelola melalui CMS apabila diperlukan.

## Design Rules

- Tidak menggunakan card.
    
- Tidak menggunakan gradient.
    
- Tidak menggunakan ilustrasi besar.
    
- Tidak menggunakan dekorasi berlebihan.
    
- Memanfaatkan negative space.
    
- Typography menjadi elemen utama.
    
- Section idealnya memiliki tinggi mendekati viewport.
    

---

# 8. Screen: Split-View Hero

## Purpose

Memperkenalkan dua kelompok karya:

- Pendidikan
    
- Industri
    

## Layout

```text
┌──────────────────────┬──────────────────────┐
│                      │                      │
│     PENDIDIKAN       │       INDUSTRI       │
│                      │                      │
│    Project Intro     │     Project Intro    │
│                      │                      │
│       Explore →      │        Explore →     │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

## Interaction

Desktop:

- cursor interaction,
    
- subtle hover expansion,
    
- typography movement,
    
- image scaling ringan.
    

Mobile:

- stacked layout,
    
- Pendidikan diikuti Industri.
    

Tidak boleh menggunakan efek yang menyebabkan pengguna kehilangan konteks navigasi.

---

# 9. Screen: Project Showcase

## Design Reference

Project showcase mengambil inspirasi dari pola curated gallery/editorial yang digunakan Awwwards: visual karya menjadi elemen utama, metadata tetap minimal, dan whitespace digunakan untuk menciptakan hierarchy.

## Desktop Layout

```text
                 SELECTED WORK

        ┌──────────────────────────────┐
        │                              │
        │        Project Preview       │
        │                              │
        │                              │
        └──────────────────────────────┘

 Project Name
 Category · Year

 Short description                         →
```

Beberapa project ditampilkan sebagai rangkaian panel horizontal.

## Interaction

Horizontal showcase menggunakan:

- sticky section,
    
- vertical scroll → horizontal progression,
    
- drag/swipe pada touch device,
    
- keyboard navigation jika memungkinkan.
    

Tidak menggunakan infinite autoplay carousel.

## Project Card

```text
┌──────────────────────────────┐
│                              │
│       Project Visual         │
│                              │
│                              │
├──────────────────────────────┤
│ PROJECT NAME                 │
│ Category · Year              │
│ Short description            │
│                              │
│ View Project →               │
└──────────────────────────────┘
```

Card tidak perlu memiliki shadow berat.

Separation lebih banyak menggunakan:

- whitespace,
    
- border,
    
- surface contrast,
    
- typography.
    

---

# 10. Screen: Project Detail

## Layout

```text
Project Hero
      │
      ▼
Project Overview
      │
      ▼
Project Information
      │
      ▼
Process / Documentation
      │
      ├── Research
      │
      ├── Wireframe
      │
      └── Other Documentation
      │
      ▼
Final Design
      │
      ▼
Figma Prototype
      │
      ▼
Next Project
```

## Project Hero

Menampilkan:

- Project title.
    
- Category.
    
- Short description.
    
- Hero visual.
    
- Metadata.
    

## Project Overview

Berisi konteks singkat:

- project description,
    
- objective,
    
- role/team,
    
- relevant information.
    

## Project Information

Dapat berupa metadata editorial:

```text
CATEGORY
Education

TEAM
Group UI/UX

ROLE
...

YEAR
2026
```

## Documentation

Dokumentasi fleksibel.

Tidak semua project harus memiliki section yang sama.

CMS harus memungkinkan section tertentu:

- tersedia,
    
- tidak tersedia,
    
- atau memiliki jumlah konten berbeda.
    

## Final Design

Visual final harus mendapatkan area display yang besar.

## Figma Prototype

Prototype dapat:

1. di-embed apabila memungkinkan,
    
2. atau menyediakan external link ke Figma.
    

Fallback link wajib tersedia apabila embed tidak dapat digunakan.

---

# 11. Screen: Design System Preview

## Purpose

Menunjukkan bagaimana kelompok membangun sistem desain.

## Layout

```text
DESIGN SYSTEM

Color       Typography       Components
────────────────────────────────────────

[Color]     Heading          [Button]
[Color]     Body             [Card]
[Color]     Caption          [Input]
```

Section dapat menggunakan interactive comparison atau switcher.

Preview tidak perlu mereplikasi seluruh design system Figma.

Fungsinya adalah memberikan **overview**.

---

# 12. Screen: Team

## Layout

Desktop:

```text
                 THE TEAM

     ┌────────┐   ┌────────┐   ┌────────┐
     │  Foto  │   │  Foto  │   │  Foto  │
     └────────┘   └────────┘   └────────┘

       Name          Name          Name
       Role          Role          Role
```

Mobile:

```text
┌───────────────────┐
│       Foto        │
│       Name        │
│       Role        │
└───────────────────┘

┌───────────────────┐
│       Foto        │
│       Name        │
│       Role        │
└───────────────────┘
```

Data:

- Name
    
- Photo
    
- Role
    

Semua data dapat dikelola melalui CMS.

---

# 13. Screen: Weekly Assignment Archive

## Purpose

Mendokumentasikan tugas mingguan selama perkuliahan.

## Desktop

```text
WEEKLY ASSIGNMENT ARCHIVE

┌──────┬───────────────────────┬──────────────┐
│ Week │ Assignment            │ Status       │
├──────┼───────────────────────┼──────────────┤
│ 01   │ Introduction UI/UX    │ Completed    │
│ 02   │ User Research         │ Completed    │
│ 03   │ Wireframe             │ Completed    │
│ ...  │ ...                   │ ...          │
└──────┴───────────────────────┴──────────────┘
```

Pada mobile, tabel dapat berubah menjadi stacked rows/cards untuk menghindari horizontal overflow.

---

# 14. Component List

## 14.1 Layout Components

- `Navbar`
    
- `MobileNavigation`
    
- `Footer`
    
- `Section`
    
- `Container`
    
- `PageTransition`
    

## 14.2 Hero Components

- `WelcomeHero`
    
- `SplitHero`
    
- `HeroPanel`
    
- `HeroMeta`
    

## 14.3 Project Components

- `ProjectShowcase`
    
- `ProjectCard`
    
- `ProjectPreview`
    
- `ProjectMeta`
    
- `ProjectHero`
    
- `ProjectOverview`
    
- `ProjectInfo`
    
- `ProjectSection`
    
- `ProjectGallery`
    
- `PrototypeEmbed`
    
- `ProjectNavigation`
    

## 14.4 Design System Components

- `DesignSystemPreview`
    
- `ThemeSwitcher`
    
- `ColorSwatch`
    
- `TypePreview`
    
- `ComponentPreview`
    

## 14.5 Team Components

- `TeamSection`
    
- `TeamGrid`
    
- `TeamMemberCard`
    

## 14.6 Archive Components

- `AssignmentArchive`
    
- `AssignmentTable`
    
- `AssignmentRow`
    

## 14.7 UI Components

- `Button`
    
- `Link`
    
- `Badge`
    
- `IconButton`
    
- `Divider`
    
- `Tooltip`
    
- `Modal`
    
- `Skeleton`
    
- `Toast`
    

## 14.8 State Components

- `LoadingState`
    
- `EmptyState`
    
- `ErrorState`
    
- `SuccessState`
    

---

# 15. Design Tokens

## 15.1 Color System

Synapse memiliki visual identity sendiri.

Warna domain Pendidikan dan Industri **tidak digunakan sebagai global website theme**.

### Light Theme

|Token|Value|Usage|
|---|---|---|
|`--color-primary`|`#A8C6E7`|Primary interface accent|
|`--color-primary-strong`|`#7FA8D6`|Strong accent / interaction|
|`--color-accent`|`#FFE08A`|Accent|
|`--color-highlight`|`#FFF2B2`|Highlight|
|`--color-surface-soft`|`#FFF7D6`|Soft surface|
|`--color-background`|`#FFFDF4`|Main background|
|`--color-text`|`#1C2430`|Primary text|
|`--color-text-muted`|`#5F6875`|Secondary text|
|`--color-border`|`#D9DEE5`|Border/divider|

### Dark Theme

Dark theme menggunakan interpretasi dari visual identity light theme, bukan sekadar membalik seluruh warna.

|Token|Value|Usage|
|---|---|---|
|`--color-background`|`#11161D`|Main background|
|`--color-surface`|`#18212B`|Surface|
|`--color-surface-soft`|`#222D39`|Secondary surface|
|`--color-primary`|`#A8C6E7`|Primary accent|
|`--color-primary-strong`|`#7FA8D6`|Strong accent|
|`--color-accent`|`#FFE08A`|Accent|
|`--color-highlight`|`#FFF2B2`|Highlight|
|`--color-text`|`#F5F7FA`|Primary text|
|`--color-text-muted`|`#AEB8C4`|Secondary text|
|`--color-border`|`#34404D`|Border/divider|

### Color Rules

- Tidak menggunakan gradient.
    
- Jangan menggunakan seluruh accent colors sekaligus dalam satu section.
    
- Accent digunakan secara intentional.
    
- Text/background contrast harus memenuhi WCAG 2.1 AA.
    
- Warna tidak boleh menjadi satu-satunya indikator status.
    

---

# 16. Typography

Primary font family:

**Plus Jakarta Sans**

Fallback:

```text
Plus Jakarta Sans,
Inter,
system-ui,
sans-serif
```

Typography harus terasa modern, bersih, dan nyaman untuk konten editorial.

## Type Scale

|Token|Size|Line Height|Weight|
|---|--:|--:|--:|
|`display-xl`|96px|0.95|600|
|`display-lg`|72px|1.0|600|
|`display-md`|56px|1.05|600|
|`heading-xl`|40px|1.1|600|
|`heading-lg`|32px|1.15|600|
|`heading-md`|24px|1.2|600|
|`heading-sm`|20px|1.3|600|
|`body-lg`|18px|1.6|400|
|`body-md`|16px|1.6|400|
|`body-sm`|14px|1.5|400|
|`caption`|12px|1.4|500|
|`micro`|11px|1.3|500|

Display typography dapat menggunakan responsive scaling.

---

# 17. Spacing Tokens

Base spacing: **4px**

|Token|Value|
|---|--:|
|`space-1`|4px|
|`space-2`|8px|
|`space-3`|12px|
|`space-4`|16px|
|`space-5`|20px|
|`space-6`|24px|
|`space-8`|32px|
|`space-10`|40px|
|`space-12`|48px|
|`space-16`|64px|
|`space-20`|80px|
|`space-24`|96px|
|`space-32`|128px|
|`space-40`|160px|

Large editorial sections dapat menggunakan spacing:

`96px – 160px`

atau lebih apabila diperlukan untuk mempertahankan negative space.

---

# 18. Container & Grid

## Desktop

Maximum content width:

```text
1280px
```

Grid:

```text
12 columns
24px gutter
```

Content dapat menggunakan full-width visual ketika dibutuhkan.

## Tablet

```text
8 columns
20px gutter
```

## Mobile

```text
4 columns
16px side padding
16px gutter
```

Project imagery dapat menggunakan full-bleed treatment pada mobile apabila diperlukan.

---

# 19. Border & Radius

Synapse menggunakan radius yang restrained.

|Token|Value|
|---|--:|
|`radius-sm`|4px|
|`radius-md`|8px|
|`radius-lg`|12px|
|`radius-xl`|16px|
|`radius-pill`|999px|

Default component radius:

**8px – 12px**

Pill digunakan terutama untuk:

- tags,
    
- metadata,
    
- filters,
    
- compact controls.
    

---

# 20. Borders & Shadows

## Borders

Default:

```text
1px solid
```

Border digunakan untuk:

- cards,
    
- tables,
    
- separators,
    
- interactive states.
    

## Shadows

Shadow harus subtle.

Default elevation sebaiknya berasal dari:

1. whitespace,
    
2. surface contrast,
    
3. border.
    

Shadow digunakan hanya ketika diperlukan untuk hierarchy atau floating elements.

Tidak menggunakan heavy/drop shadow sebagai default card style.

---

# 21. Motion

Motion direction:

**Subtle / Editorial**

## Default Duration

|Motion|Duration|
|---|--:|
|Micro interaction|120–180ms|
|Button / hover|180–220ms|
|Component transition|250–350ms|
|Section transition|350–500ms|
|Hero transition|500–700ms|

## Easing

Default:

```text
ease-out
```

Untuk complex movement:

```text
cubic-bezier(...)
```

Gunakan easing secara konsisten dan hindari animasi yang terasa elastic berlebihan.

---

# 22. Motion Patterns

## Hover

- opacity change,
    
- subtle scale,
    
- image crop movement,
    
- underline,
    
- color transition.
    

## Project Card

Image dapat bergerak sedikit ketika hover.

Contoh:

```text
scale: 1.02
```

Bukan:

```text
scale: 1.15
```

Tujuannya menjaga kesan editorial, bukan membuat gambar melakukan senam aerobik.

## Hero

Split-view dapat menggunakan:

- subtle width transition,
    
- text movement,
    
- image scale,
    
- opacity.
    

## Scroll

Scroll-linked animation digunakan secara terbatas.

Tidak semua section perlu dianimasikan.

---

# 23. Reduced Motion

Jika:

```text
prefers-reduced-motion: reduce
```

maka:

- disable parallax,
    
- reduce transform,
    
- remove non-essential transitions,
    
- tidak melakukan auto-animation,
    
- tetap mempertahankan informasi dan hierarchy.
    

---

# 24. Component States

## 24.1 Loading State

Default:

**Skeleton**

Contoh:

```text
┌──────────────────────────┐
│ ███████████████████      │
│ ███████████              │
│                          │
│ █████████████████        │
└──────────────────────────┘
```

Rules:

- Tidak menggunakan spinner sebagai satu-satunya loading indicator untuk content-heavy page.
    
- Skeleton harus memiliki bentuk yang mendekati konten sebenarnya.
    
- Loading tidak boleh menyebabkan layout shift besar.
    

---

# 25. Empty State

Empty state digunakan ketika CMS belum memiliki data.

```text
┌────────────────────────────┐
│                            │
│       No projects yet      │
│                            │
│  Project content will      │
│  appear here when added.   │
│                            │
└────────────────────────────┘
```

Untuk public website:

- jangan menampilkan error teknis,
    
- gunakan copy yang ramah,
    
- tidak perlu CTA admin.
    

Untuk CMS/admin:

- dapat menyediakan CTA menuju create content.
    

---

# 26. Error State

```text
┌────────────────────────────┐
│                            │
│    Something went wrong    │
│                            │
│  We couldn't load this     │
│  content right now.        │
│                            │
│        Try again            │
│                            │
└────────────────────────────┘
```

Rules:

- jelaskan masalah dengan bahasa manusia,
    
- jangan expose stack trace,
    
- sediakan retry ketika memungkinkan,
    
- gunakan error logging di sisi sistem.
    

---

# 27. Success State

Success state digunakan terutama pada interaction yang membutuhkan confirmation.

Contoh:

```text
✓ Changes saved
```

atau:

```text
✓ Theme updated
```

Success feedback dapat menggunakan:

- inline confirmation,
    
- toast,
    
- status indicator.
    

Jangan bergantung hanya pada warna hijau.

---

# 28. Not Found State

Untuk project slug yang tidak tersedia:

```text
404

This project doesn't exist.

Back to projects →
```

Harus tersedia navigation kembali ke homepage/project showcase.

---

# 29. Accessibility Notes

## 29.1 Color Contrast

Target:

**WCAG 2.1 AA**

Semua text utama harus memiliki contrast ratio yang sesuai.

Accent color tidak boleh digunakan sebagai text utama jika contrast tidak mencukupi.

---

## 29.2 Keyboard Navigation

Semua interactive elements harus dapat diakses menggunakan keyboard:

- links,
    
- buttons,
    
- theme toggle,
    
- project cards,
    
- navigation,
    
- menus,
    
- embedded prototype controls apabila memungkinkan.
    

Focus state harus terlihat jelas.

---

## 29.3 Focus State

Jangan menghapus default focus indicator tanpa menyediakan replacement.

Contoh:

```text
outline: 2px solid primary;
outline-offset: 3px;
```

---

## 29.4 Semantic HTML

Gunakan semantic elements:

```html
<header>
<nav>
<main>
<section>
<article>
<footer>
```

Heading hierarchy harus logis:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
```

Jangan memilih heading berdasarkan ukuran visual saja.

---

## 29.5 Images

Semua gambar informatif harus memiliki alt text.

Gambar dekoratif menggunakan:

```text
alt=""
```

Hero/project imagery harus memiliki alternative text yang menjelaskan konteks visual jika diperlukan.

---

## 29.6 Motion Accessibility

Respect:

```text
prefers-reduced-motion
```

Motion tidak boleh menjadi satu-satunya cara untuk memahami:

- navigasi,
    
- status,
    
- hierarchy,
    
- atau perubahan konten.
    

---

## 29.7 Touch Targets

Interactive elements harus memiliki area interaksi yang cukup untuk perangkat touch.

Target minimum yang digunakan sebagai guideline:

```text
44 × 44px
```

---

## 29.8 Horizontal Showcase Accessibility

Horizontal project showcase tidak boleh hanya dapat digunakan melalui mouse wheel.

Harus tersedia:

- touch/swipe,
    
- keyboard-accessible controls,
    
- visible project links.
    

Jika horizontal scroll tidak dapat digunakan pada kondisi tertentu, konten harus tetap dapat diakses melalui alternatif navigasi.

---

## 29.9 Prototype Accessibility

Figma prototype embed harus memiliki fallback external link.

Contoh:

```text
Interactive Prototype

[Open Prototype in Figma ↗]
```

Dengan demikian reviewer tetap dapat mengakses prototype apabila embed gagal dimuat.

---

## 29.10 Tables

Weekly Assignment Archive harus menggunakan semantic table markup pada desktop apabila tetap berbentuk tabel.

Header harus dapat dipahami oleh screen reader.

Pada mobile, perubahan menjadi card/stacked layout tidak boleh menghilangkan hubungan antara:

- minggu,
    
- tugas,
    
- status,
    
- informasi lainnya.
    

---

# 30. Responsive Rules

## Mobile

Prioritas:

1. Content
    
2. Navigation
    
3. Readability
    
4. Touch interaction
    

Hero dan project visual dapat menggunakan full-width layout.

Horizontal showcase harus mendukung touch swipe.

---

## Tablet

Menggunakan layout intermediate.

Hindari sekadar memperbesar layout mobile.

Grid dapat berubah dari:

```text
12 columns
```

menjadi:

```text
8 columns
```

---

## Desktop

Desktop menjadi environment utama untuk review akademik.

Gunakan:

- whitespace luas,
    
- large typography,
    
- wide project imagery,
    
- editorial grid,
    
- horizontal showcase.
    

---

# 31. Theme Rules

## Light Mode

Light mode adalah default visual utama.

Karakter:

- warm,
    
- soft,
    
- bright,
    
- editorial.
    

Primary background menggunakan tone putih hangat.

Accent berasal dari:

- pale yellow,
    
- soft blue,
    
- warm cream.
    

## Dark Mode

Dark mode mempertahankan identitas Synapse dengan:

- deep blue-gray background,
    
- blue accent,
    
- warm yellow highlight.
    

Dark mode bukan inversion otomatis dari light mode.

Setiap semantic color harus memiliki dark-theme counterpart.

---

# 32. Design System Naming

Semantic naming harus digunakan pada implementasi.

Gunakan:

```text
color-primary
color-accent
color-background
color-surface
color-text
color-text-muted
color-border
```

Hindari penggunaan nama:

```text
blue-1
yellow-2
cream-3
```

untuk component-level styling.

Tujuannya agar design token tetap mudah dipelihara ketika visual identity berubah.

---

# 33. CMS Content Model

Karena CMS menggunakan Sanity, desain interface harus mempertimbangkan content yang bersifat dinamis.

Minimal content model:

```text
Project
├── title
├── slug
├── category
├── year
├── description
├── hero image
├── overview
├── documentation
├── research
├── wireframe
├── final design
└── prototype URL/embed
```

### Team Member

```text
Team Member
├── name
├── photo
└── role
```

### Weekly Assignment

```text
Weekly Assignment
├── week
├── title
├── description
├── status
└── related project
```

Struktur final dapat berkembang mengikuti kebutuhan konten.

---

# 34. Content Rendering Rules

CMS content tidak boleh diasumsikan selalu tersedia.

Setiap optional content harus memiliki conditional rendering.

Contoh:

```text
IF research exists
→ render Research section

IF wireframe exists
→ render Wireframe section

IF prototype exists
→ render Prototype section
```

Jangan menghasilkan heading kosong atau section kosong.

---

# 35. Visual Hierarchy Rules

Prioritas hierarchy:

```text
1. Project / Page Title
2. Primary Visual
3. Section Heading
4. Supporting Information
5. Metadata
6. Secondary Action
```

Primary action harus mudah dibedakan dari secondary action.

Jangan membuat seluruh elemen terlihat seperti CTA.

---

# 36. Anti-Patterns

Hal-hal berikut harus dihindari:

- Gradient.
    
- Excessive glassmorphism.
    
- Heavy drop shadows.
    
- Excessive rounded cards.
    
- Autoplay carousel.
    
- Excessive parallax.
    
- Excessive animation.
    
- Decorative animation yang mengganggu reading.
    
- Text terlalu kecil.
    
- Semua section menggunakan card.
    
- Semua elemen menggunakan accent color.
    
- Horizontal overflow yang tidak disengaja.
    
- Scroll hijacking yang mengganggu native navigation.
    
- Empty decorative whitespace tanpa tujuan.
    
- Lorem ipsum pada production content.
    
- Menampilkan technical error kepada user.
    
- Menjadikan warna sebagai satu-satunya indikator status.
    

---

# 37. Visual Quality Checklist

Sebelum sebuah screen dianggap selesai:

### Layout

-  Hierarchy jelas.
    
-  Whitespace cukup.
    
-  Alignment konsisten.
    
-  Tidak ada accidental overflow.
    
-  Responsive pada mobile/tablet/desktop.
    

### Typography

-  H1 hanya digunakan untuk primary page title.
    
-  Body text nyaman dibaca.
    
-  Line-height sesuai.
    
-  Metadata tidak terlalu kecil.
    

### Color

-  Tidak menggunakan gradient.
    
-  Warna mengikuti semantic tokens.
    
-  Contrast memenuhi WCAG 2.1 AA.
    
-  Accent digunakan secara terukur.
    

### Interaction

-  Hover memiliki purpose.
    
-  Focus state terlihat.
    
-  Keyboard navigation berfungsi.
    
-  Touch interaction berfungsi.
    
-  Reduced-motion diperhatikan.
    

### Content

-  Tidak ada empty heading.
    
-  Image memiliki alt text.
    
-  Prototype memiliki fallback link.
    
-  Dynamic CMS content memiliki loading/error/empty state.
    

---

# 38. Design North Star

> **Synapse should feel like an editorial gallery for a body of UI/UX work, not a collection of assignment pages.**

Website harus memberikan kesan:

**Spacious → Curated → Clear → Interactive → Memorable**

Namun tetap mempertahankan tujuan utamanya:

**memudahkan dosen dan reviewer memahami karya, proses, dan perkembangan kelompok.**