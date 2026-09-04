"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA, Department } from "@/data/content";
import { FloatingStarfield } from "./FloatingStarfield";
import {
  GraduationCap,
  Sparkles,
  Cpu,
  ArrowRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const DEPT_ICONS: Record<string, React.ReactNode> = {
  academy: <GraduationCap className="w-4 h-4 text-[#00E5FF]" />,
  creative: <Sparkles className="w-4 h-4 text-[#00E676]" />,
  techstore: <Cpu className="w-4 h-4 text-[#A855F7]" />,
};

function CinematicMotionShowcase({
  dept,
  accentColor,
  priority = false,
}: {
  dept: Department;
  accentColor: string;
  priority?: boolean;
}) {
  const images =
    dept.images && dept.images.length > 0
      ? dept.images
      : [{ src: dept.image, alt: dept.imageAlt, caption: dept.name }];

  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-cycle through motion pictures every 5 seconds with fixed dependency size
  const startAutoCycle = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (images.length <= 1 || isHovered) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 5000);
  }, [images.length, isHovered]);

  useEffect(() => {
    startAutoCycle();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoCycle]);

  const selectTab = (idx: number) => {
    setActiveIdx(idx);
    startAutoCycle();
  };

  const currentImage = images[activeIdx];

  // Alternating cinematic Ken Burns motions: slow zoom, drift pan, and gentle rotation
  const motionStyles = [
    { scale: [1, 1.15], x: [0, -14], rotate: [0, -0.7] },
    { scale: [1.15, 1.02], x: [-10, 10], rotate: [-0.6, 0.6] },
    { scale: [1.02, 1.16], y: [0, -10], rotate: [0.5, -0.5] },
  ];
  const currentMotion = motionStyles[activeIdx % motionStyles.length];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[250px] sm:h-[285px] md:h-[310px] overflow-hidden bg-[#0A0E14] shrink-0 border-b border-white/10 select-none group/showcase"
    >
      {/* Animated Motion Picture Layer (Zooming, Rotating, and Fading) */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentImage.src}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            scale: currentMotion.scale,
            x: currentMotion.x || 0,
            y: currentMotion.y || 0,
            rotate: currentMotion.rotate || 0,
          }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 6.5, ease: "easeInOut" },
            x: { duration: 6.5, ease: "easeInOut" },
            y: { duration: 6.5, ease: "easeInOut" },
            rotate: { duration: 6.5, ease: "easeInOut" },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
            priority={priority && activeIdx === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Ambient Shading & Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/35 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-radial from-transparent via-black/15 to-black/60 pointer-events-none z-10" />

      {/* Floating Department Badge (Top Left) */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 shadow-lg">
        {DEPT_ICONS[dept.id] || <Sparkles className="w-4 h-4 text-[#00E676]" />}
        <span className="text-[11px] font-mono font-semibold text-white tracking-wide">
          {dept.badge.split("//")[0].trim()}
        </span>
      </div>

      {/* Location Watermark Tag (Top Right) */}
      <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#9CA3AF] shadow-md">
        CALICUT // HQ
      </div>

      {/* Left/Right Navigation Chevrons (Visible on Hover/Touch) */}
      {images.length > 1 && (
        <div className="absolute inset-y-0 inset-x-2.5 z-20 flex items-center justify-between pointer-events-none">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              selectTab((activeIdx - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
            className="p-1.5 rounded-full bg-black/65 hover:bg-black/90 border border-white/15 text-white/80 hover:text-white pointer-events-auto opacity-0 group-hover/showcase:opacity-100 transition-all hover:scale-110 active:scale-95 shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              selectTab((activeIdx + 1) % images.length);
            }}
            aria-label="Next image"
            className="p-1.5 rounded-full bg-black/65 hover:bg-black/90 border border-white/15 text-white/80 hover:text-white pointer-events-auto opacity-0 group-hover/showcase:opacity-100 transition-all hover:scale-110 active:scale-95 shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Bottom Picture Info & Interactive Picture Tabs */}
      <div className="absolute bottom-3.5 left-4 right-4 z-20 flex items-center justify-between gap-2 pointer-events-none">
        {/* Active Caption Tag with pulsating live dot */}
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/90 shadow-md">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          <AnimatePresence mode="wait">
            <motion.span
              key={currentImage.caption}
              initial={{ opacity: 0, y: 2 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -2 }}
              transition={{ duration: 0.25 }}
              className="truncate max-w-[130px] sm:max-w-[160px]"
            >
              {currentImage.caption}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Interactive Picture Tab Pills */}
        {images.length > 1 && (
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 pointer-events-auto shadow-md">
            {images.map((img, tIdx) => {
              const isActive = tIdx === activeIdx;
              return (
                <button
                  key={tIdx}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    selectTab(tIdx);
                  }}
                  aria-label={`View photo ${tIdx + 1}: ${img.caption}`}
                  className={`relative flex items-center justify-center px-2 py-0.5 rounded-full text-[9px] font-mono font-bold transition-all ${
                    isActive
                      ? "text-black shadow-sm"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                  style={{
                    backgroundColor: isActive ? accentColor : "transparent",
                  }}
                >
                  <span>0{tIdx + 1}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function DepartmentCard({ dept, index }: { dept: Department; index: number }) {
  const accentColor = dept.color || "#00E676";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="glass-card group relative flex flex-col justify-between rounded-3xl border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-500 shadow-xl"
      style={{
        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)",
      }}
    >
      {/* Subtle department ambient glow on hover */}
      <div
        className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-[90px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />

      {/* Top Cinematic Motion Picture Showcase (Zooming, Rotating, Fading & Tabs) */}
      <CinematicMotionShowcase
        dept={dept}
        accentColor={accentColor}
        priority={index === 0}
      />

      {/* Bottom Content Area */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          {/* Tagline */}
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-xs font-mono font-bold tracking-wider uppercase"
              style={{ color: accentColor }}
            >
              {dept.tagline}
            </span>
          </div>

          {/* Department Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-white transition-colors">
            {dept.name}
          </h3>

          {/* Headline Subtitle */}
          <h4 className="text-sm font-semibold text-white/90 mb-3 line-clamp-1">
            {dept.headline}
          </h4>

          {/* Body Description */}
          <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed mb-5 line-clamp-3">
            {dept.description}
          </p>

          {/* Key Highlight Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {dept.pills.slice(0, 4).map((pill) => (
              <span
                key={pill}
                className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Dedicated Action Buttons (Learn More & Enquire) */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href={dept.learnMoreHref}
            className="w-full sm:flex-1 py-3 px-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/30 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all group/btn"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 text-white transition-transform group-hover/btn:translate-x-1" />
          </Link>

          <Link
            href={dept.enquireHref}
            className="w-full sm:flex-1 py-3 px-4 rounded-full text-black text-xs font-extrabold text-center flex items-center justify-center gap-1.5 transition-all shadow-md hover:brightness-110"
            style={{
              backgroundColor: accentColor,
            }}
          >
            <span>Enquire Now</span>
            <ExternalLink className="w-3.5 h-3.5 text-black" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function AcademyAndWhyUs() {
  return (
    <section className="relative py-28 px-6 md:px-12 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Anchor targets for #departments and #academy */}
        <div id="departments" className="relative -top-24" />
        <div id="academy" className="relative -top-24" />

        {/* Departments Introduction Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#00E676]" />
            <span>Our Ecosystem & Specialized Divisions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Meet the Departments of Aider
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Beyond enterprise software engineering, we drive specialized impact across career tech education, performance digital marketing, and high-performance hardware computing in Calicut.
          </p>
        </div>

        {/* 3 Department Showcase Cards (Styled strictly like Reference Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-36">
          {SITE_DATA.departments.map((dept, index) => (
            <DepartmentCard key={dept.id} dept={dept} index={index} />
          ))}
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

          {/* Interactive Floating Starfield Constellation */}
          <FloatingStarfield items={SITE_DATA.differentiators} />
        </div>
      </div>
    </section>
  );
}
