import React from 'react'
import style from './HomeContent.module.css'

export default function HomeContent() {
  return (
    <div className="flex flex-col items-center px-6">
        <h2 className={style.topic}>Hello There</h2>
        <p className={style.intro}>This website is quite simple, but you can get to know me thoroughly<br />Click the link above right away~</p>
    </div>
  )
}
