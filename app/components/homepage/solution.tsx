"use client"
import React, { useState } from 'react'
import toast from "react-hot-toast"

interface ValuesTypes {
    username: string,
    email: string
}

interface ErrorsTypes {
    username?: string,
    email?: string,
}

const Solution = () => {

    const [values, setValues] = useState<ValuesTypes>({
        username: "",
        email: ""
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

    return (
        <div className="mt-10 p-7 theme-transition">
            <h1 className="dark:text-gray-200 text-gray-600 text-center text-3xl font-bold">Find your solution</h1>
            <p className="mt-3 text-center dark:text-gray-300 text-gray-500 font-medium">I will help you find your solution and develop app to grow your bussines</p>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <div className="form-control mb-4">
                        <input 
                            id="username"
                            type="text" 
                            value={values.username}
                            onChange={handleChange}
                            placeholder="Username" 
                            className="input-control"/>
                        {errors.username ? <small className="error-message">{errors.username}</small> : null}
                    </div>
                    <div className="form-control">
                        <input 
                            id="email"
                            type="text" 
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email" 
                            className="input-control"/>
                        {errors.email ? <small className="error-message">{errors.email}</small> : null}
                    </div>
                </div>
                <button type="submit" className="w-full border-none outline-none dark:bg-gray-800 bg-gray-600 cursor-pointer text-gray-200 p-3 rounded-lg font-semibold text-sm hover:scale-[0.95] theme-transition mt-3">
                    Submit Now
                </button>
            </form>
        </div>
    )
}

export default Solution