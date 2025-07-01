"use client";

import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animasi hanya muncul sekali
    threshold: 0.2, // Persentase elemen yang terlihat di layar
  });

  // Variants untuk animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Animasi anak-anak secara berurutan
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="py-16 px-6 text-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
      ref={ref}
    >
      <motion.h2
        className="text-4xl font-bold text-gray-900 dark:text-white"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        I&apos;m a passionate Fullstack Developer with experience in building modern web applications using
        <span className="text-blue-600 font-medium"> React, Next.js, and Tailwind CSS</span>.
        I love crafting beautiful, functional, and responsive designs.
      </motion.p>

      {/* Skill Highlights */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div
          className="flex flex-col items-center p-6 bg-gradient-to-br from-white/70 via-blue-50/60 to-purple-100/60 dark:from-gray-900/70 dark:via-blue-900/60 dark:to-purple-900/60 rounded-2xl shadow-xl border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl hover:scale-105 transition-all duration-500 group backdrop-blur-md"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-tr from-blue-400 via-blue-600 to-purple-500 p-2 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaCode
              size={40}
              className="text-white drop-shadow-lg"
            />
          </span>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Clean Code
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Writing efficient and maintainable code.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-6 bg-gradient-to-br from-white/70 via-blue-50/60 to-purple-100/60 dark:from-gray-900/70 dark:via-blue-900/60 dark:to-purple-900/60 rounded-2xl shadow-xl border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl hover:scale-105 transition-all duration-500 group backdrop-blur-md"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-tr from-blue-400 via-blue-600 to-purple-500 p-2 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 hover:rotate-6">
            <FaLaptopCode
              size={40}
              className="text-white drop-shadow-lg"
            />
          </span>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Modern UI/UX
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Creating intuitive and beautiful interfaces.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col items-center p-6 bg-gradient-to-br from-white/70 via-blue-50/60 to-purple-100/60 dark:from-gray-900/70 dark:via-blue-900/60 dark:to-purple-900/60 rounded-2xl shadow-xl border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl hover:scale-105 transition-all duration-500 group backdrop-blur-md"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-tr from-blue-400 via-blue-600 to-purple-500 p-2 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <FaRocket
              size={40}
              className="text-white drop-shadow-lg"
            />
          </span>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Performance
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Optimizing apps for speed and efficiency.
          </p>
        </motion.div>
      </motion.div>

      {/* Button */}
      <motion.div
        className="mt-8"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <a href="/about">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Learn More
          </button>
        </a>
      </motion.div>
    </div>
  );
}