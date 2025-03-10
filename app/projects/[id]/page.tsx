import { projects } from "@/app/data/projects"; // Pastikan path ini valid
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

interface ProjectPageProps {
  params: any
}

// Generate metadata untuk SEO
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.id === Number(params.id));
  
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      images: [project.image],
    },
  };
}

// Static params untuk halaman dinamis
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === Number(params.id));

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
          fill // Gunakan fill tanpa string
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
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900">
          Interested in working together?
        </h2>
        <p className="text-gray-600 mt-2">Let’s build something great together.</p>
        <a
          href="mailto:youremail@example.com"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
