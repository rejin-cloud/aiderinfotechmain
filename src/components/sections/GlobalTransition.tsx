"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE_DATA } from "@/data/content";
import { Globe, ArrowUpRight } from "lucide-react";

export function GlobalTransition() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.15, 0.45, 0.7, 0.9], [0, 1, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0.92, 1, 1.04]);
  const glow = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.1, 0.4, 0.1]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative min-h-[80vh] flex items-center justify-center py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <motion.div
        style={{ opacity: glow }}
        className="absolute w-[600px] h-[600px] rounded-full bg-[#00E676]/15 blur-[120px] pointer-events-none -z-10"
      />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00E676] tracking-widest uppercase mb-8">
          <Globe className="w-3.5 h-3.5" />
          <span>{SITE_DATA.transitionBlock.subtitle}</span>
        </div>

        {/* Big centered emerging heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-8">
          {SITE_DATA.transitionBlock.heading}
        </h2>

        {/* Secondary hero body text from brand copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#9CA3AF] max-w-3xl leading-relaxed mb-10 font-normal">
          {SITE_DATA.secondaryHero.body}
        </p>

        {/* Vision & Mission quick pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left mt-4">
          <div className="glass-card p-6 border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00E676] block mb-2">
              Our Vision
            </span>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              {SITE_DATA.visionMission.vision}
            </p>
          </div>

          <div className="glass-card p-6 border border-white/10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00E676] block mb-2">
              Our Mission
            </span>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              {SITE_DATA.visionMission.mission}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
