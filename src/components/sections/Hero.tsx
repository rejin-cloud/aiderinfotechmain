"use client";

import React, {
  useState,
  useEffect,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import Image from "next/image";

import {
  ArrowRight,
  Phone,
} from "lucide-react";

import AiderLogoVisual from "./AiderLogoVisual";

interface HeroService {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  category: string;
}

const HERO_SERVICES: HeroService[] = [
  {
    id: "software",
    title: "Software Development | Custom Enterprise",
    subtitle:
      "Streamlined business operations and custom cloud architectures built for long-term scalability.",
    image: "/images/service_software.jpg",
    category: "Software Engineering",
  },
  {
    id: "web",
    title: "Web App Development | Modern & Fast",
    subtitle:
      "Scalable web platforms engineered for performance, resilience, and conversion-focused experiences.",
    image: "/images/service_web.jpg",
    category: "Web Platforms",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions | Enterprise Scale",
    subtitle:
      "High-velocity digital storefronts built with seamless checkout, inventory sync, and multi-currency support.",
    image: "/images/service_ecommerce.jpg",
    category: "E-Commerce",
  },
  {
    id: "mobile",
    title: "Mobile App Development | iOS & Android",
    subtitle:
      "Native and cross-platform mobile apps delivering fluid, intuitive user experiences at scale.",
    image: "/images/service_mobile.jpg",
    category: "Mobile Apps",
  },
];

const HEADLINE_PHRASES = [
  "Digital Innovation !",
  "Digital Intelligence !",
  "Digital Excellence !",
  "Digital Transformation !",
];

function TypewriterHeadline() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = HEADLINE_PHRASES[phraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentFullText) {
      /*
       * Pause after typing.
       */
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2400);
    } else if (isDeleting && displayText === "") {
      /*
       * Move to next phrase.
       */
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % HEADLINE_PHRASES.length);
    } else {
      /*
       * Typing/deleting.
       */
      const typingSpeed = isDeleting ? 28 : 55;

      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1);

        setDisplayText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <div className="w-full flex items-center mb-8 py-2">
      <h1
        style={{
          fontWeight: 260,
        }}
        className="
          font-[family-name:var(--font-heading)]
          font-extralight
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-[4.3rem]
          xl:text-[4.8rem]
          text-white
          tracking-[-0.03em]
          leading-[1.25]
          py-1
          whitespace-nowrap
          select-none
          flex
          items-center
          drop-shadow-md
        "
      >
        <span>{displayText}</span>

        <span
          className="
            inline-block
            w-[2.5px]
            h-[0.78em]
            bg-[#00E676]
            ml-2.5
            shrink-0
            animate-pulse
            shadow-[0_0_12px_#00E676]
          "
        />
      </h1>
    </div>
  );
}

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  /*
   * Automatically rotate services.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SERVICES.length);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const activeService = HERO_SERVICES[currentIndex];

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[96vh]
        flex
        items-center
        justify-center
        pt-36
        pb-24
        px-6
        md:px-12
        lg:px-16
        overflow-hidden
        bg-transparent
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          w-full
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-12
          lg:gap-8
          items-center
        "
      >
        {/* =====================================================
            LEFT COLUMN
        ====================================================== */}

        <div
          className="
            lg:col-span-7
            flex
            flex-col
            items-start
            text-left
            z-10
          "
        >
          {/* Eyebrow */}
          <div
            className="
              flex
              items-center
              gap-3.5
              mb-6
            "
          >
            <span
              className="
                w-8
                h-[2px]
                bg-[#00E676]
                shadow-[0_0_8px_#00E676]
              "
            />

            <span
              className="
                text-xs
                sm:text-sm
                font-semibold
                tracking-[0.25em]
                text-[#9CA3AF]
                uppercase
              "
            >
              YOUR TRUSTED PARTNER IN
            </span>
          </div>

          {/* =================================================
              TYPEWRITER
          ================================================== */}

          <TypewriterHeadline />

          {/* =================================================
              SERVICE CARD
          ================================================== */}

          <div
            className="
              w-full
              max-w-[620px]
              mb-8
            "
          >
            <div
              className="
                glass-card
                relative
                border
                border-white/12
                p-5
                sm:p-6
                rounded-3xl
                overflow-hidden
                min-h-[185px]
                flex
                items-center
                shadow-2xl
              "
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{
                    opacity: 0,
                    filter: "blur(14px)",
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(14px)",
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="
                    w-full
                    grid
                    grid-cols-1
                    sm:grid-cols-12
                    gap-5
                    items-center
                  "
                >
                  {/* Service image */}
                  <div
                    className="
                      sm:col-span-5
                      relative
                      h-32
                      sm:h-36
                      w-full
                      rounded-2xl
                      overflow-hidden
                      bg-black/50
                      border
                      border-white/10
                      shrink-0
                      shadow-lg
                    "
                  >
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 240px"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                      priority
                    />
                  </div>

                  {/* Service content */}
                  <div
                    className="
                      sm:col-span-7
                      flex
                      flex-col
                      justify-between
                      pr-1
                    "
                  >
                    <div>
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-3
                          mb-2
                        "
                      >
                        <h3
                          className="
                            text-base
                            sm:text-lg
                            font-bold
                            text-white
                            leading-snug
                            hover:text-[#00E676]
                            transition-colors
                          "
                        >
                          {activeService.title}
                        </h3>

                        <a
                          href="#services"
                          className="
                            w-8
                            h-8
                            rounded-full
                            bg-white/5
                            border
                            border-white/10
                            flex
                            items-center
                            justify-center
                            text-[#9CA3AF]
                            hover:text-[#00E676]
                            hover:border-[#00E676]/40
                            transition-colors
                            shrink-0
                            mt-0.5
                          "
                          aria-label="View Service Details"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>

                      <p
                        className="
                          text-xs
                          sm:text-sm
                          text-[#9CA3AF]
                          leading-relaxed
                          line-clamp-3
                        "
                      >
                        {activeService.subtitle}
                      </p>
                    </div>

                    {/* Progress indicators */}
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        mt-4
                      "
                    >
                      {HERO_SERVICES.map((item, idx) => (
                        <button
                          key={item.id}
                          onClick={() => setCurrentIndex(idx)}
                          aria-label={`Go to service ${idx + 1}`}
                          className={`
                            h-1.5
                            rounded-full
                            transition-all
                            duration-300
                            ${idx === currentIndex
                              ? "w-8 bg-[#00E676] shadow-[0_0_8px_#00E676]"
                              : "w-2.5 bg-white/20 hover:bg-white/40"
                            }
                          `}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* =================================================
              ACTION BUTTONS
          ================================================== */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-4
              w-full
              sm:w-auto
            "
          >
            {/* Strategy Call */}
            <a
              href="#contact"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-2xl
                bg-white/[0.06]
                border
                border-white/15
                hover:border-[#00E676]/60
                hover:bg-[#00E676]/10
                text-white
                hover:text-[#00E676]
                text-sm
                sm:text-base
                font-semibold
                transition-all
                duration-300
                active:scale-98
                shadow-md
              "
            >
              <span>Book a Strategy Call</span>

              <ArrowRight
                className="
                  w-4
                  h-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1.5
                "
              />
            </a>

            {/* Let's Talk */}
            <a
              href="tel:+918137837374"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-[#00E676]
                gap-3
                px-8
                py-4
                rounded-2xl
                bg-white/[0.06]
                border
                border-white/15
                hover:border-[#00E676]/60
                hover:bg-[#00E676]/10
                text-white
                hover:text-[#00E676]
                text-sm
                sm:text-base
                font-semibold
                transition-all
                duration-300
                active:scale-98
                shadow-md
              "
            >
              <span>Let's Talk</span>

              <Phone
                className="
                  w-4
                  h-4
                  text-[#9CA3AF]
                  group-hover:text-[#00E676]
                  transition-colors
                "
              />
            </a>
          </div>
        </div>

        {/* =====================================================
            RIGHT COLUMN — AIDER LOGO VISUAL
        ====================================================== */}
        <div className="lg:col-span-5 flex items-center justify-center relative w-full min-h-[400px]">
          {/* Soft ambient backlight behind logo */}
          <div className="absolute w-72 h-72 bg-[#06b6d4]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Logo container */}
          <div className="relative z-10 w-full flex justify-center">
            <AiderLogoVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;