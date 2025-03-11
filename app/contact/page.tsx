"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    
    setTimeout(() => {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6 relative overflow-hidden">
      {/* Background Parallax */}
      <div className="absolute inset-0 bg-parallax bg-fixed bg-center bg-cover opacity-30"></div>

      <motion.div
        className="bg-white bg-opacity-30 backdrop-blur-lg shadow-2xl rounded-2xl p-8 max-w-4xl w-full text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">📩 Contact Me</h1>
        <p className="text-gray-700 text-lg">Let's collaborate or just have a chat! Reach out via email, WhatsApp, or social media.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Contact Form */}
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
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all duration-200 hover:shadow-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all duration-200 hover:shadow-md"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all duration-200 hover:shadow-md"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-md transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
            {status && (
              <div className="mt-4 p-4 rounded-lg bg-green-100 text-green-700 font-medium">
                {status}
              </div>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                <p className="text-gray-700">Gembong Sawah Barat, Kapasan, Surabaya, Indonesia</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <p className="text-gray-700">osvaldosurbakti@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-600 text-2xl" />
                <p className="text-gray-700">+62 8778 8668 719</p>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.715257820686!2d112.733315315326!3d-7.275482973798887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f963d6b5f5a5%3A0x1f7e8f8f8f8f8f8f!2sGembong%20Sawah%20Barat%2C%20Kapasan%2C%20Surabaya%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Social Media Links */}
            <div className="mt-6">
              <p className="text-gray-700 font-medium">Or connect with me on:</p>
              <div className="flex justify-center gap-5 mt-3">
                <Link href="mailto:osvaldosurbakti@gmail.com" className="text-blue-600 hover:text-blue-800 text-2xl transition-transform transform hover:scale-110">
                  <FaEnvelope />
                </Link>
                <Link href="https://github.com/osvaldosurbakti" className="text-gray-900 hover:text-gray-700 text-2xl transition-transform transform hover:scale-110">
                  <FaGithub />
                </Link>
                <Link href="https://linkedin.com/in/osvaldosurbakti" className="text-blue-700 hover:text-blue-500 text-2xl transition-transform transform hover:scale-110">
                  <FaLinkedin />
                </Link>
                <Link href="https://wa.me/087788668719" className="text-green-600 hover:text-green-800 text-2xl transition-transform transform hover:scale-110">
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