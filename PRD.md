## 1. Problem Statement

### Latar Belakang

Proyek ini pada awalnya dibuat sebagai media untuk mengumpulkan dan mendokumentasikan tugas serta proyek dari mata kuliah **UI/UX Design** secara berkelompok.

Seiring bertambahnya jumlah tugas dan proyek, dibutuhkan sebuah media terpusat yang tidak hanya berfungsi sebagai tempat pengumpulan, tetapi juga mampu menyajikan karya kelompok secara terstruktur sehingga dapat digunakan sebagai **portfolio kelompok**.

Portfolio perlu menunjukkan hasil karya sekaligus memberikan konteks mengenai proses pengerjaan UI/UX. Karena proyek kelompok mencakup dua proyek besar dengan karakter yang berbeda, yaitu **bidang Pendidikan** dan **bidang Industri**, website juga perlu mampu merepresentasikan kedua spektrum tersebut secara jelas.

### Masalah Utama

Tanpa sebuah portfolio terpusat:

- Karya dan tugas UI/UX berpotensi tersebar dalam berbagai media atau dokumen.
    
- Reviewer harus mencari dan membuka berbagai sumber untuk melihat karya kelompok.
    
- Dokumentasi proses desain tidak tersaji dalam satu pengalaman yang terstruktur.
    
- Hasil tugas kuliah belum secara optimal merepresentasikan perkembangan dan kemampuan kelompok sebagai sebuah portfolio.
    

### Data Pendukung

Saat ini belum tersedia data hasil survey, interview, analytics, atau penelitian pengguna yang secara khusus mendukung problem statement.

Oleh karena itu, problem statement pada PRD ini diposisikan sebagai **konteks dan kebutuhan proyek**, bukan sebagai klaim berdasarkan penelitian kuantitatif.

---

## 2. Goals

Produk dianggap berhasil apabila mampu mencapai tujuan berikut.

|ID|Goal|Success Metric|
|---|---|---|
|G1|Menjadi portfolio kelompok|Seluruh karya utama kelompok yang ditetapkan untuk rilis terdokumentasi di dalam website.|
|G2|Mendokumentasikan proses UI/UX|Setiap proyek utama memiliki dokumentasi proses yang relevan, tanpa mewajibkan struktur studi kasus yang terlalu kompleks.|
|G3|Mempermudah reviewer melihat karya|Reviewer dapat menemukan dan membuka karya tertentu melalui navigasi utama dengan maksimal **3 interaksi navigasi** dari halaman utama.|
|G4|Mendukung presentasi dan review akademik|Website dapat digunakan sebagai media presentasi/review tanpa bergantung pada dokumen terpisah untuk informasi utama.|
|G5|Merepresentasikan dua spektrum desain|Proyek bidang Pendidikan dan Industri dapat dibedakan secara visual dan konseptual.|
|G6|Menyediakan pengelolaan konten|Admin dapat mengelola konten portfolio melalui CMS dan sistem autentikasi yang disediakan.|
|G7|Mendukung berbagai perangkat|Pengalaman utama dapat digunakan pada mobile, tablet, dan desktop.|
|G8|Menyediakan pengalaman visual yang fleksibel|Pengguna dapat menggunakan mode terang maupun mode gelap.|

### Prioritas Goals

**P1**

- G1 — Portfolio kelompok
    
- G2 — Dokumentasi proses
    
- G3 — Kemudahan review
    
- G4 — Presentasi/review akademik
    
- G6 — Content management
    
- G7 — Responsive
    

**P2**

- G5 — Representasi dua spektrum desain
    
- G8 — Dark/light mode
    

---

## 3. Target Users / Personas

### Primary User

#### Persona 1 — Dosen / Reviewer Akademik

**Profil**

Dosen atau reviewer yang menilai hasil tugas dan proyek UI/UX kelompok.

**Tujuan**

- Melihat karya yang telah dibuat kelompok.
    
- Memahami konteks dan hasil proyek.
    
- Meninjau dokumentasi proses desain.
    
- Membandingkan atau melihat perkembangan karya.
    
- Menggunakan portfolio sebagai media review atau presentasi.
    

**Kebutuhan**

- Navigasi yang jelas.
    
- Informasi proyek yang mudah ditemukan.
    
- Dokumentasi yang terstruktur.
    
- Visualisasi karya yang representatif.
    
