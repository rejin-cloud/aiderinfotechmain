import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import {
  Cpu,
  ArrowLeft,
  ArrowRight,
  Wrench,
  Monitor,
  Laptop,
  ShieldCheck,
  Zap,
  Phone,
  Mail,
  MapPin,
  Flame,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aiderinfotech.com";

export const metadata: Metadata = {
  title: "IT Club Techstore | Custom PC Builds, Laptop Sales & Repair Center in Calicut",
  description:
    "IT Club Techstore in Calicut is your premium hardware store for custom liquid-cooled gaming PCs, high-end workstations, laptops, chip-level motherboard repairs, and genuine upgrades.",
  alternates: {
    canonical: `${siteUrl}/techstore`,
  },
  openGraph: {
    title: "IT Club Techstore | Custom PC Builds & Laptop Repair Center in Calicut",
    description:
      "Custom gaming PCs, 3D workstations, laptop sales, chip-level motherboard repairs, and SSD/RAM upgrades in Calicut, Kerala.",
    url: `${siteUrl}/techstore`,
    siteName: "Aider Infotech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Club Techstore | Custom PC Builds & Repair Calicut",
    description:
      "Custom liquid-cooled gaming PCs, workstations, laptop repairs, and component upgrades.",
  },
};

const SERVICES = [
  {
    title: "Custom Liquid-Cooled Gaming PCs",
    tag: "Hardware Craftsmanship",
    description:
      "Handcrafted, high-FPS gaming battlestations with custom hard-line water cooling loops, RGB synchronization, cable management, and overclocking stability tests.",
    metrics: "Zero-Thermal Throttling",
  },
  {
    title: "Enterprise Video & 3D Workstations",
    tag: "High-Performance Compute",
    description:
      "Certified multi-core workstations configured for 3D rendering (Blender/Maya), 8K video editing (Premiere/DaVinci), CAD architecture, and AI model inference.",
    metrics: "Server-Grade Reliability",
  },
  {
    title: "Laptop & Desktop Chip-Level Repair",
    tag: "Certified Service Lab",
    description:
      "Precision microscopic motherboard diagnostics, BGA chip replacement, liquid-damage restoration, power IC repairs, and display panel replacements.",
    metrics: "96% Repair Success Rate",
  },
  {
    title: "Hardware Speed Upgrades",
    tag: "Performance Boost",
    description:
      "Instant turnaround on high-speed NVMe Gen4/Gen5 SSD expansions, dual-channel DDR4/DDR5 RAM upgrades, high-efficiency power supplies, and GPU installations.",
    metrics: "Same-Day Turnaround",
  },
  {
    title: "Laptop & Mac Maintenance Center",
    tag: "Preventive Care",
    description:
      "Full internal thermal overhaul, liquid metal & high-performance thermal paste re-application, dust removal, keyboard replacements, and battery health servicing.",
    metrics: "Up to 15°C Cooler Temps",
  },
  {
    title: "Data Recovery & Storage Solutions",
    tag: "Data Security",
    description:
      "Advanced logical and physical recovery from crashed SSDs, failing mechanical hard drives, corrupt external disks, and NAS RAID configurations.",
    metrics: "Secure & Confidential",
  },
];

export default function TechStorePage() {
  const jsonLdTechStore = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ComputerStore",
        "@id": `${siteUrl}/techstore/#store`,
        "name": "IT Club Techstore",
        "url": `${siteUrl}/techstore`,
        "parentOrganization": {
          "@type": "Organization",
          "name": "Aider Infotech",
          "url": siteUrl,
        },
        "description":
          "Custom PC Building, Gaming Battlestation Studio, Workstations, Laptop Sales & Chip-Level Repairs in Calicut & Balussery, Kerala.",
        "telephone": "+91 9037 00 7374",
        "priceRange": "$$",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Dubai Bazar",
            "addressLocality": "Calicut",
            "addressRegion": "Kerala",
            "addressCountry": "IN",
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Malabar Complex",
            "addressLocality": "Balussery",
            "addressRegion": "Kerala",
            "addressCountry": "IN",
          },
        ],
      },
      ...SERVICES.map((service) => ({
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "ComputerStore",
          "name": "IT Club Techstore",
          "sameAs": `${siteUrl}/techstore`,
        },
      })),
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0E14] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTechStore) }}
      />
      <main className="flex-1 pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/#departments"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#A855F7]/60 hover:bg-[#A855F7]/10 text-white/80 hover:text-[#A855F7] text-xs font-mono tracking-wider font-semibold transition-all duration-300 shadow-lg group backdrop-blur-md mb-8 active:scale-95"
        >
          <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#A855F7]/20 flex items-center justify-center text-[#A855F7] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <span>BACK TO DEPARTMENTS</span>
        </Link>

        {/* Hero Section */}
        <div className="glass-card relative p-8 sm:p-14 border border-white/10 rounded-3xl overflow-hidden mb-16 shadow-2xl">

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/30 text-xs font-semibold text-[#A855F7] uppercase tracking-wider mb-6">
                <Cpu className="w-4 h-4" />
                <span>IT CLUB TECHSTORE // HARDWARE & MAINTENANCE</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                High-Performance PCs, <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#00E5FF] to-[#00E676]">
                  Laptops & Certified Repair
                </span>{" "}
                in Calicut
              </h1>

              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-8">
                IT Club Techstore is Calicut&apos;s destination for extreme custom gaming rigs,
                heavy-duty creative workstations, premium laptops, and component-level electronics
                repairs with genuine warranties.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#service"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#A855F7] text-white text-sm font-bold shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:bg-white hover:text-black transition-all group"
                >
                  <span>Inquire for PC Build / Service</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold transition-all"
                >
                  <span>Explore Hardware Lab</span>
                </a>
              </div>
            </div>

            {/* Store Preview Image */}
            <div className="lg:col-span-5 relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/images/dept_techstore.webp"
                alt="IT Club Techstore custom PC builds and repair center in Calicut"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15">
                <p className="text-xs font-mono text-[#A855F7]">🔧 CALICUT TECH LAB</p>
                <p className="text-xs text-white/90">Custom Rigs, Workstations & Micro-Soldering Bench</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <section aria-label="Hardware Lab Pillars" className="mb-20">
          <h2 className="sr-only">Hardware Lab Capabilities & Guarantees</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl">
              <Flame className="w-8 h-8 text-[#A855F7] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Custom Rig Tuning</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Every custom computer undergoes 24-hour benchmark stress testing, thermal curve
                optimization, and memory timing validation before delivery.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl">
              <Wrench className="w-8 h-8 text-[#00E5FF] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Microscopic Chip Repairs</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Equipped with digital stereomicroscopes, hot-air reflow stations, and precision
                oscilloscopes to fix motherboards deemed unrepairable elsewhere.
              </p>
            </div>

            <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-[#00E676] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Genuine Components</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                100% authentic components sourced directly from authorized manufacturers (Intel, AMD,
                Nvidia, ASUS, Corsair, Crucial) with full warranty coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Services & Hardware Catalog */}
        <div id="catalog" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#A855F7] uppercase tracking-widest block mb-2">
              HARDWARE & SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Tech Solutions & Service Catalog
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#A855F7]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] mb-3">
                    <span className="text-[#A855F7]">{item.tag}</span>
                    <span className="text-white/70">{item.metrics}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-[#9CA3AF] mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <a
                  href="#service"
                  className="w-full py-2.5 text-center block rounded-xl bg-white/5 hover:bg-[#A855F7] hover:text-white text-xs font-semibold text-white transition-all border border-white/10"
                >
                  Book Service / Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact / Service Booking Section */}
        <div id="service" className="glass-card p-8 sm:p-12 border border-white/15 rounded-3xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-mono text-[#A855F7] uppercase tracking-widest block mb-2">
              HARDWARE LAB & TECH STORES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Visit IT Club Techstore Locations
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] mb-8">
              Bring in your laptop or desktop for instant diagnosis, or consult our hardware engineers for custom PC builds at our store locations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              {/* Store 1 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#A855F7]/40 transition-colors">
                <span className="text-xs font-mono text-[#A855F7] uppercase tracking-wider block mb-1">
                  STORE 1 • CALICUT
                </span>
                <h3 className="text-lg font-bold text-white mb-2">Dubai Bazar, Calicut</h3>
                <p className="text-xs text-[#9CA3AF] mb-4">Custom PC Assembly & Micro-Soldering Bench</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#A855F7]" />
                    <a href="tel:+919037007374" className="text-white hover:text-[#A855F7] font-semibold transition-colors">
                      +91 9037 00 7374
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#A855F7]" />
                    <a href="tel:+919037117374" className="text-white hover:text-[#A855F7] font-semibold transition-colors">
                      +91 903711 7374
                    </a>
                  </div>
                </div>
              </div>

              {/* Store 2 */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#A855F7]/40 transition-colors">
                <span className="text-xs font-mono text-[#A855F7] uppercase tracking-wider block mb-1">
                  STORE 2 • BALUSSERY
                </span>
                <h3 className="text-lg font-bold text-white mb-2">Malabar Complex, Balussery</h3>
                <p className="text-xs text-[#9CA3AF] mb-4">Laptop Sales & Chip-Level Repair Lab</p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#A855F7]" />
                    <a href="tel:+919037577374" className="text-white hover:text-[#A855F7] font-semibold transition-colors">
                      +91 9037 57 7374
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#A855F7]" />
                    <a href="tel:+919037587374" className="text-white hover:text-[#A855F7] font-semibold transition-colors">
                      +91 9037 58 7374
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 text-xs text-[#9CA3AF] border-t border-white/10 pt-6">
              <a href="https://instagram.com/itclubstores" target="_blank" rel="noopener noreferrer" className="hover:text-[#A855F7] transition-colors">
                📷 Instagram: @itclubstores
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
