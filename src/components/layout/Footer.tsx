"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { SITE_DATA } from "@/data/content";
import INDIA_DOTS from "@/data/india-processed-dots.json";

// =========================================================================
// Appropriate Neon Division Icons
// =========================================================================

// 1. Aider Infotech: Technology, Software & Computing (Microchip CPU & Code Terminal)
function AiderInfotechIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Chip Outer Silicon Case */}
      <rect x="16" y="16" width="32" height="32" rx="6" />
      {/* Inner Core Architecture */}
      <rect x="23" y="23" width="18" height="18" rx="3" />
      {/* Code Terminal Brackets inside Core */}
      <path d="M28 28.5l-3.5 3.5 3.5 3.5M36 28.5l3.5 3.5-3.5 3.5" />
      {/* Top Pins & Data Nodes */}
      <path d="M24 16V9M32 16V6M40 16V9" />
      <circle cx="32" cy="6" r="1.5" fill="currentColor" />
      {/* Bottom Pins & Data Nodes */}
      <path d="M24 48v7M32 48v10M40 48v7" />
      <circle cx="32" cy="58" r="1.5" fill="currentColor" />
      {/* Left Pins & Data Nodes */}
      <path d="M16 24H9M16 32H6M16 40H9" />
      <circle cx="6" cy="32" r="1.5" fill="currentColor" />
      {/* Right Pins & Data Nodes */}
      <path d="M48 24h7M48 32h10M48 40h7" />
      <circle cx="58" cy="32" r="1.5" fill="currentColor" />
    </svg>
  );
}

// 2. Aider Creative: Digital Marketing, SEO & Social Media (Megaphone, Growth Curve & Broadcast)
function AiderCreativeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Digital Marketing Megaphone */}
      <path d="M10 25h8l14-9v32L18 39h-8a2 2 0 0 1-2-2V27a2 2 0 0 1 2-2z" />
      <path d="M18 39v8a3 3 0 0 0 6 0v-4" />
      {/* Social Media Broadcast Waves */}
      <path d="M37 24a8 8 0 0 1 0 16" />
      <path d="M43 18a16 16 0 0 1 0 28" />
      {/* SEO Growth Trending Rocket/Arrow (Analytics Spike) */}
      <path d="M38 12l16-6M54 6v8M54 6h-8" />
      {/* Social Engagement Nodes */}
      <circle cx="51" cy="22" r="1.5" fill="currentColor" />
      <circle cx="47" cy="36" r="1.5" fill="currentColor" />
      <circle cx="55" cy="31" r="1.5" fill="currentColor" />
    </svg>
  );
}

// 3. Aider Academy: Education & Training (Graduation Mortarboard Cap & Open Book)
function AiderAcademyIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Graduation Mortarboard Hat */}
      <polygon points="32 10, 56 22, 32 34, 8 22" />
      {/* Academic Cap Base */}
      <path d="M16 26.5v10c0 5 7.2 9 16 9s16-4 16-9v-10" />
      {/* Degree Tassel & Knot */}
      <path d="M50 24v16" />
      <circle cx="50" cy="42" r="2" fill="currentColor" />
      {/* Open Book of Knowledge */}
      <path d="M16 46c4.5-2 9-2 14 2 5-4 9.5-4 14-2v8c-4.5-2-9-2-14 2-5-4-9.5-4-14-2z" />
      <line x1="32" y1="48" x2="32" y2="56" />
    </svg>
  );
}

