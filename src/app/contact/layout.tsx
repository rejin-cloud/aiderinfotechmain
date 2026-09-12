import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aiderinfotech.com";

export const metadata: Metadata = {
  title: "Contact Us | Aider Infotech Calicut, Kerala",
  description:
    "Get in touch with Aider Infotech in Nadakkav, Calicut. Contact us for custom software development, web & mobile applications, digital marketing, and tech training inquiries.",
  alternates: {
    canonical: `${siteUrl}/contact/`,
  },
  openGraph: {
    title: "Contact Aider Infotech | Best Software & Digital Solutions in Calicut",
    description:
      "Get in touch with Aider Infotech in Nadakkav, Calicut. Contact us for custom software development, web & mobile applications, digital marketing, and tech training.",
    url: `${siteUrl}/contact/`,
    siteName: "Aider Infotech",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Aider Infotech Calicut",
    description:
      "Get in touch with Aider Infotech in Nadakkav, Calicut for software development and digital solutions.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
