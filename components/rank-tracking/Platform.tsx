import { Reveal, SplitText } from "@/components/home";
import { CHANGE_LEGEND, CONTAINER, Eyebrow, H2, TrendChart } from "./ui";

const NAV = ["Positions", "Segments", "Changes", "Markets", "Reports"];

const STEPS = [
  { title: "Observe", text: "Watch position movement for a defined segment." },
  { title: "Explain", text: "Open the context behind a change — not just the delta." },
  { title: "Compare", text: "Only like-for-like; \"not comparable\" when inputs differ." },
];

function PlatformMockup() {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#DCE8E8] bg-white shadow-[0_30px_60px_-20px_rgba(7,40,44,0.25)]">
      {/* Browser bar */}
      <div className="flex items-center gap-4 bg-[#07282C] px-4 py-3 sm:px-5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-white/80" />
          <span className="size-2.5 rounded-full bg-white/80" />
          <span className="size-2.5 rounded-full bg-white/80" />
        </div>
        <span className="truncate rounded-full border border-white/40 px-3.5 py-1 text-xs text-white/90">
          app.zoiquest.com / rank-tracking
        </span>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden w-[178px] shrink-0 bg-[#F4F8F8] px-5 py-6 sm:block">
          <div className="mb-7 flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="size-[22px]" aria-hidden="true">
              <circle cx="11" cy="11" r="7.5" fill="none" stroke="#00C8B8" strokeWidth="3" />
              <path d="m16 16 4.5 4.5" stroke="#00C8B8" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-semibold text-[#0C2E30]">ZoiQuest</span>
          </div>
          <ul className="flex flex-col gap-2">
            {NAV.map((item, i) => (
              <li
                key={item}
                className={`flex items-center gap-2.5 rounded-md px-3.5 py-1.5 text-[13px] ${
                  i === 0 ? "bg-[#E0F3F1] font-semibold text-[#0C2E30]" : "bg-white text-[#466B6F]"
                }`}
              >
                <span className={`size-1.5 rounded-full ${i === 0 ? "bg-[#0C2E30]" : "bg-[#9ED3CF]"}`} />
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main */}
        <div className="min-w-0 flex-1 p-4 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <p className="pt-3 text-lg font-semibold text-[#0C2E30]">Position trend</p>
            <div className="flex flex-col items-end gap-1">
              <span className="rounded-full bg-[#2F4F52] px-2.5 py-0.5 text-[11px] font-semibold text-white">
                Illustrative · synthetic trend
              </span>
              <span className="rounded-full bg-[#E3F5F3] px-3.5 py-0.5 text-[11px] font-semibold text-[#0C2E30]">
                synthetic trend
              </span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-[1fr_186px]">
            <div className="rounded-xl border border-[#E6EFEF] p-4 sm:p-5">
              <p className="text-xs text-[#466B6F]">Observed position over period</p>
              <TrendChart
                values={[8, 32, 18, 55, 40, 88, 78]}
                dotIndexes={[0, 2, 4, 6]}
                className="mx-1 mt-6 h-[170px]"
              />
            </div>

            <div className="rounded-xl border border-[#E6EFEF] p-4">
              <p className="text-sm font-semibold text-[#0C2E30]">Changes</p>
              <ul className="mt-3 flex flex-col gap-3">
                {CHANGE_LEGEND.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-xs text-[#466B6F]">
                    <span className="size-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.label}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-lg bg-[#F4F8F8] px-3 py-2.5 text-[11px] leading-[19px] text-[#466B6F]">
                <p>Evidence</p>
                <p>Market: US</p>
                <p>Device: desktop</p>
                <p>Period: 30d</p>
              </div>
            </div>
          </div>

          {/* Skeleton row */}
          <div aria-hidden="true" className="mt-4 grid grid-cols-4 gap-5 rounded-xl border border-[#E6EFEF] bg-[#F4F8F8] p-5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="h-2 rounded-full bg-[#DCE8E8]" />
                <span className="h-5 w-3/4 rounded-md border border-[#DCE8E8] bg-white" />
                <span className="h-1.5 w-11/12 rounded-full bg-[#E6EFEF]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Section 5 — Inside the platform (observe, explain, compare) */
export default function Platform() {
  return (
    <section id="how-it-works" className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col gap-4">
            <Eyebrow>Inside the platform</Eyebrow>
            <SplitText as="h2" text="Observe, explain, compare" className={H2} />
            <p className="text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
              Every view shows its evidence — and refuses to compare snapshots
              that aren&apos;t alike.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:mt-16 lg:grid-cols-[803px_1fr] lg:gap-12">
          <Reveal delay={80} className="min-w-0">
            <PlatformMockup />
          </Reveal>

          <Reveal delay={160}>
            <ol className="flex flex-col gap-7">
              {STEPS.map((s, i) => (
                <li key={s.title} className="flex items-start gap-4">
                  <span className="flex size-[30px] shrink-0 items-center justify-center rounded-full bg-[#E0F3F1] text-xs font-semibold text-[#0C2E30]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-base font-semibold text-[#0C2E30]">{s.title}</p>
                    <p className="text-[15px] leading-6 text-[#51696B]">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
