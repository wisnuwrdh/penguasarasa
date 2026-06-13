import { waLink } from '@/lib/wa'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="font-headline text-3xl md:text-headline-xl leading-tight mb-6">
            Bakso Cilok Ayam yang{' '}
            <br className="hidden md:block" />
            Sudah Dipercaya Selama 3 Tahun.{' '}
            <br className="hidden md:block" />
            Kini Hadir dengan Identitas Baru:{' '}
            <br className="hidden md:block" />
            SPR (Sang Penguasa Rasa).
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-4 max-w-[500px]">
            Nggak perlu nunggu gerobaknya lewat. Pesan langsung, makan hari ini.
          </p>
          <p className="text-body-md text-on-surface-variant mb-10 max-w-[500px]">
            Selama 3 tahun pelanggan mengenal kami dari gerobak yang lewat.
            Sekarang SPR hadir sebagai identitas resmi kami. Pesan jadi lebih
            mudah, langsung via WhatsApp.
          </p>
          <a
            href={waLink('Halo SPR, saya mau pesan sekarang')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-xl font-bold text-body-lg hover:opacity-90 transition-all active:scale-95 shadow-lg"
          >
            <span className="text-xl">💬</span>
            Pesan Sekarang via WhatsApp
          </a>
          <p className="text-label-md text-on-surface-variant mt-4">
            Balas chat, konfirmasi pesanan. Semudah itu.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
            {/* TODO: Ganti dengan foto produk asli */}
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZrCfv54Z-4k0Urbade3W14Jj1Kppwsgu0PBp9cNiPh5uzNVYHxIzgoa6FEklrAD0B9a-HHbq3Yw9pN5GBjX6JIwcgcemdbTDKTIZtPw0AnqjOi2AlXiUSqh2VqvwP-eaD96FcI1nTmfbJEAoWaw0Yq_H6NjnxZ5BAQwOBxN_TbJ2js8mHok_7Oj_QUTxmf0yW1Bi_Rc2SJWJRxohZPviB9LG6TYOp6eYAIfKLNtrNSFaoosiyYt0EuXX1dJhhWcZtVqRWkbVWUrk"
              alt="Bakso Cilok Ayam dalam mangkuk keramik putih dengan kuah dan taburan bawang goreng"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
