"use client";

import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  Wrench,
  Hammer,
  Info,
} from "lucide-react";

// =======================================================
// ⭐ FOOTER DATA (CMS / DB READY)
// =======================================================
const FOOTER_CONTENT = {
  brand: "JS Mechanic",

  description:
    "Reliable mobile mechanic service for bikes, scooters & cars. Fast, expert and affordable on-site repairs.",

  social: [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
  ],

  menus: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/support" },
  ],

  quickInfo: [
    "24×7 Support",
    "On-spot Repair",
    "Certified Mechanics",
    "Fast Response",
  ],

  services: [
    { name: "Home Services", href: "/services/home" },
    { name: "Car Services", href: "/services/car" },
    { name: "Computer Services", href: "/services/computer" },
    { name: "Electrical & Plumbing", href: "/services/electricalplumbing" },
  ],

  contact: {
    address: "Kolkata, West Bengal, India",
    phone: "+91 98765 43210",
    email: "support@jsmechanic.com",
  },
};

// =======================================================
// ⭐ FOOTER COMPONENT (Balanced Layout)
// =======================================================
export default function Footer() {
  return (
    <footer className="relative bg-[#0e0e11] text-gray-300 pt-20 pb-10 overflow-hidden">

      {/* BG Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-rose-600/20 blur-[120px] animate-glowSlow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-[150px] animate-glowSlower"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

        {/* ======================================= */}
        {/* 1. About Section */}
        {/* ======================================= */}
        <div className="space-y-4 lg:col-span-2">
          <h2 className="text-3xl font-bold text-rose-400 tracking-wide hover:text-rose-300 transition">
            {FOOTER_CONTENT.brand}
          </h2>

          <p className="text-gray-400 max-w-sm leading-relaxed">
            {FOOTER_CONTENT.description}
          </p>

          <div className="flex gap-4 pt-3">
            {FOOTER_CONTENT.social.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-rose-500/20 hover:-translate-y-1 hover:scale-110 transition-all"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ======================================= */}
        {/* 2. Menu (Next.js Link) */}
        {/* ======================================= */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
            <ChevronRight className="text-rose-400" /> Menu
          </h3>

          <ul className="space-y-2">
            {FOOTER_CONTENT.menus.map((m, i) => (
              <li key={i}>
                <Link
                  href={m.href}
                  className="group flex items-center gap-2 hover:text-rose-400 transition"
                >
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                  {m.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ======================================= */}
        {/* 3. Quick Info (New Column to fill space) */}
        {/* ======================================= */}
        <div className="md:hidden">
          <h3 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
            <ChevronRight className="text-rose-400" /> Quick Info
          </h3>

          <ul className="space-y-2">
            {FOOTER_CONTENT.quickInfo.map((item, i) => (
              <li
                key={i}
                className="group hover:text-rose-400 transition flex items-center gap-2"
              >
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ======================================= */}
        {/* 4. Services */}
        {/* ======================================= */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
            <Wrench className="text-rose-400" /> Services
          </h3>

          <ul className="space-y-2">
            {FOOTER_CONTENT.services.map((srv, i) => (
              <li key={i}>
                <Link
                  href={srv.href}
                  className="group hover:text-rose-400 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Hammer className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-rose-400" />
                  <span>{srv.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ======================================= */}
        {/* 5. Contact */}
        {/* ======================================= */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-5 flex items-center gap-2">
            <Info className="text-rose-400" /> Contact Info
          </h3>

          <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <MapPin className="w-5 h-5 text-rose-400 group-hover:scale-125 transition" />
              <span className="group-hover:text-rose-300 transition">
                {FOOTER_CONTENT.contact.address}
              </span>
            </li>

            <li className="flex items-center gap-3 group">
              <Phone className="w-5 h-5 text-rose-400 group-hover:scale-125 transition" />
              <span className="group-hover:text-rose-300 transition">
                {FOOTER_CONTENT.contact.phone}
              </span>
            </li>

            <li className="flex items-center gap-3 group">
              <Mail className="w-5 h-5 text-rose-400 group-hover:scale-125 transition" />
              <span className="group-hover:text-rose-300 transition">
                {FOOTER_CONTENT.contact.email}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-14 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {FOOTER_CONTENT.brand}. All Rights Reserved.
      </div>

      {/* Animations */}
      <style>{`
        @keyframes glowSlow { 0% {opacity:.6;} 50% {opacity:1;} 100% {opacity:.6;} }
        @keyframes glowSlower { 0% {opacity:.4;} 50% {opacity:.9;} 100% {opacity:.4;} }
        .animate-glowSlow { animation: glowSlow 6s ease-in-out infinite; }
        .animate-glowSlower { animation: glowSlower 8s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}
