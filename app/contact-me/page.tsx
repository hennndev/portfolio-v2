"use client"
import React from 'react'
// components
import Social from '@/app/components/ui/social'
import HeaderPage from '@/app/components/ui/headerPage'
import PageContainer from '@/app/components/ui/pageContainer'
import ContentPage from '../components/contact-me/contentPage'


export const metadata = {
    title: "Contact",
    description: "Contact page"
}

const ContactMe = () => {
    return (
        <PageContainer>
            <HeaderPage title="Hire Me"/>
            <ContentPage/>
            <Social/>
        </PageContainer>
    )
}

export default ContactMe