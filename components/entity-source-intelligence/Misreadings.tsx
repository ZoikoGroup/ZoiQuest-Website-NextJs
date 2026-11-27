import { Reveal } from "@/components/home";
import { SectionHeader } from "@/components/ai-visibility/parts";
import { CheckCircleIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";

const MYTHS = [
  { myth: "Same spelling means same entity", reality: "shared names and aliases can belong to entirely different entities." },
  { myth: "A link proves ownership", reality: "a domain or citation isn't proof of ownership, control or authority." },
  { myth: "Matching dates means comparable", reality: "matching labels and dates don't establish comparable entities." },
];

/** Section 4 — Read it honestly (a matching name is not an identity) */
export default function Misreadings() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Read it honestly"
          title="A matching name is not an identity"
          intro="Common shortcuts — and why they don't hold."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16">
          {MYTHS.map((m, i) => (
            <Reveal key={m.myth} delay={i * 80}>
              <div className="h-full rounded-[16px] border border-[#DCE8E8] bg-white px-6 py-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-[#466B6F]">
                  <CheckCircleIcon className="size-4 shrink-0 text-[#0C2E30]" />
                  <span className="line-through decoration-[#466B6F]">
                    <span className="sr-only">Myth: </span>
                    {m.myth}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-[22px] text-[#2F4F52]">
                  <strong className="font-semibold text-[#0C2E30]">Reality:</strong> {m.reality}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
