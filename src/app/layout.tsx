import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ParticleCanvas } from "@/components/background/ParticleCanvas";
import { SmoothScrollProvider } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aiderinfotech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aider Infotech | Best Digital Solutions in Calicut",
    template: "%s | Aider Infotech",
  },
  description:
    "Empower your business with innovative custom software development, high-performance web applications, mobile apps, and data-driven digital solutions in Calicut, Kerala.",
  keywords: [
    "Digital Solutions Calicut",
    "Software Development Calicut",
    "Web Development Kerala",
    "Mobile App Development Calicut",
    "Custom Software Company Nadakkav",
    "Digital Marketing Agency Calicut",
    "Software Training Institute Calicut",
    "IT Club Techstore Calicut",
    "Aider Infotech",
    "Aider Academy",
  ],
  authors: [{ name: "Aider Infotech", url: siteUrl }],
  creator: "Aider Infotech",
  publisher: "Aider Infotech",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Aider Infotech | Best Digital Solutions in Calicut",
    description:
      "Empower your business with innovative custom software development, web & mobile apps, IT training, and data-driven digital solutions in Calicut, Kerala.",
    url: siteUrl,
    siteName: "Aider Infotech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aider Infotech | Best Digital Solutions in Calicut",
    description:
      "Empower your business with innovative custom software development, web & mobile apps, IT training, and digital solutions.",
    creator: "@aiderinfotech",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/aider-logo-white-text.webp",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "google-site-verification-placeholder",
  },
};

const jsonLdOrgAndBusiness = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Aider Infotech",
      "alternateName": ["Aider Infotech | Best Digital Solutions in Calicut", "AiderInfotech"],
      "publisher": {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "Aider Infotech",
      "url": siteUrl,
      "logo": `${siteUrl}/favicon.ico`,
      "description":
        "Leading Software Development Company, Tech Training Academy & Digital Solutions Provider in Calicut, Kerala.",
      "telephone": "+91 8137837374",
      "sameAs": [
        "https://www.instagram.com/aiderinfotech",
        "https://www.linkedin.com/company/aiderinfotech",
        "https://twitter.com/aiderinfotech",
        "https://www.facebook.com/aiderinfotech",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      "name": "Aider Infotech",
      "image": `${siteUrl}/favicon.ico`,
      "telephone": "+91 8137837374",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3rd Floor, City Corner Building, Opp. Bismi Hypermarket, Nadakkav",
        "addressLocality": "Calicut",
        "addressRegion": "Kerala",
        "postalCode": "673006",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.2667,
        "longitude": 75.7833,
      },
      "url": siteUrl,
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrgAndBusiness) }}
        />
      </head>
      <body className="bg-[#0A0E14] text-white min-h-screen relative selection:bg-[#00E676]/30 selection:text-white">
        <SmoothScrollProvider>
          <ParticleCanvas />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

