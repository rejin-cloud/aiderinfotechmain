"use client";

import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SOLUTION_TAGS = [
  { label: "# Software Development", href: "#services" },
  { label: "# Web Development", href: "#services" },
  { label: "# E-Commerce", href: "#services" },
  { label: "# Mobile Apps", href: "#services" },
  { label: "# ERP and CRM Development", href: "#services" },
  { label: "# Digital Marketing & SEO", href: "#services" },
];

export function GlobalTransition() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const pillsRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const starsRef = useRef<HTMLDivElement | null>(null);

  // Dense particle enhancement layer (Section 4 spec)
  const localStars = useMemo(() => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      stars.push({
        id: i,
        top: `${(i * 19.3 + 7) % 94}%`,
        left: `${(i * 27.7 + 5) % 94}%`,
        size: 1 + ((i * 3) % 2.5),
        color: i % 5 === 0 ? "#00E676" : i % 7 === 0 ? "#00E5FF" : "#FFFFFF",
        baseOpacity: 0.2 + ((i * 7) % 5) * 0.12,
      });
    }
    return stars;
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const heading = headingRef.current;
    const pills = pillsRef.current;
    const glow = glowRef.current;
    const stars = starsRef.current;

    if (!section || !heading || !pills) return;

    const ctx = gsap.context(() => {
      // Initial state: low opacity emerging from dark starfield
      gsap.set(heading, {
        opacity: 0.12,
        scale: 0.95,
        y: 30,
        filter: "blur(6px)",
      });

      gsap.set(pills, {
        opacity: 0.08,
        scale: 0.92,
        y: 25,
      });

      if (glow) {
        gsap.set(glow, {
          opacity: 0.12,
          scale: 0.75,
        });
      }

      if (stars) {
        gsap.set(stars, {
          opacity: 0.2,
        });
      }

      // Scroll-linked scrub timeline driven by the sticky section's scroll progress
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scrub tracking user scroll
          invalidateOnRefresh: true,
        },
      });

      // 1. Heading fades in from low opacity and clarifies (0.0 to 0.45)
      tl.to(
        heading,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: "blur(0px)",
          ease: "power2.out",
          duration: 0.45,
        },
        0
      );

      // 2. Radial atmospheric glow expands and brightens (0.0 to 0.5)
      if (glow) {
        tl.to(
          glow,
          {
            opacity: 0.65,
            scale: 1.15,
            ease: "power2.out",
            duration: 0.5,
          },
          0
        );
      }

      // 3. Dense starfield sparkles brighten in sync (0.0 to 0.45)
      if (stars) {
        tl.to(
          stars,
          {
            opacity: 1,
            ease: "power2.out",
            duration: 0.45,
          },
          0
        );
      }

      // 4. Pill-shaped tag buttons scrub into clarity (0.12 to 0.5)
      tl.to(
        pills,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.38,
        },
        0.12
      );

      // 5. Sustained reading & interaction hold (0.5 to 0.9)
      tl.to({}, { duration: 0.4 });

      // 6. Subtle soft exit fade (0.9 to 1.0) into next section
      tl.to(
        [heading, pills],
        {
          opacity: 0.35,
          scale: 0.98,
          ease: "power1.in",
          duration: 0.1,
        },
        0.9
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative h-[180vh] w-full bg-transparent select-none z-10"
    >
      {/* Sticky Full-Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center py-16 px-6 md:px-12 overflow-hidden">
        {/* Dense particle enhancement layer (Section 4 spec) */}
        <div
          ref={starsRef}
          className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
          aria-hidden="true"
        >
          {localStars.map((s) => (
            <span
              key={s.id}
              className="absolute rounded-full"
              style={{
                top: s.top,
                left: s.left,
                width: `${s.size}px`,
                height: `${s.size}px`,
                backgroundColor: s.color,
                opacity: s.baseOpacity,
                boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
              }}
            />
          ))}
        </div>

        {/* Atmospheric Radial Teal Glow behind centered content */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.24)_0%,rgba(0,229,255,0.08)_35%,rgba(0,230,118,0.03)_55%,transparent_75%)] blur-[95px] -z-10 will-change-transform"
          aria-hidden="true"
        />

        {/* Main Centered Content Container */}
        <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center text-center z-10">
          {/* Centered Heading — Exactly 2 Lines */}
          <div ref={headingRef} className="w-full will-change-transform">
            <h2 className="font-[family-name:var(--font-outfit)] font-light tracking-[-0.01em] text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] leading-[1.15] sm:leading-[1.18]">
              <span className="block text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.15)] sm:whitespace-nowrap">
                Best Digital Solutions
              </span>
              <span className="block text-white/95 mt-2 sm:mt-3 drop-shadow-[0_2px_20px_rgba(255,255,255,0.12)] sm:whitespace-nowrap">
                Company in Calicut
              </span>
            </h2>
          </div>

          {/* Pill-shaped tag buttons wrapping to two rows - Enlarged HUD */}
          <div
            ref={pillsRef}
            className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 max-w-5xl mx-auto will-change-transform px-4"
          >
            {SOLUTION_TAGS.map((tag, idx) => (
              <a
                key={idx}
                href={tag.href}
                className="group relative inline-flex items-center justify-center px-5 py-2.5 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-tight text-white transition-all duration-300 ease-out border border-white/15 hover:border-[#00E676]/60 hover:text-white hover:bg-white/[0.1] hover:shadow-[0_0_30px_rgba(0,230,118,0.3)] hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-black/40"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <span className="text-[#00E676] group-hover:text-white transition-colors duration-300 mr-2 font-mono text-base sm:text-lg md:text-xl font-bold">
                  #
                </span>
                <span className="drop-shadow-sm">{tag.label.replace("# ", "")}</span>
                <span className="w-2 h-2 rounded-full bg-[#00E676] opacity-0 group-hover:opacity-100 transition-all duration-300 ml-2.5 shadow-[0_0_8px_#00E676] -translate-x-1 group-hover:translate-x-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalTransition;
