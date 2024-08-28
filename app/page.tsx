import Image from 'next/image'
import HomeTopic from './components/HomeHero'
import AboutIntro from './components/AboutIntro' 
import AboutCoding from './components/AboutCoding' 
import AboutHobby from './components/AboutHobby'
import AboutResolution from './components/AboutResolution'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-28 overflow-x-hidden">
      <HomeTopic />
      <AboutIntro />
      <AboutCoding />
      <AboutHobby />
      <AboutResolution />
    </main>
  )
}