// 4. IT Club Techstore: Desktop PC & Laptop Store + Maintenance Workshop (PC Tower, Laptop & Service Wrench/Gear)
function ITClubTechStoreIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Desktop PC Tower (Left) */}
      <rect x="8" y="10" width="16" height="34" rx="2.5" />
      <line x1="12" y1="16" x2="20" y2="16" />
      <line x1="12" y1="20" x2="20" y2="20" />
      <circle cx="16" cy="34" r="2" />
      <circle cx="16" cy="39" r="1" fill="currentColor" />
      
      {/* Laptop (Right) */}
      <rect x="28" y="14" width="28" height="18" rx="2.5" />
      <line x1="28" y1="28" x2="56" y2="28" />
      <circle cx="42" cy="30" r="0.8" fill="currentColor" />
      <path d="M24 32h36l-2 4H26z" />
      
      {/* Maintenance Wrench & Gear Workshop Tools in Foreground Center */}
      {/* Gear */}
      <circle cx="30" cy="50" r="4.5" />
      <path d="M30 43.5v2M30 54.5v2M23.5 50h2M34.5 50h2" />
      <circle cx="30" cy="50" r="1.5" fill="currentColor" />
      
      {/* Service Wrench */}
      <path d="M38 48l12 12a2.5 2.5 0 0 0 3.5-3.5l-12-12" />
      <path d="M49 53l2-2" />
      <path d="M37 45a3.5 3.5 0 0 1 1-4l-3-1-1 3a3.5 3.5 0 0 1 3 2z" />
    </svg>
  );
}

// Social Icons matching the reference style
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.5-.14-2.75-.14-2.8 0-4.75 1.7-4.75 4.9v2.6H7v4h3.5v9h3.5v-9z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
    </svg>
  );
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8.228 11.235c.783-.34 1.332-1.077 1.332-2.138 0-1.782-1.284-2.83-3.284-2.83H1.5v11.465h4.945c2.25 0 3.652-1.196 3.652-3.13 0-1.464-.78-2.67-1.869-3.367zm-3.95-3.033h1.838c1.072 0 1.644.47 1.644 1.397 0 .918-.572 1.407-1.644 1.407H4.278V8.202zm2.03 7.626H4.278v-3.078h2.03c1.233 0 1.942.54 1.942 1.542 0 1-.71 1.536-1.942 1.536zm10.74-6.495c-3.14 0-5.048 2.22-5.048 5.437 0 3.23 1.89 5.437 5.048 5.437 2.457 0 3.99-1.26 4.603-3.235h-2.316c-.352.793-1.144 1.252-2.287 1.252-1.572 0-2.583-.984-2.675-2.573h7.397c.07-.404.093-.822.093-1.22 0-3.064-1.782-5.098-4.815-5.098zm-2.656 4.316c.153-1.455 1.135-2.36 2.656-2.36 1.472 0 2.404.905 2.54 2.36h-5.196zM14.28 6.55h5.534v1.543H14.28V6.55z" />
    </svg>
  );
}

// SEO-rich service pills matching the reference bottom-middle row
const SEO_PILLS = [
  "Explainer Videos",
  "Web Designing",
  "Mobile App Development",
  "Website Development",
  "E-commerce",
  "ERP Development",
  "Custom Software",
  "Cloud Architecture",
  "Full Stack Python",
  "Flutter Apps",
  "UI/UX Design",
  "Aider Academy",
  "Social Media Marketing",
  "SEO Services Calicut",
  "Digital Marketing",
];

