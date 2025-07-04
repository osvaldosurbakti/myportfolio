"use client";
import { useParams } from "next/navigation";
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const params = useParams();
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!params || !params.id) {
    return notFound();
  }

  const project = projects.find((p) => String(p.id) === String(params.id));

  if (!project) {
    return notFound();
  }

  // Cek jika ada video untuk proyek (gunakan properti video dari data)
  const hasVideo = !!project.video;
  const videoSrc = project.video || null;

  // Auto play video saat halaman diklik
  const handleDetailClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div
      className="relative max-w-4xl mx-auto px-6 py-12 min-h-[calc(100vh-120px)] flex flex-col justify-start"
      onClick={handleDetailClick}
    >
      {/* Header */}
      <div className="mb-8">
        <Link href="/projects" className="text-blue-500 hover:underline">
          ← Back to Projects
        </Link>
      </div>

      {/* Project Media */}
      <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg bg-black flex items-center justify-center">
        {hasVideo && videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg"
            poster={project.image}
          />
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-full"
          />
        )}

        {/* Badge Video Demo */}
        {hasVideo && (
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow font-semibold z-10">
            Video Demo
          </span>
        )}
      </div>

      {/* Project Title */}
      <motion.h1
        className="text-4xl font-bold mt-6 text-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {project.title}
      </motion.h1>
      <p className="text-gray-600 mt-2 whitespace-pre-line">{project.description}</p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <motion.span
            key={i}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Project Details */}

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4 mb-8">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gray-600 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            View on GitHub
          </a>
        )}

        {/* Tombol Live Demo */}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}