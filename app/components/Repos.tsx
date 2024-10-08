import React from 'react'
import Carousel from './Carousel'

interface Repo  {
    owner: string
    repo: string
    description?: string
    language: string
    languageColor: string
    stars: string | number
    link: string
}

const getRepos = async () => {
    const res = await fetch('https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=WeberChang-dev', {
        next: { revalidate: 60 * 60 * 24 * 30 } // a month
    })
    const repos = await res.json()
    
    return repos
}

export default async function Repos() {
    const repos: Repo[] = await getRepos()
    return (
    <div className="max-w-[85vw] w-[40rem] flex justify-evenly items-center flex-wrap py-2.5 z-1 mb-20">
        <h2 style={{ fontWeight: 'bold', paddingBottom: '8px', color: '#B9D0E9', fontSize: "clamp(2.6rem, 5vw, 3.4rem)", textAlign: "center" }}>Projects</h2>
        <Carousel repos={repos}/>
    </div>
    )
}
