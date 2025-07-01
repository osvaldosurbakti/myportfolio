"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 dark:text-white"
      >
        Recent Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto"
      >
        Explore my latest projects, where innovation meets technology to create impactful solutions.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8"
      >
        <Link href="/projects">
          <button className="px-8 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105">
            View Projects
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
