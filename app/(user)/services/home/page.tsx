"use client";

import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Wrench,
  Bolt,
  Droplet,
  Tv,
  Snowflake,
  Refrigerator,
  Filter,
  Home,
} from "lucide-react";

// -------------------------------------
// 🔼 ALL DATA DECLARED AT TOP
// -------------------------------------

const HOME_SERVICES = [
  {
    title: "AC Repair",
    category: "Cooling",
    description: "Expert cooling repair and fast doorstep servicing.",
    icon: Snowflake,
  },
  {
    title: "Fridge Repair",
    category: "Cooling",
    description: "Quick diagnosis and reliable fridge cooling fixes.",
    icon: Refrigerator,
  },
  {
    title: "TV Repair",
    category: "Electronics",
    description: "LED, LCD & Smart TV repair with expert care.",
    icon: Tv,
  },
  {
    title: "Electrical Work",
    category: "Electrical",
    description: "Switchboard, wiring, fan, and all electrical fixes.",
    icon: Bolt,
  },
  {
    title: "Plumbing Service",
    category: "Plumbing",
    description: "Leak fixes, tap repair, bathroom fittings service.",
    icon: Droplet,
  },
  {
    title: "General Mechanic",
    category: "Mechanical",
    description: "Any household mechanical issues solved quickly.",
    icon: Wrench,
  },
];

const FILTERS = ["All", "Cooling", "Electronics", "Electrical", "Plumbing", "Mechanical"];

export default function HomeServicesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices =
    activeFilter === "All"
      ? HOME_SERVICES
      : HOME_SERVICES.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* SEO META TAGS */}
      <Head>
        <title>Home Services | Fast & Reliable Repairs</title>
        <meta
          name="description"
          content="Professional home services including AC, fridge, TV, plumbing, electrical and more at your doorstep."
        />
      </Head>

      {/* HERO BANNER */}
      <div className="relative w-full h-[220px] bg-primary text-white flex items-center justify-center overflow-hidden rounded-b-3xl mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center px-6"
        >
          <h1 className="text-4xl font-bold mb-2">Home Services</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Reliable home repairs by verified professionals.
          </p>
        </motion.div>

        {/* Decorative Floating Icons */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute left-10 top-10 opacity-40"
        >
          <Home className="w-16 h-16" />
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
        <span>Home</span> / <span className="text-primary font-medium">Home Services</span>
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
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:shadow-primary/30 transition-all cursor-pointer border border-gray-100"
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