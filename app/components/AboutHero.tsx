import React from 'react'
import Image from 'next/image'
import style from './AboutHero.module.css'

export default function AboutHero() {
    return (
        <div className={style.topic}>
            <div>
                <h1 className={style.h1}>About Me</h1>
                <p className={style.topicTextSub}>{"I'm a simple person tho"}</p>
            </div>
            <div className={style.imageDiv}>
            <iframe className={style.phone} src="https://rive.app/s/5uDiAeExIkWpGHPXoqpOJg/embed"></iframe>
                <Image 
                    className='absolute'
                    src='/static/images/about_background_ver2.png'
                    alt='background'
                    fill={true} 
                />
            </div>
        </div>
    )
}
