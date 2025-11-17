"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// =====================================
// ABOUT DATA (Editable / DB Compatible)
// =====================================
export const ABOUT_DATA = {
  title: "About JS Mechanic",
  subtitle: "Reliable, fast, and professional mechanic services right at your doorstep.",
  description:
    "We are a team of certified mechanics dedicated to providing seamless and hassle-free vehicle repair and maintenance services. Our goal is to bring the garage to your home, office, or roadside—saving your valuable time and ensuring premium service quality.",

  highlights: [
    {
      title: "Certified Mechanics",
      text: "All our experts are trained and verified with years of experience.",
      icon: "🏅",
    },
    {
      title: "Doorstep Service",
      text: "We reach your location within minutes for emergency or scheduled service.",
      icon: "🏠", //home icon
    },
    {
      title: "Advanced Tools",
      text: "Professional-grade tools for accurate diagnostics and repairs.",
      icon: "🛠️",
    },
    {
      title: "24/7 Support",
      text: "Round-the-clock assistance for breakdowns and emergencies.",
      icon: "⏰",
    },
  ],

  image: "/aboutUs.webp", // change your image
};

// =====================================
// ABOUT US COMPONENT
// =====================================
export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group cursor-pointer"
        >
          <motion.div
            className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
          />

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-3xl shadow-xl"
          >
            <Image
              src={ABOUT_DATA.image}
              alt="About Us"
              width={600}
              height={500}
              className="object-cover w-full h-full group-hover:scale-110 transition-all duration-700"
            />
          </motion.div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-primary"
          >
            {ABOUT_DATA.title}
          </motion.h2>

          <p className="mt-4 text-xl font-semibold text-rose-700 max-w-xl">
            {ABOUT_DATA.subtitle}
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed max-w-xl">
            {ABOUT_DATA.description}
          </p>

          {/* HIGHLIGHTS */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ABOUT_DATA.highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl border border-gray-200 shadow-sm shadow-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all bg-white group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.text}</p>

                {/* Hover underline */}
                <motion.span
                  className="block h-[3px] bg-primary mt-4 rounded-full"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
