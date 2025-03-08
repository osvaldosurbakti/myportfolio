import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

// 🔹 Social Icons Component
const SocialLinks = () => {
  const links = [
    { href: "https://github.com/osvaldosurbakti", icon: FaGithub },
    { href: "https://linkedin.com/in/osvaldo-surbakti", icon: FaLinkedin },
    { href: "https://instagram.com/osvaldosurbakti", icon: FaInstagram },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-6">
      {links.map(({ href, icon: Icon }, index) => (
        <a 
          key={index} 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition duration-300 hover:scale-110"
        >
          <Icon size={28} className="text-white" />
        </a>
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* 🔹 Background Image & Overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/hero.png" 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* 🔹 Hero Content */}
      <div className="relative z-10 px-6 text-white">
        {/* Avatar */}
        <div className="flex justify-center">
          <Image 
            src="/avatar.png" 
            alt="Profile" 
            width={150} 
            height={150} 
            className="rounded-full border-4 border-white shadow-lg transition-transform hover:scale-105"
          />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-5xl font-extrabold tracking-tight animate-fadeIn mt-6">
          Hi, I{'\''}m <span className="text-blue-400">{process.env.NEXT_PUBLIC_USER_NAME}</span> 👋
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto">
          Fullstack Developer | React & Node.js Enthusiast | MongoDB & SQL
        </p>

        {/* 🔹 Social Icons Component */}
        <SocialLinks />

        {/* 🔹 Call-to-Action Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Link href="/projects">
            <button className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              See My Work
            </button>
          </Link>

          <Link href="/contact">
            <button className="px-8 py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
