import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";
import { CheckCircleIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";

const POINTS = [
  "Market and language handled separately from your interface.",
  "Surface and sample stated, never assumed universal.",
  "Non-comparable contexts are flagged, not blended.",
];

/** Section 5 — Context changes meaning (locale changes interpretation) */
export default function Locale() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_592px] lg:gap-14">
          <Reveal>
            <div className="flex flex-col gap-4">
              <Eyebrow>Context changes meaning</Eyebrow>
              <SplitText as="h2" lines={["Locale changes", "interpretation"]} className={H2} />
              <p className="text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                The same question in another market or language can produce a
                different answer. ZoiQuest keeps context explicit so you
                don&apos;t over-generalize from one sample.
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
                src="/images/ai-visibility/locale-context-team.webp"
                alt="Colleagues discussing a project around a small table"
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
