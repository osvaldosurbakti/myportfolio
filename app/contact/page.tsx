"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/contact/contactform";
import ContactInfo from "@/components/contact/contactinfo";
import ContactMap from "@/components/contact/contactmap";
import SocialLinks from "@/components/contact/sociallinks";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-parallax bg-fixed bg-center bg-cover opacity-20 pointer-events-none" />

      {/* Main Content Card */}
      <motion.div
        className="relative z-10 bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl max-w-6xl w-full p-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-sm mb-2">
            📩 Let's Connect
          </h1>
          <p className="text-gray-700 text-lg">
            Whether you have a project idea, job opportunity, or just want to say hi — feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white bg-opacity-60 rounded-2xl p-6 shadow-md"
          >
            <ContactForm />
          </motion.div>

          {/* Right: Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white bg-opacity-60 rounded-2xl p-6 shadow-md flex flex-col space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <ContactInfo />
            </div>
            <div>
              <ContactMap />
            </div>
            <div>
              <SocialLinks />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
