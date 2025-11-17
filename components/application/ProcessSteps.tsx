"use client";

import { motion } from "framer-motion";
import { CheckCircle, PhoneCall, Wrench, ClipboardList } from "lucide-react";

// =====================================
// PROCESS / STEPS DATA (Editable)
// =====================================
export const PROCESS_STEPS = [
  {
    id: 1,
    title: "Book a Mechanic",
    text: "Choose your service and schedule instantly online or call us.",
    icon: <ClipboardList className="w-10 h-10" />,
  },
  {
    id: 2,
    title: "We Come to You",
    text: "Our certified mechanic arrives at your home, office, or roadside.",
    icon: <PhoneCall className="w-10 h-10" />,
  },
  {
    id: 3,
    title: "Fix & Inspect",
    text: "Your vehicle is repaired with advanced tools and expert care.",
    icon: <Wrench className="w-10 h-10" />,
  },
  {
    id: 4,
    title: "Quality Assured",
    text: "We ensure your vehicle performs perfectly before closing the job.",
    icon: <CheckCircle className="w-10 h-10" />,
  },
];

// =====================================
// PROCESS COMPONENT
// =====================================
export default function ProcessSteps() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-primary"
      >
        How Our Service Works
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-rose-700 max-w-xl mx-auto mt-3"
      >
        A simple, fast, and reliable process from booking to repair completion.
      </motion.p>

      {/* Steps Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-10 relative">
        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white p-8 rounded-3xl shadow-lg relative group border border-gray-100"
          >
            {/* Connector Line */}
            {index !== PROCESS_STEPS.length - 1 && (
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="hidden md:block absolute top-1/2 left-full h-1 bg-blue-500"
              />
            )}

            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 8, scale: 1.1 }}
              className="text-primary mx-auto mb-4"
            >
              {step.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-center text-gray-900">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center mt-2">{step.text}</p>

            {/* Step Number Floating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.15, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute text-7xl font-bold text-primary/80 -bottom-6 -right-4 pointer-events-none"
            >
              {step.id}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
