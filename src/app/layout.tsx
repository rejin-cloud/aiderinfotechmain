import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ParticleCanvas } from "@/components/background/ParticleCanvas";
import { SmoothScrollProvider } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aider Infotech | Best Software Development Company in Calicut",
  description:
    "Empower your business with innovative custom software development, high-performance web applications, mobile apps, and data-driven digital solutions in Calicut, Kerala.",
  keywords: [
    "Software Development Calicut",
    "Web Development Kerala",
    "Mobile App Development",
    "Custom Software Company",
    "Digital Marketing Calicut",
    "Aider Infotech",
    "Aider Academy",
  ],
  authors: [{ name: "Aider Infotech" }],
  openGraph: {
    title: "Aider Infotech | Best Software Development Company in Calicut",
    description:
      "Empower your business with innovative custom software development, web & mobile apps, and IT solutions.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
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
