import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import TentangKami from '@/components/TentangSPR'
import ProdukPaket from '@/components/ProdukPaket'
import Testimoni from '@/components/Testimoni'
import EventOrder from '@/components/EventOrder'
import LokasiHarian from '@/components/LokasiHarian'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <TentangKami />
        <ProdukPaket />
        <Testimoni />
        <EventOrder />
        <LokasiHarian />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
