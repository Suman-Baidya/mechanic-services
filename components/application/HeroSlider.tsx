// Updated Hero Section + Enquiry Form
"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, Wrench } from "lucide-react";

// ==========================
// CONFIG (Easily Replaceable)
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
  subtitle: "Get instant help with vehicle repair, maintenance, and emergency support.",
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
      text: "Professional repair services focused on safety, durability, speed, and customer satisfaction.",
    },
  ],
};

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % HERO_DATA.slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + HERO_DATA.slides.length) % HERO_DATA.slides.length), []);

  // Auto Slide
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  // Swipe Support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipe = 50;

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipe) next();
    if (distance < -minSwipe) prev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden pt-10">
      {/* Background Slider */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          {/* FORM RIGHT SIDE */}
      <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={HERO_DATA.slides[index].image}
              alt="Hero Slide"
              fill
              className="object-cover"
              sizes="100vw"
              priority={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* CONTENT + FORM SIDE */}
      <div
        className="relative z-20 h-full flex flex-col md:flex-row items-center justify-center md:justify-between md:gap-10 md:px-20 text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="max-w-2xl space-y-4 text-center md:text-left">
        <motion.h1
          key={HERO_DATA.slides[index].heading}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold max-w-2xl"
        >
          {HERO_DATA.slides[index].heading}
        </motion.h1>

        <motion.p
          key={HERO_DATA.slides[index].text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl max-w-xl"
        >
          {HERO_DATA.slides[index].text}
        </motion.p>

        {/* CTA Buttons */}
        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          {HERO_DATA.buttons.map((btn, i) => (
            <a
              key={i}
              href={btn.href}
              className="px-6 py-3 bg-primary backdrop-blur-md border border-white/30 rounded-xl flex items-center gap-2 hover:bg-white/30 transition"
            >
              <btn.icon size={20} /> {btn.label}
            </a>
          ))}
        </div>
        </div>

        

        {/* ========================= */}
        {/* ENQUIRY FORM (New Added) */}
        {/* ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 w-full max-w-lg p-6 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-4">Quick Enquiry</h3>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/80" />
            <input type="number" placeholder="Mobile Number" className="p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/80" />
            <input type="text" placeholder="Address" className="p-3 rounded-lg bg-white/30 border border-white/50 text-white placeholder-white/80" />

            <select className="p-3 rounded-lg bg-white/30 border border-white/50 text-white">

              <option className="text-black">Select Service</option>
                {HERO_DATA.services.map((s, i) => (
                <option key={i} className="text-black">{s}</option>
                ))}

            </select>

            <button className="mt-2 py-3 bg-primary rounded-lg text-white font-bold hover:bg-white hover:text-primary transition">
              Submit Enquiry
            </button>
          </form>
        </motion.div>
      </div>

      {/* Arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white">
        <ChevronLeft size={40} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white">
        <ChevronRight size={40} />
      </button>

      {/* Thumbnails */}
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
