"use client";

import { motion } from "framer-motion";
// import dynamic from "next/dynamic";
import { Wrench, MapPin, Rocket, HeartHandshake } from "lucide-react";
import Lottie from "lottie-react";
import faqBot from "@/public/lottie/aiBot.json";
import support from "@/public/lottie/support.json";

// Safe dynamic import for lottie
// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// ====================================================================
// 🎯 FULLY EDITABLE CONTENT
// ====================================================================
const WHO_WE_ARE_CONTENT = {
  heroTitle: "We Fix. You Ride.",
  heroSubtitle:
    "Connecting you with skilled mechanics instantly. Fast, reliable and trusted repairs — wherever you are.",

  heroLottie: "/lottie/mechanic-hero.json",

  timeline: [
    {
      title: "Our Beginning",
      text: "Started with a mission to make vehicle repair effortless for everyone.",
      icon: <Rocket className="text-rose-600 w-7 h-7" />,
      lottie: "/lottie/start.json",
    },
    {
      title: "Why We Exist",
      text: "People struggle to find trusted mechanics. We solve it with verified experts.",
      icon: <HeartHandshake className="text-rose-600 w-7 h-7" />,
      lottie: "/lottie/handshake.json",
    },
    {
      title: "How We Work",
      text: "You request → we assign → mechanic arrives → problem solved.",
      icon: <Wrench className="text-rose-600 w-7 h-7" />,
      lottie: "/lottie/workflow.json",
    },
    {
      title: "Our Promise",
      text: "Quality service, transparent pricing and trustworthy mechanics.",
      icon: <MapPin className="text-rose-600 w-7 h-7" />,
      lottie: "/lottie/promise.json",
    },
  ],

  cta: {
    heading: "Need a Mechanic?",
    text: "We will connect you with a skilled professional instantly.",
    button: "Contact Us Now",
    href: "/support",
  },
};

// ====================================================================
// 🎨 MAIN PAGE
// ====================================================================
export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ============================================================ */}
      {/* HERO SECTION */}
      {/* ============================================================ */}
      <section className="pt-28 pb-24 px-6 relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-300/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-300/20 blur-[100px]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-20">
          
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              <span className="bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                {WHO_WE_ARE_CONTENT.heroTitle}
              </span>
            </h1>

            <p className="text-gray-600 mt-5 text-lg max-w-lg">
              {WHO_WE_ARE_CONTENT.heroSubtitle}
            </p>
          </motion.div>

          {/* LOTTIE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-md">
              <Lottie
                loop
                animationData={support}
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* TIMELINE SECTION */}
      {/* ============================================================ */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Our Journey
        </h2>

        <div className="space-y-12">
          {WHO_WE_ARE_CONTENT.timeline.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-10 p-8 rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-xl transition ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* ICON / LOTTIE */}
              <div className="w-full max-w-[200px]">
                <Lottie
                  loop
                  animationData={faqBot}
                />
              </div>

              {/* TEXT */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {step.icon}
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-700">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA SECTION */}
      {/* ============================================================ */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center text-primary">

          <h2 className="text-4xl font-bold mb-4">
            {WHO_WE_ARE_CONTENT.cta.heading}
          </h2>

          <p className="text-gray-600 mb-8">
            {WHO_WE_ARE_CONTENT.cta.text}
          </p>

          <a
            href={WHO_WE_ARE_CONTENT.cta.href}
            className="inline-block bg-rose-600 text-white px-10 py-4 text-lg rounded-full shadow-md hover:bg-rose-700 transition"
          >
            {WHO_WE_ARE_CONTENT.cta.button}
          </a>

        </div>
      </section>
    </div>
  );
}
