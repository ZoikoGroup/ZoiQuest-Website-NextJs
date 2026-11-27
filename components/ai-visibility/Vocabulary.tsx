import { Reveal } from "@/components/home";
import { CheckCircleIcon, PulseIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { CompassIcon, RouteIcon } from "@/components/technical-site-audits/icons";
import { MessageIcon, QuoteIcon } from "./icons";
import { IconCard, SectionHeader } from "./parts";

const WORDS = [
  { Icon: MessageIcon, title: "Mention", text: "Your brand named in an answer — without a linked source." },
  { Icon: QuoteIcon, title: "Citation", text: "A verifiable source or reference, where a surface exposes it." },
  { Icon: CheckCircleIcon, title: "Recommendation", text: "A suggested option — not proof of a ranking or endorsement." },
  { Icon: RouteIcon, title: "Referral", text: "A path a reader might follow onward, where observable." },
  { Icon: PulseIcon, title: "Sentiment", text: "How you're characterized — interpreted, with uncertainty." },
  { Icon: CompassIcon, title: "Absence", text: "Not appearing — a real, reportable state, not an error." },
];

/** Section 4 — AI visibility vocabulary (six words that aren't the same) */
export default function Vocabulary() {
  return (
    <section className="w-full bg-[#F4F8F8] pb-20 lg:pb-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="AI visibility vocabulary"
          title="Six words that aren't the same"
          intro="These are kept conceptually distinct — not collapsed into one score, and never implying endorsement or a stable rank."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {WORDS.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 70}>
              <IconCard {...w} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
