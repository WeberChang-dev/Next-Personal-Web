'use client'

import React, { useLayoutEffect, useRef } from 'react'
import style from './AboutContent.module.css'
import Image from 'next/image'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function AboutHobby() {

    const imgRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.heart', {
                scrollTrigger: {
                    trigger: imgRef.current, 
                    start: `90% bottom`,
                    toggleActions: "restart pause reverse reverse",
                }, 
                opacity: 0, 
                scale: 0.96, 
                duration: 1, 
                ease: "power2.out"
            })
        }, imgRef)

        return () => ctx.revert()
    }, [])

    return (
    <div className='min-h-[calc(100vh-7rem)] min-w-full flex justify-around items-center flex-wrap p-12 z-1'>
        <div>
            <h2 className={style.h2}>My Hobbies</h2>
            <p className={style.text}>{"Aside from coding, I'm also into movies, music, badminton, and ACG culture. Just a nerd overall."}</p>
        </div>
        <div className={style.imageContainer} ref={imgRef}>
            <Image 
                src='/static/images/heart.png'
                alt='heart'
                fill={true}
                className="heart"
            />
            <Image 
                src='/static/images/thing_I_like.png'
                alt='hobby'
                fill={true}
            />
        </div>
    </div>
    )
}
