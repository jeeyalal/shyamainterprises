


import React, { useState } from 'react'
import menu from "../assets/menu_icon.svg"
import logo from '../assets/logo.png'
import close from '../assets/close_icon.svg'
import arrow from '../assets/arrow_icon.svg'
import { motion } from "framer-motion" // use "framer-motion"

const Navbar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50'
        >
            <a href="#">
                <img src={logo} className='w-25 sm:w-40' alt="Logo" />
            </a>
            {/* Navigation Links */}
            <div className={`text-gray-700 sm:text-sm ${!sideBarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
                <img
                    src={close}
                    className='w-5 absolute right-4 top-4 sm:hidden'
                    onClick={() => setSideBarOpen(false)}
                    alt="Close"
                />
                <a onClick={() => setSideBarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
                <a onClick={() => setSideBarOpen(false)} href="#services" className='sm:hover:border-b'>Our Services</a>
                <a onClick={() => setSideBarOpen(false)} href="#work" className='sm:hover:border-b'>Our Works</a>
                <a onClick={() => setSideBarOpen(false)} href="#customer" className='sm:hover:border-b'>Customer Reviews</a>
                <a onClick={() => setSideBarOpen(false)} href="#contact-us" className='sm:hover:border-b'>Contact Us</a>
            </div>
            <div className='flex items-center gap2 sm:gap-4'>
                <img
                    src={menu}
                    alt="Menu"
                    onClick={() => setSideBarOpen(true)}
                    className='w-8 sm:hidden'
                />
                <a
                    href="#contact-us"
                    className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'
                >
                    Connect <img src={arrow} width={14} alt="Arrow" />
                </a>
            </div>
        </motion.div>
    )
}
export default Navbar
