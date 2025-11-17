"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Heart } from "lucide-react";

// =====================================
// OUR MISSION + VISION (Rose Theme)
// Data organized at top for DB use
// =====================================
export const MISSION_VISION_DATA = {
  title: "Our Mission & Vision",
  subtitle:
    "We are dedicated to delivering reliable, high‑quality mechanic services with a customer‑first approach.",

  mission: {
    title: "Our Mission",
    text: "To provide fast, trustworthy, and professional mechanic services that ensure the safety and comfort of every customer.",
    icon: <Target className="w-12 h-12" />,
  },

  vision: {
    title: "Our Vision",
    text: "To become the most trusted and accessible mechanic service brand, known for innovation, reliability, and customer care.",
    icon: <Lightbulb className="w-12 h-12" />,
  },

  values: {
    title: "Our Values",
    text: "Integrity, transparency, teamwork, and continuous improvement drive everything we do.",
    icon: <Heart className="w-12 h-12" />,
  },
};

// =====================================
// COMPONENT
// =====================================
export default function MissionVisionRose() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50 text-primary" id="mission-vision">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          {MISSION_VISION_DATA.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-rose-700 max-w-2xl mx-auto"
        >
          {MISSION_VISION_DATA.subtitle}
        </motion.p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="p-8 bg-linear-to-br from-rose-100 to-rose-200 rounded-3xl shadow-md border border-rose-200 hover:from-rose-200 hover:to-rose-300 transition cursor-pointer group"
        >
          <motion.div
            className="text-rose-600 mb-5"
            initial={{ rotate: -20, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ duration: 0.5 }}
          >
            {MISSION_VISION_DATA.mission.icon}
          </motion.div>

          <h3 className="text-2xl font-semibold group-hover:text-rose-600 transition">
            {MISSION_VISION_DATA.mission.title}
          </h3>
          <p className="mt-3 text-rose-700">{MISSION_VISION_DATA.mission.text}</p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="p-8 bg-linear-to-br from-rose-100 to-rose-200 rounded-3xl shadow-md border border-rose-200 hover:from-rose-200 hover:to-rose-300 transition cursor-pointer group"
        >
          <motion.div
            className="text-rose-600 mb-5"
            initial={{ rotate: -20, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ duration: 0.5 }}
          >
            {MISSION_VISION_DATA.vision.icon}
          </motion.div>

          <h3 className="text-2xl font-semibold group-hover:text-rose-600 transition">
            {MISSION_VISION_DATA.vision.title}
          </h3>
          <p className="mt-3 text-rose-700">{MISSION_VISION_DATA.vision.text}</p>
        </motion.div>

        {/* Values Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="p-8 bg-linear-to-br from-rose-100 to-rose-200 rounded-3xl shadow-md border border-rose-200 hover:from-rose-200 hover:to-rose-300 transition cursor-pointer group"
        >
          <motion.div
            className="text-rose-600 mb-5"
            initial={{ rotate: -20, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ duration: 0.5 }}
          >
            {MISSION_VISION_DATA.values.icon}
          </motion.div>

          <h3 className="text-2xl font-semibold group-hover:text-rose-600 transition">
            {MISSION_VISION_DATA.values.title}
          </h3>
          <p className="mt-3 text-rose-700">{MISSION_VISION_DATA.values.text}</p>
        </motion.div>
      </div>
    </section>
  );
}
