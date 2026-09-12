"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { PhoneCall, Mail, ArrowRight, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/data/content";

// Individual Word with Scroll & Cursor Magnetic Influence
function MagneticWord({
  word,
  index,
  total,
  scrollProgress,
  mousePos,
  isHovered,
}: {
  word: string;
  index: number;
  total: number;
  scrollProgress: any;
  mousePos: { x: number; y: number };
  isHovered: boolean;
}) {
  // Center-weighted index offset: words further from center have larger magnetic flux spread
  const centerOffset = (index - total / 2) / (total / 2);

  // Magnetic Scroll Displacement:
  // When scrolling in from top (0 -> 0.45): words gently pull apart along magnetic curves
  // At center (0.5): magnetic resonance (snaps to 0, crisp & aligned)
  // When scrolling out (0.55 -> 1.0): words deflect along opposite magnetic pole
  const xOffset = useTransform(
    scrollProgress,
    [0.1, 0.35, 0.5, 0.65, 0.9],
    [centerOffset * 38, centerOffset * 14, 0, centerOffset * -14, centerOffset * -38]
  );

  const yOffset = useTransform(
    scrollProgress,
    [0.1, 0.35, 0.5, 0.65, 0.9],
    [Math.abs(centerOffset) * -22, Math.abs(centerOffset) * -6, 0, Math.abs(centerOffset) * 6, Math.abs(centerOffset) * 22]
  );

  const rotateOffset = useTransform(
    scrollProgress,
    [0.1, 0.35, 0.5, 0.65, 0.9],
    [centerOffset * 7, centerOffset * 2.5, 0, centerOffset * -2.5, centerOffset * -7]
  );

  const opacity = useTransform(
    scrollProgress,
    [0.05, 0.3, 0.5, 0.7, 0.95],
    [0.35, 0.85, 1, 0.85, 0.35]
  );

  // Subtle interactive cursor magnetism (deflects words when cursor hovers card)
  const springX = useSpring(0, { stiffness: 120, damping: 14 });
  const springY = useSpring(0, { stiffness: 120, damping: 14 });

  React.useEffect(() => {
    if (isHovered) {
      // Calculate gentle repulsion/attraction based on mouse position
      const dx = mousePos.x * centerOffset * 10;
      const dy = mousePos.y * 6;
      springX.set(dx);
      springY.set(dy);
    } else {
      springX.set(0);
      springY.set(0);
    }
  }, [mousePos, isHovered, centerOffset, springX, springY]);

  return (
    <motion.span
      style={{
        x: xOffset,
        y: yOffset,
        rotate: rotateOffset,
        opacity,
      }}
      className="inline-block relative transition-colors duration-200"
    >
      <motion.span
        style={{ x: springX, y: springY }}
        className="inline-block text-white hover:text-[#00E676] drop-shadow-[0_2px_15px_rgba(255,255,255,0.12)] hover:drop-shadow-[0_0_20px_rgba(0,230,118,0.5)] transition-all duration-300"
      >
        {word}
      </motion.span>
    </motion.span>
  );
}

