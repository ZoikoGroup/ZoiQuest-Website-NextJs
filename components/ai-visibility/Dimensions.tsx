import { Reveal } from "@/components/home";
import { ClockIcon, EvidenceIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { LockIcon } from "@/components/technical-site-audits/icons";
import { SparklesIcon } from "./icons";
import { SectionHeader } from "./parts";

const DIMENSIONS = [
  { Icon: SparklesIcon, title: "Coverage", text: "Same answer surfaces and markets observed." },
  { Icon: EvidenceIcon, title: "Method", text: "Same sampling and classification approach." },
  { Icon: ClockIcon, title: "Time", text: "Comparable periods, with volatility in view." },
  { Icon: LockIcon, title: "Rights", text: "Only rights-qualified observation on both sides." },
];

/** Section 8 — Comparability (four dimensions must align) */
export default function Dimensions() {
  return (
    <section className="w-full bg-white pb-20 lg:pb-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Comparability"
          title="Four dimensions must align"
          intro={'Before any two observations are called comparable. If one differs, we show "not comparable" instead of a misleading trend.'}
        />
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {DIMENSIONS.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div>
                <p className="flex items-center gap-3 text-lg font-semibold text-[#0C2E30]">
                  <Icon className="size-6 shrink-0 text-[#165258]" />
                  {title}
                </p>
                <p className="mt-4 max-w-[250px] text-[15px] leading-6 text-[#2F4F52]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
