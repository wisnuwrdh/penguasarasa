import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import TentangSPR from '@/components/TentangSPR'
import ProdukPaket from '@/components/ProdukPaket'
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
        <TentangSPR />
        <ProdukPaket />
        <EventOrder />
        <LokasiHarian />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
