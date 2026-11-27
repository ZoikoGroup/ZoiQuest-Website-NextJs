import { Reveal } from "@/components/home";
import { IconCard, SectionHeader } from "@/components/ai-visibility/parts";
import { CheckCircleIcon, ClockIcon, GlobeIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { DatabaseIcon, LockIcon, ScanIcon } from "@/components/technical-site-audits/icons";

const FIELDS = [
  { Icon: DatabaseIcon, title: "Source family", text: "How the link was collected, with permitted use." },
  { Icon: ScanIcon, title: "Coverage", text: "What was in scope — and what wasn't observed." },
  { Icon: ClockIcon, title: "Freshness", text: "When it was last seen; recency disclosed." },
  { Icon: GlobeIcon, title: "Market & language", text: "Source context, kept separate from your locale." },
  { Icon: CheckCircleIcon, title: "Verification", text: "Observed on the live page, or last-known state." },
  { Icon: LockIcon, title: "Rights", text: "Only rights-cleared observation is used." },
];

/** Section 11 — Coverage & provenance (what every link observation carries) */
export default function Coverage() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Coverage & provenance"
          title="What every link observation carries"
          intro="No crawler sees every link — so provenance and limits travel with each observation."
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
