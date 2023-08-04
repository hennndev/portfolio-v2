"use client"
import React from 'react'
import toast from 'react-hot-toast'
// components
import Social from '../components/social'
import HeaderPage from '../components/headerPage'
import PageContainer from '../components/pageContainer'

const ContactMe = () => {

    const handlePromise = () => {
        return new Promise((resolve, reject) => setTimeout(resolve, 2000))
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        toast.promise(
            handlePromise(),
             {
               loading: 'Loading...',
               success: <b>Success!</b>,
               error: <b>Error!</b>,
             }
           );
    }

    return (
        <PageContainer>
            <HeaderPage title="Hire Me"/>
            <div className="mt-10 flexx">
                <div className="flex-1">
                    <h1 className="text-4xl text-gray-700 font-semibold">Find Your Solution</h1>
                    <p className="w-full md:w-[90%] mt-4 text-gray-500 text-[17px] font-medium leading-[1.8]">
                        Need solution to grow up your bussines?
                    </p>
                    <form className="mt-5" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <input type="text" placeholder="Username" className="w-full outline-none border-2 border-gray-200 rounded-lg px-4 py-2 mb-3 text-gray-500 focus:border-gray-400"/>
                            <input type="text" placeholder="Email" className="w-full outline-none border-2 border-gray-200 rounded-lg px-4 py-2 mb-2 text-gray-500 focus:border-gray-400"/>
                            <textarea rows={6} className="w-full outline-none border-2 border-gray-200 rounded-lg px-4 py-2 mb-2 text-gray-500 focus:border-gray-400"></textarea>
                        </div>
                        <button type="submit" className="w-full border-none outline-none bg-gray-600 cursor-pointer text-gray-200 p-3 rounded-lg font-semibold text-sm hover:scale-[0.95] transition duration-500 mt-3">Submit Now</button>
                    </form>
                </div>
            </div>
            <Social/>
        </PageContainer>
    )
}

export default ContactMe