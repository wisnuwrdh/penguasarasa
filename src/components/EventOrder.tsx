import { CheckCircle } from 'lucide-react'
import WhatsAppIcon from '@/components/WhatsAppIcon'
import { waLink } from '@/lib/wa'

const benefits = [
  'Kapasitas: 20–100 porsi per sesi',
  'Harga: Rp10.000/mangkok',
  'DP 30% di muka, pelunasan saat acara',
  'Konfirmasi minimal H-2',
  'Proses via WhatsApp, tidak perlu formulir',
]

export default function EventOrder() {
  return (
    <section id="event" className="py-12 md:py-20 bg-surface-container-low">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg mb-4">
            Punya Acara? Kami Siap Hadir
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-2">
            Dari arisan sampai acara sekolah. Kami sudah pernah melayani event
            sampai 100 porsi. Proses mudah lewat WA.
          </p>
          <p className="text-body-md text-on-surface-variant mb-8">
            Sistemnya jelas: harga per porsi, DP di muka, konfirmasi H-2. Satu
            chat, semua beres. QRIS tersedia untuk pembayaran.
          </p>

          <ul className="space-y-3 mb-10">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-tertiary mt-0.5 shrink-0"
                />
                <span className="text-body-md text-on-surface">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={waLink('Halo, saya ingin konsultasi untuk event Bakso Cilok Ayam')}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#25D366', color: '#ffffff' }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-body-lg hover:opacity-90 transition-all active:scale-95 shadow-md"
          >
            <WhatsAppIcon size={24} />
            Konsultasi Event via WhatsApp
          </a>
          <p className="text-label-md text-on-surface-variant mt-4">
            Slot terbatas per hari. Konfirmasi lebih awal, lebih aman.
          </p>
        </div>
      </div>
    </section>
  )
}
