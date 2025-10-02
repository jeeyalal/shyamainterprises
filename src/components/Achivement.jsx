import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Achievements() {
  const achievements = [
    { label: "Happy Customers", value: 1000, suffix: "+" },
    { label: "Projects Complete", value: 1500, suffix: "+" },
    { label: "Years of Experience", value: 11, suffix: "+" },
    { label: "Team Members", value: 29, suffix: "+" },
  ];

  const [counts, setCounts] = useState(
    achievements.map(() => 0)
  );

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const intervals = achievements.map((ach, idx) => {
        const increment = Math.ceil(ach.value / 100); // speed of animation
        return setInterval(() => {
          setCounts((prev) => {
            const newVal = [...prev];
            if (newVal[idx] < ach.value) {
              newVal[idx] = Math.min(newVal[idx] + increment, ach.value);
            }
            return newVal;
          });
        }, 20);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [inView, achievements]);

  return (
    <section className=" scroll-mt-20 w-full px-6 md:px-12 lg:px-20 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Achievements at a Glance
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Here’s a quick look at the milestones we’ve achieved over the years.
        </p>
      </motion.div>

      <div
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-xl shadow-md hover:scale-105 transform transition"
          >
            <div className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)]">
              {counts[idx]}
              {ach.suffix}
            </div>
            <div className="mt-2 text-gray-700 text-lg">{ach.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
