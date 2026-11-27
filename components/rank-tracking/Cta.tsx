import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";
import { Eyebrow, GhostButton, PrimaryButton } from "./ui";

/** Section 9 — Evaluate ZoiQuest (CTA banner) */
export default function Cta() {
  return (
    <section className="w-full bg-white px-3 py-12">
      <div className="relative mx-auto flex min-h-[460px] max-w-[1416px] items-center justify-center overflow-hidden rounded-[40px] bg-[#0A3A40] lg:min-h-[560px] lg:rounded-[80px]">
        <Image
          src="/images/rank-tracking/cta-team-meeting.webp"
          alt=""
          fill
          sizes="(max-width: 1440px) 100vw, 1416px"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#07343A]/75" />

        <Reveal className="relative z-10 w-full">
          <div className="mx-auto flex max-w-[760px] flex-col items-center gap-4 px-6 py-16 text-center sm:px-12">
            <Eyebrow tone="dark">Evaluate ZoiQuest</Eyebrow>
            <SplitText
              as="h2"
              lines={["A trend you can explain beats a", "number you can't."]}
              className="text-3xl font-bold leading-[1.12] tracking-[-0.016em] text-white sm:text-5xl sm:leading-[54px]"
            />
            <p className="max-w-[600px] text-[17px] leading-[27.2px] text-[#CFE7E4]">
              We show movement with its context and limits — synthetic
              illustrations here, and real observations only with their
              evidence.
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3.5">
              <PrimaryButton href="/#platform">Explore the platform</PrimaryButton>
              <GhostButton href="/#book-demo">Book a demo</GhostButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
