import React from 'react'
import Link from 'next/link'
import { RiHomeSmile2Line, RiRocketLine, RiAccountPinCircleLine, RiMoonLine } from 'react-icons/ri'

const Navbar = () => {
  return (
    <header className="sticky top-5 w-full bg-white shadow-md px-7 py-3 rounded-xl mb-3 z-[100]">
        <nav className="flex-between">
            <ul className="flexx list-none">
                <Link href="/" className="border-none outline-none rounded-full p-1 cursor-pointer hover:bg-gray-100  transition duration-200 mr-4 group relative">
                    <p className="absolute bg-gray-600 opacity-0 -left-1 -top-4 group-hover:opacity-100 rounded-full text-xs text-gray-200 transition duration-300 ease-in-out px-2 py-0.5">Home</p>
                    <RiHomeSmile2Line className="text-[30px] text-gray-500"/>
                </Link>
                <Link href="/projects" className="border-none outline-none rounded-full p-1 cursor-pointer hover:bg-gray-100  transition duration-200 mr-4 group relative">
                    <p className="absolute bg-gray-600 opacity-0 -left-3 -top-4 group-hover:opacity-100 rounded-full text-xs text-gray-200 transition duration-300 ease-in-out px-2 py-0.5">Projects</p>
                    <RiRocketLine className="text-[30px] text-gray-500"/>
                </Link>
                <Link href="/about" className="border-none outline-none rounded-full p-1 cursor-pointer hover:bg-gray-100 transition duration-200 group relative">
                    <p className="absolute bg-gray-600 opacity-0 -left-3 -top-4 group-hover:opacity-100 rounded-full text-xs text-gray-200 transition duration-300 ease-in-out px-2 py-0.5 whitespace-nowrap">About Me</p>
                    <RiAccountPinCircleLine className="text-[30px] text-gray-500"/>
                </Link>
            </ul>
            <div className="flexx">
                <div className="border-none outline-none rounded-full p-1 cursor-pointer hover:bg-gray-100 transition duration-200 group relative mr-4">
                    <p className="absolute bg-gray-600 opacity-0 -left-3 -top-4 group-hover:opacity-100 rounded-full text-xs text-gray-200 transition duration-300 ease-in-out px-2 py-0.5 whitespace-nowrap">Dark mode</p>
                    <RiMoonLine className="text-[30px] text-gray-500"/>
                </div>
                <Link href="/contact-me" className="border-none outline-none bg-gray-600 cursor-pointer text-gray-200 p-2 rounded-md font-semibold text-sm hover:scale-[0.95] transition duration-500">Hire me</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar