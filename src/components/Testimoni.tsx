'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Dewi R.',
    text: 'Baksonya kenyal, bumbunya meresap. Udah langganan tiap minggu!',
    rating: 5,
  },
  {
    name: 'Budi S.',
    text: 'Pesan buat arisan 50 porsi, semua suka. Prosesnya gampang banget via WA.',
    rating: 5,
  },
  {
    name: 'Sari M.',
    text: 'Harga terjangkau, rasanya nggak murahan. Recommended banget!',
    rating: 5,
  },
]

export default function Testimoni() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      containScroll: 'keepSnaps',
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        playOnInit: true,
        breakpoints: {
          '(min-width: 768px)': { active: false },
        },
      }),
    ]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="py-12 md:py-20 bg-surface-container-low overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg mb-4">
            Kata Pelanggan
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Yang udah pernah nyobak, pada bilang apa?
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="min-w-0 flex-[0_0_100%] md:flex-[0_0_33.333%] px-3 md:px-4"
                >
                  <Card testimonial={t} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow z-10 max-[360px]:opacity-0"
            aria-label="Sebelumnya"
          >
            <ChevronLeft size={20} className="text-primary" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow z-10 max-[360px]:opacity-0"
            aria-label="Selanjutnya"
          >
            <ChevronRight size={20} className="text-primary" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? 'bg-primary w-6'
                  : 'bg-outline-variant'
              }`}
              aria-label={`Pindah ke testimoni ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Card({ testimonial: t }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 relative">
      <span className="absolute top-4 left-4 text-primary/15 text-7xl leading-none font-serif select-none">
        &ldquo;
      </span>
      <div className="flex gap-1 mb-3 mt-6">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-[#FFD700] text-[#FFD700]" />
        ))}
      </div>
      <p className="text-body-md text-on-surface mb-4 leading-relaxed">
        {t.text}
      </p>
      <p className="text-label-md text-on-surface-variant font-bold">
        — {t.name}
      </p>
    </div>
  )
}
