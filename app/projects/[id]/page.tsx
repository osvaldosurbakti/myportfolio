"use client";

import { useParams } from "next/navigation";
import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetail() {
  const params = useParams();

  if (!params || !params.id) {
    return notFound();
  }

  const project = projects.find((p) => String(p.id) === String(params.id));

  if (!project) {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link href="/projects" className="text-blue-500 hover:underline">
          ← Back to Projects
        </Link>
      </div>

      {/* Project Image */}
      <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Project Title */}
      <h1 className="text-4xl font-bold mt-6 text-gray-900">{project.title}</h1>
      <p className="text-gray-600 mt-2">{project.description}</p>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Details */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800">Project Overview</h2>
        <p className="text-gray-700 mt-2 leading-relaxed">{project.details}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-4">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-gray-600 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