- Akses prototype melalui Figma.
    
- Tampilan yang nyaman pada perangkat desktop maupun perangkat lain.
    

**Pain Points**

- Karya yang tersebar dapat menyulitkan proses review.
    
- Dokumentasi yang tidak terstruktur membutuhkan waktu lebih lama untuk dipahami.
    
- Reviewer membutuhkan akses cepat terhadap karya dan konteks pengerjaannya.
    

---

### Secondary Users

#### Persona 2 — Anggota Kelompok

Anggota kelompok yang membutuhkan portfolio sebagai tempat terpusat untuk mengelola dan mempresentasikan hasil pekerjaan.

**Kebutuhan utama:**

- Konten proyek terorganisir.
    
- Profil dan role anggota terdokumentasi.
    
- Riwayat tugas mingguan tersimpan.
    
- Proyek dapat diperbarui melalui CMS.
    

---

#### Persona 3 — Pengunjung Umum

Pengunjung yang ingin melihat karya kelompok tanpa terlibat langsung dalam proses akademik.

**Kebutuhan utama:**

- Memahami identitas portfolio dengan cepat.
    
- Menjelajahi karya.
    
- Membuka detail proyek.
    
- Melihat prototype atau dokumentasi terkait.
    

---

## 4. User Stories

User stories diurutkan berdasarkan prioritas.

|ID|Prioritas|User Story|
|---|---|---|
|US-01|P1|Sebagai dosen/reviewer, saya ingin melihat seluruh karya kelompok dari satu website agar proses review lebih mudah.|
|US-02|P1|Sebagai dosen/reviewer, saya ingin menemukan proyek tertentu dengan cepat agar tidak perlu mencari melalui berbagai sumber.|
|US-03|P1|Sebagai dosen/reviewer, saya ingin melihat dokumentasi proses UI/UX sebuah proyek agar dapat memahami bagaimana karya tersebut dibuat.|
|US-04|P1|Sebagai dosen/reviewer, saya ingin membuka prototype Figma dari halaman proyek agar dapat melihat hasil desain secara interaktif.|
|US-05|P1|Sebagai dosen/reviewer, saya ingin melihat profil dan role anggota kelompok agar mengetahui kontribusi setiap anggota.|
|US-06|P1|Sebagai anggota kelompok/admin, saya ingin mengelola konten portfolio melalui CMS agar informasi proyek dapat diperbarui tanpa mengubah kode website.|
|US-07|P1|Sebagai anggota kelompok/admin, saya ingin mengelola data proyek agar karya baru dapat ditambahkan ke portfolio.|
|US-08|P1|Sebagai pengunjung, saya ingin membedakan proyek Pendidikan dan Industri agar dapat memahami dua spektrum karya kelompok.|
|US-09|P2|Sebagai pengunjung, saya ingin berpindah antara mode terang dan gelap agar dapat memilih tampilan yang nyaman bagi saya.|
|US-10|P2|Sebagai reviewer, saya ingin melihat arsip penugasan mingguan agar dapat memahami perjalanan tugas kelompok selama perkuliahan.|
|US-11|P2|Sebagai pengunjung, saya ingin menjelajahi karya melalui interaksi horizontal agar proses melihat portfolio terasa lebih menarik dibandingkan daftar karya biasa.|
|US-12|P2|Sebagai anggota kelompok, saya ingin memperbarui informasi anggota melalui CMS agar informasi portfolio tetap dapat dipelihara.|

---

## 5. Functional Requirements

Prioritas:

- **P1** = wajib tersedia pada rilis v1.0.
    
- **P2** = penting tetapi tidak menghambat fungsi utama.
    
- **P3** = nice-to-have dan dapat ditunda.
    

### 5.1 Landing Page

|ID|Requirement|Prioritas|
|---|---|---|
|FR-01|Sistem harus menyediakan landing page sebagai halaman utama portfolio.|P1|
|FR-02|Sistem harus menyediakan navigasi utama menuju section penting pada landing page.|P1|
|FR-03|Sistem harus menampilkan identitas dua spektrum proyek, yaitu Pendidikan dan Industri.|P1|
|FR-04|Sistem harus menyediakan Split-View Hero untuk memperkenalkan kedua spektrum desain.|P1|
|FR-05|Sistem harus menyediakan section showcase untuk menampilkan karya utama.|P1|
|FR-06|Sistem harus menyediakan navigasi menuju halaman detail proyek.|P1|

