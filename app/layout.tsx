import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Synapse — Group UI/UX Portfolio',
    template: '%s · Synapse',
  },
  description:
    'Synapse adalah portfolio kelompok UI/UX yang mendokumentasikan karya, proses desain, dan penugasan mingguan dari mata kuliah UI/UX Design.',
  openGraph: {
    type: 'website',
    siteName: 'Synapse',
    title: 'Synapse — Group UI/UX Portfolio',
    description:
      'Portfolio kelompok UI/UX yang menampilkan dua spektrum desain: Pendidikan dan Industri.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={plusJakartaSans.variable}
      suppressHydrationWarning
    >
      {/*
        suppressHydrationWarning on <html> is required because the ThemeToggle
        injects a "dark" class via script before React hydrates.
      */}
      <head>
        {/* Inline script: apply saved theme before first paint (no flash) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('synapse-theme');
                if (saved === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
