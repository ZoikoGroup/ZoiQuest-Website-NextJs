import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText } from "@/components/home";
import { ArrowRightIcon } from "./icons";
import { CONTAINER, H2 } from "./ui";

const DARK_CARDS = [
  {
    title: "Observation, not causation",
    text: "A position change isn't proof your edit caused it — temporal controls keep that honest.",
  },
  {
    title: "Evidence on every point",
    text: "Each observation carries its source, market, device and period — or a clear illustration note.",
  },
];

/** Section 2 — What is rank tracking? */
export default function WhatIs() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="flex flex-col items-start gap-5">
              <SplitText as="h2" text="What is rank tracking?" className={H2} />
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#10535A] px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#165258]/90"
              >
                Explore now
                <ArrowRightIcon className="size-[18px]" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-xl leading-[1.4] text-[#2F4F52] sm:text-[28px] sm:leading-[40px]">
              Rank tracking observes how search positions change over time for
              defined queries, places, devices and periods — so you can study
              movement responsibly, not chase a single number.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-[568px_1fr_1fr]">
          {/* Light card with image */}
          <Reveal className="md:col-span-2 lg:col-span-1">
            <div className="relative flex h-[300px] overflow-hidden rounded-[18px] border border-[#DCE8E8] bg-gradient-to-br from-[#E3F5F3] to-[#F7FBFB]">
              <div className="flex w-1/2 flex-col justify-between p-7 sm:w-[52%]">
                <p className="text-lg font-semibold text-[#0C2E30]">Comparability first</p>
                <p className="text-sm leading-6 text-[#2F4F52]">
                  Compare like with like — same query, place, device and period
                  — or the view flags it as not comparable.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-[210px] w-[46%] overflow-hidden rounded-tl-[18px]">
                <Image
                  src="/images/rank-tracking/comparability-first-students.webp"
                  alt="Two colleagues comparing notes on a laptop and notebook"
                  fill
                  sizes="(max-width: 1024px) 50vw, 261px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          {DARK_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={(i + 1) * 90}>
              <div className="flex h-[300px] flex-col justify-between rounded-[18px] bg-[#10535A] p-7 text-white transition-transform duration-300 hover:-translate-y-1">
                <p className="text-lg font-semibold">{card.title}</p>
                <p className="text-sm leading-6 text-[#CFE7E4]">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