### 5.2 Project Showcase

|ID|Requirement|Prioritas|
|---|---|---|
|FR-07|Sistem harus dapat menampilkan daftar proyek yang tersedia pada portfolio.|P1|
|FR-08|Sistem harus membedakan proyek berdasarkan kategori Pendidikan dan Industri.|P1|
|FR-09|Sistem harus menyediakan interaksi horizontal pada showcase karya utama.|P2|
|FR-10|Sistem harus memungkinkan pengguna memilih proyek dari showcase untuk membuka halaman detail.|P1|

Jumlah proyek besar yang ditetapkan saat ini adalah **dua**, yaitu:

1. Proyek Pendidikan.
    
2. Proyek Industri.
    

Jumlah keseluruhan karya/tugas portfolio dapat bertambah seiring perkembangan proyek.

### 5.3 Project Detail

|ID|Requirement|Prioritas|
|---|---|---|
|FR-11|Sistem harus menyediakan halaman detail proyek dengan route `/proyek/[slug]`.|P1|
|FR-12|Sistem harus menampilkan informasi dasar proyek.|P1|
|FR-13|Sistem harus dapat menampilkan dokumentasi proses UI/UX yang tersedia untuk proyek tersebut.|P1|
|FR-14|Sistem harus dapat menampilkan dokumentasi research apabila tersedia.|P1|
|FR-15|Sistem harus dapat menampilkan wireframe apabila tersedia.|P1|
|FR-16|Sistem harus menyediakan akses prototype melalui embed atau link Figma.|P1|
|FR-17|Sistem harus dapat menampilkan hasil/final design proyek.|P1|
|FR-18|Sistem tidak mewajibkan seluruh proyek menggunakan struktur studi kasus yang identik.|P1|

### 5.4 Design System Preview

|ID|Requirement|Prioritas|
|---|---|---|
|FR-19|Sistem harus menyediakan section preview design system.|P1|
|FR-20|Sistem harus menyediakan mekanisme perbandingan visual antara design system Pendidikan dan Industri.|P2|
|FR-21|Preview harus dapat menunjukkan karakter visual masing-masing spektrum.|P2|

### 5.5 Team

|ID|Requirement|Prioritas|
|---|---|---|
|FR-22|Sistem harus menyediakan section profil tim.|P1|
|FR-23|Sistem harus menampilkan nama setiap anggota.|P1|
|FR-24|Sistem harus menampilkan foto setiap anggota.|P1|
|FR-25|Sistem harus menampilkan role setiap anggota.|P1|
|FR-26|Data anggota harus dapat dikelola melalui CMS.|P1|

### 5.6 Weekly Assignment Archive

|ID|Requirement|Prioritas|
|---|---|---|
|FR-27|Sistem harus menyediakan tabel arsip penugasan mingguan.|P1|
|FR-28|Sistem harus dapat menampilkan daftar tugas berdasarkan minggu.|P1|
|FR-29|Data arsip penugasan harus dapat dikelola melalui CMS.|P1|
|FR-30|Arsip harus dapat menunjukkan informasi tugas yang relevan untuk proses review.|P2|

Format detail kolom tabel dapat berkembang sesuai kebutuhan konten.

### 5.7 Dark / Light Mode

|ID|Requirement|Prioritas|
|---|---|---|
|FR-31|Sistem harus menyediakan mode terang.|P1|
|FR-32|Sistem harus menyediakan mode gelap.|P1|
|FR-33|Pengguna harus dapat berpindah antara mode terang dan gelap.|P1|
|FR-34|Perubahan mode harus mempertahankan keterbacaan dan konsistensi visual.|P1|

### 5.8 CMS & Authentication

|ID|Requirement|Prioritas|
|---|---|---|
|FR-35|Sistem harus menyediakan CMS untuk pengelolaan konten portfolio.|P1|
|FR-36|Sistem harus menyediakan authentication untuk akses pengelolaan konten.|P1|
|FR-37|Hanya pengguna yang memiliki hak akses yang dapat mengelola konten.|P1|
|FR-38|Admin harus dapat membuat, membaca, memperbarui, dan menghapus konten proyek melalui CMS sesuai kebutuhan.|P1|
|FR-39|Admin harus dapat mengelola data anggota kelompok melalui CMS.|P1|
|FR-40|Admin harus dapat mengelola arsip penugasan mingguan melalui CMS.|P1|
|FR-41|Perubahan konten CMS harus dapat ditampilkan pada website publik setelah proses publikasi/update yang sesuai.|P1|

