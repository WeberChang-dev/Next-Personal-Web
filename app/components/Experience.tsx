'use client'

import Timeline from './Timeline'

const items = [{
  title: "Associate Software Developer Intern @ Google Taiwan",
  date: "Summer 2025",
  subtitle: "Optimized Pixel Engineering Testing workflow with test triggering and result propagating.",
  imageUrl: '/static/images/step.jpg'
}, {
  title: "Game Dev at 2024 NTU CSIE Camp Challenge",
  date: "Summer 2024",
  subtitle: "Python Multi-player game for participants to play with automatic program",
  imageUrl: '/static/images/DSC01423.jpg'
}]

export default function Experience() {
  return (
    <div className="w-screen flex flex-col justify-evenly items-center flex-wrap py-1.5 px-3.5 z-1">
        <h2 style={{ fontWeight: 'bold', paddingBottom: '8px', color: '#B9D0E9', fontSize: "clamp(2.6rem, 5vw, 3.4rem)", textAlign: "center" }}>Experience</h2>
        <div style={{ width: "80vw" }}>
          <Timeline 
            items={items} 
          />
        </div>
    </div>
  )
}
