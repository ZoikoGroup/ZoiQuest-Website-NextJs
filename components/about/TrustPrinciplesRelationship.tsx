import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText } from "@/components/home";

const TRUST_BULLETS = [
  {
    icon: "/images/about/icons/trust-1.svg",
    text: "Source family, collection period and market on each observation.",
  },
  {
    icon: "/images/about/icons/trust-2.svg",
    text: "Coverage and freshness disclosed, not implied.",
  },
  {
    icon: "/images/about/icons/trust-3.svg",
    text: "Confidence levels and limitations shown with results.",
  },
];

const PRINCIPLES = [
  {
    title: "Clarity over jargon",
    description:
      "Explain what the data means before asking anyone to act on it.",
  },
  {
    title: "Evidence over hype",
    description:
      "Separate observed results, estimates, model outputs and assumptions.",
  },
  {
    title: "Responsibility over automation",
    description: "People retain oversight of material decisions.",
  },
  {
    title: "Global ambition, local accuracy",
    description:
      "Disclose exactly which markets, languages and sources are covered.",
  },
  {
    title: "Privacy & ownership by design",
    description: "Protect tenant data and respect permitted data uses.",
  },
  {
    title: "Progress that can be tested",
    description:
      "Benchmark outcomes and acknowledge where evidence is incomplete.",
  },
];

const ZOIQUEST_ITEMS = [
  "What is happening, where, and what might explain it",
  "Evidence, provenance and confidence on the signals",
  "Which opportunities warrant attention",
];

const ZOIKOVERTEX_ITEMS = [
  "Separate, governed marketing planning and execution",
  "Explicit consent, separate entitlements, policy gates",
  "Distinct subscriptions, permissions and data boundaries",
];

export default function TrustPrinciplesRelationship() {
  return (
    <div className="w-full">
      {/* 10. Section - DATA & TRUST TEASER */}
      <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="relative h-[320px] w-full overflow-hidden rounded-[18px] sm:h-[400px] lg:h-[444px]">
                <Image
                  src="/images/about/data-trust-evidence.png"
                  alt="Evidence, provenance and security architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 592px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col items-start gap-4">
                <p className="text-sm font-semibold leading-[22.4px]">
                  <span className="text-[#00C8B8]">/ </span>
                  <span className="text-[#0A6B66]">Data &amp; Trust</span>
                </p>

                <SplitText
                  as="h2"
                  text="See the evidence behind every signal"
                  className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
                />

                <p className="text-lg font-normal leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                  Trust isn&apos;t a badge. ZoiQuest is designed to make its
                  methods examinable — so you can defend what you decide.
                </p>

                <ul className="flex flex-col gap-3.5 py-2">
                  {TRUST_BULLETS.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center">
                        <Image
                          src={item.icon}
                          alt=""
                          width={20}
                          height={20}
                          unoptimized
                          className="h-auto max-h-5 w-auto max-w-5 object-contain"
                        />
                      </span>
                      <span className="text-[15.5px] font-normal leading-[24.8px] text-[#284648]">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#data-methodology"
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#DCE8E8] bg-white px-6 py-3.5 text-base font-semibold leading-[25.6px] text-[#0C2E30] transition-colors hover:border-[#00C8B8]"
                >
                  <span>Review Data &amp; Trust</span>
                  <span className="flex size-[18px] shrink-0 items-center justify-center">
                    <Image
                      src="/images/about/icons/arrow-outline-dark.svg"
                      alt=""
                      width={18}
                      height={18}
                      unoptimized
                      className="h-auto max-h-full w-auto max-w-full object-contain"
                    />
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 11. Section - I / PRINCIPLES */}
      <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold leading-[22.4px]">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0A6B66]">What we stand for</span>
              </p>

              <SplitText
                as="h2"
                text="Our principles"
                className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {PRINCIPLES.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center">
                    <Image
                      src="/images/about/icons/principle-check.svg"
                      alt=""
                      width={20}
                      height={20}
                      unoptimized
                      className="h-auto max-h-5 w-auto max-w-5 object-contain"
                    />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-bold leading-[17.28px] tracking-[-0.018em] text-[#0C2E30]">
                      {item.title}
                    </h3>
                    <p className="text-[14.5px] font-normal leading-[23.2px] text-[#51696B]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Section - J / PRODUCT RELATIONSHIP */}
      <section className="w-full bg-white py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold leading-[22.4px]">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0A6B66]">
                  Two products, clearly separate
                </span>
              </p>

              <SplitText
                as="h2"
                text="ZoiQuest & ZoikoVertex"
                className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
              />

              <p className="max-w-[798px] text-lg font-normal leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                Purpose-built and separately accountable. Adopt ZoiQuest on its
                own, and choose whether to authorize cross-product workflows.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-[18px] border border-[#DCE8E8] lg:mt-16 lg:grid-cols-[1fr_44px_1fr]">
              {/* Left: ZoiQuest */}
              <div className="flex flex-col gap-4 bg-white p-8 sm:p-9">
                <p className="text-[13px] font-semibold leading-[20.8px] text-[#0A6B66]">
                  ZoiQuest · Intelligence
                </p>
                <h3 className="text-[20px] font-bold leading-[21.6px] tracking-[-0.018em] text-[#0C2E30]">
                  Understand discovery
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {ZOIQUEST_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 flex size-[15px] shrink-0 items-center justify-center">
                        <Image
                          src="/images/about/icons/relationship-check.svg"
                          alt=""
                          width={15}
                          height={15}
                          unoptimized
                          className="h-auto max-h-[15px] w-auto max-w-[15px] object-contain"
                        />
                      </span>
                      <span className="text-[15px] font-normal leading-6 text-[#284648]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Center Governed Boundary */}
              <div className="flex items-center justify-center bg-[#10535A] py-3 lg:py-8">
                <span className="whitespace-nowrap text-xs font-semibold uppercase leading-[19.2px] tracking-[1.44px] text-[#8FE0D6] lg:[writing-mode:vertical-rl] lg:rotate-180">
                  Governed boundary
                </span>
              </div>

              {/* Right: ZoikoVertex */}
              <div className="flex flex-col gap-4 bg-[#F4F8F8] p-8 sm:p-9">
                <p className="text-[13px] font-semibold leading-[20.8px] text-[#0A6B66]">
                  ZoikoVertex · Execution
                </p>
                <h3 className="text-[20px] font-bold leading-[21.6px] tracking-[-0.018em] text-[#0C2E30]">
                  Coordinate action
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {ZOIKOVERTEX_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1 flex size-[15px] shrink-0 items-center justify-center">
                        <Image
                          src="/images/about/icons/relationship-check.svg"
                          alt=""
                          width={15}
                          height={15}
                          unoptimized
                          className="h-auto max-h-[15px] w-auto max-w-[15px] object-contain"
                        />
                      </span>
                      <span className="text-[15px] font-normal leading-6 text-[#284648]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
