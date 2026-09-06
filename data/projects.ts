import type { Project, ShowcaseWork } from '@/types';

export const projects: Project[] = [
  // ── Project 1: Education ───────────────────────────────────────────────────
  {
    id: 'proj-001',
    slug: 'pendidikan-edupath',
    title: 'EduPath',
    subtitle: 'Aplikasi Manajemen Pembelajaran Berbasis Kompetensi',
    domain: 'education',
    year: '2026',
    description:
      'Platform e-learning yang dirancang untuk membantu mahasiswa merencanakan jalur studi mereka secara mandiri, melacak kompetensi yang telah diraih, dan terhubung dengan sumber belajar yang relevan.',
    overview:
      'EduPath lahir dari kebutuhan nyata mahasiswa yang kesulitan memahami keterkaitan antar mata kuliah dan kompetensi yang perlu mereka bangun. Proyek ini mengeksplorasi bagaimana desain antarmuka yang intuitif dapat menjembatani gap antara kurikulum akademik dan tujuan karir individual.',
    coverImage: '/images/projects/edupath-cover.jpg',
    heroImage: '/images/projects/edupath-hero.jpg',
    tags: ['Education', 'Mobile App', 'Learning Management', 'UX Research'],
    roleDistribution: [
      { memberName: 'Adhyaksa Daudi M.A.', role: 'Lead UI/UX Designer' },
      { memberName: 'Azzahra Brilian K.', role: 'UX Researcher & IA' },
      { memberName: 'Dinda Nurul Azizah', role: 'Visual & Interaction Designer' },
      { memberName: 'Fadlilah Aditya Ahmad', role: 'UX Writer & Usability Analyst' },
    ],
    stats: [
      { label: 'Durasi Proyek', value: '8 Minggu' },
      { label: 'Iterasi Desain', value: '3 Iterasi' },
      { label: 'Partisipan Riset', value: '12 Mahasiswa' },
      { label: 'Layar Dirancang', value: '40+ Screens' },
    ],
    research:
      'Riset dilakukan melalui wawancara mendalam dengan 12 mahasiswa aktif dari berbagai angkatan. Temuan utama menunjukkan bahwa 83% mahasiswa tidak memiliki gambaran jelas tentang kompetensi apa yang harus dicapai tiap semester, dan 67% merasa kurikulum terasa terputus-putus tanpa narasi yang kohesif.',
    wireframe:
      'Wireframe dikembangkan dalam tiga fase: low-fidelity sketches untuk eksplorasi konsep cepat, mid-fidelity untuk validasi alur utama, dan high-fidelity untuk uji usability. Fokus utama adalah menyederhanakan navigasi dan menampilkan progress kompetensi secara visual.',
    finalDesign:
      'Desain final menggunakan pendekatan "Competency Journey" — pengguna melihat diri mereka sedang menempuh perjalanan belajar, bukan sekadar mengikuti daftar tugas. Palet hangat dengan sentuhan biru memberikan kesan ramah namun tetap akademik.',
    processSteps: [
      {
        phase: 'Empathize',
        description: 'Wawancara mendalam, observasi proses belajar, competitive analysis',
        deliverable: 'Affinity Diagram, Empathy Map',
      },
      {
        phase: 'Define',
        description: 'Sintesis insight, prioritas masalah, persona pengguna',
        deliverable: 'User Persona, Problem Statement, HMW Questions',
      },
      {
        phase: 'Ideate',
        description: 'Brainstorming fitur, information architecture, user flow',
        deliverable: 'User Flow, Site Map, Feature Prioritization',
      },
      {
        phase: 'Prototype',
        description: 'Lo-fi sketches → mid-fi wireframe → hi-fi prototype',
        deliverable: 'Figma Prototype (3 Iterasi)',
      },
      {
        phase: 'Test',
        description: 'Usability testing dengan 5 partisipan per iterasi',
        deliverable: 'Testing Report, Design Recommendations',
      },
    ],
    figmaUrl: 'https://figma.com/file/placeholder-edupath',
    figmaEmbedUrl: '',
    nextProject: 'industri-mantis',
  },

  // ── Project 2: Industry ────────────────────────────────────────────────────
  {
    id: 'proj-002',
    slug: 'industri-mantis',
    title: 'Mantis',
    subtitle: 'Dashboard Pemantauan Infrastruktur IoT untuk Fasilitas Industri',
    domain: 'industry',
    year: '2026',
    description:
      'Sistem antarmuka kontrol dan monitoring untuk operator fasilitas manufaktur — menampilkan data sensor real-time, anomali sistem, dan log pemeliharaan dalam satu panel terpadu dengan kepadatan informasi tinggi.',
    overview:
      'Mantis dirancang untuk operator yang bekerja di bawah tekanan tinggi dan membutuhkan keputusan cepat berdasarkan data. Desain mengutamakan kejelasan hierarki informasi, scanning cepat, dan respons yang presisi terhadap kondisi kritis — filosofi yang bertolak belakang dengan pendekatan humanis pada EduPath.',
    coverImage: '/images/projects/mantis-cover.jpg',
    heroImage: '/images/projects/mantis-hero.jpg',
    tags: ['Industry', 'Dashboard', 'IoT', 'Data Visualization', 'Dark UI'],
    roleDistribution: [
      { memberName: 'Adhyaksa Daudi M.A.', role: 'Lead Front-End & UI Design' },
      { memberName: 'Azzahra Brilian K.', role: 'Contextual Inquirer & IA' },
      { memberName: 'Dinda Nurul Azizah', role: 'Telemetry Data Viz Designer' },
      { memberName: 'Fadlilah Aditya Ahmad', role: 'Alert Taxonomy & UX Writer' },
    ],
    stats: [
      { label: 'Durasi Proyek', value: '10 Minggu' },
      { label: 'Iterasi Desain', value: '4 Iterasi' },
      { label: 'Partisipan Riset', value: '6 Operator Industri' },
      { label: 'Widget Dirancang', value: '25+ Components' },
    ],
    research:
      'Contextual inquiry dilakukan langsung di environment kerja operator — control room dan floor factory. Temuan utama: operator menggunakan 3–5 layar berbeda secara bersamaan, tidak ada unified view untuk melihat status keseluruhan sistem, dan alert fatigue menjadi masalah serius karena notifikasi terlalu banyak.',
    wireframe:
      'Wireframe dimulai dari matriks prioritas informasi: apa yang harus terlihat dalam 2 detik pertama? Konsep "Information Hierarchy Grid" dikembangkan untuk mengatur densitas data tanpa mengorbankan keterbacaan.',
    finalDesign:
      'Desain final menggunakan dark interface dengan accent cyan untuk status aktif dan oranye untuk peringatan kritis. Grid data yang ketat dengan tipografi monospace untuk nilai numerik menciptakan kesan presisi teknis yang tinggi.',
    processSteps: [
      {
        phase: 'Research',
        description: 'Contextual inquiry di control room, task analysis, domain research',
        deliverable: 'Research Report, Task Flow Map',
      },
      {
        phase: 'Architecture',
        description: 'Information hierarchy, data grouping, alert taxonomy',
        deliverable: 'IA Document, Alert Priority Matrix',
      },
      {
        phase: 'Design',
        description: 'Dashboard layout, component library, data visualization system',
        deliverable: 'Component Library, Hi-Fi Design',
      },
      {
        phase: 'Validation',
        description: 'Expert review dengan domain expert, A/B testing layout',
        deliverable: 'Expert Review Report, Final Design',
      },
    ],
    figmaUrl: 'https://figma.com/file/placeholder-mantis',
    figmaEmbedUrl: '',
    nextProject: 'pendidikan-edupath',
  },
];

