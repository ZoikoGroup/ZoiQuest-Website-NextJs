"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SplitText from "./SplitText";

const HERO_FEATURES = [
  {
    lines: ["SEO, AEO &", "GEO", "in one platform"],
    icon: (
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="15.5" cy="15.5" r="10" stroke="currentColor" strokeWidth="2.8" />
        <path
          d="M23 23L30.5 30.5"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    lines: ["Track AI", "answers", "and citations"],
    icon: (
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path
          d="M18 6L5 12.5L18 19L31 12.5L18 6Z"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M5 18.5L18 25L31 18.5"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 24.5L18 31L31 24.5"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    lines: ["Compare", "competitors"],
    icon: (
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="6" y="21" width="5" height="9" rx="1" stroke="currentColor" strokeWidth="2.5" />
        <rect x="15.5" y="14" width="5" height="16" rx="1" stroke="currentColor" strokeWidth="2.5" />
        <rect x="25" y="6" width="5" height="24" rx="1" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    lines: ["Audit, optimise", "and prove", "impact"],
    icon: (
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path
          d="M18 4.5L29 9V17.5C29 24.5 24.2 30 18 32C11.8 30 7 24.5 7 17.5V9L18 4.5Z"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M13 18.2L16.4 21.6L23.5 14.5"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const SIDEBAR_ITEMS = [
  { id: "Overview", label: "Overview" },
  { id: "Search Visibility", label: "Search Visibility" },
  { id: "AI Answers", label: "AI Answers" },
  { id: "Competitors", label: "Competitors" },
  { id: "Citations & Sources", label: "Citations & Sources" },
  { id: "Site Health", label: "Site Health" },
  { id: "Opportunities", label: "Opportunities" },
  { id: "Reports", label: "Reports" },
];

const KPI_CARDS = [
  {
    label: "Search Visibility",
    value: "72%",
    badge: "↑ +14 pp",
    sparkline: "M2 15 L11 12 L20 13 L29 8 L38 9 L48 4 L56 2",
  },
  {
    label: "AI Answer Presence",
    value: "56%",
    badge: "↑ +18 pp",
    sparkline: "M2 16 L12 14 L22 10 L32 11 L43 6 L56 3",
  },
  {
    label: "Citations",
    value: "3,962",
    badge: "↑ +27%",
    sparkline: "M2 15 L14 13 L24 9 L36 10 L46 5 L56 2",
  },
];

const TOP_OPPORTUNITIES = [
  "Improve AI answer coverage",
  "Earn high-authority citations",
  "Close competitor visibility gap",
  "Optimize priority content",
];

function SidebarIcon({ id }: { id: string }) {
  switch (id) {
    case "Overview":
      return (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <rect x="1.5" y="1.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <rect x="8" y="1.5" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <rect x="1.5" y="8" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <rect x="8" y="8" width="4.5" height="4.5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case "Search Visibility":
      return (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="6" cy="6" r="3.75" stroke="currentColor" strokeWidth="1.2" />
          <path d="M9 9L12 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "AI Answers":
      return (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 1.5L2 4L7 6.5L12 4L7 1.5Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
          <path d="M2 7L7 9.5L12 7" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
          <path d="M2 10L7 12.5L12 10" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        </svg>
      );
    case "Competitors":
    case "Reports":
      return (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2.5 11.5V8M7 11.5V5M11.5 11.5V2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "Citations & Sources":
      return (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M5.5 8.5L8.5 5.5M4.5 6.5L3 8A2.1 2.1 0 006 11L7.5 9.5M9.5 7.5L11 6A2.1 2.1 0 008 3L6.5 4.5" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
        </svg>
      );
    case "Site Health":
      return (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M7 1.5L11.5 3.3V6.8C11.5 9.6 9.6 11.8 7 12.5C4.4 11.8 2.5 9.6 2.5 6.8V3.3L7 1.5Z" stroke="currentColor" strokeWidth="1.15" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.15" />
          <circle cx="7" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.15" />
        </svg>
      );
  }
}

export default function HeroSection() {
  const [activeSidebar, setActiveSidebar] = useState("Overview");

  return (
    <section className="relative w-full overflow-hidden rounded-b-[40px] bg-[#062428] lg:rounded-b-[64px]">
      {/* Full-bleed Hero Background Artwork */}
      <Image
        src="/images/home/Image+Background (1).png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#052024]/88 via-[#052024]/48 to-[#052024]/15"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-10 sm:px-10 lg:px-14 lg:pb-14 lg:pt-12">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6">
          {/* Left Column */}
          <div className="flex flex-col items-start lg:col-span-6">
            {/* Eyebrow */}
            <div className="animate-zq-fade-up flex items-center gap-3.5">
              <span className="h-7 w-1.5 shrink-0 rounded-xs bg-[#2DD4BF]" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2DD4BF] sm:text-sm lg:text-[15px]">
                Global search &amp; AI discovery intelligence
              </p>
            </div>

            {/* 3-line Headline */}
            <h1 className="mt-4 text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[64px] lg:leading-[68px]">
              <SplitText
                as="span"
                immediate
                lines={["Know where your", "brand appears."]}
                delay={80}
                stagger={50}
                className="block text-white"
              />
              <SplitText
                as="span"
                immediate
                text="Understand why."
                delay={360}
                stagger={55}
                className="block text-[#00C8B8]"
              />
            </h1>

            {/* Teal Gradient Underline */}
            <div
              style={{ animationDelay: "480ms" }}
              className="animate-zq-fade-up mt-3.5 h-[3px] w-28 rounded-full bg-gradient-to-r from-[#18D6C6] to-transparent"
            />

            {/* Subtitle */}
            <SplitText
              as="p"
              immediate
              text="Unify SEO, AI search visibility, competitive intelligence and citation insights. Discover opportunities and make evidence backed decisions across markets and languages."
              delay={520}
              stagger={18}
              className="mt-5 max-w-[610px] text-base leading-7 text-[#CDE3E5] sm:text-lg sm:leading-8"
            />

            {/* CTA Buttons */}
            <div
              style={{ animationDelay: "680ms" }}
              className="animate-zq-fade-up mt-7 flex flex-wrap items-center gap-3.5"
            >
              <Link
                href="#platform"
                className="group inline-flex items-center gap-2 rounded-full bg-[#00C8B8] px-6 py-3.5 text-base font-bold leading-6 text-[#07282C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19DBC9] hover:shadow-lg"
              >
                <span>Explore the platform</span>
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
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

              <Link
                href="#book-demo"
                className="group inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-6 py-3.5 text-base font-semibold leading-6 text-white backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
              >
                <span>Book a demo</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M4 2.75L11 7L4 11.25V2.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* 4 Feature Highlights */}
            <div
              style={{ animationDelay: "780ms" }}
              className="animate-zq-fade-up mt-8 grid w-full max-w-[650px] grid-cols-2 gap-y-6 pt-2 sm:grid-cols-4"
            >
              {HERO_FEATURES.map((feat, idx) => (
                <div
                  key={feat.lines.join(" ")}
                  className={`flex flex-col items-center px-3 text-center ${
                    idx > 0 ? "sm:border-l sm:border-[#4ECDC4]/18" : ""
                  }`}
                >
                  <div className="text-[#2DD4BF]">{feat.icon}</div>
                  <p className="mt-2.5 text-xs font-normal leading-4 text-[#EAF4F3] sm:text-[13px] sm:leading-5">
                    {feat.lines.map((line, lineIdx) => (
                      <span key={line} className="block">
                        {line}
                        {lineIdx < feat.lines.length - 1 ? " " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: MacBook + Tilted Phone Mockup */}
          <div
            style={{ animationDelay: "320ms" }}
            className="animate-zq-fade-up relative lg:col-span-6 lg:flex lg:justify-end"
          >
            <div className="relative ml-auto mr-0 w-full max-w-[660px] lg:-mr-6 xl:-mr-8">
              {/* MacBook Screen */}
              <div className="relative overflow-hidden rounded-t-[20px] rounded-b-[6px] border-[3px] border-[#6B8FA3]/65 bg-[#09181C] p-2 shadow-[0_0_64px_rgba(18,240,207,0.22),0_24px_60px_rgba(0,0,0,0.55)]">
                <div className="flex min-h-[420px] flex-col overflow-hidden rounded-xl bg-[#0A3036] sm:flex-row lg:min-h-[450px]">
                  {/* Left App Sidebar */}
                  <aside className="flex w-full shrink-0 flex-row flex-wrap items-center gap-1.5 bg-[#07262B] p-2.5 sm:w-[138px] sm:flex-col sm:items-stretch sm:gap-2 sm:py-5">
                    <div className="mb-1 flex h-9 w-24 items-center justify-center rounded-md bg-white px-2 py-1 sm:w-full">
                      <Image
                        src="/images/home/ZoiQuest_Logo 2.png"
                        alt="ZoiQuest"
                        width={107}
                        height={35}
                        className="h-auto max-h-6 w-auto object-contain"
                      />
                    </div>

                    {SIDEBAR_ITEMS.map((item) => {
                      const active = activeSidebar === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setActiveSidebar(item.id)}
                          className={`flex cursor-pointer items-center gap-1.5 rounded-md px-2.5 py-2 text-left text-[10.5px] leading-tight transition-colors ${
                            active
                              ? "bg-[#2DD4BF] font-bold text-[#07282C]"
                              : "font-normal text-[#DCECEC] hover:bg-white/10"
                          }`}
                        >
                          <span
                            className={
                              active ? "text-[#07282C]" : "text-[#8CE0DA]"
                            }
                          >
                            <SidebarIcon id={item.id} />
                          </span>
                          <span className="truncate">{item.label}</span>
                        </button>
                      );
                    })}
                  </aside>

                  {/* Right Dashboard Main Content */}
                  <div className="flex flex-1 flex-col justify-between gap-3.5 bg-[#0B3138] p-4 sm:p-5 sm:pb-8">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h2 className="text-sm font-bold text-white sm:text-base">
                          Hello, your brand overview
                        </h2>
                        <p className="text-[10.5px] text-[#9CC9CB]">
                          Search, AI and discovery performance at a glance.
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-1.5 rounded-md border border-[#4ECDC4]/20 px-2.5 py-1.5 text-[9.5px] text-white">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <rect
                            x="1.5"
                            y="2.5"
                            width="9"
                            height="8"
                            rx="1"
                            stroke="currentColor"
                            strokeWidth="1.1"
                          />
                          <path
                            d="M1.5 5H10.5M4 1.5V3M8 1.5V3"
                            stroke="currentColor"
                            strokeWidth="1.1"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span>Last 30 days ▾</span>
                      </div>
                    </div>

                    {/* 4 KPI Cards */}
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {KPI_CARDS.map((kpi) => (
                        <div
                          key={kpi.label}
                          className="flex min-h-[104px] flex-col justify-between rounded-lg border border-[#4ECDC4]/18 bg-[#0D3940] p-2.5"
                        >
                          <span className="text-[8.5px] leading-tight text-[#A5D8D9]">
                            {kpi.label}
                          </span>
                          <div className="mt-1.5 flex flex-wrap items-center gap-1">
                            <span className="text-lg font-bold leading-none text-white">
                              {kpi.value}
                            </span>
                            <span className="rounded-xs bg-[#169C5C] px-1 py-0.5 text-[7px] font-bold leading-none text-white">
                              {kpi.badge}
                            </span>
                          </div>
                          <svg
                            viewBox="0 0 58 18"
                            fill="none"
                            aria-hidden="true"
                            className="mt-2 h-5 w-full"
                          >
                            <path
                              d={kpi.sparkline}
                              stroke="#2DD4BF"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      ))}

                      <div className="flex min-h-[104px] flex-col justify-between rounded-lg border border-[#4ECDC4]/18 bg-[#0D3940] p-2.5">
                        <span className="text-[8.5px] leading-tight text-[#A5D8D9]">
                          Competitor Gap
                        </span>
                        <span className="mt-1.5 text-lg font-bold leading-none text-white">
                          +24%
                        </span>
                        <span className="mt-1.5 text-[8.5px] text-[#A5D8D9]">
                          Visibility opportunity
                        </span>
                      </div>
                    </div>

                    {/* Bottom Chart & Top Opportunities */}
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-12">
                      {/* Visibility Trend Chart */}
                      <div className="flex flex-col justify-between rounded-lg border border-[#4ECDC4]/18 bg-[#0D3940] p-3 sm:col-span-7">
                        <div className="flex items-center gap-1 text-xs font-bold text-white">
                          <span>Visibility Trend</span>
                          <span className="text-[9.5px] font-normal text-white/60">
                            ⓘ
                          </span>
                        </div>

                        <div className="mt-2">
                          <svg
                            viewBox="0 0 230 116"
                            fill="none"
                            aria-label="Multi-line visibility trend chart"
                            className="h-36 w-full sm:h-40"
                          >
                            <defs>
                              <linearGradient
                                id="heroTealFill"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#2DD4BF"
                                  stopOpacity="0.28"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#2DD4BF"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>

                            {/* Y-axis labels & gridlines */}
                            {[
                              { y: 12, label: "100%" },
                              { y: 28, label: "80%" },
                              { y: 44, label: "60%" },
                              { y: 60, label: "40%" },
                              { y: 76, label: "20%" },
                              { y: 92, label: "0%" },
                            ].map((row) => (
                              <g key={row.label}>
                                <text
                                  x="22"
                                  y={row.y + 2}
                                  textAnchor="end"
                                  fill="#9CC9CB"
                                  fontSize="5.5"
                                >
                                  {row.label}
                                </text>
                                <line
                                  x1="26"
                                  y1={row.y}
                                  x2="218"
                                  y2={row.y}
                                  stroke="#4ECDC4"
                                  strokeOpacity="0.16"
                                  strokeWidth="0.6"
                                />
                              </g>
                            ))}

                            {/* Area fill under teal line */}
                            <path
                              d="M28 74 L74 62 L120 48 L168 34 L216 20 L216 92 L28 92 Z"
                              fill="url(#heroTealFill)"
                            />
                            {/* 3 Trend Curves */}
                            <path
                              d="M28 74 L74 62 L120 48 L168 34 L216 20"
                              stroke="#2DD4BF"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M28 80 L74 71 L120 60 L168 47 L216 34"
                              stroke="#38BDF8"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            <path
                              d="M28 86 L74 78 L120 69 L168 58 L216 46"
                              stroke="#8B5CF6"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />

                            {/* X-axis dates */}
                            {[
                              { x: 32, label: "Oct 20" },
                              { x: 76, label: "Oct 27" },
                              { x: 120, label: "Nov 3" },
                              { x: 164, label: "Nov 10" },
                              { x: 206, label: "Nov 17" },
                            ].map((tick) => (
                              <text
                                key={tick.label}
                                x={tick.x}
                                y="106"
                                textAnchor="middle"
                                fill="#9CC9CB"
                                fontSize="5.5"
                              >
                                {tick.label}
                              </text>
                            ))}
                          </svg>
                        </div>
                      </div>

                      {/* Top Opportunities */}
                      <div className="flex flex-col justify-between rounded-lg border border-[#4ECDC4]/18 bg-[#0D3940] p-3 sm:col-span-5 sm:pr-8">
                        <h3 className="text-xs font-bold text-white">
                          Top Opportunities
                        </h3>
                        <ul className="mt-2 flex flex-1 flex-col justify-between divide-y divide-[#4ECDC4]/12">
                          {TOP_OPPORTUNITIES.map((item) => (
                            <li
                              key={item}
                              className="flex items-center justify-between gap-1.5 py-2.5 text-[9.5px] text-white"
                            >
                              <span className="flex items-center gap-1.5 truncate">
                                <span className="size-1.5 shrink-0 rounded-full bg-[#2DD4BF]" />
                                <span className="truncate">{item}</span>
                              </span>
                              <span className="text-[#9CC9CB]">›</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MacBook Metallic Base */}
              <div className="-mx-2 sm:-mx-5 flex h-3.5 justify-center rounded-b-2xl bg-gradient-to-b from-[#D5E1E8] to-[#8C9BA3] shadow-[0_18px_32px_rgba(0,0,0,0.45)]">
                <div className="h-1.5 w-28 rounded-b-md bg-[#9BB0BC] sm:w-36" />
              </div>

              {/* Tilted Floating iPhone Mockup */}
              <div className="animate-zq-float pointer-events-auto absolute right-1 bottom-2 hidden h-[244px] w-[130px] rotate-[9.5deg] flex-col items-center justify-start overflow-hidden rounded-[22px] border-[3px] border-[#8CA6B8] bg-gradient-to-b from-[#0E3D43] to-[#061D21] p-2.5 pt-7 shadow-[0_0_36px_rgba(18,240,207,0.22),0_16px_44px_rgba(0,0,0,0.65)] hover:[animation-play-state:paused] sm:flex xl:-right-2">
                <div className="absolute top-2.5 h-3 w-10 rounded-md bg-[#041418]" />

                <div className="flex h-10 w-full items-center justify-center rounded-md bg-white px-2 py-1">
                  <Image
                    src="/images/home/ZoiQuest_Logo 2.png"
                    alt="ZoiQuest"
                    width={107}
                    height={35}
                    className="h-auto max-h-7 w-auto object-contain"
                  />
                </div>

                <div className="mt-3 text-[#2DD4BF]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="10.5"
                      cy="10.5"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    />
                    <path
                      d="M15.5 15.5L20 20"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="mt-2.5 text-center text-[11px] font-bold leading-4 text-white">
                  Your brand
                  <br />
                  in search and
                  <br />
                  AI answers.
                </p>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-6 h-20 w-32 rounded-full bg-[#00C8B8]/35 blur-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Platforms Bar */}
        <div
          style={{ animationDelay: "860ms" }}
          className="animate-zq-fade-up mx-auto mt-10 flex max-w-[1320px] flex-col items-start justify-between gap-6 rounded-3xl border-2 border-[#4ECDC4]/40 bg-[#07262B]/70 px-6 py-5 backdrop-blur-md lg:mt-12 lg:flex-row lg:items-center lg:px-12 lg:py-5"
        >
          <div className="w-full shrink-0 border-b border-[#4ECDC4]/18 pb-4 lg:w-56 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <p className="text-base font-bold leading-6 text-white">
              Track visibility across
              <br />
              the platforms that matter
            </p>
          </div>

          <div className="flex flex-1 flex-wrap items-center justify-between gap-x-8 gap-y-4 lg:pl-6">
            {/* Google */}
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24Z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14Z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96Z"
                />
              </svg>
              <span className="text-lg font-bold text-white sm:text-xl">
                Google
              </span>
            </div>

            {/* ChatGPT */}
            <div className="flex items-center gap-2.5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="text-white"
              >
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
              </svg>
              <span className="text-lg font-bold text-white sm:text-xl">
                ChatGPT
              </span>
            </div>

            {/* Gemini */}
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#FFFFFF"
                  d="M12 2C12 7.52 16.48 12 22 12C16.48 12 12 16.48 12 22C12 16.48 7.52 12 2 12C7.52 12 12 7.52 12 2Z"
                />
              </svg>
              <span className="text-lg font-bold text-white sm:text-xl">
                Gemini
              </span>
            </div>

            {/* Perplexity */}
            <div className="flex items-center gap-2.5">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="text-[#18D6C6]"
              >
                <path
                  d="M12 2V22M4.5 6.5L12 12L19.5 6.5M4.5 17.5L12 12L19.5 17.5M5 4H10L12 7L14 4H19V9.5L16 12L19 14.5V20H14L12 17L10 20H5V14.5L8 12L5 9.5V4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg font-bold text-white sm:text-xl">
                Perplexity
              </span>
            </div>

            {/* Bing */}
            <div className="flex items-center gap-2.5">
              <svg width="24" height="26" viewBox="0 0 24 26" aria-hidden="true">
                <path
                  fill="#258FFA"
                  d="M4 2L9.2 3.8V18.2L16.5 14L13 12.2L10.8 7.8L21 11.4V16.6L9.2 23.4L4 20.5V2Z"
                />
              </svg>
              <span className="text-lg font-bold text-white sm:text-xl">
                Bing
              </span>
            </div>

            {/* and more */}
            <span className="text-lg font-medium text-white/90 sm:text-xl">
              and more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
