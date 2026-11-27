import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";
import { CONTAINER, Eyebrow } from "@/components/rank-tracking/ui";

/** Section 13 — Evidence over hype (full-width banner) */
export default function EvidenceBanner() {
  return (
    <section className="relative flex min-h-[400px] w-full items-center overflow-hidden bg-[#0A3A40] lg:min-h-[462px]">
      <Image
        src="/images/ai-visibility/banner-evidence-over-hype.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#07343A]/90 via-[#07343A]/70 to-[#07343A]/40"
      />

      <Reveal className="relative z-10 w-full">
        <div className={`${CONTAINER} py-16`}>
          <div className="flex max-w-[640px] flex-col gap-4">
            <Eyebrow tone="dark">Evidence over hype</Eyebrow>
            <SplitText
              as="h2"
              lines={["Appearing in an answer is a", "signal, not a guarantee."]}
              className="text-3xl font-bold leading-[1.12] tracking-[-0.016em] text-white sm:text-[44px] sm:leading-[48px]"
            />
            <p className="text-[17px] leading-[27.2px] text-[#CFE7E4]">
              We show observed presence with its sample, surface and limits — no
              named-provider coverage claims, no promised citations, no
              simulated AI output.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
