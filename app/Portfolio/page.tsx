import React from 'react'
import PortfolioHero from '../components/PortfolioHero'
import Repos from '../components/Repos'
import Blog from '../components/Blog'

export default function Portfolio() {
  return (
    <main className="flex min-h-screen w-screen overflow-hidden flex-col items-center justify-between py-28">
      <PortfolioHero />
      <Repos />
      <Blog />
    </main>
  )
}
