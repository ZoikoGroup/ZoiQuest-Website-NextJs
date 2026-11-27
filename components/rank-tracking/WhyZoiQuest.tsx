import { Reveal, SplitText } from "@/components/home";
import { CompareIcon, EvidenceIcon, PulseIcon, ShieldCheckIcon } from "./icons";
import { CONTAINER, Eyebrow, H2 } from "./ui";

const WHY = [
  { Icon: CompareIcon, title: "Comparability-led", text: "Like-for-like, or clearly flagged not comparable." },
  { Icon: PulseIcon, title: "Observation, not causation", text: "Movement is evidence, not proof of a cause." },
  { Icon: EvidenceIcon, title: "Evidence on every point", text: "Source, market, device and period, always." },
  { Icon: ShieldCheckIcon, title: "Governed by default", text: "No guarantees, no automatic action." },
];

/** Section 6 — Why ZoiQuest */
export default function WhyZoiQuest() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col gap-4">
            <Eyebrow>Why ZoiQuest</Eyebrow>
            <SplitText
              as="h2"
              text="Monitoring you can trust. Changes you can defend."
              className={H2}
            />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {WHY.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="flex flex-col">
                <span className="flex size-[50px] items-center justify-center rounded-xl bg-[#E3F5F3] text-[#165258]">
                  <Icon className="size-[22px]" />
                </span>
                <p className="mt-5 text-base font-semibold text-[#0C2E30]">{title}</p>
                <p className="mt-1 max-w-[280px] text-[15px] leading-6 text-[#51696B]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
