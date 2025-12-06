"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SkylineEstates() {
  return (
    <div className="min-h-screen bg-[#050509] text-white">
      {/* Back Button */}
      <div className="sticky top-4 left-0 z-30 px-4 sm:px-6 lg:px-8 pt-4">
        <Link
          href="/#gallery"
          className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-lg border border-white/10 hover:border-purple-500/50 transition-colors text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to projects
        </Link>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Hero / Intro */}
        <section className="pt-6 md:pt-10 pb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-[0.2em] text-purple-300/80 mb-3"
          >
            Case Study · Real Estate Website Concept
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Skyline Estates — premium property website built for trust and
            enquiries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-base md:text-lg text-white/75 max-w-2xl"
          >
            A clean, modern layout for a real estate brand that needs to show
            premium properties, build trust quickly and guide visitors toward
            booking a viewing or contacting an agent.
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {[
              "Business Website",
              "Real Estate",
              "Local SEO",
              "Demo Concept",
            ].map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-[0.16em] bg-white/5 border border-white/10 text-white/70 px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </section>

        {/* Overview Stats */}
        <section className="pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Industry", value: "Real Estate" },
              { label: "Project Type", value: "Business Website" },
              { label: "Focus", value: "Listing & Enquiries" },
              { label: "Tech Stack", value: "Next.js · Tailwind · Framer Motion" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-black/40 border border-white/10 rounded-xl px-4 py-3"
              >
                <div className="text-xs text-white/50 mb-1">{item.label}</div>
                <div className="text-sm font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem / Goals */}
        <section className="py-10 border-t border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">The challenge</h2>
          <p className="text-sm md:text-base text-white/75 mb-4">
            Many real estate websites either look outdated or feel like generic
            listing portals. Skyline Estates needed a site that:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-white/75 space-y-2">
            <li>Showcases high-value properties with a premium feel</li>
            <li>Makes it easy to browse by category and location</li>
            <li>Highlights the brand’s expertise and trustworthiness</li>
            <li>
              Encourages visitors to request a call-back, WhatsApp chat or
              property viewing
            </li>
          </ul>
        </section>

        {/* Solution / Structure */}
        <section className="py-10 border-t border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The solution — a calm, trust-first layout
          </h2>
          <p className="text-sm md:text-base text-white/75 mb-4">
            I designed a structure that feels premium but simple to browse,
            focusing on clarity over complexity:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                1. Hero with key value proposition
              </h3>
              <p className="text-sm md:text-base text-white/70">
                A clean hero section that introduces Skyline Estates and
                positions it as a trusted partner for premium properties,
                supported by a primary call to action to view listings or talk
                to an agent.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">
                2. Featured properties & categories
              </h3>
              <p className="text-sm md:text-base text-white/70">
                A grid of highlighted properties and quick filters (apartments,
                villas, commercial) so visitors can see what’s possible in a few
                seconds, instead of scrolling endlessly through generic cards.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">
                3. Why work with Skyline section
              </h3>
              <p className="text-sm md:text-base text-white/70">
                A credibility block that explains experience, locations covered,
                and the team’s approach to service — important for both local
                and international buyers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">
                4. Simple enquiry pathways
              </h3>
              <p className="text-sm md:text-base text-white/70">
                Clear CTAs to contact via form, WhatsApp or phone, instead of
                burying contact info in the footer. This turns the site into a
                lead-generation tool rather than just a catalogue.
              </p>
            </div>
          </div>
        </section>

        {/* Conversion & UX Notes */}
        <section className="py-10 border-t border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Conversion and UX considerations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base text-white/75">
            <div className="space-y-3">
              <h3 className="font-semibold text-white">Balanced visuals</h3>
              <p>
                Real estate needs strong photos, but too many can slow the page
                and distract from actions. The layout uses large hero imagery
                plus focused property blocks and avoids cluttered galleries.
              </p>
              <h3 className="font-semibold text-white">Local SEO-ready</h3>
              <p>
                Sections are structured for city and area keywords (e.g. “Flats
                in Dubai Marina”, “Villas in Jumeirah”), making it easier to
                expand into SEO content later.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-white">
                Smooth path to enquiry
              </h3>
              <p>
                Instead of just a “Contact” page, enquiry options are placed
                contextually throughout the layout, so visitors can reach out
                without losing their place.
              </p>
              <h3 className="font-semibold text-white">
                Reusable for other agencies
              </h3>
              <p>
                The same structure can be adapted for other agencies by swapping
                branding, content and cities, keeping the conversion-focused
                flow intact.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-10 border-t border-white/5 mt-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Want a property website like this for your real estate brand?
            </h2>
            <p className="text-sm md:text-base text-white/75 mb-6">
              I can adapt this concept to your locations, audience and
              inventory, and build a fast, trustworthy website that brings in
              more qualified enquiries.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-sm md:text-base font-semibold transition-colors"
            >
              Discuss a real estate project
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
