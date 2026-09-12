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
  GraduationCap,
  Cpu,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aiderinfotech.com";

export const metadata: Metadata = {
  title: "Specialized Departments & Business Arms | Aider Infotech Calicut",
  description:
    "Discover the specialized divisions of Aider Infotech: Aider Academy (Software & AI Training), Aider Creative (Digital Marketing & SEO), and IT Club Techstore (Hardware & Maintenance Center).",
  alternates: {
    canonical: `${siteUrl}/departments`,
  },
  openGraph: {
    title: "Specialized Departments | Aider Infotech",
    description:
      "Aider Academy (Tech Education), Aider Creative (Growth & Brand Studio), and IT Club Techstore (Custom PC Hardware & Chip-Level Repairs).",
    url: `${siteUrl}/departments`,
    siteName: "Aider Infotech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialized Business Arms | Aider Infotech",
    description:
      "Tech Training Academy, Digital Growth Studio, and Hardware Engineering Lab in Calicut, Kerala.",
  },
};

const DEPT_ICONS: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-7 h-7 text-[#00E5FF]" />,
  Sparkles: <Sparkles className="w-7 h-7 text-[#00E676]" />,
  Cpu: <Cpu className="w-7 h-7 text-[#A855F7]" />,
};

export default function DepartmentsPage() {
  const jsonLdDepartments = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/departments/#webpage`,
        "url": `${siteUrl}/departments`,
        "name": "Specialized Departments | Aider Infotech",
        "description":
          "Explore Aider Academy, Aider Creative, and IT Club Techstore - the three core divisions driving technology education, digital marketing, and hardware engineering.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "name": "Aider Infotech",
          "url": siteUrl,
        },
      },
      {
        "@type": "ItemList",
        "name": "Aider Infotech Divisions",
        "itemListElement": SITE_DATA.departments.map((dept, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": dept.name,
          "description": dept.description,
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0E14] text-white selection:bg-[#00E676]/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDepartments) }}
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-6">
              <Building2 className="w-4 h-4" />
              <span>AIDER INFOTECH // SPECIALIZED DIVISIONS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.12]">
              Specialized Business Arms & <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00E676] to-[#A855F7]">
                Dedicated Excellence Centers
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-8 max-w-3xl">
              Aider Infotech operates three specialized divisions: Aider Academy for next-gen software & AI education, Aider Creative for high-ROI digital marketing and brand identity, and IT Club Techstore for custom workstation hardware and motherboard diagnostics.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#department-list"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00E5FF] text-black text-sm font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:bg-white transition-all group"
              >
                <span>Explore All Departments</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold transition-all"
              >
                <span>Connect With A Division</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Departments Showcase Section */}
        <section id="department-list" aria-label="Our Three Specialized Divisions" className="mb-24 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-widest block mb-3">
              INTEGRATED ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Meet the Departments of Aider
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              Each department functions with dedicated specialists while seamlessly cross-collaborating to provide unified technology, marketing, and hardware services.
            </p>
          </div>

          <div className="space-y-16">
            {SITE_DATA.departments.map((dept, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={dept.id}
                  id={dept.id}
                  className="glass-card p-8 sm:p-12 border border-white/10 rounded-3xl transition-all duration-300 hover:border-white/30 scroll-mt-28"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Content Column */}
                    <div className={`lg:col-span-7 ${isEven ? "" : "lg:order-2"}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center"
                          style={{ color: dept.color }}
                        >
                          {DEPT_ICONS[dept.iconName] || <Building2 className="w-7 h-7" />}
                        </div>
                        <div>
                          <span
                            className="text-xs font-mono font-bold uppercase tracking-widest block"
                            style={{ color: dept.color }}
                          >
                            {dept.badge}
                          </span>
                          <span className="text-xs text-[#9CA3AF] block font-medium">
                            {dept.tagline}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                        {dept.name}
                      </h3>

                      <p className="text-base font-semibold text-white/90 mb-4 leading-snug">
                        {dept.headline}
                      </p>

                      <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-6">
                        {dept.description}
                      </p>

                      {/* Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                        {dept.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2.5">
                            <CheckCircle2
                              className="w-4 h-4 shrink-0"
                              style={{ color: dept.color }}
                            />
                            <span className="text-xs sm:text-sm text-white/80 font-medium">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Pill Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {dept.pills.map((pill, pIdx) => (
                          <span
                            key={pIdx}
                            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/70"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      {/* Direct Department Contact Badge */}
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs">
                        {dept.id === "creative" && (
                          <>
                            <div className="flex items-center gap-2 text-white">
                              <Phone className="w-3.5 h-3.5 text-[#00E676]" />
                              <a href="tel:+918139837374" className="hover:text-[#00E676] font-bold transition-colors">
                                +91 8139 837 374
                              </a>
                            </div>
                            <a href="https://instagram.com/aider.creative" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#00E676] transition-colors font-mono">
                              @aider.creative
                            </a>
                          </>
                        )}
                        {dept.id === "academy" && (
                          <>
                            <div className="flex items-center gap-2 text-white">
                              <Phone className="w-3.5 h-3.5 text-[#00E5FF]" />
                              <a href="tel:+919605447374" className="hover:text-[#00E5FF] font-bold transition-colors">
                                +91 9605 44 73 74
                              </a>
                            </div>
                            <a href="https://instagram.com/aider.academy" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#00E5FF] transition-colors font-mono">
                              @aider.academy
                            </a>
                          </>
                        )}
                        {dept.id === "techstore" && (
                          <>
                            <div className="flex flex-wrap items-center gap-3 text-white">
                              <div className="flex items-center gap-1.5">
                                <Phone className="w-3.5 h-3.5 text-[#A855F7]" />
                                <span className="text-[#9CA3AF]">Calicut:</span>
                                <a href="tel:+919037007374" className="hover:text-[#A855F7] font-bold transition-colors">
                                  9037 00 7374
                                </a>
                              </div>
                              <span>•</span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[#9CA3AF]">Balussery:</span>
                                <a href="tel:+919037577374" className="hover:text-[#A855F7] font-bold transition-colors">
                                  9037 57 7374
                                </a>
                              </div>
                            </div>
                            <a href="https://instagram.com/itclubstores" target="_blank" rel="noopener noreferrer" className="text-[#9CA3AF] hover:text-[#A855F7] transition-colors font-mono">
                              @itclubstores
                            </a>
                          </>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 items-center">
                        <Link
                          href={dept.learnMoreHref}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-black font-bold text-sm shadow-lg transition-all group"
                          style={{
                            backgroundColor: dept.color,
                            boxShadow: `0 0 20px ${dept.color}40`,
                          }}
                        >
                          <span>Visit Dedicated {dept.name} Page</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Image Gallery / Showcase Column */}
                    <div className={`lg:col-span-5 ${isEven ? "" : "lg:order-1"}`}>
                      <div className="space-y-4">
                        <div className="relative h-[260px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                          <Image
                            src={dept.image}
                            alt={dept.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-transparent opacity-60" />
                          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                            <span className="text-xs font-mono font-semibold block text-white">
                              {dept.name} • Headquarters
                            </span>
                            <span className="text-xs text-[#9CA3AF]">Calicut, Kerala</span>
                          </div>
                        </div>

                        {/* Secondary Thumbnails */}
                        {dept.images && dept.images.length > 1 && (
                          <div className="grid grid-cols-2 gap-4">
                            {dept.images.slice(1, 3).map((subImg, sIdx) => (
                              <div
                                key={sIdx}
                                className="relative h-[110px] rounded-xl overflow-hidden border border-white/10 group"
                              >
                                <Image
                                  src={subImg.src}
                                  alt={subImg.alt}
                                  fill
                                  sizes="20vw"
                                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40" />
                                <span className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-white/90 truncate">
                                  {subImg.caption}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cross-Department Synergy Card */}
        <div className="glass-card p-8 sm:p-12 border border-white/15 rounded-3xl mb-24 relative overflow-hidden bg-gradient-to-r from-[#0A0E14] via-[#121824] to-[#0A0E14]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-mono text-[#00E676] uppercase tracking-widest block mb-3">
              360° UNIFIED CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Why Our Multi-Division Approach Matters
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-6">
              When software developers, marketing strategists, and hardware engineers work under one roof, projects benefit from seamless integration. Software launches are backed by high-ROI digital campaigns and powered by custom high-performance server hardware.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Users className="w-6 h-6 text-[#00E5FF] mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Unified Engineering</h4>
                <p className="text-xs text-[#9CA3AF]">Zero disconnect between software design, marketing, and hardware setup.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Zap className="w-6 h-6 text-[#00E676] mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Faster Execution</h4>
                <p className="text-xs text-[#9CA3AF]">In-house talent pipeline and diagnostic labs cut project lead times in half.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-6 h-6 text-[#A855F7] mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Single Point of Contact</h4>
                <p className="text-xs text-[#9CA3AF]">One dedicated partner responsible for your full digital and IT footprint.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Start Your Project / CTA Section */}
        <div className="glass-card p-8 sm:p-14 border border-white/15 rounded-3xl relative overflow-hidden text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-widest block mb-3">
              GET IN TOUCH WITH US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Have a Specific Departmental Inquiry?
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] mb-8 leading-relaxed">
              Whether you want to enroll in Aider Academy, consult with Aider Creative for SEO, or service hardware with IT Club Techstore, we are here to assist.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#00E5FF] text-black font-bold text-sm shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:bg-white transition-all"
              >
                <span>Contact Our Team</span>
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
