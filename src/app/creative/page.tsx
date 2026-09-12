import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Search,
  Share2,
  Video,
  Palette,
  CheckCircle,
  Phone,
  Mail,
  BarChart3,
  Award,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aiderinfotech.com";

export const metadata: Metadata = {
  title: "Aider Creative | Digital Marketing, SEO & Branding Studio in Calicut",
  description:
    "Aider Creative delivers data-driven digital marketing, search engine optimization (SEO), social media management, brand identity, and high-ROI advertising campaigns in Calicut, Kerala.",
  alternates: {
    canonical: `${siteUrl}/creative`,
  },
  openGraph: {
    title: "Aider Creative | Digital Marketing, SEO & Branding Studio in Calicut",
    description:
      "Dominate search rankings, elevate brand identity, and run high-converting ad campaigns with Aider Creative in Calicut, Kerala.",
    url: `${siteUrl}/creative`,
    siteName: "Aider Infotech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aider Creative | Digital Marketing & SEO Agency Calicut",
    description:
      "Data-driven SEO, performance marketing, social media management, and brand identity design.",
  },
};

const SERVICES = [
  {
    title: "Search Engine Optimization (SEO)",
    tag: "Organic Growth",
    description:
      "Dominate search rankings with keyword research, technical on-page audits, high-authority backlink outreach, and local Calicut & Kerala SEO strategies.",
    metrics: "Top 3 Google Rankings",
  },
  {
    title: "Social Media Marketing (SMM)",
    tag: "Brand Awareness",
    description:
      "Craft viral Reels, Instagram carousels, LinkedIn thought-leadership, and targeted community campaigns that foster loyal brand advocates.",
    metrics: "+280% Social Engagement",
  },
  {
    title: "Performance Ads & PPC Funnels",
    tag: "Conversion Engine",
    description:
      "High-converting paid acquisition campaigns on Meta Ads (Instagram/Facebook) and Google Ads with hyper-targeted audience segmentation and retargeting.",
    metrics: "3.8x Average Return on Ad Spend",
  },
  {
    title: "Brand Identity & Design Systems",
    tag: "Creative Visuals",
    description:
      "Memorable logos, typography guides, marketing collateral, brand guidelines, and 3D visual assets engineered to differentiate your brand.",
    metrics: "100% Bespoke Identity",
  },
  {
    title: "Commercial Video & Content Production",
    tag: "Visual Storytelling",
    description:
      "End-to-end video storytelling, motion graphics, product launch reels, and high-production commercials that capture and hold buyer attention.",
    metrics: "Broadcast-Ready 4K Quality",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    tag: "Funnel Engineering",
    description:
      "Analyze visitor behavior, heatmaps, and checkout flow to transform click traffic into measurable sales, inquiries, and booked strategy calls.",
    metrics: "+42% Lead Conversion Lift",
  },
];

