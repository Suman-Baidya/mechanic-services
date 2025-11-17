"use client";

import { motion } from "framer-motion";
import { Wrench, Car, Battery, ShieldCheck, Gauge, Cog } from "lucide-react";

// =====================================
// SERVICES DATA (Editable / DB Ready)
// =====================================
export const SERVICES_DATA = [
  {
    title: "General Repair",
    text: "Complete vehicle inspection and mechanical repair services.",
    icon: <Wrench className="w-10 h-10" />,
  },
  {
    title: "Engine Diagnostics",
    text: "Advanced engine scanning and performance optimization.",
    icon: <Gauge className="w-10 h-10" />,
  },
  {
    title: "Battery Replacement",
    text: "Fast and reliable battery testing and replacement.",
    icon: <Battery className="w-10 h-10" />,
  },
  {
    title: "Car Wash & Detailing",
    text: "Premium washing, polishing, and full detailing services.",
    icon: <Car className="w-10 h-10" />,
  },
  {
    title: "Safety Inspection",
    text: "Certified multi-point inspection for complete safety.",
    icon: <ShieldCheck className="w-10 h-10" />,
  },
  {
    title: "Custom Service",
    text: "Tell us what you need—we handle all custom mechanic requests.",
    icon: <Cog className="w-10 h-10" />,
  },
];

// =====================================
// SERVICES SECTION
// =====================================
export default function ServicesSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white" id="services">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center text-primary"
      >
        Our Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-rose-700 max-w-xl mx-auto mt-3"
      >
        Premium, fast, and professional mechanic services delivered right to you.
      </motion.p>

      {/* Services Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="p-8 bg-gray-50 hover:bg-white border border-gray-200 hover:border-primary rounded-3xl shadow-md hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden"
          >
            {/* Glow Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.25 }}
              className="absolute inset-0 bg-primary/50 rounded-3xl blur-2xl"
            />

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 8, scale: 1.15 }}
              className="text-primary mb-4 relative z-10"
            >
              {service.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition relative z-10">
              {service.title}
            </h3>

            {/* Text */}
            <p className="text-gray-600 mt-2 relative z-10">{service.text}</p>

            {/* Bottom Bar Animation */}
            <motion.span
              className="block h-[3px] bg-blue-500 mt-6 rounded-full relative z-10"
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
