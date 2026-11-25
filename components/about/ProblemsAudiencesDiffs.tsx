import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";

const PROBLEMS = [
  {
    num: "01",
    title: "Fragmented visibility",
    description:
      "SEO rankings, AI mentions, referrals, content results and market data live in separate tools — so no single defensible picture exists.",
  },
  {
    num: "02",
    title: "Opaque AI answers",
    description:
      "Brands need to understand not just whether they appear in generated answers, but how topics, sources and market context shape it.",
  },
  {
    num: "03",
    title: "Numbers without context",
    description:
      "Scores and charts can hide sampling limits, shifting definitions, model volatility and stale data. Decisions need provenance and confidence.",
  },
  {
    num: "04",
    title: "Insights without execution",
    description:
      "Research often ends in disconnected slides and task lists. Teams need prioritized recommendations they can review, assign and measure.",
  },
  {
    num: "05",
    title: "Global operating complexity",
    description:
      "Languages, countries, search interfaces, entities and teams require controlled comparisons — not claims of universal coverage.",
  },
  {
    num: "06",
    title: "Unclear business value",
    description:
      "Leaders need to relate discoverability to customer journeys and outcomes — without implying correlation proves causation.",
  },
];

const AUDIENCES = [
  {
    title: "SEO, content & growth",
    description:
      "Connect discoverability research, content opportunity, technical quality and performance.",
    image: "/images/about/audience-seo-growth.png",
    icon: "/images/about/icons/audience-1.svg",
  },
  {
    title: "Agencies",
    description:
      "Coordinate research and reporting across clients and authorized workspaces.",
    image: "/images/about/audience-agencies.png",
    icon: "/images/about/icons/audience-2.svg",
  },
  {
    title: "Global enterprises",
    description:
      "Assess multiple brands, regions and languages with access controls and comparable methodology.",
    image: "/images/about/audience-enterprises.png",
    icon: "/images/about/icons/audience-3.svg",
  },
  {
    title: "Leadership teams",
    description:
      "Translate fragmented metrics into understandable opportunities, risks and decisions.",
    image: "/images/about/audience-leadership.png",
    icon: "/images/about/icons/audience-4.svg",
  },
];

const DIFFERENTIATORS = [
  {
    icon: "/images/about/icons/diff-1.svg",
    title: "A connected intelligence model",
    description:
      "Designed to connect SEO, AEO, GEO, AI visibility, site health, authority, content, competitors and market trends around real decisions.",
  },
  {
    icon: "/images/about/icons/diff-2.svg",
    title: "Evidence you can examine",
    description:
      "Designed to show source family, period, market, method, limitations and confidence wherever the data supports them.",
  },
  {
    icon: "/images/about/icons/diff-3.svg",
    title: "Global context, not guesswork",
    description:
      "Built around separate country, language, surface, entity and workspace dimensions, with coverage disclosed rather than implied.",
  },
  {
    icon: "/images/about/icons/diff-4.svg",
    title: "Human-governed AI",
    description:
      "Automated analysis supports human decisions; higher-risk actions require approvals, policy checks, audit trails and reversibility.",
  },
  {
    icon: "/images/about/icons/diff-5.svg",
    title: "Linked to responsible action",
    description:
      "A complete intelligence subscription on its own; optional governed integration with ZoikoVertex coordinates action when authorized.",
  },
  {
    icon: "/images/about/icons/diff-6.svg",
    title: "Independence by design",
    description:
      "Separate subscriptions, economics, data ownership and tenant boundaries — connected through documented APIs, not hidden coupling.",
  },
];

export default function ProblemsAudiencesDiffs() {
  return (
    <div className="w-full">
      {/* 5. Section - E / PROBLEMS */}
      <section className="w-full bg-white py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold leading-[22.4px]">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0A6B66]">Why we exist</span>
              </p>

              <SplitText
                as="h2"
                text="The problems we're here to solve"
                className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
              />

              <p className="max-w-[798px] text-lg font-normal leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                Six gaps make discovery hard to measure and act on with
                confidence.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-y-12">
            {PROBLEMS.map((item, index) => (
              <Reveal key={item.num} delay={index * 70}>
                <div className="flex flex-col gap-3 p-1">
                  <span className="text-sm font-bold leading-[22.4px] text-[#00C8B8]">
                    {item.num}
                  </span>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <h3 className="text-[20px] font-bold leading-[21.5px] tracking-[-0.018em] text-[#0C2E30]">
                      {item.title}
                    </h3>
                    <p className="text-[17px] font-normal leading-[27.2px] text-[#284648]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Section - H / AUDIENCES */}
      <section className="w-full bg-white py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold leading-[22.4px]">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0A6B66]">Who we serve</span>
              </p>

              <SplitText
                as="h2"
                text="Built for organizations at every scale"
                className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {AUDIENCES.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#DCE8E8] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(12,46,48,0.08)]">
                  <div className="relative h-[235px] w-full overflow-hidden bg-[#F4F8F8]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 294px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-3.5 left-3.5 flex size-11 items-center justify-center rounded-xl bg-white shadow-[0_6px_12px_rgba(12,46,48,0.14)]">
                      <Image
                        src={item.icon}
                        alt=""
                        width={21}
                        height={21}
                        unoptimized
                        className="h-auto max-h-[21px] w-auto max-w-[21px] object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3.5 px-[22px] pb-9 pt-[30px]">
                    <h3 className="text-[19px] font-bold leading-[20.52px] tracking-[-0.018em] text-[#0C2E30]">
                      {item.title}
                    </h3>
                    <p className="text-[15px] font-normal leading-[23.25px] text-[#51696B]">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section - F / DIFFERENTIATORS */}
      <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold leading-[22.4px]">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0A6B66]">Our approach</span>
              </p>

              <SplitText
                as="h2"
                text="What makes ZoiQuest different"
                className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
              />

              <p className="max-w-[798px] text-lg font-normal leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                A set of product-design commitments — not a claim that others
                lack these capabilities. Each is subject to engineering
                verification and licensed, high-quality data.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {DIFFERENTIATORS.map((item, index) => (
              <Reveal key={item.title} delay={index * 75}>
                <div className="flex flex-col items-start">
                  <div className="flex size-5 items-center justify-center">
                    <Image
                      src={item.icon}
                      alt=""
                      width={17}
                      height={17}
                      unoptimized
                      className="h-auto max-h-[17px] w-auto max-w-[17px] object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-[20px] font-bold leading-[21.5px] tracking-[-0.018em] text-[#0C2E30]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[17px] font-normal leading-[27.2px] text-[#284648]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
