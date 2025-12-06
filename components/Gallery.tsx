"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Gallery() {
  const projects = [
    {
      id: 1,
      name: "ForgeFit Gym",
      subtitle: "Landing page for a modern fitness brand.",
      caseStudy:
        "High-conversion landing page concept for gyms that want more trial sign-ups and membership enquiries.",
      route: "/projects/forgefit-gym",
      thumbnail:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      tags: ["Landing Page", "Fitness", "Lead Generation"],
    },
    {
      id: 2,
      name: "Skyline Estates",
      subtitle: "Premium real estate website for property listings.",
      caseStudy:
        "Clean, trust-building layout designed to highlight premium properties and drive WhatsApp and form enquiries.",
      route: "/projects/skyline-estates",
      thumbnail:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tags: ["Business Website", "Real Estate", "Local SEO"],
    },
    {
      id: 3,
      name: "PulseCart Studio",
      subtitle: "Conversion-focused layout for an online brand.",
      caseStudy:
        "Modern e-commerce-ready design that focuses on products, storytelling and clear calls to action for sales.",
      route: "/projects/pulsecart-studio",
      thumbnail:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tags: ["eCommerce Ready", "Brand Website", "Conversion Design"],
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#0f0f12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Recent work & case studies
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A few examples of landing pages, portfolio sites and business
            websites I’ve designed for different niches.
          </p>
          <p className="mt-3 text-sm text-white/50">
            These are example projects to show style, structure and conversion
            thinking. Your website will be fully tailored to your brand.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-lg hover:shadow-purple-500/25 hover:border-purple-500/40 transition-all duration-300"
            >
              <Link href={project.route} className="block">
                <div className="aspect-w-16 aspect-h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </Link>

              <div className="p-6 flex flex-col h-full">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/60 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] uppercase tracking-[0.16em] bg-white/5 border border-white/10 text-white/70 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-white/70 leading-relaxed mb-6 flex-1">
                  {project.caseStudy}
                </p>

                <Link href={project.route} className="block">
                  <button className="w-full bg-purple-600 text-white py-2.5 px-4 rounded-lg font-semibold text-sm hover:bg-purple-700 transition-colors">
                    View case study →
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
