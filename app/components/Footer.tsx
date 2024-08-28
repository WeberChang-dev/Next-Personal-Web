import React from 'react'
import { faFacebook, faGithub, faLinkedin, faInstagram, faStackOverflow, IconDefinition } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Footer.module.css';

type footerItem = {
    name: string
    href: string
    icon: IconDefinition
}

const footerList: footerItem[] = [
    {name: 'GitHub', href: 'https://github.com/WeberChang-dev', icon: faGithub},
    {name: 'Linkedin', href: 'https://www.linkedin.com/in/wei-cheng-chang-b96916320/', icon: faLinkedin},
    {name: 'Stack Overflow', href: 'https://stackoverflow.com/users/16480529/weber-chang', icon: faStackOverflow},
    {name: 'Instagram', href: 'https://www.instagram.com/weber_eating_sleeping/', icon: faInstagram},
    {name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100004070266791', icon: faFacebook}
]

export default function Footer() {
  
  return (
    <footer className={style.footer}>
        <h3 className={style.topic}>Find me on</h3>
        <ul className={style.ul}>
            {footerList.map(item => (
                <li className={style.footerItem} key={item.name}>
                    <FontAwesomeIcon icon={item.icon} style={{color: "#ffffff"}} />
                    <a className='pl-1.5' href={item.href}>{item.name}</a>
                </li>
            ))}
        </ul>
    </footer>
  )
}
