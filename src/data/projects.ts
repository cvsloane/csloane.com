export interface Project {
  title: string;
  description: string;
  specs: string[];
}

export const projects: Project[] = [
  // SaaS & Platforms
  {
    title: "Heaviside Platform",
    description:
      "Multi-tenant website platform for managing 50-100+ WordPress sites with modern technology, enterprise-grade security, and complete multi-tenant isolation.",
    specs: ["Next.js 15", "Supabase", "TypeScript", "Multi-tenancy"],
  },
  {
    title: "FreightRail Pulse",
    description:
      "Real-time freight rail monitoring and visualization platform for the United States. Processes high-volume data streams to visualize network status.",
    specs: ["Real-time Data", "Geospatial", "WebSocket", "Visualization"],
  },
  {
    title: "Heaviside Tasks",
    description:
      "AI-powered task management Progressive Web App. Built with a local-first architecture to ensure instant responsiveness and offline capability.",
    specs: ["PWA", "Local-First", "LLM Integration", "Offline Support"],
  },
  {
    title: "HG Websites",
    description:
      "Multi-tenant marketing platform for Heaviside Group agencies, streamlining the deployment and management of niche-specific marketing sites.",
    specs: ["Next.js", "React", "Marketing Automation"],
  },
  {
    title: "Site2Next",
    description:
      "CLI tool to convert any public website to a Next.js application with preserved SEO and functional forms.",
    specs: ["CLI", "Node.js", "AST Manipulation", "Migration Tool"],
  },

  // Agency Automation & Tools
  {
    title: "HG Market Report",
    description:
      "Automated market analysis tool that aggregates data to generate comprehensive reports for agency clients and internal strategy.",
    specs: ["Data Aggregation", "Reporting", "Automation"],
  },
  {
    title: "Agency Financials",
    description:
      "Internal financial tracking and reporting system designed for digital agency operations and forecasting.",
    specs: ["Finance", "Reporting", "Internal Tool"],
  },
  {
    title: "HG SEO Commander",
    description:
      "SEO automation suite for managing campaigns, tracking rankings, and auditing sites at scale.",
    specs: ["Python", "SEO", "Automation", "Data Analysis"],
  },
  {
    title: "Revenue Commander",
    description:
      "Revenue tracking and forecasting tool that integrates with CRM and accounting data to provide real-time business health metrics.",
    specs: ["Python", "Data Pipelines", "Forecasting"],
  },
  {
    title: "HG Leads Commander",
    description:
      "Lead generation automation tool that identifies and qualifies prospects across various channels.",
    specs: ["Lead Gen", "Automation", "Scraping"],
  },
  {
    title: "Heaviside Prospector",
    description:
      "Automated prospecting tool for identifying potential clients in specific niche markets.",
    specs: ["Prospecting", "Data Mining", "Automation"],
  },
  {
    title: "Outscraper GHL",
    description:
      "GoHighLevel Contact Sync Tool - Companion tool for Outscraper Tools pipeline that syncs business data to GoHighLevel CRM.",
    specs: ["CRM Integration", "GoHighLevel", "Data Sync"],
  },
  {
    title: "Outscraper Tools",
    description:
      "Utilities for processing and cleaning data scraped from various sources for marketing campaigns.",
    specs: ["Data Processing", "ETL", "Python"],
  },

  // Plugins & Integrations
  {
    title: "Paving Plugin",
    description:
      "Industry-specific WordPress plugin designed for paving company websites, providing specialized functionality and schema.",
    specs: ["WordPress", "PHP", "Plugin Dev"],
  },
  {
    title: "Heaviside GBP",
    description:
      "Google Business Profile management tool for automating updates, posts, and review management across multiple locations.",
    specs: ["Google API", "Automation", "Local SEO"],
  },
  {
    title: "Heaviside SEO",
    description:
      "Core SEO utility library used across Heaviside Group projects for consistent meta tag generation and schema markup.",
    specs: ["SEO", "Library", "TypeScript"],
  },
  {
    title: "BWS Init",
    description:
      "CLI tool for initializing Bitwarden Secrets Manager in any project, streamlining secure environment variable management.",
    specs: ["CLI", "Security", "Bitwarden"],
  },

  // Personal & Other
  {
    title: "Family Devotion",
    description:
      "Application for managing family spiritual activities and devotionals.",
    specs: ["Personal", "React", "Mobile-First"],
  },
  {
    title: "HG Content",
    description:
      "Content generation and management system for scaling agency content production.",
    specs: ["Content Ops", "CMS", "Automation"],
  },
];