### 5.9 Responsive Experience

|ID|Requirement|Prioritas|
|---|---|---|
|FR-42|Sistem harus menyediakan layout responsive untuk mobile.|P1|
|FR-43|Sistem harus menyediakan layout responsive untuk tablet.|P1|
|FR-44|Sistem harus menyediakan layout responsive untuk desktop.|P1|
|FR-45|Konten utama dan fungsi navigasi harus tetap dapat digunakan pada seluruh breakpoint yang didukung.|P1|

---

## 6. Non-Functional Requirements

### 6.1 Performance

|ID|Requirement|Prioritas|
|---|---|---|
|NFR-01|Halaman harus memiliki waktu loading yang cepat pada kondisi jaringan normal.|P1|
|NFR-02|Animasi dan transisi antarmuka harus berjalan secara smooth tanpa mengganggu navigasi pengguna.|P1|
|NFR-03|Media dan aset visual harus dioptimalkan agar tidak menyebabkan beban halaman yang tidak diperlukan.|P1|

Target performa numerik akan ditentukan melalui evaluasi implementasi dan testing selama development.

### 6.2 Accessibility

|ID|Requirement|Prioritas|
|---|---|---|
|NFR-04|Website harus menargetkan kepatuhan **WCAG 2.1 Level AA**.|P1|
|NFR-05|Konten harus memiliki kontras yang memadai pada mode terang maupun gelap.|P1|
|NFR-06|Navigasi utama harus dapat digunakan tanpa bergantung sepenuhnya pada pointer/mouse.|P1|
|NFR-07|Elemen interaktif harus memiliki label atau informasi yang dapat dipahami pengguna teknologi asistif.|P1|

### 6.3 Responsive

|ID|Requirement|Prioritas|
|---|---|---|
|NFR-08|Website harus mendukung perangkat mobile, tablet, dan desktop.|P1|
|NFR-09|Layout tidak boleh mengalami horizontal overflow yang tidak disengaja pada breakpoint yang didukung.|P1|
|NFR-10|Interaksi horizontal showcase harus tetap dapat digunakan pada perangkat touch.|P1|

### 6.4 Browser Compatibility

|ID|Requirement|Prioritas|
|---|---|---|
|NFR-11|Website harus mendukung browser modern yang umum digunakan pada perangkat desktop dan mobile.|P1|

Target browser minimum mengikuti versi browser modern yang masih umum digunakan pada saat rilis.

### 6.5 Deployment & Availability

|ID|Requirement|Prioritas|
|---|---|---|
|NFR-12|Website harus dapat di-deploy menggunakan platform Vercel.|P1|
|NFR-13|Website harus dapat diakses melalui deployment production tanpa memerlukan proses lokal.|P1|

Tidak ditetapkan target SLA/uptime khusus di luar kemampuan deployment standar Vercel.

### 6.6 Content Management & Security

|ID|Requirement|Prioritas|
|---|---|---|
|NFR-14|Akses CMS/admin harus dilindungi dengan authentication.|P1|
|NFR-15|Konten pengelolaan internal tidak boleh dapat diubah oleh pengguna publik tanpa hak akses.|P1|
|NFR-16|Data yang digunakan untuk website publik harus dapat dikelola secara terstruktur melalui CMS.|P1|

### 6.7 SEO

SEO tingkat lanjut bukan merupakan requirement utama pada v1.0.

Website tetap harus memiliki metadata dasar yang diperlukan untuk pengalaman berbagi halaman dan identifikasi konten, tetapi optimasi mesin pencari bukan fokus utama produk.

---

## 7. Scope

## 7.1 In Scope — v1.0

### Public Portfolio

- Landing page portfolio kelompok.
    
- Split-View Hero.
    
- Navigasi section.
    
- Showcase karya.
    
- Kategori proyek Pendidikan dan Industri.
    
- Sticky/horizontal project showcase.
    
- Halaman detail proyek `/proyek/[slug]`.
    
- Dokumentasi proses UI/UX sesuai kebutuhan masing-masing proyek.
    
- Research apabila tersedia.
    
- Wireframe apabila tersedia.
    
- Final design.
    
