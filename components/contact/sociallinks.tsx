import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="mt-6">
      <p className="text-gray-700 font-medium">Or connect with me on:</p>
      <div className="flex justify-center gap-5 mt-3">
        <Link href="mailto:osvaldosurbakti@gmail.com" className="text-blue-600 hover:text-blue-800 text-2xl hover:scale-110 transition-transform">
          <FaEnvelope />
        </Link>
        <Link href="https://github.com/osvaldosurbakti" className="text-gray-900 hover:text-gray-700 text-2xl hover:scale-110 transition-transform">
          <FaGithub />
        </Link>
        <Link href="https://linkedin.com/in/osvaldo-surbakti" className="text-blue-700 hover:text-blue-500 text-2xl hover:scale-110 transition-transform">
          <FaLinkedin />
        </Link>
        <Link href="https://wa.me/087788668719" className="text-green-600 hover:text-green-800 text-2xl hover:scale-110 transition-transform">
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
}
