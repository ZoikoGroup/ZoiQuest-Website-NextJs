import { Reveal } from "@/components/home";
import { IconCard, SectionHeader } from "@/components/ai-visibility/parts";
import { TranslateIcon } from "@/components/prompt-research/icons";
import { ClockIcon, GlobeIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { DatabaseIcon, LockIcon } from "@/components/technical-site-audits/icons";
import { NewspaperIcon } from "./icons";

const FIELDS = [
  { Icon: DatabaseIcon, title: "Source family", text: "The kind of source, with permitted use." },
  { Icon: NewspaperIcon, title: "Publisher", text: "Who published it — separate from the entity." },
  { Icon: GlobeIcon, title: "Collection market", text: "Where it was observed — not your locale." },
  { Icon: TranslateIcon, title: "Source language", text: "Handled apart from market and interface." },
  { Icon: ClockIcon, title: "Collection time", text: "When it was gathered; freshness disclosed." },
  { Icon: LockIcon, title: "Rights", text: "Only rights-cleared sources are used." },
];

/** Section 7 — Source provenance (what every source carries) */
export default function Provenance() {
  return (
    <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Source provenance"
          title="What every source carries"
          intro="Provenance travels with a source — so nothing is assumed to be owned, authoritative or universal."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {FIELDS.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 70}>
              <IconCard {...f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
