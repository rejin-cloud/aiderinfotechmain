"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { SITE_DATA } from "@/data/content";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Building2,
  Globe2,
  ExternalLink,
  MessageSquare,
  Zap,
} from "lucide-react";

function InstagramIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Software Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const jsonLdContact = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Aider Infotech",
    "description": "Get in touch with Aider Infotech for custom software development, web & mobile applications, and digital marketing inquiries.",
    "url": "https://aiderinfotech.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Aider Infotech",
      "telephone": "+91 8137837374",
      "email": "info@aiderinfotech.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3rd Floor, City Corner Building, Opp. Bismi Hypermarket, Nadakkav",
        "addressLocality": "Calicut",
        "addressRegion": "Kerala",
        "postalCode": "673006",
        "addressCountry": "IN",
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0E14] text-white selection:bg-[#00E676]/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContact) }}
      />

      <main className="flex-1 pt-28 pb-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#00E676]/60 hover:bg-[#00E676]/10 text-white/80 hover:text-[#00E676] text-xs font-mono tracking-wider font-semibold transition-all duration-300 shadow-lg group backdrop-blur-md mb-6 active:scale-95"
        >
          <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#00E676]/20 flex items-center justify-center text-[#00E676] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <span>BACK TO HOME</span>
        </Link>

        {/* Compact Hero Header */}
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3 leading-tight">
            Get in Touch with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] via-[#00E5FF] to-[#A855F7]">
              Our Team
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Have a project in mind or need department-specific assistance? Reach out to our specialized teams directly below or send us a message.
          </p>
        </div>

        {/* Department Contacts 4-Column Responsive Grid */}
        <section aria-label="Department Contacts" className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xs font-mono text-[#00E676] uppercase tracking-widest flex items-center gap-2 font-bold">
              <Building2 className="w-4 h-4" />
              <span>DEPARTMENT DIRECTORY</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Aider Infotech HQ */}
            <div className="glass-card p-5 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#00E676]/40 transition-all hover:-translate-y-0.5 shadow-lg group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#00E676] font-bold uppercase tracking-wider">
                    AIDER INFOTECH (HQ)
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                </div>
                <p className="text-[11px] text-[#9CA3AF] mb-3 line-clamp-2">
                  3rd Floor City Corner building Oppo. Bismi Hypermarket, Nadakavu, Calicut-06
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs">
                <a
                  href="tel:+918137837374"
                  className="flex items-center gap-2 text-white hover:text-[#00E676] font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                  <span>+91 8137 83 73 74</span>
                </a>
                <a
                  href="mailto:info@aiderinfotech.com"
                  className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#00E676] transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                  <span className="truncate">info@aiderinfotech.com</span>
                </a>
              </div>
            </div>

            {/* Card 2: Aider Creative */}
            <div className="glass-card p-5 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#00E676]/40 transition-all hover:-translate-y-0.5 shadow-lg group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#00E676] font-bold uppercase tracking-wider">
                    AIDER CREATIVE
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                </div>
                <p className="text-[11px] text-[#9CA3AF] mb-3 line-clamp-2">
                  1/3714-d2 City Corner Building Nadakkavu, Kozhikode, Kerala
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs">
                <a
                  href="tel:+918139837374"
                  className="flex items-center gap-2 text-white hover:text-[#00E676] font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                  <span>+91 8139 837 374</span>
                </a>
                <a
                  href="mailto:info.aidercreative@gmail.com"
                  className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#00E676] transition-colors truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                  <span className="truncate">info.aidercreative@gmail.com</span>
                </a>
                <div className="flex items-center justify-between pt-1 text-[11px] text-[#9CA3AF]">
                  <a
                    href="https://www.aidercreative.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00E676] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href="https://instagram.com/aider.creative"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00E676] transition-colors inline-flex items-center gap-1 font-mono"
                  >
                    <InstagramIcon className="w-2.5 h-2.5" />
                    <span>aider.creative</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Aider Academy */}
            <div className="glass-card p-5 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#00E5FF]/40 transition-all hover:-translate-y-0.5 shadow-lg group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#00E5FF] font-bold uppercase tracking-wider">
                    AIDER ACADEMY
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                </div>
                <p className="text-[11px] text-[#9CA3AF] mb-3 line-clamp-2">
                  1/3714-d2 City Corner Building Nadakkavu, Kozhikode, Kerala
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs">
                <a
                  href="tel:+919605447374"
                  className="flex items-center gap-2 text-white hover:text-[#00E5FF] font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                  <span>+91 9605 44 73 74</span>
                </a>
                <div className="flex items-center justify-between pt-1 text-[11px] text-[#9CA3AF]">
                  <a
                    href="https://aiderinfotech.com/academy"
                    className="hover:text-[#00E5FF] transition-colors inline-flex items-center gap-1"
                  >
                    <span>aider.academy</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href="https://instagram.com/aider.academy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00E5FF] transition-colors inline-flex items-center gap-1 font-mono"
                  >
                    <InstagramIcon className="w-2.5 h-2.5" />
                    <span>aider.academy</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4: IT CLUB Techstore */}
            <div className="glass-card p-5 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#A855F7]/40 transition-all hover:-translate-y-0.5 shadow-lg group">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#A855F7] font-bold uppercase tracking-wider">
                    IT CLUB TECHSTORE
                  </span>
                  <a
                    href="https://instagram.com/itclubstores"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono text-[#A855F7] hover:underline flex items-center gap-1"
                  >
                    <InstagramIcon className="w-2.5 h-2.5" />
                    <span>itclubstores</span>
                  </a>
                </div>
                <div className="space-y-1.5 mb-2 text-[11px]">
                  <p className="text-white font-medium">Store 1: Dubai Bazar, Calicut</p>
                  <div className="flex gap-2 text-[#9CA3AF]">
                    <a href="tel:+919037007374" className="hover:text-[#A855F7] transition-colors font-semibold">
                      9037 00 7374
                    </a>
                    <span>•</span>
                    <a href="tel:+919037117374" className="hover:text-[#A855F7] transition-colors font-semibold">
                      903711 7374
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px]">
                <p className="text-white font-medium mb-0.5">Store 2: Malabar Complex, Balussery</p>
                <div className="flex gap-2 text-[#9CA3AF]">
                  <a href="tel:+919037577374" className="hover:text-[#A855F7] transition-colors font-semibold">
                    9037 57 7374
                  </a>
                  <span>•</span>
                  <a href="tel:+919037587374" className="hover:text-[#A855F7] transition-colors font-semibold">
                    9037 58 7374
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Interactive Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Clean Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 border border-white/10 rounded-3xl shadow-xl">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-1">
                  Send a Direct Message
                </h2>
                <p className="text-xs sm:text-sm text-[#9CA3AF]">
                  Fill out your requirements below and our technical engineers will respond within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#00E676]/10 border border-[#00E676]/40 text-center space-y-3 animate-in fade-in zoom-in">
                  <div className="w-12 h-12 rounded-full bg-[#00E676]/20 border border-[#00E676] flex items-center justify-center mx-auto text-[#00E676]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Thank You for Reaching Out!</h3>
                  <p className="text-xs text-white/80 max-w-sm mx-auto leading-relaxed">
                    Your inquiry has been received. Our team will review your requirements and get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        service: "Software Development",
                        message: "",
                      });
                    }}
                    className="mt-3 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-[11px] font-mono text-white/80 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-[#00E676]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#00E676] focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-[11px] font-mono text-white/80 uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-[#00E676]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#00E676] focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-[11px] font-mono text-white/80 uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-[#00E676]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#00E676] focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="contact-service" className="block text-[11px] font-mono text-white/80 uppercase tracking-wider mb-1.5">
                        Interested Service
                      </label>
                      <select
                        id="contact-service"
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0A0E14] border border-white/10 text-white text-xs focus:outline-none focus:border-[#00E676] transition-all cursor-pointer"
                      >
                        <option value="Software Development">Software Development</option>
                        <option value="Web Engineering">Web Engineering / Next.js</option>
                        <option value="Mobile App Development">Mobile App Dev (iOS & Android)</option>
                        <option value="E-Commerce Development">E-Commerce Storefront</option>
                        <option value="Custom ERP & CRM">Custom ERP & CRM Automation</option>
                        <option value="Digital Marketing & SEO">Digital Marketing & Technical SEO</option>
                        <option value="Aider Academy Course">Aider Academy Tech Training</option>
                        <option value="IT Hardware & Maintenance">IT Club Techstore Hardware</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] font-mono text-white/80 uppercase tracking-wider mb-1.5">
                      Project Details / Message <span className="text-[#00E676]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Tell us about your project requirements or inquiry..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#00E676] focus:bg-white/[0.08] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#00E676] text-black font-bold text-sm shadow-[0_0_20px_rgba(0,230,118,0.35)] hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Message...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Office Locations & Quick Contact Box (5 Cols) */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            {/* Fast Communication Channels */}
            <div className="glass-card p-6 border border-white/10 rounded-3xl space-y-4">
              <h3 className="text-sm font-mono text-[#00E676] uppercase tracking-wider font-bold flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#00E676]" />
                <span>FAST COMMUNICATIONS</span>
              </h3>

              <div className="grid grid-cols-1 gap-3">
                <a
                  href="tel:+918137837374"
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00E676]/50 flex items-center gap-3.5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 flex items-center justify-center text-[#00E676] shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#9CA3AF] block font-mono">CALL HQ DIRECTLY</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#00E676] transition-colors">
                      +91 8137 83 73 74
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@aiderinfotech.com"
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/50 flex items-center gap-3.5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-[#9CA3AF] block font-mono">EMAIL PROPOSAL</span>
                    <span className="text-sm font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                      info@aiderinfotech.com
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-[#9CA3AF]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00E676]" />
                  <span>Mon - Sat: 9:00 AM - 6:30 PM</span>
                </span>
                <span className="text-[#00E676] font-mono font-semibold">24h Response</span>
              </div>
            </div>

            {/* Global Presence Box */}
            <div className="glass-card p-6 border border-white/10 rounded-3xl space-y-4">
              <h3 className="text-sm font-mono text-[#00E5FF] uppercase tracking-wider font-bold flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#00E5FF]" />
                <span>OFFICE LOCATIONS</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#00E676] shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-white">Calicut HQ, Kerala</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/30">
                        INDIA
                      </span>
                    </div>
                    <p className="text-[11px] text-[#9CA3AF] mt-1">
                      3rd Floor, City Corner Building, Opp. Bismi Hypermarket, Nadakavu, Calicut-06
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <Globe2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-white">Dubai Regional Office</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                        UAE
                      </span>
                    </div>
                    <p className="text-[11px] text-[#9CA3AF] mt-1">
                      Business Bay, Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

