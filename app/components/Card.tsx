'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons"

interface Repo {
    owner: string
    repo: string
    description?: string
    language: string
    languageColor: string
    stars: string | number
    link: string
}

interface repoObj {
    repo: Repo
}

export default function Card({ repo }: repoObj) {
  return (
    <div className="bg-darkBG h-[20rem] p-16 flex flex-col justify-center gap-4">
        <a href={repo.link} style={{ wordWrap: "break-word", fontWeight: "bold", fontSize: "clamp(1.5rem, 6vw, 2.5rem)", color: "#B9D0E9", fontFamily: "Futura"  }}>{repo.repo}</a>
        <div className="flex flex-row gap-3 items-center">
            <div className="flex flex-row gap-1 items-center">
                <FontAwesomeIcon icon={faCircle} style={{ height: "12px", width: "12px", color: repo.languageColor }} />
                <p className='text-center align-middle'>{repo.language}</p>
            </div>
            <p>|</p>
            <div className="flex flex-row gap-1 items-center">
                <FontAwesomeIcon icon={faStar} style={{color: "#f0e800"}} />
                <p>{repo.stars}</p>
            </div>
        </div>
        <p>{repo.description}</p>
    </div>
  )
}
