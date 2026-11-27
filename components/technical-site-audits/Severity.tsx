import { Reveal, SplitText } from "@/components/home";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";
import { SEVERITY } from "./data";

const LEVELS = [
  { color: SEVERITY.critical.color, title: "Critical", text: "Strong evidence of blocked or broken access." },
  { color: SEVERITY.high.color, title: "High", text: "Evidence-supported with clear consequences." },
  { color: SEVERITY.medium.color, title: "Medium", text: "Bounded impact; validate reach first." },
  { color: SEVERITY.low.color, title: "Low / monitor", text: "Minor or uncertain; track and revisit." },
  { color: SEVERITY.none.color, title: "Not evaluated", text: "Method or access insufficient — never a false pass." },
];

/** Section 4 — Severity, honestly */
export default function Severity() {
  return (
    <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col gap-4">
            <Eyebrow>Severity, honestly</Eyebrow>
            <SplitText as="h2" text="Not every finding is critical" className={H2} />
            <p className="max-w-[790px] text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
              Priority reflects impact, scope, certainty and effort — and when
              the evidence isn&apos;t enough, we say so instead of showing a
              false green.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {LEVELS.map((l, i) => (
            <Reveal key={l.title} delay={i * 70}>
              <div
                className="h-full rounded-[12px] border border-[#DCE8E8] border-l-[3px] bg-white px-4 py-4"
                style={{ borderLeftColor: l.color }}
              >
                <p className="text-[15px] font-semibold text-[#0C2E30]">{l.title}</p>
                <p className="mt-1 text-[13px] leading-5 text-[#466B6F]">{l.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
