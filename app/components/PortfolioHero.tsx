'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import style from './Portfolio.module.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function PortfolioHero() {

    const imgContainerRef = useRef<HTMLDivElement>(null)
    const tl = useRef<GSAPTimeline>()

    useLayoutEffect(() => {

        let ctx = gsap.context(() => {
            tl.current = gsap.timeline({repeat: -1})
              .to(".magnifyingGlass", {x: "-20px", y: "-30px", duration: 1, ease: "power1.out"})
              .to(".magnifyingGlass", {x: "-30px", y: "10px", duration: 1, ease: "power1.out"})
              .to(".magnifyingGlass", {x: "-50px", y: "-35px", duration: 1, ease: "power1.out"})
              .to(".magnifyingGlass", {x : 0, y: 0, duration: 1, ease: "power1.out"});
        }, imgContainerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className="min-h-[calc(100vh-7rem)] min-w-full flex justify-evenly items-center flex-wrap py-1.5 px-0.5 z-1">
            <div>
                <h1 className={style.h1}>My Portfolio</h1>
                <p className={style.topicTextSub}>{"Something cool I've done"}</p>
            </div>
            <div className={style.imgContainer} ref={imgContainerRef}>
                <Image 
                    src='/static/images/portfolio-file.png'
                    alt='portfolio'
                    fill={true}
                />
                <Image 
                    src='/static/images/magnify_glass.png'
                    alt='magnifying glass'
                    fill={true}
                    className='magnifyingGlass'
                />
            </div>
        </div>
    )
}
