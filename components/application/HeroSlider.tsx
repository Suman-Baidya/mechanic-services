"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, Wrench } from "lucide-react";

// ==========================
// CONFIG (Editable)
// ==========================
export const HERO_DATA = {
  services: [
    "Engine Repair",
    "Puncture Service",
    "Battery Jump Start",
    "Doorstep Full Service",
    "Oil Change",
    "General Inspection",
  ],

  title: "Premium Mechanic Services Right at Your Doorstep",
  subtitle: "Instant help for vehicle repair, maintenance, and emergencies.",

  buttons: [
    { label: "Contact Now", icon: Phone, href: "#contact" },
    { label: "Our Services", icon: Wrench, href: "#services" },
  ],

  slides: [
    {
      image: "/heroImage_1.webp",
      heading: "Expert Technicians At Your Door",
      text: "Skilled professionals providing quick, reliable home and automotive repair services.",
    },
    {
      image: "/heroImage_2.webp",
      heading: "Fast Repair Service Near You",
      text: "Local experts delivering quick, high-quality repairs for all essential systems.",
    },
    {
      image: "/heroImage_3.webp",
      heading: "Quality Repairs Done With Care",
      text: "Professional repair services focused on safety, durability, and customer satisfaction.",
    },
  ],
};

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // --------------------------------------------------------
  // SLIDER CONTROLS
  // --------------------------------------------------------
  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % HERO_DATA.slides.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + HERO_DATA.slides.length) % HERO_DATA.slides.length);
  }, []);

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => next(), 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // --------------------------------------------------------
  // SWIPE HANDLING
  // --------------------------------------------------------
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipe = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    if (distance > minSwipe) next();
    if (distance < -minSwipe) prev();

    setTouchStart(null);
    setTouchEnd(null);
  };

  // --------------------------------------------------------
  // RENDER
  // --------------------------------------------------------
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden pt-10">
      {/* Background Slides */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index} // ensures safe hydration
            className="absolute inset-0"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={HERO_DATA.slides[index].image}
              alt="Hero Image"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* CONTENT */}
      <div
        className="relative z-20 h-full flex flex-col md:flex-row items-center justify-center md:justify-between md:gap-10 md:px-20 text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* LEFT CONTENT */}
        <div className="max-w-2xl space-y-4 text-center md:text-left">
          <motion.h1
            key={HERO_DATA.slides[index].heading}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
          >
            {HERO_DATA.slides[index].heading}
          </motion.h1>

          <motion.p
            key={HERO_DATA.slides[index].text}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-4 text-lg md:text-xl max-w-xl"
          >
            {HERO_DATA.slides[index].text}
          </motion.p>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            {HERO_DATA.buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className="px-6 py-3 bg-primary border border-white/30 backdrop-blur-md rounded-xl flex items-center gap-2 hover:bg-white/20"
              >
                <btn.icon size={20} /> {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* ------------------------------ */}
        {/* ENQUIRY FORM */}
        {/* ------------------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-10 w-full max-w-lg p-6 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/80"
            />

            <input
              type="number"
              placeholder="Mobile Number"
              className="p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/80"
            />

            <input
              type="text"
              placeholder="Address"
              className="p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/80"
            />

            <select className="p-3 rounded-lg bg-white/30 border border-white/50 text-white">
              <option className="text-black">Select Service</option>

              {HERO_DATA.services.map((service, i) => (
                <option key={i} className="text-black">
                  {service}
                </option>
              ))}
            </select>

            <button className="mt-2 py-3 bg-primary rounded-lg text-white font-bold hover:bg-white hover:text-primary transition">
              Submit Enquiry
            </button>
          </form>
        </motion.div>
      </div>

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white"
      >
        <ChevronLeft size={40} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white"
      >
        <ChevronRight size={40} />
      </button>

      {/* THUMBNAILS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex gap-3 z-30">
        {HERO_DATA.slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-16 h-10 relative rounded-md overflow-hidden border ${
              index === i ? "border-white" : "border-white/30"
            }`}
          >
            <Image src={slide.image} alt="thumb" fill className="object-cover" />
          </button>
        ))}
      </div>
    </section>
  );
}
