import { MapPin, Sun, Sunset } from 'lucide-react'
import { waLink } from '@/lib/wa'

export default function LokasiHarian() {
  return (
    <section id="lokasi" className="py-12 md:py-20 bg-surface">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg mb-4">
            Gerobak SPR Hari Ini Ada di Mana?
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-2">
            Cek dulu sebelum keluar rumah.
          </p>
          <p className="text-body-md text-on-surface-variant mb-4">
            Beroperasi di area sekitar. Lokasi harian bisa berubah. Hubungi
            WhatsApp untuk tahu lokasi terbaru sebelum datang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="p-8 rounded-3xl border-2 border-dashed border-outline-variant bg-surface-container-lowest flex flex-col items-center text-center">
            <Sun size={48} className="text-secondary mb-4" />
            <h3 className="font-headline text-headline-md mb-2">Sesi Pagi</h3>
            <p className="text-body-md text-on-surface-variant mb-6">
              08.00 – 12.00
            </p>
          </div>

          <div className="p-8 rounded-3xl border-2 border-dashed border-outline-variant bg-surface-container-lowest flex flex-col items-center text-center">
            <Sunset size={48} className="text-primary mb-4" />
            <h3 className="font-headline text-headline-md mb-2">Sesi Sore</h3>
            <p className="text-body-md text-on-surface-variant mb-6">
              14.00 – 17.00 / 18.00
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={waLink('Halo, lokasi jualan hari ini di mana?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-colors"
          >
            <MapPin size={20} />
            Tanya Lokasi Hari Ini via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
