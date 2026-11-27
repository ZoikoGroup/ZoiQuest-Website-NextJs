import { Reveal } from "@/components/home";
import { IconCard, SectionHeader } from "@/components/ai-visibility/parts";
import { TranslateIcon } from "@/components/prompt-research/icons";
import { ClockIcon, EvidenceIcon, GlobeIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { SearchIcon } from "@/components/technical-site-audits/icons";
import { MonitorIcon } from "./icons";

const ITEMS = [
  { Icon: GlobeIcon, title: "Market", text: "Same country or region observed on both sides." },
  { Icon: MonitorIcon, title: "Device", text: "Desktop and mobile can change comparisons." },
  { Icon: TranslateIcon, title: "Language", text: "Query language kept separate from locale." },
  { Icon: SearchIcon, title: "Surface", text: "Same search or answer surface in scope." },
  { Icon: ClockIcon, title: "Period", text: "Comparable time windows, volatility disclosed." },
  { Icon: EvidenceIcon, title: "Method", text: "Same sampling and classification on both." },
];

/** Section 4 — Fair comparison (six things that must align) */
export default function Alignment() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Fair comparison"
          title="Six things that must align"
          intro={'Before two brands are compared. If one differs, we show "not comparable" rather than a misleading gap.'}
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 70}>
              <IconCard {...it} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
