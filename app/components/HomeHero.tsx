import React from 'react'
import style from './HomeHero.module.css'
import Image from 'next/image'

export default function HomeTopic() {
  return (
    <div className="min-h-[calc(100vh-7rem)] min-w-full flex justify-evenly items-center flex-wrap py-1.5 px-0.5 z-1">
        <div>
          <h1 className={style.topicText}>Hi I'm Weber</h1>
          <p className={style.topicTextSub}>Welcome to my Mojo Dojo Casa House</p>
        </div>
        <div className={style.homeTopicImg}>
          <Image 
            src='/../public/Images/neonlight.png'
            alt='neon light'
            fill={true}
          />
          <Image 
            src='/../public/animation/homepagegif.gif'
            alt="Literally me"
            fill={true}
          />
        </div>
    </div>
  )
}
