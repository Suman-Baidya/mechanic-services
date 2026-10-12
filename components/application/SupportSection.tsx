"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import supportAnimation from "@/public/lottie/support.json"; // <-- replace with your file
import { useState } from "react";
import { Zap, Wrench, PhoneCall, MapPin } from "lucide-react";

// ------------------------------------------
// 🔵 Editable Content (Easy to Edit / DB Ready)
// ------------------------------------------
const supportData = {
  headerTitle: "We're Here to Help!",
  headerSubtitle:
    "Whether you need technical support, repair guidance, or help with your booking — our team is always ready.",
  categories: [
    {
      icon: Zap,
      title: "Quick Support",
      desc: "Instant help for simple queries and troubleshooting.",
    },
    {
      icon: Wrench,
      title: "Repair Assistance",
      desc: "Guidance and help for your appliance repair requests.",
    },
    {
      icon: PhoneCall,
      title: "Call Support",
      desc: "Talk directly with our support experts.",
    },
    {
      icon: MapPin,
      title: "Track Service",
      desc: "Know the current status of your ongoing repair.",
    },
  ],
  faqs: [
    {
      q: "How do I book a repair?",
      a: "Go to our service page, choose the service, and fill up your contact details. Our technician will contact you shortly.",
    },
    {
      q: "Do you provide verified technicians?",
      a: "Yes, all our technicians are background-verified and experienced.",
    },
    {
      q: "How long does it take for a technician to arrive?",
      a: "Usually within 60 minutes, depending on your location and technician availability.",
    },
    {
      q: "Can I reschedule my booking?",
      a: "Yes, you can reschedule anytime through our support team.",
    },
  ],
};

// ------------------------------------------
// 🔵 Page Component UI
// ------------------------------------------
export default function SupportPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white px-6 md:px-16 lg:px-24 pt-28 pb-16">
      {/* ------------------------------ */}
      {/* Header */}
      {/* ------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-primary">
          {supportData.headerTitle}
        </h1>
        <p className="mt-4 text-lg text-rose-700">
          {supportData.headerSubtitle}
        </p>
      </motion.div>

      {/* ------------------------------ */}
      {/* Support Categories */}
      {/* ------------------------------ */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {supportData.categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white text-center hover:shadow-xl cursor-pointer hover:border-primary/30 transition-all group"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
              <cat.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition">{cat.title}</h3>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">{cat.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ------------------------------ */}
      {/* Lottie + FAQ Chat Layout */}
      {/* ------------------------------ */}
      <div className="grid md:grid-cols-2 gap-10 mt-20 items-start">
        {/* Left Side – Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Lottie
            animationData={supportAnimation}
            loop
            className="w-80 md:w-96"
          />
        </motion.div>

        {/* Right Side – FAQ Chat */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {supportData.faqs.map((faq, i) => (
              <FaqChatItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openFaqIndex === i}
                onToggle={() =>
                  setOpenFaqIndex(openFaqIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------
// 🔵 FAQ Chat Item — Single Open Accordion
// ------------------------------------------
function FaqChatItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      className="bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-2xl p-4 shadow-sm transition-colors"
    >
      <div
        className="flex justify-between items-center cursor-pointer gap-4 select-none"
        onClick={onToggle}
      >
        <p className="font-semibold text-gray-800 text-base">{q}</p>

        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-bold shadow-xs shrink-0 text-lg transition-transform">
          {isOpen ? "−" : "+"}
        </span>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-3 bg-white p-4 rounded-xl border border-gray-100 shadow-xs"
        >
          <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
