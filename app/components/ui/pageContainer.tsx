import React from 'react'
import { Toaster } from "react-hot-toast"

type PropsTypes = {
    children: React.ReactNode
}

const PageContainer = ({children}: PropsTypes) => {
    return (
        <div className="w-full dark:bg-gray-900 bg-white px-5 py-7 md:px-7 rounded-xl shadow-md theme-transition">
            <Toaster/>
            {children}
        </div>
    )
}

export default PageContainer