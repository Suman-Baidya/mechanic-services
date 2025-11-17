"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Lock, UserCheck } from "lucide-react";

// ==========================================================
// ⭐ POLICY CONTENT — EASY TO EDIT / CMS-READY
// ==========================================================
const POLICY_DATA = {
  title: "Privacy & Policy",
  subtitle:
    "We value your trust. Here’s how we protect, manage, and use your personal information.",

  sections: [
    {
      icon: <ShieldCheck className="w-7 h-7 text-primary" />,
      heading: "1. Information We Collect",
      content: `
We collect personal details such as your name, phone number, address, vehicle information, and service preferences. We also track service usage, device cookies, and analytics to improve customer experience.
      `,
    },
    {
      icon: <UserCheck className="w-7 h-7 text-primary" />,
      heading: "2. How Your Information Is Used",
      content: `
Your data helps us provide on-time service, verify bookings, process payments, and send updates.  
We do not sell or share your personal data with any third-party companies.
      `,
    },
    {
      icon: <Lock className="w-7 h-7 text-primary" />,
      heading: "3. Data Protection & Security",
      content: `
Your data is stored securely using encryption, secure servers, and industry best security practices.  
Payment and location data follow advanced compliance standards.
      `,
    },
    {
      icon: <FileText className="w-7 h-7 text-primary" />,
      heading: "4. Your Rights",
      content: `
You may request to update, access, or delete your personal information anytime.  
You may also disable notifications or cookies from your device settings.
      `,
    },
  ],

  footerNote:
    "By using our services, you accept our Privacy & Policy. For any concerns, feel free to contact us.",
};

// ==========================================================
// ⭐ LIGHT MODE UI — GLASS, ROSE ACCENTS, ANIMATED
// ==========================================================
export default function PolicyPage() {
  return (
    <div className="relative min-h-screen bg-[#fdf9f9] text-gray-800 py-24 px-6 overflow-hidden">

      {/* Background Soft Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-300/30 blur-[150px] animate-glowSlow"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-rose-200/40 blur-[180px] animate-glowSlower"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary drop-shadow-sm">
            {POLICY_DATA.title}
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {POLICY_DATA.subtitle}
          </p>
        </motion.div>

        {/* Policy Sections */}
        <div className="space-y-10">
          {POLICY_DATA.sections.map((sec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/50 border border-rose-100 rounded-2xl p-8 shadow-lg hover:shadow-rose-300/40 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                {sec.icon}
                <div>
                  <h2 className="text-2xl font-semibold text-primary mb-2">
                    {sec.heading}
                  </h2>
                  <p className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-600 mt-14"
        >
          {POLICY_DATA.footerNote}
        </motion.p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes glowSlow { 
          0% { opacity: .5; } 
          50% { opacity: 1; } 
          100% { opacity: .5; } 
        }
        @keyframes glowSlower { 
          0% { opacity: .4; } 
          50% { opacity: .9; } 
          100% { opacity: .4; } 
        }
        .animate-glowSlow { animation: glowSlow 7s ease-in-out infinite; }
        .animate-glowSlower { animation: glowSlower 9s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
