import { waLink } from '@/lib/wa'

const paket = [
  {
    id: 'A',
    title: 'Paket Hemat',
    pcs: 10,
    price: 'Rp10.000',
    desc: 'Cocok untuk cemilan sendiri atau untuk si kecil. Isi 10 pcs.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkylsFRrIDiO5ewrdJhlKr4Ai92vdXSRV1ycTpmdLh1OqW4w8xLiUkpHkDMW-yHOeGkGvqqMb4aTS0uR5seK4WmC3KDplhQvkVW4uy2PmzhBGuvpX2BV5yWaib57Mxn1gy_WJd0zzL04vCOKtjqDsnYvvHE39QJ0aXUF5zdDWvKLpWv3zq4W7ET1WGgrDrhxNLkWtmE6FebMaQGxX6SVrEBOSEYabHeRWdOhwtdF95qmx080Y6S17CICjl50OTVt0DVxZXxnrNEGE',
    alt: 'Penyajian Bakso Cilok Ayam porsi personal dalam mangkuk',
    bestValue: false,
  },
  {
    id: 'B',
    title: 'Paket Favorit',
    pcs: 15,
    price: 'Rp15.000',
    desc: 'Porsi pas untuk dinikmati berdua atau untuk yang laper. Isi 15 pcs.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkYj6OmeMb5z0LdbSuHFpAHzF7Xi7CiK63aqqvnK5MgOHJJtHczZ46vsR-NiTtlL_Vm1lCoJBXU8JRtjATR0JOx21PCLRig-xIKClfbNrT-Rz2rbmhqbzI-tQqm5j8oKKRoPcTkqrWknvupj5oLhP3uTgKWiTlCJBma8o0qv31RxgeRWIKvmFMMP50ulC70ox1RbyIm6KM0NrmvUJzAWJ3MfjYy4uAaC4216lLxxs6d0HhZENLK436LpoHwOOCOxbDLBj8BywTGew',
    alt: 'Bakso Cilok Ayam porsi sharing dengan saus kacang',
    bestValue: false,
  },
  {
    id: 'C',
    title: 'Paket Keluarga',
    pcs: 25,
    price: 'Rp25.000',
    desc: 'Paling hemat untuk ramai-ramai. Isi 25 pcs. Cocok untuk keluarga atau kumpul.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxkvunrY0B2gnmYl3B4471_Wd7IzhLr_1QnSWFDYs55g6HGgAlLcyvgDk1xz12MpSDvNFZ7GD4i3QgGHOV4_8Z0k51ZmJXCZ258pVZeHQ5tf2wsHDqqokR3TtJZW3u-wRAwxjN7OE9V-2hBNyS2jX5RdwOqEIrx4Sek6TG61blWSG9oGM82fi3W85Q4pRTQdKV1aPXvk3LWnBY9x6XrLaYgH7yZMqWnoGZf6u340sWcx1R6Ii6JBEwL2zz4vSvMvGhWdW2BFBegvc',
    alt: 'Porsi besar Bakso Cilok Ayam untuk keluarga',
    bestValue: true,
  },
]

export default function ProdukPaket() {
  return (
    <section id="produk" className="py-12 md:py-20 bg-surface">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg mb-4">
            Pilih Paket, Langsung Pesan
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Mulai dari Rp10.000. Ada pilihan untuk semua kebutuhan.
          </p>
          <p className="text-body-md text-on-surface-variant mt-2 max-w-xl mx-auto">
            Mau makan sendiri atau bareng keluarga? Ada paket yang pas. Tinggal
            pilih, hubungi via WA, beres.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paket.map((p) => (
            <div
              key={p.id}
               className={`group bg-surface-container-lowest rounded-3xl p-6 border border-outline-variant hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                p.bestValue
                  ? 'md:scale-105 ring-2 ring-primary/20 relative'
                  : ''
              }`}
            >
              {p.bestValue && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                  ⭐ Best Value
                </div>
              )}
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                {/* TODO: Ganti dengan foto produk asli */}
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={p.img}
                  alt={p.alt}
                />
              </div>
              <h3 className="font-headline text-headline-md mb-2">
                {p.title}, {p.pcs} pcs
              </h3>
              <p className="text-body-md text-on-surface-variant mb-4 flex-grow">
                {p.desc}
              </p>
              <div className="text-primary font-bold text-2xl mb-6">
                {p.price}
              </div>
              <a
                href={waLink(`Halo, saya mau pesan ${p.title} (${p.pcs} pcs)`)}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#25D366', color: '#ffffff' }}
                className={`w-full py-3 text-center font-bold rounded-xl transition-all duration-200 active:scale-95 whitespace-nowrap mt-auto hover:opacity-90 shadow-md`}
              >
                Pesan via WhatsApp
              </a>
              <p className="text-label-md text-on-surface-variant text-center mt-3">
                Konfirmasi cepat, tidak perlu daftar akun.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
