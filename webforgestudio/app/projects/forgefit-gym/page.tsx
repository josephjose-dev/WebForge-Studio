"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ForgeFitGym() {
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
            Case Study · Fitness Landing Page Concept
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            ForgeFit Gym — landing page built for trial sign-ups and
            memberships
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-base md:text-lg text-white/75 max-w-2xl"
          >
            A high-energy landing page concept for a modern fitness brand.
            Designed to convert social media traffic into trial bookings and
            long-term memberships, with a clear structure for programs, trainers
            and pricing.
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {["Landing Page", "Fitness", "Lead Generation", "Demo Concept"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[11px] uppercase tracking-[0.16em] bg-white/5 border border-white/10 text-white/70 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </section>

        {/* Overview Stats */}
        <section className="pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Industry", value: "Fitness / Gym" },
              { label: "Project Type", value: "Landing Page" },
              { label: "Focus", value: "Trials & Memberships" },
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The challenge
          </h2>
          <p className="text-sm md:text-base text-white/75 mb-4">
            Many local gyms rely heavily on Instagram and word of mouth, but
            send all traffic to either a generic Google listing or a basic
            brochure website. ForgeFit needed a homepage that could:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-white/75 space-y-2">
            <li>Capture interest from social media ads and stories</li>
            <li>Explain programs quickly without overwhelming visitors</li>
            <li>
              Make it simple to book a free trial or start a membership online
            </li>
            <li>Build trust through trainers, testimonials and clear pricing</li>
          </ul>
        </section>

        {/* Solution / Structure */}
        <section className="py-10 border-t border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            The solution — a focused, conversion-ready layout
          </h2>
          <p className="text-sm md:text-base text-white/75 mb-4">
            I designed a single-page layout that guides visitors from awareness
            to action in a few clear sections:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                1. Hero: positioning + primary actions
              </h3>
              <p className="text-sm md:text-base text-white/70">
                A bold hero with ForgeFit’s name, short tagline and two primary
                calls to action — “Start membership” and “Book a free trial”.
                This makes it easy for both ready-to-commit and
                still-deciding visitors to take the next step.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">
                2. Programs overview
              </h3>
              <p className="text-sm md:text-base text-white/70">
                A three-card section for Strength Training, Conditioning and
                Personal Training. Each card gives a quick benefit-driven
                explanation instead of long paragraphs, so visitors can scan and
                understand what’s on offer in a few seconds.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">
                3. Trainers for trust
              </h3>
              <p className="text-sm md:text-base text-white/70">
                Trainer cards introduce the coaching team, their specialties and
                roles. This builds trust and makes the gym feel more personal,
                which is especially important for higher-priced memberships.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">
                4. Membership plans with clear value steps
              </h3>
              <p className="text-sm md:text-base text-white/70">
                Three tiered plans (Basic, Pro, Elite) use clear pricing,
                included features and one highlighted “Most Popular” plan. This
                gives the visitor a simple ladder of value and reduces decision
                friction.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">
                5. Social proof and final CTA
              </h3>
              <p className="text-sm md:text-base text-white/70">
                Member testimonials close the page, followed by a final call to
                action to get in touch. On a real project, this would be
                connected to a booking system, WhatsApp or a lead capture form.
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
              <h3 className="font-semibold text-white">Built for mobile first</h3>
              <p>
                Most traffic for local gyms comes from Instagram and WhatsApp on
                mobile. The layout is designed mobile-first, with stacked
                sections, large tap targets and clear CTAs.
              </p>
              <h3 className="font-semibold text-white">
                Clear scroll journey
              </h3>
              <p>
                Each section answers a specific question a visitor has:
                “What&apos;s this gym?”, “What do they offer?”, “Who will train
                me?”, “How much does it cost?”, and “What do others say?”
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-white">
                Reusable for other gyms
              </h3>
              <p>
                This structure can be quickly adapted for other fitness brands
                by swapping branding, photography, copy and pricing, while
                keeping the same conversion-focused flow.
              </p>
              <h3 className="font-semibold text-white">
                Tech stack for speed
              </h3>
              <p>
                Built using Next.js + Tailwind CSS + Framer Motion for smooth
                animations without sacrificing performance, which helps with SEO
                and user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-10 border-t border-white/5 mt-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Want a landing page like this for your gym or studio?
            </h2>
            <p className="text-sm md:text-base text-white/75 mb-6">
              Whether you run a gym, yoga studio or online coaching business, I
              can adapt this structure to your brand and build a fast,
              conversion-focused website that turns visitors into members.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-sm md:text-base font-semibold transition-colors"
            >
              Discuss a similar project
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
