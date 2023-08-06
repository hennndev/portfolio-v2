"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import toast from "react-hot-toast"

const contentHomepage = () => {

    const handleClick = () => {
        toast.error("Comming soon")
    }

    return (
        <section className="mt-10">
            <div className="flexx flex-col-reverse md:flex-row theme-transition">
                <div className="text-center md:text-left flex-1 mr-3">
                    <h1 className="text-4xl dark:text-gray-100 text-gray-700 font-semibold">
                        I&lsquo;m Hendra
                    </h1>
                    <p className="w-full md:w-[90%] mt-4 dark:text-gray-300 text-gray-500 text-[17px] font-medium leading-[1.8]">Web developer from Purbalingga, ID. Currently work as freelancer and student bachelor information system.</p>
                </div>
                <div className="border dark:border-gray-700 border-gray-300 rounded-full p-2 mb-3 md:mb-0">
                    <Image
                        src="/images/batman.png"
                        width={170}
                        height={170}
                        alt="avatar"/>
                </div>
            </div>
            <div className="flex-center mt-5 md:mt-0 md:flexx md:justify-start">
                <Link href="/contact-me" className="btn mr-4">Hire me</Link>
                <a href="#" className="btn bg-gray-200 dark:bg-gray-700 dark:text-gray-200 text-gray-800"
                    onClick={handleClick}>
                    Download CV
                </a>
            </div>
        </section>
    )
}

export default contentHomepage