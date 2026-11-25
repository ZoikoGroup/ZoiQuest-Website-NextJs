"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal, SplitText } from "@/components/home";

const ABOUT_FAQS = [
  {
    question: "What is ZoiQuest?",
    answer:
      "A planned global platform for SEO, answer-engine optimization (AEO), generative-engine optimization (GEO), AI search visibility, and competitive and market intelligence. It's designed to help you connect discovery signals, evaluate evidence and decide what to do next.",
  },
  {
    question: "How is it different from a traditional SEO tool?",
    answer:
      "Traditional tools focus primarily on rankings and keywords in isolation. ZoiQuest connects search signals with AI answer visibility, entity and source provenance, competitive context and governed prioritization — while showing sampling limits and confidence alongside every view.",
  },
  {
    question: "Does ZoiQuest guarantee higher rankings or AI citations?",
    answer:
      "No. Search engines and AI answer systems are independent third-party platforms whose ranking and generation behavior changes continuously. ZoiQuest helps you observe accurately, understand drivers with verifiable evidence, and make stronger, testable decisions.",
  },
  {
    question: "Is ZoiQuest available globally?",
    answer:
      "ZoiQuest is designed around separate country, language, search surface and workspace dimensions so global teams can compare markets cleanly. Exact country, language and source coverage is always disclosed rather than implied.",
  },
  {
    question: "Is ZoiQuest the same product as ZoikoVertex?",
    answer:
      "No. ZoiQuest and ZoikoVertex are separate products within the Zoiko Group with distinct subscriptions, tenant boundaries and data ownership. Organizations can adopt ZoiQuest entirely on its own, or authorize optional governed API workflows with ZoikoVertex.",
  },
];

export default function FutureCareersFaqCta() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="w-full">
      {/* 13. Section - LOOKING AHEAD */}
      <section className="w-full bg-white py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold leading-[22.4px]">
                  <span className="text-[#00C8B8]">/ </span>
                  <span className="text-[#0A6B66]">Looking ahead</span>
                </p>

                <SplitText
                  as="h2"
                  text="Built for how discovery keeps changing"
                  className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
                />

                <p className="text-lg font-normal leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                  The future of discovery won&apos;t be defined by one engine or
                  one metric. New interfaces will emerge and sources will
                  change.
                </p>

                <p className="text-[15px] font-normal leading-6 text-[#51696B]">
                  ZoiQuest is being developed for that moving environment —
                  broad enough to connect disciplines, disciplined enough to
                  explain its evidence, and flexible enough to evolve as
                  discovery changes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative h-[360px] w-full overflow-hidden rounded-[18px] sm:h-[460px] lg:h-[519px]">
                <Image
                  src="/images/about/looking-ahead-cube.png"
                  alt="The changing landscape of search and AI discovery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 592px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 14. Section - CAREERS */}
      <section id="careers" className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="relative h-[320px] w-full overflow-hidden rounded-[18px] sm:h-[400px] lg:h-[444px]">
                <Image
                  src="/images/about/careers-building.png"
                  alt="Building ZoiQuest together"
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
                  <span className="text-[#0A6B66]">Join us</span>
                </p>

                <SplitText
                  as="h2"
                  text="Build ZoiQuest with us"
                  className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
                />

                <p className="text-lg font-normal leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                  ZoiQuest is being built, and the team is growing. If you care
                  about evidence-led products and honest measurement, we&apos;d
                  like to meet you.
                </p>

                <p className="text-sm font-normal leading-[22.4px] text-[#51696B]">
                  Open roles are posted as teams form — we don&apos;t list
                  positions we aren&apos;t genuinely hiring for.
                </p>

                <Link
                  href="#careers"
                  className="mt-2 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#DCE8E8] bg-white px-6 py-3.5 text-base font-semibold leading-[25.6px] text-[#0C2E30] transition-colors hover:border-[#00C8B8]"
                >
                  <span>See open roles</span>
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

      {/* 15. Section - K / GLOBAL & FAQ */}
      <section className="w-full bg-white py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <p className="text-sm font-semibold leading-[22.4px]">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0A6B66]">Coverage &amp; questions</span>
              </p>

              <SplitText
                as="h2"
                text="Global by design — with coverage disclosed"
                className="mx-auto max-w-[696px] text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-[860px] lg:mt-16">
              {ABOUT_FAQS.map((item, idx) => {
                const isOpen = openIndex === idx;
                const isLast = idx === ABOUT_FAQS.length - 1;
                return (
                  <div
                    key={item.question}
                    className={isLast ? "" : "border-b border-[#DCE8E8]"}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 text-left"
                    >
                      <span className="text-lg font-semibold leading-[28.8px] text-[#0C2E30]">
                        {item.question}
                      </span>
                      <span
                        className={`flex size-[22px] shrink-0 items-center justify-center transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <Image
                          src="/images/about/icons/faq-chevron.svg"
                          alt=""
                          width={22}
                          height={22}
                          unoptimized
                          className="h-auto max-h-full w-auto max-w-full object-contain"
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="max-w-[766px] px-1 pb-6">
                        <p className="text-base font-normal leading-[25.6px] text-[#51696B]">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 16. Section - BIG CTA */}
      <section className="w-full bg-white px-3 py-12">
        <div className="relative mx-auto flex min-h-[460px] max-w-[1416px] items-center justify-center overflow-hidden rounded-[40px] bg-[#0A3A40] lg:min-h-[560px] lg:rounded-[80px]">
          <Image
            src="/images/about/big-cta-bg.png"
            alt=""
            fill
            sizes="(max-width: 1440px) 100vw, 1416px"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#07282C]/95 to-[#07282C]/62"
          />

          <Reveal className="relative z-10 w-full">
            <div className="mx-auto flex max-w-[680px] flex-col items-center gap-4 px-6 py-16 text-center sm:px-12 lg:px-[76px]">
              <p className="text-sm font-semibold leading-[22.4px]">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#8FE0D6]">Move with confidence</span>
              </p>

              <SplitText
                as="h2"
                lines={["Understand the signals. Decide", "what matters."]}
                className="text-3xl font-bold leading-[1.12] tracking-[-0.016em] text-white sm:text-5xl sm:leading-[54px]"
              />

              <p className="max-w-[542px] text-[17px] font-normal leading-[27.2px] text-[#CFE7E4]">
                See how you&apos;re found across search and AI answers, with the
                evidence to act on it.
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-3.5">
                <Link
                  href="/#platform"
                  className="inline-flex items-center gap-2.5 rounded-full border border-transparent bg-[#00C8B8] px-6 py-3.5 text-base font-semibold leading-[25.6px] text-[#07332F] transition-colors hover:bg-[#19DAC9]"
                >
                  <span>Explore the platform</span>
                  <span className="flex size-[18px] shrink-0 items-center justify-center">
                    <Image
                      src="/images/about/icons/arrow-dark.svg"
                      alt=""
                      width={18}
                      height={18}
                      unoptimized
                      className="h-auto max-h-full w-auto max-w-full object-contain"
                    />
                  </span>
                </Link>

                <Link
                  href="/#book-demo"
                  className="inline-flex items-center rounded-full border border-white/35 bg-white/12 px-6 py-3.5 text-base font-semibold leading-[25.6px] text-white backdrop-blur-[4px] transition-colors hover:bg-white/20"
                >
                  <span>Book a demo</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
