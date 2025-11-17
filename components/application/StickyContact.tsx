"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

// ===============================================
// 🔧 EASY TO EDIT SETTINGS
// ===============================================
const CONTACT_CONFIG = {
  whatsappNumber: "919933219459", // <--- CHANGE HERE
  whatsappMessage: "Hello! I need help with repairing my vehicle.",
  callNumber: "919933219459",     // <--- CHANGE HERE
  position: "bottom-6 right-6",   // bottom-left? → "bottom-6 left-6"
  themeColor: "#e11d48",          // rose-600
};

export default function StickyContact() {
  return (
    <div className={`fixed z-9999 ${CONTACT_CONFIG.position} flex flex-col gap-3`}>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(
          CONTACT_CONFIG.whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center bg-white border border-rose-300"
        style={{ boxShadow: "0px 6px 25px rgba(225, 29, 72, 0.35)" }}
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MessageCircle size={26} color={CONTACT_CONFIG.themeColor} />
        </motion.div>
      </motion.a>

      {/* Phone Call Button */}
      <motion.a
        href={`tel:${CONTACT_CONFIG.callNumber}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.1 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center bg-white border border-rose-300"
        style={{ boxShadow: "0px 6px 25px rgba(225, 29, 72, 0.35)" }}
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <Phone size={26} color={CONTACT_CONFIG.themeColor} />
        </motion.div>
      </motion.a>
    </div>
  );
}
