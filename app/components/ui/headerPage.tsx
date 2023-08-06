import React from 'react'

interface PropsTypes {
    title: string
}

const HeaderPage = ({title}: PropsTypes) => {
    return (
        <header className="flex-between theme-transition">
            <h2 className="font-medium text-xl dark:text-gray-100 text-gray-600 flexx">
                <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                {title}
            </h2>
            <p className="text-green-600 bg-green-100 px-3 py-1 rounded-full flexx font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                Available
            </p>
        </header>
    )
}

export default HeaderPage