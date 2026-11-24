import Link from "next/link";
import SplitText from "./SplitText";

interface VisibilityRow {
  brand: string;
  highlighted?: boolean;
  searchResults: boolean;
  aiAnswers: boolean;
  content: boolean;
}

const VISIBILITY_ROWS: VisibilityRow[] = [
  {
    brand: "Your brand",
    highlighted: true,
    searchResults: true,
    aiAnswers: false,
    content: true,
  },
  {
    brand: "Competitor A",
    searchResults: true,
    aiAnswers: true,
    content: true,
  },
  {
    brand: "Competitor B",
    searchResults: false,
    aiAnswers: true,
    content: false,
  },
];

function ArrowRightIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-300 group-hover:translate-x-1 ${className}`}
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

function StatusCell({ present }: { present: boolean }) {
  return (
    <div className="inline-flex items-center gap-2">
      {present ? (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-[#16A34A]"
          >
            <path
              d="M3.75 8.25L6.5 11L12.25 5.25"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xs font-medium leading-5 text-[#165258]">
            Present
          </span>
        </>
      ) : (
        <>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="shrink-0 text-[#DC2626]"
          >
            <path
              d="M4.5 8H11.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xs font-medium leading-5 text-[#165258]">
            Missing
          </span>
        </>
      )}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-[40px] bg-gradient-to-br from-[#062327] via-[#0B393E] to-[#0E484E] lg:rounded-b-[80px]">
      {/* Drifting ambient glows */}
      <div
        aria-hidden="true"
        className="animate-zq-drift pointer-events-none absolute -right-24 -top-24 size-[520px] rounded-full bg-[#00C8B8]/14 blur-3xl"
      />
      <div
        aria-hidden="true"
        style={{ animationDelay: "-6s" }}
        className="animate-zq-drift pointer-events-none absolute -left-28 top-1/3 size-[420px] rounded-full bg-[#0E6D75]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-16 sm:px-10 lg:px-16 lg:pb-20 lg:pt-24">
        {/* Centered Hero Headline */}
        <div className="flex flex-col items-center text-center">
          <div className="animate-zq-fade-up inline-flex items-center gap-2 text-xs font-semibold uppercase leading-5 tracking-wider text-[#00C8B8]">
            <span className="animate-zq-pulse-dot size-1.5 rounded-full bg-[#00C8B8]" />
            <span>Global discovery intelligence</span>
          </div>

          <SplitText
            as="h1"
            immediate
            lines={["See the signals behind", "every search and AI answer."]}
            delay={100}
            stagger={55}
            className="mt-5 max-w-[975px] text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[72px] lg:leading-[78px]"
          />

          <SplitText
            as="p"
            immediate
            text="Understand search demand, AI visibility, competitors and site health in one evidence-led platform — built for teams working across markets and languages."
            delay={460}
            stagger={22}
            className="mt-5 max-w-[590px] text-base leading-7 text-[#CDE3E5] sm:text-xl sm:leading-8"
          />

          <div
            style={{ animationDelay: "650ms" }}
            className="animate-zq-fade-up mt-8 flex flex-wrap items-center justify-center gap-3.5"
          >
            <Link
              href="#platform"
              className="group inline-flex items-center gap-2 rounded-full bg-[#00C8B8] px-6 py-3.5 text-base font-semibold leading-6 text-[#082F34] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#19DBC9] hover:shadow-lg"
            >
              <span>Explore the platform</span>
              <ArrowRightIcon />
            </Link>

            <Link
              href="#book-demo"
              className="group inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/12 px-6 py-3.5 text-base font-semibold leading-6 text-white backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <span>Book a demo</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>

        {/* Teal Visibility Showcase Card */}
        <div
          style={{ animationDelay: "420ms" }}
          className="animate-zq-fade-up mt-14 rounded-2xl border-4 border-[#155E63] bg-[#10535A] p-6 sm:p-10 lg:mt-20 lg:p-14"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Copy */}
            <div className="flex flex-col items-start lg:col-span-6">
              <SplitText
                as="h2"
                text="Understand how you are found in search and AI answers."
                delay={120}
                stagger={45}
                className="max-w-[461px] text-3xl font-bold leading-[1.15] text-[#EAF4F3] sm:text-4xl lg:text-[48px] lg:leading-[54px]"
              />

              <p className="mt-8 max-w-[461px] text-lg leading-7 text-slate-300 sm:mt-12 sm:text-xl">
                ZoiQuest is designed to show where your brand appears across
                search results and AI-generated answers, and the sources behind
                each signal.
              </p>

              <Link
                href="#book-demo"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[#EAF4F3] bg-[#EAF4F3] px-6 py-3 text-sm font-semibold leading-5 text-[#0C2E30] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                Book a demo
              </Link>
            </div>

            {/* Right Floating White Snapshot Card */}
            <div className="lg:col-span-6">
              <div className="animate-zq-float rounded-3xl bg-white p-5 shadow-xl ring-8 ring-[#EAF4F3]/14 transition-shadow duration-300 hover:shadow-2xl hover:[animation-play-state:paused] sm:px-8 sm:py-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold leading-7 text-[#0C2E30]">
                      Where are we visible?
                    </h3>
                    <p className="mt-0.5 text-sm font-normal leading-5 text-[#466B6F]">
                      Visibility snapshot by channel
                    </p>
                  </div>
                  <span className="rounded-md border border-zinc-200 bg-[#F4F8F8] px-2 py-1.5 text-xs font-normal leading-3 text-[#466B6F]">
                    Illustrative example
                  </span>
                </div>

                <div className="mt-5">
                  <p className="pb-2 text-xs font-semibold leading-5 text-[#0C2E30]">
                    Brand presence by channel
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-neutral-700/10">
                    <table className="w-full min-w-[400px] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-zinc-200">
                          <th className="px-3 py-3.5 text-xs font-semibold leading-5 text-[#466B6F]">
                            Brand
                          </th>
                          <th className="px-2 py-3.5 text-xs font-semibold leading-5 text-[#466B6F]">
                            Search results
                          </th>
                          <th className="px-2 py-3.5 text-xs font-semibold leading-5 text-[#466B6F]">
                            AI answers
                          </th>
                          <th className="px-2 py-3.5 text-xs font-semibold leading-5 text-[#466B6F]">
                            Content
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {VISIBILITY_ROWS.map((row) => (
                          <tr
                            key={row.brand}
                            className={`border-b border-zinc-200 transition-colors last:border-b-0 ${
                              row.highlighted
                                ? "bg-[#E6F2F1]"
                                : "bg-white hover:bg-[#F4F8F8]/60"
                            }`}
                          >
                            <td className="px-3 py-3.5 text-xs font-medium leading-5 text-[#0C2E30]">
                              {row.brand}
                            </td>
                            <td className="px-2 py-3.5">
                              <StatusCell present={row.searchResults} />
                            </td>
                            <td className="px-2 py-3.5">
                              <StatusCell present={row.aiAnswers} />
                            </td>
                            <td className="px-2 py-3.5">
                              <StatusCell present={row.content} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="mt-3 text-xs font-normal leading-5 text-[#466B6F]">
                  Check mark means present. Dash means missing.
                </p>

                <div className="mt-4 rounded-[10px] border border-zinc-200 bg-[#F4F8F8] p-4">
                  <p className="text-xs font-semibold leading-5 text-[#0C2E30]">
                    Evidence record
                  </p>
                  <p className="mt-1 text-xs font-normal leading-5 text-[#165258]">
                    Example layout only. In ZoiQuest, each snapshot is designed
                    to show its source family, collection period, market, method
                    and confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
