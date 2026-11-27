"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Reveal, SplitText } from "@/components/home";
import { ArrowRightIcon, BriefcaseIcon, BuildingIcon } from "./icons";
import { CONTAINER, Eyebrow, H2 } from "./ui";

const AUDIENCES = [
  {
    Icon: BuildingIcon,
    title: "For in-house teams",
    text: "Watch movement across brands, regions and segments with comparable methodology.",
    cta: "Explore in-house",
    href: "/#enterprise",
    image: "/images/rank-tracking/audience-in-house-teams.webp",
    alt: "In-house marketing team gathered around a laptop",
  },
  {
    Icon: BriefcaseIcon,
    title: "For agencies",
    text: "Report client movement with workspace isolation and honest, comparable context.",
    cta: "Explore agencies",
    href: "/#agencies",
    image: "/images/rank-tracking/audience-agencies.webp",
    alt: "Agency team reviewing work at their desks",
  },
];

/** Section 3 — Who it's for (audience carousel) */
export default function Audience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const cardStep = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return 1;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.offsetWidth + gap;
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    setActive(atEnd ? AUDIENCES.length - 1 : Math.round(track.scrollLeft / cardStep()));
  };

  const goTo = (idx: number) => {
    trackRef.current?.scrollTo({ left: idx * cardStep(), behavior: "smooth" });
  };

  return (
    <section className="w-full overflow-hidden bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[428px_1fr] lg:gap-12">
          <Reveal>
            <div className="flex flex-col gap-4">
              {/* Slide indicator */}
              <div className="mb-10 flex items-center gap-3 text-sm font-medium" role="tablist" aria-label="Audiences">
                {AUDIENCES.map((a, idx) => {
                  const isActive = idx === active;
                  return (
                    <button
                      key={a.title}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={a.title}
                      onClick={() => goTo(idx)}
                      className={`flex cursor-pointer items-center gap-3 transition-all duration-500 ${
                        isActive ? "flex-1 text-[#0C2E30]" : "text-[#51696B] hover:text-[#0C2E30]"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                      {isActive && <span className="h-px flex-1 bg-[#DCE8E8]" />}
                    </button>
                  );
                })}
              </div>

              <Eyebrow>Who it&apos;s for</Eyebrow>
              <SplitText as="h2" lines={["Built for teams", "tracking change"]} className={H2} />
              <p className="max-w-[360px] text-base leading-[25.6px] text-[#51696B]">
                Monitoring is only useful when it&apos;s comparable and
                explainable.
              </p>
              <Link
                href="/#enterprise"
                className="mt-4 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#DCE8E8] bg-white px-6 py-3.5 text-base font-semibold text-[#0C2E30] transition-colors hover:border-[#00C8B8]"
              >
                See all solutions
                <ArrowRightIcon className="size-[18px]" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0 self-end">
            <div
              ref={trackRef}
              onScroll={onScroll}
              className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {AUDIENCES.map(({ Icon, title, text, cta, href, image, alt }) => (
                <Link
                  key={title}
                  href={href}
                  className="group relative h-[338px] w-[85%] shrink-0 snap-start overflow-hidden rounded-[18px] sm:w-[435px]"
                >
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="435px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-[#07282C]/5 via-[#07282C]/45 to-[#07282C]/90"
                  />
                  <div className="absolute inset-x-6 bottom-6 flex flex-col text-white">
                    <span className="mb-3 flex size-10 items-center justify-center rounded-full bg-white text-[#0C2E30]">
                      <Icon className="size-5" />
                    </span>
                    <p className="text-lg font-semibold">{title}</p>
                    <p className="mt-1 text-sm leading-[22px] text-[#DDEDEB]">{text}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-base font-semibold">{cta}</span>
                      <span className="flex size-8 items-center justify-center rounded-full border border-white/60 transition-colors group-hover:bg-white group-hover:text-[#0C2E30]">
                        <ArrowRightIcon className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
