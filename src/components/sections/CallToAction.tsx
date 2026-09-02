"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, PhoneCall, Mail } from "lucide-react";
import { SITE_DATA } from "@/data/content";

export function CallToAction() {
  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card relative p-10 sm:p-14 md:p-20 border border-white/15 overflow-hidden text-center flex flex-col items-center">
          {/* Glowing Ambient Spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#00E676]/15 blur-[120px] pointer-events-none" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Your Next Milestone</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mb-6">
            Ready to transform your business with a powerful digital solution?
          </h2>

          {/* Subtitle / Closing body */}
          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed mb-10">
            Let's build something exceptional together. Contact Aider Infotech today to discuss your software, web, mobile, or digital transformation goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+918137837374"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00E676] text-[#0A0E14] font-bold text-base hover:bg-[#00c966] transition-all duration-300 shadow-[0_0_30px_rgba(0,230,118,0.35)] hover:shadow-[0_0_40px_rgba(0,230,118,0.5)] active:scale-98"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Call Us: +91 8137837374</span>
            </a>

            <a
              href="mailto:info@aiderinfotech.com"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-semibold text-base transition-all duration-300"
            >
              <Mail className="w-5 h-5 text-[#9CA3AF]" />
              <span>Email Our Team</span>
            </a>
          </div>

          {/* Calicut Location Tagline */}
          <div className="mt-12 pt-8 border-t border-white/10 text-xs font-mono text-[#9CA3AF]">
            CALICUT HQ: 3RD FLOOR, CITY CORNER BUILDING, OPP. BISMI HYPERMARKET, NADAKKAV
          </div>
        </div>
      </div>
    </section>
  );
}
