"use client";

import React, { useState, useEffect, useCallback, useId } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Differentiator } from "@/data/content";
import {
  Layers,
  TrendingUp,
  Users,
  Cpu,
  Zap,
  MessageSquare,
  ShieldCheck,
  Award,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Maximize2,
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

// Spatial coordinates (percentages) for the 8 stars across the cosmic canvas
// Carefully tuned so cards with visible headings do not collide on desktop
interface StarPosition {
  x: number; // percentage left
  y: number; // percentage top
  floatY: [number, number, number];
  floatX: [number, number, number];
  duration: number;
}

const STAR_POSITIONS: StarPosition[] = [
  { x: 18, y: 18, floatY: [-8, 8, -8], floatX: [-4, 5, -4], duration: 5.4 },
  { x: 50, y: 15, floatY: [7, -9, 7], floatX: [5, -4, 5], duration: 6.2 },
  { x: 80, y: 20, floatY: [-6, 9, -6], floatX: [-5, 4, -5], duration: 4.9 },
  { x: 28, y: 47, floatY: [8, -7, 8], floatX: [4, -5, 4], duration: 5.8 },
  { x: 72, y: 48, floatY: [-9, 8, -9], floatX: [-4, 6, -4], duration: 5.1 },
  { x: 18, y: 77, floatY: [6, -8, 6], floatX: [5, -4, 5], duration: 6.5 },
  { x: 50, y: 83, floatY: [-7, 9, -7], floatX: [-5, 4, -5], duration: 5.6 },
  { x: 80, y: 78, floatY: [8, -7, 8], floatX: [4, -6, 4], duration: 5.0 },
];

// Constellation connecting links between star indices
const CONSTELLATION_LINKS: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 5],
  [3, 6],
  [4, 6],
  [4, 7],
  [5, 6],
  [6, 7],
];

interface FloatingStarfieldProps {
  items: Differentiator[];
}

