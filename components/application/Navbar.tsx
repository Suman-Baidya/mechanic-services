"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll effect + sticky animation
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isItemActive = (item: (typeof NAV_LINKS)[number]) => {
    if (item.dropdown) {
      return pathname.startsWith("/services");
    }
    return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  };

  return (
    <motion.nav
      ref={navRef}
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
        <Link href="/">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-wide cursor-pointer text-gray-900"
          >
            JS Mechanic
          </motion.h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => {
            const active = isItemActive(item);
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setDropdownOpen(item.name)}
                onMouseLeave={() => item.dropdown && setDropdownOpen(null)}
              >
                {/* Main Trigger */}
                {item.dropdown ? (
                  <button
                    type="button"
                    onClick={() =>
                      setDropdownOpen((prev) =>
                        prev === item.name ? null : item.name
                      )
                    }
                    className={`flex items-center gap-1 cursor-pointer transition text-base py-1 outline-none font-medium ${
                      active ? "text-black font-semibold" : "text-black/60 hover:text-black"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setDropdownOpen(null)}
                    className={`block transition text-base py-1 font-medium ${
                      active ? "text-black font-semibold" : "text-black/60 hover:text-black"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Underline Animation */}
                {active && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-black -bottom-1"
                  />
                )}

                {/* Dropdown Box */}
                <AnimatePresence>
                  {item.dropdown && dropdownOpen === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-0 pt-2 z-50 min-w-[210px]"
                    >
                      <div className="bg-white shadow-xl rounded-2xl p-2 space-y-1 border border-gray-100">
                        {item.dropdown.map((sub) => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setDropdownOpen(null)}
                              className={`block px-3.5 py-2.5 rounded-xl text-sm transition font-medium ${
                                isSubActive
                                  ? "bg-primary/10 text-primary font-semibold"
                                  : "text-gray-700 hover:text-black hover:bg-gray-100/80"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

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

          <Link href="/login">
            <Button className="ml-3 cursor-pointer">Login</Button>
          </Link>
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
            {NAV_LINKS.map((item) => {
              const active = isItemActive(item);
              return (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-lg font-medium ${
                          active ? "font-semibold text-black" : "text-black/60"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block text-lg font-medium ${
                        active ? "font-semibold text-black" : "text-black/60"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-gray-100 pl-3">
                      {item.dropdown.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => {
                              setOpen(false);
                              setDropdownOpen(null);
                            }}
                            className={`block py-1 text-base ${
                              isSubActive
                                ? "text-primary font-semibold"
                                : "text-black/60 hover:text-black"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Icons */}
            <div className="flex items-center gap-4 pt-2 text-black/70">
              <a href={`tel:${COMPANY_PHONE}`}>
                <Phone className="w-5 h-5" />
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`}>
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <Link href="/login" onClick={() => setOpen(false)}>
              <Button className="w-full mt-3 cursor-pointer">Login</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
