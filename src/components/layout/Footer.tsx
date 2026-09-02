"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/data/content";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterXIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-transparent border-t border-white/10 pt-20 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid: Brand & Global Presence Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="#hero" className="flex items-center gap-2.5 mb-6 group inline-flex">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/15 flex items-center justify-center group-hover:border-[#00E676]/40 transition-colors">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                </div>
                <span className="font-bold tracking-tight text-xl text-white">
                  AIDER <span className="text-[#00E676]">INFOTECH</span>
                </span>
              </Link>
              <p className="text-sm text-[#9CA3AF] max-w-sm leading-relaxed mb-8">
                {SITE_DATA.footer.tagline}
              </p>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <div className="glass-card p-4 border border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#00E676] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs font-bold text-white block mb-0.5">
                      Calicut Headquarters (India)
                    </span>
                    <span className="text-xs text-[#9CA3AF] leading-relaxed block">
                      3rd Floor, City Corner Building, Opp. Bismi Hypermarket, Nadakkav, Calicut - 06
                    </span>
                    <a
                      href="tel:+918137837374"
                      className="text-xs font-mono text-[#00E676] mt-2 inline-flex items-center gap-1 hover:underline"
                    >
                      <Phone className="w-3 h-3" />
                      <span>+91 8137837374</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dotted World Map Graphic with Animated Connecting Arcs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="glass-card p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00E676]">
                  GLOBAL DELIVERY HUBS & CLIENT NETWORK
                </span>
                <span className="text-xs font-mono text-[#9CA3AF]">791+ GLOBAL CLIENTS</span>
              </div>

              {/* Dotted World Map Graphic */}
              <div className="relative w-full h-[220px] sm:h-[260px] flex items-center justify-center">
                <svg
                  viewBox="0 0 800 400"
                  className="w-full h-full text-white/10"
                  fill="currentColor"
                >
                  {/* Subtle Grid Dots */}
                  <pattern
                    id="grid-dots"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.12)" />
                  </pattern>
                  <rect width="800" height="400" fill="url(#grid-dots)" />

                  {/* Connecting Curved Arc from Calicut (India) to Dubai (UAE) */}
                  <motion.path
                    d="M 520 220 Q 460 140 400 170"
                    fill="none"
                    stroke="#00E676"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />

                  {/* Calicut Location Point */}
                  <g transform="translate(520, 220)">
                    <circle r="6" fill="#00E676" />
                    <circle
                      r="14"
                      fill="none"
                      stroke="#00E676"
                      strokeWidth="1.5"
                      opacity="0.6"
                      className="animate-ping"
                    />
                    <text
                      x="12"
                      y="4"
                      fill="#FFFFFF"
                      fontSize="12"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      CALICUT (HQ)
                    </text>
                  </g>

                  {/* Dubai Location Point */}
                  <g transform="translate(400, 170)">
                    <circle r="5" fill="#00E676" opacity="0.9" />
                    <circle
                      r="10"
                      fill="none"
                      stroke="#00E676"
                      strokeWidth="1.5"
                      opacity="0.4"
                    />
                    <text
                      x="-70"
                      y="-10"
                      fill="#9CA3AF"
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      MIDDLE EAST
                    </text>
                  </g>

                  {/* Global Flow Arcs */}
                  <motion.path
                    d="M 520 220 Q 620 180 680 230"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8 }}
                  />
                  <g transform="translate(680, 230)">
                    <circle r="4" fill="rgba(255,255,255,0.4)" />
                    <text
                      x="10"
                      y="4"
                      fill="#9CA3AF"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      APAC REGION
                    </text>
                  </g>
                </svg>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#9CA3AF] pt-2 border-t border-white/5">
                <span>ESTABLISHED 2017</span>
                <span className="text-[#00E676]">CALICUT • GLOBAL OUTREACH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00E676] mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              {SITE_DATA.footer.serviceLinks.map((item, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00E676] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              {SITE_DATA.footer.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00E676] mb-4">
              Aider Academy
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9CA3AF]">
              <li>Full Stack Python Development</li>
              <li>Flutter & Mobile Development</li>
              <li>UI/UX & Product Design</li>
              <li>Artificial Intelligence & ML</li>
              <li>Data Analytics & BI</li>
              <li>Performance Marketing & SEO</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00E676] mb-4">
              Connect With Us
            </h4>
            <p className="text-xs text-[#9CA3AF] mb-4">
              Follow our engineering updates and digital marketing insights across social channels.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE_DATA.company.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#00E676] hover:border-[#00E676]/40 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_DATA.company.socials.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#00E676] hover:border-[#00E676]/40 transition-colors"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={SITE_DATA.company.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#00E676] hover:border-[#00E676]/40 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE_DATA.company.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#9CA3AF] hover:text-[#00E676] hover:border-[#00E676]/40 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9CA3AF]/60 font-mono">
          <div>
            © {new Date().getFullYear()} Aider Infotech. All rights reserved. Built for high performance.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span className="text-[#00E676]">Calicut, Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
