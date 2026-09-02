"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/data/content";
import {
  GraduationCap,
  Layers,
  TrendingUp,
  Users,
  Cpu,
  Zap,
  MessageSquare,
  ShieldCheck,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-5 h-5 text-[#00E676]" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-[#00E676]" />,
  Users: <Users className="w-5 h-5 text-[#00E676]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#00E676]" />,
  Zap: <Zap className="w-5 h-5 text-[#00E676]" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-[#00E676]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#00E676]" />,
  Award: <Award className="w-5 h-5 text-[#00E676]" />,
};

export function AcademyAndWhyUs() {
  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Aider Academy Spotlight Banner */}
        <div id="academy" className="mb-32">
          <div className="glass-card relative p-8 sm:p-12 md:p-16 border border-white/10 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#00E676]/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-6">
                  <GraduationCap className="w-4 h-4" />
                  <span>Aider Academy // Training Division</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                  {SITE_DATA.academy.heading}
                </h2>

                <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-8">
                  {SITE_DATA.academy.body}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {SITE_DATA.academy.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-white/90">
                      <CheckCircle className="w-4 h-4 text-[#00E676] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 hover:border-[#00E676]/40 text-white text-sm font-semibold transition-all group"
                >
                  <span>Inquire for Academy Admissions</span>
                  <ArrowRight className="w-4 h-4 text-[#00E676] transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Academy Visual Card */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="glass-card p-6 border border-white/10">
                  <span className="text-xs font-mono text-[#00E676] block mb-1">
                    CURRICULUM HIGHLIGHTS
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Industry-Ready Tech Programs
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      "Python",
                      "Flutter",
                      "Full Stack Dev",
                      "UI/UX Design",
                      "AI & Data Analytics",
                      "Digital Marketing",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#9CA3AF]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6 border border-white/10">
                  <span className="text-xs font-mono text-[#00E676] block mb-1">
                    CAREER ACCELERATION
                  </span>
                  <h4 className="text-lg font-bold text-white mb-1">
                    100% Placement & Internship Support
                  </h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    Personalized mentorship, resume building, and live capstone deployments bridging academic theory with high-impact industry engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us / 8 Differentiators */}
        <div id="why-us">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-4">
              <span>Why Choose Aider Infotech</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-base text-[#9CA3AF]">
              We combine deep technical rigor, transparent execution, and domain specialization to deliver measurable value for your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_DATA.differentiators.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="glass-card p-6 flex flex-col justify-between border border-white/10 group hover:border-[#00E676]/40"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-[#00E676]/40 transition-colors">
                    {ICON_MAP[item.iconName] || <CheckCircle className="w-5 h-5 text-[#00E676]" />}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E676] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-[#9CA3AF]/60">
                  0{idx + 1} // STANDARD
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
