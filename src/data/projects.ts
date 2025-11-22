export interface Project {
  title: string;
  description: string;
  specs: string[];
  logoUrl?: string;
  website?: string;
  stats?: { label: string; value: string }[];
  features?: string[];
  color?: string;
  status?: string;
}

export const projects: Project[] = [
  // SaaS & Platforms
  {
    title: "Agency Commander",
    description:
      "The financial command center for digital agencies. Gives complete visibility into sales, revenue, and profitability. Replaces spreadsheets with a real-time financial engine.",
    specs: ["SaaS", "Financial Tech", "Dashboard"],
    logoUrl: "https://logo.clearbit.com/agencycommander.co",
    website: "https://agencycommander.co",
    stats: [
      { label: "Focus", value: "Profitability" },
      { label: "Type", value: "SaaS" },
    ],
    features: [
      "Complete Sales Visibility",
      "Real-time Profitability Tracking",
      "Actionable Financial Reports",
      "Sales Forecasting",
    ],
    color: "oklch(0.45 0.15 240)", // Navy Blue
    status: "Live",
  },
  {
    title: "HG Content",
    description:
      "AI-powered content generation platform designed for modern businesses. Create, manage, and optimize content across multiple clients and campaigns with advanced AI assistance.",
    specs: ["AI", "Content Ops", "SaaS"],
    logoUrl: "https://logo.clearbit.com/hgcontent.com",
    website: "https://hgcontent.com",
    stats: [
      { label: "Tech", value: "Advanced AI" },
      { label: "Scale", value: "Enterprise" },
    ],
    features: [
      "Multi-Client Management",
      "SEO Optimization Built-in",
      "Strategy & Tone Management",
      "Real-time Processing",
    ],
    color: "oklch(0.6 0.2 300)", // Purple
    status: "Live",
  },
  {
    title: "HG SEO Commander",
    description:
      "Comprehensive SEO management platform for businesses of all sizes. Boost online presence and drive growth through data-driven insights and automated reporting.",
    specs: ["SEO", "Automation", "Analytics"],
    logoUrl: "https://logo.clearbit.com/hgseocommander.com",
    website: "https://hgseocommander.com",
    stats: [
      { label: "Data", value: "Reliable" },
      { label: "Security", value: "Enterprise" },
    ],
    features: [
      "Comprehensive Reports",
      "Industry-Specific Insights",
      "User-Friendly Dashboard",
      "Automated Analysis",
    ],
    color: "oklch(0.55 0.18 150)", // Green
    status: "Live",
  },
  {
    title: "HG Email",
    description:
      "Email marketing platform designed for high-deliverability campaigns and automated sequences. (Internal Tool/Platform)",
    specs: ["Email", "Automation", "Infrastructure"],
    logoUrl: "", // No logo available from failed URL
    website: "https://hg-email.com",
    stats: [
      { label: "Type", value: "Infrastructure" },
    ],
    features: [
      "High Deliverability",
      "Automated Sequences",
      "Campaign Management",
    ],
    color: "oklch(0.6 0.15 30)", // Red/Orange
    status: "Internal",
  },
  {
    title: "Heaviside Platform",
    description:
      "Multi-tenant website platform for managing 50-100+ WordPress sites with modern technology, enterprise-grade security, and complete multi-tenant isolation.",
    specs: ["Next.js 15", "Supabase", "Multi-tenancy"],
    stats: [
      { label: "Scale", value: "100+ Sites" },
      { label: "Tech", value: "Modern Stack" },
    ],
    features: [
      "Complete Isolation",
      "Enterprise Security",
      "Centralized Management",
    ],
    color: "oklch(0.3 0.1 260)",
    status: "Internal Platform",
  },
  {
    title: "FreightRail Pulse",
    description:
      "Real-time freight rail monitoring and visualization platform for the United States. Processes high-volume data streams to visualize network status.",
    specs: ["Real-time", "Geospatial", "WebSocket"],
    stats: [
      { label: "Data", value: "High-Volume" },
      { label: "Type", value: "Real-time" },
    ],
    features: [
      "Network Visualization",
      "Live Data Streams",
      "Geospatial Analysis",
    ],
    color: "oklch(0.4 0.15 200)",
    status: "Project",
  },
];
