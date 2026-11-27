import Image from "next/image";
import Link from "next/link";
import { SplitText } from "@/components/home";
import { MessageIcon } from "@/components/ai-visibility/icons";
import { ArrowRightIcon, GlobeIcon, PlayIcon } from "@/components/rank-tracking/icons";
import { LayersIcon, LockIcon } from "@/components/technical-site-audits/icons";

const SAMPLE_QUESTIONS = [
  { q: "how do I choose running shoes", intent: "Informational" },
  { q: "best running shoes for flat feet", intent: "Commercial" },
  { q: "brand A vs brand B shoes", intent: "Comparison" },
];

const FEATURES = [
  { Icon: MessageIcon, title: "Question intent", text: "What a formulation is really after." },
  { Icon: LayersIcon, title: "Prompt variants", text: "Different wordings of the same need." },
  { Icon: GlobeIcon, title: "Context, kept separate", text: "Market, language and surface distinct." },
  { Icon: LockIcon, title: "Hypothesis, not demand", text: "Nothing framed as measured volume." },
];

/** Section 1 — Hero (research the questions shaping AI discovery) */
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-[40px] bg-[#EAF4F3] lg:rounded-b-[80px]">
      <div
        aria-hidden="true"
        className="animate-zq-drift pointer-events-none absolute -right-40 -top-40 size-[560px] rounded-full bg-[#00C8B8]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-16 sm:px-10 sm:pt-20 lg:px-[100px] lg:pb-[72px] lg:pt-[120px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_500px] lg:gap-16">
          <div className="flex flex-col items-start gap-5">
            <p className="animate-zq-fade-up text-[13px] font-semibold uppercase leading-[20.8px] tracking-[1.56px] text-[#00B3A4]">
              AI discovery
            </p>
            <SplitText
              as="h1"
              immediate
              lines={["Research the", "questions shaping", "AI discovery."]}
              className="text-4xl font-bold leading-[1.04] tracking-[-0.025em] text-[#0C3E42] sm:text-6xl lg:text-[72px] lg:leading-[76px]"
            />
            <p
              className="animate-zq-fade-up max-w-[560px] text-lg leading-7 text-[#1E4447] sm:text-[20px] sm:leading-[32px]"
              style={{ animationDelay: "260ms" }}
            >
              Explore question intent, alternative wording and research context
              — to understand what&apos;s worth investigating across search and
              AI experiences.
            </p>
            <div
              className="animate-zq-fade-up flex flex-wrap items-center gap-3.5 pt-3"
              style={{ animationDelay: "380ms" }}
            >
              <Link
                href="/#book-demo"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#00C8B8] px-6 py-3.5 text-base font-semibold leading-[25.6px] text-[#07332F] transition-colors hover:bg-[#19DAC9]"
              >
                Book a demo
                <PlayIcon className="size-[18px]" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#0C2E30] px-6 py-3.5 text-base font-semibold leading-[25.6px] text-[#0C2E30] transition-colors hover:bg-white"
              >
                How prompt research works
                <ArrowRightIcon className="size-[18px]" />
              </Link>
            </div>
          </div>

          {/* Photo with synthetic question overlay */}
          <div
            className="animate-zq-fade-up relative h-[340px] overflow-hidden rounded-[18px] shadow-[0_30px_60px_-24px_rgba(7,40,44,0.4)] sm:h-[373px]"
            style={{ animationDelay: "200ms" }}
          >
            <Image
              src="/images/prompt-research/hero-question-team.webp"
              alt="Team holding up question-mark signs"
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
            <ul className="absolute inset-x-4 bottom-4 rounded-[12px] bg-[#1F4A4E]/85 px-4 py-1 backdrop-blur-sm">
              {SAMPLE_QUESTIONS.map((s, i) => (
                <li
                  key={s.q}
                  className={`flex items-center justify-between gap-3 py-2.5 text-xs text-white sm:text-[13px] ${
                    i > 0 ? "border-t border-white/10" : ""
                  }`}
                >
                  <span className="truncate">{s.q}</span>
                  <span className="shrink-0 rounded-full bg-[#00C8B8]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[#8FE0D6]">
                    {s.intent}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {FEATURES.map(({ Icon, title, text }) => (
            <li key={title} className="flex items-start gap-3">
              <Icon className="mt-0.5 size-[22px] shrink-0 text-[#00B3A4]" />
              <div>
                <p className="text-[15px] font-semibold leading-6 text-[#0C2E30]">{title}</p>
                <p className="text-[13px] leading-5 text-[#466B6F]">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
