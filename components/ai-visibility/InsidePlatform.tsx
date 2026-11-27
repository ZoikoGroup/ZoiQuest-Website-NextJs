import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText } from "@/components/home";
import { ArrowRightIcon, CheckCircleIcon, EvidenceIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow } from "@/components/rank-tracking/ui";
import { QuoteIcon, SparklesIcon } from "./icons";

const PILLARS = [
  { Icon: SparklesIcon, title: "Presence", text: "Observed mention or citation, by context." },
  { Icon: QuoteIcon, title: "Sources", text: "Referenced context where a surface exposes it." },
  { Icon: EvidenceIcon, title: "Evidence", text: "Surface, market, sample and rights on every point." },
  { Icon: CheckCircleIcon, title: "Review", text: "Ambiguous or wrong answers routed to a human." },
];

/** Section 10 — Inside the platform (see presence with its evidence) */
export default function InsidePlatform() {
  return (
    <section className="w-full bg-[#F4F8F8] pb-20 lg:pb-[114px]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_435px_1fr] lg:gap-11">
          <Reveal>
            <div className="flex flex-col gap-4">
              <Eyebrow>Inside the platform</Eyebrow>
              <SplitText
                as="h2"
                lines={["See presence with its", "evidence"]}
                className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-[40px] sm:leading-[44px]"
              />
              <p className="text-base leading-[25.6px] text-[#51696B]">
                Every observation is designed to open up — the sample, the
                surface and how certain it is.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Link href="#how-its-measured" className="group relative block h-[440px] overflow-hidden rounded-[18px] sm:h-[543px]">
              <Image
                src="/images/ai-visibility/inside-platform-laptop.webp"
                alt="Laptop showing an analytics infographic in a meeting room"
                fill
                sizes="(max-width: 1024px) 100vw, 435px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#07282C]/75 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[15px] font-semibold">From answer to evidence</p>
                <p className="mt-1 flex items-center gap-2 text-base font-semibold">
                  See how it works
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={180}>
            <ul className="flex flex-col gap-7">
              {PILLARS.map(({ Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#DCE8E8] bg-white text-[#165258]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-[#0C2E30]">{title}</p>
                    <p className="text-[15px] leading-6 text-[#51696B]">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
