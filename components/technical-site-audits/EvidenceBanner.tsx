import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";
import { Eyebrow } from "@/components/rank-tracking/ui";

/** Section 8 — Evidence over hype (image banner) */
export default function EvidenceBanner() {
  return (
    <section className="w-full bg-white px-3 py-12">
      <div className="relative mx-auto flex min-h-[420px] max-w-[1416px] items-center justify-center overflow-hidden rounded-[40px] bg-[#0A3A40] lg:min-h-[560px] lg:rounded-[80px]">
        <Image
          src="/images/technical-site-audits/banner-evidence-over-hype.webp"
          alt=""
          fill
          sizes="(max-width: 1440px) 100vw, 1416px"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#07343A]/75" />

        <Reveal className="relative z-10 w-full">
          <div className="mx-auto flex max-w-[680px] flex-col items-center gap-4 px-6 py-16 text-center sm:px-12">
            <Eyebrow tone="dark">Evidence over hype</Eyebrow>
            <SplitText
              as="h2"
              lines={["A finding is evidence, not", "a verdict."]}
              className="text-3xl font-bold leading-[1.12] tracking-[-0.016em] text-white sm:text-5xl sm:leading-[54px]"
            />
            <p className="max-w-[640px] text-[17px] leading-[27.2px] text-[#CFE7E4]">
              We report what was observed, what was inferred, and what remains
              unknown — no auto-crawl, no false green, no guaranteed ranking
              lift.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