- Embed/link prototype Figma.
    
- Design System Preview.
    
- Perbandingan visual Pendidikan vs Industri.
    
- Profil anggota kelompok.
    
- Nama, foto, dan role anggota.
    
- Tabel arsip penugasan mingguan.
    
- Dark mode.
    
- Light mode.
    
- Responsive design untuk mobile, tablet, dan desktop.
    

### Content Management

- CMS.
    
- Authentication.
    
- Pengelolaan proyek.
    
- Pengelolaan anggota.
    
- Pengelolaan arsip tugas mingguan.
    
- Publikasi/perubahan konten melalui CMS.
    

### Quality

- Performance yang baik.
    
- Animasi yang smooth.
    
- Target WCAG 2.1 AA.
    
- Dukungan browser modern.
    
- Deployment production melalui Vercel.
    

---

## 7.2 Out of Scope — v1.0

Fitur berikut tidak menjadi bagian dari rilis pertama:

- Sistem komentar.
    
- Like/reaction pada proyek.
    
- Guestbook.
    
- Blog.
    
- Dashboard analytics khusus untuk pengunjung.
    
- Fitur pencarian kompleks.
    
- Multi-language.
    
- Integrasi pihak ketiga selain kebutuhan prototype Figma dan layanan yang diperlukan oleh sistem CMS.
    
- Social login, kecuali diperlukan oleh sistem authentication yang dipilih.
    
- Fitur AI.
    
- Chatbot.
    
- Recommendation system.
    
- Kolaborasi real-time pada portfolio.
    
- Fitur komunitas.
    
- Marketplace.
    
- Sistem submission publik.
    
- Custom desktop application.
    
- Mobile application native.
    
- Authentication untuk pengunjung umum.
    
- Dashboard pengguna non-admin.
    
- Fitur administrasi yang tidak berkaitan dengan pengelolaan konten portfolio.
    

### Catatan Dark/Light Mode

Dark mode **tidak termasuk Out of Scope**.

Dark mode dan light mode merupakan bagian dari fitur v1.0 karena keduanya dirancang sebagai dua mode pengalaman visual portfolio.

---

# 8. Release Definition

Rilis **v1.0** dianggap siap apabila:

1. Landing page dapat diakses secara production.
    
2. Dua proyek utama, Pendidikan dan Industri, dapat direpresentasikan dalam portfolio.
    
3. Karya yang telah ditetapkan untuk v1.0 terdokumentasi.
    
4. Halaman detail proyek dapat dibuka.
    
5. Prototype Figma dapat diakses melalui halaman proyek.
    
6. Profil anggota dapat ditampilkan.
    
7. Arsip tugas mingguan dapat ditampilkan.
    
8. Konten dapat dikelola melalui CMS.
    
9. Authentication admin telah berfungsi.
    
10. Dark mode dan light mode dapat digunakan.
    
11. Website responsive pada mobile, tablet, dan desktop.
    
12. Animasi utama berjalan dengan smooth.
    
13. Website memenuhi target accessibility WCAG 2.1 AA.
    
14. Website dapat di-deploy melalui Vercel.
    
15. Reviewer dapat menemukan karya tertentu dari landing page dalam maksimal 3 interaksi navigasi.
    

---

# 9. Product Principles

### 1. Documentation First

Portfolio tidak hanya menunjukkan hasil akhir, tetapi juga menyediakan konteks proses pengerjaan.

### 2. Reviewer First

Pengalaman utama harus memprioritaskan kebutuhan dosen dan reviewer akademik sebagai target pengguna utama.

### 3. Two Design Spectrums

Pendidikan dan Industri harus memiliki identitas visual yang berbeda namun tetap terasa sebagai bagian dari satu portfolio.

### 4. Content Over Decoration

Interaksi dan animasi digunakan untuk membantu eksplorasi konten, bukan sekadar menjadi dekorasi.

### 5. Maintainable Content

Konten portfolio harus dapat diperbarui melalui CMS tanpa memerlukan perubahan kode untuk setiap perubahan informasi.

### 6. Accessible by Default

Design dan interaction harus mempertimbangkan accessibility sejak awal dengan target WCAG 2.1 AA.

### 7. Scope Discipline

Fitur yang tidak tercantum dalam In Scope v1.0 tidak dianggap sebagai bagian dari release kecuali PRD diperbarui secara eksplisit.