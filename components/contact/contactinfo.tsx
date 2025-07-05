import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactInfo() {
  return (
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
  );
}