export function Footer() {
  return (
    <footer className="relative bg-[#0A0E14] text-white pt-20 pb-10 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-white/10 select-none">
      {/* Background Dotted Indian Map with Calicut Marked at the Center */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-70">
        <svg
          viewBox="0 0 1440 600"
          className="w-full h-full object-cover"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ambient Radial Spotlight Centered at Calicut */}
            <radialGradient id="calicut-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00E676" stopOpacity="0.45" />
              <stop offset="45%" stopColor="#00E5FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#00E676" stopOpacity="0" />
            </radialGradient>

            {/* Cyber Arc Gradients */}
            <linearGradient id="cyber-arc-calicut-1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E676" stopOpacity="1" />
              <stop offset="60%" stopColor="#00E5FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="cyber-arc-calicut-2" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#00E676" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#00F5D4" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#00E676" stopOpacity="0" />
            </linearGradient>
            <filter id="arc-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ambient Glow Aura Behind Calicut */}
          <circle cx="595" cy="340" r="165" fill="url(#calicut-glow)" filter="url(#arc-glow)" />

          {/* Dotted Matrix Shape of India */}
          <g id="india-dot-matrix">
            {INDIA_DOTS.map((dot, idx) => (
              <circle
                key={idx}
                cx={dot.cx}
                cy={dot.cy}
                r={dot.r}
                fill={dot.color}
              />
            ))}
          </g>

          {/* Major Indian Technology Nodal Points (connected to Calicut) */}
          {/* New Delhi (North Hub) */}
          <circle cx="600" cy="100" r="3" fill="#00E5FF" opacity="0.8" />
          <circle cx="600" cy="100" r="7" fill="none" stroke="#00E5FF" strokeWidth="1" opacity="0.4" />
          <path
            d="M 595 340 Q 580 210 600 100"
            fill="none"
            stroke="url(#cyber-arc-calicut-1)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.6"
          />

          {/* Mumbai (West Commercial Hub) */}
          <circle cx="566" cy="237" r="3" fill="#00E5FF" opacity="0.8" />
          <path
            d="M 595 340 Q 570 280 566 237"
            fill="none"
            stroke="#00E676"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            opacity="0.65"
          />

          {/* Bengaluru (Silicon Plateau) */}
          <circle cx="608" cy="321" r="3" fill="#00E676" opacity="0.9" />
          <line
            x1="595"
            y1="340"
            x2="608"
            y2="321"
            stroke="#00E676"
            strokeWidth="1.5"
            opacity="0.7"
          />

          {/* Hyderabad (Tech Hub) */}
          <circle cx="640" cy="280" r="2.8" fill="#00E5FF" opacity="0.75" />
          <path
            d="M 595 340 Q 625 310 640 280"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.55"
          />

          {/* Kolkata (East Gateway) */}
          <circle cx="730" cy="204" r="2.8" fill="#00E5FF" opacity="0.75" />
          <path
            d="M 595 340 Q 680 250 730 204"
            fill="none"
            stroke="url(#cyber-arc-calicut-2)"
            strokeWidth="1.2"
            strokeDasharray="5 5"
            opacity="0.55"
          />

          {/* Cyber Arcs Connecting Calicut HQ to the 4 Cards on the Right */}
          {/* Arc to India (HQ) Card */}
          <path
            d="M 595 340 Q 660 180 750 170"
            fill="none"
            stroke="url(#cyber-arc-calicut-1)"
            strokeWidth="1.8"
            filter="url(#arc-glow)"
            opacity="0.85"
          />

          {/* Arc to Global Clients Card */}
          <path
            d="M 595 340 Q 800 120 1060 170"
            fill="none"
            stroke="url(#cyber-arc-calicut-2)"
            strokeWidth="1.8"
            filter="url(#arc-glow)"
            opacity="0.8"
          />

          {/* Arc to Academy Card */}
          <path
            d="M 595 340 Q 670 370 750 380"
            fill="none"
            stroke="#00E676"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.75"
          />

          {/* Arc to Careers Card */}
          <path
            d="M 595 340 Q 820 430 1060 380"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1.4"
            strokeDasharray="5 5"
            opacity="0.7"
          />

          {/* =========================================================
              CALICUT HEADQUARTERS CENTER MARKER & RADAR PULSE
          ========================================================== */}
          <g transform="translate(595, 340)">
            {/* Concentric Radar Rings Centered at Calicut */}
            <circle
              r="14"
              fill="none"
              stroke="#00E676"
              strokeWidth="1.5"
              opacity="0.8"
              className="animate-ping"
            />
            <circle
              r="26"
              fill="none"
              stroke="#00E676"
              strokeWidth="1.2"
              strokeDasharray="3 4"
              opacity="0.75"
            />
            <circle
              r="48"
              fill="none"
              stroke="#00E5FF"
              strokeWidth="1"
              strokeDasharray="4 6"
              opacity="0.5"
            />
            <circle
              r="80"
              fill="none"
              stroke="#00E676"
              strokeWidth="0.8"
              strokeDasharray="6 8"
              opacity="0.3"
            />

            {/* Precision Tech Crosshairs */}
            <line x1="-18" y1="0" x2="-8" y2="0" stroke="#00E676" strokeWidth="1.5" />
            <line x1="8" y1="0" x2="18" y2="0" stroke="#00E676" strokeWidth="1.5" />
            <line x1="0" y1="-18" x2="0" y2="-8" stroke="#00E676" strokeWidth="1.5" />
            <line x1="0" y1="8" x2="0" y2="18" stroke="#00E676" strokeWidth="1.5" />

            {/* Center Core Beacon */}
            <circle r="6" fill="#00E676" filter="url(#arc-glow)" />
            <circle r="2.5" fill="#FFFFFF" />

            {/* High-Visibility Tech HUD Tag right at the Center */}
            <g transform="translate(14, -16)">
              <rect
                x="0"
                y="0"
                width="118"
                height="32"
                rx="6"
                fill="rgba(10, 14, 20, 0.92)"
                stroke="#00E676"
                strokeWidth="1.2"
              />
              <circle cx="10" cy="11" r="3" fill="#00E676" className="animate-pulse" />
              <text
                x="18"
                y="15"
                fill="#00E676"
                fontSize="10.5"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.8"
              >
                CALICUT HQ
              </text>
              <text
                x="10"
                y="24"
                fill="#9CA3AF"
                fontSize="8"
                fontFamily="monospace"
                letterSpacing="0.4"
              >
                11.2588° N, 75.7804° E
              </text>
            </g>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section: Left Brand Info & Links | Right 2x2 Hub Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-14">
          {/* Left Column: Logo, Description & Links */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <Link href="#hero" className="inline-block mb-5 group">
                <Image
                  src="/images/aider-logo-white-text.png"
                  alt="Aider Infotech - Best Software Development Company in Calicut"
                  width={240}
                  height={80}
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </Link>

              {/* SEO Company Description matching reference phrasing */}
              <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-xl mb-9">
                Aider Infotech, located in Calicut, Kerala, is recognised as a dependable and
                user-centric digital transformation company. We deliver integrated custom design
                and refinement of online strategies throughout the entire digital ecosystem. We
                integrate all online processes to streamline your business&apos;s growth.
              </p>

              {/* Navigation Links in 2 Columns */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-3.5 max-w-md text-sm font-medium">
                <div>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#about" className="text-white/90 hover:text-[#00E676] transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#services" className="text-white/90 hover:text-[#00E676] transition-colors">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="#academy" className="text-white/90 hover:text-[#00E676] transition-colors">
                        Technologies
                      </Link>
                    </li>
                    <li>
                      <Link href="#faqs" className="text-white/90 hover:text-[#00E676] transition-colors">
                        Terms And Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li>
                      <Link href="#contact" className="text-white/90 hover:text-[#00E676] transition-colors">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="#contact" className="text-white/90 hover:text-[#00E676] transition-colors">
                        Partner Program
                      </Link>
                    </li>
                    <li>
                      <Link href="#faqs" className="text-white/90 hover:text-[#00E676] transition-colors">
                        Sitemap
                      </Link>
                    </li>
                    <li>
                      <Link href="#faqs" className="text-white/90 hover:text-[#00E676] transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Planetary Flowing Hub Cards */}
          <div className="lg:col-span-6 flex items-center justify-end">
            <div className="grid grid-cols-2 gap-3.5 sm:gap-5 w-full max-w-xl">
              {/* Planetary Card 1: AIDER INFOTECH (Cyan Planet) */}
              <motion.div
                animate={{
                  y: [-3.5, 3.5, -3.5],
                  x: [-1.2, 1.2, -1.2],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="relative group bg-gradient-to-b from-[#0e1626]/90 via-[#0A0E14]/95 to-[#06090e]/95 border border-white/10 border-t-2 border-t-cyan-400/70 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center overflow-hidden hover:border-cyan-400/60 transition-all duration-300 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.8),0_0_30px_rgba(0,229,255,0.16)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.9),0_0_45px_rgba(0,229,255,0.3)] backdrop-blur-xl"
              >
                {/* Orbital Planetary Atmospheric Backlight */}
                <div
                  className="absolute top-0 inset-x-0 h-24 sm:h-28 pointer-events-none rounded-t-2xl opacity-75 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(0, 229, 255, 0.35) 0%, rgba(0, 229, 255, 0.08) 55%, transparent 80%)",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  <AiderInfotechIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.7)] transition-all duration-300 mb-2 sm:mb-2.5" />
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase mb-2">
                    AIDER INFOTECH
                  </h3>
                  
                  {/* Email with Sign */}
                  <a
                    href="mailto:info@aiderinfotech.com"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#9CA3AF] hover:text-cyan-400 transition-colors mb-1 max-w-full truncate"
                  >
                    <Mail className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span className="truncate">info@aiderinfotech.com</span>
                  </a>

                  {/* Phone with Sign */}
                  <a
                    href="tel:+918137837374"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-white/90 hover:text-[#00E676] transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#00E676] shrink-0" />
                    <span>+91 8137837374</span>
                  </a>
                </div>
              </motion.div>

              {/* Planetary Card 2: AIDER CREATIVE (Emerald Planet) */}
              <motion.div
                animate={{
                  y: [3.5, -3.5, 3.5],
                  x: [1.2, -1.2, 1.2],
                }}
                transition={{
                  duration: 6.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="relative group bg-gradient-to-b from-[#0c1c14]/90 via-[#0A0E14]/95 to-[#06090e]/95 border border-white/10 border-t-2 border-t-[#00E676]/70 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center overflow-hidden hover:border-[#00E676]/60 transition-all duration-300 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.8),0_0_30px_rgba(0,230,118,0.16)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.9),0_0_45px_rgba(0,230,118,0.3)] backdrop-blur-xl"
              >
                {/* Orbital Planetary Atmospheric Backlight */}
                <div
                  className="absolute top-0 inset-x-0 h-24 sm:h-28 pointer-events-none rounded-t-2xl opacity-75 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(0, 230, 118, 0.35) 0%, rgba(0, 230, 118, 0.08) 55%, transparent 80%)",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  <AiderCreativeIcon className="w-8 h-8 sm:w-10 sm:h-10 text-[#00E676] group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(0,230,118,0.7)] transition-all duration-300 mb-2 sm:mb-2.5" />
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase mb-2">
                    AIDER CREATIVE
                  </h3>
                  
                  {/* Email with Sign */}
                  <a
                    href="mailto:creative@aiderinfotech.com"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#9CA3AF] hover:text-[#00E676] transition-colors mb-1 max-w-full truncate"
                  >
                    <Mail className="w-3 h-3 text-[#00E676] shrink-0" />
                    <span className="truncate">creative@aiderinfotech.com</span>
                  </a>

                  {/* Phone with Sign */}
                  <a
                    href="tel:+918137837374"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-white/90 hover:text-[#00E676] transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#00E676] shrink-0" />
                    <span>+91 8137837374</span>
                  </a>
                </div>
              </motion.div>

              {/* Planetary Card 3: AIDER ACADEMY (Amber / Gold Planet) */}
              <motion.div
                animate={{
                  y: [3.0, -3.0, 3.0],
                  x: [-1.2, 1.2, -1.2],
                }}
                transition={{
                  duration: 6.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="relative group bg-gradient-to-b from-[#1c180e]/90 via-[#0A0E14]/95 to-[#06090e]/95 border border-white/10 border-t-2 border-t-amber-400/70 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center overflow-hidden hover:border-amber-400/60 transition-all duration-300 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.8),0_0_30px_rgba(245,158,11,0.16)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.9),0_0_45px_rgba(245,158,11,0.3)] backdrop-blur-xl"
              >
                {/* Orbital Planetary Atmospheric Backlight */}
                <div
                  className="absolute top-0 inset-x-0 h-24 sm:h-28 pointer-events-none rounded-t-2xl opacity-75 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(245, 158, 11, 0.35) 0%, rgba(245, 158, 11, 0.08) 55%, transparent 80%)",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  <AiderAcademyIcon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(245,158,11,0.7)] transition-all duration-300 mb-2 sm:mb-2.5" />
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase mb-2">
                    AIDER ACADEMY
                  </h3>
                  
                  {/* Email with Sign */}
                  <a
                    href="mailto:academy@aiderinfotech.com"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#9CA3AF] hover:text-amber-400 transition-colors mb-1 max-w-full truncate"
                  >
                    <Mail className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">academy@aiderinfotech.com</span>
                  </a>

                  {/* Phone with Sign */}
                  <a
                    href="tel:+918137837374"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-white/90 hover:text-[#00E676] transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#00E676] shrink-0" />
                    <span>+91 8137837374</span>
                  </a>
                </div>
              </motion.div>

              {/* Planetary Card 4: IT CLUB TECHSTORE (Electric Purple Planet) */}
              <motion.div
                animate={{
                  y: [-3.0, 3.0, -3.0],
                  x: [1.2, -1.2, 1.2],
                }}
                transition={{
                  duration: 7.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="relative group bg-gradient-to-b from-[#180e22]/90 via-[#0A0E14]/95 to-[#06090e]/95 border border-white/10 border-t-2 border-t-purple-400/70 rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center overflow-hidden hover:border-purple-400/60 transition-all duration-300 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.16)] hover:shadow-[0_16px_40px_-8px_rgba(0,0,0,0.9),0_0_45px_rgba(168,85,247,0.3)] backdrop-blur-xl"
              >
                {/* Orbital Planetary Atmospheric Backlight */}
                <div
                  className="absolute top-0 inset-x-0 h-24 sm:h-28 pointer-events-none rounded-t-2xl opacity-75 group-hover:opacity-100 transition-opacity"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(168, 85, 247, 0.35) 0%, rgba(168, 85, 247, 0.08) 55%, transparent 80%)",
                  }}
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  <ITClubTechStoreIcon className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)] transition-all duration-300 mb-2 sm:mb-2.5" />
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-widest uppercase mb-2">
                    IT CLUB TECHSTORE
                  </h3>
                  
                  {/* Email with Sign */}
                  <a
                    href="mailto:techstore@aiderinfotech.com"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#9CA3AF] hover:text-purple-400 transition-colors mb-1 max-w-full truncate"
                  >
                    <Mail className="w-3 h-3 text-purple-400 shrink-0" />
                    <span className="truncate">techstore@aiderinfotech.com</span>
                  </a>

                  {/* Phone with Sign */}
                  <a
                    href="tel:+918137837374"
                    className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-white/90 hover:text-[#00E676] transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#00E676] shrink-0" />
                    <span>+91 8137837374</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Middle Section: SEO Service Pill Tags */}
        <div className="py-7 border-t border-white/10">
          <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center">
            {SEO_PILLS.map((pill, idx) => (
              <Link
                key={idx}
                href="#services"
                className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs sm:text-sm text-white/80 hover:text-white hover:border-[#00E676]/40 hover:bg-white/[0.08] transition-all duration-200"
              >
                {pill}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Circular Social Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#9CA3AF]">
          <div>
            © Copyright 2026. Aider Infotech Pvt Ltd All Rights Reserved
          </div>

          <div className="flex items-center gap-3">
            <a
              href={SITE_DATA.company.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#00E676]/50 hover:bg-white/10 transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_DATA.company.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#00E676]/50 hover:bg-white/10 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={SITE_DATA.company.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#00E676]/50 hover:bg-white/10 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://behance.net/aiderinfotech"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#00E676]/50 hover:bg-white/10 transition-all"
            >
              <BehanceIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
