export interface MegaMenuLink {
  label: string;
  href: string;
}

export interface MegaMenuColumn {
  heading: string;
  links: MegaMenuLink[];
}

export interface MegaMenuSection {
  id: string;
  label: string;
  columns: MegaMenuColumn[];
  featureCaption: string;
  viewAllLabel: string;
  viewAllHref: string;
}

export const MEGA_MENU_SECTIONS: MegaMenuSection[] = [
  {
    id: "platform",
    label: "Platform",
    columns: [
      {
        heading: "Search intelligence",
        links: [
          { label: "Keyword research", href: "#keyword-research" },
          { label: "SERP analysis", href: "#serp-analysis" },
          { label: "Rank tracking", href: "/rank-tracking" },
          { label: "Technical site audits", href: "/technical-site-audits" },
        ],
      },
      {
        heading: "AI discovery",
        links: [
          { label: "AI visibility", href: "/ai-visibility" },
          { label: "Prompt research", href: "/prompt-research" },
          { label: "Answer mentions & citations", href: "#answer-mentions" },
          { label: "Entity & source intelligence", href: "/entity-source-intelligence" },
        ],
      },
      {
        heading: "Market & authority",
        links: [
          { label: "Competitor benchmarking", href: "/competitor-benchmarking" },
          { label: "Backlink intelligence", href: "/backlink-intelligence" },
          { label: "Share of voice", href: "#share-of-voice" },
          { label: "Market demand", href: "#market-demand" },
        ],
      },
      {
        heading: "Content & operations",
        links: [
          { label: "Content opportunities", href: "#content-opportunities" },
          { label: "International & local SEO", href: "#international-local-seo" },
          { label: "Commerce & paid signals", href: "#commerce-paid-signals" },
          { label: "Reports & governed workflows", href: "#reports-workflows" },
        ],
      },
    ],
    featureCaption: "How ZoiQuest turns signals into evidence",
    viewAllLabel: "View all Platform",
    viewAllHref: "#platform",
  },
  {
    id: "solutions",
    label: "Solutions",
    columns: [
      {
        heading: "By organization",
        links: [
          { label: "Enterprise", href: "#enterprise" },
          { label: "Mid-market teams", href: "#mid-market" },
          { label: "Growing businesses", href: "#growing-businesses" },
          { label: "Agencies & consultancies", href: "#agencies" },
        ],
      },
      {
        heading: "By team",
        links: [
          { label: "CMOs & growth leaders", href: "#cmo-growth" },
          { label: "SEO & content teams", href: "#seo-content-teams" },
          { label: "Market analysts", href: "#market-analysts" },
          { label: "Developers & data teams", href: "#developers-data" },
        ],
      },
      {
        heading: "By challenge",
        links: [
          { label: "Multi-brand governance", href: "#multi-brand" },
          { label: "Global visibility", href: "#global-visibility" },
          { label: "AI answer discoverability", href: "#ai-discoverability" },
          { label: "Organic + paid coordination", href: "#organic-paid" },
        ],
      },
      {
        heading: "By operating model",
        links: [
          { label: "Multi-tenant administration", href: "#multi-tenant" },
          { label: "API & data access", href: "#api-data-access" },
          { label: "Private evidence overlay", href: "#private-evidence" },
          { label: "ZoikoVertex integration", href: "#zoikovertex" },
        ],
      },
    ],
    featureCaption: "Designed for governed, multi-team use",
    viewAllLabel: "View all Solutions",
    viewAllHref: "#enterprise",
  },
  {
    id: "use-cases",
    label: "Use cases",
    columns: [
      {
        heading: "Discover & diagnose",
        links: [
          { label: "Find missing AI citations", href: "#missing-ai-citations" },
          { label: "Audit technical SEO", href: "#audit-technical-seo" },
          { label: "Compare competitors", href: "#compare-competitors" },
          { label: "Identify keyword gaps", href: "#keyword-gaps" },
        ],
      },
      {
        heading: "Plan & optimize",
        links: [
          { label: "Prioritize content", href: "#prioritize-content" },
          { label: "Improve internal links", href: "#internal-links" },
          { label: "Understand brand sentiment", href: "#brand-sentiment" },
          { label: "Understand audience demand", href: "#audience-demand" },
        ],
      },
      {
        heading: "Measure & report",
        links: [
          { label: "Compare countries", href: "#compare-countries" },
          { label: "Explain visibility changes", href: "#visibility-changes" },
          { label: "Client & board reports", href: "#client-board-reports" },
          { label: "Monitor agent traffic", href: "#agent-traffic" },
        ],
      },
      {
        heading: "Expand & connect",
        links: [
          { label: "Improve local presence", href: "#local-presence" },
          { label: "Explore commerce demand", href: "#commerce-demand" },
          { label: "Connect via API", href: "#connect-api" },
          { label: "Approve governed actions", href: "#governed-actions" },
        ],
      },
    ],
    featureCaption: "From a visibility change to an approved action",
    viewAllLabel: "View all Use Cases",
    viewAllHref: "#how-it-works",
  },
  {
    id: "data-trust",
    label: "Data & trust",
    columns: [
      {
        heading: "Data confidence",
        links: [
          { label: "Data methodology", href: "#data-methodology" },
          { label: "Coverage & freshness", href: "#coverage-freshness" },
          { label: "Source provenance", href: "#source-provenance" },
          { label: "Quality & limitations", href: "#quality-limitations" },
        ],
      },
      {
        heading: "Security & privacy",
        links: [
          { label: "Security overview", href: "#security-overview" },
          { label: "Data protection", href: "#data-protection" },
          { label: "Tenant isolation", href: "#tenant-isolation" },
          { label: "Privacy center", href: "#privacy-policy" },
        ],
      },
      {
        heading: "Developers",
        links: [
          { label: "API overview", href: "#api-overview" },
          { label: "Integration catalog", href: "#integration-catalog" },
          { label: "Webhooks", href: "#webhooks" },
          { label: "MCP & SDKs", href: "#mcp-sdks" },
        ],
      },
      {
        heading: "Governance",
        links: [
          { label: "Agent safety", href: "#agent-safety" },
          { label: "Audit & decision trail", href: "#audit-trail" },
          { label: "Data rights & licensing", href: "#data-rights" },
          { label: "Subprocessors & residency", href: "#subprocessors" },
        ],
      },
    ],
    featureCaption: "Know where the intelligence comes from",
    viewAllLabel: "View all Data & Trust",
    viewAllHref: "#data-methodology",
  },
  {
    id: "resources",
    label: "Resources",
    columns: [
      {
        heading: "Learn the fundamentals",
        links: [
          { label: "SEO fundamentals", href: "#seo-fundamentals" },
          { label: "AEO guide", href: "#aeo-guide" },
          { label: "GEO guide", href: "#geo-guide" },
          { label: "AI search glossary", href: "#ai-search-glossary" },
        ],
      },
      {
        heading: "Guides & practical tools",
        links: [
          { label: "SEO/AEO checklists", href: "#checklists" },
          { label: "Templates", href: "#templates" },
          { label: "Learning library", href: "#learning-library" },
          { label: "Product walkthroughs", href: "#walkthroughs" },
        ],
      },
      {
        heading: "Research & insights",
        links: [
          { label: "Research benchmarks", href: "#research-benchmarks" },
          { label: "Market briefings", href: "#market-briefings" },
          { label: "Search & AI updates", href: "#search-ai-updates" },
          { label: "Methodology notes", href: "#methodology-notes" },
        ],
      },
      {
        heading: "Get help",
        links: [
          { label: "Documentation", href: "#documentation" },
          { label: "Help center", href: "#help-center" },
          { label: "Contact support", href: "#contact-support" },
          { label: "Release notes", href: "#release-notes" },
        ],
      },
    ],
    featureCaption: "Research with methods and dates",
    viewAllLabel: "View all Resources",
    viewAllHref: "#seo-fundamentals",
  },
];