export function FloatingStarfield({ items }: FloatingStarfieldProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  // When modal is open, seamlessly conceal header and lock background scroll
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.classList.add("starfield-modal-open");
    } else {
      document.body.classList.remove("starfield-modal-open");
    }
    return () => {
      document.body.classList.remove("starfield-modal-open");
    };
  }, [selectedIdx]);

  // Keyboard navigation when zoomed into a star
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") {
        setSelectedIdx(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null ? (prev + 1) % items.length : 0));
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) =>
          prev !== null ? (prev - 1 + items.length) % items.length : items.length - 1
        );
      }
    },
    [selectedIdx, items.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Subtle interactive parallax tilt on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 14, y: y * 14 });
  };

  const selectedItem = selectedIdx !== null ? items[selectedIdx] : null;

  return (
    <div className="relative w-full">
      {/* DESKTOP CONSTELLATION COSMIC CANVAS (>= 1024px) */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        className="hidden lg:block relative w-full h-[700px] rounded-3xl border border-white/10 bg-[#0A0E14]/70 backdrop-blur-xl overflow-hidden select-none shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        {/* Deep Space Cosmic Glows */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Radial nebula glows */}
          <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] rounded-full bg-[#00E676]/[0.05] blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00E5FF]/[0.04] blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-white/[0.02] blur-[100px]" />

          {/* Micro Twinkling Cosmic Dust (stardust layer) */}
          <div className="absolute inset-0 opacity-40">
            {[
              { top: "12%", left: "28%", size: 2, delay: 0.2 },
              { top: "25%", left: "62%", size: 3, delay: 1.1 },
              { top: "38%", left: "15%", size: 2, delay: 0.7 },
              { top: "45%", left: "88%", size: 2.5, delay: 1.8 },
              { top: "58%", left: "34%", size: 2, delay: 0.4 },
              { top: "65%", left: "54%", size: 3, delay: 1.4 },
              { top: "72%", left: "22%", size: 2, delay: 2.0 },
              { top: "82%", left: "68%", size: 2.5, delay: 0.9 },
              { top: "20%", left: "92%", size: 2, delay: 1.6 },
              { top: "88%", left: "38%", size: 3, delay: 0.5 },
            ].map((star, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.2, 0.85, 0.2] }}
                transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: star.delay }}
                className="absolute rounded-full bg-white shadow-[0_0_6px_#ffffff]"
                style={{
                  top: star.top,
                  left: star.left,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Constellation Connector Lines Layer */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          }}
        >
          {CONSTELLATION_LINKS.map(([startIdx, endIdx], i) => {
            const startPos = STAR_POSITIONS[startIdx];
            const endPos = STAR_POSITIONS[endIdx];
            if (!startPos || !endPos) return null;

            const isHighlighted = hoveredIdx === startIdx || hoveredIdx === endIdx;

            return (
              <g key={`link-${i}`}>
                <line
                  x1={`${startPos.x}%`}
                  y1={`${startPos.y}%`}
                  x2={`${endPos.x}%`}
                  y2={`${endPos.y}%`}
                  stroke={isHighlighted ? "#00E676" : "rgba(255, 255, 255, 0.12)"}
                  strokeWidth={isHighlighted ? 1.5 : 1}
                  strokeDasharray={isHighlighted ? "none" : "4 4"}
                  className="transition-all duration-300"
                />
                {isHighlighted && (
                  <line
                    x1={`${startPos.x}%`}
                    y1={`${startPos.y}%`}
                    x2={`${endPos.x}%`}
                    y2={`${endPos.y}%`}
                    stroke="#00E676"
                    strokeWidth={4}
                    strokeOpacity={0.25}
                    className="blur-[2px]"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Brand Guide Badge (top-left inside canvas) */}
        <div className="absolute top-5 left-6 z-10 flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#9CA3AF]">
          <span className="w-2 h-2 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676] animate-pulse" />
          <span className="text-white font-semibold tracking-wide">AIDER INFOTECH</span>
          <span className="text-white/30">//</span>
          <span className="text-[#00E676] font-semibold">8 CORE PILLARS OF EXCELLENCE</span>
        </div>

        {/* Scattered Glowing Stars Floating in Space */}
        <div
          className="relative w-full h-full transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        >
          {items.map((item, idx) => {
            const pos = STAR_POSITIONS[idx] || {
              x: 10 + (idx % 4) * 22,
              y: 20 + Math.floor(idx / 4) * 45,
              floatY: [-8, 8, -8],
              floatX: [-4, 4, -4],
              duration: 5.0,
            };

            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={item.id}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  willChange: "transform",
                }}
                animate={{
                  y: pos.floatY,
                  x: pos.floatX,
                }}
                transition={{
                  duration: pos.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Clickable Star Node with Visible Heading */}
                <button
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group relative flex items-center gap-3.5 p-2.5 pr-4 rounded-2xl bg-[#0A0E14]/90 hover:bg-[#0E1520] border border-white/15 hover:border-[#00E676]/70 backdrop-blur-xl shadow-lg hover:shadow-[0_0_30px_rgba(0,230,118,0.35)] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00E676]/60 text-left w-[250px] sm:w-[270px]"
                >
                  {/* Glowing Star Core Orb */}
                  <div className="relative shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/20 group-hover:border-[#00E676] group-hover:bg-[#00E676]/10 transition-all duration-300">
                    {/* Multi-layered Pulsing Star Aura */}
                    <div
                      className={`absolute -inset-1 rounded-xl bg-[#00E676]/30 blur-md pointer-events-none transition-opacity duration-300 ${
                        isHovered ? "opacity-100 scale-125" : "opacity-40"
                      }`}
                    />
                    <div className="relative z-10">
                      {ICON_MAP[item.iconName] || (
                        <Sparkles className="w-5 h-5 text-[#00E676]" />
                      )}
                    </div>

                    {/* Orbiting Star Flare Indicator */}
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676] animate-ping opacity-75" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00E676]" />
                  </div>

                  {/* Heading & Tagline Content (Fully Visible When Scattered) */}
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#00E676] tracking-wider uppercase mb-0.5">
                      <span>0{idx + 1}</span>
                      <span className="text-white/30">•</span>
                      <span className="text-[#9CA3AF] text-[9px] group-hover:text-white/80 transition-colors">
                        EXPLORE
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug group-hover:text-[#00E676] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtle Zoom Hint Icon */}
                  <div className="shrink-0 text-[#9CA3AF]/60 group-hover:text-[#00E676] group-hover:scale-110 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MOBILE / TABLET CELESTIAL CLUSTER (< 1024px) */}
      <div className="block lg:hidden relative w-full rounded-3xl border border-white/10 bg-[#0A0E14]/70 backdrop-blur-xl p-5 sm:p-6 overflow-hidden shadow-xl">
        {/* Ambient Nebula Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#00E676]/[0.06] blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#00E5FF]/[0.05] blur-[80px] pointer-events-none" />

        {/* Mobile Guide Pill */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00E676]">
            <Sparkles className="w-3.5 h-3.5 text-[#00E676] animate-pulse" />
            <span className="font-semibold text-white">AIDER INFOTECH</span>
            <span className="text-white/30">//</span>
            <span>8 CORE PILLARS</span>
          </div>
          <span className="text-[11px] font-mono text-[#9CA3AF]">
            TAP TO EXPLORE
          </span>
        </div>

        {/* Mobile Staggered Floating Constellation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <motion.div
                animate={{
                  y: idx % 2 === 0 ? [-3, 3, -3] : [3, -3, 3],
                }}
                transition={{
                  duration: 4.5 + (idx % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <button
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                className="w-full text-left flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#00E676]/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="relative shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/15 group-hover:border-[#00E676] group-hover:bg-[#00E676]/10 transition-all">
                    <div className="absolute -inset-0.5 rounded-xl bg-[#00E676]/20 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      {ICON_MAP[item.iconName] || (
                        <Sparkles className="w-5 h-5 text-[#00E676]" />
                      )}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-[#00E676] mb-0.5">
                      0{idx + 1} // STAR
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-[#00E676] transition-colors leading-snug">
                      {item.title}
                    </div>
                  </div>
                </div>

                <Maximize2 className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#00E676] shrink-0 ml-2" />
              </button>
            </motion.div>
          </motion.div>
          ))}
        </div>
      </div>

      {/* FULL DETAILED ZOOM MODAL (Centered in Middle of Screen, Detached from Layout) */}
      {mounted && typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedItem && selectedIdx !== null && (
            <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
              {/* Deep Backdrop Blur with Light Dismiss */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelectedIdx(null)}
                className="fixed inset-0 bg-black/90 backdrop-blur-xl"
                aria-hidden="true"
              />

            {/* Zoomed Star Detail Container - Centered in Middle */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={{ opacity: 0, scale: 0.85, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 32,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-[460px] sm:max-w-[490px] max-h-[88dvh] flex flex-col bg-[#0A0E14] border border-[#00E676]/40 rounded-3xl p-4 sm:p-6 shadow-[0_0_80px_rgba(0,230,118,0.25)] overflow-hidden m-auto"
            >
              {/* Internal Cosmic Nebula Glows */}
              <div className="absolute -top-28 -right-28 w-60 h-60 rounded-full bg-[#00E676]/15 blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-28 -left-28 w-60 h-60 rounded-full bg-[#00E5FF]/10 blur-[80px] pointer-events-none" />

              {/* Close Button (X) */}
              <button
                type="button"
                onClick={() => setSelectedIdx(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 text-white transition-all hover:scale-105"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Scrollable Content Body with Hidden Scrollbar */}
              <div className="overflow-y-auto flex-1 min-h-0 pr-1 space-y-3.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {/* Star Core Header & Title */}
                <div className="flex items-start gap-3.5">
                  <div className="relative shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-[#00E676]/50 shadow-[0_0_20px_rgba(0,230,118,0.3)]">
                    <div className="absolute -inset-1 rounded-xl bg-[#00E676]/25 blur-sm pointer-events-none" />
                    <div className="relative z-10">
                      {ICON_MAP[selectedItem.iconName] || (
                        <Sparkles className="w-5 h-5 text-[#00E676]" />
                      )}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 pr-6">
                    <h2
                      id={titleId}
                      className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug mb-1"
                    >
                      {selectedItem.title}
                    </h2>
                    {selectedItem.subtitle && (
                      <p className="text-xs font-semibold text-[#00E676]">
                        {selectedItem.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Core Overview Description */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Measurable Enterprise Metric Banner */}
                {selectedItem.metric && (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#00E676]/10 via-transparent to-transparent border border-[#00E676]/25">
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-[#00E676] font-mono tracking-tight leading-tight">
                        {selectedItem.metric.value}
                      </div>
                      <div className="text-[11px] font-medium text-white/90">
                        {selectedItem.metric.label}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-[#9CA3AF]">
                      <CheckCircle2 className="w-3 h-3 text-[#00E676]" />
                      <span>STANDARD</span>
                    </div>
                  </div>
                )}

                {/* In-Depth Capability Pillars */}
                {selectedItem.details && selectedItem.details.length > 0 && (
                  <div>
                    <div className="text-[11px] font-mono font-bold text-[#9CA3AF] uppercase tracking-wider mb-2">
                      Key Capabilities
                    </div>
                    <div className="space-y-2">
                      {selectedItem.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676] shrink-0 mt-0.5" />
                          <span className="text-xs text-[#9CA3AF] leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Capability Chips / Tags */}
                {selectedItem.tags && selectedItem.tags.length > 0 && (
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Navigation & Controls */}
              <div className="pt-3.5 mt-2 border-t border-white/10 flex items-center justify-between shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setSelectedIdx(
                      (selectedIdx - 1 + items.length) % items.length
                    )
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all group"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-[#00E676] group-hover:-translate-x-0.5 transition-transform" />
                  <span>Prev</span>
                </button>

                <div className="text-[10px] font-mono text-[#9CA3AF]/60 hidden sm:block">
                  ESC OR CLICK OUTSIDE TO CLOSE
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setSelectedIdx((selectedIdx + 1) % items.length)
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all group"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#00E676] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </div>
  );
}

export default FloatingStarfield;
