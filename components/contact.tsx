"use client";

import Link from "next/link";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-100 via-blue-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
      {/* Animated Background Blur Effect */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-200 dark:bg-blue-900 opacity-20 rounded-full blur-2xl pointer-events-none -z-10"
        animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.22, 0.18] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      {/* Glassmorphism Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white/70 dark:bg-gray-900/70 rounded-3xl shadow-2xl backdrop-blur-lg px-8 py-14 text-gray-900 dark:text-white text-center border border-blue-100 dark:border-gray-700 relative"
        whileHover={{
          scale: 1.015,
          boxShadow: "0 8px 32px 0 rgba(59,130,246,0.10)",
        }}
      >
        {/* Animated Title */}
        <motion.h2
          className="text-4xl font-extrabold drop-shadow-sm tracking-tight"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          Let&apos;s Work Together!
        </motion.h2>
        {/* Badge */}
        <motion.span
          className="inline-block mt-4 mb-3 px-5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-200 text-sm font-semibold tracking-wide shadow animate-pulse border border-blue-200 dark:border-blue-800"
          initial={{ scale: 0.9, opacity: 0.8 }}
          animate={{ scale: [0.9, 1.05, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Available for work / freelance
        </motion.span>
        {/* Divider */}
        <motion.div
          className="w-20 h-1 mx-auto my-5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full opacity-70"
          initial={{ scaleX: 0.7 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
        />
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-200/90">
          Whether you have a project in mind or just want to say hi, feel free to
          reach out.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex justify-center items-center space-x-3"
        >
          <Link href="/contact" aria-label="Open to new opportunities">
            <motion.span
              whileHover={{
                scale: 1.08,
                backgroundColor: "#2563eb",
                color: "#fff",
              }}
              className="flex items-center gap-2 cursor-pointer bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full shadow-md text-blue-700 dark:text-blue-200 font-medium text-base transition-all duration-200 hover:bg-blue-600 hover:text-white"
            >
              <Send className="text-blue-600 dark:text-blue-300" size={24} />
              I&apos;m open to new opportunities!
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}