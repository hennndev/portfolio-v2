"use client"
import React, { useState } from 'react'
import toast from 'react-hot-toast'

interface ValuesTypes {
    username: string,
    email: string,
    message: string
}

interface ErrorsTypes {
    username?: string,
    email?: string,
    message?: string
}

const ContentPage = () => {

    const [values, setValues] = useState<ValuesTypes>({
        username: "",
        email: "",
        message:""
    })
    const [errors, setErrors] = useState<ErrorsTypes>({})
   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, id } = e.target
        setValues({
            ...values,
            [id]: value
        })
    }
    const handleErrors = () => {
        let isErrors: ErrorsTypes = {}

        if(!values.username) {
            isErrors.username = "Please fill the username field!"
        } else {
            isErrors.username ? delete isErrors.username : isErrors 
        }

        if(!values.email) {
            isErrors.email = "Please fill the email field!"
        } else if(!values.email.includes("@")) {
            isErrors.email = "Email not valid"
        } else {
            isErrors.email && delete isErrors.email 
        }

        if(!values.message) {
            isErrors.message = "Please fill the message field!"
        } else {
            isErrors.message && delete isErrors.message 
        }
        setErrors(isErrors)
        return isErrors
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errors = Object.keys(handleErrors())
        if(errors.length < 1) {
            toast.promise(
                (() => {
                    return new Promise((resolve, reject) => setTimeout(resolve, 2000))
                })(),
                 {
                   loading: 'Loading...',
                   success: <b>Success!</b>,
                   error: <b>Error!</b>,
                 }
            ) 
        }
    }

    console.log(errors)

    return (
        <div className="mt-10 flexx">
            <div className="flex-1">
                <h1 className="text-4xl dark:text-gray-100 text-gray-700 font-semibold">Find Your Solution</h1>
                <p className="w-full md:w-[90%] mt-4 dark:text-gray-300 text-gray-500 text-[17px] font-medium leading-[1.8]">
                    Need solution to grow up your bussines?
                </p>
                <form className="mt-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <div className="form-control">
                            <input 
                                id="username"
                                type="text"
                                value={values.username}
                                onChange={handleChange}
                                placeholder="Username" className="input-control"/>
                            {errors.username ? <small className="error-message">{errors?.username}</small> : null}
                        </div>
                        <div className="form-control">
                            <input 
                                id="email"
                                type="email" 
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Email" className="input-control"/>
                            {errors.email ? <small className="error-message">{errors?.email}</small> : null}
                        </div>
                        <div className="form-control">
                            <textarea 
                                id="message"
                                rows={6} 
                                value={values.message}
                                onChange={handleChange}
                                placeholder="Type your message" 
                                className="input-control"></textarea>
                            {errors.message ? <small className="error-message">{errors?.message}</small> : null}
                        </div>
                    </div>
                    <button type="submit" className="w-full border-none outline-none dark:bg-gray-800 bg-gray-600 cursor-pointer text-gray-200 p-3 rounded-lg font-semibold text-sm hover:scale-[0.95] theme-transition mt-3">Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default ContentPage