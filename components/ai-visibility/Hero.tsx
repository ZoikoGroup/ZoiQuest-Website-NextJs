import Image from "next/image";
import Link from "next/link";
import { SplitText } from "@/components/home";
import { ArrowRightIcon, EvidenceIcon, PlayIcon, PulseIcon } from "@/components/rank-tracking/icons";
import { QuoteIcon, SparklesIcon, StarBurstIcon } from "./icons";

const FEATURES = [
  { Icon: SparklesIcon, title: "Answer presence", text: "Whether you appear — mention or citation." },
  { Icon: QuoteIcon, title: "Mentions vs citations", text: "Kept conceptually distinct, always." },
  { Icon: PulseIcon, title: "Change over time", text: "Observed from samples, with volatility shown." },
  { Icon: EvidenceIcon, title: "Evidence on every sample", text: "Surface, market, time and rights explicit." },
];

const PRESENCE = [
  { label: "Mention", color: "#1E7A5C" },
  { label: "Citation", color: "#10535A" },
  { label: "Absent", color: "#9ED3CF" },
];

function Ref({ n }: { n: number }) {
  return (
    <span className="inline-flex size-4 items-center justify-center rounded-full bg-[#10535A] text-[9px] font-semibold text-white">
      {n}
    </span>
  );
}

function AnswerCard() {
  return (
    <div className="rounded-[24px] border border-white/15 bg-white/[0.06] p-4 backdrop-blur-sm sm:p-6">
      <div className="rounded-[16px] bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-[#0C2E30]">AI answer</p>
          <span className="rounded-full bg-[#E3F5F3] px-3 py-1 text-xs font-semibold text-[#0C2E30]">
            illustrative
          </span>
        </div>

        <div className="mt-3 rounded-xl border border-[#E6EFEF] bg-[#F7FAFA] p-4">
          <p className="flex items-center gap-2 text-xs font-semibold text-[#0C2E30]">
            <StarBurstIcon className="size-5 text-[#00C8B8]" />
            Answer
          </p>
          <p className="mt-2 text-[13px] text-[#2F4F52]">Based on available</p>
          <p className="mt-1 flex flex-wrap items-center gap-2 text-[13px] text-[#2F4F52]">
            <span className="rounded bg-[#D7F1EE] px-2 py-0.5 font-semibold text-[#0C2E30]">YourBrand</span>
            is referenced for X <Ref n={1} />
          </p>
          <div aria-hidden="true" className="mt-4 flex flex-col gap-2">
            <span className="h-1.5 w-full rounded-full bg-[#DCE8E8]" />
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-[86%] rounded-full bg-[#DCE8E8]" />
              <Ref n={2} />
            </span>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-[#E6EFEF] px-4 py-3">
          <p className="text-xs font-semibold text-[#0C2E30]">Sources</p>
          {["source-a.example", "source-b.example"].map((s, i) => (
            <p key={s} className="mt-1 flex items-center justify-between text-[11px] text-[#10535A]">
              <span className="flex items-center gap-2">
                <span className="size-2.5 rounded-full border-[1.5px] border-[#10535A]" />
                {s}
              </span>
              <span className="text-[#466B6F]">[{i + 1}]</span>
            </p>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-2 rounded-xl border border-[#E6EFEF] px-4 py-3">
          <p className="text-xs font-semibold text-[#0C2E30]">Presence</p>
          {PRESENCE.map((p) => (
            <span key={p.label} className="flex items-center gap-2 text-xs text-[#466B6F]">
              <span className="size-2.5 rounded-full" style={{ backgroundColor: p.color }} />
              {p.label}
            </span>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-[#E6EFEF] bg-[#F7FAFA] px-4 py-3">
          <p className="text-[11px] font-semibold text-[#B5524F]">
            Illustrative observation — not actual AI output
          </p>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {["Surface", "Market", "Sample", "Rights"].map((t) => (
              <span key={t} className="rounded-md border border-[#DCE8E8] bg-white px-2 py-1 text-[11px] text-[#466B6F]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Section 1 — Hero (where your brand appears in AI answers) */
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-[40px] bg-[#07282C] lg:rounded-b-[80px]">
      <Image
        src="/images/ai-visibility/hero-team-background.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0A3A40]/80" />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-16 sm:px-10 sm:pt-20 lg:px-[100px] lg:pb-[72px] lg:pt-[140px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_500px] lg:gap-16">
          <div className="flex flex-col items-start gap-5">
            <p className="animate-zq-fade-up text-[13px] font-semibold uppercase leading-[20.8px] tracking-[1.56px] text-[#8FE0D6]">
              Search intelligence
            </p>
            <SplitText
              as="h1"
              immediate
              lines={["Understand where", "your brand appears", "in AI answers."]}
              className="text-4xl font-bold leading-[1.04] tracking-[-0.025em] text-white sm:text-6xl lg:text-[72px] lg:leading-[74px]"
            />
            <p
              className="animate-zq-fade-up max-w-[540px] text-lg leading-7 text-[#CFE7E4] sm:text-[20px] sm:leading-[32px]"
              style={{ animationDelay: "260ms" }}
            >
              Explore how mentions, answer references and question context can
              be examined — using defined samples, provenance and
              coverage-aware interpretation.
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
                href="#how-its-measured"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/12 px-6 py-3.5 text-base font-semibold leading-[25.6px] text-white backdrop-blur-[4px] transition-colors hover:bg-white/20"
              >
                How it&apos;s measured
                <ArrowRightIcon className="size-[18px]" />
              </Link>
            </div>
          </div>

          <div className="animate-zq-fade-up" style={{ animationDelay: "200ms" }}>
            <AnswerCard />
          </div>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {FEATURES.map(({ Icon, title, text }) => (
            <li key={title} className="flex items-start gap-3">
              <Icon className="mt-0.5 size-[22px] shrink-0 text-[#00C8B8]" />
              <div>
                <p className="text-[15px] font-semibold leading-6 text-white">{title}</p>
                <p className="text-[13px] leading-5 text-[#B8D6D3]">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
