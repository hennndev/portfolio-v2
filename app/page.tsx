import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// components & icons
import Social from './components/social'
import HeaderPage from './components/headerPage'
import Skills from './components/homepage/skills'
import { BsArrowRightShort } from 'react-icons/bs'
import Projects from './components/projects/projects'
import PageContainer from './components/pageContainer'


const Homepage = () => {
    return (
        <PageContainer>
            <HeaderPage title="Web Developer"/>
            <div className="mt-10">
                <div className="flexx flex-col-reverse md:flex-row">
                    <div className="text-center md:text-left flex-1 mr-3">
                        <h1 className="text-4xl text-gray-700 font-semibold">I&lsquo;m Hendra</h1>
                        <p className="w-full md:w-[90%] mt-4 text-gray-500 text-[17px] font-medium leading-[1.8]">Web developer from Purbalingga, ID. Currently work as freelancer and student bachelor information system.</p>
                    </div>
                    <div className="border border-gray-300 rounded-full p-2 mb-3 md:mb-0">
                        <Image
                            priority
                            src="/images/batman.png"
                            width={170}
                            height={170}
                            alt="avatar"/>
                    </div>
                </div>
                <div className="flex-center mt-5 md:mt-0 md:flexx md:justify-start">
                    <Link href="/contact-me" className="border-none outline-none bg-gray-600 cursor-pointer text-gray-200 p-2 rounded-md font-semibold text-sm hover:scale-[0.95] transition duration-500 mr-4">Hire me</Link>
                    <button className="border-none outline-none bg-gray-200 cursor-pointer text-gray-800 p-2 rounded-md font-semibold text-sm hover:scale-[0.95] transition duration-500">Download CV</button>
                </div>
            </div>
            <Skills/>
            <div className="mt-5 bg-gray-100 p-3 rounded-lg">
                <div className="flex-between">
                    <h2 className="font-medium text-lg text-gray-600 flexx">
                        <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                        Projects
                    </h2>
                    <button className="flexx border-none outline-none px-3 py-2 rounded-lg text-[#222] bg-white text-sm font-medium">
                        View all
                        <BsArrowRightShort className="ml-1 text-xl text-gray-500"/>
                    </button>
                </div>
                <Projects/>
            </div>
            <div className="mt-10 text-center p-7">
                <h1 className="text-gray-600 text-center text-3xl font-bold">Find your solution</h1>
                <p className="mt-3 text-gray-500 font-medium">I will help you find your solution and develop app to grow your bussines</p>
                <form className="mt-5">
                    <div className="flex flex-col">
                        <input type="text" placeholder="Username" className="w-full outline-none border-2 border-gray-200 rounded-lg px-4 py-2 mb-3 text-gray-500 focus:border-gray-400"/>
                        <input type="text" placeholder="Email" className="w-full outline-none border-2 border-gray-200 rounded-lg px-4 py-2 mb-2 text-gray-500 focus:border-gray-400"/>
                    </div>
                    <button className="w-full border-none outline-none bg-gray-600 cursor-pointer text-gray-200 p-3 rounded-lg font-semibold text-sm hover:scale-[0.95] transition duration-500 mt-3">Submit Now</button>
                </form>
            </div>
            <Social/>
        </PageContainer>
    )
}

export default Homepage