"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

// =========================================================
// ⭐ TESTIMONIALS DATA (CMS-Ready)
// =========================================================
export const testimonialsData = [
  {
    name: "Arjun Roy",
    role: "Car Owner",
    text: "JS Mechanic rescued me in just 20 minutes. Super fast and professional!",
    image: "/user_1.webp",
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Engineer",
    text: "Very polite mechanics and perfect diagnostics. Highly recommended!",
    image: "/user_2.webp",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Doctor",
    text: "Best service experience. Transparent pricing and reliable team!",
    image: "/user_3.webp",
    rating: 4,
  },
];

// =========================================================
//  AUTO-SLIDE + INFINITE LOOP + DOTS + ANIMATION
// =========================================================
export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // Clone slides for infinite smooth looping
  const slides = [...testimonialsData, ...testimonialsData, ...testimonialsData];
  const middleIndex = testimonialsData.length; // Start at middle batch

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = window.setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Auto-slide
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  // Adjust index on loop
  useEffect(() => {
    if (index >= middleIndex * 2) {
      setTimeout(() => setIndex(middleIndex), 50);
    }
  }, [index, middleIndex]);

  // Visible Steps
  const slideWidth = 360; // card width
  const gap = 24;
  const totalMove = (slideWidth + gap) * index;

  // Dot index
  const currentDot = index % testimonialsData.length;

  return (
    <section className="py-24 px-6 md:px-20 bg-white text-primary select-none">
      <h2 className="text-4xl font-bold text-center mb-2">What Our Clients Say</h2>
      <p className="text-center text-rose-700 max-w-2xl mx-auto mb-10">See what our clients have to say about their experience with us.</p>

      <div className="relative max-w-6xl mx-auto">
        {/* Slider Wrapper */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: -totalMove }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            {slides.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                className="min-w-[360px] bg-white rounded-3xl shadow-xl p-8 mr-6 border border-rose-100 relative group"
              >
                {/* shimmer effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-rose-50 to-transparent opacity-0 group-hover:opacity-50 transition-all duration-500 blur-xl" />

                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={item.image}
                    width={64}
                    height={64}
                    alt={item.name}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{item.text}</p>

                {/* Rating */}
                <div className="flex text-rose-500">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-rose-500" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => setIndex((prev) => prev - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-rose-100"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => setIndex((prev) => prev + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-rose-100"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonialsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(middleIndex + i)}
            className={`w-4 h-4 rounded-full transition-all ${
              currentDot === i ? "bg-rose-500 scale-125" : "bg-rose-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
}