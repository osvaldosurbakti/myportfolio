"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null); // Perbaikan tipe state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending..."); // Sekarang valid karena tipe state adalah string | null
    
    setTimeout(() => {
      setStatus("Message sent successfully!"); // Sekarang valid
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <motion.div
        className="bg-white bg-opacity-30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">📩 Contact Me</h1>
        <p className="text-gray-700 text-lg">Let's collaborate or just have a chat! I&apos;m available via email, WhatsApp, or social media.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-md"
              >
                Send Message
              </button>
            </form>
            
            {status && <p className="mt-4 text-blue-600 font-medium">{status}</p>}
          </div>

          <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <p className="text-gray-700">123 Main Street, City, Country</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <p className="text-gray-700">your.email@example.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-600 text-2xl" />
                <p className="text-gray-700">+123 456 7890</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-gray-700 font-medium">Or connect with me on:</p>
              <div className="flex justify-center gap-5 mt-3">
                <Link href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800 text-2xl">
                  <FaEnvelope />
                </Link>
                <Link href="https://github.com/yourgithub" className="text-gray-900 hover:text-gray-700 text-2xl">
                  <FaGithub />
                </Link>
                <Link href="https://linkedin.com/in/yourlinkedin" className="text-blue-700 hover:text-blue-500 text-2xl">
                  <FaLinkedin />
                </Link>
                <Link href="https://wa.me/yourwhatsappnumber" className="text-green-600 hover:text-green-800 text-2xl">
                  <FaWhatsapp />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}