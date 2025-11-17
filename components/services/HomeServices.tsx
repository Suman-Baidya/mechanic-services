"use client";

import { motion } from "framer-motion";
import { Wrench, Bolt, Droplet, Tv, Snowflake, Refrigerator } from "lucide-react";

// ------------------------------
// 🔼 ALL DATA DECLARED AT TOP
// ------------------------------

const HOME_SERVICES = [
  {
    title: "AC Repair",
    description: "Expert cooling repair and fast servicing at your doorstep.",
    icon: Snowflake,
  },
  {
    title: "Fridge Repair",
    description: "Quick diagnosis and reliable fridge cooling repairs.",
    icon: Refrigerator,
  },
  {
    title: "TV Repair",
    description: "LED, LCD and Smart TV repair with professional care.",
    icon: Tv,
  },
  {
    title: "Electrical Work",
    description: "Switchboard, wiring, fan, and all electrical fixes.",
    icon: Bolt,
  },
  {
    title: "Plumbing Service",
    description: "Leak fixes, tap repair, bathroom fittings installation.",
    icon: Droplet,
  },
  {
    title: "General Mechanic",
    description: "Any household mechanics and repair assistance.",
    icon: Wrench,
  },
];

export default function HomeServicesPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-4 md:px-16">
      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Home Services</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Get professional, reliable and quick home service solutions at your doorstep.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {HOME_SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer border border-gray-100"
          >
            <service.icon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
