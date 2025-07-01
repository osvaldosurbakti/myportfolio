"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 + i * 0.18,
      duration: 0.5,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export function AboutWhatIDo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="space-y-10"
    >
      {/* Animated Section Title */}
      <motion.div
        className="flex flex-col items-center justify-center mb-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <motion.div
          className="flex items-center justify-center mb-2"
          initial={{ rotate: -10, scale: 0.8 }}
          animate={{ rotate: [0, -10, 10, 0], scale: [0.8, 1.1, 1] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-400 shadow-lg">
            <MdWork className="text-white text-3xl" />
          </span>
        </motion.div>
        <h2 className="text-4xl font-extrabold text-gray tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 bg-clip-text text-transparent drop-shadow">
          What I Do
        </h2>
        {/* Divider */}
        <div className="w-16 h-1 mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full opacity-70" />
      </motion.div>
      {/* Decorative SVG background */}
      <svg
        className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 400 200"
        preserveAspectRatio="none"
        style={{ zIndex: 0, position: "absolute" }}
      >
        <circle cx="60" cy="60" r="40" fill="#6366f1" />
        <rect x="300" y="120" width="80" height="80" rx="20" fill="#a78bfa" />
        <ellipse cx="200" cy="180" rx="60" ry="20" fill="#60a5fa" />
      </svg>
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {[
          {
            icon: (
              <FaReact className="text-blue-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
            ),
            title: "Frontend Development",
            color: "blue",
            desc: (
              <>
                Building interactive, modern, and responsive user interfaces using{" "}
                <span className="font-semibold text-blue-600">React</span> and the
                latest web technologies to deliver seamless user experiences.
              </>
            ),
          },
          {
            icon: (
              <FaNodeJs className="text-green-600 text-2xl group-hover:scale-110 transition-transform duration-300" />
            ),
            title: "Backend Development",
            color: "green",
            desc: (
              <>
                Designing robust APIs, scalable server logic, and efficient backend
                systems with{" "}
                <span className="font-semibold text-green-600">Node.js</span> and
                Express to power modern applications.
              </>
            ),
          },
          {
            icon: (
              <FaDatabase className="text-purple-500 text-2xl group-hover:scale-110 transition-transform duration-300" />
            ),
            title: "Database & Integration",
            color: "purple",
            desc: (
              <>
                Integrating and optimizing{" "}
                <span className="font-semibold text-purple-600">SQL/NoSQL</span>
                databases, ensuring data consistency, security, and high performance
                for scalable solutions.
              </>
            ),
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            className={`relative p-7 bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg border border-${item.color}-100 dark:border-${item.color}-900 hover:shadow-2xl hover:scale-105 transition-all duration-300 group overflow-hidden backdrop-blur-lg`}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              y: -8,
              boxShadow: `0 12px 32px 0 rgba(59,130,246,0.13)`,
            }}
          >
            <span
              className={`absolute top-4 right-4 text-${item.color}-400 opacity-15 text-7xl pointer-events-none`}
            >
              {item.icon}
            </span>
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className={`text-xl font-bold text-${item.color}-700`}>
                {item.title}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-200">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-6 text-blue-700 dark:text-blue-300 font-medium italic text-lg">
        “Delivering end-to-end solutions with a professional touch.”
      </div>
    </motion.div>
  );
}

// Saran pengembangan lebih lanjut untuk memperindah komponen ini:
// 1. Tambahkan animasi masuk (fade/slide) pada setiap card dengan staggered effect.
// 2. Tambahkan efek glassmorphism lebih kuat (misal: backdrop-blur lebih tinggi, border gradient).
