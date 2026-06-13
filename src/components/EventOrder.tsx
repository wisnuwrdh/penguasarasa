import { CheckCircle, MessageCircle } from 'lucide-react'
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
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg mb-4">
            Punya Acara? SPR Siap Hadir
          </h2>
          <p className="text-body-lg text-on-surface-variant mb-2">
            Dari arisan sampai acara sekolah. SPR sudah pernah melayani event
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
            href={waLink('Halo SPR, saya ingin konsultasi untuk event')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-tertiary-container text-on-tertiary-container px-8 py-4 rounded-xl font-bold text-body-lg hover:opacity-90 transition-all active:scale-95 shadow-md"
          >
            <MessageCircle size={24} />
            Konsultasi Event via WhatsApp
          </a>
          <p className="text-label-md text-on-surface-variant mt-4">
            Slot terbatas per hari. Konfirmasi lebih awal, lebih aman.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
              {/* TODO: Ganti dengan foto produk asli */}
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1CetEaNHA7xQI3PGItY7bXmpBFV9cD12Oyo76on4HDVSx3VlWkV_9WtDIVhrhRzHhvkYQ3X2v4RcEGOt7VmRvKhiI3qZMokpd5Yth5lPOdi0br2tLWZ59rFbWQP4I17nPOuWdv-kkl-Y5oTE8Eb4ydv3dHoAlsLyrdvyHyLlHWWp9T1BGtUdBzrG1unGY0vf_G1gThU8-YNGymQHv6_yGU8Lxw2YDdZfVophpVNADsAdEAn54MR1k8EMz3_8LbuadW3vKsmyyL3Y"
                alt="Suasana event dengan hidangan Bakso Cilok Ayam"
              />
            </div>
            <div className="h-40 rounded-2xl overflow-hidden shadow-lg">
              {/* TODO: Ganti dengan foto produk asli */}
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQcQUzXQpo36NzmhyQFT2DzvdLVL_nNKD2qYtjqjVBMtYGb8tS4nup00iP7nRpKdN1O-duRwbNK3LMA8nrNvnYrKzIw4jNt-V301bw7yZOOHblhSY6qiwL99yYSrwj3kaAaxWO_8GWsO7MRY_BpoDcKQ8RGG9OhSP8vNPNho6fYcAmb5MvbgKtCh9Z8t9OYwO_Dgfg5riJspbvNZ5j986ADSLPVrFm49pwl2uBGUCvmAh2otajE-7YIb-8dYHAmKGugBVSP6lkpLQ"
                alt="Tampilan catering Bakso Cilok Ayam untuk acara"
              />
            </div>
          </div>
          <div className="pt-8 space-y-4">
            <div className="h-40 rounded-2xl overflow-hidden shadow-lg">
              {/* TODO: Ganti dengan foto produk asli */}
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP_l5gUIIw5R59TvTXcQMrqcglTmEsFcu4uidhWmtsrV3YNjwzl29qPvpQSb-QJJPX5weRavT0iKAsRineNy7E55PURnl_OQx5lhWviTLAsnt_2PwYoTdivYoFxrSo-Hzo8B73XzIS0cU4Q4DeWChXlabRg84b37-pYd2jqKgraDj81DS9tdmO8Wh-XMtDLZwDfzjFyJS6fVhNSyT_xFlrkEKHeE2ad8ZZM1KbGASUZ98TegJ59t4Xo7-eiDlHWGPFFpUOEmxQcKM"
                alt="Tamu menikmati Bakso Cilok Ayam di acara kumpul"
              />
            </div>
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
              {/* TODO: Ganti dengan foto produk asli */}
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXdi4uMFR6J-YUouudpF_WgdB31xPbJhiBXJIFReGy0lESOaPThTNpgVX7MpbpPsPnEkWlBlE3etUPPLeQVsR2l3a6SRjmpxCJ42w4QjpOaQLTHvJ_nCNI4ucN4hgfUL2vI1etaDrP2LcpxUqczHMuKzD6oSJAJvYcrV7oaLIVuLXPX2uQpIubaNbK54pfoaCQ7iH157XeodYgj25DcbJ-eVMbZsG9SuYy4yrnrNxu8Ne73XxA0sIf1xJZB197CC-6hGDyz1IL0ew"
                alt="Set buffet Bakso Cilok Ayam untuk acara komunitas"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
