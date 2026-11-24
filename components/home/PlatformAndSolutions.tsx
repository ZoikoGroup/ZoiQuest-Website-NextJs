"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

const PLATFORM_CARDS = [
  {
    title: "AI search visibility",
    description:
      "See where your brand appears in AI-generated answers, with the sources and prompts behind each mention.",
    image: "/images/home/AI-generated answers and search visibility.png",
    href: "#ai-visibility",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 2.5L11.75 7.25L16.5 9L11.75 10.75L10 15.5L8.25 10.75L3.5 9L8.25 7.25L10 2.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 14.5L3 17M15.5 14.5L17 17"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Search & technical SEO",
    description:
      "Investigate keywords, SERPs and rankings, and surface crawl, index and performance issues.",
    image: "/images/home/Technical SEO and site health on screen.png",
    href: "#search-seo",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M13.2 13.2L16.8 16.8"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Competitive intelligence",
    description:
      "Compare visibility, authority and share of voice against competitors across your markets.",
    image: "/images/home/Competitive analytics and charts.png",
    href: "#competitive-market",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="10" cy="10" r="1.25" fill="currentColor" />
      </svg>
    ),
  },
];

const AUDIENCE_SETS = [
  {
    step: "01",
    cards: [
      {
        title: "For enterprises",
        description:
          "Assess multiple brands, regions and languages with access controls and comparable methodology.",
        cta: "Explore enterprise",
        href: "#enterprise",
        image: "/images/home/Enterprise office building.png",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="4" y="3" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.65" />
            <path d="M8 7H12M8 10.5H12M8 14H12" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        title: "For agencies",
        description:
          "Coordinate research and reporting across clients, with workspace isolation and clear roles.",
        cta: "Explore agencies",
        href: "#agencies",
        image: "/images/home/Agency team collaborating.png",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="7.5" cy="7" r="2.75" stroke="currentColor" strokeWidth="1.65" />
            <circle cx="13.25" cy="7.75" r="2.25" stroke="currentColor" strokeWidth="1.65" />
            <path
              d="M3 16C3 13.7 5 12 7.5 12C10 12 12 13.7 12 16M12.5 12.2C14.8 12.4 16.5 13.9 16.5 16"
              stroke="currentColor"
              strokeWidth="1.65"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
    ],
  },
  {
    step: "02",
    cards: [
      {
        title: "For agencies",
        description:
          "Coordinate research and reporting across clients, with workspace isolation and clear roles.",
        cta: "Explore agencies",
        href: "#agencies",
        image: "/images/home/Agency team collaborating.png",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="7.5" cy="7" r="2.75" stroke="currentColor" strokeWidth="1.65" />
            <circle cx="13.25" cy="7.75" r="2.25" stroke="currentColor" strokeWidth="1.65" />
            <path
              d="M3 16C3 13.7 5 12 7.5 12C10 12 12 13.7 12 16M12.5 12.2C14.8 12.4 16.5 13.9 16.5 16"
              stroke="currentColor"
              strokeWidth="1.65"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
      {
        title: "For mid-market teams",
        description:
          "Unite classic SEO and AI answer monitoring in a single workflow without fragmented tools.",
        cta: "Explore mid-market",
        href: "#mid-market",
        image: "/images/home/Enterprise office building.png",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="4" y="3" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.65" />
            <path d="M8 7H12M8 10.5H12M8 14H12" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    step: "03",
    cards: [
      {
        title: "For growing businesses",
        description:
          "Spot high-leverage keywords, missing AI citations, and content opportunities backed by clear evidence.",
        cta: "Explore growing teams",
        href: "#growing-businesses",
        image: "/images/home/Agency team collaborating.png",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 14L8.5 9.5L11.5 12.5L16 7" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: "For enterprises",
        description:
          "Assess multiple brands, regions and languages with access controls and comparable methodology.",
        cta: "Explore enterprise",
        href: "#enterprise",
        image: "/images/home/Enterprise office building.png",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="4" y="3" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.65" />
            <path d="M8 7H12M8 10.5H12M8 14H12" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    step: "04",
    cards: [
      {
        title: "Multi-brand governance",
        description:
          "Standardize source provenance, market dimensions, and audit trails across every regional workspace.",
        cta: "Explore governance",
        href: "#multi-brand",
        image: "/images/home/Enterprise office building.png",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 2.75L16 5.25V9.5C16 13.2 13.45 16.45 10 17.45C6.55 16.45 4 13.2 4 9.5V5.25L10 2.75Z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        title: "For agencies",
        description:
          "Coordinate research and reporting across clients, with workspace isolation and clear roles.",
        cta: "Explore agencies",
        href: "#agencies",
        image: "/images/home/Agency team collaborating.png",
        icon: (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="7.5" cy="7" r="2.75" stroke="currentColor" strokeWidth="1.65" />
            <circle cx="13.25" cy="7.75" r="2.25" stroke="currentColor" strokeWidth="1.65" />
            <path
              d="M3 16C3 13.7 5 12 7.5 12C10 12 12 13.7 12 16M12.5 12.2C14.8 12.4 16.5 13.9 16.5 16"
              stroke="currentColor"
              strokeWidth="1.65"
              strokeLinecap="round"
            />
          </svg>
        ),
      },
    ],
  },
];

const APPROACH_PILLARS = [
  {
    title: "Provenance",
    description: "Source family, period and market on every observation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M6 3H12L15.5 6.5V16C15.5 16.83 14.83 17.5 14 17.5H6C5.17 17.5 4.5 16.83 4.5 16V4.5C4.5 3.67 5.17 3 6 3Z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
        <path d="M11.5 3V7H15.5M7.5 11H12.5M7.5 14H10.5" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Freshness",
    description: "Coverage and recency disclosed, never implied.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.65" />
        <path d="M10 6V10.25L12.75 12" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Confidence",
    description: "Uncertainty and limitations shown with results.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.65" />
        <path d="M7.25 10.25L9.15 12.15L13 8" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Isolation",
    description: "Tenant and entitlement checks on the server.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.65" />
        <path d="M4.5 16.5C4.5 13.75 6.96 11.5 10 11.5C13.04 11.5 15.5 13.75 15.5 16.5" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
      </svg>
    ),
  },
];

const APPROACH_METRICS = [
  {
    title: "Intelligence planes",
    subtitle: "Search, AI discovery, authority, demand and commerce.",
    value: "5",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3L3 7.5L12 12L21 7.5L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M3 12L12 16.5L21 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16.5L12 21L21 16.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Capability areas",
    subtitle: "Entry points organized by the questions you ask.",
    value: "12",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Connected evidence model",
    subtitle: "One research-to-action narrative, not disconnected tools.",
    value: "1",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6.5" cy="6.5" r="2.75" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="17.5" r="2.75" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.75 8.75L15.25 15.25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PlatformAndSolutions() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentSet = AUDIENCE_SETS[activeStepIndex];

  return (
    <div className="w-full bg-white">
      {/* Platform Section */}
      <section
        id="platform"
        className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 lg:px-24 lg:py-28"
      >
        <Reveal>
          <div className="flex flex-col gap-5">
            <div className="text-sm font-semibold leading-6">
              <span className="text-[#00C8B8]">/ </span>
              <span className="text-[#0F766E]">Platform</span>
            </div>

            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <SplitText
                as="h2"
                text="Intelligence for every question"
                className="max-w-[609px] text-3xl font-bold leading-[1.12] text-[#0C2E30] sm:text-5xl sm:leading-[54px]"
              />
              <p className="max-w-[505px] text-lg leading-7 text-[#466B6F] sm:text-xl sm:leading-8">
                From classic search to AI answers, ZoiQuest connects the signals
                that shape how you&apos;re discovered.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16">
          {PLATFORM_CARDS.map((card, index) => (
            <Reveal key={card.title} delay={index * 100} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#DCE8E9] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_14px_34px_0px_rgba(12,46,48,0.1)]">
                <div className="relative h-64 w-full overflow-hidden bg-[#F4F8F8] sm:h-72">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-xl bg-white text-[#10535A] shadow-[0px_6px_16px_0px_rgba(12,46,48,0.14)] transition-transform duration-300 group-hover:scale-105">
                    {card.icon}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between px-5 pb-6 pt-7">
                  <div>
                    <h3 className="text-lg font-bold leading-5 text-[#0C2E30]">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-base font-normal leading-6 text-[#466B6F]">
                      {card.description}
                    </p>
                  </div>

                  <Link
                    href={card.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-base font-semibold leading-7 text-[#0F766E] transition-colors hover:text-[#10535A]"
                  >
                    <span>Learn more</span>
                    <ArrowRightIcon />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 lg:px-24 lg:py-24">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col items-start">
              <div className="flex w-full items-center gap-2.5 pb-8">
                {AUDIENCE_SETS.map((item, idx) => {
                  const isActive = idx === activeStepIndex;
                  return (
                    <div
                      key={item.step}
                      className={`flex items-center gap-2.5 transition-all duration-300 ${
                        isActive ? "flex-1" : ""
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveStepIndex(idx)}
                        className={`cursor-pointer text-sm font-semibold leading-6 transition-colors ${
                          isActive
                            ? "text-[#0C2E30]"
                            : "text-[#466B6F] hover:text-[#0C2E30]"
                        }`}
                      >
                        {item.step}
                      </button>
                      {isActive && (
                        <span className="h-px flex-1 min-w-7 bg-[#DCE8E9]" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="text-sm font-semibold leading-6">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0F766E]">Who it&apos;s for</span>
              </div>

              <SplitText
                as="h2"
                lines={["Built for teams at", "every scale"]}
                className="mt-4 text-3xl font-bold leading-[1.12] text-[#0C2E30] sm:text-5xl sm:leading-[54px]"
              />

              <p className="mt-4 max-w-[420px] text-base leading-6 text-[#466B6F]">
                One connected platform, adapted to how your team works.
              </p>

              <Link
                href="#enterprise"
                className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[#DCE8E9] bg-white px-6 py-3.5 text-base font-semibold leading-6 text-[#0C2E30] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F4F8F8]"
              >
                <span>See all solutions</span>
                <ArrowRightIcon />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {currentSet.cards.map((card, index) => (
              <Reveal key={`${currentSet.step}-${card.title}`} delay={index * 100}>
                <article className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-2xl border border-[#DCE8E9] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#07282C]/95 via-[#07282C]/65 to-[#07282C]/15"
                  />

                  <div className="relative z-10 flex flex-col items-start gap-2 p-6">
                    <div className="flex size-10 items-center justify-center rounded-full bg-white text-[#10535A] transition-transform duration-300 group-hover:scale-105">
                      {card.icon}
                    </div>
                    <h3 className="pt-1.5 text-xl font-bold leading-6 text-white">
                      {card.title}
                    </h3>
                    <p className="text-sm font-normal leading-6 text-[#CDE3E5]">
                      {card.description}
                    </p>
                    <Link
                      href={card.href}
                      className="mt-2 flex w-full items-center justify-between text-base font-semibold leading-7 text-white"
                    >
                      <span>{card.cta}</span>
                      <span className="flex size-8 items-center justify-center rounded-full border border-white/40 transition-colors group-hover:bg-white group-hover:text-[#0C2E30]">
                        <ArrowRightIcon />
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 lg:px-24 lg:py-24">
        <div className="rounded-3xl bg-[#F4F8F8] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="flex flex-col items-start gap-4">
                <div className="text-sm font-semibold leading-6">
                  <span className="text-[#00C8B8]">/ </span>
                  <span className="text-[#0F766E]">Our approach</span>
                </div>
                <SplitText
                  as="h2"
                  text="Evidence you can examine"
                  className="text-3xl font-bold leading-[1.12] text-[#0C2E30] sm:text-5xl sm:leading-[54px]"
                />
                <p className="text-base leading-6 text-[#466B6F]">
                  ZoiQuest is designed to show its work — so you trust what you
                  act on, not just a score.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-4">
              <div className="group relative h-[400px] overflow-hidden rounded-2xl sm:h-[460px]">
                <Image
                  src="/images/home/Analyst reviewing discovery data on screen.png"
                  alt="Analyst reviewing discovery data on screen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#07282C]/90 via-[#07282C]/25 to-transparent"
                />
                <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-1.5">
                  <p className="text-base font-bold leading-5 text-white">
                    From signal to evidence
                  </p>
                  <Link
                    href="#how-it-works"
                    className="inline-flex items-center gap-1.5 text-base font-semibold leading-7 text-white hover:underline"
                  >
                    <span>See how it works</span>
                    <ArrowRightIcon />
                  </Link>
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6 lg:col-span-4">
              {APPROACH_PILLARS.map((pillar, index) => (
                <Reveal key={pillar.title} delay={160 + index * 80}>
                  <div className="flex items-start gap-3.5 transition-transform duration-300 hover:translate-x-1">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#DCE8E9] bg-white text-[#10535A]">
                      {pillar.icon}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold leading-5 text-[#0C2E30]">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-normal leading-6 text-[#466B6F]">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4">
            {APPROACH_METRICS.map((metric, index) => (
              <Reveal key={metric.title} delay={index * 90}>
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#DCE8E9] bg-white px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#07282C] text-[#00C8B8]">
                      {metric.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold leading-5 text-[#0C2E30]">
                        {metric.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-normal leading-6 text-[#466B6F]">
                        {metric.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="text-4xl font-bold leading-none text-[#0C2E30] sm:text-5xl">
                    {metric.value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
