import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const reviews = [
  { id: 1, name: "Alice", image: "/path/to/image1.jpg", text: "Great service and support! Highly recommended for all your needs." },
  { id: 2, name: "Bob", image: "/path/to/image2.jpg", text: "Highly recommend this company. Their team was professional and dedicated." },
  { id: 3, name: "Carol", image: "/path/to/image3.jpg", text: "Professional and timely delivery. I am very satisfied with the overall experience." },
  { id: 4, name: "David", image: "/path/to/image4.jpg", text: "Exceeded my expectations with quality and customer service. Will use again." },
  { id: 5, name: "Eva", image: "/path/to/image5.jpg", text: "Friendly staff and quality work. Made the whole process simple and stress-free." },
  { id: 6, name: "Frank", image: "/path/to/image6.jpg", text: "Will definitely use again! Reliable, affordable and very skilled team." },
  { id: 7, name: "Grace", image: "/path/to/image7.jpg", text: "Affordable and reliable solutions tailored to our business needs." },
  { id: 8, name: "Hank", image: "/path/to/image8.jpg", text: "Customer service is top-notch. Very responsive and helpful throughout." },
  { id: 9, name: "Ivy", image: "/path/to/image9.jpg", text: "Very satisfied with the results. Our project was delivered on time and budget." },
  { id: 10, name: "Jake", image: "/path/to/image10.jpg", text: "Loved the experience! Professional, friendly, and great results." }
];

const Review = () => {
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) setContainerWidth(scrollRef.current.scrollWidth / 2);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (containerWidth > 0) {
      controls.start({
        x: -containerWidth,
        transition: {
          x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" },
        },
      });
    }
  }, [containerWidth, controls]);

  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div id="customer" className="scroll-mt-22 relative overflow-hidden w-full py-10 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-8 px-4 sm:px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          Customer Reviews
        </h2>
        <p className="text-gray-600 sm:text-lg mt-2 px-8">
          Hear what our satisfied clients have to say about our services.
        </p>
      </div>

      {/* Left and Right Shaded Boundaries */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>

      <div className="px-4 sm:px-6 md:px-12 lg:px-20 relative">
        <motion.div
          ref={scrollRef}
          animate={controls}
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 whitespace-nowrap"
        >
          {duplicatedReviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="inline-block flex-shrink-0 w-[220px] sm:w-[250px] md:w-[280px] lg:w-[300px] p-4 bg-white rounded-xl shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover mb-3 flex-shrink-0"
              />
              <h4 className="font-semibold text-sm sm:text-base md:text-lg mb-1 truncate max-w-full">{review.name}</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words whitespace-normal">{review.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
