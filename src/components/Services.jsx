






import React from "react";
import birtNet from "../assets/bird_net.jpg"
import invisibleGrill from "../assets/invisible_grill.png"
import MosNet from "../assets/moaquet_net.png"
import birdSpike from "../assets/bird_spike.jpg"
import { motion } from "framer-motion";

const services = [
  { title: "Mosquito Nets", desc: "Protect your home from pesky insects with high-quality mosquito nets that ensure peace and comfort. Available for windows, doors, and beds, keeping you safe and relaxed.", img: MosNet },
  { title: "Invisible Grills", desc: "Secure your home with sleek and durable invisible grills that provide safety without compromising aesthetics. Perfect for balconies, windows, and other vulnerable areas.", img: invisibleGrill },
  { title: "Bird Nets", desc: "Keep birds out of your property with strong, reliable bird nets. Prevent damage to your property while maintaining a clean, bird-free environment.", img: birtNet },
  { title: "Bird Spikes", desc: "Deter birds effectively with durable and discreet bird spikes. A humane solution to protect ledges, rooftops, and outdoor spaces from bird intrusion.", img:birdSpike },
];

const listVariants = {
  visible: { transition: { staggerChildren: 0.18 } },
  hidden: {}
};

const cardVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function Services() {
  return (
    <section id="services" className=" scroll-mt-10 w-full px-4 sm:px-6 py-22 md:px-12 lg:px-20 xl:px-32 2xl:px-40 bg-gray-50">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={listVariants}>
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.h2 variants={cardVariants} className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Services
          </motion.h2>
          <motion.p variants={cardVariants} className="mt-4 text-gray-600">
            Explore our wide range of expert services designed to enhance safety, comfort, and style.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div variants={listVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.article
              variants={cardVariants}
              key={idx}
              className="bg-white rounded-2xl shadow-md transition p-4 flex flex-col"
              whileHover={{ scale: 1.04 }} // Only scale, no glow
            >
              <div className="relative overflow-hidden rounded-xl">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 sm:h-56 md:h-48 lg:h-52 object-cover"
                  initial={{ scale: 1.08, opacity: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800 underline">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2 flex-grow">{service.desc}</p>
              <div className="mt-4 flex justify-center">
                <motion.button
                  type="button"
                  aria-label={`Enquire about ${service.title}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-lg text-white bg-[var(--color-primary)] transform transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Enquiry Now
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Services;



