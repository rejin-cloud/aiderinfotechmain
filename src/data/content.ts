export interface Service {
  id: string;
  title: string;
  subHead: string;
  body: string;
  tag: string;
  metrics?: string;
  image: string;
  imageAlt: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface BlogItem {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  imageAlt: string;
}

export const SITE_DATA = {
  company: {
    name: "Aider Infotech",
    tagline: "THE BEST SOFTWARE DEVELOPMENT COMPANY IN CALICUT",
    phone: "+91 8137837374",
    email: "info@aiderinfotech.com",
    address: "3rd Floor, City Corner Building, Opp. Bismi Hypermarket, Nadakkav, Calicut - 06, Kerala, India",
    socials: {
      instagram: "https://instagram.com/aiderinfotech",
      x: "https://x.com/aiderinfotech",
      facebook: "https://facebook.com/aiderinfotech",
      linkedin: "https://linkedin.com/company/aiderinfotech",
    },
  },
  hero: {
    eyebrow: "YOUR TRUSTED PARTNER IN DIGITAL EXCELLENCE",
    heading: "THE BEST SOFTWARE DEVELOPMENT COMPANY IN CALICUT",
    subtext:
      "Grow your business with innovative digital marketing and IT solutions. We help brands increase their online presence, attract more customers, and achieve measurable results through tailored strategies and cutting-edge technology.",
    ctaPrimary: "Get started",
    ctaSecondary: "Explore Services",
  },
  transitionBlock: {
    subtitle: "Global Technology Expertise",
    heading: "Trusted by Businesses Worldwide",
    subtext: "Empowering startups, SMEs, and global enterprises with high-velocity engineering and resilient architectures.",
  },
  secondaryHero: {
    heading: "Build the Future of Your Business",
    body: "Empower your business with custom digital solutions that drive growth, improve efficiency, and deliver measurable results. From digital marketing and branding to web and app development, we create innovative strategies tailored to your unique business goals, helping you stay ahead in a competitive digital landscape.",
  },
  stats: [
    { value: 8, suffix: "+", label: "Years of Expertise" },
    { value: 791, suffix: "+", label: "Clients Globally" },
    { value: 141, suffix: "+", label: "Dedicated Experts" },
    { value: 991, suffix: "+", label: "Completed Projects" },
  ],
  awards: [
    { label: "ISO 9001:2015 Certified", subtitle: "Quality Management" },
    { label: "Top Tech Partner", subtitle: "Kerala IT Awards 2024" },
    { label: "Excellence in Web Eng", subtitle: "Global Digital Forum" },
    { label: "Best Mobile Innovation", subtitle: "Dev Summit India" },
    { label: "Verified Agency", subtitle: "Clutch Top Developers" },
    { label: "Enterprise Ready", subtitle: "Cloud Security Standard" },
  ],
  clients: [
    { name: "Empower Global", sector: "Fintech" },
    { name: "Le Mirage", sector: "Hospitality" },
    { name: "Apex Logistics", sector: "Supply Chain" },
    { name: "HyperMarket Retail", sector: "E-Commerce" },
    { name: "SmartCity Calicut", sector: "Public Sector" },
    { name: "NeoHealth Labs", sector: "Healthcare" },
  ],
  services: [
    {
      id: "software-dev",
      title: "Software Development",
      subHead: "Custom software solutions built to streamline your business operations.",
      body: "Streamline your business operations with custom software development solutions designed around your unique business needs. We build secure, scalable, and user friendly software that helps automate workflows, improve productivity, optimize processes, and drive company growth. From commerce management systems and enterprise applications to cloud based strategy and workflow automation, our custom software solutions are developed using modern technologies to deliver reliable performance and long term value.",
      tag: "Enterprise Engineering",
      metrics: "99.9% Uptime Architecture",
      image: "/images/service_software.jpg",
      imageAlt: "Enterprise software development and cloud monitoring dashboard by Aider Infotech Calicut",
    },
    {
      id: "web-dev",
      title: "Web Development",
      subHead: "Responsive, fast and scalable websites that deliver results.",
      body: "Great web development isn't just about clean code — it's about building websites that feel fast, look professional, and actually help your business grow. Whether you're launching a new site, redesigning an existing one, or adding custom features, our web development services focus on performance, security, and user experience from day one. We build with modern technologies like Next.js, headless CMS solutions, and responsive frameworks so your site loads quickly on any device and ranks well in search.",
      tag: "Modern Web Apps",
      metrics: "< 0.8s LCP Performance",
      image: "/images/service_web.jpg",
      imageAlt: "Modern responsive web development, Next.js architecture, and UI/UX design by Aider Infotech",
    },
    {
      id: "ecommerce-dev",
      title: "E-commerce Development",
      subHead: "Powerful online stores that convert visitors into customers.",
      body: "E-commerce development is more than just building an online store — it's about creating a fast, secure, and easy to use shopping experience that turns visitors into loyal customers. A well developed e-commerce website combines clean design, mobile friendly navigation, and smooth checkout flows with strong SEO foundations like keyword rich product pages, optimized images, and structured data so search engines can understand and rank your offerings.",
      tag: "Conversion Focused",
      metrics: "+34% Avg Conversion",
      image: "/images/service_ecommerce.jpg",
      imageAlt: "High-conversion e-commerce storefront engineering and digital product experience by Aider Infotech",
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      subHead: "iOS & Android apps that engage users and grow your business.",
      body: "Mobile app development is the process of designing, building, testing, and launching software applications that run on smartphones and tablets, with a strong focus on delivering fast, intuitive, and accessible experiences that users actually enjoy. A user friendly app starts with clear navigation, touch friendly buttons, readable text, and smooth performance so people can complete tasks without friction or confusion.",
      tag: "iOS & Android Native",
      metrics: "4.9/5 Avg App Store Rating",
      image: "/images/service_mobile.jpg",
      imageAlt: "Native iOS and Android mobile app development with intuitive UI by Aider Infotech",
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      subHead: "Innovative custom software that automates tasks and enhances productivity.",
      body: "Custom software development is the process of building digital tools designed specifically for your business, not a one size fits all product. Instead of forcing your workflows to fit generic software, custom solutions are created around how your team actually works, integrating smoothly with your existing systems and automating repetitive tasks. This leads to faster operations, fewer errors, and better control over your data.",
      tag: "Bespoke Automation",
      metrics: "60% Task Efficiency Boost",
      image: "/images/service_custom_software.jpg",
      imageAlt: "Bespoke custom software solutions, workflow automation and API pipeline architecture by Aider Infotech",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing, SEO & Branding",
      subHead: "Data driven marketing strategies to boost your brand online.",
      body: "In today's digital world, strong branding, smart SEO, and strategic digital marketing work together to turn your business into a brand people remember and trust. Digital marketing helps you reach the right audience at the right time, while SEO ensures your website shows up when potential customers are actively searching for what you offer. When your brand voice is clear, consistent, and human, every interaction builds credibility.",
      tag: "Growth Marketing",
      metrics: "3.8x ROI on Paid Media",
      image: "/images/service_digital_marketing.jpg",
      imageAlt: "Data-driven digital marketing, SEO keyword ranking optimization and branding services by Aider Infotech",
    },
  ] as Service[],
  academy: {
    heading: "Innovative Software Solutions & Academy in Calicut",
    subheading: "Aider Academy: Bridging Education & High-Tech Industry",
    body: "Aider Academy is a premier software and digital marketing training institute dedicated to empowering aspiring professionals with the knowledge, practical skills, and industry exposure needed to succeed in today's competitive job market. We offer comprehensive, career-oriented training in Digital Marketing, Full Stack Development, Python, Flutter, UI/UX Design, Artificial Intelligence, Data Analytics, and Graphic Design led by experienced industry experts.",
    highlights: [
      "Live Industry Projects & Case Studies",
      "Internships with Placement Assistance",
      "Personalized 1-on-1 Mentorship",
      "Full Stack, AI & Flutter Mastery",
    ],
  },
  visionMission: {
    vision:
      "To become a globally trusted technology partner by delivering innovative software solutions and digital experiences that transform businesses and create a smarter, more connected future.",
    mission:
      "To empower businesses with cutting-edge technology, creative innovation, and strategic digital solutions that drive sustainable growth, improve operational efficiency, and deliver exceptional customer experiences.",
  },
  differentiators: [
    {
      id: "1",
      title: "End-to-End Digital Solutions",
      description: "From custom software and web development to performance marketing and branding — all under one unified roof.",
      iconName: "Layers",
    },
    {
      id: "2",
      title: "Results-Driven Approach",
      description: "We focus on measurable outcomes, helping businesses maximize ROI, increase visibility, and scale customer acquisition.",
      iconName: "TrendingUp",
    },
    {
      id: "3",
      title: "Experienced Professionals",
      description: "Our team consists of skilled engineers, UI/UX designers, and technology consultants with real-world enterprise expertise.",
      iconName: "Users",
    },
    {
      id: "4",
      title: "Tailor-Made Solutions",
      description: "Every business is unique. We engineer custom architectures and tailored strategies aligned with your exact roadmap.",
      iconName: "Cpu",
    },
    {
      id: "5",
      title: "Latest Technologies",
      description: "We leverage modern frameworks, cloud architectures, AI automation, and secure DevOps to keep you ahead.",
      iconName: "Zap",
    },
    {
      id: "6",
      title: "Transparent Communication",
      description: "Regular sprint demos, weekly milestones, clear reporting, and complete transparency at every development stage.",
      iconName: "MessageSquare",
    },
    {
      id: "7",
      title: "Client-Centric Partnership",
      description: "We don't just deliver code — we forge long-term strategic technology partnerships to sustain your continued growth.",
      iconName: "ShieldCheck",
    },
    {
      id: "8",
      title: "Proven Success Track Record",
      description: "Trusted by startups, SMEs, and established global enterprises with a track record of high-impact digital products.",
      iconName: "Award",
    },
  ] as Differentiator[],
  faqs: [
    {
      question: "What makes Aider Infotech the best software development partner in Calicut?",
      answer:
        "We combine senior technical engineering with deep domain expertise, modern cloud stacks (Next.js, Python, Flutter, Cloud native), and end-to-end delivery under one roof. Our client-centric agile process ensures transparency, fast turnaround, and custom software that directly drives operational efficiency and revenue growth.",
      category: "General",
    },
    {
      question: "How long does a typical custom software or web development project take?",
      answer:
        "Project timelines depend on scope and complexity. A focused MVP or responsive corporate platform typically spans 3 to 6 weeks, while extensive enterprise applications or custom ERP/CRM systems take 8 to 16 weeks. We work in 2-week agile sprints with continuous feedback and deployable milestones.",
      category: "Process",
    },
    {
      question: "Do you provide post-launch maintenance, updates, and SLA support?",
      answer:
        "Yes, we offer comprehensive post-launch SLA support, 24/7 server monitoring, performance optimization, security patching, and iterative feature development packages to keep your platform fast, secure, and always up to date.",
      category: "Support",
    },
    {
      question: "How do your digital marketing and SEO services drive measurable ROI?",
      answer:
        "Our digital marketing approach is strictly data-backed. We integrate technical SEO, high-intent Google/Meta ad funnels, conversion rate optimization (CRO), and content marketing. Every rupee spent is tracked against key performance indicators such as cost-per-lead and customer acquisition cost.",
      category: "Marketing",
    },
    {
      question: "Can you modernize or rebuild our existing legacy software system?",
      answer:
        "Absolutely. We specialize in legacy system modernization, database migration, API refactoring, and migrating outdated monolithic applications to modern, scalable microservices and serverless architectures without downtime.",
      category: "Engineering",
    },
  ] as FaqItem[],
  blogs: [
    {
      id: "1",
      title: "How Custom Enterprise Software Elevates Operational Agility in 2025",
      category: "Software Development",
      date: "Sep 2025",
      readTime: "4 min read",
      excerpt: "Why forward-thinking enterprises are replacing rigid off-the-shelf software with purpose-built automated workflows.",
      imageAlt: "Enterprise software architecture conceptual illustration",
    },
    {
      id: "2",
      title: "Core Web Vitals & Next.js: Scaling High-Conversion Web Architecture",
      category: "Web Engineering",
      date: "Aug 2025",
      readTime: "5 min read",
      excerpt: "Deep dive into server-side rendering, sub-second LCP optimization, and headless e-commerce conversion drivers.",
      imageAlt: "Modern web development performance dashboard",
    },
  ] as BlogItem[],
  footer: {
    tagline:
      "Our experienced IT professionals are passionate about building high-performance websites, scalable cloud platforms, and innovative mobile applications.",
    serviceLinks: [
      "Software Development",
      "Web Development & Modern Web Apps",
      "E-Commerce Development",
      "Mobile App Development (iOS & Android)",
      "Custom Enterprise Software",
      "Digital Marketing & Technical SEO",
    ],
    quickLinks: [
      { label: "Home", href: "#hero" },
      { label: "About Us", href: "#about" },
      { label: "Services & Works", href: "#services" },
      { label: "Aider Academy", href: "#academy" },
      { label: "FAQs", href: "#faqs" },
      { label: "Contact Us", href: "#contact" },
    ],
    locations: [
      {
        city: "Calicut, India (HQ)",
        address: "3rd Floor, City Corner Building, Opp. Bismi Hypermarket, Nadakkav, Calicut - 06",
        phone: "+91 8137837374",
        coords: { x: 68, y: 55 },
      },
      {
        city: "Dubai, UAE",
        address: "Business Bay, Dubai, United Arab Emirates",
        phone: "+971 50 000 0000",
        coords: { x: 60, y: 45 },
      },
    ],
  },
};
