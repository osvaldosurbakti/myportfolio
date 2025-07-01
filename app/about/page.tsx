"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutWho } from "@/components/about/AboutWho";
import { AboutProjects } from "@/components/about/AboutProjects";
import { AboutWhatIDo } from "@/components/about/AboutWhatIDo";
import { AboutContact } from "@/components/about/AboutContact";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <AboutHero />
        <AboutWho />
        <AboutProjects />
        <AboutWhatIDo />
        <AboutContact />
      </div>
    </section>
  );
}