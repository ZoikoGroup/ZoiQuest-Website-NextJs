import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText } from "@/components/home";

const ZOIKO_HIGHLIGHTS = [
  {
    icon: "/images/about/icons/zoiko-1.svg",
    text: "An independent product, adopted on its own terms.",
  },
  {
    icon: "/images/about/icons/zoiko-2.svg",
    text: "Optional, governed ZoikoVertex integration when authorized.",
  },
  {
    icon: "/images/about/icons/zoiko-3.svg",
    text: "Connected through documented APIs — never hidden coupling.",
  },
];

export default function AboutHeroAndStory() {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full overflow-hidden rounded-b-[40px] bg-[#07282C] lg:rounded-b-[80px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#0A3A40]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(122deg, rgba(7, 40, 44, 0.94) 0%, rgba(10, 58, 64, 0.82) 45%, rgba(10, 58, 64, 0.42) 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="animate-zq-drift pointer-events-none absolute -right-24 -top-24 size-[520px] rounded-full bg-[#00C8B8]/12 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-20 lg:px-[100px] lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col items-start gap-5 lg:col-span-7">
              <p className="text-[13px] font-semibold uppercase leading-[20.8px] tracking-[1.56px] text-[#00C8B8]">
                About ZoiQuest · Global search &amp; AI intelligence
              </p>

              <SplitText
                as="h1"
                immediate
                lines={["Make sense of how", "the world discovers", "you."]}
                className="text-4xl font-bold leading-[1.04] tracking-[-0.025em] text-white sm:text-6xl lg:text-[72px] lg:leading-[73.44px]"
              />

              <p className="max-w-[585px] text-lg font-normal leading-7 text-[#CFE7E4] sm:text-[20px] sm:leading-[32px]">
                Search is no longer a single list of links. People find brands
                through search engines, AI-generated answers, content and new
                digital experiences. ZoiQuest is being built to connect those
                signals — so you can see where you&apos;re visible, what shapes
                the answers, and where action matters most.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-3">
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
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/12 px-6 py-3.5 text-base font-semibold leading-[25.6px] text-white backdrop-blur-[4px] transition-colors hover:bg-white/20"
                >
                  <span>Book a demo</span>
                  <span className="flex size-[18px] shrink-0 items-center justify-center">
                    <Image
                      src="/images/about/icons/play-light.svg"
                      alt=""
                      width={18}
                      height={18}
                      unoptimized
                      className="h-auto max-h-full w-auto max-w-full object-contain"
                    />
                  </span>
                </Link>
              </div>
            </div>

            <Reveal className="lg:col-span-5" delay={140}>
              <div className="relative h-[280px] w-full overflow-hidden rounded-[18px] shadow-2xl sm:h-[340px] lg:h-[366px]">
                <Image
                  src="/images/about/hero-laptop.png"
                  alt="ZoiQuest discovery intelligence workspace on laptop"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Section - ZOIKO GROUP */}
      <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <p className="text-sm font-semibold leading-[22.4px]">
                    <span className="text-[#00C8B8]">/ </span>
                    <span className="text-[#0A6B66]">
                      Part of something bigger
                    </span>
                  </p>

                  <SplitText
                    as="h2"
                    text="A standalone product within the Zoiko Group"
                    className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
                  />

                  <p className="text-lg font-normal leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                    ZoiQuest is built and run as an independent global SaaS
                    inside the Zoiko Group — with its own subscriptions,
                    economics, data ownership and tenant boundaries.
                  </p>
                </div>

                <ul className="flex flex-col gap-3.5">
                  {ZOIKO_HIGHLIGHTS.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center">
                        <Image
                          src={item.icon}
                          alt=""
                          width={20}
                          height={20}
                          unoptimized
                          className="h-auto max-h-full w-auto max-w-full object-contain"
                        />
                      </span>
                      <span className="text-[15.5px] font-normal leading-[24.8px] text-[#284648]">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative h-[320px] w-full overflow-hidden rounded-[18px] sm:h-[400px] lg:h-[444px]">
                <Image
                  src="/images/about/zoiko-group-ecosystem.png"
                  alt="The Zoiko Group collaborative workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 592px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Section - VISION & MISSION */}
      <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold leading-[22.4px]">
                <span className="text-[#00C8B8]">/ </span>
                <span className="text-[#0A6B66]">Purpose</span>
              </p>
              <SplitText
                as="h2"
                text="Our vision & mission"
                className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-[22px] lg:mt-16 lg:grid-cols-2">
            <Reveal className="h-full" delay={80}>
              <article className="flex h-full flex-col gap-4 rounded-[18px] border border-[#10535A] bg-[#10535A] p-8 sm:p-10">
                <p className="text-[13px] font-semibold leading-[20.8px] text-[#8FE0D6]">
                  Our vision
                </p>
                <h3 className="text-2xl font-bold leading-[1.2] tracking-[-0.018em] text-white sm:text-[28px] sm:leading-[33.6px]">
                  A world where every organization can understand how it is
                  discovered, represented and chosen.
                </h3>
                <p className="text-base font-normal leading-[25.6px] text-[#BFE0DC]">
                  Across search, artificial intelligence and emerging digital
                  channels — not just one engine or one metric.
                </p>
              </article>
            </Reveal>

            <Reveal className="h-full" delay={160}>
              <article className="flex h-full flex-col gap-4 rounded-[18px] border border-[#DCE8E8] bg-[#F4F8F8] p-8 sm:p-10">
                <p className="text-[13px] font-semibold leading-[20.8px] text-[#0A6B66]">
                  Our mission
                </p>
                <h3 className="text-2xl font-bold leading-[1.2] tracking-[-0.018em] text-[#0C2E30] sm:text-[28px] sm:leading-[33.6px]">
                  Make global discovery intelligence understandable, verifiable
                  and actionable.
                </h3>
                <p className="text-base font-normal leading-[25.6px] text-[#51696B]">
                  Connecting search, AI visibility, competitive intelligence and
                  market signals with responsible decisions and measurable
                  outcomes.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Section - OUR STORY */}
      <section className="w-full bg-white py-20 lg:py-[114px]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="relative h-[360px] w-full overflow-hidden rounded-[18px] sm:h-[460px] lg:h-[519px]">
                <Image
                  src="/images/about/our-story-team.png"
                  alt="Teams making sense of search and AI discovery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 592px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold leading-[22.4px]">
                  <span className="text-[#00C8B8]">/ </span>
                  <span className="text-[#0A6B66]">Our story</span>
                </p>

                <SplitText
                  as="h2"
                  text="A new way to understand discovery"
                  className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]"
                />

                <p className="text-lg font-normal leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                  The way people find information is changing. Rankings still
                  matter, but discovery now happens across AI assistants,
                  generated summaries, search results and emerging interfaces. A
                  brand can be prominent in one channel, missing from another,
                  or misrepresented in a machine-generated answer — one metric no
                  longer tells the whole story.
                </p>

                <p className="text-[15px] font-normal leading-6 text-[#51696B]">
                  ZoiQuest was conceived to address that complexity: established
                  SEO intelligence brought together with answer-engine and
                  generative-engine discovery, transparent methods, cross-market
                  context and a direct path from research to decisions.
                  It&apos;s a standalone product within the Zoiko Group —
                  distinct from ZoikoVertex, with the option to connect
                  intelligence to governed execution through approved
                  integrations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
