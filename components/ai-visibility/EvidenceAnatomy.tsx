import Image from "next/image";
import { Reveal } from "@/components/home";
import { ClockIcon, GlobeIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { LockIcon } from "@/components/technical-site-audits/icons";
import { SparklesIcon } from "./icons";
import { IconCard, SectionHeader } from "./parts";

const FIELDS = [
  { Icon: SparklesIcon, title: "Surface", text: "The answer surface observed — stated, never assumed universal." },
  { Icon: GlobeIcon, title: "Market & language", text: "Locale of the question — separate from your interface." },
  { Icon: ClockIcon, title: "Time & sample", text: "When and how it was sampled; volatility disclosed." },
  { Icon: LockIcon, title: "Rights", text: "Only rights-qualified observation is ever used." },
];

/** Section 9 — Evidence anatomy (what a sample must carry) */
export default function EvidenceAnatomy() {
  return (
    <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Evidence anatomy"
          title="What a sample must carry"
          intro="Four eligibility dimensions must align before anything is called comparable."
        />
        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-[592px_1fr] lg:gap-14">
          <Reveal>
            <div className="relative h-[300px] overflow-hidden rounded-[18px] sm:h-[444px]">
              <Image
                src="/images/ai-visibility/evidence-anatomy-laptop.webp"
                alt="Laptop showing a data dashboard on a wooden desk"
                fill
                sizes="(max-width: 1024px) 100vw, 592px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FIELDS.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <IconCard {...f} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
