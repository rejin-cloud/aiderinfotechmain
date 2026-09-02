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
        <div className="mb-32">
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

        {/* Blog & Industry Insights */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Knowledge & Insights</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                Latest Engineering Perspectives
              </h2>
            </div>
            <p className="text-sm text-[#9CA3AF] max-w-md">
              Thought leadership, architectural deep dives, and digital marketing insights from our senior technology teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SITE_DATA.blogs.map((blog, idx) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-8 border border-white/10 flex flex-col justify-between group hover:border-[#00E676]/40 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] mb-4">
                    <span className="text-[#00E676] bg-[#00E676]/10 px-2.5 py-0.5 rounded">
                      {blog.category}
                    </span>
                    <span>{blog.readTime}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#00E676] transition-colors leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#9CA3AF]">{blog.date}</span>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#00E676] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
