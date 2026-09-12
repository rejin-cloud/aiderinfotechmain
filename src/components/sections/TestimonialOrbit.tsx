"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Building2 } from "lucide-react";
import { TESTIMONIALS, Testimonial } from "@/data/testimonials";

const AUTO_ROTATE_INTERVAL = 4500; // 4.5 seconds

export function TestimonialOrbit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [radius] = useState(230); // Orbit radius for desktop
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);

  // Smooth continuous timer using requestAnimationFrame for progress arc & auto-rotation
  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setProgress(0);
    lastTimeRef.current = performance.now();
  }, []);

  const handleAvatarClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
    lastTimeRef.current = performance.now();
  };

  useEffect(() => {
    lastTimeRef.current = performance.now();

    const loop = (now: number) => {
      const elapsed = now - lastTimeRef.current;
      const currentProgress = Math.min(elapsed / AUTO_ROTATE_INTERVAL, 1);
      setProgress(currentProgress);

      if (currentProgress >= 1) {
        nextTestimonial();
      } else {
        animFrameRef.current = requestAnimationFrame(loop);
      }
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [nextTestimonial, activeIndex]);

  const activeTestimonial: Testimonial = TESTIMONIALS[activeIndex];
  const total = TESTIMONIALS.length;

  // SVG arc calculation parameters for desktop
  const strokeWidth = 2.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#0A0E14] text-white overflow-hidden select-none border-b border-white/5">
      {/* Ambient background glow behind the orbit */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,230,118,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* =================================================================
            MOBILE LAYOUT (Screen width < 1024px: lg:hidden)
        ================================================================== */}
        <div className="flex flex-col items-center text-center lg:hidden max-w-xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#00E676] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
            CLIENT BUSINESS STORIES
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
            Stories that keep{" "}
            <span className="italic font-serif font-normal text-white/60">
              circling
            </span>{" "}
            back.
          </h2>

          <p className="text-sm sm:text-base text-[#9CA3AF] max-w-md font-normal leading-relaxed mb-8">
            Discover how enterprises, growing brands, and startups partner with us to transform their digital presence and drive measurable revenue.
          </p>

          {/* Mobile Avatar Selector Row with Auto-Rotate Progress Bar */}
          <div className="w-full mb-6 flex flex-col items-center">
            {/* Avatars */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 flex-wrap px-2 mb-4">
              {TESTIMONIALS.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleAvatarClick(idx)}
                    className={`relative rounded-full transition-all duration-300 focus:outline-none ${
                      isActive
                        ? "w-12 h-12 sm:w-14 sm:h-14 ring-2 ring-[#00E676] ring-offset-2 ring-offset-[#0A0E14] shadow-[0_0_18px_rgba(0,230,118,0.6)] scale-105"
                        : "w-9 h-9 sm:w-10 sm:h-10 border border-white/20 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-105"
                    }`}
                    aria-label={`Select testimonial from ${item.name}`}
                  >
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={56}
                      height={56}
                      className="w-full h-full rounded-full object-cover pointer-events-none"
                      unoptimized
                    />
                    {isActive && (
                      <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#00E676] rounded-full border border-[#0A0E14]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Progress Line Indicator */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#00E676] transition-all duration-75 ease-linear shadow-[0_0_8px_#00E676]"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>

          {/* Mobile Testimonial Card */}
          <div className="w-full text-left">
            <div className="glass-card p-6 sm:p-8 rounded-3xl bg-[#121721]/95 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col justify-between min-h-[220px]"
                >
                  {/* Top Business & Industry Header */}
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2 truncate">
                      <Building2 className="w-4 h-4 text-[#00E676] shrink-0" />
                      <span className="text-xs font-mono font-bold text-white tracking-wider truncate">
                        {activeTestimonial.company}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#00E5FF] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 shrink-0 font-medium">
                      {activeTestimonial.companyCategory}
                    </span>
                  </div>

                  {/* Testimonial Quote Text */}
                  <blockquote className="text-sm sm:text-base font-medium text-white/95 leading-relaxed mb-5">
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </blockquote>

                  <div>
                    {/* Reviewer Name */}
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                      {activeTestimonial.name}
                    </h3>

                    {/* Star Rating Row */}
                    <div className="flex items-center gap-1 my-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < activeTestimonial.rating
                              ? "fill-[#00E676] text-[#00E676]"
                              : "fill-white/10 text-white/20"
                          }`}
                        />
                      ))}
                      <span className="text-xs font-mono text-[#00E676] ml-2 font-bold">
                        {activeTestimonial.rating}.0 / 5.0
                      </span>
                    </div>

                    {/* Title, Company + Stat Badge Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 pt-3 border-t border-white/10 gap-2">
                      <span className="text-xs text-[#9CA3AF] font-medium truncate">
                        {activeTestimonial.title} &middot; {activeTestimonial.company}
                      </span>

                      <span className="self-start sm:self-auto shrink-0 px-3 py-1 rounded-full bg-[#00E676] text-[#0A0E14] font-bold text-xs tracking-tight shadow-[0_0_12px_rgba(0,230,118,0.35)]">
                        {activeTestimonial.statBadge}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =================================================================
            DESKTOP LAYOUT (Screen width >= 1024px: hidden lg:grid)
            100% UNTOUCHED ORIGINAL 360° ORBIT STAGE
        ================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN: Eyebrow + Typography Heading */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#00E676] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />
              CLIENT BUSINESS STORIES
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-white leading-[1.08]">
              Stories that <br />
              keep <br />
              <span className="italic font-serif font-normal text-white/50">
                circling
              </span>{" "}
              <br />
              back.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#9CA3AF] max-w-md font-normal leading-relaxed">
              Discover how enterprises, growing brands, and startups partner with us to transform their digital presence and drive measurable revenue.
            </p>
          </div>

          {/* RIGHT COLUMN: Interactive Orbit Stage */}
          <div
            ref={containerRef}
            className="lg:col-span-7 relative flex items-center justify-center min-h-[620px] w-full"
          >
            {/* SVG Orbit Guides & Animated Progress Arc */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
              style={{
                top: 0,
                left: 0,
              }}
              viewBox={`-${radius + 50} -${radius + 50} ${(radius + 50) * 2} ${(radius + 50) * 2}`}
            >
              {/* Outer faint accent guide circle */}
              <circle
                cx="0"
                cy="0"
                r={radius * 1.15}
                stroke="rgba(255, 255, 255, 0.04)"
                strokeWidth="1"
                fill="none"
              />

              {/* Main Dashed Orbital Ring */}
              <circle
                cx="0"
                cy="0"
                r={radius}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                fill="none"
              />

              {/* Inner ambient ring */}
              <circle
                cx="0"
                cy="0"
                r={radius * 0.84}
                stroke="rgba(0, 230, 118, 0.06)"
                strokeWidth="1"
                fill="none"
              />

              {/* Animated Progress Countdown Arc tracing the ring starting from top (12 o'clock) */}
              <circle
                cx="0"
                cy="0"
                r={radius}
                stroke="#00E676"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
                transform="rotate(-90)"
                className="transition-all duration-75 ease-linear shadow-[0_0_12px_#00E676]"
              />
            </svg>

            {/* AVATAR THUMBNAILS floating along the orbital ring */}
            {TESTIMONIALS.map((item, idx) => {
              const angle = ((idx - activeIndex) / total) * 2 * Math.PI - Math.PI / 2;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const isActive = idx === activeIndex;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleAvatarClick(idx)}
                  animate={{ x, y }}
                  transition={{
                    type: "spring",
                    stiffness: 140,
                    damping: 22,
                    mass: 0.8,
                  }}
                  className={`absolute rounded-full flex items-center justify-center transition-all duration-300 z-20 focus:outline-none ${
                    isActive
                      ? "w-16 h-16 ring-4 ring-[#00E676] ring-offset-2 ring-offset-[#0A0E14] shadow-[0_0_25px_rgba(0,230,118,0.75)] scale-110"
                      : "w-12 h-12 border border-white/20 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-115 hover:border-[#00E676]"
                  }`}
                  aria-label={`Select testimonial from ${item.name} at ${item.company}`}
                >
                  <Image
                    src={item.avatar}
                    alt={`Avatar of ${item.name} from ${item.company}`}
                    width={64}
                    height={64}
                    className="w-full h-full rounded-full object-cover pointer-events-none"
                    loading="lazy"
                    unoptimized
                  />

                  {isActive && (
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#00E676] rounded-full border-2 border-[#0A0E14] shadow-[0_0_10px_#00E676]" />
                  )}
                </motion.button>
              );
            })}

            {/* CENTER TESTIMONIAL CARD */}
            <div className="relative z-10 w-[440px] pointer-events-auto">
              <div className="glass-card p-8 rounded-3xl bg-[#121721]/92 border border-white/10 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, y: 14, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -14, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col justify-between min-h-[240px]"
                  >
                    {/* Top Business & Industry Header */}
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-2 truncate">
                        <Building2 className="w-4 h-4 text-[#00E676] shrink-0" />
                        <span className="text-xs font-mono font-bold text-white tracking-wider truncate">
                          {activeTestimonial.company}
                        </span>
                      </div>
                      <span className="text-[10.5px] font-mono text-[#00E5FF] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 shrink-0 font-medium">
                        {activeTestimonial.companyCategory}
                      </span>
                    </div>

                    {/* Testimonial Quote Text */}
                    <blockquote className="text-lg font-medium text-white/95 leading-relaxed tracking-tight mb-5">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </blockquote>

                    <div>
                      {/* Reviewer Name */}
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {activeTestimonial.name}
                      </h3>

                      {/* Mixed Star Rating Row (Out of 5) */}
                      <div className="flex items-center gap-1 my-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < activeTestimonial.rating
                                ? "fill-[#00E676] text-[#00E676]"
                                : "fill-white/10 text-white/20"
                            }`}
                          />
                        ))}
                        <span className="text-xs font-mono text-[#00E676] ml-2 font-bold">
                          {activeTestimonial.rating}.0 / 5.0
                        </span>
                      </div>

                      {/* Title, Company + Stat Badge Row */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10 gap-2">
                        <span className="text-sm text-[#9CA3AF] font-medium truncate">
                          {activeTestimonial.title} &middot; {activeTestimonial.company}
                        </span>

                        <span className="shrink-0 px-3 py-1 rounded-full bg-[#00E676] text-[#0A0E14] font-bold text-xs tracking-tight shadow-[0_0_12px_rgba(0,230,118,0.35)]">
                          {activeTestimonial.statBadge}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialOrbit;

