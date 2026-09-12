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

export interface DepartmentImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Department {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: DepartmentImage[];
  color: string;
  iconName: string;
  highlights: string[];
  pills: string[];
  learnMoreHref: string;
  enquireHref: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  iconName: string;
  subtitle?: string;
  details?: string[];
  metric?: { value: string; label: string };
  tags?: string[];
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
    phone: "+91 8137 83 73 74",
    phoneRaw: "+918137837374",
    email: "info@aiderinfotech.com",
    address: "3rd Floor City Corner building Oppo. Bismi Hypermarket, Nadakavu, Calicut-06, Kerala",
    socials: {
      instagram: "https://instagram.com/aiderinfotech",
      x: "https://x.com/aiderinfotech",
      facebook: "https://facebook.com/aiderinfotech",
      linkedin: "https://linkedin.com/company/aiderinfotech",
    },
  },
  departmentContacts: {
    infotech: {
      name: "Aider Infotech HQ",
      phone: "+91 8137 83 73 74",
      phoneRaw: "+918137837374",
      email: "info@aiderinfotech.com",
      address: "3rd Floor City Corner building Oppo. Bismi Hypermarket, Nadakavu, Calicut-06",
      website: "https://aiderinfotech.com",
      instagram: "https://instagram.com/aiderinfotech",
      handle: "@aiderinfotech",
    },
    creative: {
      name: "Aider Creative",
      phone: "+91 8139 837 374",
      phoneRaw: "+918139837374",
      email: "info.aidercreative@gmail.com",
      address: "1/3714-d2 City Corner Building Nadakkavu, Kozhikode, Kerala",
      website: "https://www.aidercreative.com",
      instagram: "https://instagram.com/aider.creative",
      handle: "@aider.creative",
    },
    academy: {
      name: "Aider Academy",
      phone: "+91 9605 44 73 74",
      phoneRaw: "+919605447374",
      email: "academy@aiderinfotech.com",
      address: "1/3714-d2 City Corner Building Nadakkavu, Kozhikode, Kerala",
      website: "https://aiderinfotech.com/academy",
      instagram: "https://instagram.com/aider.academy",
      handle: "@aider.academy",
    },
    techstore: {
      name: "IT CLUB Techstore",
      stores: [
        {
          name: "Store 1",
          location: "Dubai Bazar, Calicut",
          phones: ["+91 9037 00 7374", "+91 903711 7374"],
          phonesRaw: ["+919037007374", "+919037117374"],
        },
        {
          name: "Store 2",
          location: "Malabar Complex, Balussery",
          phones: ["+91 9037 57 7374", "+91 9037 58 7374"],
          phonesRaw: ["+919037577374", "+919037587374"],
        },
      ],
      primaryPhone: "+91 9037 00 7374",
      email: "techstore@aiderinfotech.com",
      instagram: "https://instagram.com/itclubstores",
      handle: "@itclubstores",
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
      subHead: "Custom software solutions built to streaming your business operations.",
      body: "Streamline your business operations with custom software development solutions designed around your unique business needs. We build secure, scalable, and user friendly software that helps automate workflows, improve productivity, optimize processes, and drive company growth. From commerce management systems and enterprise applications to cloud based strategy and workflow automation, our custom software solutions are developed using modern technologies to deliver reliable performance and long term value.",
      tag: "Enterprise Engineering",
      metrics: "99.9% Uptime Architecture",
      image: "/images/Software Development Services in Calicut.webp",
      imageAlt: "Enterprise software development and cloud monitoring dashboard by Aider Infotech Calicut",
    },
    {
      id: "web-dev",
      title: "Web Development",
      subHead: "Responsive, fast and scalable websites that deliver results.",
      body: "Great web development isn't just about clean code it's about building websites that feel fast, look professional, and actually help your business grow. Whether you're launching a new site, redesigning an existing one, or adding custom features, our web development services focus on performance, security, and user experience from day one. We build with modern technologies like WordPress, custom CMS solutions, and responsive frameworks so your site loads quickly on any device and ranks well in search. Every line of code is optimized for Core Web Vitals, mobile-first design, and SEO best practices so you get a website that's not only beautiful but also visible to the people who matter most: your customers.",
      tag: "Modern Web Apps",
      metrics: "< 0.8s LCP Performance",
      image: "/images/Web Development Services in Calicut.webp",
      imageAlt: "Modern responsive web development, Next.js architecture, and UI/UX design by Aider Infotech",
    },
    {
      id: "ecommerce-dev",
      title: "E-commerce Development",
      subHead: "Powerful online stores that convert visitors into customers.",
      body: "E-commerce development is more than just building an online store it’s about creating a fast, secure, and easy to use shopping experience that turns visitors into loyal customers. A well developed e-commerce website combines clean design, mobile friendly navigation, and smooth checkout flows with strong SEO foundations like keyword rich product pages, optimized images, and structured data so search engines can understand and rank your offerings. By focusing on user intent, page speed, and clear calls to action, you not only improve visibility on Google but also build trust and reduce bounce rates. For businesses in Kerala and beyond, investing in professional e-commerce development means scaling sales organically while delivering a seamless, designing technology that feels natural and easy to use on every device.",
      tag: "Conversion Focused",
      metrics: "+34% Avg Conversion",
      image: "/images/E Commerce Development Services in Calicut.webp",
      imageAlt: "High-conversion e-commerce storefront engineering and digital product experience by Aider Infotech",
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      subHead: "iOS & Android apps that engage users and grow your business.",
      body: "Mobile app development is the process of designing, building, testing, and launching software applications that run on smartphones and tablets, with a strong focus on delivering fast, intuitive, and accessible experiences that users actually enjoy. A user friendly app starts with clear navigation, touch friendly buttons, readable text, and smooth performance so people can complete tasks without friction or confusion. To make your mobile application SEO friendly, pair it with a mobile first website that mirrors your app’s core content, uses responsive design, and targets real search intent with natural language titles, descriptions, and helpful pages like features, use cases, comparisons, FAQs, and support guides. Strengthen discoverability further by implementing schema markup (such as Software Application and FAQ), optimizing page speed and Core Web Vitals, and ensuring content parity between your smartphone site and desktop so search engines can fully understand and rank your pages. Finally, align your app store assets name, subtitle, description, and screenshots with the same keyword themes and user promises used on your website to create a consistent, human, and search optimized journey from discovery to install.",
      tag: "iOS & Android Native",
      metrics: "4.9/5 Avg App Store Rating",
      image: "/images/Mobile App Development Services in Calicut.webp",
      imageAlt: "Native iOS and Android mobile app development with intuitive UI by Aider Infotech",
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      subHead: "We develop innovative custom software that automates tasks, streamlines workflows, and enhances productivity.",
      body: "Custom software development is the process of building digital tools designed specifically for your business, not a one size fits all product. Instead of forcing your workflows to fit generic software, custom solutions are created around how your team actually works, integrating smoothly with your existing systems and automating repetitive tasks. This leads to faster operations, fewer errors, and better control over your data, security, and future updates. For growing businesses in competitive markets, custom software offers long-term value by scaling with your needs, reducing dependency on multiple off the shelf tools, and creating unique capabilities that set you apart from competitors.",
      tag: "Bespoke Automation",
      metrics: "60% Task Efficiency Boost",
      image: "/images/Custom Software Development Services in Calicut.webp",
      imageAlt: "Bespoke custom software solutions, workflow automation and API pipeline architecture by Aider Infotech",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing, SEO & Branding",
      subHead: "Data driven marketing strategies to boost your brand online.",
      body: "In today’s digital world, strong branding, smart SEO, and strategic digital marketing work together to turn your business into a brand people remember and trust. Digital marketing helps you reach the right audience at the right time, while SEO ensures your website shows up when potential customers are actively searching for what you offer. When your brand voice is clear, consistent, and human speaking directly to your audience’s needs and pain point servery piece of content, from blog posts to social media updates, becomes an opportunity to build connection and credibility. By aligning your branding with SEO driven content and data-backed marketing strategies, you create a cohesive online presence that not only ranks well on search engines but also resonates emotionally with your audience, driving both visibility and long-term loyalty.",
      tag: "Growth Marketing",
      metrics: "3.8x ROI on Paid Media",
      image: "/images/Digital Marketing, SEO & Branding Services in Calicut.webp",
      imageAlt: "Data-driven digital marketing, SEO keyword ranking optimization and branding services by Aider Infotech",
    },
    {
      id: "erp-crm-dev",
      title: "ERP and CRM Development",
      subHead: "Custom ERP & CRM Software Development, Installation & Business Management Solutions.",
      body: "In today’s fast moving business world, ERP and CRM development is about building smart digital systems that work the way your team actually works. A well designed ERP (Enterprise Resource Planning) system brings together finance, inventory, operations, and HR into one clear, reliable platform so everyone sees the same numbers, avoids duplicate work, and makes faster, data driven decisions. A strong CRM (Customer Relationship Management) system, on the other hand, builds strong relationships by tracking every interaction, conversations, sales pipelines, and support in one place, helping your team build better relationships and close more deals. When these systems are developed with real user needs in mind clean interfaces, simple workflows, and seamless integrations they stop feeling like “software” and start feeling like a natural extension of your business, saving time, reducing errors, and giving you a single source of truth from the first customer inquiry to the final invoice.",
      tag: "Enterprise ERP & Automation",
      metrics: "100% Unified Ecosystem",
      image: "/images/ERP & CRM Development Services in Calicut.webp",
      imageAlt: "Enterprise ERP and custom software development solutions by Aider Infotech Calicut",
    },
  ] as Service[],
  departments: [
    {
      id: "academy",
      name: "Aider Academy",
      badge: "AIDER ACADEMY // TRAINING DIVISION",
      tagline: "Empowering Next-Gen Tech Talent in Calicut",
      headline: "Industry-Ready Software & AI Engineering Programs",
      description:
        "Aider Academy is a premier software engineering and digital marketing training institute in Calicut, Kerala. We bridge academic learning with enterprise software standards through live client projects, 1-on-1 expert mentorship, and 100% placement and internship assistance.",
      image: "/images/dept_academy.webp",
      imageAlt: "Aider Academy software development and tech training campus in Calicut",
      images: [
        {
          src: "/images/dept_academy.webp",
          alt: "Aider Academy software development and tech training campus in Calicut",
          caption: "Tech Training Campus",
        },
        {
          src: "/images/dept_academy_mentor.webp",
          alt: "1-on-1 Code Mentorship & AI Architecture Workshop at Aider Academy",
          caption: "AI & Python Mentorship",
        },
        {
          src: "/images/dept_academy_workshop.webp",
          alt: "Students collaborating on full-stack web and mobile applications",
          caption: "Collaborative Hackathon Lab",
        },
      ],
      color: "#00E5FF",
      iconName: "GraduationCap",
      highlights: [
        "Full Stack, Flutter & Python Engineering",
        "AI, Machine Learning & Data Analytics Labs",
        "100% Placement & Internship Assistance",
        "Live Client Capstone Project Deployments",
      ],
      pills: [
        "Full Stack Dev",
        "Python & AI",
        "Flutter Mobile",
        "UI/UX Design",
        "Digital Marketing",
        "100% Placement",
      ],
      learnMoreHref: "/academy",
      enquireHref: "/academy#enroll",
    },
    {
      id: "creative",
      name: "Aider Creative",
      badge: "AIDER CREATIVE // DIGITAL MEDIA & MARKETING",
      tagline: "High-Conversion Branding & Performance Marketing",
      headline: "Data-Driven SEO, Social Media & Digital Growth Campaigns",
      description:
        "Aider Creative is the growth and brand media studio of Aider Infotech. We engineer high-impact digital marketing strategies, SEO dominance, viral social media momentum, and avant-garde brand identities that turn online traffic into sustainable enterprise revenue.",
      image: "/images/dept_creative.webp",
      imageAlt: "Aider Creative digital marketing, SEO and branding studio in Calicut",
      images: [
        {
          src: "/images/dept_creative.webp",
          alt: "Aider Creative digital marketing, SEO and branding studio in Calicut",
          caption: "Marketing & Strategy Suite",
        },
        {
          src: "/images/dept_creative_studio.webp",
          alt: "UI/UX designers crafting 3D brand identity and design systems",
          caption: "3D Brand & Design Studio",
        },
        {
          src: "/images/dept_creative_video.webp",
          alt: "Commercial video production and content creation suite with color grading",
          caption: "Commercial Video & Production",
        },
      ],
      color: "#00E676",
      iconName: "Sparkles",
      highlights: [
        "Rank #1 Search Engine Optimization (SEO)",
        "Social Media Growth & Viral Content Studio",
        "ROI-Focused Performance Ads & Meta/Google Ads",
        "Complete Brand Identity, Logos & 3D Media",
      ],
      pills: [
        "SEO Optimization",
        "Social Media Mgmt",
        "Performance Marketing",
        "Brand Identity",
        "3D Visuals & Video",
        "Content Strategy",
      ],
      learnMoreHref: "/creative",
      enquireHref: "/creative#consult",
    },
    {
      id: "techstore",
      name: "IT Club Techstore",
      badge: "IT CLUB TECHSTORE // HARDWARE & MAINTENANCE",
      tagline: "Custom PC Hardware, Laptops & Diagnostic Lab",
      headline: "High-Performance Workstations, Desktops & Expert Repair Center",
      description:
        "IT Club Techstore is Calicut's specialized computer hardware boutique and certified repair center. From custom liquid-cooled gaming rigs and high-end video editing workstations to motherboard repairs and hardware upgrades, we deliver speed, reliability, and precision.",
      image: "/images/dept_techstore.webp",
      imageAlt: "IT Club Techstore desktop, laptop sales and maintenance center in Calicut",
      images: [
        {
          src: "/images/dept_techstore.webp",
          alt: "IT Club Techstore desktop, laptop sales and maintenance center in Calicut",
          caption: "Hardware & PC Showroom",
        },
        {
          src: "/images/dept_techstore_pcbuild.webp",
          alt: "Custom liquid-cooled gaming PC assembly with glowing UV coolant",
          caption: "Custom Liquid-Cooling Lab",
        },
        {
          src: "/images/dept_techstore_repair.webp",
          alt: "Motherboard chip-level repair lab with high-magnification stereomicroscope",
          caption: "Chip-Level Diagnostic Center",
        },
      ],
      color: "#A855F7",
      iconName: "Cpu",
      highlights: [
        "Custom Liquid-Cooled Gaming & Workstation PCs",
        "Desktop & Laptop Motherboard Chip-Level Repairs",
        "Hardware Upgrades (RAM, SSD, High-End GPUs)",
        "Same-Day Diagnostics & Enterprise Maintenance",
      ],
      pills: [
        "Custom PC Builds",
        "Laptops & Desktops",
        "Chip-Level Repairs",
        "GPU & SSD Upgrades",
        "Gaming Workstations",
        "Fast Diagnostics",
      ],
      learnMoreHref: "/techstore",
      enquireHref: "/techstore#service",
    },
  ] as Department[],
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
      subtitle: "Unified Full-Lifecycle Product Development",
      description: "From custom software and web development to performance marketing and branding — all under one unified roof.",
      iconName: "Layers",
      details: [
        "Comprehensive discovery, UI/UX architecture, cloud development, and automated DevOps.",
        "Integrated multi-platform delivery across High-Concurrency Web, Flutter Mobile, and APIs.",
        "Post-launch data-driven growth marketing, SEO scaling, and 24/7 proactive maintenance."
      ],
      metric: { value: "360°", label: "Full-Stack Ecosystem Coverage" },
      tags: ["Custom Software", "Mobile Apps", "Cloud Infrastructure", "DevOps", "Growth Marketing"]
    },
    {
      id: "2",
      title: "Results-Driven Approach",
      subtitle: "Measurable ROI & Revenue-Centric Delivery",
      description: "We focus on measurable outcomes, helping businesses maximize ROI, increase visibility, and scale customer acquisition.",
      iconName: "TrendingUp",
      details: [
        "Data-backed sprints tied directly to business KPIs, user retention, and conversion metrics.",
        "Advanced funnel analytics and event tracking embedded into every application layer.",
        "Lean, agile architecture minimizing technical debt and maximizing product lifecycle velocity."
      ],
      metric: { value: "3.8x", label: "Average Client ROI Multiplier" },
      tags: ["ROI Optimization", "Analytics", "KPI Alignment", "Conversion Rate", "Scalability"]
    },
    {
      id: "3",
      title: "Experienced Professionals",
      subtitle: "Elite Engineers, Designers & Tech Consultants",
      description: "Our team consists of skilled engineers, UI/UX designers, and technology consultants with real-world enterprise expertise.",
      iconName: "Users",
      details: [
        "Senior engineering talent across modern cloud stacks, AI integration, and reactive frontends.",
        "Direct senior lead engagement on every build with zero junior outsourcing pass-offs.",
        "Continuous R&D in distributed systems, modern web standards, and secure enterprise patterns."
      ],
      metric: { value: "100%", label: "Senior Hands-On Execution" },
      tags: ["Senior Architects", "UI/UX Designers", "Domain Specialists", "Tech Consultants"]
    },
    {
      id: "4",
      title: "Tailor-Made Solutions",
      subtitle: "Zero Generic Templates, 100% Bespoke Code",
      description: "Every business is unique. We engineer custom architectures and tailored strategies aligned with your exact roadmap.",
      iconName: "Cpu",
      details: [
        "Custom software engineered around your specific organizational workflows and data flows.",
        "Seamless third-party ERP, CRM, payment gateway, and legacy database system integrations.",
        "Modular microservice layers that adapt fluidly as enterprise customer volume scales."
      ],
      metric: { value: "100%", label: "Bespoke System Architecture" },
      tags: ["Bespoke Architecture", "API Integration", "Modular Design", "High Concurrency"]
    },
    {
      id: "5",
      title: "Latest Technologies",
      subtitle: "Modern Stacks, AI Automation & Cloud Native",
      description: "We leverage modern frameworks, cloud architectures, AI automation, and secure DevOps to keep you ahead.",
      iconName: "Zap",
      details: [
        "State-of-the-art toolchains: Next.js 16, React 19, Python, Flutter, Docker, and AWS/GCP.",
        "Embedded generative AI workflows, intelligent copilots, and real-time inference pipelines.",
        "Enterprise zero-trust security postures, end-to-end encryption, and automated testing."
      ],
      metric: { value: "99.9%", label: "Production Uptime & Reliability" },
      tags: ["Next.js & React", "Python & AI", "Flutter Native", "Cloud Native", "Microservices"]
    },
    {
      id: "6",
      title: "Transparent Communication",
      subtitle: "Real-Time Collaboration & Direct Sprints",
      description: "Regular sprint demos, weekly milestones, clear reporting, and complete transparency at every development stage.",
      iconName: "MessageSquare",
      details: [
        "Weekly sprint demos, real-time shared staging environments, and roadmap dashboards.",
        "Direct communication with core developers and project leads via dedicated channels.",
        "Transparent milestone billing with clearly audited deliverables at each project milestone."
      ],
      metric: { value: "24/7", label: "Synchronous Visibility & Staging" },
      tags: ["Agile Sprints", "Live Demos", "Weekly Milestones", "Direct Access", "Full Auditing"]
    },
    {
      id: "7",
      title: "Client-Centric Partnership",
      subtitle: "Long-Term Strategic Alliances Beyond Deployment",
      description: "We don't just deliver code — we forge long-term strategic technology partnerships to sustain your continued growth.",
      iconName: "ShieldCheck",
      details: [
        "We operate as an extension of your internal executive engineering leadership team.",
        "Proactive architectural audits to continuously future-proof your digital assets.",
        "Dedicated SLA support, continuous feature evolution, and rapid incident response."
      ],
      metric: { value: "94%", label: "Long-Term Client Retention Rate" },
      tags: ["Strategic Advisory", "SLA Guarantees", "Continuous Upgrades", "Executive Partner"]
    },
    {
      id: "8",
      title: "Proven Success Track Record",
      subtitle: "Trusted by Startups, SMEs & Global Enterprises",
      description: "Trusted by startups, SMEs, and established global enterprises with a track record of high-impact digital products.",
      iconName: "Award",
      details: [
        "990+ successful digital projects shipped across India, GCC, and international markets.",
        "Deep vertical experience spanning Fintech, Healthcare, E-Commerce, Education, and Logistics.",
        "Recognized for technical excellence, aesthetic sophistication, and reliable execution."
      ],
      metric: { value: "991+", label: "Completed Global Deployments" },
      tags: ["Global Deployments", "Fintech & Healthcare", "Enterprise Grade", "Proven Delivery"]
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
