import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import {
  GraduationCap,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Calendar,
  Clock,
  Sparkles,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Aider Academy | Premier Software & Tech Training Institute in Calicut",
  description:
    "Aider Academy in Calicut offers industry-oriented training in Full Stack Development, Python, Flutter, AI, UI/UX Design, and Digital Marketing with 100% placement assistance and live capstone client projects.",
};

const COURSES = [
  {
    title: "Full Stack Web Development",
    duration: "6 Months",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    description:
      "Master modern enterprise web engineering from frontend architecture to scalable backend microservices, real-time databases, and cloud deployment.",
  },
  {
    title: "Python, AI & Data Analytics",
    duration: "5 Months",
    tags: ["Python", "TensorFlow", "Pandas", "Machine Learning", "FastAPI"],
    description:
      "Deep dive into data engineering, machine learning model training, generative AI, and intelligent automation built for production environments.",
  },
  {
    title: "Flutter & Mobile App Development",
    duration: "4 Months",
    tags: ["Flutter", "Dart", "Firebase", "State Management", "App Store"],
    description:
      "Build native-grade, high-performance mobile applications for iOS and Android with beautiful declarative UI and cloud-connected backends.",
  },
  {
    title: "UI/UX & Product Design",
    duration: "3 Months",
    tags: ["Figma", "Design Systems", "Prototyping", "User Research"],
    description:
      "Learn human-centered product design, design tokens, responsive wireframing, usability heuristics, and enterprise design system architecture.",
  },
  {
    title: "Digital Marketing & SEO Mastery",
    duration: "3 Months",
    tags: ["SEO", "Google Ads", "Meta Ads", "Content Strategy", "Analytics"],
    description:
      "Gain hands-on mastery in organic search ranking, paid performance marketing funnels, viral social media growth, and ROI attribution.",
  },
];

export default function AcademyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0E14] text-white">
      <main className="flex-1 pt-32 pb-20 px-6 sm:px-12 max-w-7xl mx-auto w-full">
        {/* Back Link */}
        <Link
          href="/#departments"
          className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#00E5FF] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>

        {/* Hero Section */}
        <div className="glass-card relative p-8 sm:p-14 border border-white/10 rounded-3xl overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#00E5FF]/15 blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-semibold text-[#00E5FF] uppercase tracking-wider mb-6">
                <GraduationCap className="w-4 h-4" />
                <span>AIDER ACADEMY // TRAINING DIVISION</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Empowering Next-Gen <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E676]">
                  Software & AI Engineers
                </span>{" "}
                in Calicut
              </h1>

              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-8">
                Aider Academy is a premier software development and digital marketing training
                institute in Calicut, Kerala. We bridge academic theory with enterprise reality
                through live client projects, 1-on-1 industry mentorship, and guaranteed placement
                support.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#enroll"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#00E5FF] text-black text-sm font-bold shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:bg-white transition-all group"
                >
                  <span>Inquire for Admissions</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-sm font-semibold transition-all"
                >
                  <span>Explore Curriculum</span>
                </a>
              </div>
            </div>

            {/* Campus Preview Image */}
            <div className="lg:col-span-5 relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/images/dept_academy.jpg"
                alt="Aider Academy training campus and software lab in Calicut"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/15">
                <p className="text-xs font-mono text-[#00E5FF]">📍 CALICUT CAMPUS</p>
                <p className="text-xs text-white/90">State-of-the-Art Software & AI Development Lab</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl">
            <Award className="w-8 h-8 text-[#00E5FF] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">100% Placement Support</h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Resume building, mock technical interviews, portfolio hosting, and direct referrals to
              top tech companies in Kerala, Bangalore, and GCC.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl">
            <Users className="w-8 h-8 text-[#00E676] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">1-on-1 Senior Mentorship</h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Learn directly from veteran software architects and engineering leads actively
              shipping production systems at Aider Infotech.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-8 border border-white/10 rounded-2xl">
            <BookOpen className="w-8 h-8 text-[#00E5FF] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Live Capstone Deployments</h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Graduate with a production portfolio of real client-facing web and mobile applications
              deployed on AWS, Vercel, and GCP.
            </p>
          </div>
        </div>

        {/* Curriculum Section */}
        <div id="curriculum" className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-widest block mb-2">
              COURSE CATALOG
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Industry-Ready Tech Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course, idx) => (
              <div
                key={idx}
                className="glass-card p-6 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#00E5FF]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#9CA3AF] mb-3">
                    <span className="text-[#00E5FF]">{course.duration}</span>
                    <span>CERTIFIED PROGRAM</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                  <p className="text-sm text-[#9CA3AF] mb-4 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {course.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#enroll"
                    className="w-full py-2.5 text-center block rounded-xl bg-white/5 hover:bg-[#00E5FF] hover:text-black text-xs font-semibold text-white transition-all border border-white/10"
                  >
                    Enroll in this Course
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry / Enrollment Section */}
        <div id="enroll" className="glass-card p-8 sm:p-12 border border-white/15 rounded-3xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-mono text-[#00E5FF] uppercase tracking-widest block mb-2">
              ADMISSIONS OPEN
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Begin Your Tech Journey at Aider Academy
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] mb-8">
              Speak with our academic counselors in Calicut to discuss batch schedules, syllabus details, and scholarship opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+918137837374"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#00E5FF] text-black font-bold text-sm shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:bg-white transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Admissions: +91 8137837374</span>
              </a>

              <a
                href="mailto:info@aiderinfotech.com?subject=Aider%20Academy%20Admission%20Inquiry"
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
