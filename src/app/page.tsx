import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { GlobalTransition } from "@/components/sections/GlobalTransition";
import { ServicesWorks } from "@/components/sections/ServicesWorks";
import { TestimonialOrbit } from "@/components/sections/TestimonialOrbit";
import { AcademyAndWhyUs } from "@/components/sections/AcademyAndWhyUs";
import { FaqAndBlog } from "@/components/sections/FaqAndBlog";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/layout/Footer";
import { SITE_DATA } from "@/data/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aiderinfotech.com";

export const metadata: Metadata = {
  title: "Aider Infotech | Best Digital Solutions in Calicut",
  description:
    "Aider Infotech delivers enterprise custom software development, web & mobile applications, AI integration, digital marketing, and tech training in Calicut, Kerala.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Aider Infotech | Best Digital Solutions in Calicut",
    description:
      "Aider Infotech delivers enterprise custom software development, web & mobile applications, AI integration, digital marketing, and tech training in Calicut, Kerala.",
    url: siteUrl,
    siteName: "Aider Infotech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aider Infotech | Best Digital Solutions in Calicut",
    description:
      "Custom software development, web & mobile apps, digital marketing, and tech training in Calicut, Kerala.",
  },
};

export default function Home() {
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": SITE_DATA.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": "Aider Infotech",
    "description": "The Best Software Development Company in Calicut, Kerala",
    "publisher": {
      "@id": `${siteUrl}/#organization`,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <Hero />
      <GlobalTransition />
      <ServicesWorks />
      <AcademyAndWhyUs />
      <FaqAndBlog />
      <TestimonialOrbit />
      <CallToAction />
      <Footer />
    </div>
  );
}

