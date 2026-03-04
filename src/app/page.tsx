// Kokomo Sunset Resort Home Page
import Hero from '@/components/Hero'
import Accommodations from '@/components/Accommodations'
import Packages from '@/components/Packages'
import Amenities from '@/components/Amenities'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import { Bed, Users, Square, ArrowRight } from 'lucide-react'


import Dining from '@/components/Dining'
import Feedback from '@/components/Feedback'
import VideoTour from '@/components/VideoTour'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Accommodations />
      <Packages />
      <Amenities />
      <Dining />
      <VideoTour />
      <Gallery />
      <Feedback />
      <Contact />
    </main>
  )
}
