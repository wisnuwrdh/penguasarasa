import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Dewi R.',
    text: 'Enak banget, baksonya kenyal dan bumbu kacangnya pas. Udah 3 kali pesan, selalu puas.',
    rating: 5,
  },
  {
    name: 'Budi S.',
    text: 'Anak-anak di rumah suka banget. Aku pesan pas ada acara keluarga, langsung ludes.',
    rating: 5,
  },
  {
    name: 'Sari M.',
    text: 'Murah meriah, cocok buat kantong anak kos. Apalagi pas malas masak, tinggal chat WA beres.',
    rating: 5,
  },
]

export default function Testimoni() {
  return (
    <section className="py-12 md:py-20 bg-surface-container-low">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg mb-4">
            Kata Pelanggan
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Yang udah pernah nyobak, pada bilang apa?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-body-md text-on-surface mb-4 italic leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-label-md text-on-surface-variant font-semibold">
                — {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
