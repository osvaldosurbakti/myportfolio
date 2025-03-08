"use client";

import Link from "next/link";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold">Let's Work Together!</h2>
        <p className="mt-4 text-lg opacity-90">
          Whether you have a project in mind or just want to say hi, feel free to reach out.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </motion.button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex justify-center items-center space-x-3"
        >
          <Send className="text-white opacity-70" size={28} />
          <p className="text-lg opacity-80">I'm open to new opportunities!</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
