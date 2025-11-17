"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, ChevronDown } from "lucide-react";
// import Lottie from "react-lottie-player";
import Lottie from "lottie-react";

// If stored inside src/assets/
// import faqBot from "@/assets/faq-bot.json";
import faqBot from "@/public/lottie/aiBot.json";
import manRobot from "@/public/lottie/thinking.json";

// If stored in /public/lottie/
// <Lottie path="/lottie/faq-bot.json" />

// ===========================================
// FAQ DATA (CMS READY)
// ===========================================
export const FAQ_CHAT_DATA = [
  {
    q: "How quickly can your mechanic reach me?",
    a: "Typically within 20–40 minutes depending on your location and traffic. Emergency support is always available.",
  },
  {
    q: "Do you provide doorstep bike or car servicing?",
    a: "Yes! Our mechanics reach your location with all necessary tools to perform repairs or servicing at your home or office.",
  },
  {
    q: "Is there any hidden cost?",
    a: "No hidden charges. All pricing is transparent and shared before starting any service.",
  },
  {
    q: "Do I get any service warranty?",
    a: "Yes. Most services include a 15–30 day warranty depending on the type of repair.",
  },
];

// ===========================================
// COMPONENT
// ===========================================
export default function FAQChatStyle() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [loadingAnswer, setLoadingAnswer] = useState(false);

  const handleQuestion = (index: number) => {
    if (activeIndex === index) {
      // closing
      setActiveIndex(null);
      return;
    }

    setActiveIndex(index);
    setLoadingAnswer(true);

    // Fake AI typing delay
    setTimeout(() => setLoadingAnswer(false), 600);
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-white text-gray-900">

    


      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-rose-600">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-2">
          Chat with our AI assistant for instant answers.
        </p>
      </div>

      {/* 2 COLUMN LAYOUT */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"> */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">

        {/* LEFT SIDE — LOTTIE ANIMATION */}
        <div className="flex justify-center">
          <div className="w-80 md:w-96 drop-shadow-xl">
            <Lottie
              loop
              autoplay
              animationData={manRobot}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* LEFT SIDE — CHAT */}
        <div className="space-y-10 w-full md:w-1/2 mb-10 md:mb-0 border rounded-2xl p-6 shadow-lg shadow-primary/80">

          {FAQ_CHAT_DATA.map((item, i) => {
            const isActive = activeIndex === i;

            return (
              <div key={i} className="space-y-5">
                
                {/* USER QUESTION BUBBLE */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-start"
                >
                  <div className="bg-rose-500 text-white p-4 rounded-2xl rounded-bl-none max-w-xs md:max-w-sm shadow-md flex gap-3">
                    <User className="w-5 h-5 opacity-90 mt-1" />
                    <span className="font-medium">{item.q}</span>
                  </div>
                </motion.div>

                {/* SHOW / HIDE BUTTON */}
                <button
                  onClick={() => handleQuestion(i)}
                  className="text-rose-600 text-sm flex items-center gap-1 hover:underline ml-10"
                >
                  {isActive ? "Hide answer" : "Show answer"}
                  <ChevronDown
                    className={`w-4 h-4 transition ${isActive ? "rotate-180" : ""}`}
                  />
                </button>

                {/* ANSWER (AI BOT BUBBLE) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.35 }}
                      className="flex items-start gap-3"
                    >
                      <Bot className="w-7 h-7 text-rose-500 mt-1" />

                      <div className="space-y-2 max-w-md">

                        {/* AI Typing Indicator */}
                        {loadingAnswer && (
                          <motion.div
                            initial={{ opacity: 0.4 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-gray-200 p-3 rounded-xl w-28"
                          >
                            <div className="flex gap-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></div>
                            </div>
                          </motion.div>
                        )}

                        {/* FINAL ANSWER */}
                        {!loadingAnswer && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className="bg-gray-200 text-gray-800 p-4 rounded-2xl rounded-tl-none shadow"
                          >
                            {item.a}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

        </div>

        
        {/* RIGHT SIDE — LOTTIE ANIMATION */}
          <div className="flex justify-center">
            <div className="w-80 md:w-96 drop-shadow-xl">
              <Lottie
                loop
                autoplay
                animationData={faqBot}
                className="w-full h-full"
              />
            </div>
          </div>


      </div>

        


    </section>
  );
}
