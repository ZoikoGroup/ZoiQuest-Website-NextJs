import { Reveal } from "@/components/home";
import { IconCard, SectionHeader } from "@/components/ai-visibility/parts";
import { ClockIcon, GlobeIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { LayersIcon, SearchIcon } from "@/components/technical-site-audits/icons";
import { TargetIcon, TranslateIcon } from "./icons";

const DIMENSIONS = [
  { Icon: TargetIcon, title: "Research intent", text: "The decision a question is meant to inform." },
  { Icon: LayersIcon, title: "Question variant", text: "Alternative wordings of the same need." },
  { Icon: TranslateIcon, title: "Input & output language", text: "Asked in one language, answered in another." },
  { Icon: GlobeIcon, title: "Audience market", text: "The country or region the research is for." },
  { Icon: SearchIcon, title: "Covered surface", text: "The search or answer surface in scope." },
  { Icon: ClockIcon, title: "Sampling window", text: "When, and how, any observation was taken." },
];

/** Section 4 — Context dimensions (six independent things to keep distinct) */
export default function ContextDimensions() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Context dimensions"
          title="Six independent things to keep distinct"
          intro="A question's meaning shifts with context — so these are never collapsed into one number."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {DIMENSIONS.map((d, i) => (
            <Reveal key={d.title} delay={(i % 3) * 70}>
              <IconCard {...d} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
