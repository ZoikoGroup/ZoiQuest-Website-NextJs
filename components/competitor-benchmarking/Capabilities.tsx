import { Reveal } from "@/components/home";
import { SectionHeader } from "@/components/ai-visibility/parts";
import { CONTAINER } from "@/components/rank-tracking/ui";

const CAPABILITIES = [
  { title: "Competitor Benchmarking", text: "Compare scoped cohorts fairly, in context.", current: true },
  { title: "Backlink Intelligence", text: "Understand link patterns and authority signals." },
  { title: "Share of Voice", text: "Relative presence within a defined scope." },
  { title: "Market Demand", text: "Interest and demand signals over time." },
];

/** Section 10 — Clearly distinct capabilities */
export default function Capabilities() {
  return (
    <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Clearly distinct capabilities"
          title="Benchmarking is not share of voice"
          intro="Each capability answers a different question. Related pages link only when approved and live."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div
                aria-current={c.current ? "page" : undefined}
                className={`flex h-full flex-col gap-3 rounded-[18px] border p-6 ${
                  c.current
                    ? "border-[#165258] bg-gradient-to-br from-[#E3F5F3] to-white"
                    : "border-[#DCE8E8] bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-lg font-semibold text-[#0C2E30]">{c.title}</p>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                      c.current ? "bg-[#165258] text-white" : "bg-[#F0F5F5] text-[#2F4F52]"
                    }`}
                  >
                    {c.current ? "This page" : "Related"}
                  </span>
                </div>
                <p className="text-[15px] leading-6 text-[#51696B]">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
