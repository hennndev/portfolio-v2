import React from 'react' 
// components & icons
import Social from '@/app/components/ui/social'
import HeaderPage from '@/app/components/ui/headerPage'
import Skills from '@/app/components/homepage/skills'
import Solution from '@/app/components/homepage/solution'
import PageContainer from '@/app/components/ui/pageContainer'
import ContentHomepage from '@/app/components/homepage/contentPage'
import ProjectsSection from '@/app/components/homepage/projectsSection'

export const metadata = {
    title: "Home",
    description: "Home page that is describe about greeting, skills and portfolio projects."
}

// server component
const Homepage = () => {
    return (
        <PageContainer>
            <HeaderPage title="Web Developer"/>
            <ContentHomepage/>
            <Skills/>
            <ProjectsSection/>
            <Solution/>
            <Social/>
        </PageContainer>
    )
}
export default Homepage