import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";
import { CONTAINER, Eyebrow } from "@/components/rank-tracking/ui";

/** Section 8 — Evidence over hype (full-width banner) */
export default function EvidenceBanner() {
  return (
    <section className="relative flex min-h-[400px] w-full items-center overflow-hidden bg-[#0A3A40] lg:min-h-[441px]">
      <Image
        src="/images/entity-source-intelligence/banner-evidence-over-hype.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#07343A]/90 via-[#07343A]/70 to-[#07343A]/45"
      />

      <Reveal className="relative z-10 w-full">
        <div className={`${CONTAINER} py-16`}>
          <div className="flex max-w-[680px] flex-col gap-4">
            <Eyebrow tone="dark">Evidence over hype</Eyebrow>
            <SplitText
              as="h2"
              text="Identity is resolved, not assumed."
              className="text-3xl font-bold leading-[1.12] tracking-[-0.016em] text-white sm:text-[44px] sm:leading-[48px]"
            />
            <p className="text-[17px] leading-[27.2px] text-[#CFE7E4]">
              We separate entities from their names and sources, and show the
              provenance and uncertainty — no invented graph, no match
              percentages, no ownership claims.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
