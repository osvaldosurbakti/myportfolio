"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const contacts = [
    {
      icon: <Mail size={18} />,
      href: "mailto:osvaldosurbakti@gmail.com",
      label: "Email",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <Phone size={18} />,
      href: "https://wa.me/6287788668719",
      label: "WhatsApp",
      color: "hover:text-green-600 dark:hover:text-green-400",
      bg: "hover:bg-green-50 dark:hover:bg-green-900/20"
    },
    {
      icon: <Linkedin size={18} />,
      href: "https://linkedin.com/in/osvaldo-surbakti",
      label: "LinkedIn",
      color: "hover:text-blue-500 dark:hover:text-blue-300",
      bg: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <Github size={18} />,
      href: "https://github.com/osvaldosurbakti",
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-white",
      bg: "hover:bg-gray-100 dark:hover:bg-gray-700/20"
    }
  ];

  return (
    <footer className="w-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 py-2 fixed bottom-0 left-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Enhanced brand signature */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 group"
          >
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-md"
            >
              <span className="text-sm font-bold text-white">OS</span>
            </motion.div>
            <div className="flex flex-col">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Osvaldo Surbakti
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Fullstack Developer
              </p>
            </div>
          </motion.div>

          {/* Animated contact links */}
          <motion.div 
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link
                  href={contact.href}
                  target="_blank"
                  className={`p-2.5 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 ${contact.color} ${contact.bg} transition-all duration-300`}
                  aria-label={contact.label}
                >
                  {contact.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive micro copy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
              Crafting digital excellence
            </p>
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </footer>
  );
}