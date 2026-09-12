"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_DATA } from "@/data/content";
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function FaqAndBlog() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const [isDebouncing, setIsDebouncing] = useState(false);

  const totalFaqs = SITE_DATA.faqs.length;

  const handlePrevFaq = () => {
    if (isDebouncing) return;
    setIsDebouncing(true);
    setActiveFaqIndex((prev) => (prev === 0 ? totalFaqs - 1 : prev - 1));
    setTimeout(() => setIsDebouncing(false), 350);
  };

  const handleNextFaq = () => {
    if (isDebouncing) return;
    setIsDebouncing(true);
    setActiveFaqIndex((prev) => (prev === totalFaqs - 1 ? 0 : prev + 1));
    setTimeout(() => setIsDebouncing(false), 350);
  };

  const currentFaq = SITE_DATA.faqs[activeFaqIndex];

  return (
    <section id="faqs" className="relative py-28 px-6 md:px-12 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top FAQ Slider Block */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-3">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Everything You Need to Know
              </h2>
            </div>

            {/* Circular Arrow Navigation Controls */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#9CA3AF] mr-2">
                0{activeFaqIndex + 1} / 0{totalFaqs}
              </span>
              <button
                onClick={handlePrevFaq}
                disabled={isDebouncing}
                aria-label="Previous FAQ"
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                  isDebouncing
                    ? "opacity-50 cursor-not-allowed border-white/10"
                    : "bg-white/5 border-white/15 hover:border-[#00E676]/50 hover:bg-[#00E676]/10 text-white hover:text-[#00E676] active:scale-95"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNextFaq}
                disabled={isDebouncing}
                aria-label="Next FAQ"
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                  isDebouncing
                    ? "opacity-50 cursor-not-allowed border-white/10"
                    : "bg-white/5 border-white/15 hover:border-[#00E676]/50 hover:bg-[#00E676]/10 text-white hover:text-[#00E676] active:scale-95"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Single-Question Active View */}
          <div className="glass-card p-8 sm:p-12 md:p-14 border border-white/10 min-h-[260px] flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFaqIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono text-[#00E676] bg-[#00E676]/10 px-2.5 py-0.5 rounded border border-[#00E676]/20">
                    CATEGORY // {currentFaq.category.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  {currentFaq.question}
                </h3>
                <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-4xl">
                  {currentFaq.answer}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
