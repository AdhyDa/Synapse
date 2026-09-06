import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="text-center space-y-6 max-w-md">
        <span className="text-xs font-mono tracking-widest uppercase text-[var(--color-text-muted)]">
          Error 404
        </span>
        <h1 className="text-5xl font-bold tracking-tight text-[var(--color-text)]">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
          Karya atau halaman yang Anda tuju tidak ditemukan atau telah dipindahkan.
        </p>
        <div className="pt-2">
          <Link href="/#showcase">
            <Button variant="primary" size="md" className="gap-2">
              <ArrowLeft size={14} />
              Kembali ke Showcase
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

