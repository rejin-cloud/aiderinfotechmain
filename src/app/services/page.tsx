import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { SITE_DATA } from "@/data/content";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Code2,
  Globe,
  ShoppingBag,
  Smartphone,
  Cpu,
  TrendingUp,
  Database,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Clock,
  Layers,
  Phone,
  Mail,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aiderinfotech.com";

export const metadata: Metadata = {
  title: "Services & IT Solutions | Aider Infotech Calicut",
  description:
    "Explore Aider Infotech's end-to-end software development, web engineering, mobile apps (iOS & Android), custom ERP/CRM automation, e-commerce, SEO, and performance digital marketing services.",
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: "Services & Enterprise IT Solutions | Aider Infotech",
    description:
      "High-velocity software engineering, responsive web apps, native mobile apps, custom ERP/CRM, and data-driven digital marketing tailored for business growth.",
    url: `${siteUrl}/services`,
    siteName: "Aider Infotech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "End-to-End Software & Digital Solutions | Aider Infotech",
    description:
      "Transform your business with custom software, mobile apps, web development, and ROI-focused digital marketing.",
  },
};

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "software-dev": <Code2 className="w-7 h-7 text-[#00E676]" />,
  "web-dev": <Globe className="w-7 h-7 text-[#00E5FF]" />,
  "ecommerce-dev": <ShoppingBag className="w-7 h-7 text-[#A855F7]" />,
  "mobile-dev": <Smartphone className="w-7 h-7 text-[#00E676]" />,
  "custom-software": <Cpu className="w-7 h-7 text-[#00E5FF]" />,
  "digital-marketing": <TrendingUp className="w-7 h-7 text-[#A855F7]" />,
  "erp-crm-dev": <Database className="w-7 h-7 text-[#00E676]" />,
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, target audience, technical requirements, and operational bottlenecks to build a precise roadmap.",
  },
  {
    step: "02",
    title: "Architecture & UI/UX Design",
    description:
      "Our designers and architects craft intuitive wireframes, interactive prototypes, and cloud microservice schemas tailored to your brand.",
  },
  {
    step: "03",
    title: "Agile Development Sprints",
    description:
      "We build robust, scalable code in 2-week sprints with continuous feedback, live staging environments, and zero technical debt.",
  },
  {
    step: "04",
    title: "QA & Security Audit",
    description:
      "Rigorous automated unit testing, end-to-end user testing, security vulnerability scans, and Core Web Vitals optimization before release.",
  },
  {
    step: "05",
    title: "Deployment & Scaling",
    description:
      "Smooth cloud deployment with automated CI/CD pipelines, 24/7 SLA infrastructure monitoring, and ongoing growth marketing support.",
  },
];