// ── Showcase Works (Hasil Karya Nyata Kelompok untuk Horizontal Scroll) ────────
export const showcaseWorks: ShowcaseWork[] = [
  {
    id: 'work-01',
    title: 'Competency Journey & Skill Path Mapping',
    projectSlug: 'pendidikan-edupath',
    projectTitle: 'EduPath',
    category: 'UI/UX Visual Architecture',
    domain: 'education',
    description:
      'Antarmuka peta kompetensi interaktif yang memvisualisasikan keterkaitan antar mata kuliah dengan pohon keterampilan bercabang.',
    deliverableType: 'High-Fidelity Screen Prototype',
    tags: ['Learning Path', 'Skill Tree', 'Visual Progress'],
    metrics: '94% Task Completion Rate',
    previewType: 'roadmap',
  },
  {
    id: 'work-02',
    title: 'Real-Time Sensor Telemetry Matrix',
    projectSlug: 'industri-mantis',
    projectTitle: 'Mantis',
    category: 'Data Visualization & Dashboard',
    domain: 'industry',
    description:
      'Sistem pemantauan 48 sensor telemetri temperatur dan getaran mesin turbin dengan visualisasi latensi sub-detik.',
    deliverableType: 'Industrial Dashboard Widget',
    tags: ['IoT Grid', 'Telemetry Graph', 'High-Density UI'],
    metrics: '0.4s Scan Latency Target',
    previewType: 'dashboard',
  },
  {
    id: 'work-03',
    title: 'Adaptive Course Milestone Module',
    projectSlug: 'pendidikan-edupath',
    projectTitle: 'EduPath',
    category: 'Mobile Application Flow',
    domain: 'education',
    description:
      'Layar eksplorasi modul belajar mandiri dengan kartu progres berbasis micro-interaction dan rekomendasi materi cerdas.',
    deliverableType: 'Mobile Screen Design System',
    tags: ['Mobile UX', 'Micro-Interactions', 'Card Matrix'],
    metrics: '40+ Screen Variants',
    previewType: 'mobile-screen',
  },
  {
    id: 'work-04',
    title: 'Emergency Alarm & Fault Mitigator Panel',
    projectSlug: 'industri-mantis',
    projectTitle: 'Mantis',
    category: 'Safety-Critical UX',
    domain: 'industry',
    description:
      'Antarmuka mitigasi anomali dengan taksonomi keparahan 3 tingkat untuk menekan angka alert fatigue operator pabrik hingga 65%.',
    deliverableType: 'Critical Control Component',
    tags: ['Alert Mitigation', 'Incident Workflow', 'Safety Protocol'],
    metrics: '65% Alert Noise Reduction',
    previewType: 'alert-panel',
  },
  {
    id: 'work-05',
    title: 'Unified Design Token & Component Specification',
    projectSlug: 'pendidikan-edupath',
    projectTitle: 'Synapse Core',
    category: 'Design Systems & Tokens',
    domain: 'education',
    description:
      'Sistem token semantik warna, skala tipografi Plus Jakarta Sans, dan komponen modular yang menjamin harmoni lintas media.',
    deliverableType: 'Figma Library & Code Tokens',
    tags: ['Design System', 'Tokens', 'WCAG AA Verified'],
    metrics: '100% WCAG 2.1 AA Compliant',
    previewType: 'design-tokens',
  },
  {
    id: 'work-06',
    title: 'User Interview Synthesis & Heuristic Matrix',
    projectSlug: 'industri-mantis',
    projectTitle: 'Research Artifact',
    category: 'UX Research Synthesis',
    domain: 'industry',
    description:
      'Peta afinitas hasil wawancara 18 responden akademisi & industri yang mendasari keputusan arsitektur informasi kedua proyek.',
    deliverableType: 'Research Report & IA Diagram',
    tags: ['Affinity Diagram', 'Heuristic Review', '18 Partisipan'],
    metrics: '18 Sesi Contextual Inquiry',
    previewType: 'research-matrix',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): Project | undefined {
  const current = projects.find((p) => p.slug === slug);
  if (!current?.nextProject) return undefined;
  return projects.find((p) => p.slug === current.nextProject);
}
