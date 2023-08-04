import React from 'react'
import { BsArrowRightShort, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Social = () => {
    return (
        <div className="mt-10 bg-gray-100 p-3 rounded-lg">
            <div className="flex-between">
                <h2 className="font-medium text-lg text-gray-600 flexx">
                    <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                    Follow Me
                </h2>
                <div className="flexx">
                    <button className="border-none outline-none rounded-full p-2 cursor-pointer hover:bg-gray-300  transition duration-200 mr-2 group relative">
                        <p className="absolute bg-gray-600 opacity-0 -left-3 -top-4 group-hover:opacity-100 rounded-full text-xs text-gray-200 transition duration-300 ease-in-out px-2 py-0.5">Github</p>
                        <BsGithub className="text-[20px] text-gray-500"/>
                    </button>
                    <button className="border-none outline-none rounded-full p-2 cursor-pointer hover:bg-gray-300  transition duration-200 mr-2 group relative">
                        <p className="absolute bg-gray-600 opacity-0 -left-3 -top-4 group-hover:opacity-100 rounded-full text-xs text-gray-200 transition duration-300 ease-in-out px-2 py-0.5">Instagram</p>
                        <BsInstagram className="text-[20px] text-gray-500"/>
                    </button>
                    <button className="border-none outline-none rounded-full p-2 cursor-pointer hover:bg-gray-300  transition duration-200 group relative">
                        <p className="absolute bg-gray-600 opacity-0 -left-3 -top-4 group-hover:opacity-100 rounded-full text-xs text-gray-200 transition duration-300 ease-in-out px-2 py-0.5">LinkedIn</p>
                        <BsLinkedin className="text-[20px] text-gray-500"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Social