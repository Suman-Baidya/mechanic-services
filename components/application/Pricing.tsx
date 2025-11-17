"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

// ======================================================
// PRICING DATA (CMS / DB READY)
// Replace with Strapi / Firebase / Sanity API easily
// ======================================================
const PRICING_DATA = {
  monthly: [
    {
      plan: "Basic",
      price: 499,
      oldPrice: 699,
      features: ["General Check-Up", "Engine Oil Top-up", "Chain Lubrication"],
    },
    {
      plan: "Standard",
      price: 899,
      oldPrice: 1199,
      features: [
        "Full Bike Service",
        "Engine Oil Replacement",
        "Spark Plug Check",
        "Air Filter Cleaning",
      ],
      recommended: true,
    },
    {
      plan: "Premium",
      price: 1499,
      oldPrice: 1899,
      features: [
        "Full Service",
        "Full Diagnostics",
        "Emergency Support",
        "Pickup & Drop",
      ],
    },
  ],

  yearly: [
    {
      plan: "Basic",
      price: 4999,
      oldPrice: 6999,
      features: ["General Check-Up", "Engine Oil Top-up", "Chain Lubrication"],
    },
    {
      plan: "Standard",
      price: 8999,
      oldPrice: 11999,
      features: [
        "4 Full Services",
        "Engine Oil Change",
        "Spark Plug Check",
        "Air Filter Replacement",
      ],
      recommended: true,
    },
    {
      plan: "Premium",
      price: 14999,
      oldPrice: 18999,
      features: [
        "Unlimited Service",
        "Full Diagnostics",
        "Emergency Support",
        "Pickup & Drop",
      ],
    },
  ],

  comparison: [
    {
      feature: "Full Bike Service",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      feature: "Emergency Support",
      basic: false,
      standard: false,
      premium: true,
    },
    {
      feature: "Pickup & Drop",
      basic: false,
      standard: false,
      premium: true,
    },
    {
      feature: "Free Parts Replacement",
      basic: false,
      standard: false,
      premium: true,
    },
  ],
};

// ======================================================
// MAIN PRICING PAGE
// ======================================================
export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyCoupon = () => {
    if (coupon.toLowerCase() === "save20") {
      setDiscount(20);
    } else {
      setDiscount(0);
    }
  };

  const plans = PRICING_DATA[billing];

  return (
    <section className="py-20 bg-linear-to-br from-rose-50 to-white relative overflow-hidden">

      {/* Rose blur circles */}
      <div className="absolute w-96 h-96 bg-rose-300/30 blur-[160px] top-0 left-0"></div>
      <div className="absolute w-96 h-96 bg-rose-500/20 blur-[200px] bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-primary">
            Affordable Pricing
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Transparent, flexible, and customer-friendly plans.
          </p>
        </div>

        {/* TOGGLE SWITCH */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/40 backdrop-blur-xl p-2 rounded-full flex shadow-xl">
            {["monthly", "yearly"].map((type) => (
              <motion.button
                key={type}
                onClick={() => setBilling(type as "monthly" | "yearly")}
                className={`px-6 py-2 rounded-full font-medium capitalize relative ${
                  billing === type ? "text-white" : "text-gray-600"
                }`}
                animate={{
                  backgroundColor: billing === type ? "rgb(244, 63, 94)" : "transparent",
                }}
                transition={{ duration: 0.3 }}
              >
                {type}
              </motion.button>
            ))}
          </div>
        </div>

        {/* COUPON INPUT */}
        <div className="flex justify-center gap-3 mb-14">
          <input
            type="text"
            placeholder="Enter coupon (save20)"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="px-4 py-3 rounded-xl bg-white/70 backdrop-blur-xl shadow-md border border-rose-100 focus:ring-2 focus:ring-rose-400"
          />
          <button
            onClick={applyCoupon}
            className="px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary/80 shadow-md transition"
          >
            Apply
          </button>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`relative bg-white/40 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/30 hover:scale-105 transition-transform ${
                p.recommended ? "ring-2 ring-primary/50" : ""
              }`}
            >
              {/* Recommended Tag */}
              {p.recommended && (
                <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Best Value
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900">{p.plan}</h3>

              {/* PRICE */}
              <div className="mt-4 mb-6">
                <span className="text-4xl font-extrabold text-primary">
                  ₹{Math.round(p.price - (p.price * discount) / 100)}
                </span>
                {discount > 0 && (
                  <span className="text-sm text-green-600 ml-2">-{discount}% OFF</span>
                )}
                <div className="text-gray-400 line-through text-sm">₹{p.oldPrice}</div>
              </div>

              {/* FEATURES */}
              <ul className="space-y-3 mb-8">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-xl bg-linear-to-r from-rose-500 to-rose-600 text-white shadow-lg hover:opacity-90 transition">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>

        {/* COMPARISON TABLE */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-10 text-primary">
            Compare Features
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white/50 backdrop-blur-xl rounded-xl shadow-xl">
              <thead>
                <tr className="bg-primary/10">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Basic</th>
                  <th className="p-4 text-center">Standard</th>
                  <th className="p-4 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_DATA.comparison.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="border-t border-primary/30"
                  >
                    <td className="p-4">{row.feature}</td>
                    <td className="p-4 text-center"><div className="flex justify-center">{row.basic ? <Check className="text-primary" /> : <X className="text-gray-400" />}</div></td>
                    <td className="p-4 text-center"><div className="flex justify-center">{row.standard ? <Check className="text-primary" /> : <X className="text-gray-400" />}</div></td>
                    <td className="p-4 text-center"><div className="flex justify-center">{row.premium ? <Check className="text-primary" /> : <X className="text-gray-400" />}</div></td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
