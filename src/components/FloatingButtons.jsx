import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa";

const FloatingButtons = () => {
  const [showWidget, setShowWidget] = useState(true);

  const phoneNumber = "917770862216";
  const callNumber = "+91 7770862216";
  const whatsappMessage = "Hello! I want to know more about your services.";

  if (!showWidget) return null;

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-[9999] flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <div className="flex items-center gap-2 bg-white shadow-lg rounded-xl px-4 py-2">
        <span className="text-sm font-medium text-gray-800">
          Chat on WhatsApp
        </span>

        <button
          onClick={() => setShowWidget(false)}
          className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white text-xs"
        >
          <FaTimes />
        </button>
      </div>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:scale-110 transition"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} className="text-white" />
      </a>

      {/* Call */}
      <a
        href={`tel:${callNumber}`}
        className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
        title="Call Now"
      >
        <FaPhoneAlt size={22} className="text-white" />
      </a>
    </div>
  );
};

export default FloatingButtons;
