import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRightShort } from 'react-icons/bs'

const skills = () => {
    return (
        <div className="mt-10 dark:bg-gray-800 bg-gray-100 py-5 px-3 md:px-5 rounded-lg theme-transition">
            <div className="flex-between">
                <h2 className="font-medium text-lg dark:text-gray-200 text-gray-600 flexx">
                    <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                    Skills
                </h2>
            </div>
            <div className="mt-5">
                <div className="skill">
                    <div className="flexx">
                        <Image
                            placeholder="blur"
                            blurDataURL="/images/javascript.png"
                            src="/images/javascript.png"
                            width={50}
                            height={50}
                            alt="javascript"/>
                        <p className="dark:text-gray-200 text-gray-500 ml-3 font-medium">Javascript</p>
                    </div>
                    <Link href="/projects/javascript" className="skill-link">
                        Project
                        <BsArrowRightShort className="ml-1 text-xl text-gray-500"/>
                    </Link>
                </div>
                <div className="skill">
                    <div className="flexx">
                        <Image
                            placeholder="blur"
                            blurDataURL="/images/nodejs.png"
                            src="/images/nodejs.png"
                            width={50}
                            height={50}
                            alt="nodejs"/>
                        <p className="dark:text-gray-200 text-gray-500 ml-3 font-medium">Node JS</p>
                    </div>
                    <Link href="/projects/nodejs" className="skill-link">
                        Project
                        <BsArrowRightShort className="ml-1 text-xl text-gray-500"/>
                    </Link>
                </div>
                <div className="skill">
                    <div className="flexx">
                        <Image
                            placeholder="blur"
                            blurDataURL="/images/reactjs.png"
                            src="/images/reactjs.png"
                            width={40}
                            height={40}
                            alt="reactjs"/>
                        <p className="dark:text-gray-200 text-gray-500 ml-5 font-medium">React JS</p>
                    </div>
                    <Link href="/projects/reactjs" className="skill-link">
                        Project
                        <BsArrowRightShort className="ml-1 text-xl text-gray-500"/>
                    </Link>
                </div>
                <div className="skill">
                    <div className="flexx">
                        <Image
                            placeholder="blur"
                            blurDataURL="/images/nextjs.png"
                            src="/images/nextjs.png"
                            width={40}
                            height={40}
                            alt="nextjs"/>
                        <p className="dark:text-gray-200 text-gray-500 ml-5 font-medium">Next JS</p>
                    </div>
                    <Link href="/projects/nextjs" className="skill-link">
                        Project
                        <BsArrowRightShort className="ml-1 text-xl text-gray-500"/>
                    </Link>
                </div>
                <div className="skill">
                    <div className="flexx">
                        <Image
                            placeholder="blur"
                            blurDataURL="/images/typescript.png"
                            src="/images/typescript.png"
                            width={40}
                            height={40}
                            alt="typescript"/>
                        <p className="dark:text-gray-200 text-gray-500 ml-5 font-medium">Typescript</p>
                    </div>
                    <Link href="/projects/typescript" className="skill-link">
                        Project
                        <BsArrowRightShort className="ml-1 text-xl text-gray-500"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default skills