export function CallToAction() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Scroll tracking for magnetic flux distortion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Track mouse coordinates over the card for magnetic hover interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const HEADING_LINE_1 = ["Ready", "to", "transform", "your", "business"];
  const HEADING_LINE_2 = ["with", "a", "powerful", "digital", "solution?"];
  const ALL_WORDS_COUNT = HEADING_LINE_1.length + HEADING_LINE_2.length;

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-transparent overflow-hidden flex items-center justify-center select-none"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Floating Space Capsule: Gentle levitation simulation in zero gravity */}
        <motion.div
          animate={{
            y: [-7, 7, -7],
            rotate: [-0.25, 0.25, -0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-full"
        >
          {/* Deep Cosmic Backdrop Glow & Nebula Aura */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,230,118,0.22)_0%,rgba(0,229,255,0.1)_35%,rgba(10,14,20,0)_70%)] blur-[95px] pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* Floating Space Card */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setMousePos({ x: 0, y: 0 });
            }}
            className="group/card relative p-7 sm:p-10 md:p-12 rounded-3xl border border-white/15 hover:border-[#00E676]/40 transition-colors duration-500 overflow-hidden text-center flex flex-col items-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_50px_-10px_rgba(0,230,118,0.18)]"
            style={{
              backgroundColor: "rgba(10, 14, 20, 0.72)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* SVG Magnetic Field Flux Lines (curved loops that visually convey electromagnetic force) */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-20 group-hover/card:opacity-35 transition-opacity duration-700"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 900 480"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="flux-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#00E676" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="flux-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00E676" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#00F5D4" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#00E676" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Upper & Lower Magnetic Field Arcs */}
              <path
                d="M 50,240 C 150,50 750,50 850,240"
                stroke="url(#flux-grad-1)"
                strokeWidth="1.2"
                strokeDasharray="6 6"
                className="animate-[dash_35s_linear_infinite]"
              />
              <path
                d="M 120,240 C 220,100 680,100 780,240"
                stroke="url(#flux-grad-2)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
              <path
                d="M 50,240 C 150,430 750,430 850,240"
                stroke="url(#flux-grad-1)"
                strokeWidth="1.2"
                strokeDasharray="6 6"
                className="animate-[dash_35s_linear_infinite]"
              />
              <path
                d="M 120,240 C 220,380 680,380 780,240"
                stroke="url(#flux-grad-2)"
                strokeWidth="1"
                strokeDasharray="4 8"
              />
            </svg>

            {/* Futuristic Corner Tech Crosshairs */}
            <span className="absolute top-3.5 left-4 font-mono text-[10px] text-white/25 select-none tracking-widest">
              + 11.2588° N
            </span>
            <span className="absolute top-3.5 right-4 font-mono text-[10px] text-white/25 select-none tracking-widest">
              75.7804° E +
            </span>
            <span className="absolute bottom-3.5 left-4 font-mono text-[10px] text-white/25 select-none tracking-widest">
              + CALICUT
            </span>
            <span className="absolute bottom-3.5 right-4 font-mono text-[10px] text-[#00E676]/50 select-none tracking-widest">
              ACTIVE // 2026 +
            </span>

            {/* Glowing Space Station Eyebrow Capsule */}
            <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/12 text-[11px] sm:text-xs font-semibold text-[#00E676] uppercase tracking-[0.18em] mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E676] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00E676]" />
              </span>
              <span>START YOUR NEXT MILESTONE</span>
            </div>

            {/* Magnetic Field Influenced Heading */}
            <div className="max-w-2xl mx-auto mb-4 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight leading-[1.18] flex flex-col items-center gap-1 sm:gap-1.5">
                {/* Line 1 */}
                <span className="flex flex-wrap justify-center gap-x-2 gap-y-1">
                  {HEADING_LINE_1.map((word, idx) => (
                    <MagneticWord
                      key={idx}
                      word={word}
                      index={idx}
                      total={ALL_WORDS_COUNT}
                      scrollProgress={scrollYProgress}
                      mousePos={mousePos}
                      isHovered={isHovered}
                    />
                  ))}
                </span>

                {/* Line 2 */}
                <span className="flex flex-wrap justify-center gap-x-2 gap-y-1">
                  {HEADING_LINE_2.map((word, idx) => (
                    <MagneticWord
                      key={idx}
                      word={word}
                      index={idx + HEADING_LINE_1.length}
                      total={ALL_WORDS_COUNT}
                      scrollProgress={scrollYProgress}
                      mousePos={mousePos}
                      isHovered={isHovered}
                    />
                  ))}
                </span>
              </h2>
            </div>

            {/* Compact Subtitle */}
            <p className="text-xs sm:text-sm md:text-[15px] text-[#9CA3AF] max-w-lg mx-auto leading-relaxed mb-8">
              Let's build something exceptional together. Contact Aider Infotech today to discuss your software, web, mobile, or digital transformation roadmap.
            </p>

            {/* Modern, Highly Interactive & User-Friendly CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xl">
              {/* Primary Call Button with Live Signal & Pulsing Glow */}
              <motion.a
                href="tel:+918137837374"
                aria-label="Call Aider Infotech at +91 8137837374"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00E676] via-[#00F5A0] to-[#00E5FF] text-[#0A0E14] font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(0,230,118,0.4)] hover:shadow-[0_0_40px_rgba(0,230,118,0.65)] transition-all duration-300 overflow-hidden"
              >
                {/* Shimmer sweep effect on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                <span className="relative flex items-center justify-center p-1 rounded-full bg-[#0A0E14]/15">
                  <PhoneCall className="w-4 h-4 text-[#0A0E14] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                </span>
                <span className="tracking-tight">Call Us: +91 8137837374</span>
              </motion.a>

              {/* Secondary Email Button with Modern Glassmorphic Aura */}
              <motion.a
                href="mailto:info@aiderinfotech.com"
                aria-label="Email Aider Infotech team at info@aiderinfotech.com"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-[#00E676]/60 text-white font-medium text-sm sm:text-base transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(0,230,118,0.2)]"
              >
                <Mail className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#00E676] transition-colors duration-300" />
                <span>Email Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#00E676] transition-all duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>

            {/* Calicut Location Tagline */}
            <div className="mt-8 pt-5 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-[#9CA3AF]/80">
              <span className="tracking-wider">CALICUT HQ: 3RD FLOOR, CITY CORNER BLDG, NADAKKAV</span>
              <span className="text-[#00E676] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
                OFFICE VISITS & CONSULTATIONS OPEN
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;
