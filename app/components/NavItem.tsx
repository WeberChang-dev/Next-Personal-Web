import React from 'react'
import Link from 'next/link'

type Props = {
    text: string
    href: string
}

export default function NavItem({text, href} : Props) {
  return (
    <Link legacyBehavior className="relative p-4" href={href}>
        <a className="relative p-4 text-2xl text-center">{text}</a>
    </Link>
  )
}
