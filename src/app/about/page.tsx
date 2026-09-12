import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Target,
  Layers,
  TrendingUp,
  MessageSquare,
  Award,
  Phone,
  Mail,
  Lightbulb,
  Rocket,
  Compass,
} from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aiderinfotech.com";

export const metadata: Metadata = {
  title: "About Aider Infotech | Building Technology That Drives Business Growth",
  description:
    "Learn how Aider Infotech transforms business ideas into practical, scalable digital solutions, combining custom software development, web apps, mobile apps, ERP/CRM, SEO, and performance digital marketing.",
  alternates: {
    canonical: `${siteUrl}/about/`,
  },
  openGraph: {
    title: "About Aider Infotech | Building Technology That Drives Business Growth",
    description:
      "We combine technology, creativity, and digital strategy to build custom software, web & mobile applications, and high-ROI digital solutions.",
    url: `${siteUrl}/about/`,
    siteName: "Aider Infotech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Aider Infotech | Custom Software & Digital Solutions",
    description:
      "Building practical, reliable, and scalable technology solutions that help businesses move forward.",
  },
};

const DIFFERENTIATORS = [
  {
    title: "End-to-End Digital Solutions",
    icon: <Layers className="w-6 h-6 text-[#00E676]" />,
    description:
      "From software development and website creation to digital marketing and branding, everything under one unified roof.",
  },
  {
    title: "Results-Driven Approach",
    icon: <TrendingUp className="w-6 h-6 text-[#00E5FF]" />,
    description:
      "We focus on measurable outcomes, helping businesses increase visibility, generate quality leads, and maximize ROI.",
  },
  {
    title: "Experienced Professionals",
    icon: <Users className="w-6 h-6 text-[#00E676]" />,
    description:
      "Our team consists of skilled developers, designers, marketers, and strategists with real-world industry expertise.",
  },
  {
    title: "Tailor-Made Solutions",
    icon: <Target className="w-6 h-6 text-[#A855F7]" />,
    description:
      "Every business is unique. We create customized strategies and software that align with your goals and industry requirements.",
  },
  {
    title: "Latest Technologies",
    icon: <Zap className="w-6 h-6 text-[#00E5FF]" />,
    description:
      "We leverage modern tools, AI-powered solutions, automation, and emerging technologies to keep your business ahead of the competition.",
  },
  {
    title: "Transparent Communication",
    icon: <MessageSquare className="w-6 h-6 text-[#00E676]" />,
    description:
      "Regular updates, clear reporting, and complete transparency throughout every single stage of your project.",
  },
  {
    title: "Client-Centric Partnership",
    icon: <ShieldCheck className="w-6 h-6 text-[#A855F7]" />,
    description:
      "We don't just deliver projects — we build long-term partnerships by understanding your business and supporting your growth.",
  },
  {
    title: "Proven Success",
    icon: <Award className="w-6 h-6 text-[#00E5FF]" />,
    description:
      "Trusted by startups, SMEs, and established enterprises, with a track record of delivering high-quality solutions that create real business impact.",
  },
];

