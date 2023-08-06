"use client"
import React, { SyntheticEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { RiHomeSmile2Line, RiRocketLine, RiMoonLine, RiSunCloudyLine } from 'react-icons/ri'

const Navbar = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])
    const handleTheme = (e: SyntheticEvent) => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }
    if (!mounted) {
        return null
    }

    return (
        <header className="sticky top-5 w-full bg-white dark:bg-gray-900 shadow-md px-7 py-3 rounded-xl mb-3 z-[100] theme-transition">
            <nav className="flex-between">
                <ul className="flexx list-none">
                    <Link href="/" className="link-nav group">
                        <p className="tooltip opacity-0 -left-1 -top-4">Home</p>
                        <RiHomeSmile2Line className="text-[30px] dark:text-gray-200 text-gray-500"/>
                    </Link>
                    <Link href="/projects" className="link-nav group">
                        <p className="tooltip opacity-0 -left-3 -top-4">Projects</p>
                        <RiRocketLine className="text-[30px] dark:text-gray-200 text-gray-500"/>
                    </Link>
                </ul>
                <div className="flexx">
                    <div className="link-nav group  mr-4">
                        <p className="tooltip opacity-0 -left-3 -top-4 whitespace-nowrap">
                            {theme === "dark" ? "Light mode" : "Dark mode"}
                        </p>
                        {theme === "dark" ? 
                            <RiSunCloudyLine onClick={handleTheme} className="text-[30px] dark:text-gray-200 text-gray-500"/> : 
                            <RiMoonLine onClick={handleTheme} className="text-[30px] dark:text-gray-200 text-gray-500"/>
                        }
                    </div>
                    <Link href="/contact-me" className="btn">
                        Hire me
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar