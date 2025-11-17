"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import supportAnimation from "@/public/lottie/support.json"; // <-- replace with your file
import { useState } from "react";

// ------------------------------------------
// 🔵 Editable Content (Easy to Edit / DB Ready)
// ------------------------------------------
const supportData = {
  headerTitle: "We're Here to Help!",
  headerSubtitle:
    "Whether you need technical support, repair guidance, or help with your booking — our team is always ready.",
  categories: [
    {
      icon: "⚡",
      title: "Quick Support",
      desc: "Instant help for simple queries and troubleshooting.",
    },
    {
      icon: "🛠️",
      title: "Repair Assistance",
      desc: "Guidance and help for your appliance repair requests.",
    },
    {
      icon: "📞",
      title: "Call Support",
      desc: "Talk directly with our support experts.",
    },
    {
      icon: "📍",
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
  return (
    <div className="min-h-screen bg-white px-6 md:px-16 lg:px-24 py-16 mt-10">
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
      <div className="grid md:grid-cols-4 gap-6 mt-16">
        {supportData.categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 rounded-xl border shadow-sm bg-white text-center hover:shadow-lg cursor-pointer hover:shadow-primary/30 transition"
          >
            <div className="text-5xl mb-3">{cat.icon}</div>
            <h3 className="text-xl font-semibold">{cat.title}</h3>
            <p className="text-gray-600 mt-2">{cat.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* ------------------------------ */}
      {/* Lottie + FAQ Chat Layout */}
      {/* ------------------------------ */}
      <div className="grid md:grid-cols-2 gap-10 mt-20">
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

          <div className="space-y-6">
            {supportData.faqs.map((faq, i) => (
              <FaqChatItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------------
// 🔵 FAQ Chat Item — Animated Expand/Collapse
// ------------------------------------------
function FaqChatItem({
  q,
  a,
}: {
  q: string;
  a: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="bg-primary/10 border rounded-xl p-4 shadow-sm shadow-primary/70"
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <p className="font-semibold text-gray-800">{q}</p>

        <span className="text-xl">
          {open ? "−" : "+"}
        </span>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 bg-white p-3 rounded-lg border"
        >
          <p className="text-gray-700">{a}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
