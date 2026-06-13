import { Send } from 'lucide-react'
import { waLink } from '@/lib/wa'

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent, transparent 1px, white 1px, white 2px)',
            backgroundSize: 'calc(100% / 12) 100%',
          }}
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10 text-center">
        <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-primary mb-4">
          Jangan Sampai Kehabisan. Pesan Sekarang.
        </h2>
        <p className="text-body-lg text-on-primary/80 mb-2 max-w-2xl mx-auto">
          Sesi jualan terbatas. Slot event lebih cepat habis dari yang kamu
          kira.
        </p>
        <p className="text-body-md text-on-primary/70 mb-10 max-w-xl mx-auto">
          Sudah 3 tahun SPR melayani pelanggan yang tahu mana yang enak.
          Sekarang giliran kamu. Satu chat, langsung beres.
        </p>
        <a
          href={waLink('Halo SPR, saya mau pesan sekarang')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-tertiary-container text-on-tertiary-container px-10 py-5 rounded-2xl font-bold text-headline-md hover:opacity-90 transition-all active:scale-95 shadow-2xl"
        >
          <Send size={28} />
          Pesan Sekarang via WhatsApp
        </a>
        <p className="text-body-md text-on-primary/60 mt-4">
          Balas WA kami sekarang. Konfirmasi cepat, tidak perlu ribet.
        </p>
      </div>
    </section>
  )
}
