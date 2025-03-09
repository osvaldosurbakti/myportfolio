"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6">
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-blue-400 opacity-20 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <motion.section
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-md">
          🚀 My Projects
        </h1>
        <p className="text-lg text-gray-700 mt-3 max-w-2xl mx-auto">
          A showcase of my expertise in web development with modern technologies.
        </p>
      </motion.section>

      {/* Featured Projects Carousel */}
      <motion.div
        className="mt-10 max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="rounded-xl shadow-lg overflow-hidden"
        >
          {projects.slice(0, 5).map((project) => (
            <SwiperSlide key={project.id} className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="w-full h-72 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <Link
                  href={`/projects/${project.id}`}
                  className="px-5 py-2 bg-white text-gray-900 font-medium rounded-lg shadow-md hover:bg-gray-100"
                >
                  View Details
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-20 text-center bg-white shadow-md p-10 rounded-2xl max-w-xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800">Let's Work Together!</h2>
        <p className="text-gray-700 mt-2">
          Open for new opportunities, collaborations, or just a friendly chat.
        </p>
        <Link href="/contact">
          <button className="mt-5 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            Contact Me
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
