"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 rounded-full blur-3xl pointer-events-none" />

      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-gray-900 dark:text-white text-center"
      >
        💡 Recent Projects
      </motion.h2>

      {/* Section Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-center"
      >
        Discover how I bring ideas to life through code, design, and strategy—crafted to solve real-world problems.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 flex justify-center"
      >
        <Link href="/projects">
          <button className="relative inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            <span className="z-10">View Projects</span>
            {/* Gradient Ring Effect */}
            <span className="absolute inset-0 rounded-xl ring-2 ring-blue-300 dark:ring-purple-400 animate-pulse opacity-20"></span>
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
