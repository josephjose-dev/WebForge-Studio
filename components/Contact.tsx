"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/918921275034?text=Hi%20I%20would%20like%20to%20discuss%20a%20website%20project";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          message:
            form.message +
            (form.whatsapp
              ? `\n\nWhatsApp: ${form.whatsapp}`
              : ""),
        }),
      });

      if (!res.ok) throw new Error();

      setForm({ name: "", email: "", message: "", whatsapp: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="py-24 bg-[#0f0f12] scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Let’s Build Your Website
        </motion.h2>

        <p className="text-lg text-white/70 mb-8">
          Send your details — I reply within 24 hours.
        </p>

        <p className="text-sm text-purple-300 mb-10">
          Prefer WhatsApp? You can message me directly below.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name *"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address *"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="tel"
            placeholder="WhatsApp Number (Optional)"
            value={form.whatsapp}
            onChange={(e) =>
              setForm({ ...form, whatsapp: e.target.value })
            }
            className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            placeholder="Tell me about your project *"
            required
            rows={4}
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm">
              Message sent successfully! 🎉
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              Something went wrong. Try again or WhatsApp me below.
            </p>
          )}
        </form>

        {/* WhatsApp CTA */}
        <div className="text-center mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M16.027 5.333c-5.867 0-10.667 4.8-10.667 10.667 0 2.027.533 3.893 1.467 5.52l-1.893 5.52 5.72-1.827c1.56.853 3.36 1.307 5.36 1.307 5.867 0 10.667-4.8 10.667-10.667 0-5.867-4.8-10.667-10.667-10.667zm5.694 15.507c-.24.667-1.36 1.293-1.88 1.36-.48.053-1.067.027-1.72-.107-2.96-.64-4.88-2.213-6.373-4.72-.987-1.667-.987-3.107-.827-3.653.16-.547.88-1.36 1.333-1.56.347-.16.8-.107 1.04.24.24.347.853 1.04.907 1.12.053.08.08.187.027.293-.32.667-.693 1.173-.88 1.44-.187.24-.387.507-.16.853.533.88 1.187 1.68 1.893 2.253.693.853 1.573 1.413 2.533 1.907.24.133.533.187.64.08.213-.08.693-.267.907-.507s.373-.613.587-.907c.213-.267.373-.427.587-.347.213.027.533.267.773.907.213.64-.027 1.12-.16 1.44z" />
            </svg>
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
