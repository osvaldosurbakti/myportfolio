"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { skills } from "../../app/data/skills";
import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";

const categories = ["All", "Frontend", "Backend", "Database", "Cloud"];
const skillLevels = {
  Beginner: "bg-green-500",
  Intermediate: "bg-yellow-500",
  Advanced: "bg-red-500",
} as const;

export default function SkillsCarousel() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter skills dengan useMemo untuk optimasi performa
  const filteredSkills = useMemo(
    () =>
      skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(search.toLowerCase()) &&
          (selectedCategory === "All" || skill.category === selectedCategory)
      ),
    [search, selectedCategory]
  );

  return (
    <div className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white tracking-tight mb-2">
        My Skills
      </h2>
      <div className="w-16 h-1 mx-auto mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full opacity-70" />
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 text-center max-w-2xl mx-auto">
        Technologies and tools I master as a{" "}
        <span className="font-semibold text-blue-700 dark:text-blue-300">
          Fullstack Developer
        </span>
        . Explore my expertise in frontend, backend, database, and cloud
        solutions.
      </p>

      {/* Search & Filter */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search skills..."
            className="p-3 pl-10 w-64 rounded-lg shadow-md bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search skills"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-all border-2 shadow-sm ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white border-blue-600 shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border-transparent hover:border-blue-400 dark:hover:border-blue-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* No Results Found */}
      {filteredSkills.length === 0 && (
        <div className="text-center py-8 text-gray-600 dark:text-gray-400 text-lg italic">
          No skills found matching your search.
        </div>
      )}

      {/* Swiper Carousel */}
      {filteredSkills.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mt-10 max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={3}
              spaceBetween={24}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {filteredSkills.map((skill) => (
                <SwiperSlide key={skill.name}>
                  <Tilt glareEnable={true} glareMaxOpacity={0.5} scale={1.05}>
                    <motion.div
                      className="p-7 bg-gradient-to-br from-white/80 via-blue-50/70 to-purple-100/70 dark:from-gray-900/80 dark:via-blue-900/70 dark:to-purple-900/70 rounded-2xl shadow-xl border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-2xl hover:scale-105 transition-all duration-500 relative group text-center backdrop-blur-md"
                      whileHover={{
                        y: -10,
                        boxShadow: "0 12px 32px 0 rgba(31, 38, 135, 0.18)",
                      }}
                    >
                      <div className="w-16 h-16 mx-auto flex items-center justify-center">
                        {skill.icon &&
                          React.createElement(skill.icon, {
                            className:
                              "w-full h-full text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 drop-shadow-lg",
                          })}
                      </div>
                      <p className="mt-5 text-lg font-bold text-gray-900 dark:text-white drop-shadow-sm">
                        {skill.name}
                      </p>
                      <span
                        className={`px-3 py-1 text-sm rounded-full text-white shadow-md ${
                          skillLevels[skill.level as keyof typeof skillLevels]
                        } absolute top-3 right-3`}
                      >
                        {skill.level}
                      </span>
                      {["React", "Node.js"].includes(skill.name) && (
                        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full shadow font-semibold z-10">
                          Top Skill
                        </span>
                      )}
                    </motion.div>
                  </Tilt>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      )}
    </div>
  );
}

// Saran pengembangan lebih lanjut untuk memperindah section skills:
// 1. Tambahkan animasi fade/slide pada judul dan filter menggunakan framer-motion.
// 2. Tambahkan badge "Top Skill" pada skill tertentu (misal: React, Node.js) jika ingin menonjolkan.
// 3. Tambahkan tooltip pada icon skill untuk deskripsi singkat (gunakan react-tooltip atau custom).
// 4. Tambahkan efek glassmorphism lebih kuat pada card (misal: backdrop-blur lebih tinggi, border gradient).
// 5. Tambahkan background SVG pattern/gradient halus di section skills.
// 6. Tambahkan divider dekoratif di antara judul dan filter (misal: garis gradient).
