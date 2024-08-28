'use client'

import React from 'react'
import type { Chrono as ChronoType } from "react-chrono"
import dynamic from 'next/dynamic'

export const Chrono = dynamic(() => import('react-chrono').then(lib => lib.Chrono), {
  ssr: false,
}) as typeof ChronoType

const items = [{
  title: "2024 Summer",
  cardTitle: "Game Dev at 2024 NTU CSIE Camp Challenge",
  cardSubtitle: "Python Multi-player game for participants to play with automatic program",
  media: {
    type: "IMAGE",
    name: "bruh",
    source: {
      url: '/static/images/DSC01423.jpg'
    }
  }
}]

export default function Experience() {
  return (
    <div className="w-screen flex flex-col justify-evenly items-center flex-wrap py-1.5 px-3.5 z-1">
        <h2 style={{ fontWeight: 'bold', paddingBottom: '8px', color: '#B9D0E9', fontSize: "clamp(2.6rem, 5vw, 3.4rem)", textAlign: "center" }}>Experience</h2>
        <div style={{ width: "80vw" }}>
          <Chrono 
            items={items} 
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: 'white',
              secondary: "#121621",
              cardBgColor: '#121621',
              titleColor: 'red',
              titleColorActive: 'white',
              cardSubtitleColor: 'white',
              cardTitleColor: '#B9D0E9'
            }}
            mediaSettings={{ fit: 'cover' }}
            disableToolbar
          />
        </div>
    </div>
  )
}