export default function ServicesPage() {
  const jsonLdServices = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/services/#webpage`,
        "url": `${siteUrl}/services`,
        "name": "Services & IT Solutions | Aider Infotech",
        "description":
          "End-to-end software development, web engineering, mobile apps, custom ERP/CRM automation, e-commerce, and digital marketing services.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "name": "Aider Infotech",
          "url": siteUrl,
        },
      },
      {
        "@type": "ItemList",
        "name": "Aider Infotech Core Services",
        "itemListElement": SITE_DATA.services.map((svc, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": svc.title,
          "description": svc.subHead,
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0E14] text-white selection:bg-[#00E676]/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdServices) }}
      />
      
      <main className="flex-1 pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto w-full">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#00E676]/60 hover:bg-[#00E676]/10 text-white/80 hover:text-[#00E676] text-xs font-mono tracking-wider font-semibold transition-all duration-300 shadow-lg group backdrop-blur-md mb-8 active:scale-95"
        >
          <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#00E676]/20 flex items-center justify-center text-[#00E676] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <span>BACK TO HOME</span>
        </Link>

        {/* Hero Section */}
        <div className="glass-card relative p-8 sm:p-14 border border-white/10 rounded-3xl overflow-hidden mb-16 shadow-2xl">
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              <span>AIDER INFOTECH // OUR EXPERTISE & SERVICES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.12]">
              End-to-End Digital & <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] via-[#00E5FF] to-[#A855F7]">
                Software Engineering Services
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-3xl">
              From enterprise software automation and high-concurrency web platforms to mobile applications and data-driven marketing, we build technology solutions designed for scale, speed, and tangible business impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#all-services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00E676] text-black text-sm font-bold shadow-[0_0_20px_rgba(0,230,118,0.4)] hover:bg-white transition-all group"
              >
                <span>Browse All Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold transition-all"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Core Services Showcase */}
        <section id="all-services" aria-label="Our Complete Services Portfolio" className="mb-24 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#00E676] uppercase tracking-widest block mb-3">
              WHAT WE BUILD & DELIVER
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Comprehensive Service Offerings
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              Every service is engineered by senior developers, UI/UX strategists, and marketing specialists to help your business achieve long-term market leadership.
            </p>
          </div>

          <div className="space-y-12">
            {SITE_DATA.services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="glass-card p-8 sm:p-12 border border-white/10 rounded-3xl transition-all duration-300 hover:border-[#00E676]/40 scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Text & Content Column */}
                    <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                          {SERVICE_ICONS[service.id] || <Layers className="w-7 h-7 text-[#00E676]" />}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-[#00E676] uppercase tracking-widest block">
                            {service.tag}
                          </span>
                          <span className="text-xs font-semibold text-[#00E5FF] block">
                            {service.metrics}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                        {service.title}
                      </h3>

                      <p className="text-base font-medium text-white/90 mb-4 leading-snug">
                        {service.subHead}
                      </p>

                      <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-6">
                        {service.body}
                      </p>

                      <div className="flex flex-wrap gap-4 items-center pt-2">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00E676] text-black font-bold text-sm shadow-[0_0_15px_rgba(0,230,118,0.3)] hover:bg-white transition-all group"
                        >
                          <span>Enquire About {service.title}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Image Column */}
                    <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                      <div className="relative h-[280px] sm:h-[340px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-transparent opacity-60" />
                        <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                          <span className="text-xs font-mono text-[#00E676] font-semibold block">
                            {service.metrics}
                          </span>
                          <span className="text-xs text-white/80 line-clamp-1">
                            {service.title} • Aider Infotech Calicut
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process / How We Deliver Section */}
        <section aria-label="Our Delivery Process" className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-widest block mb-3">
              PRECISION ENGINEERING WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              Our structured 5-phase development workflow ensures clarity, rapid execution, robust code quality, and zero launch surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="glass-card p-6 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#00E676]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <span className="text-2xl font-mono font-extrabold text-[#00E676] block mb-3">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Guarantees / Quality Banner */}
        <div className="glass-card p-8 sm:p-12 border border-white/15 rounded-3xl mb-24 relative overflow-hidden bg-gradient-to-r from-[#0A0E14] via-[#121824] to-[#0A0E14]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <ShieldCheck className="w-10 h-10 text-[#00E676] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">Enterprise Security</h3>
              <p className="text-xs text-[#9CA3AF]">
                Bank-grade encryption, zero-trust backend architecture, and compliant data handling.
              </p>
            </div>
            <div className="p-4">
              <Zap className="w-10 h-10 text-[#00E5FF] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">Sub-Second Speed</h3>
              <p className="text-xs text-[#9CA3AF]">
                Core Web Vitals optimized rendering, CDN edge distribution, and reactive UI frameworks.
              </p>
            </div>
            <div className="p-4">
              <Clock className="w-10 h-10 text-[#A855F7] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">24/7 SLA Maintenance</h3>
              <p className="text-xs text-[#9CA3AF]">
                Dedicated support engineers, automated server monitoring, and continuous system updates.
              </p>
            </div>
          </div>
        </div>

        {/* Start Your Project / CTA Section */}
        <div className="glass-card p-8 sm:p-14 border border-white/15 rounded-3xl relative overflow-hidden text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#00E676] uppercase tracking-widest block mb-3">
              START YOUR PROJECT TODAY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Accelerate Your Digital Transformation?
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] mb-8 leading-relaxed">
              Talk to our technology architects and digital strategists today to outline your scope, timeline, and custom cost estimate.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#00E676] text-black font-bold text-sm shadow-[0_0_25px_rgba(0,230,118,0.4)] hover:bg-white transition-all"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="tel:+918137837374"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: +91 8137837374</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
