'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import style from './Navbar.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faFileCode, IconDefinition } from "@fortawesome/free-solid-svg-icons"

type NavItem = {
    text: string
    href: string
    icon: IconDefinition
}

type ItemState = {
    [key: string]: boolean
}

const NavList: NavItem[] = [
    {text: 'Home', href: '/', icon: faHouse},
    {text: 'Portfolio', href: '/Portfolio', icon: faFileCode},
]

export default function Navbar() {
  
  const [toggle, setToggle] = useState(false)
  const [hover, setHover] = useState<ItemState>({"Home": false, "About": false, "Portfolio": false})

  const handleClick = () => {
    setToggle(prevToggle => !prevToggle)
  }

  const handleEnter = (text: string) => () => {
    setHover(prevHover => ({...prevHover, [text]: true}))
  }

  const handleLeave = (text: string) => () => {
    setHover(prevHover => ({...prevHover, [text]: false}))
  }

  return (
    <nav className={style.nav}>
        <div className={style.siteIcon}>
            <Image 
                src="/static/images/nav_icon.png"
                fill={true}
                alt="Website Icon"
            />
        </div>
        <div onClick={handleClick} className={style.hamburgerToggle}>
            <span className={toggle ? style.bar1On : style.bar1Off}></span>
            <span className={toggle ? style.bar2On : style.bar2Off}></span>
            <span className={toggle ? style.bar3On : style.bar3Off}></span>
        </div>
        <div className={toggle ? style.navLinksShow : style.navLinksHide}>
            <ul className={style.navUL}>
                {NavList.map(navItem => (
                    <li onClick={handleClick}
                        onMouseEnter={handleEnter(navItem.text)} 
                        onMouseLeave={handleLeave(navItem.text)} 
                        className={style.navLi}
                        key={navItem.text}
                    >
                        <FontAwesomeIcon icon={navItem.icon} style={{margin: "auto 0", transform: `translateX(${hover[navItem.text] ? "0.4rem" : "1.4rem"})`, color: "#B9D0E9", fontSize: '1.5rem', opacity: Number(hover[navItem.text]), transition: 'ease-in-out 0.3s'}} />
                        <Link legacyBehavior className="relative px-4 " href={navItem.href}>
                            <a className={`relative px-4 text-2xl text-center transition ease-in-out duration-300 ${hover[navItem.text] ? "translate-x-1 text-[#B9D0E9]" : ""}`}>{navItem.text}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}
