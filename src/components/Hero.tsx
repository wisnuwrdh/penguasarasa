import WhatsAppIcon from '@/components/WhatsAppIcon'
import { waLink } from '@/lib/wa'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="font-headline text-3xl md:text-headline-xl leading-tight mb-6">
            Bakso Cilok Ayam Enak,{' '}
            <br className="hidden md:block" />
            Pesan Langsung via WA.
          </h1>
          <p className="text-body-lg text-on-surface-variant mb-2 max-w-[500px]">
            Sudah 3 tahun melayani. Mulai Rp10.000.
          </p>
          <p className="text-body-md text-on-surface-variant mb-10 max-w-[500px]">
            Nggak perlu nunggu gerobaknya lewat. Pesan langsung, makan hari ini.
          </p>
          <a
            href={waLink('Halo, saya mau pesan Bakso Cilok Ayam sekarang')}
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: '#25D366', color: '#ffffff' }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-body-lg hover:opacity-90 transition-all active:scale-95 shadow-lg"
          >
            <WhatsAppIcon size={24} />
            Pesan Sekarang via WhatsApp
          </a>
          <p className="text-label-md text-on-surface-variant mt-4">
            Balas chat, konfirmasi pesanan. Semudah itu.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
            {/* TODO: Ganti dengan foto produk asli (format .webp) */}
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
