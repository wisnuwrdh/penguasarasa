import Image from 'next/image'
import { waLink } from '@/lib/wa'
import WhatsAppIcon from '@/components/WhatsAppIcon'

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-white py-12 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logospr.png"
              alt="Logo SPR"
              width={36}
              height={36}
              className="object-contain"
            />
            <h3 className="font-headline text-headline-md text-primary-fixed font-bold">
              Bakso Cilok Ayam
            </h3>
          </div>
          <p className="text-body-md text-white/60 leading-relaxed mb-6">
            © 2026 SPR (Sang Penguasa Rasa). Sudah melayani selama 3 tahun.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61551691674105"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary-fixed mb-6">
            Jam Operasional
          </h4>
          <div className="space-y-4 text-body-md">
            <p className="text-white/60">
              <span className="block text-white/80 font-medium">Sesi Pagi</span>
              08.00 – 12.00
            </p>
            <p className="text-white/60">
              <span className="block text-white/80 font-medium">Sesi Sore</span>
              14.00 – 17.00 / 18.00
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-semibold">
              QRIS
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-semibold">
              Tunai
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary-fixed mb-6">
            Navigasi Cepat
          </h4>
          <nav className="flex flex-col gap-4 text-body-md">
            <a
              href="#produk"
              className="text-white/60 hover:text-white transition-colors"
            >
              Menu Paket
            </a>
            <a
              href="#event"
              className="text-white/60 hover:text-white transition-colors"
            >
              Order Event
            </a>
            <a
              href="#lokasi"
              className="text-white/60 hover:text-white transition-colors"
            >
              Lokasi Jualan
            </a>
            <a
              href={waLink('Halo')}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#25D366' }}
              className="font-bold hover:underline inline-flex items-center gap-2"
            >
              <WhatsAppIcon size={16} />
              Chat via WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
