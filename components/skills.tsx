"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { skills } from "../data/skills";
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
    <div className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
        Skills
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 text-center max-w-2xl mx-auto">
        Teknologi dan tools yang saya kuasai sebagai Fullstack Developer.
      </p>

      {/* Search & Filter */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search skills..."
            className="p-3 pl-10 w-64 rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search skills"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* No Results Found */}
      {filteredSkills.length === 0 && (
        <div className="text-center py-4 text-gray-600 dark:text-gray-400">
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
          <div className="mt-8 max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={3}
              spaceBetween={20}
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
                    <motion.div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative group text-center">
                      <div className="w-16 h-16 mx-auto">
                        {skill.icon && React.createElement(skill.icon, {
                          className: "w-full h-full text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:rotate-6"
                        })}
                      </div>
                      <p className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </p>
                      <span
                        className={`px-3 py-1 text-sm rounded-full text-white ${
                          skillLevels[skill.level as keyof typeof skillLevels]
                        } absolute top-3 right-3`}
                      >
                        {skill.level}
                      </span>
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
