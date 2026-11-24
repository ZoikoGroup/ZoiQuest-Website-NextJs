"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Discover",
    description: "Observe search, AI and market signals with clear sampling.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.65" />
        <path d="M13 13L16.5 16.5" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Compare",
    description: "Benchmark brands, competitors and markets over time.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.65" />
        <circle cx="14" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.65" />
        <path d="M8 8L12 12" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Validate",
    description: "Check provenance, coverage and confidence before acting.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.65" />
        <path d="M7 10.2L9 12.2L13.2 8" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Prioritize",
    description: "Rank opportunities by evidence and business relevance.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 14V9M10 14V5M16 14V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Governed activation",
    description:
      "Reversible in ZoiQuest; execution in ZoikoVertex only with a separate grant.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 3L15.5 5.3V9.5C15.5 13 13.1 16 10 17C6.9 16 4.5 13 4.5 9.5V5.3L10 3Z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
        <path d="M8 10L9.5 11.5L12.5 8.5" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const INSIDE_STEPS = [
  {
    num: "1",
    title: "Observe",
    description: "See visibility across search and AI answers in one place.",
  },
  {
    num: "2",
    title: "Explain",
    description:
      "Open the evidence behind any number — source, period and method.",
  },
  {
    num: "3",
    title: "Prioritize",
    description:
      "Rank the next moves by relevance, with uncertainty visible.",
  },
];

const SIDEBAR_ITEMS = [
  "Visibility",
  "Competitors",
  "AI answers",
  "Content",
  "Reports",
];

const PREVIEW_TABS = ["Search", "AI answers", "Content"] as const;

const TAB_DATA: Record<
  (typeof PREVIEW_TABS)[number],
  {
    source: string;
    period: string;
    market: string;
    confidencePct: string;
    linePath: string;
    areaPath: string;
    peaks: Array<{ cx: number; cy: number }>;
  }
> = {
  Search: {
    source: "AI answers",
    period: "30 days",
    market: "United States",
    confidencePct: "70%",
    linePath: "M14 102 L56 76 L98 86 L142 54 L184 65 L228 36 L270 47 L316 20",
    areaPath:
      "M14 102 L56 76 L98 86 L142 54 L184 65 L228 36 L270 47 L316 20 L316 118 L14 118 Z",
    peaks: [
      { cx: 56, cy: 76 },
      { cx: 142, cy: 54 },
      { cx: 228, cy: 36 },
      { cx: 316, cy: 20 },
    ],
  },
  "AI answers": {
    source: "AI citations",
    period: "30 days",
    market: "United States",
    confidencePct: "78%",
    linePath: "M14 108 L56 88 L98 74 L142 82 L184 52 L228 60 L270 32 L316 18",
    areaPath:
      "M14 108 L56 88 L98 74 L142 82 L184 52 L228 60 L270 32 L316 18 L316 118 L14 118 Z",
    peaks: [
      { cx: 98, cy: 74 },
      { cx: 184, cy: 52 },
      { cx: 270, cy: 32 },
      { cx: 316, cy: 18 },
    ],
  },
  Content: {
    source: "Content corpus",
    period: "14 days",
    market: "Global (EN)",
    confidencePct: "84%",
    linePath: "M14 96 L56 70 L98 78 L142 46 L184 55 L228 28 L270 38 L316 14",
    areaPath:
      "M14 96 L56 70 L98 78 L142 46 L184 55 L228 28 L270 38 L316 14 L316 118 L14 118 Z",
    peaks: [
      { cx: 56, cy: 70 },
      { cx: 142, cy: 46 },
      { cx: 228, cy: 28 },
      { cx: 316, cy: 14 },
    ],
  },
};

