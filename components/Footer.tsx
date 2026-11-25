"use client";

import Link from "next/link";
import { useState } from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const FOOTER_ROW_1: FooterSection[] = [
  {
    title: "Search & SEO",
    links: [
      { label: "Keyword research", href: "#keyword-research" },
      { label: "SERP analysis", href: "#serp-analysis" },
      { label: "Rank tracking", href: "#rank-tracking" },
      { label: "Technical site audits", href: "#technical-site-audits" },
      { label: "International & local SEO", href: "#international-local-seo" },
    ],
  },
  {
    title: "AI search & answers",
    links: [
      { label: "AI visibility", href: "#ai-visibility" },
      { label: "Prompt research", href: "#prompt-research" },
      { label: "Answer mentions & citations", href: "#answer-mentions" },
      { label: "Entity & source intelligence", href: "#entity-intelligence" },
      { label: "AEO guide", href: "#aeo-guide" },
    ],
  },
  {
    title: "Competitive & market",
    links: [
      { label: "Competitor benchmarking", href: "#competitor-benchmarking" },
      { label: "Backlink intelligence", href: "#backlink-intelligence" },
      { label: "Share of voice", href: "#share-of-voice" },
      { label: "Market demand", href: "#market-demand" },
      { label: "Commerce & paid signals", href: "#commerce-paid-signals" },
    ],
  },
  {
    title: "Content & reporting",
    links: [
      { label: "Content opportunities", href: "#content-opportunities" },
      { label: "Reports & governed workflows", href: "#reports-workflows" },
      { label: "Prioritize content", href: "#prioritize-content" },
      { label: "Improve internal links", href: "#internal-links" },
      { label: "Explain visibility changes", href: "#visibility-changes" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Enterprise", href: "#enterprise" },
      { label: "Agencies & consultancies", href: "#agencies" },
      { label: "Mid-market teams", href: "#mid-market" },
      { label: "Growing businesses", href: "#growing-businesses" },
      { label: "Multi-brand governance", href: "#multi-brand" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Find missing AI citations", href: "#missing-ai-citations" },
      { label: "Compare competitors", href: "#compare-competitors" },
      { label: "Identify keyword gaps", href: "#keyword-gaps" },
      { label: "Compare countries", href: "#compare-countries" },
      { label: "Improve local presence", href: "#local-presence" },
    ],
  },
];

const FOOTER_ROW_2: FooterSection[] = [
  {
    title: "Data & methodology",
    links: [
      { label: "Data methodology", href: "#data-methodology" },
      { label: "Coverage & freshness", href: "#coverage-freshness" },
      { label: "Source provenance", href: "#source-provenance" },
      { label: "Quality & limitations", href: "#quality-limitations" },
      { label: "Data rights & licensing", href: "#data-rights" },
    ],
  },
  {
    title: "Security & governance",
    links: [
      { label: "Security overview", href: "#security-overview" },
      { label: "Data protection", href: "#data-protection" },
      { label: "Tenant isolation", href: "#tenant-isolation" },
      { label: "Agent safety", href: "#agent-safety" },
      { label: "Audit & decision trail", href: "#audit-trail" },
    ],
  },
  {
    title: "Developers & integrations",
    links: [
      { label: "API overview", href: "#api-overview" },
      { label: "Integration catalog", href: "#integration-catalog" },
      { label: "Webhooks", href: "#webhooks" },
      { label: "ZoikoVertex integration", href: "#zoikovertex" },
      { label: "Documentation", href: "#documentation" },
    ],
  },
  {
    title: "Learn & research",
    links: [
      { label: "SEO fundamentals", href: "#seo-fundamentals" },
      { label: "GEO guide", href: "#geo-guide" },
      { label: "AI search glossary", href: "#ai-search-glossary" },
      { label: "Research benchmarks", href: "#research-benchmarks" },
      { label: "Search & AI updates", href: "#search-ai-updates" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About ZoiQuest", href: "/about" },
      { label: "Contact us", href: "#contact" },
      { label: "Careers", href: "#careers" },
      { label: "Newsroom", href: "#newsroom" },
      { label: "Press & brand resources", href: "#press" },
    ],
  },
  {
    title: "Plans & support",
    links: [
      { label: "Pricing", href: "#pricing" },
      { label: "Book a demo", href: "#book-demo" },
      { label: "Help center", href: "#help-center" },
      { label: "Contact support", href: "#contact-support" },
      { label: "Release notes", href: "#release-notes" },
    ],
  },
];

const ALL_SECTIONS: FooterSection[] = [...FOOTER_ROW_1, ...FOOTER_ROW_2];

const LEGAL_PRIMARY: FooterLink[] = [
  { label: "Privacy policy", href: "#privacy-policy" },
  { label: "Terms of service", href: "#terms-of-service" },
  { label: "Cookie policy", href: "#cookie-policy" },
  { label: "Manage cookie choices", href: "#cookie-choices" },
];

const LEGAL_SECONDARY: FooterLink[] = [
  { label: "Data processing addendum", href: "#dpa" },
  { label: "Acceptable use policy", href: "#acceptable-use" },
  { label: "Subprocessors", href: "#subprocessors" },
  { label: "Accessibility statement", href: "#accessibility" },
  { label: "Security overview", href: "#security-overview" },
  { label: "Your privacy choices", href: "#privacy-choices" },
  { label: "Status", href: "#status" },
];

function ChevronIcon({ rotated = false }: { rotated?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${rotated ? "rotate-180" : ""}`}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 13V3.5M8 3.5L4 7.5M8 3.5L12 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotSeparator() {
  return (
    <span
      aria-hidden="true"
      className="mx-3 inline-block size-[3px] rounded-full bg-[#C4DFDF]/70"
    />
  );
}

function FooterColumn({ section }: { section: FooterSection }) {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-3 flex min-h-12 items-center pb-1">
        <h3 className="text-base font-semibold leading-5 text-[#EAF4F3]">
          {section.title}
        </h3>
      </div>
      <ul className="flex flex-col gap-2.5">
        {section.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="block py-0.5 text-sm font-normal leading-5 text-[#C4DFDF] transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full overflow-hidden bg-[#07282C] text-[#EAF4F3]">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 sm:px-10 lg:px-20 lg:pt-24">
        {/* Desktop Sitemap Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-6 gap-x-8 pb-8">
            {FOOTER_ROW_1.map((section) => (
              <FooterColumn key={section.title} section={section} />
            ))}
          </div>

          <div className="grid grid-cols-6 gap-x-8 border-t border-[#C4DFDF]/24 pt-8">
            {FOOTER_ROW_2.map((section) => (
              <FooterColumn key={section.title} section={section} />
            ))}
          </div>
        </div>

        {/* Mobile Sitemap Accordions */}
        <div className="lg:hidden">
          {ALL_SECTIONS.map((section) => {
            const isOpen = Boolean(openSections[section.title]);
            return (
              <div
                key={section.title}
                className="border-b border-[#C4DFDF]/20"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-sm font-semibold leading-5 text-[#EAF4F3]"
                >
                  <span>{section.title}</span>
                  <ChevronIcon rotated={isOpen} />
                </button>

                {isOpen && (
                  <ul className="flex flex-col gap-2 pb-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="block py-0.5 text-sm font-normal leading-5 text-[#C4DFDF] transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Headquarters & Social Row */}
        <div className="mt-8 flex flex-col items-start justify-between gap-8 lg:mt-14 lg:flex-row lg:gap-12 lg:border-t lg:border-[#C4DFDF]/24 lg:pt-12">
          <div className="flex flex-col gap-7 sm:flex-row sm:gap-14 lg:gap-20">
            <div className="max-w-[240px]">
              <h3 className="text-sm font-semibold leading-5 text-[#EAF4F3]">
                Global headquarters · United States
              </h3>
              <address className="mt-2 text-sm font-normal not-italic leading-6 text-[#C4DFDF]">
                1401 21st Street, Suite R
                <br />
                Sacramento, CA 95811
                <br />
                United States
              </address>
            </div>

            <div className="max-w-[288px]">
              <h3 className="text-sm font-semibold leading-5 text-[#EAF4F3]">
                European headquarters · United Kingdom
              </h3>
              <address className="mt-2 text-sm font-normal not-italic leading-6 text-[#C4DFDF]">
                167–169 Great Portland Street, 5th Floor
                <br />
                London W1W 5PF
                <br />
                United Kingdom
              </address>
              <Link
                href="#legal-entities"
                className="mt-4 inline-block text-sm font-medium text-[#EAF4F3] underline underline-offset-4 lg:hidden"
              >
                Legal entities &amp; contact details
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZoiQuest on LinkedIn"
              className="flex size-11 items-center justify-center rounded-full bg-[#EAF4F3] text-[#07282C] transition-colors hover:bg-white"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.2 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
              </svg>
            </Link>

            {/* X (Twitter) */}
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZoiQuest on X"
              className="flex size-11 items-center justify-center rounded-full bg-[#EAF4F3] text-[#07282C] transition-colors hover:bg-white"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </Link>

            {/* YouTube */}
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZoiQuest on YouTube"
              className="flex size-11 items-center justify-center rounded-full bg-[#EAF4F3] text-[#07282C] transition-colors hover:bg-white"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21.58 7.19C21.35 6.33 20.67 5.65 19.81 5.42C18.25 5 12 5 12 5C12 5 5.75 5 4.19 5.42C3.33 5.65 2.65 6.33 2.42 7.19C2 8.75 2 12 2 12C2 12 2 15.25 2.42 16.81C2.65 17.67 3.33 18.35 4.19 18.58C5.75 19 12 19 12 19C12 19 18.25 19 19.81 18.58C20.67 18.35 21.35 17.67 21.58 16.81C22 15.25 22 12 22 12C22 12 22 8.75 21.58 7.19ZM10 15V9L15.2 12L10 15Z" />
              </svg>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ZoiQuest on GitHub"
              className="flex size-11 items-center justify-center rounded-full bg-[#EAF4F3] text-[#07282C] transition-colors hover:bg-white"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017C2 16.442 4.865 20.197 8.839 21.522C9.339 21.615 9.521 21.305 9.521 21.039C9.521 20.801 9.512 20.171 9.508 19.335C6.726 19.941 6.139 17.991 6.139 17.991C5.685 16.835 5.029 16.527 5.029 16.527C4.121 15.905 5.098 15.918 5.098 15.918C6.101 15.989 6.629 16.951 6.629 16.951C7.521 18.483 8.97 18.04 9.539 17.784C9.631 17.136 9.889 16.694 10.175 16.444C7.955 16.191 5.62 15.331 5.62 11.491C5.62 10.397 6.01 9.503 6.649 8.802C6.546 8.548 6.203 7.528 6.747 6.148C6.747 6.148 7.587 5.879 9.497 7.175C10.295 6.953 11.15 6.842 12 6.838C12.85 6.842 13.705 6.953 14.505 7.175C16.413 5.879 17.252 6.148 17.252 6.148C17.797 7.528 17.454 8.548 17.352 8.802C17.992 9.503 18.379 10.397 18.379 11.491C18.379 15.34 16.041 16.188 13.813 16.436C14.172 16.746 14.492 17.358 14.492 18.294C14.492 19.636 14.48 20.718 14.48 21.039C14.48 21.307 14.66 21.62 15.168 21.521C19.138 20.193 22 16.44 22 12.017C22 6.484 17.522 2 12 2Z"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Legal & Back-to-top Row */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-[#C4DFDF]/24 pt-8 lg:mt-12 lg:flex-row lg:items-end">
          <div className="max-w-[752px]">
            <p className="text-sm font-medium leading-5 text-[#EAF4F3]">
              © 2026 Zoiko Tech Inc. All rights reserved.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-y-1 text-xs font-medium leading-5 text-[#EAF4F3]">
              {LEGAL_PRIMARY.map((item, idx) => (
                <span key={item.label} className="inline-flex items-center">
                  {idx > 0 && <DotSeparator />}
                  <Link href={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>

            <div className="mt-1.5 flex flex-wrap items-center gap-y-1 text-xs font-normal leading-5 text-[#C4DFDF]">
              {LEGAL_SECONDARY.map((item, idx) => (
                <span key={item.label} className="inline-flex items-center">
                  {idx > 0 && <DotSeparator />}
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 py-2 text-sm font-semibold leading-5 text-[#EAF4F3] transition-colors hover:text-white"
          >
            <span>Back to top</span>
            <ArrowUpIcon />
          </button>
        </div>

        {/* Oversized Brand Watermark */}
        <div
          aria-hidden="true"
          className="mt-8 overflow-hidden select-none pointer-events-none lg:mt-10"
        >
          <div className="-mb-[0.14em] whitespace-nowrap font-bold leading-[0.82] tracking-[-0.02em] text-white/[0.08] text-[20vw] sm:text-[18vw] lg:text-[18.5vw] xl:text-[268px] 2xl:text-[292px]">
            ZoiQuest
          </div>
        </div>
      </div>
    </footer>
  );
}
