"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "software-dev": <Code className="w-5 h-5 text-[#00E676]" />,
  "web-dev": <Globe className="w-5 h-5 text-[#00E676]" />,
  "ecommerce-dev": <ShoppingCart className="w-5 h-5 text-[#00E676]" />,
  "mobile-dev": <Smartphone className="w-5 h-5 text-[#00E676]" />,
  "erp-crm-dev": <Cpu className="w-5 h-5 text-[#00E676]" />,
  "erp-custom-software": <Cpu className="w-5 h-5 text-[#00E676]" />,
  "custom-software": <Cpu className="w-5 h-5 text-[#00E676]" />,
  "digital-marketing": <TrendingUp className="w-5 h-5 text-[#00E676]" />,
};

const SERVICE_DETAILS: Record<
  string,
  { capabilities: string[]; tags: string[] }
> = {
  "software-dev": {
    capabilities: [
      "Custom enterprise architecture built with modern, resilient tech stacks.",
      "High-concurrency API integrations, microservices, and workflow automation.",
      "Strict ISO-level security standards, data compliance, and 99.9% uptime SLA.",
    ],
    tags: ["#Enterprise", "#CloudArchitecture", "#APIIntegration", "#Scalability"],
  },
  "web-dev": {
    capabilities: [
      "Next.js App Router & Server Components for sub-second page rendering.",
      "Headless CMS integration & automated SEO metadata architecture.",
      "Responsive design systems optimized for conversion across all viewports.",
    ],
    tags: ["#NextJS", "#HeadlessCMS", "#WebPerformance", "#SEO"],
  },
  "ecommerce-dev": {
    capabilities: [
      "High-conversion checkout funnels with multi-payment gateway integration.",
      "Automated inventory sync & ERP integration for multi-channel sales.",
      "Optimized mobile shopping experiences with fast page rendering.",
    ],
    tags: ["#Ecommerce", "#ConversionRate", "#PaymentGateway", "#InventorySync"],
  },
  "mobile-dev": {
    capabilities: [
      "Cross-platform Flutter & React Native native performance.",
      "Intuitive UI/UX design with smooth micro-animations and gesture controls.",
      "Offline-first sync & push notification infrastructure.",
    ],
    tags: ["#iOS", "#Android", "#Flutter", "#MobileUX"],
  },
  "erp-crm-dev": {
    capabilities: [
      "Unified ERP (finance, inventory, HR) & CRM sales pipeline tracking.",
      "Custom role-based permissions, automated approval flows & audit trails.",
      "Real-time business analytics dashboards & single source of truth reporting.",
    ],
    tags: ["#ERP", "#CRM", "#WorkflowAutomation", "#BusinessManagement"],
  },
  "erp-custom-software": {
    capabilities: [
      "Integrated HRMS, inventory, finance, and CRM modules in one portal.",
      "Custom role-based permissions, automated approval flows & audit trails.",
      "Real-time business analytics dashboards & automated report generation.",
    ],
    tags: ["#ERP", "#CustomSoftware", "#HRMS", "#WorkflowAutomation"],
  },
  "custom-software": {
    capabilities: [
      "Bespoke software tailored around your exact operational workflows.",
      "Seamless integration with legacy databases and third-party SaaS APIs.",
      "Custom automation scripts reducing manual workload by up to 60%.",
    ],
    tags: ["#CustomSoftware", "#Automation", "#Integrations", "#Scalability"],
  },
  "digital-marketing": {
    capabilities: [
      "Data-backed performance marketing tied directly to CAC & ROI metrics.",
      "Technical & content SEO strategies for top search engine rankings.",
      "Cohesive multi-channel branding & digital campaign management.",
    ],
    tags: ["#SEO", "#GrowthMarketing", "#Branding", "#Analytics"],
  },
};

