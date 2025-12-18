"use client";



export default function Pricing() {
  const plans = [
    {
      name: "Landing Page Launch",
      description: "High-conversion landing page for a single offer or service.",
      features: [
        "1-page layout with hero, benefits, proof and CTA",
        "Mobile-first design that loads fast on 4G",
        "Basic SEO setup (titles, meta, sections)",
        "Contact / enquiry form connected to your email",
        "Delivery in 3–5 days after content is shared",
      ],
      priceINR: "From ₹4,999",
      popular: false,
    },
    {
      name: "Portfolio Website",
      description:
        "Perfect for students, freelancers and creators who need a strong online presence.",
      features: [
        "Multi-section site (Home, About, Work, Contact)",
        "Up to 6 projects/case studies showcased cleanly",
        "Contact form + social links integration",
        "SEO-ready structure for your name/brand searches",
        "Delivery in 5–7 days after content is shared",
      ],
      priceINR: "From ₹8,999",
      popular: true,
    },
    {
      name: "Business Website",
      description:
        "For growing local and online businesses that want more enquiries and trust.",
      features: [
        "Up to 5–7 custom pages (Home, Services, About, FAQ, Contact, etc.)",
        "Service page structure designed for Google & local search",
        "Enquiry/contact form funnel with clear CTAs",
        "Optional WhatsApp/chat handoff after form submission",
        "Delivery timeline based on scope (usually 7–10 days)",
      ],
      priceINR: "From ₹14,999",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0f0f12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, flexible pricing
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Transparent packages for startups, freelancers and small businesses.
            Get a clear starting point for your project.
          </p>
          <p className="mt-3 text-sm text-white/50">
            30% advance to start • 70% on final delivery • 100% refund if you’re
            not satisfied with the final version
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const price = plan.priceINR;
            const currencyLabel = "INR";

            return (
              <div
                key={plan.name}
                className={`relative bg-black/40 backdrop-blur-xl rounded-2xl shadow-lg p-8 border ${plan.popular
                  ? "border-purple-500/50 transform scale-105 glow-purple"
                  : "border-white/10"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/70 mb-4">{plan.description}</p>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      {price}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/50">
                      {currencyLabel} · starting price
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-[2px]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-sm transition-colors ${plan.popular
                    ? "bg-purple-500 text-white hover:bg-purple-600"
                    : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Discuss this package
                </button>
              </div>
            );
          })}
        </div>

        {/* Free concept CTA */}
        <div className="mt-14 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Not sure which package is right for you?
          </h3>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Send your business or Instagram name — I’ll show you a quick,
            no-pressure homepage concept based on your niche and budget.
          </p>

          <a
            href="#contact"
            className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all"
          >
            Get Free Homepage Concept
          </a>
        </div>

        {/* Notes */}
        <div className="mt-10 max-w-3xl mx-auto text-center text-sm text-white/60 space-y-2">
          <p>
            Domain and hosting costs are separate and paid directly to the
            provider (Hostinger, GoDaddy, Namecheap, etc.). I can help you pick
            the best option for your budget.
          </p>
          <p>
            Payments via UPI / bank transfer for INR. Invoice available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
