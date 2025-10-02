


import React from 'react';
import home from '../assets/home.jpg';
import { motion } from "framer-motion";
import call from '../assets/call-dropped-svgrepo-com.svg';
import star from '../assets/star-svgrepo-com.svg';
import time from '../assets/time-svgrepo-com.svg';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Hero = () => {
  return (
    <section id='hero' className=' scroll-mt-20 w-full overflow-hidden text-gray-800 dark:text-white'>
      {/* Hero Top Section */}
      <motion.div
        className='flex flex-col items-center gap-8 py-5 px-4 sm:px-12 lg:px-24 xl:px-40 text-center'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Home Image */}
        <motion.div
          variants={itemVariants}
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
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-5xl xl:text-[84px] font-bold xl:leading-[95px] max-w-5xl text-gray-800 dark:text-white"
        >
          Transform Your Spaces with{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent font-extrabold italic tracking-wide inline-block">
            Expert
          </span>{" "}
          Solutions!
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-lg font-medium text-gray-500 dark:text-gray-300 max-w-4xl pb-6"
        >
          Crafting Comfort, One Service at a Time!
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Explore Our Services
        </motion.button>
      </motion.div>

      {/* Info Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-5 mt-12 rounded-2xl bg-gradient-to-r from-[#5044E5] to-[#4d8cea] text-white py-10 shadow-lg sm:w-4/5 lg:w-1/2 lg:mx-auto"
      >
        <motion.div className="flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 sm:px-12 lg:px-24">
          {/* Contact */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col items-center text-center px-2 py-3 sm:px-4 sm:py-6 rounded-xl hover:bg-white/10 transition-all duration-300 min-w-[100px] sm:min-w-[120px]"
          >
            <img src={call} alt="contact" className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 mb-2 sm:mb-3 md:mb-4" />
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">Contact for More Info</h3>
            <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">+91 9004465971</p>
          </motion.div>

          {/* Customer Satisfaction */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col items-center text-center px-2 py-3 sm:px-4 sm:py-6 rounded-xl hover:bg-white/10 transition-all duration-300 min-w-[100px] sm:min-w-[120px]"
          >
            <img src={star} alt="satisfaction" className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 mb-2 sm:mb-3 md:mb-4" />
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">Customer Satisfaction</h3>
            <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">5 Star Service</p>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex flex-col items-center text-center px-2 py-3 sm:px-4 sm:py-6 rounded-xl hover:bg-white/10 transition-all duration-300 min-w-[100px] sm:min-w-[120px]"
          >
            <img src={time} alt="experience" className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 mb-2 sm:mb-3 md:mb-4" />
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">Years of Experience</h3>
            <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap">11+ Years</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
