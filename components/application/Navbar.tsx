"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

// Easily change later or load from DB
const COMPANY_PHONE = "+0000000000";
const COMPANY_EMAIL = "info@example.com";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Home Services", href: "/services/home" },
      { name: "Car Services", href: "/services/car" },
      { name: "Computer Services", href: "/services/computer" },
      { name: "Electrical & Plumbing", href: "/services/electricalplumbing" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Support", href: "/support" },
];

const getInitialActive = () => {
  if (typeof window !== "undefined") {
    const current = window.location.pathname.replace("/", "") || "Home";
    return current.charAt(0).toUpperCase() + current.slice(1).toLowerCase();
  }
  return "Home"; // Fallback for server-side
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(getInitialActive());
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  // Scroll effect + sticky animation
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
          : "bg-white/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-wide cursor-pointer"
        >
          JS Mechanic
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <div key={item.name} className="relative group">
              {/* Main Link */}
              <div className="flex items-center gap-1 cursor-pointer" onClick={() => item.dropdown ? setDropdownOpen(dropdownOpen === item.name ? null : item.name) : null}>
                <Link
                  href={item.href}
                  onClick={() => setActive(item.name)}
                  className={`transition text-base ${
                    active === item.name
                      ? "text-black font-semibold"
                      : "text-black/60"
                  }`}
                >
                  {item.name}
                </Link>

                {item.dropdown && (
                  <ChevronDown
                    className={`w-4 h-4 mt-1 transition ${
                      dropdownOpen === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Underline Animation */}
              {active === item.name && !item.dropdown && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 h-0.5 bg-black -bottom-1"
                />
              )}

              {/* Dropdown */}
              {item.dropdown && dropdownOpen === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl rounded-xl p-3 space-y-2 border"
                >
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block text-black/70 hover:text-black hover:bg-gray-100 p-2 rounded-md transition"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}

          {/* Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-black/70"
          >
            <a href={`tel:${COMPANY_PHONE}`}>
              <Phone className="w-5 h-5 hover:scale-110 transition" />
            </a>
            <a href={`mailto:${COMPANY_EMAIL}`}>
              <Mail className="w-5 h-5 hover:scale-110 transition" />
            </a>
          </motion.div>

          <Button className="ml-3">Login</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-md p-5 space-y-4"
          >
            {NAV_LINKS.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => {
                    setActive(item.name);
                    setOpen(false);
                  }}
                  className={`block text-lg ${
                    active === item.name
                      ? "font-semibold text-black"
                      : "text-black/60"
                  }`}
                >
                  {item.name}
                </Link>

                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className="block text-black/60 hover:text-black"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Icons */}
            <div className="flex items-center gap-4 pt-2 text-black/70">
              <a href={`tel:${COMPANY_PHONE}`}>
                <Phone className="w-5 h-5" />
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`}>
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <Button className="w-full mt-3">Login</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
