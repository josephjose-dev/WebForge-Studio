"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Landing Page Website",
      bestFor: "Single offers, coaches, campaigns, event pages.",
      summary:
        "A focused one-page website designed to turn cold visitors into enquiries and sign-ups.",
      features: [
        "Hero section with clear message and strong call to action",
        "Benefits and feature highlights laid out for quick scanning",
        "Social proof or simple testimonials section",
        "Contact / enquiry form or external booking link",
        "Mobile-first layout that loads fast on 4G",
      ],
    },
    {
      title: "Portfolio Website",
      bestFor: "Students, freelancers, designers, editors, photographers.",
      summary:
        "A clean personal brand or studio site that showcases your best work and makes you easy to contact.",
      features: [
        "Home + About + Work/Projects + Contact structure",
        "Project or gallery grid to highlight your best work",
        "Case study style layout for key projects (optional)",
        "Contact form plus social / platform links",
        "SEO-friendly structure for your name or brand",
      ],
    },
    {
      title: "Business Website",
      bestFor: "Gyms, clinics, agencies, local and online service businesses.",
      summary:
        "A full website designed to build trust, answer questions and drive more enquiries from the right customers.",
      features: [
        "Up to 5–7 custom pages (Home, Services, About, FAQ, Contact, etc.)",
        "Service pages structured for Google & local search",
        "Built-in enquiry/contact form funnel with clear CTAs",
        "Optional WhatsApp/chat handoff after form submission",
        "Room to add blogs, FAQs or resources later as you grow",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#0f0f12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Websites I can build for you
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Choose the type of website that fits your goals. Pricing is flexible
            based on scope and currency (USD / INR) and is detailed below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-white/80 mb-2">
                <span className="font-medium text-white/90">Best for:</span>{" "}
                {service.bestFor}
              </p>

              <p className="text-white/70 leading-relaxed text-sm mb-4">
                {service.summary}
              </p>

              <ul className="mt-2 space-y-2 text-sm text-white/70">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-purple-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-white/60 max-w-2xl mx-auto">
          Want exact costs? Check the pricing section below to see starting
          prices in USD and INR, or reach out via the contact form to get a
          custom quote.
        </p>
      </div>
    </section>
  );
}
