"use client";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

export function AboutContact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="relative text-center bg-gradient-to-r from-blue-100 to-purple-100 p-10 rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Decorative icon background */}
      <span className="absolute -top-6 -right-6 text-blue-200 opacity-20 text-8xl pointer-events-none select-none">
        <FaEnvelopeOpenText />
      </span>
      <motion.h2
        className="text-3xl font-extrabold text-gray-900 flex items-center justify-center gap-2 tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-400 shadow">
          <FaEnvelopeOpenText className="text-white text-2xl" />
        </span>
        Let's Connect
      </motion.h2>
      <div className="w-16 h-1 mx-auto my-3 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full opacity-60" />
      <motion.p
        className="text-gray-700 leading-relaxed text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Want to collaborate, discuss web development, or just say hi? Let&apos;s
        chat!
      </motion.p>
      <motion.a
        href="/contact"
        className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        whileHover={{
          scale: 1.07,
          boxShadow: "0 8px 32px 0 rgba(59,130,246,0.18)",
        }}
      >
        Contact Me
      </motion.a>
      {/* Decorative floating dot */}
      <span className="absolute bottom-8 left-8 w-4 h-4 bg-blue-300 rounded-full opacity-30 animate-bounce-slow"></span>
      <style jsx global>{`
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite alternate;
        }
        @keyframes bounce-slow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-18px);
          }
        }
      `}</style>
    </motion.div>
  );
}
