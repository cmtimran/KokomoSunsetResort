// Kokomo Sunset Resort Home Page
import Hero from '@/components/Hero'
import Accommodations from '@/components/Accommodations'
import Packages from '@/components/Packages'
import Amenities from '@/components/Amenities'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Dining from '@/components/Dining'
import Feedback from '@/components/Feedback'
import VideoTour from '@/components/VideoTour'
import Philosophy from '@/components/Philosophy'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Philosophy />
      <Accommodations />
      <Amenities />
      <Dining />
      <Packages />
      <VideoTour />
      <Gallery />
      <Feedback />
      <FAQ />
      <Contact />
    </main>
  )
}
