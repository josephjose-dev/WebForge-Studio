"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      setTimeout(() => {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden px-6 text-center">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute top-20 left-10 w-96 h-96 opacity-20"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M50,200 Q150,100 250,200 T450,200"
            stroke="white"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
          />
        </svg>

        <svg
          className="absolute bottom-20 right-10 w-96 h-96 opacity-20"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M50,200 Q150,100 250,200 T450,200"
            stroke="white"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col gap-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Turn visitors into customers with a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            high-converting website
          </span>
          .
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          Fast, modern websites for startups, freelancers, and small businesses
          who want more enquiries, bookings, and clients — not just a pretty UI.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-2">
          <button
            onClick={handleContactClick}
            className="bg-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-purple-600 shadow-xl"
          >
            Let&apos;s talk about your project →
          </button>
        </div>

        {/* Reassurance */}
        <p className="text-sm text-white/70">
          Based in Dubai • Serving clients in UAE, India & worldwide
        </p>
        <p className="text-xs sm:text-sm text-white/60">
          30% advance · Delivery in 3–7 days · 100% refund if unsatisfied
        </p>
      </motion.div>
    </section>
  );
}
