"use client";

import { AboutHero } from "@/components/about/AboutHero";
import { AboutWho } from "@/components/about/AboutWho";
import { AboutProjects } from "@/components/about/AboutProjects";
import { AboutWhatIDo } from "@/components/about/AboutWhatIDo";
import { AboutContact } from "@/components/about/AboutContact";

export default function About() {
  return (
    <section className="min-h-[calc(100vh-120px)] bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white flex flex-col justify-start overflow-x-hidden">
      <div className="flex-1 flex flex-col">
        <AboutHero />
        <AboutWho />
        <AboutProjects />
        <AboutWhatIDo />
        <AboutContact />
      </div>
      <div className="h-[60px] w-full" /> {/* Spacer for footbar */}
    </section>
  );
}