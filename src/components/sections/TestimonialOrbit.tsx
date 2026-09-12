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
  const [radius, setRadius] = useState(220); // Default orbit radius
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);

  // Handle responsive radius calculation based on screen size
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) {
        setRadius(155);
      } else if (window.innerWidth < 1024) {
        setRadius(190);
      } else {
        setRadius(230);
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

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

  // SVG arc calculation parameters
  const strokeWidth = 2.5;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <section className="relative py-24 md:py-32 bg-[#0A0E14] text-white overflow-hidden select-none border-b border-white/5">
      {/* Ambient background glow behind the orbit */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,230,118,0.06)_0%,transparent_70%)] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
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
            className="lg:col-span-7 relative flex items-center justify-center min-h-[460px] sm:min-h-[560px] md:min-h-[620px] w-full"
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
                      ? "w-14 h-14 sm:w-16 sm:h-16 ring-4 ring-[#00E676] ring-offset-2 ring-offset-[#0A0E14] shadow-[0_0_25px_rgba(0,230,118,0.75)] scale-110"
                      : "w-10 h-10 sm:w-12 sm:h-12 border border-white/20 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-115 hover:border-[#00E676]"
                  }`}
                  aria-label={`Select testimonial from ${item.name} at ${item.company}`}
                >
                  {/* Avatar image */}
                  <Image
                    src={item.avatar}
                    alt={`Avatar of ${item.name} from ${item.company}`}
                    width={64}
                    height={64}
                    className="w-full h-full rounded-full object-cover pointer-events-none"
                    loading="lazy"
                    unoptimized
                  />

                  {/* Active indicator glow dot */}
                  {isActive && (
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#00E676] rounded-full border-2 border-[#0A0E14] shadow-[0_0_10px_#00E676]" />
                  )}
                </motion.button>
              );
            })}

            {/* CENTER TESTIMONIAL CARD */}
            <div className="relative z-10 w-[310px] sm:w-[400px] md:w-[440px] pointer-events-auto">
              <div className="glass-card p-6 sm:p-8 rounded-3xl bg-[#121721]/92 border border-white/10 backdrop-blur-2xl shadow-[0_25px_70px_rgba(0,0,0,0.85)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, y: 14, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -14, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex flex-col justify-between min-h-[220px] sm:min-h-[240px]"
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

                    {/* 1. Testimonial Quote Text */}
                    <blockquote className="text-base sm:text-lg font-medium text-white/95 leading-relaxed tracking-tight mb-5">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </blockquote>

                    <div>
                      {/* 2. Reviewer Name */}
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                        {activeTestimonial.name}
                      </h3>

                      {/* 3. Mixed Star Rating Row (Out of 5) */}
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

                      {/* 4. Title, Company + Stat Badge Row */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10 gap-2">
                        <span className="text-xs sm:text-sm text-[#9CA3AF] font-medium truncate">
                          {activeTestimonial.title} &middot; {activeTestimonial.company}
                        </span>

                        {/* 5. Stat Badge */}
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