function ServiceCard({
  service,
  index,
  onOpenModal,
}: {
  service: Service;
  index: number;
  onOpenModal: (index: number) => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card group relative flex flex-col justify-between w-[310px] sm:w-[360px] md:w-[400px] h-[450px] sm:h-[460px] p-5 sm:p-6 border border-white/10 shrink-0 select-none overflow-hidden"
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
          <p className="text-xs sm:text-sm font-medium text-white/80 leading-relaxed line-clamp-2">
            {service.subHead}
          </p>
        </div>

        {/* Action Buttons Row (Learn More & Consult our engineers) */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenModal(index)}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#00E676] text-white hover:text-black text-xs font-bold transition-all border border-white/15 hover:border-[#00E676] shadow-sm flex items-center gap-1.5 group/btn cursor-pointer"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
          </button>

          <a
            href="#contact"
            className="text-xs font-semibold text-[#9CA3AF] hover:text-[#00E676] flex items-center gap-1 transition-colors group/link"
          >
            <span>Consult our engineers</span>
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesWorks() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard navigation & Esc key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") {
        setSelectedIdx(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) =>
          prev === 0 ? SITE_DATA.services.length - 1 : prev! - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIdx((prev) =>
          prev === SITE_DATA.services.length - 1 ? 0 : prev! + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll to horizontal card translation
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const activeService =
    selectedIdx !== null ? SITE_DATA.services[selectedIdx] : null;
  const activeDetails =
    activeService && SERVICE_DETAILS[activeService.id]
      ? SERVICE_DETAILS[activeService.id]
      : {
          capabilities: [
            "Tailored enterprise software engineering & modular architecture.",
            "Seamless API integrations, performance tuning & data security.",
            "End-to-end support with 99.9% availability SLA.",
          ],
          tags: ["#SoftwareEngineering", "#Enterprise", "#CustomSolutions"],
        };

  return (
    <section
      ref={targetRef}
      id="services"
      className="relative min-h-[300vh] bg-transparent"
    >
      {/* Pinned Sticky Viewport Container */}
      <div className="sticky top-0 h-screen flex flex-col justify-start overflow-hidden pt-24 md:pt-28 pb-6">
        {/* Section Header */}
        <div className="w-full px-6 md:px-12 mb-4 sm:mb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
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
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onOpenModal={(i) => setSelectedIdx(i)}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll Progress Bar Indicator */}
        <div className="w-full px-6 md:px-12 mt-4 sm:mt-6">
          <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] mb-2">
            <span>01 // CAPABILITIES</span>
            <span>0{SITE_DATA.services.length} // FULL SUITE</span>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ width: progressWidth }}
              className="h-full bg-[#00E676] shadow-[0_0_10px_#00E676]"
            />
          </div>
        </div>
      </div>

      {/* FULL DETAILED SERVICE MODAL (Styled like Reference Image 2) */}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {activeService && selectedIdx !== null && (
              <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop Blur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setSelectedIdx(null)}
                  className="fixed inset-0 bg-black/90 backdrop-blur-xl"
                  aria-hidden="true"
                />

                {/* Modal Container */}
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  initial={{ opacity: 0, scale: 0.88, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative z-10 w-full max-w-[460px] sm:max-w-[500px] max-h-[90dvh] flex flex-col bg-[#0A0E14] border border-[#00E676]/40 rounded-3xl p-5 sm:p-6 shadow-[0_0_80px_rgba(0,230,118,0.25)] overflow-hidden m-auto"
                >
                  {/* Internal Cosmic Nebula Glows */}
                  <div className="absolute -top-28 -right-28 w-60 h-60 rounded-full bg-[#00E676]/15 blur-[80px] pointer-events-none" />
                  <div className="absolute -bottom-28 -left-28 w-60 h-60 rounded-full bg-[#00E5FF]/10 blur-[80px] pointer-events-none" />

                  {/* Close Button X */}
                  <button
                    type="button"
                    onClick={() => setSelectedIdx(null)}
                    aria-label="Close details"
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white transition-all hover:scale-105 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Scrollable Content Body */}
                  <div className="overflow-y-auto flex-1 min-h-0 space-y-4 pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    {/* Core Header */}
                    <div className="flex items-start gap-3.5 pr-8">
                      <div className="relative shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-[#00E676]/50 shadow-[0_0_20px_rgba(0,230,118,0.3)]">
                        <div className="absolute -inset-1 rounded-2xl bg-[#00E676]/25 blur-sm pointer-events-none" />
                        <div className="relative z-10">
                          {SERVICE_ICONS[activeService.id] || (
                            <Layers className="w-5 h-5 text-[#00E676]" />
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                          {activeService.title}
                        </h4>
                        <span className="text-xs font-mono font-bold text-[#00E676]">
                          0{selectedIdx + 1} // {activeService.tag}
                        </span>
                      </div>
                    </div>

                    {/* Detailed Paragraph Text Box (Moved from homepage card!) */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-white/90 text-xs sm:text-sm leading-relaxed">
                      {activeService.body}
                    </div>

                    {/* Performance Metric Banner */}
                    <div className="p-4 rounded-2xl border border-[#00E676]/30 bg-[#00E676]/[0.06] flex items-center justify-between">
                      <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#00E676] tracking-tight font-mono">
                          {activeService.metrics}
                        </div>
                        <div className="text-xs text-[#9CA3AF] font-medium mt-0.5">
                          Average Measured Impact
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#00E676] px-3 py-1 rounded-full border border-[#00E676]/40 bg-[#00E676]/10 uppercase">
                        STANDARD
                      </span>
                    </div>

                    {/* Key Capabilities List */}
                    <div>
                      <h5 className="text-[11px] font-mono font-bold tracking-widest text-[#9CA3AF] uppercase mb-2.5">
                        KEY CAPABILITIES
                      </h5>
                      <div className="space-y-2">
                        {activeDetails.capabilities.map((cap, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-white/90 leading-normal"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#00E676] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags row */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {activeDetails.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Navigation Controls */}
                  <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIdx((prev) =>
                          prev === 0 ? SITE_DATA.services.length - 1 : prev! - 1
                        )
                      }
                      className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Prev</span>
                    </button>

                    <span className="text-[10px] font-mono text-[#9CA3AF] uppercase hidden sm:inline-block">
                      ESC OR CLICK OUTSIDE TO CLOSE
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        setSelectedIdx((prev) =>
                          prev === SITE_DATA.services.length - 1
                            ? 0
                            : prev! + 1
                        )
                      }
                      className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}

export default ServicesWorks;
