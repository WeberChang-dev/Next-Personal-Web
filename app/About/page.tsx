import React from 'react'
import AboutHero from '../components/AboutHero' 
import AboutIntro from '../components/AboutIntro' 
import AboutCoding from '../components/AboutCoding' 
import AboutHobby from '../components/AboutHobby'
import AboutResolution from '../components/AboutResolution'

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-28 overflow-x-hidden">
      <AboutHero />
      <AboutIntro />
      <AboutCoding />
      <AboutHobby />
      <AboutResolution />
    </main>
  )
}
