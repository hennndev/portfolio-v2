"use client"
import React from 'react'
import { useRouter, useParams } from 'next/navigation'
// components & icons
import Social from '@/app/components/social'
import HeaderPage from '@/app/components/headerPage'
import Projects from '@/app/components/projects/projects'
import PageContainer from '@/app/components/pageContainer'

interface ProjectsTypes {
    id: number,
    name: string,
    imageName: string,
    description: string,
    linkURL: string
}

interface PropsTypes {
    params: {category: string}
}

const ProjectsCategory = ({params}: PropsTypes) => {

    const urlParams = useParams()
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value)
        router.push(`/projects/${e.target.value}`)
    }
    
    return (
        <PageContainer>
            <HeaderPage title="Projects"/>
            <div className="mt-10 flexx">
                <div className="flex-1">
                    <h1 className="text-4xl text-gray-700 font-semibold">My Works</h1>
                    <p className="w-full md:w-[90%] mt-4 text-gray-500 text-[17px] font-medium leading-[1.8]">
                        Actually, I have many projects especially MERN project, but  I was deployed to free hosting and get expired. At least, you can check my github to see all my projects.
                    </p>
                </div>
            </div>
            <div className="mt-10 bg-gray-100 p-3 rounded-lg">
                <div className="flex-between">
                    <h2 className="font-medium text-lg text-gray-600 flexx">
                        <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                        Projects
                    </h2>
                    <select value={urlParams.category} onChange={handleChange} className="outline-none px-2 py-1 rounded-lg shadow-sm">
                        <option value="">All</option>
                        <option value="javascript">Javascript</option>
                        <option value="reactjs">ReactJS</option>
                        <option value="nextjs">NextJS</option>
                        <option value="typescript">Typescript</option>
                        <option value="mongodb">Mongodb</option>
                    </select>
                </div>
                <Projects category={params.category}/>
            </div>
            <Social/>
        </PageContainer>
    )
}

export default ProjectsCategory