"use client";

import React, { useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // Sized slightly smaller to align cleanly with the "Let's Talk" action buttons line
    const width = isMobile ? 280 : isTablet ? 330 : 380;
    const height = isMobile ? 360 : isTablet ? 425 : 485;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // =========================================================================
    // 1. PRE-INITIALIZE FAST TYPED ARRAYS FOR MATRIX DOTS
    // =========================================================================
    const stepSample = isMobile ? 2 : 1;
    const rawData = logoMatrixData as [number, number, number, number][];
    const filteredData = rawData.filter((_, i) => i % stepSample === 0);
    const count = filteredData.length;

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

    // Initial scatter for smooth 1.2s organic entrance
    for (let i = 0; i < count; i++) {
      const [nx, ny, cType, b] = filteredData[i];
      const tx = nx * width;
      const ty = ny * height;

      targetX[i] = tx;
      targetY[i] = ty;
      normY[i] = ny;
      colorTypes[i] = cType;
      phaseOffset[i] = tx * 0.015 + ty * 0.015;

      const angle = Math.random() * Math.PI * 2;
      const dist = 25 + Math.random() * 60;
      currentX[i] = tx + Math.cos(angle) * dist;
      currentY[i] = ty + Math.sin(angle) * dist;

      vx[i] = 0;
      vy[i] = 0;
      baseAlpha[i] = 0.65 + b * 0.35;
    }

    // =========================================================================
    // 2. SPARSE AMBIENT FLOATING SPARKS (Theme Colors)
    // =========================================================================
    const sparkCount = isMobile ? 14 : 26;
    const sparks: AmbientSpark[] = [];
    const sparkColors = ["#00E676", "#00E5FF", "#00F5D4", "#D4FFFA", "#9CA3AF"];

    for (let i = 0; i < sparkCount; i++) {
      sparks.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        size: 0.8 + Math.random() * 1.3,
        alpha: 0.15 + Math.random() * 0.45,
        life: Math.random() * 100,
        maxLife: 80 + Math.random() * 100,
        color: sparkColors[i % sparkColors.length],
      });
    }

    // =========================================================================
    // 3. MOUSE INTERACTION & PARALLAX (Passive Listeners)
    // =========================================================================
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) * (width / rect.width);
      mouseRef.current.y = (e.clientY - rect.top) * (height / rect.height);
      mouseRef.current.isHovered = true;

      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
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
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.clickX = (e.clientX - rect.left) * (width / rect.width);
      mouseRef.current.clickY = (e.clientY - rect.top) * (height / rect.height);
      mouseRef.current.clickRippleRadius = 0;
      mouseRef.current.clickRippleActive = true;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleClick);

    // =========================================================================
    // 4. INTERSECTION OBSERVER & VISIBILITY HANDLERS
    // =========================================================================
    let isVisible = true;
    let animationFrameId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          isVisible = entries[i].isIntersecting;
          if (isVisible && !document.hidden) {
            startLoop();
          } else {
            stopLoop();
          }
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else if (isVisible) {
        startLoop();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // =========================================================================
    // 5. LIVING FLOATING HOLOGRAM 60 FPS RENDER LOOP
    // =========================================================================
    const startTime = performance.now();
    let scanTimer = 0;
    const dotRadius = isMobile ? 1.05 : 1.25;

    const render = (now: number) => {
      if (!isVisible || document.hidden) return;

      const elapsed = (now - startTime) / 1000;
      ctx.clearRect(0, 0, width, height);

      // Entrance progress (0.0s to 1.2s)
      const entrance = Math.min(1, elapsed / 1.2);
      const easedEntrance = 1 - Math.pow(1 - entrance, 3);

      // Smooth mouse tilt parallax
      const m = mouseRef.current;
      m.currentTiltX += (m.targetTiltX - m.currentTiltX) * 0.06;
      m.currentTiltY += (m.targetTiltY - m.currentTiltY) * 0.06;

      // Holographic Shimmer Wave sweeping across matrix (every 4.8s)
      scanTimer += 0.016;
      const scanCycle = scanTimer % 4.8;
      const isScanning = scanCycle < 1.3;
      const scanProgress = isScanning ? scanCycle / 1.3 : -1;
      const scanLine = scanProgress * (width + height * 0.45) - 30;

      // Mouse ripple calculation
      if (m.clickRippleActive) {
        m.clickRippleRadius += 5.5;
        if (m.clickRippleRadius > 240) {
          m.clickRippleActive = false;
        }
      }

      // A) RENDER AMBIENT FLOATING SPARKS
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        s.life += 0.4;
        if (s.life > s.maxLife) {
          s.life = 0;
          s.x = Math.random() * width;
          s.y = Math.random() * height;
        }
        s.x += s.vx + m.currentTiltX * 0.2;
        s.y += s.vy + m.currentTiltY * 0.2;

        const lifeAlpha = Math.sin((s.life / s.maxLife) * Math.PI) * s.alpha;
        ctx.fillStyle = s.color;
        ctx.globalAlpha = lifeAlpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // B) RENDER LIVING FLOATING DOT MATRIX LOGO
      for (let i = 0; i < count; i++) {
        const tx = targetX[i];
        const ty = targetY[i];

        if (entrance < 1) {
          currentX[i] += (tx - currentX[i]) * 0.12;
          currentY[i] += (ty - currentY[i]) * 0.12;
        } else {
          // 1. Organic Holographic Floating & Wave Undulation
          const waveY = Math.sin(elapsed * 2.2 + phaseOffset[i]) * 1.4 + m.currentTiltY * 3.5;
          const waveX = Math.cos(elapsed * 1.8 + phaseOffset[i]) * 0.8 + m.currentTiltX * 3.5;
          const liveTargetX = tx + waveX;
          const liveTargetY = ty + waveY;

          // 2. Mouse Repulsion
          if (m.isHovered) {
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

          // 3. Click Shockwave Ripple
          if (m.clickRippleActive) {
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

          // 4. Spring Return to Exact Grid Target
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

        const microTwinkle = Math.sin(elapsed * 2.8 + phaseOffset[i] * 2) * 0.08;
        const alpha = Math.min(1, (baseAlpha[i] + microTwinkle + waveBoost * 0.35) * (entrance < 1 ? easedEntrance : 1));

        // Theme Color Assignment
        const cType = colorTypes[i];
        const ny = normY[i];

        let dotColor = "#00E5FF";
        let auraColor = "rgba(0, 229, 255, 0.18)";

        if (waveBoost > 0.3) {
          // Dynamic Neon Green -> Electric Cyan highlight beam
          dotColor = waveBoost > 0.65 ? "#00E676" : "#00E5FF";
          auraColor = waveBoost > 0.65 ? "rgba(0, 230, 118, 0.45)" : "rgba(0, 229, 255, 0.35)";
        } else if (cType === 2) {
          // Outer Metallic Silver-Cyan Border
          dotColor = "#E0F7FA";
          auraColor = "rgba(0, 229, 255, 0.22)";
        } else if (cType === 1) {
          // Bright Electric Cyan Highlights
          dotColor = "#00E5FF";
          auraColor = "rgba(0, 229, 255, 0.28)";
        } else {
          // Body Fill: Vertical gradient from Turquoise to Deep Teal
          if (ny < 0.35) {
            dotColor = "#00F5D4"; // Electric Turquoise
            auraColor = "rgba(0, 245, 212, 0.22)";
          } else if (ny < 0.68) {
            dotColor = "#00E5FF"; // Bright Cyan
            auraColor = "rgba(0, 229, 255, 0.20)";
          } else {
            dotColor = "#00B4D8"; // Deep Teal
            auraColor = "rgba(0, 180, 216, 0.18)";
          }
        }

        // PASS 1: Subtle Neon Aura Glow (adds holographic depth)
        ctx.globalAlpha = alpha * 0.35;
        ctx.fillStyle = auraColor;
        ctx.beginPath();
        ctx.arc(currentX[i], currentY[i], dotRadius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // PASS 2: Crisp Circular Dot Center
        ctx.globalAlpha = alpha;
        ctx.fillStyle = dotColor;
        const sizeMult = waveBoost > 0.2 ? 1.3 : 1.0;
        ctx.beginPath();
        ctx.arc(currentX[i], currentY[i], dotRadius * sizeMult, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    startLoop();

    return () => {
      stopLoop();
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center select-none w-full max-w-[280px] sm:max-w-[330px] lg:max-w-[380px] mx-auto min-h-[360px] sm:min-h-[425px] lg:min-h-[485px]"
      aria-label="Aider Infotech Floating Holographic Dot Matrix Logo"
    >
      {/* Soft atmospheric background glow matching site theme */}
      <div className="pointer-events-none absolute w-[320px] sm:w-[380px] h-[360px] sm:h-[440px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.09)_0%,rgba(0,201,183,0.04)_40%,rgba(0,230,118,0.015)_65%,transparent_80%)] blur-[45px] -z-10 animate-glow-breathing" />

      {/* Floating Canvas Wrapper with GPU-accelerated smooth organic floating */}
      <div className="relative animate-float-logo">
        <canvas
          ref={canvasRef}
          className="block cursor-pointer touch-none pointer-events-auto drop-shadow-[0_15px_30px_rgba(0,229,255,0.15)]"
        />
      </div>
    </div>
  );
}

export default AiderLogoVisual;
