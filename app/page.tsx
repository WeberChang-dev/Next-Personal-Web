import Image from 'next/image'
import HomeTopic from './components/HomeHero'
import HomeContent from './components/HomeContent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-28 overflow-x-hidden">
      <HomeTopic />
      <HomeContent />
    </main>
  )
}
