'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import style from './AboutContent.module.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function AboutIntro() {

    const imgRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let el = imgRef.current
            gsap.from(".personalPic", {
                scrollTrigger: {
                    trigger: el,
                    start: () => `80% bottom`,
                    toggleActions: "restart pause resume reverse"
                },
                ease: "expo.out",
                opacity: 0,
                y: 50,
                duration: 2
            })
        }, imgRef)

        return () => ctx.revert()
    }, [])

    return (
    <div className="min-h-[calc(100vh-7rem)] min-w-full flex justify-around items-center flex-wrap p-12 z-1">
        <div>
            <h2 className={style.h2}>Who Am I</h2>
            <p className={style.text}>{"I'm a freshman studying CS in National Taiwan University, always trying to stay chill"}</p>
        </div>
        <div className={style.imageContainer} ref={imgRef}>
            <Image 
                src='/static/images/image-folder-background.png'
                alt='background'
                fill={true}
            />
            <Image 
                src='/static/images/shadow.png'
                alt='shadow'
                fill={true}
            />
            <Image 
            src='/static/images/personal-image.png'
            alt='personal image'
            fill={true}
            className='personalPic'
        />
        </div>
    </div>
    )
}
