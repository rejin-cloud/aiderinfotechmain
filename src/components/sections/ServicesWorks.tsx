"use client";

import React, { useRef } from "react";
import Image from "next/image";
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
  "software-dev": <Code className="w-5 h-5 text-[#00E676]" />,
  "web-dev": <Globe className="w-5 h-5 text-[#00E676]" />,
  "ecommerce-dev": <ShoppingCart className="w-5 h-5 text-[#00E676]" />,
  "mobile-dev": <Smartphone className="w-5 h-5 text-[#00E676]" />,
  "custom-software": <Cpu className="w-5 h-5 text-[#00E676]" />,
  "digital-marketing": <TrendingUp className="w-5 h-5 text-[#00E676]" />,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card group relative flex flex-col justify-between w-[310px] sm:w-[360px] md:w-[400px] h-[510px] sm:h-[520px] p-5 sm:p-6 border border-white/10 shrink-0 select-none overflow-hidden"
    >
      {/* Background radial glow on card hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/80 to-transparent z-0 opacity-90 transition-opacity group-hover:opacity-95 pointer-events-none" />

      {/* Decorative subtle grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-20" />

      {/* Top Preview Image Container */}
      <div className="relative z-10 w-full h-[160px] sm:h-[175px] rounded-xl overflow-hidden border border-white/10 group-hover:border-[#00E676]/40 transition-colors shrink-0 bg-[#0A0E14]/80">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 310px, (max-width: 768px) 360px, 400px"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="eager"
          priority
        />

        {/* Subtle cinematic gradient overlay over image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14]/90 via-[#0A0E14]/25 to-transparent pointer-events-none" />

        {/* Floating Badges inside Image Header */}
        <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none">
          <div className="w-9 h-9 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center group-hover:border-[#00E676]/50 group-hover:shadow-[0_0_12px_rgba(0,230,118,0.25)] transition-all">
            {SERVICE_ICONS[service.id] || <Layers className="w-4 h-4 text-[#00E676]" />}
          </div>
          <span className="text-[11px] font-mono text-[#00E676] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#00E676]/30 shadow-sm">
            0{index + 1} // {service.tag}
          </span>
        </div>
      </div>

      {/* Bottom Content anchored */}
      <div className="relative z-10 flex flex-col flex-1 justify-between mt-3.5">
        <div>
          <div className="mb-1.5">
            <span className="text-[11px] font-mono text-[#9CA3AF] tracking-wider uppercase">
              {service.metrics}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-[#00E676] transition-colors flex items-center justify-between">
            <span>{service.title}</span>
            <ArrowUpRight className="w-5 h-5 text-[#9CA3AF] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </h3>
          <p className="text-xs sm:text-sm font-medium text-white/80 mb-1.5 line-clamp-2">
            {service.subHead}
          </p>
          <p className="text-xs text-[#9CA3AF] leading-relaxed line-clamp-3">
            {service.body}
          </p>
        </div>

        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
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
      <div className="sticky top-0 h-screen flex flex-col justify-start overflow-hidden pt-24 md:pt-28 pb-6">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-4 sm:mb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-2 sm:mb-3">
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
          <motion.div style={{ x }} className="flex gap-6 w-max py-2">
            {SITE_DATA.services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar Indicator */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-4 sm:mt-6">
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
