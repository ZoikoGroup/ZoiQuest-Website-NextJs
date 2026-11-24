import Image from "next/image";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

const WHY_CARDS = [
  {
    title: "Evidence-led",
    description:
      "Every signal carries its source, date, coverage and confidence.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3L19 6V11.5C19 16 15.9 19.9 12 21C8.1 19.9 5 16 5 11.5V6L12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 12L11.2 13.7L14.8 10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Connected signals",
    description: "Search and AI answers in one model, not separate tools.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="2.75" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="18" cy="18" r="2.75" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8.2 8.2L15.8 15.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Global context",
    description:
      "Market, language and surface as distinct, disclosed dimensions.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
        <ellipse cx="12" cy="12" rx="3.75" ry="8.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M4 9.5H20M4 14.5H20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Governed actions",
    description:
      "Reversible in ZoiQuest; execution only with a separate grant.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="10.5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8.5 10.5V7.5C8.5 5.57 10.07 4 12 4C13.93 4 15.5 5.57 15.5 7.5V10.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const GLOBAL_BULLETS = [
  {
    text: "Separate market, language and search-surface controls.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.65" />
        <ellipse cx="10" cy="10" rx="3.2" ry="7.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.5 10H16.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    text: "Coverage disclosed per service and release — never assumed universal.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2.75C6.8 2.75 4.25 5.3 4.25 8.5C4.25 12.75 10 17.5 10 17.5C10 17.5 15.75 12.75 15.75 8.5C15.75 5.3 13.2 2.75 10 2.75Z" stroke="currentColor" strokeWidth="1.65" />
        <circle cx="10" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.65" />
      </svg>
    ),
  },
  {
    text: "Localized pages only where genuinely translated and reviewed.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.65" />
        <path d="M7.25 10.25L9.15 12.15L13 8" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const INTEGRATIONS = [
  {
    title: "REST API & SDKs",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M7 6L3 10L7 14M13 6L17 10L13 14" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Webhooks & events",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="6" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.65" />
        <circle cx="14" cy="10" r="2" stroke="currentColor" strokeWidth="1.65" />
        <circle cx="6" cy="14.5" r="2" stroke="currentColor" strokeWidth="1.65" />
        <path d="M8 6.5L12.2 8.9M12.2 11.1L8 13.5" stroke="currentColor" strokeWidth="1.65" />
      </svg>
    ),
  },
  {
    title: "Analytics platforms",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 15V10M9.5 15V5.5M15 15V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Search consoles",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="5.25" stroke="currentColor" strokeWidth="1.65" />
        <path d="M13 13L16.5 16.5" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "CMS & content tools",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3.5" y="4" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.65" />
        <path d="M7 8.5H13M7 11.5H11" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Governed ZoikoVertex handoff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="2.25" stroke="currentColor" strokeWidth="1.65" />
        <circle cx="14" cy="14" r="2.25" stroke="currentColor" strokeWidth="1.65" />
        <path d="M7.75 7.75L12.25 12.25" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function TrustGlobalIntegrations() {
  return (
    <div className="w-full">
      {/* Why ZoiQuest */}
      <section className="w-full bg-[#F4F8F8] py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-24">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="text-sm font-semibold leading-6">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0F766E]">Why ZoiQuest</span>
              </div>
              <SplitText
                as="h2"
                text="Intelligence you can trust. Decisions you can defend."
                className="max-w-[849px] text-3xl font-bold leading-[1.15] text-[#0C2E30] sm:text-5xl sm:leading-[54px]"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {WHY_CARDS.map((card, index) => (
              <Reveal key={card.title} delay={index * 90}>
                <div className="group flex flex-col items-start gap-2">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[#E6F2F1] text-[#10535A] transition-transform duration-300 group-hover:scale-105">
                    {card.icon}
                  </div>
                  <h3 className="pt-2 text-base font-bold leading-5 text-[#0C2E30]">
                    {card.title}
                  </h3>
                  <p className="text-sm font-normal leading-6 text-[#466B6F]">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built For Global Teams */}
      <section className="w-full bg-[#F4F8F8] pb-20 pt-8 lg:pb-28 lg:pt-12">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-6">
              <div className="group relative h-72 overflow-hidden rounded-2xl sm:h-96">
                <Image
                  src="/images/home/Global markets and languages.png"
                  alt="Global markets and languages"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6">
              <div className="flex flex-col items-start gap-8">
                <div className="flex flex-col gap-4">
                  <div className="text-sm font-semibold leading-6">
                    <span className="text-[#00C8B8]">/ </span>
                    <span className="text-[#0F766E]">Built for global teams</span>
                  </div>
                  <SplitText
                    as="h2"
                    text="Global context, not global guesswork"
                    className="text-3xl font-bold leading-[1.15] text-[#0C2E30] sm:text-5xl sm:leading-[54px]"
                  />
                  <p className="text-base font-normal leading-6 text-[#466B6F]">
                    Country, language, search surface and geography are separate
                    dimensions — so an analyst in France can study a
                    Japanese-market site without conflating the two.
                  </p>
                </div>

                <ul className="flex flex-col gap-4">
                  {GLOBAL_BULLETS.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-[#00C8B8]">
                        {item.icon}
                      </span>
                      <span className="text-base font-normal leading-6 text-[#165258]">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Connect Your Stack / Integrations & APIs */}
      <section className="w-full bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-24">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="text-sm font-semibold leading-6">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0F766E]">Connect your stack</span>
              </div>
              <SplitText
                as="h2"
                text="Integrations & APIs"
                className="text-3xl font-bold leading-tight text-[#0C2E30] sm:text-5xl sm:leading-[48px]"
              />
              <p className="max-w-[798px] text-lg leading-7 text-[#466B6F] sm:text-xl sm:leading-8">
                Bring ZoiQuest into the tools you already use. Available
                connectors depend on release and entitlements.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {INTEGRATIONS.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="group flex h-20 items-center gap-3 rounded-xl border border-[#DCE8E9] bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#10535A]/40 hover:shadow-md">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-[10px] bg-[#E6F2F1] text-[#10535A] transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                  <span className="text-base font-semibold leading-6 text-[#0C2E30]">
                    {item.title}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-5 text-sm font-normal leading-5 text-[#466B6F]">
              ZoikoVertex is a separate Zoiko product. Linking it uses explicit
              consent and separate entitlements — never bundled access.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
