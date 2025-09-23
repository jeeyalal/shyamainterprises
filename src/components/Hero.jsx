// import React from 'react'
// import home from '../assets/home.jpg'
// import { motion } from "motion/react"

// const Hero = () => {
//     return (
//         <div
//             id='hero'
//             className='relative w-full h-[80vh] flex items-center justify-center overflow-hidden '
//         >
//             {/* Background Image */}
//             <motion.img
//                 src={home}
//                 alt="home"
//                 initial={{ opacity: 0, scale: 1.1 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 viewport={{ once: true }}
//                 className="absolute inset-0 w-full h-full object-cover"
//             />

//             {/* Overlay Content */}
//             <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-12 lg:px-24">
//                 {/* Heading */}
//                 <motion.h1
//                     initial={{ opacity: 0, y: 40 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 1 }}
//                     viewport={{ once: true }}
//                     className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-extrabold xl:leading-[95px] max-w-5xl 
//                bg-gradient-to-r  text-gray-900 bg-clip-text"
//                 >
//                     Transform Your Spaces with{" "}
//                     <span className="bg-gradient-to-r from-[#0f00e6] to-[#7eacf2] bg-clip-text text-transparent italic tracking-wide">
//                         Expert
//                     </span>{" "}
//                     Solutions!
//                 </motion.h1>


//                 {/* Paragraph */}
//                 <motion.p
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 1.6 }}
//                     viewport={{ once: true }}
//                     className="mt-4 text-sm sm:text-lg font-medium text-gray-200 dark:text-white/80 max-w-lg"
//                 >
//                     Crafting Comfort, One Service at a Time!
//                 </motion.p>

//                 {/* CTA Button */}
//                 <motion.button
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 1.6 }}
//                     viewport={{ once: true }}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="mt-6 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
//                 >
//                     Explore Our Services
//                 </motion.button>
//             </div>

//             {/* Dark overlay for text readability */}
//             <div className="absolute inset-0 bg-black/40"></div>
//         </div>
//     )
// }

// export default Hero


import React from 'react'
import home from '../assets/home.jpg'
import { motion } from "motion/react"
import call from '../assets/call-dropped-svgrepo-com.svg'
import star from '../assets/star-svgrepo-com.svg'
import time from '../assets/time-svgrepo-com.svg'

const Hero = () => {
    return (
        <div id='hero' className='w-full overflow-hidden text-gray-700 dark:text-white'>
            {/* Hero Top Section */}
            <div className='flex flex-col items-center gap-8 py-5 px-4 sm:px-12 lg:px-24 xl:px-40 text-center'>
                {/* Home Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='relative'
                >
                    <img className='w-full max-w-6xl rounded-xl' src={home} alt="home" />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl sm:text-5xl md:text-5xl xl:text-[84px] font-bold xl:leading-[95px] max-w-5xl"
                >
                    Transform Your Spaces with{" "}
                    <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent font-extrabold italic tracking-wide">
                        Expert
                    </span>{" "}
                    Solutions!
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    viewport={{ once: true }}
                    className="text-sm sm:text-lg font-medium text-gray-500 max-w-4/5 sm:max-w-lg pb-6"
                >
                    Crafting Comfort, One Service at a Time!
                </motion.p>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
                >
                    Explore Our Services
                </motion.button>
            </div>

            {/* Info Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                viewport={{ once: true }}
                className="mx-5 mt-13 rounded-2xl bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white py-10 shadow-lg sm:w-4/5 lg:w-1/2 lg:mx-auto"
            >
                <div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 sm:px-12 lg:px-24">

                    {/* Contact */}
                    <div className="flex-1 flex flex-col items-center text-center px-2 py-3 sm:px-4 sm:py-6 rounded-xl hover:bg-white/10 transition-all duration-300 min-w-[100px] sm:min-w-[120px]">
                        <img src={call} alt="contact" className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 mb-2 sm:mb-3 md:mb-4" />
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">Contact for More Info</h3>
                        <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">+91 9004465971</p>
                    </div>

                    {/* Customer Satisfaction */}
                    <div className="flex-1 flex flex-col items-center text-center px-2 py-3 sm:px-4 sm:py-6 rounded-xl hover:bg-white/10 transition-all duration-300 min-w-[100px] sm:min-w-[120px]">
                        <img src={star} alt="satisfaction" className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 mb-2 sm:mb-3 md:mb-4" />
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">Customer Satisfaction</h3>
                        <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">5 Star Service</p>
                    </div>

                    {/* Experience */}
                    <div className="flex-1 flex flex-col items-center text-center px-2 py-3 sm:px-4 sm:py-6 rounded-xl hover:bg-white/10 transition-all duration-300 min-w-[100px] sm:min-w-[120px]">
                        <img src={time} alt="experience" className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 mb-2 sm:mb-3 md:mb-4" />
                        <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">Years of Experience</h3>
                        <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">11+ Years</p>
                    </div>

                </div>
            </motion.div>





        </div>
    )
}

export default Hero
