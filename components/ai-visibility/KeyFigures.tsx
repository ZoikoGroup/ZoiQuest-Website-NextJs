import { Reveal } from "@/components/home";
import { CompareIcon, PulseIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { LayersIcon } from "@/components/technical-site-audits/icons";

const FIGURES = [
  { Icon: LayersIcon, title: "Distinct concepts", text: "Mention, citation, recommendation, referral, sentiment, absence.", value: 6 },
  { Icon: CompareIcon, title: "Eligibility dimensions", text: "Coverage, method, time and rights must align.", value: 4 },
  { Icon: PulseIcon, title: "Answer states", text: "Present, absent, ambiguous, inconsistent and negative.", value: 5 },
];

/** Section 12 — Key figures (concepts, dimensions, states) */
export default function KeyFigures() {
  return (
    <section className="w-full bg-[#F4F8F8] pb-20 lg:pb-[114px]">
      <div className={`${CONTAINER} flex flex-col gap-4`}>
        {FIGURES.map(({ Icon, title, text, value }, i) => (
          <Reveal key={title} delay={i * 80}>
            <div className="flex items-center gap-4 rounded-[18px] border border-[#DCE8E8] bg-white px-6 py-6 sm:gap-5 sm:py-9">
              <span className="flex size-[52px] shrink-0 items-center justify-center rounded-full bg-[#0B3B40] text-[#00C8B8]">
                <Icon className="size-6" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-base font-semibold text-[#0C2E30]">{title}</p>
                <p className="text-sm leading-[22px] text-[#466B6F]">{text}</p>
              </div>
              <p className="shrink-0 text-4xl font-bold text-[#0C2E30] sm:text-5xl" aria-label={`${value} ${title.toLowerCase()}`}>
                {value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
