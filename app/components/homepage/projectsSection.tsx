import React from 'react'
import Link from 'next/link'
import Projects from '../projects/projects'
import { BsArrowRightShort } from 'react-icons/bs'


const ProjectsSection = () => {
    return (
        <div className="mt-5 dark:bg-gray-800 bg-gray-100 p-3 rounded-lg theme-transition">
            <div className="flex-between">
                <h2 className="font-medium text-lg dark:text-gray-200 text-gray-600 flexx">
                    <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                    Projects
                </h2>
                <Link href="/projects" className="flexx border-none outline-none px-3 py-2 rounded-lg dark:text-gray-200 text-[#222] dark:bg-gray-700 bg-white text-sm font-medium hover:transform hover:-translate-x-2 theme-transition">
                    View all
                    <BsArrowRightShort className="ml-1 text-xl dark:text-gray-200 text-gray-500"/>
                </Link>
            </div>
            <Projects/>
        </div>
    )
}

export default ProjectsSection