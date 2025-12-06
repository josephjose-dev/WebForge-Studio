"use client";

import StatCard from "./StatCard";

const stats = [
  { value: "3+", label: "Projects delivered" },
  { value: "3–7 days", label: "Avg delivery timeline" },
  { value: "0", label: "Refunds requested" },
  { value: "< 24 hrs", label: "Response time" },
];

export default function Stats() {
  return (
    <section className="bg-[#050509] py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
