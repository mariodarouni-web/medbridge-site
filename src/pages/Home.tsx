import Header from '../sections/Header'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import Vision from '../sections/Vision'
import NetworkMap from '../sections/NetworkMap'
import Verticals from '../sections/Verticals'
import Methodology from '../sections/Methodology'
import Coverage from '../sections/Coverage'
import Contact from '../sections/Contact'
import InnovatorPopup from '../sections/InnovatorPopup'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0]">
      <Header />
      <Hero />
      <Marquee />
      <Vision />
      <NetworkMap />
      <Verticals />
      <Methodology />
      <Coverage />
      <Contact />
      <InnovatorPopup />
    </main>
  )
}
