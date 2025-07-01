"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AboutHero() {
  const [showModal, setShowModal] = useState(false);

  // Animasi untuk nama (typing effect sederhana)
  const name = "Osvaldo Rios Junior Surbakti S.Kom";
  const [displayName, setDisplayName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);

  // Typing effect untuk nama
  useEffect(() => {
    if (nameIndex < name.length) {
      const timeout = setTimeout(() => {
        setDisplayName(name.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [nameIndex, name]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center relative"
    >
      {/* Decorative animated blurred background shapes */}
      <motion.div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-gradient-to-tr from-blue-200 via-purple-200 to-blue-100 opacity-40 rounded-full blur-3xl pointer-events-none -z-10"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-40 h-40 bg-gradient-to-br from-purple-300 via-blue-200 to-blue-100 opacity-30 rounded-full blur-2xl pointer-events-none -z-10"
        animate={{ scale: [1, 1.12, 1], x: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      />
      {/* Avatar dengan efek glow, border gradient animasi, dan interaktif */}
      <div className="flex justify-center">
        <button
          className="focus:outline-none group"
          onClick={() => setShowModal(true)}
          aria-label="Show Profile Picture"
          tabIndex={0}
        >
          <span className="inline-block bg-gradient-to-tr from-blue-400 via-blue-600 to-purple-500 p-1 rounded-full shadow-2xl backdrop-blur-md animate-gradient-spin relative transition-transform group-hover:scale-105 group-hover:shadow-2xl">
            <span className="absolute inset-0 rounded-full blur-xl opacity-40 bg-gradient-to-tr from-blue-400 via-blue-600 to-purple-500 z-0"></span>
            <img
              src="/foto.jpg"
              alt="Osvaldo Rios Junior Surbakti S.Kom"
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl relative z-10 transition-transform group-hover:scale-105"
            />
          </span>
        </button>
      </div>
      {/* Modal untuk gambar besar */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative bg-transparent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-4 -right-4 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow transition"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 6L6 18M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src="/foto.jpg"
                alt="Profile Large"
                className="rounded-2xl border-4 border-white shadow-2xl max-w-full h-auto w-[350px] sm:w-[400px] md:w-[500px]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Badge nama dengan animasi typing dan efek gradient */}
      <motion.div
        className="inline-flex items-center gap-2 mt-4 px-6 py-2 rounded-full bg-white/80 dark:bg-blue-900/80 text-black text-2xl font-bold tracking-wide shadow border border-blue-200 dark:border-blue-800 backdrop-blur"
        initial={{ scale: 0.95, opacity: 0.8 }}
        animate={{ scale: [0.95, 1.05, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(90deg, #e0e7ff 0%, #f0f5ff 50%, #e0e7ff 100%)",
        }}
      >
        <span className="font-bold tracking-wide transition-all duration-300 text-black text-2xl">
          {displayName}
          <span className="inline-block w-2 h-5 bg-black ml-1 animate-pulse align-middle rounded"></span>
        </span>
      </motion.div>
      {/* Judul dan deskripsi dengan animasi dan highlight */}
      <motion.h1
        className="text-5xl font-extrabold text-gray-900 mt-6 drop-shadow-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          About Me
        </span>
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 mt-3 max-w-xl mx-auto italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <span className="inline-block px-2 py-1 bg-blue-50/70 rounded-lg shadow-sm">
          Passionate Fullstack Developer crafting modern, scalable, and impactful web applications.
        </span>
      </motion.p>
      {/* Tambahan: Quote inspiratif */}
      <motion.div
        className="mt-4 text-blue-500 font-medium text-base italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
      >
        “Turning ideas into interactive digital experiences.”
      </motion.div>
      <style jsx global>{`
        .animate-gradient-spin {
          background: linear-gradient(
            135deg,
            #60a5fa,
            #6366f1,
            #a78bfa,
            #60a5fa
          );
          background-size: 400% 400%;
          animation: gradientSpin 6s ease-in-out infinite;
        }
        @keyframes gradientSpin {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
}