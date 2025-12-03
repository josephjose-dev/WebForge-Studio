"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PulseCartStudio() {
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
            Case Study · Brand & Ecommerce-ready Website
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            PulseCart Studio — conversion-focused layout for an online brand
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-base md:text-lg text-white/75 max-w-2xl"
          >
            A modern product-first website concept designed for small brands
            that want to sell online, tell their story and send traffic from
            ads or Instagram to a high-conversion homepage.
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {[
              "eCommerce Ready",
              "Brand Website",
              "Conversion Design",
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
              { label: "Industry", value: "DTC / Small Brand" },
              { label: "Project Type", value: "Brand + Storefront" },
              { label: "Focus", value: "Sales & Storytelling" },
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
            Many smaller brands either use a generic marketplace listing or a
            basic theme that doesn’t tell their story. PulseCart Studio needed a
            homepage that:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-white/75 space-y-2">
            <li>Highlights hero products and collections clearly</li>
            <li>Explains the brand story and what makes it different</li>
            <li>
              Guides visitors from discovery to “Add to cart” or “Shop now”
            </li>
            <li>
              Leaves space for future integration with Shopify, Stripe or other
              checkout systems
            </li>
          </ul>
        </section>

        {/* Solution / Structure */}
        <section className="py-10 border-t border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The solution — product-first, story-backed layout
          </h2>
          <p className="text-sm md:text-base text-white/75 mb-4">
            I designed a layout that puts products and brand at the centre,
            avoiding clutter and focusing on clear actions:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                1. Hero with primary product and offer
              </h3>
              <p className="text-sm md:text-base text-white/70">
                The hero section features a key product or collection, with a
                clear value statement and a single primary CTA (“Shop the
                collection”). This makes paid ad traffic land somewhere focused,
                not on a generic homepage.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">
                2. Product grid & featured categories
              </h3>
              <p className="text-sm md:text-base text-white/70">
                A simple, clean grid for hero products and categories, designed
                to work well with future cart functionality or external store
                links (Shopify, Gumroad, etc.).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">
                3. Brand story & social proof
              </h3>
              <p className="text-sm md:text-base text-white/70">
                A storytelling block that explains the brand’s mission, who it
                serves and why it exists, plus room for reviews or press logos
                to build trust before purchase.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">
                4. Email / lead capture section
              </h3>
              <p className="text-sm md:text-base text-white/70">
                A simple section for newsletter or launch waitlist sign-ups,
                giving the brand a way to capture visitors even if they don’t
                buy immediately.
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
              <h3 className="font-semibold text-white">
                Designed for mobile shopping
              </h3>
              <p>
                The layout keeps cards large, tap targets comfortable and copy
                short, making it easy to browse on phones where most DTC
                customers shop.
              </p>
              <h3 className="font-semibold text-white">
                Flexible for any platform
              </h3>
              <p>
                The structure can be wired into Shopify, Stripe, or any other
                checkout solution later without changing the visual hierarchy.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-white">
                Visual hierarchy for decisions
              </h3>
              <p>
                Hero → key products → story → social proof → final CTA. This
                sequence mirrors how people decide whether to trust a new brand
                and try their products.
              </p>
              <h3 className="font-semibold text-white">
                Reusable across niches
              </h3>
              <p>
                The same system can be adapted to skincare, apparel, digital
                products or any niche, by swapping imagery, colours and copy.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-10 border-t border-white/5 mt-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Want a conversion-focused site for your brand or store?
            </h2>
            <p className="text-sm md:text-base text-white/75 mb-6">
              If you run a small brand or are planning to launch a product line,
              I can design a homepage or full website like this and connect it
              to your preferred ecommerce platform.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-sm md:text-base font-semibold transition-colors"
            >
              Discuss an ecommerce project
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
