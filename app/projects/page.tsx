import React from 'react'
// components & icons
import Social from '@/app/components/ui/social'
import HeaderPage from '@/app/components/ui/headerPage'
import PageContainer from '@/app/components/ui/pageContainer'
import ProjectsSection from '@/app/components/projects/projectsSection'

export const metadata = {
    title: "Projects",
    description: "Projects page is describe about portfolio projects."
}

// server component
const ProjectsPage: React.FC = () => {
    return (
        <PageContainer>
            <HeaderPage title="Projects"/>
            <div className="mt-10 flexx">
                <div className="flex-1">
                    <h1 className="text-4xl dark:text-gray-100 text-gray-700 font-semibold">My Works</h1>
                    <p className="w-full md:w-[90%] mt-4 dark:text-gray-300 text-gray-500 text-[17px] font-medium leading-[1.8]">
                        Actually, I have many projects especially MERN project, but  I was deployed to free hosting and get expired. At least, you can check my github to see all my projects.
                    </p>
                </div>
            </div>
            <ProjectsSection/>
            <Social/>
        </PageContainer>
    )
}

export default ProjectsPage