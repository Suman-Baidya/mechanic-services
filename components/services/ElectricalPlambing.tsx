"use client";

import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Bolt,
  Droplet,
  Wrench,
  Plug,
  ShowerHead,
  Zap,
  Filter,
  Home,
} from "lucide-react";

// -------------------------------------
// 🔼 ALL DATA DECLARED AT TOP
// -------------------------------------

const EP_SERVICES = [
  {
    title: "Wiring & Switchboard",
    category: "Electrical",
    description: "Complete wiring, socket, switchboard repair & setup.",
    icon: Plug,
  },
  {
    title: "Fan & Light Repair",
    category: "Electrical",
    description: "Ceiling fan, LED, tube light installation & fixes.",
    icon: Bolt,
  },
  {
    title: "Water Leakage Fix",
    category: "Plumbing",
    description: "Fast leakage detection & pipe repair service.",
    icon: Droplet,
  },
  {
    title: "Tap & Mixer Repair",
    category: "Plumbing",
    description: "Bathroom & kitchen tap, mixer, faucet installation.",
    icon: ShowerHead,
  },
  {
    title: "Fuse & MCB Fix",
    category: "Electrical",
    description: "Electrical panel, MCB & fuse repair support.",
    icon: Zap,
  },
  {
    title: "Bathroom Fitting",
    category: "Plumbing",
    description: "Shower, jet spray & bathroom accessories fitting.",
    icon: Wrench,
  },
];

const FILTERS = ["All", "Electrical", "Plumbing"];

export default function ElectricalPlumbingPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredServices =
    activeFilter === "All"
      ? EP_SERVICES
      : EP_SERVICES.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* SEO META TAGS */}
      <Head>
        <title>Electrical & Plumbing Services | Home Fix Experts</title>
        <meta
          name="description"
          content="Electrical and plumbing services including wiring, leakage fix, tap repair, fittings, fuse replacement & more."
        />
      </Head>

      {/* HERO BANNER */}
      <div className="relative w-full h-[300px] bg-primary text-white flex items-center justify-center overflow-hidden rounded-b-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center px-6"
        >
          <h1 className="text-4xl font-bold mb-2">Electrical & Plumbing</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Professional home electrical & plumbing repair services.
          </p>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute left-10 top-10 opacity-40"
        >
          <Bolt className="w-16 h-16" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute right-12 bottom-10 opacity-40"
        >
          <Droplet className="w-16 h-16" />
        </motion.div>
      </div>

      {/* BREADCRUMB */}
      <div className="px-6 md:px-16 py-4 text-sm text-gray-500 flex items-center gap-2">
        <Home className="w-4 h-4" />
        <span>Home</span> / <span className="text-primary font-medium">Electrical & Plumbing</span>
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
