"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoMatrixData from "./logo-matrix-data.json";

interface AmbientSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  color: string;
}

export function AiderLogoVisual() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const scatterProgressRef = useRef<number>(0);
  const isPastSection2Ref = useRef<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mouseRef = useRef({
    x: -9999,
    y: -9999,
    targetTiltX: 0,
    targetTiltY: 0,
    currentTiltX: 0,
    currentTiltY: 0,
    isHovered: false,
    clickRippleRadius: 0,
    clickRippleActive: false,
    clickX: 0,
    clickY: 0,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Viewport dimensions
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resizeCanvas = () => {
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;
      if (winWidth < 1024) {
        canvas.style.display = "none";
        return;
      } else {
        canvas.style.display = "block";
      }
      canvas.width = winWidth * dpr;
      canvas.height = winHeight * dpr;
      canvas.style.width = `${winWidth}px`;
      canvas.style.height = `${winHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    const isMobile = winWidth < 768;
    const isTablet = winWidth >= 768 && winWidth < 1024;
    const logoWidth = isMobile ? 280 : isTablet ? 330 : 380;
    const logoHeight = isMobile ? 360 : isTablet ? 425 : 485;

    // =========================================================================
    // 1. PRE-INITIALIZE FAST TYPED ARRAYS FOR MATRIX DOTS & SCATTER STARFIELD
    // =========================================================================
    const stepSample = isMobile ? 2 : 1;
    const rawData = logoMatrixData as [number, number, number, number][];
    const filteredData = rawData.filter((_, i) => i % stepSample === 0);
    const count = filteredData.length;

    // Logo state arrays (relative to logo top-left)
    const currentX = new Float32Array(count);
    const currentY = new Float32Array(count);
    const targetX = new Float32Array(count);
    const targetY = new Float32Array(count);
    const vx = new Float32Array(count);
    const vy = new Float32Array(count);
    const baseAlpha = new Float32Array(count);
    const colorTypes = new Uint8Array(count);
    const normY = new Float32Array(count);
    const phaseOffset = new Float32Array(count);

    // Scatter transition & Section 2 Starfield arrays (viewport coordinates)
    const scatterTargetX = new Float32Array(count);
    const scatterTargetY = new Float32Array(count);
    const driftX = new Float32Array(count);
    const driftY = new Float32Array(count);
    const driftVx = new Float32Array(count);
    const driftVy = new Float32Array(count);
    const staggerDelay = new Float32Array(count);
    const starRadius = new Float32Array(count);
    const starAlpha = new Float32Array(count);
    const isPersistentStar = new Uint8Array(count);
    const starColors: string[] = [];

    // Assign ~180 evenly distributed persistent stars to remain as Section 2 starfield
    const persistentInterval = Math.max(1, Math.floor(count / 180));

    for (let i = 0; i < count; i++) {
      const [nx, ny, cType, b] = filteredData[i];
      const tx = nx * logoWidth;
      const ty = ny * logoHeight;

      targetX[i] = tx;
      targetY[i] = ty;
      normY[i] = ny;
      colorTypes[i] = cType;
      phaseOffset[i] = tx * 0.015 + ty * 0.015;

      // Initial scatter for hero entrance animation (0.0s to 1.2s)
      const enterAngle = Math.random() * Math.PI * 2;
      const enterDist = 25 + Math.random() * 60;
      currentX[i] = tx + Math.cos(enterAngle) * enterDist;
      currentY[i] = ty + Math.sin(enterAngle) * enterDist;

      vx[i] = 0;
      vy[i] = 0;
      baseAlpha[i] = 0.65 + b * 0.35;

      // --- SCATTER COORDINATES ---
      // Distribute randomly across the viewport with radial outward bias from logo
      const dx = (nx - 0.5) * 2;
      const dy = (ny - 0.5) * 2;
      const radialDist = Math.hypot(dx, dy);

      // Stagger delay: edge dots peel off first, dense center core dissolves last
      staggerDelay[i] = Math.max(0, Math.min(0.28, (1 - radialDist * 0.8) * 0.22 + Math.random() * 0.08));

      // Random target position across full viewport
      scatterTargetX[i] = Math.random() * winWidth;
      scatterTargetY[i] = Math.random() * winHeight;

      // Gentle ambient drift in starfield
      driftX[i] = 0;
      driftY[i] = 0;
      driftVx[i] = (Math.random() - 0.5) * 0.22;
      driftVy[i] = -0.06 - Math.random() * 0.16;

      // Persistent star flag & styling
      const persistent = i % persistentInterval === 0;
      isPersistentStar[i] = persistent ? 1 : 0;
      starRadius[i] = 0.75 + Math.random() * 0.6; // 0.75px to 1.35px
      starAlpha[i] = 0.25 + Math.random() * 0.55;

      const randColor = Math.random();
      if (randColor < 0.6) {
        starColors.push("#FFFFFF"); // Crisp white
      } else if (randColor < 0.82) {
        starColors.push("#00E676"); // Brand neon green
      } else {
        starColors.push("#00E5FF"); // Electric cyan
      }
    }

    // =========================================================================
    // 2. AMBIENT FLOATING SPARKS (in Hero mode)
    // =========================================================================
    const sparkCount = isMobile ? 14 : 26;
    const sparks: AmbientSpark[] = [];
    const sparkColorPalette = ["#00E676", "#00E5FF", "#00F5D4", "#D4FFFA", "#9CA3AF"];

    for (let i = 0; i < sparkCount; i++) {
      sparks.push({
        x: Math.random() * logoWidth,
        y: Math.random() * logoHeight,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        size: 0.8 + Math.random() * 1.3,
        alpha: 0.15 + Math.random() * 0.45,
        life: Math.random() * 100,
        maxLife: 80 + Math.random() * 100,
        color: sparkColorPalette[i % sparkColorPalette.length],
      });
    }

    // =========================================================================
    // 3. MOUSE EVENT HANDLERS (Anchored to Hero Container)
    // =========================================================================
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const lx = rect.left + (rect.width - logoWidth) / 2;
      const ly = rect.top + (rect.height - logoHeight) / 2;

      mouseRef.current.x = e.clientX - lx;
      mouseRef.current.y = e.clientY - ly;
      mouseRef.current.isHovered = true;

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseRef.current.targetTiltX = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth * 0.45)));
      mouseRef.current.targetTiltY = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight * 0.45)));
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
      mouseRef.current.targetTiltX = 0;
      mouseRef.current.targetTiltY = 0;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const lx = rect.left + (rect.width - logoWidth) / 2;
      const ly = rect.top + (rect.height - logoHeight) / 2;

      mouseRef.current.clickX = e.clientX - lx;
      mouseRef.current.clickY = e.clientY - ly;
      mouseRef.current.clickRippleRadius = 0;
      mouseRef.current.clickRippleActive = true;
    };

    window.addEventListener("resize", resizeCanvas);
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("click", handleClick);

    // =========================================================================
    // 4. GSAP SCROLLTRIGGER SCRUB (Hero -> Section 2 Transition)
    // =========================================================================
    const transitionTrigger = ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      endTrigger: "#solutions",
      end: "top top", // Fully scattered when Section 2 reaches top of viewport
      scrub: 1, // Smooth forward/backward scrub tracking user scroll
      onUpdate: (self) => {
        scatterProgressRef.current = self.progress;
        if (glowRef.current) {
          glowRef.current.style.opacity = `${Math.max(0, 1 - self.progress * 1.5)}`;
        }
      },
    });

    // Fade out when scrolling past Section 2 into stats/portfolio
    const exitTrigger = ScrollTrigger.create({
      trigger: "#solutions",
      start: "bottom top",
      onEnter: () => {
        isPastSection2Ref.current = true;
        canvas.style.opacity = "0";
      },
      onLeaveBack: () => {
        isPastSection2Ref.current = false;
        canvas.style.opacity = "1";
      },
    });

    // =========================================================================
    // 5. 60 FPS RENDER LOOP WITH SCATTER DISSOLVE & DRIFT
    // =========================================================================
    let animationFrameId: number | null = null;
    const startTime = performance.now();
    let scanTimer = 0;
    const dotRadius = isMobile ? 1.05 : 1.25;

    const render = (now: number) => {
      if (winWidth < 1024 || isPastSection2Ref.current || document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const elapsed = (now - startTime) / 1000;
      ctx.clearRect(0, 0, winWidth, winHeight);

      const scatterProgress = scatterProgressRef.current;
      const rect = container.getBoundingClientRect();
      const logoX0 = rect.left + (rect.width - logoWidth) / 2;
      const logoY0 = rect.top + (rect.height - logoHeight) / 2;

      // Entrance progress (0.0s to 1.2s on page load)
      const entrance = Math.min(1, elapsed / 1.2);
      const easedEntrance = 1 - Math.pow(1 - entrance, 3);

      // Smooth mouse tilt parallax (active mainly in Hero mode)
      const m = mouseRef.current;
      m.currentTiltX += (m.targetTiltX - m.currentTiltX) * 0.06;
      m.currentTiltY += (m.targetTiltY - m.currentTiltY) * 0.06;

      // Holographic Shimmer Wave sweeping across matrix (every 4.8s)
      scanTimer += 0.016;
      const scanCycle = scanTimer % 4.8;
      const isScanning = scanCycle < 1.3 && scatterProgress < 0.25;
      const scanProgress = isScanning ? scanCycle / 1.3 : -1;
      const scanLine = scanProgress * (logoWidth + logoHeight * 0.45) - 30;

      // Click Shockwave Ripple
      if (m.clickRippleActive) {
        m.clickRippleRadius += 5.5;
        if (m.clickRippleRadius > 240) {
          m.clickRippleActive = false;
        }
      }

      // --- A. RENDER AMBIENT SPARKS (Fade as logo dissolves) ---
      if (scatterProgress < 0.6) {
        const sparkFade = 1 - scatterProgress / 0.6;
        for (let i = 0; i < sparks.length; i++) {
          const s = sparks[i];
          s.life += 0.4;
          if (s.life > s.maxLife) {
            s.life = 0;
            s.x = Math.random() * logoWidth;
            s.y = Math.random() * logoHeight;
          }
          s.x += s.vx + m.currentTiltX * 0.2;
          s.y += s.vy + m.currentTiltY * 0.2;

          const lifeAlpha = Math.sin((s.life / s.maxLife) * Math.PI) * s.alpha * sparkFade;
          ctx.fillStyle = s.color;
          ctx.globalAlpha = lifeAlpha;
          ctx.beginPath();
          ctx.arc(logoX0 + s.x, logoY0 + s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // --- B. RENDER LIVING MATRIX DOTS WITH SCATTER DISSOLVE ---
      for (let i = 0; i < count; i++) {
        const tx = targetX[i];
        const ty = targetY[i];

        // 1. Initial organic fly-in on mount
        if (entrance < 1) {
          currentX[i] += (tx - currentX[i]) * 0.12;
          currentY[i] += (ty - currentY[i]) * 0.12;
        } else if (scatterProgress < 0.6) {
          // Living floating holographic undulation in Hero
          const waveY = Math.sin(elapsed * 2.2 + phaseOffset[i]) * 1.4 + m.currentTiltY * 3.5;
          const waveX = Math.cos(elapsed * 1.8 + phaseOffset[i]) * 0.8 + m.currentTiltX * 3.5;
          const liveTargetX = tx + waveX;
          const liveTargetY = ty + waveY;

          // Mouse Repulsion
          if (m.isHovered && scatterProgress < 0.15) {
            const dx = currentX[i] - m.x;
            const dy = currentY[i] - m.y;
            const distSq = dx * dx + dy * dy;
            const maxDist = 70;

            if (distSq < maxDist * maxDist && distSq > 0) {
              const dist = Math.sqrt(distSq);
              const force = (1 - dist / maxDist) * 5.2;
              vx[i] += (dx / dist) * force;
              vy[i] += (dy / dist) * force;
            }
          }

          // Click Ripple Shockwave
          if (m.clickRippleActive && scatterProgress < 0.15) {
            const dx = currentX[i] - m.clickX;
            const dy = currentY[i] - m.clickY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const diff = Math.abs(dist - m.clickRippleRadius);
            if (diff < 22) {
              const push = (1 - diff / 22) * 3.4;
              const angle = Math.atan2(dy, dx);
              vx[i] += Math.cos(angle) * push;
              vy[i] += Math.sin(angle) * push;
            }
          }

          // Spring return to grid target
          vx[i] += (liveTargetX - currentX[i]) * 0.15;
          vy[i] += (liveTargetY - currentY[i]) * 0.15;
          vx[i] *= 0.72;
          vy[i] *= 0.72;

          currentX[i] += vx[i];
          currentY[i] += vy[i];
        }

        // Shimmer wave lighting boost
        let waveBoost = 0;
        if (isScanning && entrance >= 1) {
          const waveDist = Math.abs(currentX[i] + currentY[i] * 0.35 - scanLine);
          if (waveDist < 35) {
            waveBoost = 1 - waveDist / 35;
          }
        }

        // --- SCATTER INTERPOLATION LOGIC ---
        // Staggered progress: outer edges peel away first, center core dissolves last
        const delay = staggerDelay[i];
        const rawP = Math.max(0, Math.min(1, (scatterProgress - delay) / (1 - delay)));
        const p = 1 - Math.pow(1 - rawP, 3); // easeOutCubic curve

        // If dissolved dot has faded completely, skip drawing for high performance
        const persistent = isPersistentStar[i] === 1;
        if (!persistent && p >= 0.95) {
          continue;
        }

        // Update starfield drift motion when scattered
        if (scatterProgress > 0.5) {
          const driftFactor = (scatterProgress - 0.5) / 0.5;
          driftX[i] += driftVx[i] * driftFactor;
          driftY[i] += driftVy[i] * driftFactor;

          // Wrap around viewport edges
          const curX = scatterTargetX[i] + driftX[i];
          const curY = scatterTargetY[i] + driftY[i];
          if (curX < 0) driftX[i] += winWidth;
          if (curX > winWidth) driftX[i] -= winWidth;
          if (curY < 0) driftY[i] += winHeight;
          if (curY > winHeight) driftY[i] -= winHeight;
        }

        // Interpolated screen coordinates
        const logoScreenX = logoX0 + currentX[i];
        const logoScreenY = logoY0 + currentY[i];
        const targetScatterScreenX = scatterTargetX[i] + driftX[i];
        const targetScatterScreenY = scatterTargetY[i] + driftY[i];

        const drawX = (1 - p) * logoScreenX + p * targetScatterScreenX;
        const drawY = (1 - p) * logoScreenY + p * targetScatterScreenY;

        // Skip if offscreen
        if (drawX < -20 || drawX > winWidth + 20 || drawY < -20 || drawY > winHeight + 20) {
          continue;
        }

        // Alpha calculation
        const microTwinkle = Math.sin(elapsed * 2.8 + phaseOffset[i] * 2) * 0.08;
        const logoAlpha = Math.min(1, (baseAlpha[i] + microTwinkle + waveBoost * 0.35) * (entrance < 1 ? easedEntrance : 1));
        const targetStarAlpha = persistent ? starAlpha[i] + Math.sin(elapsed * 1.8 + phaseOffset[i]) * 0.12 : 0;
        const dotAlpha = (1 - p) * logoAlpha + p * targetStarAlpha;

        if (dotAlpha <= 0.015) {
          continue;
        }

        // Radius calculation (shrinks slightly as it becomes stardust)
        const sizeMult = waveBoost > 0.2 ? 1.3 : 1.0;
        const currentDotRadius = (1 - p) * (dotRadius * sizeMult) + p * starRadius[i];

        // Color selection
        let dotColor: string;
        let auraColor: string;

        if (p > 0.6) {
          // In scattered starfield mode: crisp white, neon green, or cyan
          dotColor = starColors[i];
          auraColor = "rgba(0, 229, 255, 0.15)";
        } else {
          // In logo mode: theme teal / cyan / neon green
          const cType = colorTypes[i];
          const ny = normY[i];

          if (waveBoost > 0.3) {
            dotColor = waveBoost > 0.65 ? "#00E676" : "#00E5FF";
            auraColor = waveBoost > 0.65 ? "rgba(0, 230, 118, 0.45)" : "rgba(0, 229, 255, 0.35)";
          } else if (cType === 2) {
            dotColor = "#E0F7FA";
            auraColor = "rgba(0, 229, 255, 0.22)";
          } else if (cType === 1) {
            dotColor = "#00E5FF";
            auraColor = "rgba(0, 229, 255, 0.28)";
          } else {
            if (ny < 0.35) {
              dotColor = "#00F5D4";
              auraColor = "rgba(0, 245, 212, 0.22)";
            } else if (ny < 0.68) {
              dotColor = "#00E5FF";
              auraColor = "rgba(0, 229, 255, 0.20)";
            } else {
              dotColor = "#00B4D8";
              auraColor = "rgba(0, 180, 216, 0.18)";
            }
          }
        }

        // PASS 1: Neon Aura Glow (fades away as dots become pinpoint stars)
        if (p < 0.55 && dotAlpha > 0.1) {
          ctx.globalAlpha = (1 - p / 0.55) * dotAlpha * 0.35;
          ctx.fillStyle = auraColor;
          ctx.beginPath();
          ctx.arc(drawX, drawY, currentDotRadius * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // PASS 2: Crisp Circular Dot Center
        ctx.globalAlpha = Math.max(0, Math.min(1, dotAlpha));
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(drawX, drawY, currentDotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      transitionTrigger.kill();
      exitTrigger.kill();
      window.removeEventListener("resize", resizeCanvas);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("click", handleClick);
    };
  }, [mounted]);

  return (
    <>
      {/* Anchor Container in Hero layout (holds space and handles cursor hover/click) */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center select-none w-full max-w-[280px] sm:max-w-[330px] lg:max-w-[380px] mx-auto min-h-[360px] sm:min-h-[425px] lg:min-h-[485px] cursor-pointer"
        aria-label="Aider Infotech Floating Holographic Dot Matrix Logo"
      >
        {/* Soft atmospheric background glow matching site theme */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute w-[320px] sm:w-[380px] h-[360px] sm:h-[440px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.09)_0%,rgba(0,201,183,0.04)_40%,rgba(0,230,118,0.015)_65%,transparent_80%)] blur-[45px] -z-10 animate-glow-breathing transition-opacity duration-300"
        />
      </div>

      {/* Viewport-Spanning Particle Canvas portaled to document.body */}
      {mounted &&
        createPortal(
          <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-10"
          />,
          document.body
        )}
    </>
  );
}

export default AiderLogoVisual;
