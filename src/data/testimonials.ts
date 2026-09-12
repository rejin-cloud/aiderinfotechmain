export interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  companyCategory?: string;
  quote: string;
  rating: number; // 4 or 5
  statBadge: string;
  avatar: string;
  companyBadgeColor?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Menon",
    title: "Operations Director",
    company: "Empower Global",
    companyCategory: "Fintech & Payments",
    quote: "Aider Infotech automated our cross-border payment gateway with 99.99% uptime. Exceptional engineering speed and security.",
    rating: 5,
    statBadge: "+140% Volume",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    companyBadgeColor: "#00E676",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    title: "CMO",
    company: "Le Mirage Group",
    quote: "The custom resort booking engine and targeted SEO campaign boosted our direct online bookings within just 3 months.",
    rating: 4,
    statBadge: "+42% Direct Bookings",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    companyBadgeColor: "#00E5FF",
  },
  {
    id: 3,
    name: "Mohammed Al-Hassan",
    title: "Head of IT Infrastructure",
    company: "Apex Freight Logistics",
    quote: "Their custom ERP and real-time fleet tracking portal completely eliminated manual dispatch errors across our regional logistics hubs.",
    rating: 5,
    statBadge: "60% Faster Dispatch",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    companyBadgeColor: "#A855F7",
  },
  {
    id: 4,
    name: "Ananya Roy",
    title: "VP of Digital Commerce",
    company: "HyperMarket Retail",
    quote: "Aider Infotech delivered a high-conversion e-commerce platform that handles heavy holiday traffic surges seamlessly.",
    rating: 4,
    statBadge: "3.2x Mobile Sales",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    companyBadgeColor: "#00E676",
  },
  {
    id: 5,
    name: "Dr. Vikram Nair",
    title: "Managing Director",
    company: "NeoHealth Diagnostics",
    quote: "They built a secure, HIPAA-aligned patient report portal. Report retrieval time dropped from hours to seconds for our patients.",
    rating: 5,
    statBadge: "99.8% Satisfaction",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
    companyBadgeColor: "#00E5FF",
  },
  {
    id: 6,
    name: "Priya Sharma",
    title: "Head of Brand & Growth",
    company: "SmartCity Innovation Hub",
    quote: "Great design language and technical SEO implementation. Our organic search visibility in South India grew dramatically.",
    rating: 4,
    statBadge: "+210% Search Traffic",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    companyBadgeColor: "#A855F7",
  },
  {
    id: 7,
    name: "Karthik Varma",
    title: "CEO & Co-Founder",
    company: "TechForge Cloud Systems",
    quote: "From Next.js web architecture to automated cloud deployment, Aider Infotech delivered on schedule with zero technical debt.",
    rating: 5,
    statBadge: "< 0.6s LCP Speed",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    companyBadgeColor: "#00E676",
  },
  {
    id: 8,
    name: "Amanda Miller",
    title: "Founder & Creative Director",
    company: "Verve Media Studio",
    quote: "The 3D brand identity and video production team created assets that instantly elevated our market positioning across GCC markets.",
    rating: 4,
    statBadge: "4.8/5 Client Score",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80",
    companyBadgeColor: "#00E5FF",
  },
];
