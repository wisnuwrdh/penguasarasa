import { CheckCircle } from 'lucide-react'

export default function SocialProof() {
  return (
    <section className="bg-surface-container-low py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg mb-4">
            Bukan Baru Buka, Sudah Teruji di Lapangan
          </h2>
          <p className="text-body-md text-on-surface-variant max-w-3xl mx-auto">
            Pelanggan kami datang lagi dan lagi, bukan karena
            kebetulan, tapi karena memang enak dan bisa diandalkan. Event order
            sampai 100 porsi pun sudah pernah berjalan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto">
          {[
            'Beroperasi sejak 3 tahun lalu',
            'Event order hingga 100 porsi sudah pernah dijalankan',
            'Pelanggan tetap dari berbagai kalangan: pelajar, ibu rumah tangga, pekerja sekitar',
            'Pembayaran via QRIS dan tunai tersedia',
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 bg-surface-container-lowest rounded-2xl p-4 shadow-sm"
            >
              <CheckCircle
                size={20}
                className="text-tertiary mt-0.5 shrink-0"
              />
              <span className="text-body-md text-on-surface">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
