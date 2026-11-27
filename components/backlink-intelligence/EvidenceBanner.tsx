import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";
import { CONTAINER, Eyebrow } from "@/components/rank-tracking/ui";

/** Section 13 — Evidence over hype (full-width banner) */
export default function EvidenceBanner() {
  return (
    <section className="relative flex min-h-[400px] w-full items-center overflow-hidden bg-[#0A3A40] lg:min-h-[489px]">
      <Image
        src="/images/backlink-intelligence/banner-evidence-over-hype.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#07282C]/90 via-[#07282C]/70 to-[#07282C]/40"
      />

      <Reveal className="relative z-10 w-full">
        <div className={`${CONTAINER} py-16`}>
          <div className="flex max-w-[700px] flex-col gap-4">
            <Eyebrow tone="dark">Evidence over hype</Eyebrow>
            <SplitText
              as="h2"
              lines={["A link is evidence to examine, not", "a score to trust."]}
              className="text-3xl font-bold leading-[1.12] tracking-[-0.016em] text-white sm:text-[44px] sm:leading-[48px]"
            />
            <p className="max-w-[620px] text-[17px] leading-[27.2px] text-[#CFE7E4]">
              We show the source, attribute and context behind every link, and
              disclose coverage — no index-size boasts, no black-box authority
              score, no ranking promises.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
