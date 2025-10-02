import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-gray-100 pt-10 pb-4 mt-16 border-t border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-10 grid-cols-1 md:grid-cols-4">

        {/* Social & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-3">Connect with us</h3>
          <div className="flex gap-4 mb-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/your_instagram_id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.56-30.55C298,122.72,276.62,120,224,120c-52.62,0-74,2.72-93.15,11.11A54,54,0,0,0,100.34,161C91.95,180.16,89.22,201.54,89.22,254.16s2.73,74,11.12,93.12A54,54,0,0,0,130.85,378.3c19.13,8.39,40.51,11.12,93.15,11.12s74-2.73,93.15-11.12a54,54,0,0,0,30.55-30.55c8.39-19.13,11.12-40.51,11.12-93.13S357.14,179.55,348.75,161.62ZM224,338a82,82,0,1,1,82-82A82.09,82.09,0,0,1,224,338Zm85.4-147.8a19.2,19.2,0,1,1,19.2-19.2A19.2,19.2,0,0,1,309.4,190.2Z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/your_facebook_page"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-500"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91V117.78c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S269.5 0 225.36 0c-73.22 0-121.09 44.38-121.09 124.72V195.3H22.89V288h81.38v224h100.17V288z" />
              </svg>
            </a>
          </div>
          <div className="mb-2">
            <span className="text-gray-300 font-medium">Instagram:</span>
            <a
              href="https://www.instagram.com/your_instagram_id"
              className="ml-2 text-pink-400 hover:text-pink-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              @your_instagram_id
            </a>
          </div>
          <div>
            <span className="text-gray-300 font-medium">Email:</span>
            <a
              href="mailto:contact@shayama-enterprises.com"
              className="ml-2 text-blue-300 hover:text-blue-600 transition"
            >
              contact@shayama-enterprises.com
            </a>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:col-span-2 "
        >
          <h3 className="text-lg font-semibold mb-2">About Shayama Enterprises</h3>
          <p className="text-gray-400 mb-3">
            Shayama Enterprises is committed to delivering high-quality services and products.
            We specialize in innovative solutions for businesses, driven by passion and expertise.
          </p>
        </motion.div>

        {/* Quick Access */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-3">Quick Access</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-white ">Home</a>
            </li>
            <li>
              <a href="#services" className="hover:underline text-white ">Our Services</a>
            </li>
            <li>
              <a href="#work" className="hover:underline text-white ">Our Works</a>
            </li>
            <li>
              <a href="#customer" className="hover:underline text-white ">Customer Reviews</a>
            </li>
            <li>
              <a href="#contact-us" className="hover:underline text-white ">Contact Us</a>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Copyright & Developer */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="scroll-mt-20 border-t border-gray-700 mt-10 pt-4 text-center text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6"
      >
        <span>
          © {new Date().getFullYear()} All rights reserved by Shayama Enterprises.
        </span>
        <span className="mt-2 md:mt-0">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/harsh-mishra-118a21251"
            className="text-blue-500 hover:text-blue-600 transition underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harsh Mishra
          </a>

        </span>
      </motion.div>
    </motion.footer>
  );
}


export default Footer;
