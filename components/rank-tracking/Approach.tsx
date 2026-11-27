import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText } from "@/components/home";
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, CompareIcon, EvidenceIcon } from "./icons";
import { CONTAINER, Eyebrow, H2 } from "./ui";

const PILLARS = [
  { Icon: CompareIcon, title: "Comparability", text: "Query, place, device and period held constant." },
  { Icon: ClockIcon, title: "Freshness", text: "Observation window disclosed, not implied." },
  { Icon: EvidenceIcon, title: "Provenance", text: "Source and method on every point." },
  { Icon: CheckCircleIcon, title: "Limitations", text: "Volatility and uncertainty shown plainly." },
];

/** Section 4 — Our approach (movement you can trust) */
export default function Approach() {
  return (
    <section className="w-full bg-white">
      <div className="rounded-b-[40px] bg-[#F4F8F8] py-20 lg:rounded-b-[80px] lg:py-[114px]">
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_435px_1fr] lg:gap-11">
            <Reveal>
              <div className="flex flex-col gap-4">
                <Eyebrow>Our approach</Eyebrow>
                <SplitText as="h2" lines={["Movement you", "can trust"]} className={H2} />
                <p className="text-base leading-[25.6px] text-[#51696B]">
                  ZoiQuest shows the context behind every position observation —
                  so you act on evidence, not a lone number.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <Link
                href="#how-it-works"
                className="group relative block h-[420px] overflow-hidden rounded-[18px] sm:h-[494px]"
              >
                <Image
                  src="/images/rank-tracking/approach-team-meeting.webp"
                  alt="Team reviewing position observations around a meeting table"
                  fill
                  sizes="(max-width: 1024px) 100vw, 435px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#07282C]/70 to-transparent"
                />
                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-[15px] font-semibold">From movement to evidence</p>
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
      </div>
    </section>
  );
}
