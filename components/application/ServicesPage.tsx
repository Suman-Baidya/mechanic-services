"use client";

import { motion } from "framer-motion";

// =============================
// SERVICE DATA (Editable / DB Ready)
// =============================
const SERVICES_DATA = [
  {
    title: "AC Repair",
    description: "Fast cooling repair ensuring efficient performance and long-lasting comfort.",
    icon: "❄️",
  },
  {
    title: "Fridge Repair",
    description: "Quick refrigerator fixes restoring proper cooling and food freshness.",
    icon: "🧊",
  },
  {
    title: "TV Repair",
    description: "Expert technicians fix display, sound, and internal electronic issues.",
    icon: "📺",
  },
  {
    title: "Plumbing Service",
    description: "Reliable plumbers fix leaks, blockages, and essential water flow.",
    icon: "🚰",
  },
  {
    title: "Electrical Service",
    description: "Certified electricians resolve wiring issues ensuring safety and reliability.",
    icon: "💡",
  },
  {
    title: "Car Mechanic",
    description: "Automotive experts repair engine, brakes, and essential driving components.",
    icon: "🚗",
  },
];

// =============================
// SERVICE GRID PAGE COMPONENT
// =============================
export default function ServicesPage() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary/90">
          Our Premium Services
        </h2>
        <p className="mt-3 text-rose-700 max-w-2xl mx-auto">
          Professional, fast, and reliable mechanic solutions designed for your comfort.
        </p>
      </motion.div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {SERVICES_DATA.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 shadow-primary/70 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:shadow-primary/20 hover:-translate-y-1"
          >
            {/* Icon */}
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary transition">
              {service.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600 mt-3 text-base leading-relaxed">
              {service.description}
            </p>

            {/* Hover Underline Animation */}
            <motion.span
              className="block h-[3px] bg-blue-500 mt-5 rounded-full"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
