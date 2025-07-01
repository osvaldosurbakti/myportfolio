"use client";

import Hero from "@/components/main/hero";
import About from "@/components/main/about";
import Skills from "@/components/main/skills";
import Projects from "@/components/main/projects";
import Contact from "@/components/main/contact";

export default function HomePage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </section>
  );
}
