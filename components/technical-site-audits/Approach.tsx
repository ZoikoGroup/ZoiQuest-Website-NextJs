import Image from "next/image";
import Link from "next/link";
import { Reveal, SplitText } from "@/components/home";
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, EvidenceIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow } from "@/components/rank-tracking/ui";
import { LockIcon } from "./icons";

const PILLARS = [
  { Icon: EvidenceIcon, title: "Provenance", text: "Source, method and conditions on every finding." },
  { Icon: ClockIcon, title: "Freshness", text: "Collection age and lab-vs-field disclosed." },
  { Icon: CheckCircleIcon, title: "Certainty", text: "Observed, inferred or unknown — never blurred." },
  { Icon: LockIcon, title: "Authorization", text: "Only consented scope is ever fetched." },
];

/** Section 6 — Our approach (evidence you can examine) */
export default function Approach() {
  return (
    <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-10 rounded-[24px] bg-white p-6 sm:p-10 lg:grid-cols-[1fr_396px_1fr] lg:gap-11 lg:px-[52px] lg:py-[52px]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <Eyebrow>Our approach</Eyebrow>
              <SplitText
                as="h2"
                lines={["Evidence you can", "examine"]}
                className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-[40px] sm:leading-[44px]"
              />
              <p className="text-base leading-[25.6px] text-[#51696B]">
                Every finding is designed to show its basis — what was observed,
                how, and how certain it is.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Link
              href="#how-it-works"
              className="group relative block h-[420px] overflow-hidden rounded-[18px] sm:h-[494px]"
            >
              <Image
                src="/images/technical-site-audits/approach-evidence-screen.webp"
                alt="Monitor showing detailed measurement charts"
                fill
                sizes="(max-width: 1024px) 100vw, 396px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#07282C]/80 to-transparent"
              />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-[15px] font-semibold">From finding to evidence</p>
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
