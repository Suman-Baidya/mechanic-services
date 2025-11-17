"use client";

import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Wrench,
  Car,
  Gauge,
  Fan,
  Battery,
  Droplets,
  Filter,
  Home,
} from "lucide-react";

// -------------------------------------
// 🔼 ALL DATA DECLARED AT TOP
// -------------------------------------

const CAR_SERVICES = [
  {
    title: "General Service",
    category: "Maintenance",
    description: "Complete car check-up with expert care.",
    icon: Car,
  },
  {
    title: "Engine Diagnostics",
    category: "Engine",
    description: "Advanced scanning for engine performance issues.",
    icon: Gauge,
  },
  {
    title: "Car AC Repair",
    category: "Cooling",
    description: "Cooling gas refill, compressor & AC servicing.",
    icon: Fan,
  },
  {
    title: "Battery Replacement",
    category: "Electrical",
    description: "Quick battery testing and instant replacement.",
    icon: Battery,
  },
  {
    title: "Brake & Suspension",
    category: "Mechanical",
    description: "Smooth, safe driving with precision repairs.",
    icon: Wrench,
  },
  {
    title: "Car Wash & Clean",
    category: "Cleaning",
    description: "Interior detailing and exterior shine service.",
    icon: Droplets,
  },
];

const FILTERS = ["All", "Maintenance", "Engine", "Cooling", "Electrical", "Mechanical", "Cleaning"];

export default function CarServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices =
    activeFilter === "All"
      ? CAR_SERVICES
      : CAR_SERVICES.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* SEO META TAGS */}
      <Head>
        <title>Car Services | Professional Auto Care</title>
        <meta
          name="description"
          content="Car service, AC repair, engine diagnostics, battery replacement, brake repair and more by expert mechanics."
        />
      </Head>

      {/* HERO BANNER WITH NAVBAR SPACING */}
      <div className="relative w-full h-[300px] bg-primary text-white flex items-center justify-center overflow-hidden rounded-b-3xl ">{/* ← space for absolute navbar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center px-6"
        >
          <h1 className="text-4xl font-bold mb-2">Car Services</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Premium car repair & maintenance by skilled experts.
          </p>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute left-10 top-10 opacity-40"
        >
          <Car className="w-16 h-16" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute right-12 bottom-10 opacity-40"
        >
          <Wrench className="w-16 h-16" />
        </motion.div>
      </div>

      {/* BREADCRUMB */}
      <div className="px-6 md:px-16 py-4 text-sm text-gray-500 flex items-center gap-2">
        <Home className="w-4 h-4" />
        <span>Home</span> / <span className="text-primary font-medium">Car Services</span>
      </div>

      <div className="flex gap-10 px-6 md:px-16 py-10">
        {/* SIDEBAR FILTERS */}
        <div className="w-64 hidden md:block">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filters
          </h3>

          <div className="space-y-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`w-full text-left px-4 py-2 rounded-lg border transition
                  ${
                    activeFilter === filter
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-gray-700 hover:border-primary hover:text-primary"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer border border-gray-100"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
