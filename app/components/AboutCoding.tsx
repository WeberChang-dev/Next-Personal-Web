'use client'

import React, { useLayoutEffect, useRef } from 'react'
import style from './AboutContent.module.css'
import Image from 'next/image'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

type computerParts = {
    class: string
    xVal: number
    yVal: number
}

const computer: computerParts[] = [
    { class: ".keyboard", xVal: 50 * 1.73, yVal: 50 },
    { class: ".window1", xVal: -50 * 1.73, yVal: 50 },
    { class: ".window2", xVal: 50 / 2 * 1.73, yVal: -50},
    { class: ".screen", xVal: -50 / 2 * 1.73, yVal: -50},
]

export default function AboutCoding() {

    const imgContainerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let el = imgContainerRef.current
            for (const part of computer) {
                gsap.from(part.class, {
                    scrollTrigger: {
                        trigger: el,
                        start: () => `70% bottom`,
                        end: () => `90% bottom`,
                        scrub: true,
                        toggleActions: "restart pause reverse pause",
                    },
                    opacity: 0,
                    x: part.xVal, 
                    y: part.yVal
                })
            }
        }, imgContainerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div className='min-h-[calc(100vh-7rem)] min-w-full flex justify-around items-center flex-wrap p-12 z-1'>
            <div className={style.imageContainer} ref={imgContainerRef}>
                <Image
                    src='/../public/Images/screen.png'
                    alt='screen'
                    fill={true} 
                    className='screen'
                />
                <Image
                    src='/../public/Images/keyboard.png'
                    alt='keyboard'
                    fill={true} 
                    className='keyboard'
                />
                <Image
                    src='/../public/Images/window1.png'
                    alt='window1'
                    fill={true} 
                    className='window1'
                />
                <Image
                    src='/../public/Images/window2.png'
                    alt='window2'
                    fill={true} 
                    className='window2'
                />
            </div>
            <div>
                <h2 className={style.h2}>Me and Programming!</h2>
                <p className={style.text}>{"Programming is something I've been interested in since high school and what I major in college. Still fascinated with what I have and haven't learned about it."}</p>
            </div>
        </div>
    )
}
