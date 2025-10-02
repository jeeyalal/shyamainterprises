import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "1d6926e9-cfd4-4859-a2e6-4cc8a7c685c7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className=" scroll-mt-20 flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-16 text-gray-700 dark:text-white"
    >
      {/* Section Title with motion */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Reach Out to Us
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Get in touch with us to collaborate, share ideas, or start building
          something amazing together.
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        {/* Name */}
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <span className="mr-2 text-gray-500">👤</span>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <p className="mb-2 text-sm font-medium">Email ID</p>
          <div className="flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <span className="mr-2 text-gray-500">📧</span>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-3 text-sm outline-none bg-transparent"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter Your Message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-max flex gap-2 items-center bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-transform"
        >
          Submit
        </button>
      </motion.form>
    </motion.div>
  );
}

export default Contact;
