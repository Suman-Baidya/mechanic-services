"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

// ===============================
// CONTACT DATA (changeable)
// ===============================
export const CONTACT_INFO = {
  phone: "+91 98765 43210",
  email: "support@jsmechanic.com",
  address: "Kolkata, West Bengal, India",
  whatsapp: "+91 98765 43210",

  title: "Book a Service or Contact Us",
  subtitle:
    "Fast-response mechanic service for breakdowns, repairs, and inspections. Book now and get instant confirmation.",
};

export default function ContactBooking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Your request has been submitted!");
  };

  return (
    <section className="py-28 px-6 md:px-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-rose-50 via-white to-rose-100" />

      {/* Static floating glow elements */}
      <div className="absolute w-80 h-80 bg-rose-300/30 rounded-full blur-3xl top-10 left-10 animate-float-slow" />
      <div className="absolute w-96 h-96 bg-rose-200/40 rounded-full blur-3xl bottom-0 right-10 animate-float-slower" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="animate-fade-in-left">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {CONTACT_INFO.title}
          </h2>
          <p className="text-gray-600 mb-10 max-w-md">
            {CONTACT_INFO.subtitle}
          </p>

          {/* Contact Details */}
          <div className="space-y-8">
            {[
              { icon: <Phone />, label: CONTACT_INFO.phone },
              { icon: <Mail />, label: CONTACT_INFO.email },
              { icon: <MapPin />, label: CONTACT_INFO.address },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 hover:scale-[1.02] transition-transform"
              >
                <div className="p-3 bg-rose-100 text-rose-600 rounded-xl shadow-sm animate-float-slow">
                  {item.icon}
                </div>
                <p className="text-lg font-medium text-gray-700">{item.label}</p>
              </div>
            ))}

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(
                /[^0-9]/g,
                ""
              )}`}
              target="_blank"
              className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
            >
              <MessageCircle className="w-6 h-6" /> Chat via WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-rose-200 animate-fade-in-right"
        >
          {/* Shimmer border */}
          <div className="absolute inset-0 rounded-3xl shimmer-border pointer-events-none" />

          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Book a Service
          </h3>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="text-gray-600 font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-400 outline-none"
              />
            </div>

            <div>
              <label className="text-gray-600 font-medium">Phone Number</label>
              <input
                type="text"
                name="phone"
                required
                pattern="^[0-9]{10}$"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-400 outline-none"
              />
            </div>
          </div>

          {/* Service */}
          <div className="mb-6">
            <label className="text-gray-600 font-medium">Service Needed</label>
            <input
              type="text"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-400 outline-none"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="text-gray-600 font-medium">Message</label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-rose-400 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 text-lg font-semibold shadow-md hover:bg-rose-700 transition"
          >
            <Send className="w-5 h-5" /> Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}
