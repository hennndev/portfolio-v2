import React from 'react'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'
import PageContainer from '../components/pageContainer'

const About = () => {
    return (
        <PageContainer>
            <div className="flex-between">
                <h2 className="font-medium text-xl text-gray-600 flexx">
                    <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                    Web Developer
                </h2>
                <p className="text-green-600 bg-green-100 px-3 py-1 rounded-full flexx font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                    Available for work
                </p>
            </div>

            <div className="mt-10 flexx">
                <div className="flex-1 mr-3">
                    <h1 className="text-4xl text-gray-700 font-semibold">I&lsquo;m Hendra</h1>
                    <p className="w-[90%] mt-4 text-gray-500 text-[17px] font-medium leading-[1.8]">Web developer from Purbalingga, ID. Currently work as freelancer and student bachelor information system.</p>
                </div>
                <div className="border border-gray-300 rounded-full p-2">
                    <Image
                        src="/images/batman.png"
                        width={170}
                        height={170}
                        alt="avatar"/>
                </div>
            </div>
            <div className="flexx">
                <button className="border-none outline-none bg-gray-800 cursor-pointer text-gray-200 p-2 rounded-md font-semibold text-sm hover:scale-[0.95] transition duration-500 mr-4">Hire me</button>
                <button className="border-none outline-none bg-gray-200 cursor-pointer text-gray-800 p-2 rounded-md font-semibold text-sm hover:scale-[0.95] transition duration-500">Download CV</button>
            </div>
            <div className="mt-10 bg-gray-100 p-3 rounded-lg">
                <div className="flex-between">
                    <h2 className="font-medium text-lg text-gray-600 flexx">
                        <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                        Skills
                    </h2>
                    <button className="flexx border-none outline-none px-3 py-2 rounded-lg text-[#222] bg-white text-sm font-medium">
                        View all
                        <BsArrowRightShort className="ml-1 text-xl text-gray-500"/>
                    </button>
                </div>
            </div>
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
            </div>
        </PageContainer>
    )
}

export default About