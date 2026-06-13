'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { waLink } from '@/lib/wa'

const faqItems = [
  {
    id: 'cara-pesan',
    question: 'Gimana cara pesan?',
    answer:
      'Chat WhatsApp, sebut paket atau kebutuhan eventmu. Kami konfirmasi langsung.',
  },
  {
    id: 'bayar',
    question: 'Bisa bayar pakai apa?',
    answer: 'QRIS dan tunai. Keduanya diterima.',
  },
  {
    id: 'min-order-event',
    question: 'Minimum order untuk event berapa porsi?',
    answer: 'Minimal 20 porsi. Maksimal 100 porsi per sesi.',
  },
  {
    id: 'pesan-hari',
    question: 'Harus pesan berapa hari sebelumnya?',
    answer:
      'Untuk event, konfirmasi minimal H-2. Untuk paket harian, sesuaikan dengan sesi jualan hari itu.',
  },
  {
    id: 'lokasi',
    question: 'Kalau mau tahu gerobaknya ada di mana?',
    answer:
      'Cek section lokasi di halaman ini, atau tanya langsung via WA.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="py-12 md:py-20 bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-center mb-12">
          Ada yang Mau Ditanyain Dulu?
        </h2>

        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div
                key={item.id}
                className="bg-white border border-outline-variant rounded-2xl transition-shadow duration-200"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="flex justify-between items-center w-full p-6 text-left font-headline text-headline-md text-on-surface cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                >
                  <span className="pr-4">{item.question}</span>
                  <ChevronDown
                    size={24}
                    className={`shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? 'max-h-96 pb-6 px-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-body-md text-on-surface-variant leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-body-md text-on-surface-variant mb-6">
            Masih ada pertanyaan?
          </p>
          <a
            href={waLink('Halo SPR, saya masih punya pertanyaan')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-surface-variant text-on-surface px-6 py-3 rounded-xl font-bold hover:bg-primary hover:text-on-primary transition-all active:scale-95"
          >
            <MessageCircle size={20} />
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
