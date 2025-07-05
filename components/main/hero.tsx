
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 🔹 Social Icons Component
const SocialLinks = () => {
  const links = [
    { href: "https://github.com/osvaldosurbakti", icon: FaGithub },
    { href: "https://linkedin.com/in/osvaldo-surbakti", icon: FaLinkedin },
    { href: "https://instagram.com/osvaldosurbakti", icon: FaInstagram },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-6">
      {links.map(({ href, icon: Icon }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition duration-300 hover:scale-110"
        >
          <Icon
            size={28}
            className="text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
};

// 🔹 Typing Animation Hook
const useTyping = (words: string[], speed = 80, pause = 1200) => {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) setIndex(0);
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) =>
        deleting ? prev - 1 : prev + 1
      );
      setDisplay(words[index].substring(0, subIndex));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);
  useEffect(() => {
    setDisplay(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);
  return display;
};

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  // Typing animation for subtitle
  const subtitle = useTyping([
    "Fullstack Developer",
    "React & Node.js Enthusiast",
    "MongoDB & SQL",
    "Clean Code Advocate",
    "Open for Collaboration"
  ]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* 🔹 Background Image & Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          objectFit="cover"
          quality={100}
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 🔹 Hero Content */}
      <div className="relative z-10 px-6 text-white w-full">
        {/* Avatar */}
        <div className="flex justify-center">
          <button
            className="focus:outline-none group"
            onClick={() => setShowModal(true)}
            aria-label="Show Profile Picture"
            tabIndex={0}
          >
            <span className="inline-block bg-gradient-to-tr from-blue-400 via-blue-600 to-purple-500 p-1 rounded-full animate-gradient-spin">
              <Image
                src="/avatar.png"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full border-4 border-white shadow-lg transition-transform hover:scale-105 sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]"
              />
            </span>
          </button>
        </div>

        {/* Title & Subtitle */}
        <motion.h1
          className="text-5xl font-extrabold tracking-tight mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I{"'"}m <span className="text-blue-400">Osvaldo Rios Junior Surbakti S.Kom</span> 👋
        </motion.h1>
        {/* Tagline */}
        <motion.div
          className="mt-2 text-base text-blue-200 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <span>“Building solutions, not just code.”</span>
        </motion.div>
        {/* Typing Subtitle */}
        <motion.p
          className="text-lg text-gray-300 mt-4 max-w-xl mx-auto min-h-[32px] font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          {subtitle}
          <span className="animate-pulse">|</span>
        </motion.p>

        {/* 🔹 Social Icons Component */}
        <SocialLinks />

        {/* 🔹 Call-to-Action Buttons */}
        <motion.div
          className="flex justify-center space-x-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <Link href="/projects">
            <button className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              See My Work
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Modal Overlay for Avatar */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-transparent"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute -top-4 -right-4 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow transition"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <Image
              src="/avatar.png"
              alt="Profile Large"
              width={400}
              height={400}
              className="rounded-2xl border-4 border-white shadow-2xl max-w-full h-auto"
              priority
            />
          </div>
        </div>
      )}

      {/* Gradient border animation for avatar */}
      <style jsx global>{`
        .animate-gradient-spin {
          background: linear-gradient(135deg, #60a5fa, #6366f1, #a78bfa, #60a5fa);
          background-size: 400% 400%;
          animation: gradientSpin 6s ease-in-out infinite;
        }
        @keyframes gradientSpin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
