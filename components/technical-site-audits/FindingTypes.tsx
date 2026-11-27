import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";
import { CheckCircleIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";
import { CompassIcon, LightbulbIcon, SearchIcon } from "./icons";

const STATES = [
  { Icon: CheckCircleIcon, title: "Observed", text: "Directly retrieved evidence under defined conditions." },
  { Icon: LightbulbIcon, title: "Rule-inferred", text: "A reasoned inference with stated uncertainty." },
  { Icon: SearchIcon, title: "Engine verdict", text: "Only when a search engine actually reports it." },
  { Icon: CompassIcon, title: "Unknown", text: "Not assessed — shown plainly, not as a pass." },
];

/** Section 3 — Finding types (four states, never blurred) */
export default function FindingTypes() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col gap-4">
            <Eyebrow>Finding types</Eyebrow>
            <SplitText as="h2" text="Four states, never blurred" className={H2} />
            <p className="max-w-[780px] text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
              A technical finding is not a search engine&apos;s decision.
              ZoiQuest keeps these apart so you don&apos;t over-read a signal.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-[592px_1fr] lg:gap-14">
          <Reveal>
            <div className="relative h-[300px] overflow-hidden rounded-[18px] sm:h-[444px]">
              <Image
                src="/images/technical-site-audits/finding-types-team.webp"
                alt="Team reviewing audit findings together in a meeting room"
                fill
                sizes="(max-width: 1024px) 100vw, 592px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {STATES.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="h-full rounded-[14px] border border-[#DCE8E8] bg-white p-5 transition-colors hover:border-[#9ED3CF]">
                  <div className="flex items-center gap-2.5">
                    <Icon className="size-5 shrink-0 text-[#165258]" />
                    <p className="text-[15px] font-semibold text-[#0C2E30]">{title}</p>
                  </div>
                  <p className="mt-2.5 text-sm leading-[22px] text-[#466B6F]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
