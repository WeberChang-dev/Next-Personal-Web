import React from 'react'
import PortfolioHero from '../components/PortfolioHero'
import Repos from '../components/Repos'
import Experience from '../components/Experience'

export default function Portfolio() {
  return (
    <main className="flex min-h-screen w-screen overflow-hidden flex-col items-center justify-between py-28">
      <PortfolioHero />
      <Repos />
      <Experience />
    </main>
  )
}
