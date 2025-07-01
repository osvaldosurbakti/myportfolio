"use client";
import { motion } from "framer-motion";
import { FaUniversity, FaCode, FaLaptopCode, FaNodeJs, FaReact } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export function AboutWho() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Variants for staggered animation
  const stackVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };
  const iconVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15 } },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="p-8 rounded-xl shadow-lg bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden"
    >
      {/* Decorative SVG pattern background */}
      <svg
        className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
      >
        <circle cx="60" cy="60" r="40" fill="#6366f1" />
        <rect x="300" y="120" width="80" height="80" rx="20" fill="#a78bfa" />
        <ellipse cx="200" cy="180" rx="60" ry="20" fill="#60a5fa" />
      </svg>
      {/* Decorative university icon */}
      <div className="absolute top-4 right-6 opacity-10 text-blue-700 text-7xl pointer-events-none select-none">
        <FaUniversity />
      </div>
      {/* Badge Fullstack Developer dengan animasi fade-in */}
      <motion.div
        className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-200/70 text-blue-800 font-semibold text-sm shadow-sm animate-pulse border border-blue-300"
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Fullstack Developer
      </motion.div>
      {/* Divider dengan animasi grow */}
      <motion.div
        className="w-16 h-1 mx-auto mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full opacity-60"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        style={{ transformOrigin: "left" }}
      />
      <motion.h2
        className="text-3xl font-semibold text-gray-900 flex items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span className="text-blue-600"><FaCode /></span> Who Am I?
      </motion.h2>
      <motion.p
        className="text-gray-700 mt-4 leading-relaxed text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Hello! I&apos;m a <span className="font-bold text-blue-700">Fullstack Developer</span> passionate about building robust, scalable, and user-friendly web applications.<br />
        I graduated from <span className="font-semibold text-purple-700">Universitas Brawijaya, Malang</span> with a degree in Computer Engineering.<br />
        My journey blends <span className="font-semibold text-blue-600">frontend</span> and <span className="font-semibold text-green-600">backend</span> expertise, allowing me to deliver complete solutions from UI/UX to server logic.
      </motion.p>
      {/* Tech stack highlight dengan animasi stagger */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-6"
        variants={stackVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div variants={iconVariants} className="flex flex-col items-center group">
          <FaReact className="text-blue-500 text-3xl mb-1 animate-spin-slow group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300" />
          <span className="text-sm text-gray-700 font-medium">React</span>
        </motion.div>
        <motion.div variants={iconVariants} className="flex flex-col items-center group">
          <FaNodeJs className="text-green-600 text-3xl mb-1 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300" />
          <span className="text-sm text-gray-700 font-medium">Node.js</span>
        </motion.div>
        <motion.div variants={iconVariants} className="flex flex-col items-center group">
          <FaLaptopCode className="text-purple-500 text-3xl mb-1 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300" />
          <span className="text-sm text-gray-700 font-medium">Fullstack</span>
        </motion.div>
      </motion.div>
      {/* Quote dengan animasi fade-in */}
      <motion.div
        className="mt-6 italic text-blue-700 font-medium text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        “Code is not just my job, it&apos;s my passion.”
      </motion.div>
      {/* Decorative bottom wave */}
      <svg
        className="absolute left-0 bottom-0 w-full h-8 opacity-30 pointer-events-none"
        width="100%"
        height="32"
        fill="none"
        viewBox="0 0 400 32"
        preserveAspectRatio="none"
      >
        <path d="M0 16 Q100 32 200 16 T400 16 V32 H0Z" fill="#6366f1" />
      </svg>
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </motion.div>
  );
}
