import { SplitText } from "@/components/home";
import { CompareIcon, EvidenceIcon, GlobeIcon, PulseIcon } from "./icons";
import { CHANGE_LEGEND, GhostButton, PrimaryButton, TrendChart } from "./ui";

const HERO_FEATURES = [
  { Icon: PulseIcon, title: "Watch movement", text: "Position change over defined periods." },
  { Icon: CompareIcon, title: "Comparability first", text: "Like-for-like, or flagged not comparable." },
  { Icon: GlobeIcon, title: "Place & device separate", text: "Locale never implies coverage." },
  { Icon: EvidenceIcon, title: "Evidence on every point", text: "Source, market, device and period." },
];

const STATS = ["Tracked queries", "Segments", "Markets"];

/** Section 1 — Hero (search intelligence + position overview) */
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-[40px] bg-[#07282C] lg:rounded-b-[80px]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(160deg, #07282C 0%, #0A3A40 55%, #0C434A 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="animate-zq-drift pointer-events-none absolute -left-32 top-10 size-[520px] rounded-full bg-[#00C8B8]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-16 sm:px-10 sm:pt-20 lg:px-[100px] lg:pt-[100px]">
        {/* Intro */}
        <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-5 text-center">
          <p className="animate-zq-fade-up text-[13px] font-semibold uppercase leading-[20.8px] tracking-[1.56px] text-[#00C8B8]">
            Search intelligence
          </p>

          <SplitText
            as="h1"
            immediate
            lines={["Understand visibility changes", "over time."]}
            className="text-4xl font-bold leading-[1.04] tracking-[-0.025em] text-white sm:text-6xl lg:text-[72px] lg:leading-[76px]"
          />

          <p
            className="animate-zq-fade-up max-w-[900px] text-lg font-normal leading-7 text-[#CFE7E4] sm:text-[20px] sm:leading-[32px]"
            style={{ animationDelay: "260ms" }}
          >
            Explore how search-position observations can be compared responsibly
            across defined queries, places, devices and periods — with their
            limitations visible.
          </p>

          <div
            className="animate-zq-fade-up flex flex-wrap items-center justify-center gap-3.5 pt-3"
            style={{ animationDelay: "380ms" }}
          >
            <PrimaryButton href="/#platform">Explore the platform</PrimaryButton>
            <GhostButton href="/#book-demo" withPlay>
              Book a demo
            </GhostButton>
          </div>
        </div>

        {/* Feature strip */}
        <ul className="mt-14 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:mt-4 lg:grid-cols-4 lg:gap-8 lg:pt-11">
          {HERO_FEATURES.map(({ Icon, title, text }) => (
            <li key={title} className="flex items-start gap-3">
              <Icon className="mt-0.5 size-[22px] shrink-0 text-[#00C8B8]" />
              <div>
                <p className="text-[15px] font-semibold leading-6 text-white">{title}</p>
                <p className="text-[13px] leading-5 text-[#B8D6D3]">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Dashboard mockup — cropped by the section's rounded bottom */}
        <div className="mt-14 rounded-t-[24px] border border-b-0 border-white/10 bg-white/[0.04] px-3 pt-3 sm:px-8 sm:pt-6">
          <div className="rounded-t-[22px] bg-white px-5 pb-6 pt-6 sm:rounded-t-[32px] sm:px-11 sm:pb-8">
            <div className="flex items-center justify-between gap-3">
              <p className="text-lg font-semibold text-[#0C2E30]">Position overview</p>
              <span className="rounded-full bg-[#E3F5F3] px-5 py-1 text-xs font-semibold text-[#0C2E30]">
                synthetic
              </span>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3 sm:gap-7">
              {STATS.map((label) => (
                <div
                  key={label}
                  className="rounded-xl border border-[#DCE8E8] bg-[#F4F8F8] px-4 py-3 sm:px-8"
                >
                  <p className="truncate text-xs text-[#466B6F] sm:text-[13px]">{label}</p>
                  <p className="text-base font-semibold leading-6 text-[#0C2E30]" aria-label="No count shown">
                    —
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[1fr_330px] md:gap-7">
              <div className="rounded-xl border border-[#E6EFEF] px-5 pb-5 pt-4 sm:px-8">
                <p className="text-[13px] text-[#466B6F]">Visibility trend</p>
                <TrendChart
                  values={[20, 30, 25, 40, 35, 50, 47]}
                  dotIndexes={[0, 2, 4, 6]}
                  className="mt-4 h-[120px] sm:h-[140px]"
                />
              </div>

              <div className="rounded-xl border border-[#E6EFEF] bg-[#F4F8F8] px-8 py-4">
                <p className="text-sm font-semibold text-[#0C2E30]">Changes</p>
                <ul className="mt-3 flex flex-col gap-3">
                  {CHANGE_LEGEND.map((item) => (
                    <li key={item.label} className="flex items-center gap-5 text-sm text-[#466B6F]">
                      <span className="h-2.5 w-6 rounded-full" style={{ backgroundColor: item.color }} />
                      {item.label}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-[27px] text-[#466B6F]">
                  categories only —<br />
                  no counts shown
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
