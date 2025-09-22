import React from "react";
import { motion } from "framer-motion"; // make sure framer-motion is installed
import whatsappLogo from "../assets/whatsapp.svg";
import phoneLogo from "../assets/phonelogo.svg";

const FloatingContactIcons = () => {
  const clientWhatsApp = "+918888724673";
  const clientPhone = "+918888724673";

  // Minimal floating animation
  const floatVariant = {
    animate: {
      y: [0, -3, 0, 3, 0], // subtle up-down movement
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* WhatsApp Icon - Left Corner */}
      <motion.a
        href={`https://wa.me/${clientWhatsApp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-20 sm:left-6 sm:bottom-24 lg:left-8 lg:bottom-32 z-50"
        variants={floatVariant}
        animate="animate"
      >
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 cursor-pointer hover:scale-105 transition-transform"
        />
      </motion.a>

      {/* Phone Icon - Right Corner */}
      <motion.a
        href={`tel:${clientPhone}`}
        className="fixed right-4 bottom-20 sm:right-6 sm:bottom-24 lg:right-8 lg:bottom-32 z-50"
        variants={floatVariant}
        animate="animate"
      >
        <img
          src={phoneLogo}
          alt="Call"
          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 cursor-pointer hover:scale-105 transition-transform"
        />
      </motion.a>
    </>
  );
};

export default FloatingContactIcons;
