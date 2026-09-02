"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE_DATA, Service } from "@/data/content";
import {
  Code,
  Globe,
  ShoppingCart,
  Smartphone,
  Cpu,
  TrendingUp,
  ArrowUpRight,
  Layers,
} from "lucide-react";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "software-dev": <Code className="w-6 h-6 text-[#00E676]" />,
  "web-dev": <Globe className="w-6 h-6 text-[#00E676]" />,
  "ecommerce-dev": <ShoppingCart className="w-6 h-6 text-[#00E676]" />,
  "mobile-dev": <Smartphone className="w-6 h-6 text-[#00E676]" />,
  "custom-software": <Cpu className="w-6 h-6 text-[#00E676]" />,
  "digital-marketing": <TrendingUp className="w-6 h-6 text-[#00E676]" />,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card group relative flex flex-col justify-between w-[320px] sm:w-[380px] md:w-[420px] h-[500px] p-8 border border-white/10 shrink-0 select-none overflow-hidden"
    >
      {/* Top subtle glow badge */}
      <div className="flex items-center justify-between z-10">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#00E676]/40 transition-colors">
          {SERVICE_ICONS[service.id] || <Layers className="w-6 h-6 text-[#00E676]" />}
        </div>
        <span className="text-xs font-mono text-[#00E676] bg-[#00E676]/10 px-3 py-1 rounded-full border border-[#00E676]/20">
          0{index + 1} // {service.tag}
        </span>
      </div>

      {/* Background radial glow on card hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/80 to-transparent z-0 opacity-90 transition-opacity group-hover:opacity-95" />

      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-20" />

      {/* Bottom Content anchored */}
      <div className="relative z-10 mt-auto">
        <div className="mb-2">
          <span className="text-xs font-mono text-[#9CA3AF] tracking-wider uppercase">
            {service.metrics}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00E676] transition-colors flex items-center justify-between">
          <span>{service.title}</span>
          <ArrowUpRight className="w-5 h-5 text-[#9CA3AF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </h3>
        <p className="text-sm font-medium text-white/80 mb-3 line-clamp-2">
          {service.subHead}
        </p>
        <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-4">
          {service.body}
        </p>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <a
            href="#contact"
            className="text-xs font-semibold text-white group-hover:text-[#00E676] flex items-center gap-1.5 transition-colors"
          >
            <span>Consult our engineers</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesWorks() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll to horizontal card translation
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={targetRef}
      id="services"
      className="relative min-h-[300vh] bg-transparent"
    >
      {/* Pinned Sticky Viewport Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-3">
              <span>Our Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Engineering Tailored for Growth
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-md">
            Scroll vertically to explore our comprehensive suite of modern technology and high-impact digital solutions.
          </p>
        </div>

        {/* Horizontal Carousel Track */}
        <div className="w-full pl-6 md:pl-12">
          <motion.div style={{ x }} className="flex gap-6 w-max py-4">
            {SITE_DATA.services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar Indicator */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-8">
          <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] mb-2">
            <span>01 // CAPABILITIES</span>
            <span>06 // FULL SUITE</span>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ width: progressWidth }}
              className="h-full bg-[#00E676] shadow-[0_0_10px_#00E676]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
