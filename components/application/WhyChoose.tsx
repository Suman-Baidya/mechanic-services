"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Timer, Wrench, ThumbsUp } from "lucide-react";

// =====================================
// WHY CHOOSE US (Left Image + Right Points, Rose Light Theme)
// =====================================
export const WHY_US_ROSE = {
  title: "Why Choose JS Mechanic?",
  subtitle:
    "Reliable mechanics, fast response, and trustworthy service designed for your comfort and safety.",

  image: "/heroImage_1.webp", // Changeable

  points: [
    {
      title: "Trusted & Certified Experts",
      text: "Our mechanics are certified and professionally trained.",
      icon: <ShieldCheck className="w-10 h-10" />, 
    },
    {
      title: "Quick Response Time",
      text: "Available instantly for urgent repair needs.",
      icon: <Timer className="w-10 h-10" />,
    },
    {
      title: "Modern Tools & Technology",
      text: "Latest equipment ensures precise diagnostics.",
      icon: <Wrench className="w-10 h-10" />,
    },
    {
      title: "Excellent Customer Support",
      text: "A dedicated team always ready to assist you.",
      icon: <ThumbsUp className="w-10 h-10" />,
    },
  ],
};

// =====================================
// COMPONENT (Rose Light Theme)
// =====================================
export default function WhyChooseUsRose() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50 text-primary" id="why-us-rose">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Soft Rose Glow */}
          <motion.div
            className="absolute inset-0 bg-rose-300/30 blur-2xl rounded-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <div className="overflow-hidden rounded-3xl shadow-xl relative z-10">
            <Image
              src={WHY_US_ROSE.image}
              alt="Why Choose Us"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary"
          >
            {WHY_US_ROSE.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-rose-700 max-w-xl"
          >
            {WHY_US_ROSE.subtitle}
          </motion.p>

          {/* Points */}
          <div className="mt-10 space-y-8">
            {WHY_US_ROSE.points.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 p-5 bg-white border border-rose-200 rounded-2xl hover:bg-rose-100 transition-all group cursor-pointer shadow-sm"
              >
                {/* Icon Animation */}
                <motion.div
                  initial={{ rotate: -20, opacity: 0 }}
                  whileInView={{ rotate: 0, opacity: 1 }}
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  transition={{ duration: 0.5 }}
                  className="text-rose-600"
                >
                  {item.icon}
                </motion.div>

                <div>
                  <h3 className="text-xl font-semibold text-rose-900 group-hover:text-primary transition">
                    {item.title}
                  </h3>
                  <p className="text-rose-700 mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}