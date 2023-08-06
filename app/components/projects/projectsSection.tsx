"use client"
import React from 'react'
import Projects from './projects'
import { useRouter, useParams } from 'next/navigation'

interface PropsTypes {
    category?: string
}

const ProjectsSection = ({category}: PropsTypes) => {

    const params = useParams()
    const router = useRouter()
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        router.push(`/projects/${e.target.value}`)
    }
    return (
        <div className="mt-10 dark:bg-gray-800 bg-gray-100 p-3 rounded-lg transition theme-transition">
            <div className="flex-between">
                <h2 className="font-medium text-lg dark:text-gray-200 text-gray-600 flexx">
                    <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                    Projects
                </h2>
                <select value={params.category || ""} onChange={handleChange} className="outline-none px-2 py-1 dark:bg-gray-700 dark:text-gray-100 text-gray-600 rounded-lg shadow-sm">
                    <option value="">All</option>
                    <option value="javascript">Javascript</option>
                    <option value="nodejs">NodeJS</option>
                    <option value="reactjs">ReactJS</option>
                    <option value="nextjs">NextJS</option>
                    <option value="typescript">Typescript</option>
                    <option value="mongodb">Mongodb</option>
                </select>
            </div>
            <Projects category={category && category}/>
        </div>
    )
}

export default ProjectsSection