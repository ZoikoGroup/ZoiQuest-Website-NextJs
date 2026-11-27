import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";
import { CheckCircleIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";

const POINTS = [
  "Synthetic examples illustrate intent — they carry no volume.",
  "Frequency, popularity and \"share of AI questions\" are never invented.",
  "A formulation stays a hypothesis until legitimately observed.",
];

/** Section 3 — First principle (a prompt is a hypothesis, not a headcount) */
export default function FirstPrinciple() {
  return (
    <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_592px] lg:gap-14">
          <Reveal>
            <div className="flex flex-col gap-4">
              <Eyebrow>First principle</Eyebrow>
              <SplitText as="h2" lines={["A prompt is a hypothesis,", "not a headcount"]} className={H2} />
              <p className="text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                A candidate formulation is a question we might research — not
                evidence that a real person submitted it to a specific
                assistant, and never a measure of demand.
              </p>
              <ul className="mt-4 flex flex-col gap-3.5">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] leading-6 text-[#2F4F52]">
                    <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-[#00B3A4]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-[300px] overflow-hidden rounded-[18px] sm:h-[444px]">
              <Image
                src="/images/prompt-research/first-principle-hypotheses.webp"
                alt="Hands reviewing printed charts beside a tablet"
                fill
                sizes="(max-width: 1024px) 100vw, 592px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
