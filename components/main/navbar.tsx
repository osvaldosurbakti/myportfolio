import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaDownload } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Progress bar state
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScroll(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-[60]">
        <div
          className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-400 transition-all duration-200"
          style={{ width: `${scroll}%` }}
        />
      </div>
      <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-blue-100 dark:border-blue-900 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full shadow border-2 border-blue-400 group-hover:scale-110 transition-transform duration-200"
              />
              <span className="absolute -right-2 -bottom-2 w-3 h-3 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full shadow-lg animate-pulse"></span>
            </span>
            <span className="text-2xl font-extrabold text-blue-700 dark:text-blue-200 tracking-tight ml-2">
              Osvaldo Surbakti
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 rounded-xl font-semibold text-gray-700 dark:text-gray-200 transition-all duration-200 group ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 dark:text-blue-300"
                    : "hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 hover:text-blue-700 dark:hover:text-blue-300"
                }`}
              >
                {link.label}
                {/* Animated underline for active link */}
                <span
                  className={`absolute left-1/2 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300
                  ${pathname === link.href ? "w-3/4 opacity-100" : "w-0 opacity-0"}
                `}
                  style={{ transform: "translateX(-50%)" }}
                />
                {/* On hover, underline appears for non-active */}
                <span
                  className={`absolute left-1/2 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300
                  group-hover:w-3/4 group-hover:opacity-100
                  ${pathname === link.href ? "hidden" : "w-0 opacity-0"}
                `}
                  style={{ transform: "translateX(-50%)" }}
                />
              </Link>
            ))}
            {/* Resume Button with Icon */}
            <a
              href="/OsvaldoSurbakti.pdf"
              download
              className="ml-3 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition flex items-center gap-2 group"
              target="_blank"
              rel="noopener noreferrer"
              title="Get Resume"
            >
              <FaDownload className="text-lg group-hover:animate-bounce" />
              <span className="font-bold tracking-wide">Get Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-700 dark:text-blue-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Sidebar Navigation */}
 <AnimatePresence>
  {isOpen && (
<motion.div
  initial={{ x: "-100%", opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: "-100%", opacity: 0 }}
  transition={{ duration: 0.35, ease: "easeInOut" }}
  className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 shadow-2xl z-[70] flex flex-col px-6 pt-3 pb-8 border-r border-blue-100 dark:border-blue-900"
  style={{ borderTopRightRadius: "1.5rem", borderBottomRightRadius: "1.5rem" }}
>
  {/* Header Section */}
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Logo"
        width={34}
        height={34}
        className="rounded-full shadow border-2 border-blue-400"
      />
      <span className="text-base font-semibold text-blue-700 dark:text-blue-200 tracking-tight leading-tight">
        Osvaldo Surbakti
      </span>
    </div>
    <button
      onClick={() => setIsOpen(false)}
      className="w-8 h-8 flex items-center justify-center text-blue-700 dark:text-blue-200 bg-white/80 dark:bg-gray-900/80 rounded-full shadow hover:bg-blue-100 dark:hover:bg-blue-900 transition"
      aria-label="Close menu"
    >
      <X size={18} />
    </button>
  </div>



      {/* Navigation Links */}
      <div className="flex flex-col items-start gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-gray-700 dark:text-gray-200 transition-all duration-200
              ${pathname === link.href
                ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 dark:text-blue-300"
                : "hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 hover:text-blue-700 dark:hover:text-blue-300"
              }`}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
            <span
              className={`block mt-1 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300
                ${pathname === link.href ? "w-3/4 opacity-100" : "w-0 opacity-0"}
              `}
            />
          </Link>
        ))}

        {/* Resume Button Mobile */}
        <a
          href="/OsvaldoSurbakti.pdf"
          download
          className="w-full text-left px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:from-blue-700 hover:to-purple-700 transition mt-4 flex items-center gap-2 group"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          title="Get Resume"
        >
          <FaDownload className="text-lg group-hover:animate-bounce" />
          <span className="font-bold tracking-wide">Get Resume</span>
        </a>

        {/* Social Links */}
        <div className="flex gap-4 mt-8 ml-1">
          {/* GitHub */}
          <a href="https://github.com/osvaldosurbakti" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:text-purple-600 dark:hover:text-purple-400 transition">
            {/* SVG GitHub */}
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/osvaldo-surbakti" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:text-purple-600 dark:hover:text-purple-400 transition">
            {/* SVG LinkedIn */}
          </a>
          {/* Instagram */}
          <a href="https://instagram.com/osvaldosurbakti" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-300 hover:text-purple-600 dark:hover:text-purple-400 transition">
            {/* SVG Instagram */}
          </a>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
       {/* Overlay for sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-[60]"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}