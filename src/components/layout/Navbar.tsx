"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Academy", href: "#academy" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0A0E14]/92 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/60"
          : "bg-[#0A0E14]/65 backdrop-blur-md py-4 border-b border-white/5"
      )}
    >
      <div className="w-full px-6 sm:px-10 lg:px-12 xl:px-14 flex items-center justify-between">
        {/* Official Brand Logo — Prominent & Pinned to Far Left */}
        <Link
          href="#hero"
          className="flex items-center shrink-0 group transition-transform duration-300 hover:scale-[1.03]"
          aria-label="Aider Infotech Home"
        >
          <Image
            src="/images/aider-logo-white-text.png"
            alt="Aider Infotech"
            width={260}
            height={108}
            className="h-12 sm:h-14 md:h-16 lg:h-[4.2rem] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links — Centered & Pure White */}
        <nav className="hidden md:flex items-center gap-9 lg:gap-11">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[16px] lg:text-[17px] font-medium text-white hover:text-[#00E676] transition-colors duration-200 tracking-[-0.01em]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button — Pinned to Far Right */}
        <div className="hidden md:flex items-center shrink-0">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-white/[0.07] border border-white/20 hover:border-[#00E676] hover:bg-[#00E676] text-white hover:text-[#0A0E14] text-[15.5px] font-semibold transition-all duration-300 shadow-md active:scale-98"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#00E676] focus:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0E14]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="pb-4 mb-3 border-b border-white/10 flex items-center">
            <Image
              src="/images/aider-logo-white-text.png"
              alt="Aider Infotech"
              width={200}
              height={83}
              className="h-11 w-auto object-contain"
              priority
            />
          </div>
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white hover:text-[#00E676] py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#00E676] text-[#0A0E14] font-semibold text-base transition-transform active:scale-95"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
