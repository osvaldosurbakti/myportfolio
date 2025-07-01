"use client";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export function AboutProjects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="space-y-8 relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 via-white to-purple-100 shadow-lg p-8"
    >
      {/* Decorative icon background */}
      <span className="absolute -top-6 -left-6 text-blue-200 opacity-30 text-8xl pointer-events-none select-none">
        <FaRocket />
      </span>
      {/* Decorative animated gradient bar */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full blur-sm opacity-60"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ transformOrigin: "left" }}
      />
      {/* Badge */}
      <motion.div
        className="inline-block mb-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-xs shadow-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Featured Projects
      </motion.div>
      <motion.h2
        className="text-3xl font-extrabold text-gray-900 flex items-center gap-2 tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-400 shadow">
          <FaRocket className="text-white text-2xl" />
        </span>
        Projects
      </motion.h2>
      {/* Divider */}
      <div className="w-16 h-1 mx-auto bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full opacity-60" />
      <motion.p
        className="text-gray-700 leading-relaxed text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Discover how I combine{" "}
        <span className="font-semibold text-blue-700">creativity</span> and{" "}
        <span className="font-semibold text-purple-700">technical skills</span>{" "}
        to build impactful solutions.
      </motion.p>
      {/* Animated call-to-action button */}
      <motion.a
        href="/projects"
        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        whileHover={{
          scale: 1.09,
          boxShadow: "0 8px 32px 0 rgba(59,130,246,0.18)",
        }}
      >
        View Projects
      </motion.a>
      {/* Decorative bottom wave */}
      <svg
        className="absolute left-0 bottom-0 w-full h-8 opacity-20 pointer-events-none"
        width="100%"
        height="32"
        fill="none"
        viewBox="0 0 400 32"
        preserveAspectRatio="none"
      >
        <path d="M0 16 Q100 32 200 16 T400 16 V32 H0Z" fill="#6366f1" />
      </svg>
      {/* Decorative floating dots */}
      <span className="absolute top-8 right-8 w-4 h-4 bg-blue-300 rounded-full opacity-40 animate-bounce-slow"></span>
      <span className="absolute bottom-12 left-12 w-3 h-3 bg-purple-300 rounded-full opacity-40 animate-pulse"></span>
      <span className="absolute bottom-20 right-24 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-bounce"></span>
      <style jsx global>{`
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite alternate;
        }
        @keyframes bounce-slow {
          0% { transform: translateY(0);}
          100% { transform: translateY(-18px);}
        }
      `}</style>
    </motion.div>
  );
}
