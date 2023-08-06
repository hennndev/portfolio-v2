import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Social = () => {
    return (
        <div className="mt-10 dark:bg-gray-800 bg-gray-100 p-3 rounded-lg theme-transition">
            <div className="flex-between">
                <h2 className="font-medium text-lg dark:text-gray-200 text-gray-600 flexx">
                    <span className="w-2 h-2 rounded-full bg-gray-400 mr-3"></span>
                    Follow Me
                </h2>
                <div className="flexx">
                    <a href="https://www.github.com/hennndev" target="_blank" className="social-icon mr-2 group">
                        <p className="social-tooltip">Github</p>
                        <BsGithub className="text-[20px] dark:text-gray-200 text-gray-500"/>
                    </a>
                    <a href="https://www.instagram.com/hennnnndev" target="_blank" className="social-icon mr-2 group">
                        <p className="social-tooltip">Instagram</p>
                        <BsInstagram className="text-[20px] dark:text-gray-200 text-gray-500"/>
                    </a>
                    <a href="https://www.github.com/hennndev" target="_blank" className="social-icon group">
                        <p className="social-tooltip">LinkedIn</p>
                        <BsLinkedin className="text-[20px] dark:text-gray-200 text-gray-500"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Social