export default function CreativePage() {
  const jsonLdCreative = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/creative/#service`,
        "name": "Aider Creative",
        "url": `${siteUrl}/creative`,
        "parentOrganization": {
          "@type": "Organization",
          "name": "Aider Infotech",
          "url": siteUrl,
        },
        "description":
          "Full-service Digital Marketing, SEO, Brand Strategy, Performance Ads, and Content Studio in Calicut, Kerala.",
        "telephone": "+91 8139 837 374",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1/3714-d2 City Corner Building Nadakkavu",
          "addressLocality": "Kozhikode",
          "addressRegion": "Kerala",
          "addressCountry": "IN",
        },
      },
      ...SERVICES.map((service) => ({
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "ProfessionalService",
          "name": "Aider Creative",
          "sameAs": `${siteUrl}/creative`,
        },
      })),
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0E14] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCreative) }}
      />
      <main className="flex-1 pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/#departments"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#00E676]/60 hover:bg-[#00E676]/10 text-white/80 hover:text-[#00E676] text-xs font-mono tracking-wider font-semibold transition-all duration-300 shadow-lg group backdrop-blur-md mb-8 active:scale-95"
        >
          <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#00E676]/20 flex items-center justify-center text-[#00E676] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <span>BACK TO DEPARTMENTS</span>
        </Link>

        {/* Hero Section */}
        <div className="glass-card relative p-8 sm:p-14 border border-white/10 rounded-3xl overflow-hidden mb-16 shadow-2xl">


          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-6">
                <Sparkles className="w-4 h-4" />
                <span>AIDER CREATIVE // DIGITAL MEDIA & MARKETING</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Turn Online Traffic into <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] to-[#00E5FF]">
                  Exponential Enterprise Revenue
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-8">
                Aider Creative is the brand growth and digital media powerhouse of Aider Infotech.
                From aggressive organic search dominance to viral social campaigns and high-ROI
                advertising, we elevate your brand above the noise.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#consult"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00E676] text-black text-sm font-bold shadow-[0_0_20px_rgba(0,230,118,0.4)] hover:bg-white transition-all group"
                >
                  <span>Request Growth Audit</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold transition-all"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>
            </div>

            {/* Studio Preview Image */}
            <div className="lg:col-span-5 relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/images/dept_creative.webp"
                alt="Aider Creative digital marketing and branding studio in Calicut"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15">
                <p className="text-xs font-mono text-[#00E676]">⚡ CREATIVE MEDIA LAB</p>
                <p className="text-xs text-white/90">SEO, Social & Performance Ad Command Center</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Value Pillars */}
        <section aria-label="Core Value Pillars" className="mb-20">
          <h2 className="sr-only">Core Value Pillars of Aider Creative</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-[#00E676] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Measurable ROI Focus</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                We focus on metrics that impact your balance sheet — cost per qualified lead, customer
                acquisition cost (CAC), and verified revenue attribution.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl">
              <Search className="w-8 h-8 text-[#00E5FF] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Sustainable Organic SEO</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                White-hat technical SEO architecture and semantic keyword clustering designed to secure
                recession-proof first-page Google rankings.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl">
              <Palette className="w-8 h-8 text-[#00E676] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Bespoke Brand Identity</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                World-class visual aesthetics and messaging tone that make your business instantly
                distinguishable and authoritative in your market.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <div id="services" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#00E676] uppercase tracking-widest block mb-2">
              OUR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Data-Driven Marketing Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="glass-card p-6 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#00E676]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] mb-3">
                    <span className="text-[#00E676]">{srv.tag}</span>
                    <span className="text-white/70">{srv.metrics}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{srv.title}</h3>
                  <p className="text-sm text-[#9CA3AF] mb-6 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <a
                  href="#consult"
                  className="w-full py-2.5 text-center block rounded-xl bg-white/5 hover:bg-[#00E676] hover:text-black text-xs font-semibold text-white transition-all border border-white/10"
                >
                  Enquire About {srv.title.split(" ")[0]}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Section */}
        <div id="consult" className="glass-card p-8 sm:p-12 border border-white/15 rounded-3xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-mono text-[#00E676] uppercase tracking-widest block mb-2">
              FREE STRATEGY SESSION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Scale Your Brand with Aider Creative
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] mb-6">
              Schedule a growth strategy consultation with our digital marketing specialists at 1/3714-d2 City Corner Building Nadakkavu, Kozhikode.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="tel:+918139837374"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#00E676] text-black font-bold text-sm shadow-[0_0_20px_rgba(0,230,118,0.4)] hover:bg-white transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Strategist: +91 8139 837 374</span>
              </a>

              <a
                href="mailto:info.aidercreative@gmail.com?subject=Aider%20Creative%20Marketing%20Inquiry"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email: info.aidercreative@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs text-[#9CA3AF] border-t border-white/10 pt-6">
              <a href="https://www.aidercreative.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E676] transition-colors">
                🌐 www.aidercreative.com
              </a>
              <span>•</span>
              <a href="https://instagram.com/aider.creative" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E676] transition-colors">
                📷 @aider.creative
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
