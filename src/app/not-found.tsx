"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0E14] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden select-none">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 230, 118, 0.15) 0%, rgba(10, 14, 20, 0) 70%)",
        }}
      />

      <div className="relative z-10 text-center max-w-lg">
        {/* Neon 404 Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-[#00E676] text-xs font-semibold tracking-widest uppercase mb-6">
          404 — Page Not Found
        </div>

        <h1 className="text-6xl sm:text-8xl font-extrabold tracking-tight text-white mb-4">
          Lost in <span className="text-[#00E676]">Cyberspace</span>
        </h1>

        <p className="text-[#9CA3AF] text-base sm:text-lg mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been relocated within our digital ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00E676] text-[#0A0E14] font-semibold text-base hover:bg-[#00c865] transition-all shadow-[0_0_20px_rgba(0,230,118,0.3)] hover:scale-[1.02]"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-medium text-base hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
