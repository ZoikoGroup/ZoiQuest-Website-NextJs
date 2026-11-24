"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

const LEARN_DISCIPLINES = [
  {
    tag: "SEO",
    title: "Search engine optimization",
    description:
      "Rankings, keywords, links and site health — the foundations of classic search.",
    href: "#seo-fundamentals",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="5.25" stroke="currentColor" strokeWidth="1.65" />
        <path d="M13 13L16.5 16.5" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: "AEO",
    title: "Answer engine optimization",
    description:
      "How questions, sources and context shape whether you appear in generated answers.",
    href: "#aeo-guide",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M4 5.5C4 4.67 4.67 4 5.5 4H14.5C15.33 4 16 4.67 16 5.5V12C16 12.83 15.33 13.5 14.5 13.5H8L4.5 16.5V5.5Z"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    tag: "GEO",
    title: "Generative engine optimization",
    description:
      "Evidence-led discoverability across generative engines — never guaranteed.",
    href: "#geo-guide",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M10 3L11.7 7.3L16 9L11.7 10.7L10 15L8.3 10.7L4 9L8.3 7.3L10 3Z"
          stroke="currentColor"
          strokeWidth="1.65"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const GUIDE_CARDS = [
  {
    tag: "SEO",
    title: "SEO fundamentals",
    description:
      "How classic search visibility works, and where it still matters most.",
    image: "/images/home/SEO fundamentals.png",
    href: "#seo-fundamentals",
  },
  {
    tag: "AEO",
    title: "The AEO guide",
    description:
      "How answer engines pick sources — and how to understand your presence.",
    image: "/images/home/Answer engine optimization.png",
    href: "#aeo-guide",
  },
  {
    tag: "GEO",
    title: "The GEO guide",
    description:
      "Evidence-led discoverability across generative engines, explained.",
    image: "/images/home/Generative engine optimization.png",
    href: "#geo-guide",
  },
];

const PLANS = [
  {
    title: "Growing teams",
    description:
      "Connect discoverability research, content opportunity and performance in one place.",
    note: "Entry tier shown when an approved plan is live.",
    cta: "View plans",
    featured: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="8" cy="7.5" r="2.75" stroke="currentColor" strokeWidth="1.75" />
        <path d="M3 16C3 13.7 5.2 12 8 12C10.8 12 13 13.7 13 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M14 7.5H17M15.5 6V9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Agencies",
    description:
      "Manage multiple clients with workspace isolation, roles and client-ready reporting.",
    note: "White-label and quotas subject to approved SKU.",
    cta: "Compare plans",
    featured: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="7.5" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="13.25" cy="7.75" r="2.1" stroke="currentColor" strokeWidth="1.75" />
        <path d="M3 16C3 13.7 5 12 7.5 12C10 12 12 13.7 12 16M12.5 12.2C14.8 12.4 16.5 13.9 16.5 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Enterprise",
    description:
      "Multi-entity governance, security review, data residency and custom contracting.",
    note: "SLA and residency conditional on signed offering.",
    cta: "Contact sales",
    featured: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 7H12M8 10.5H12M8 14H12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
];

const COMMITMENTS = [
  {
    title: "Evidence over hype",
    description:
      'Specific claims, plain language, and "designed to" where something is still being built.',
    highlighted: false,
  },
  {
    title: "Clarity over jargon",
    description:
      "We name things the way you do — what a thing is before we sell it.",
    highlighted: true,
  },
  {
    title: "Global by design",
    description:
      "Markets, languages and surfaces handled as separate, disclosed dimensions.",
    highlighted: false,
  },
  {
    title: "Governed by default",
    description:
      "People stay in control of material decisions; actions are reversible.",
    highlighted: false,
  },
];

const FAQ_ITEMS = [
  {
    question: "What is ZoiQuest?",
    answer:
      "ZoiQuest is a planned global platform for SEO, answer-engine optimization (AEO), generative-engine optimization (GEO), AI-search visibility and competitive and market intelligence. It's designed to connect discovery signals, show the evidence behind them and help you decide what to do next.",
  },
  {
    question: "How is it different from a traditional SEO tool?",
    answer:
      "Traditional SEO tools focus primarily on classic keyword rankings and backlink counts. ZoiQuest connects search demand, AI answer mentions and citations, competitive benchmarking, and site health in one evidence-led model — with provenance, freshness, and confidence shown on every observation.",
  },
  {
    question: "What are AEO and GEO?",
    answer:
      "Answer Engine Optimization (AEO) focuses on how questions, entities, and sources shape whether your brand appears in direct answers. Generative Engine Optimization (GEO) looks at discoverability across AI-generated summaries and citations, grounded in verifiable evidence rather than guarantees.",
  },
  {
    question: "Does ZoiQuest guarantee higher rankings or AI citations?",
    answer:
      "No. Neither ZoiQuest nor any credible discovery platform can guarantee specific rankings or AI citations. ZoiQuest is designed to surface verifiable gaps, source provenance, and prioritized opportunities so your team can make defensible content and technical decisions.",
  },
  {
    question: "Is ZoiQuest available globally?",
    answer:
      "Yes — market, language, search surface, and geography are treated as separate, disclosed dimensions. Coverage is explicitly documented per service and release so global teams never have to guess what data applies where.",
  },
  {
    question: "Is ZoiQuest the same as ZoikoVertex?",
    answer:
      "No. ZoiQuest is the discovery and visibility intelligence platform, while ZoikoVertex is a separate Zoiko product. Any handoff between them uses explicit consent and separate entitlements — never bundled access.",
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

function ChevronDownIcon({ rotated }: { rotated: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-[#466B6F] transition-transform duration-200 ${
        rotated ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LearnPlansAndFaq() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="w-full">
      {/* SEO, AEO and GEO */}
      <section className="w-full bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-24">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="text-sm font-semibold leading-6">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0F766E]">Learn</span>
              </div>
              <SplitText
                as="h2"
                text="SEO, AEO and GEO — explained plainly"
                className="text-3xl font-bold leading-tight text-[#0C2E30] sm:text-5xl sm:leading-[48px]"
              />
              <p className="max-w-[798px] text-lg leading-7 text-[#466B6F] sm:text-xl sm:leading-8">
                Discovery now spans ranked results and AI answers. ZoiQuest is
                designed to connect all three.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16">
            {LEARN_DISCIPLINES.map((item, index) => (
              <Reveal key={item.tag} delay={index * 100} className="h-full">
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-[#DCE8E9] bg-white px-6 pb-6 pt-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div>
                    <span className="text-xs font-bold leading-5 tracking-wide text-[#00C8B8]">
                      {item.tag}
                    </span>
                    <div className="mt-2 flex items-center gap-2 text-[#0C2E30]">
                      <span className="shrink-0">{item.icon}</span>
                      <h3 className="text-xl font-bold leading-6">{item.title}</h3>
                    </div>
                    <p className="mt-2.5 text-base font-normal leading-6 text-[#466B6F]">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-base font-semibold leading-7 text-[#0F766E] transition-colors hover:text-[#10535A]"
                  >
                    <span>Read the guide</span>
                    <ArrowRightIcon />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guides, Glossary & Research */}
      <section className="w-full bg-[#F4F8F8] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-24">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="text-sm font-semibold leading-6">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0F766E]">Learn</span>
              </div>
              <SplitText
                as="h2"
                text="Guides, glossary & research"
                className="text-3xl font-bold leading-tight text-[#0C2E30] sm:text-5xl sm:leading-[48px]"
              />
              <p className="max-w-[798px] text-lg leading-7 text-[#466B6F] sm:text-xl sm:leading-8">
                Original, dated and attributed — written to teach, not to chase
                keywords.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16">
            {GUIDE_CARDS.map((card, index) => (
              <Reveal key={card.title} delay={index * 100} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#DCE8E9] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_12px_32px_0px_rgba(12,46,48,0.08)]">
                  <div className="relative h-48 w-full overflow-hidden bg-[#F4F8F8]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3.5 top-3.5 rounded-full bg-[#0C2E30]/82 px-2.5 py-1 text-xs font-bold leading-4 tracking-wide text-white">
                      {card.tag}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="text-lg font-bold leading-5 text-[#0C2E30]">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm font-normal leading-6 text-[#466B6F]">
                        {card.description}
                      </p>
                    </div>

                    <Link
                      href={card.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-base font-semibold leading-7 text-[#0F766E] transition-colors hover:text-[#10535A]"
                    >
                      <span>Read the guide</span>
                      <ArrowRightIcon />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plans & Adoption */}
      <section id="pricing" className="w-full bg-[#F4F8F8] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-24">
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="text-sm font-semibold leading-6">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0F766E]">Plans &amp; adoption</span>
              </div>
              <SplitText
                as="h2"
                text="A plan for every stage"
                className="text-3xl font-bold leading-tight text-[#0C2E30] sm:text-5xl sm:leading-[48px]"
              />
              <p className="max-w-[798px] text-lg leading-7 text-[#466B6F] sm:text-xl sm:leading-8">
                Independent subscriptions with clear entitlements. Pricing is
                confirmed at release — we don&apos;t show placeholder numbers.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 lg:mt-16">
            {PLANS.map((plan, index) => (
              <Reveal key={plan.title} delay={index * 100} className="h-full">
                <div
                  className={`flex h-full flex-col justify-between rounded-2xl bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                    plan.featured
                      ? "border border-[#10535A] shadow-[0px_16px_40px_0px_rgba(12,46,48,0.08)]"
                      : "border border-[#DCE8E9] hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-[#E6F2F1] text-[#10535A]">
                      {plan.icon}
                    </div>
                    <h3 className="mt-5 text-xl font-bold leading-6 text-[#0C2E30]">
                      {plan.title}
                    </h3>
                    <p className="mt-2.5 text-base font-normal leading-6 text-[#466B6F]">
                      {plan.description}
                    </p>
                    <p className="mt-3 text-xs font-normal leading-5 text-[#466B6F]">
                      {plan.note}
                    </p>
                  </div>

                  <Link
                    href="#book-demo"
                    className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold leading-6 transition-colors ${
                      plan.featured
                        ? "bg-[#10535A] text-white hover:bg-[#0C3F45]"
                        : "border border-[#DCE8E9] bg-white text-[#0C2E30] hover:bg-[#F4F8F8]"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="w-full bg-[#F4F8F8] pb-24 pt-12 lg:pb-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-24">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="text-sm font-semibold leading-6">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0F766E]">What we stand for</span>
              </div>
              <SplitText
                as="h2"
                text="Four commitments behind every screen"
                className="text-3xl font-bold leading-tight text-[#0C2E30] sm:text-5xl sm:leading-[48px]"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {COMMITMENTS.map((item, index) => (
              <Reveal key={item.title} delay={index * 90} className="h-full">
                <div
                  className={`flex h-full flex-col gap-2 rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    item.highlighted
                      ? "border-[#10535A] bg-[#10535A]"
                      : "border-[#DCE8E9] bg-white"
                  }`}
                >
                  <span className="text-2xl font-normal leading-6 text-[#00C8B8]">
                    “
                  </span>
                  <h3
                    className={`pt-1 text-lg font-bold leading-5 ${
                      item.highlighted ? "text-white" : "text-[#0C2E30]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm font-normal leading-6 ${
                      item.highlighted ? "text-[#B4D6D8]" : "text-[#466B6F]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="w-full bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <div className="flex flex-col items-start gap-8">
                <div className="flex flex-col gap-4">
                  <div className="text-sm font-semibold leading-6">
                    <span className="text-[#00C8B8]">/ </span>
                    <span className="text-[#0F766E]">Stay updated</span>
                  </div>
                  <SplitText
                    as="h2"
                    text="Stay informed on search & AI visibility"
                    className="text-3xl font-bold leading-[1.15] text-[#0C2E30] sm:text-5xl sm:leading-[54px]"
                  />
                  <p className="text-base font-normal leading-6 text-[#466B6F]">
                    Original, dated guides and research on SEO, AEO and GEO — no
                    hype, no spam.
                  </p>
                </div>

                <div className="w-full max-w-[460px]">
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col gap-2.5 sm:flex-row"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (subscribed) setSubscribed(false);
                      }}
                      placeholder="Enter your email address"
                      aria-label="Email address"
                      className="h-14 flex-1 rounded-full border border-[#DCE8E9] bg-white px-5 text-base text-[#0C2E30] placeholder:text-[#757575] outline-none transition-colors focus:border-[#10535A]"
                    />
                    <button
                      type="submit"
                      className="h-14 cursor-pointer rounded-full bg-[#10535A] px-6 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0C3F45]"
                    >
                      Subscribe
                    </button>
                  </form>

                  <p className="mt-2.5 text-xs font-normal leading-5 text-[#466B6F]">
                    {subscribed
                      ? "Thank you — your email preference has been recorded."
                      : "Marketing consent is optional and separate. We don't add you silently."}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6">
              <div className="group relative h-72 overflow-hidden rounded-2xl sm:h-96">
                <Image
                  src="/images/home/Global search and discovery insights.png"
                  alt="Global search and discovery insights"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Get Started Banner */}
      <section
        id="book-demo"
        className="w-full bg-white px-3 py-8 sm:px-6 lg:py-12"
      >
        <Reveal>
          <div className="group relative mx-auto flex min-h-[460px] max-w-[1417px] items-center justify-center overflow-hidden rounded-[40px] lg:min-h-[560px] lg:rounded-[80px]">
            <Image
              src="/images/home/Image+Background.png"
              alt="Team reviewing discovery analytics"
              fill
              sizes="100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-[#07282C]/95 to-[#07282C]/65"
            />

            <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center sm:px-16 lg:py-20">
              <div className="text-sm font-semibold leading-6">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#88C9CC]">Get started</span>
              </div>

              <SplitText
                as="h2"
                text="Ready to understand what drives discovery?"
                className="mt-4 max-w-[525px] text-3xl font-bold leading-[1.15] text-white sm:text-5xl sm:leading-[54px]"
              />

              <p className="mt-4 max-w-[542px] text-base font-normal leading-7 text-[#CDE3E5]">
                See the signals behind search and AI answers, with the evidence
                to act on them.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
                <Link
                  href="#platform"
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-[#00C8B8] px-6 py-3.5 text-base font-semibold leading-6 text-[#082F34] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19DBC9]"
                >
                  <span>Explore the platform</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  >
                    <path
                      d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/12 px-6 py-3.5 text-base font-semibold leading-6 text-white backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-24">
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="text-sm font-semibold leading-6">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0F766E]">
                  Questions, answered plainly
                </span>
              </div>
              <SplitText
                as="h2"
                text="Frequently asked"
                className="text-3xl font-bold leading-tight text-[#0C2E30] sm:text-5xl sm:leading-[48px]"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-[860px] lg:mt-16">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={item.question}
                    className="border-b border-[#DCE8E9]"
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 text-left transition-colors hover:text-[#10535A]"
                    >
                      <span className="text-lg font-semibold leading-7 text-[#0C2E30]">
                        {item.question}
                      </span>
                      <ChevronDownIcon rotated={isOpen} />
                    </button>

                    {isOpen && (
                      <div className="max-w-[766px] px-1 pb-5 text-base font-normal leading-6 text-[#466B6F]">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
