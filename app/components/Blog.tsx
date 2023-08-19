import React from 'react'

export default function Blog() {
  return (
    <div className="w-screen flex flex-col justify-evenly items-center flex-wrap py-1.5 px-3.5 z-1">
        <h2 style={{ fontWeight: 'bold', paddingBottom: '8px', color: '#B9D0E9', fontSize: "clamp(2.6rem, 5vw, 3.4rem)", textAlign: "center" }}>Blog</h2>
        <p className="text-xl max-w-[80vw]">{"Planning on building a blog recording random stuff about coding and math. It's coming soon I promise."}</p>
    </div>
  )
}
