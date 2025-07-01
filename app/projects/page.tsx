"use client";

import { motion } from "framer-motion";
import { projects } from "@/app/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6 overflow-hidden">
      {/* Decorative floating shapes */}
      <motion.div
        className="absolute top-10 left-10 w-56 h-56 bg-blue-300 opacity-20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.08, 1], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400 opacity-20 rounded-full blur-3xl z-0"
        animate={{ scale: [1, 1.12, 1], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 text-center mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2">
            <span className="bg-gradient-to-tr from-blue-500 via-purple-500 to-blue-400 text-white px-4 py-2 rounded-full shadow-lg text-3xl mr-2">
              🚀
            </span>
            My Projects
          </span>
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 text-center mb-14 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore some of my featured projects. Click on a project to see more
          details and the technologies behind each solution.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="relative bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-xl hover:shadow-2xl transition group overflow-hidden border border-blue-100 hover:border-blue-400 backdrop-blur-md"
              whileHover={{
                y: -10,
                scale: 1.04,
                boxShadow: "0 12px 32px 0 rgba(59,130,246,0.13)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + idx * 0.08,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
              }}
            >
              <Link href={`/projects/${project.id}`}>
                <div className="cursor-pointer flex flex-col h-full">
                  <div className="relative h-56 w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
                      {project.tech?.[0] || "Project"}
                    </div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2 group-hover:underline">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech?.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="inline-block mt-auto text-blue-600 font-semibold hover:underline">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}