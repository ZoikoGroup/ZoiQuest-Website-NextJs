import { Reveal } from "@/components/home";
import { SparklesIcon } from "@/components/ai-visibility/icons";
import { IconCard, SectionHeader } from "@/components/ai-visibility/parts";
import { CompareIcon, PulseIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { FileEditIcon } from "@/components/technical-site-audits/icons";
import { AwardIcon, TrendUpIcon } from "./icons";

const SIGNALS = [
  { Icon: TrendUpIcon, title: "Search visibility", text: "Observed presence in classic search results." },
  { Icon: SparklesIcon, title: "AI discovery", text: "Presence in sampled AI answers, where measurable." },
  { Icon: PulseIcon, title: "Demand", text: "Relative interest across the cohort over time." },
  { Icon: AwardIcon, title: "Authority signals", text: "Reference and link patterns, with provenance." },
  { Icon: FileEditIcon, title: "Content footprint", text: "Topic coverage observable within scope." },
  { Icon: CompareIcon, title: "Share of presence", text: "Relative, context-bound — not a market-share claim." },
];

/** Section 6 — Signals you can compare (what goes side by side) */
export default function Signals() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Signals you can compare"
          title="What goes side by side"
          intro="Where coverage exists and rights allow — never assumed universal, never a single score."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {SIGNALS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 70}>
              <IconCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