export default function WorkflowAndPreview() {
  const [activeNav, setActiveNav] = useState("Visibility");
  const [activeTab, setActiveTab] =
    useState<(typeof PREVIEW_TABS)[number]>("Search");
  const tabData = TAB_DATA[activeTab];

  return (
    <div className="w-full">
      {/* Dark How It Works Band */}
      <section
        id="how-it-works"
        className="relative w-full overflow-hidden bg-[#07282C] py-20 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="animate-zq-drift pointer-events-none absolute -right-24 top-0 size-[420px] rounded-full bg-[#00C8B8]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-24">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="text-sm font-semibold leading-6">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#88C9CC]">How it works</span>
              </div>

              <SplitText
                as="h2"
                text="From signal to governed action"
                className="text-3xl font-bold leading-[1.15] text-white sm:text-5xl sm:leading-[58px]"
              />

              <p className="max-w-[798px] text-lg leading-7 text-[#B4D6D8] sm:text-xl sm:leading-8">
                One operating loop takes you from observation to an accountable
                next step — with people in control of material decisions.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
            {WORKFLOW_STEPS.map((step, index) => (
              <Reveal key={step.num} delay={index * 90} className="h-full">
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/13 bg-white/5 p-5 pb-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#00C8B8]/40 hover:bg-white/[0.08]">
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-[#00C8B8]/16 text-[#00C8B8]">
                        {step.icon}
                      </div>
                      <span className="text-xs font-bold leading-5 text-[#00C8B8]">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="mt-4 text-base font-bold leading-5 text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm font-normal leading-5 text-[#B4D6D8]">
                      {step.description}
                    </p>
                  </div>

                  {index < WORKFLOW_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute -right-4 top-1/2 h-0.5 w-4 -translate-y-1/2 overflow-hidden bg-white/20"
                    >
                      <span
                        style={{ animationDelay: `${index * 0.45}s` }}
                        className="animate-zq-signal block h-full w-1/2 bg-[#00C8B8]"
                      />
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Inside The Platform Section */}
      <section className="w-full bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-24">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="text-sm font-semibold leading-6">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0F766E]">Inside the platform</span>
              </div>

              <SplitText
                as="h2"
                text="Observe, explain, then decide"
                className="text-3xl font-bold leading-[1.15] text-[#0C2E30] sm:text-5xl sm:leading-[58px]"
              />

              <p className="max-w-[798px] text-lg leading-7 text-[#466B6F] sm:text-xl sm:leading-8">
                Every view is designed to show its evidence — so you can trust
                what you act on.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
            {/* Browser Mockup */}
            <Reveal className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-[#DCE8E9] bg-white shadow-[0px_24px_60px_0px_rgba(12,46,48,0.12)]">
                <div className="flex items-center gap-2 border-b border-[#DCE8E9] bg-[#07282C] px-4 py-3">
                  <span className="size-2.5 rounded-full bg-[#C4DFDF]/70" />
                  <span className="size-2.5 rounded-full bg-[#C4DFDF]/70" />
                  <span className="size-2.5 rounded-full bg-[#C4DFDF]/70" />
                  <div className="ml-3 rounded-full border border-white/20 bg-white/15 px-3.5 py-0.5 text-xs text-white">
                    app.zoiquest.com / {activeNav.toLowerCase()}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12">
                  <aside className="border-b border-[#DCE8E9] bg-[#F4F8F8] p-4 sm:col-span-3 sm:border-b-0 sm:border-r">
                    <div className="flex items-center gap-2 pb-5">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="shrink-0 text-[#00C8B8]"
                      >
                        <circle
                          cx="7"
                          cy="7"
                          r="4.5"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        />
                        <path
                          d="M10.4 10.4L14 14"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="text-sm font-bold text-[#0C2E30]">
                        ZoiQuest
                      </span>
                    </div>

                    <ul className="flex flex-row flex-wrap gap-1.5 sm:flex-col">
                      {SIDEBAR_ITEMS.map((item) => {
                        const selected = activeNav === item;
                        return (
                          <li key={item}>
                            <button
                              type="button"
                              onClick={() => setActiveNav(item)}
                              className={`flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left text-xs transition-colors ${
                                selected
                                  ? "bg-[#E6F2F1] font-bold text-[#0C2E30]"
                                  : "bg-white font-normal text-[#466B6F] hover:bg-[#E6F2F1]/50"
                              }`}
                            >
                              <span
                                className={`size-2 shrink-0 rounded-full ${
                                  selected ? "bg-[#10535A]" : "bg-[#94B5B8]"
                                }`}
                              />
                              <span>{item}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </aside>

                  <div className="p-5 sm:col-span-9">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-[#0C2E30]">
                        {activeNav} overview
                      </h3>
                      <span className="rounded-full bg-[#E6F2F1] px-3 py-1 text-xs font-bold text-[#10535A]">
                        confidence: med
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {PREVIEW_TABS.map((tab) => {
                        const selected = activeTab === tab;
                        return (
                          <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveTab(tab)}
                            className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-bold transition-colors ${
                              selected
                                ? "border-[#10535A] bg-[#10535A] text-white"
                                : "border-[#DCE8E9] bg-[#F4F8F8] text-[#466B6F] hover:text-[#0C2E30]"
                            }`}
                          >
                            {tab}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-12">
                      <div className="rounded-xl border border-[#DCE8E9] bg-white p-4 md:col-span-7">
                        <p className="text-xs font-normal text-[#466B6F]">
                          Visibility trend
                        </p>
                        <div className="mt-4 h-36 w-full">
                          <svg
                            key={activeTab}
                            viewBox="0 0 336 130"
                            fill="none"
                            className="h-full w-full"
                            aria-label="Visibility trend chart"
                          >
                            <defs>
                              <linearGradient
                                id="zqChartFill"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                              >
                                <stop
                                  offset="0%"
                                  stopColor="#00C8B8"
                                  stopOpacity="0.32"
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#00C8B8"
                                  stopOpacity="0"
                                />
                              </linearGradient>
                            </defs>
                            <path
                              d={tabData.areaPath}
                              fill="url(#zqChartFill)"
                            />
                            <path
                              d={tabData.linePath}
                              stroke="#10535A"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="animate-zq-draw-chart"
                            />
                            {tabData.peaks.map((pt, idx) => (
                              <circle
                                key={`${pt.cx}-${pt.cy}`}
                                cx={pt.cx}
                                cy={pt.cy}
                                r="3.8"
                                fill="#00C8B8"
                                style={{ animationDelay: `${idx * 0.35}s` }}
                                className="animate-zq-pulse-dot"
                              />
                            ))}
                            <line
                              x1="14"
                              y1="118"
                              x2="322"
                              y2="118"
                              stroke="#EAF0F0"
                              strokeWidth="1"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="rounded-xl border border-[#DCE8E9] bg-white p-4 md:col-span-5">
                        <h4 className="text-sm font-bold text-[#0C2E30]">
                          Evidence
                        </h4>
                        <div className="mt-2.5 flex flex-col gap-1.5 text-xs text-[#466B6F]">
                          <div className="rounded-md border border-[#DCE8E9] bg-[#F4F8F8] px-2.5 py-1.5">
                            Source: {tabData.source}
                          </div>
                          <div className="rounded-md border border-[#DCE8E9] bg-[#F4F8F8] px-2.5 py-1.5">
                            Period: {tabData.period}
                          </div>
                          <div className="rounded-md border border-[#DCE8E9] bg-[#F4F8F8] px-2.5 py-1.5">
                            Market: {tabData.market}
                          </div>
                        </div>

                        <p className="mt-3 text-xs text-[#466B6F]">Confidence</p>
                        <div className="mt-1.5 h-2 w-full rounded-full bg-[#EAF0F0]">
                          <div
                            className="h-full rounded-full bg-[#00C8B8] transition-all duration-500"
                            style={{ width: tabData.confidencePct }}
                          />
                        </div>

                        <button
                          type="button"
                          className="mt-3 w-full cursor-pointer rounded-lg bg-[#10535A] py-2 text-center text-xs font-bold text-white transition-colors hover:bg-[#0C3F45]"
                        >
                          View evidence
                        </button>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl border border-[#DCE8E9] bg-[#F4F8F8] p-4 sm:grid-cols-4">
                      {[1, 2, 3, 4].map((slot) => (
                        <div key={slot} className="flex flex-col gap-2">
                          <span className="h-2.5 w-24 rounded-full bg-[#CBE0E0]" />
                          <span className="h-5 w-16 rounded-md border border-[#DCE8E9] bg-white" />
                          <span className="h-2 w-20 rounded-full bg-[#DCE7E7]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6 lg:col-span-4">
              {INSIDE_STEPS.map((item, index) => (
                <Reveal key={item.num} delay={120 + index * 100}>
                  <div className="flex items-start gap-3.5 transition-transform duration-300 hover:translate-x-1">
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#E6F2F1] text-xs font-bold text-[#10535A]">
                      {item.num}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold leading-5 text-[#0C2E30]">
                        {item.title}
                      </h3>
                      <p className="text-sm font-normal leading-6 text-[#466B6F]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
