import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-4 px-4 py-2">
      {/* Alamat */}
      <div className="flex items-start space-x-3">
        <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
        <p className="text-gray-700 text-sm sm:text-base">
          Gembong Sawah Barat, Kapasan, Surabaya, Indonesia
        </p>
      </div>

      {/* Email */}
      <a
        href="mailto:osvaldosurbakti@gmail.com"
        className="flex items-center space-x-3 text-sm sm:text-base hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
      >
        <FaEnvelope className="text-blue-600 text-xl" />
        <span className="text-gray-700">osvaldosurbakti@gmail.com</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/6287788668719"
        className="flex items-center space-x-3 text-sm sm:text-base hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaPhone className="text-blue-600 text-xl" />
        <span className="text-gray-700">+62 8778 8668 719</span>
      </a>
    </div>
  );
}
