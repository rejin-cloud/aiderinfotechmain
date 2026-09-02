"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SITE_DATA } from "@/data/content";
import { Award, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

function CounterItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1600; // 1.6s

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * value));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4 py-6">
      <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight flex items-center justify-center font-mono">
        <span>{count}</span>
        <span className="text-[#00E676] ml-1 text-3xl sm:text-4xl">{suffix}</span>
      </div>
      <span className="mt-3 text-xs sm:text-sm font-medium text-[#9CA3AF] tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

export function StatsAndBadges() {
  const duplicatedAwards = [...SITE_DATA.awards, ...SITE_DATA.awards];

  return (
    <section className="relative py-20 border-y border-white/10 bg-[#0A0E14]/60 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Stats Grid */}
        <div className="glass-card grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 p-4 sm:p-6 mb-20 shadow-xl">
          {SITE_DATA.stats.map((stat, idx) => (
            <CounterItem
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        {/* Awards & Certifications Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Accreditations & Industry Standards</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Recognized for Engineering Excellence
          </h3>
        </div>

        {/* Infinite Horizontal Marquee */}
        <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
            {duplicatedAwards.map((item, index) => (
              <div
                key={index}
                className="glass-card px-6 py-4 flex items-center gap-3.5 whitespace-nowrap border border-white/10 hover:border-[#00E676]/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#00E676]/10 flex items-center justify-center text-[#00E676]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-white tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-xs text-[#9CA3AF]">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaborators / Client Brands Grid */}
        <div className="mt-24">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF]">
              Our Esteemed Collaborators Worldwide
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {SITE_DATA.clients.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass-card p-5 flex flex-col items-center justify-center text-center group hover:border-[#00E676]/40"
              >
                <span className="text-sm font-bold text-white/90 group-hover:text-white transition-colors">
                  {client.name}
                </span>
                <span className="text-[11px] text-[#9CA3AF] mt-1 font-mono">
                  {client.sector}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
