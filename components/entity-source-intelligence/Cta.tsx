import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText } from "@/components/home";
import { Eyebrow, PrimaryButton } from "@/components/rank-tracking/ui";

/** Section 13 — Evaluate ZoiQuest (closing CTA) */
export default function Cta() {
  return (
    <section className="w-full bg-white px-3 pb-12">
      <div className="relative mx-auto flex min-h-[460px] max-w-[1416px] items-center justify-center overflow-hidden rounded-[40px] bg-[#0A3A40] lg:min-h-[560px] lg:rounded-[80px]">
        <Image
          src="/images/entity-source-intelligence/cta-resolve-entities.webp"
          alt=""
          fill
          sizes="(max-width: 1440px) 100vw, 1416px"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#07343A]/75" />

        <Reveal className="relative z-10 w-full">
          <div className="mx-auto flex max-w-[680px] flex-col items-center gap-4 px-6 py-16 text-center sm:px-12">
            <Eyebrow tone="dark">Evaluate ZoiQuest</Eyebrow>
            <SplitText
              as="h2"
              lines={["Ready to resolve", "entities with evidence?"]}
              className="text-3xl font-bold leading-[1.12] tracking-[-0.016em] text-white sm:text-5xl sm:leading-[54px]"
            />
            <p className="max-w-[560px] text-[17px] leading-[27.2px] text-[#CFE7E4]">
              See how identity, sources and provenance come together — a demo
              is an evaluation conversation, not a live entity graph.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3.5">
              <PrimaryButton href="/#book-demo">Book a demo</PrimaryButton>
              <Link
                href="/#platform"
                className="inline-flex items-center rounded-full border border-white/35 bg-white/12 px-6 py-3.5 text-base font-semibold leading-[25.6px] text-white backdrop-blur-[4px] transition-colors hover:bg-white/20"
              >
                Explore the platform
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