export default function AboutPage() {
  const jsonLdAbout = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${siteUrl}/about/#webpage`,
        "url": `${siteUrl}/about`,
        "name": "About Aider Infotech",
        "description":
          "Building technology that drives business growth through custom software, web & mobile applications, and digital marketing.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "name": "Aider Infotech",
          "url": siteUrl,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "Aider Infotech",
        "url": siteUrl,
        "description":
          "Leading Software Development Company, Tech Training Academy & Digital Solutions Provider in Calicut, Kerala.",
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0E14] text-white selection:bg-[#00E676]/30 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdAbout) }}
      />
      <main className="flex-1 pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto w-full">
        {/* Back to Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#00E676]/60 hover:bg-[#00E676]/10 text-white/80 hover:text-[#00E676] text-xs font-mono tracking-wider font-semibold transition-all duration-300 shadow-lg group backdrop-blur-md mb-8 active:scale-95"
        >
          <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#00E676]/20 flex items-center justify-center text-[#00E676] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
          </div>
          <span>BACK TO HOME</span>
        </Link>

        {/* Hero Section */}
        <div className="glass-card relative p-8 sm:p-14 border border-white/10 rounded-3xl overflow-hidden mb-16 shadow-2xl">


          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E676]/10 border border-[#00E676]/30 text-xs font-semibold text-[#00E676] uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              <span>ABOUT AIDER INFOTECH // DIGITAL TRANSFORMATION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.12]">
              Building Technology That <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E676] via-[#00E5FF] to-[#A855F7]">
                Drives Business Growth
              </span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-8">
              <p>
                At <strong className="text-white font-semibold">Aider Infotech</strong>, we help businesses turn ideas into practical digital solutions. We combine technology, creativity, and digital strategy to build solutions that make businesses more efficient, visible, and ready to grow.
              </p>
              <p>
                As a trusted IT and digital solutions company, we specialize in delivering high-quality software, web platforms, mobile apps, and data-driven marketing strategies tailored to the unique needs of startups, SMEs, and enterprise organizations. Our team of experienced developers, designers, digital strategists, and technology experts work together to create secure, scalable, and user-friendly solutions that deliver measurable results.
              </p>
              <p className="text-white/90 font-medium">
                From concept to deployment and ongoing support, we are committed to excellence at every stage of your digital journey.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#what-we-do"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00E676] text-black text-sm font-bold shadow-[0_0_20px_rgba(0,230,118,0.4)] hover:bg-white transition-all group"
              >
                <span>Explore What We Do</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact-section"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold transition-all"
              >
                <span>Start Your Project</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3 Core Philosophy Cards */}
        <section id="what-we-do" aria-label="Core Expertise & Philosophy" className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#00E676]/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 flex items-center justify-center mb-5">
                  <Lightbulb className="w-6 h-6 text-[#00E676]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Practical Digital Solutions</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  Our expertise covers software development, web development, e-commerce, mobile app development, custom software, ERP and CRM development, SEO, digital marketing, and branding. Whether you are starting something new or improving an existing business, we focus on understanding your goals and creating solutions that fit your actual needs.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#00E5FF]/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center mb-5">
                  <Compass className="w-6 h-6 text-[#00E5FF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Simple, Reliable & Scalable</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  We believe good technology should be simple to use, reliable, scalable, and built with a clear purpose. That&apos;s why we work closely with our clients throughout the process — from planning and user-centered design to cloud development, deployment, and organic digital growth.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#A855F7]/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#A855F7]/10 border border-[#A855F7]/30 flex items-center justify-center mb-5">
                  <Rocket className="w-6 h-6 text-[#A855F7]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Driven by Business Purpose</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  At Aider Infotech, we are not just building websites or software — we are building digital solutions that help businesses move forward, automate complex operational processes, and capture long-term market leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Aider Infotech & What Makes Us Different Grid */}
        <section aria-label="Why Choose Aider Infotech" className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono text-[#00E676] uppercase tracking-widest block mb-3">
              WHAT MAKES US DIFFERENT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Why Choose Aider Infotech
            </h2>
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              At <strong className="text-white">Aider Infotech</strong>, we combine innovation, technology, and strategic thinking to deliver solutions that drive measurable business growth. With years of industry expertise, we help businesses transform digitally through reliable software solutions, performance-driven digital marketing, and result-oriented consulting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIATORS.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#00E676]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Empowering Businesses for the Future Banner */}
        <div className="glass-card p-8 sm:p-12 border border-white/15 rounded-3xl mb-24 relative overflow-hidden text-center bg-gradient-to-r from-[#0A0E14] via-[#121824] to-[#0A0E14]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(0,230,118,0.12)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-widest block mb-3">
              FUTURE-READY ENGINEERING
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Empowering Businesses for the Future
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
              Whether you&apos;re looking to build powerful software, establish a strong online presence, automate operations, or accelerate business growth, <strong className="text-white">Aider Infotech</strong> is your trusted technology and digital transformation partner. We are committed to turning ideas into scalable solutions and helping businesses thrive in the digital era.
            </p>
          </div>
        </div>

        {/* Quality Policy, Our Vision & Our Mission Sections (with Optimized WebP Images <100KB) */}
        <div className="space-y-20 mb-24">
          {/* Quality Policy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center glass-card p-8 sm:p-12 border border-white/10 rounded-3xl">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono text-[#00E676] uppercase tracking-widest block mb-2">
                EXCELLENCE IN EXECUTION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Quality Policy
              </h2>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                At <strong className="text-white">Aider Infotech</strong>, quality is at the core of everything we do. We are committed to delivering innovative software solutions, web applications, and digital services that consistently exceed client expectations. Every project is executed with a strong focus on precision, reliability, security, and performance, ensuring exceptional value and long-term success.
              </p>
            </div>
            <div className="lg:col-span-5 relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/15 shadow-xl">
              <Image
                src="/images/about_quality.webp"
                alt="Quality policy and software precision engineering at Aider Infotech"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Our Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center glass-card p-8 sm:p-12 border border-white/10 rounded-3xl">
            <div className="lg:col-span-5 relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/15 shadow-xl lg:order-1">
              <Image
                src="/images/about_vision.webp"
                alt="Our Vision - Empowering global enterprise digital transformation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
            <div className="lg:col-span-7 lg:order-2">
              <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-widest block mb-2">
                THE ROADMAP AHEAD
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Our Vision
              </h2>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                To empower businesses with cutting-edge technology, creative innovation, and strategic digital solutions that drive sustainable growth, improve operational efficiency, and deliver exceptional customer experiences. We are committed to developing reliable, scalable, and secure software solutions tailored to each client&apos;s unique needs while embracing the latest technologies and industry best practices. Through collaboration, transparency, and a customer-first approach, we help organizations accelerate digital transformation, streamline business processes, and unlock new opportunities for long-term success.
              </p>
            </div>
          </div>

          {/* Our Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center glass-card p-8 sm:p-12 border border-white/10 rounded-3xl">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono text-[#A855F7] uppercase tracking-widest block mb-2">
                OUR PURPOSE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                At <strong className="text-white">Aider Infotech</strong>, our mission is to empower businesses through innovative technology, intelligent software solutions, and result-driven digital strategies. We are committed to helping organizations accelerate growth, enhance operational efficiency, and achieve sustainable success by delivering reliable, scalable, and future-ready solutions.
              </p>
            </div>
            <div className="lg:col-span-5 relative h-[250px] sm:h-[300px] rounded-2xl overflow-hidden border border-white/15 shadow-xl">
              <Image
                src="/images/about_mission.webp"
                alt="Our Mission - Intelligent software development and digital strategy"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Start Your Project / CTA Section */}
        <div id="contact-section" className="glass-card p-8 sm:p-14 border border-white/15 rounded-3xl relative overflow-hidden text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono text-[#00E676] uppercase tracking-widest block mb-3">
              START YOUR PROJECT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Turn Your Ideas into Reality?
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] mb-8 leading-relaxed">
              <strong className="text-white">Aider Infotech</strong> is your trusted technology partner for innovative software development, web solutions, mobile applications, and digital transformation. Whether you&apos;re a startup, SME, or enterprise, we deliver customized, scalable, and high-performance solutions that drive real business growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+918137837374"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#00E676] text-black font-bold text-sm shadow-[0_0_25px_rgba(0,230,118,0.4)] hover:bg-white transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: +91 8137837374</span>
              </a>

              <a
                href="mailto:info@aiderinfotech.com?subject=Aider%20Infotech%20Project%20Inquiry"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Email: info@aiderinfotech.com</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
