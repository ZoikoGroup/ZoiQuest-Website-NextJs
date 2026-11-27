import { Reveal, SplitText } from "@/components/home";
import { EvidenceIcon, GlobeIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow } from "@/components/rank-tracking/ui";
import { BadgeCheckIcon, LayersIcon } from "@/components/technical-site-audits/icons";
import { SparklesIcon } from "./icons";

const STEPS = [
  { Icon: GlobeIcon, title: "Define context", text: "Question, market, language and surface are fixed first." },
  { Icon: SparklesIcon, title: "Observe sample", text: "Rights-qualified samples, not every model or moment." },
  { Icon: LayersIcon, title: "Classify", text: "Mention, citation, absence — kept distinct." },
  { Icon: EvidenceIcon, title: "Review evidence", text: "Provenance, coverage and volatility examined." },
  { Icon: BadgeCheckIcon, title: "Decide responsibly", text: "Human review; no guaranteed placement." },
];

/** Section 6 — How it's measured (dark) */
export default function HowMeasured() {
  return (
    <section id="how-its-measured" className="w-full scroll-mt-24 bg-[#07282C] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col gap-4">
            <Eyebrow tone="dark">How it&apos;s measured</Eyebrow>
            <SplitText
              as="h2"
              text="Define, observe, classify, review, decide"
              className="text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-white sm:text-5xl sm:leading-[51.84px]"
            />
            <p className="max-w-[790px] text-lg leading-7 text-[#B8D6D3] sm:text-[20px] sm:leading-[32px]">
              Answer presence is observed from defined samples — never implied
              as universal or real-time.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {STEPS.map(({ Icon, title, text }, i) => (
            <li key={title} className="relative">
              <Reveal delay={i * 90} className="h-full">
                <div className="h-full rounded-[16px] border border-white/10 bg-white/[0.05] p-5 transition-colors hover:border-[#00C8B8]/40">
                  <div className="flex items-start justify-between">
                    <span className="flex size-[42px] items-center justify-center rounded-[10px] bg-[#0E4A4F] text-[#00C8B8]">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs font-semibold text-white/50">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="mt-4 text-base font-semibold text-white">{title}</p>
                  <p className="mt-1 text-[13px] leading-[21px] text-[#B8D6D3]">{text}</p>
                </div>
              </Reveal>
              {i < STEPS.length - 1 && (
                <span aria-hidden="true" className="absolute -right-4 top-1/2 hidden h-px w-4 bg-white/15 lg:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
