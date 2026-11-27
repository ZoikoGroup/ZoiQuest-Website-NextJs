import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";
import { CheckCircleIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";

const POINTS = [
  "Competitor, domain, brand and legal entity are not the same thing.",
  "Comparison is only fair when context and method align.",
  "A higher observed signal is not proof of cause or success.",
];

/** Section 2 — First principle (a cohort is a selection, not a verdict) */
export default function FirstPrinciple() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_592px] lg:gap-14">
          <Reveal>
            <div className="flex flex-col gap-4">
              <Eyebrow>First principle</Eyebrow>
              <SplitText as="h2" lines={["A cohort is a selection,", "not a verdict"]} className={H2} />
              <p className="text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                A comparison cohort is a deliberately scoped analytical
                selection — not proof that the brands in it actually compete,
                and never a declaration of a winner.
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
                src="/images/competitor-benchmarking/first-principle-cohort.webp"
                alt="Three colleagues with tablets smiling in an operations room"
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
