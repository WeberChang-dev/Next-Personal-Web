'use client'

import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import style from './AboutContent.module.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function AboutResolution() {

    const imgContainerRef = useRef<HTMLDivElement>(null)
    const tl = useRef<GSAPTimeline>()

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            tl.current = gsap.timeline({scrollTrigger:{
                trigger: imgContainerRef.current,
                start: "90% bottom",
                toggleActions: "restart pause reverse reverse"
            }})
              .from(".smolBubble", {x: -3, y: -3, opacity: 0, duration: 0.4})
              .from(".bigBubble", {x: -3, y: -3, opacity: 0, duration: 0.4});

        }, imgContainerRef)

        return () => ctx.revert()
    }, [])

    return (
    <div className='min-h-[calc(100vh-7rem)] min-w-full flex justify-around items-center flex-wrap p-12 z-1'>
        <div className={style.imageContainer} ref={imgContainerRef}>
            <Image
                src='/static/images/New_year_resolution.png'
                alt='resolution'
                fill={true}
                />
            <Image
                src='/static/images/big_resolution_bubble.png'
                alt='big bubble'
                fill={true}
                className='bigBubble'
                />
            <Image
                src='/static/images/smol_resolution_bubble.png'
                alt='smol bubble'
                fill={true}
                className='smolBubble'
            />
        </div>
        <div>
            <h2 className={style.h2}>{"This Year's Resolution"}</h2>
            <ul className={style.text}>
                <li>Do LeetCode Daily Challenges Consistently</li>
                <li>Land a Summer Internship</li>
                <li>Apply for DSA Teaching Assistant</li>
                <li>Take ML and Cyber Security Courses</li>
            </ul>
        </div>
    </div>
    )
}
