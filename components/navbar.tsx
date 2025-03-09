"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full p-4 shadow-md bg-gradient-to-r from-blue-500 to-purple-500 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center text-xl font-bold text-white">
          <Image src="/logo.png" alt="Logo" width={32} height={32} className="mr-2" />
            MyPortfolio
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-blue-200 transition-all duration-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-200 transition-all duration-300">
            About
          </Link>
          <Link href="/projects" className="text-white hover:text-blue-200 transition-all duration-300">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-200 transition-all duration-300">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-4"
        >
          <Link href="/" className="text-gray-600 hover:text-blue-500 transition-all duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-500 transition-all duration-300">
            About
          </Link>
          <Link href="/projects" className="text-gray-600 hover:text-blue-500 transition-all duration-300">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-500 transition-all duration-300">
            Contact
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
