import React from 'react'
import Image from 'next/image'
import { BiChevronRight } from 'react-icons/bi'
import { projects } from '@/app/constants/projects'

interface ProjectsTypes {
    id: number,
    name: string,
    imageName: string,
    description: string,
    linkURL: string
}

interface PropsTypes {
    category?: string
}

const Projects = ({category}: PropsTypes) => {

    let updatedProjects = []
    if(category) {
        updatedProjects = projects.filter(project => project.tech.includes(category.toLowerCase()))
    } else {
        updatedProjects = projects
    }

    return (
        <div className="mt-5">
            {updatedProjects.length > 0 ? updatedProjects.map((project: ProjectsTypes) => (
                <div className="bg-white rounded-xl p-4 shadow-md mb-5" key={project.id}>
                    <div className="w-auto h-[200px] sm:h-[300px] relative">
                        <Image
                            src={`/images/${project.imageName}.png`}
                            fill
                            sizes="auto"
                            alt={project.imageName}
                            placeholder="blur"
                            blurDataURL={`/images/${project.imageName}.png`}
                            className="object-cover"/>
                    </div>
                    <div className="mt-3">
                        <div>
                            <div className="flex-between">
                                <h2 className="font-semibold text-lg text-gray-600">
                                    {project.name}
                                </h2>
                                <a href={project.linkURL} target="_blank" className="flexx border-none outline-none px-3 py-2 rounded-lg text-gray-600 bg-gray-50 text-sm font-medium hover:transform hover:-translate-x-2 transition duration-300 ease-in-out">
                                    Visit
                                    <BiChevronRight className="ml-1 text-xl text-gray-500"/>
                                </a>
                            </div>
                            <p className="w-[80%] md:w-full text-gray-500 mt-2 font-medium text-sm md:text-base">{project.description}</p>
                        </div>
                    </div>
                </div>
            )) : (
                <h2 className="text-center font-medium mt-5 text-lg text-gray-500">Project not found</h2>
            )}
        </div>
    )
}

export default Projects