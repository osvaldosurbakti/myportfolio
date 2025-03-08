"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 py-4 fixed bottom-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-2 md:mt-0">
          <Link href="https://github.com/yourprofile" target="_blank" className="hover:text-gray-800 dark:hover:text-white transition">
            <Github size={20} />
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-blue-700 transition">
            <Linkedin size={20} />
          </Link>
          <Link href="https://twitter.com/yourprofile" target="_blank" className="hover:text-blue-500 transition">
            <Twitter size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
