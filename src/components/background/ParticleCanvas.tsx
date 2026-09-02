"use client";

import React, { useEffect, useRef } from "react";

interface BackgroundParticle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  colorType: "white" | "green" | "grey" | "cyan";
  rgb: string;
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 65 : 140;

    let particles: BackgroundParticle[] = [];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const rand = Math.random();
        let colorType: BackgroundParticle["colorType"] = "white";
        let rgb = "255, 255, 255";
        let baseAlpha = 0.25 + Math.random() * 0.45;
        let radius = 0.8 + Math.random() * 1.2;

        if (rand < 0.45) {
          // Pure White / Silver
          colorType = "white";
          rgb = "255, 255, 255";
          baseAlpha = 0.25 + Math.random() * 0.55;
          radius = 0.8 + Math.random() * 1.3;
        } else if (rand < 0.72) {
          // Signature Neon Green
          colorType = "green";
          rgb = "0, 230, 118";
          baseAlpha = 0.2 + Math.random() * 0.5;
          radius = 0.9 + Math.random() * 1.4;
        } else if (rand < 0.90) {
          // Muted Grey / Metallic Slate
          colorType = "grey";
          rgb = "156, 163, 175";
          baseAlpha = 0.15 + Math.random() * 0.35;
          radius = 0.7 + Math.random() * 1.1;
        } else {
          // Electric Cyan
          colorType = "cyan";
          rgb = "0, 229, 255";
          baseAlpha = 0.25 + Math.random() * 0.45;
          radius = 1.0 + Math.random() * 1.3;
        }

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          vx: (Math.random() - 0.5) * 0.15,
          vy: -0.08 - Math.random() * 0.18,
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed: 0.008 + Math.random() * 0.016,
          twinkleOffset: Math.random() * Math.PI * 2,
          colorType,
          rgb,
        });
      }
    };

    initParticles();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        isVisible = entries[i].isIntersecting;
      }
    });
    observer.observe(canvas);

    let time = 0;
    const render = () => {
      if (!isVisible || document.hidden) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 1;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around viewport edges
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const twinkle = Math.sin(time * p.twinkleSpeed + p.twinkleOffset) * 0.18;
        p.alpha = Math.max(0.04, Math.min(1, p.baseAlpha + twinkle));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.rgb}, ${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "radial-gradient(ellipse at 50% 12%, #0C121B 0%, #06090E 75%)",
      }}
      aria-hidden="true"
    />
  );
}

export default ParticleCanvas;
