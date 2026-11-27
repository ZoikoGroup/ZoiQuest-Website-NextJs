import Link from "next/link";
import { SplitText } from "@/components/home";
import { EvidenceIcon, PlayIcon } from "@/components/rank-tracking/icons";
import { PrimaryButton } from "@/components/rank-tracking/ui";
import { DatabaseIcon, ListOrderedIcon, ScanIcon } from "./icons";
import { SEVERITY } from "./data";

const FINDINGS = [
  { area: "Crawl", issue: "Blocked by robots.txt", level: "critical" },
  { area: "Indexing", issue: "noindex on key page", level: "high" },
  { area: "Performance", issue: "Slow LCP (field)", level: "medium" },
  { area: "Structure", issue: "Redirect chain", level: "low" },
  { area: "Duplication", issue: "Soft-404 candidate", level: "none" },
] as const;

const FEATURES = [
  { Icon: ScanIcon, title: "Crawl access", text: "Can permitted resources be retrieved?" },
  { Icon: DatabaseIcon, title: "Indexing signals", text: "Observable directives, not verdicts." },
  { Icon: ListOrderedIcon, title: "Prioritized issues", text: "Severity by impact, scope and certainty." },
  { Icon: EvidenceIcon, title: "Evidence on every finding", text: "Observed, inferred or unknown — labelled." },
];

/** Section 1 — Hero (crawl health + synthetic site-audit card) */
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
              Search intelligence
            </p>

            <SplitText
              as="h1"
              immediate
              lines={["See your site's", "crawl health — and", "what to fix first."]}
              className="text-4xl font-bold leading-[1.04] tracking-[-0.025em] text-[#0C3E42] sm:text-6xl lg:text-[72px] lg:leading-[76px]"
            />

            <p
              className="animate-zq-fade-up max-w-[580px] text-lg leading-7 text-[#1E4447] sm:text-[20px] sm:leading-[32px]"
              style={{ animationDelay: "260ms" }}
            >
              Understand crawl access, indexing signals, site structure and
              prioritized issues — with evidence you can examine, and limits
              made clear.
            </p>

            <div
              className="animate-zq-fade-up flex flex-wrap items-center gap-3.5 pt-3"
              style={{ animationDelay: "380ms" }}
            >
              <PrimaryButton href="/#platform">Explore the platform</PrimaryButton>
              <Link
                href="/#book-demo"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#DCE8E8] bg-white/50 px-6 py-3.5 text-base font-semibold leading-[25.6px] text-[#0C2E30] transition-colors hover:border-[#00C8B8] hover:bg-white"
              >
                Book a demo
                <PlayIcon className="size-[18px]" />
              </Link>
            </div>
          </div>

          {/* Synthetic audit card */}
          <div
            className="animate-zq-fade-up rounded-[24px] bg-[#0B3B40] p-4 shadow-[0_30px_60px_-24px_rgba(7,40,44,0.45)] sm:p-6"
            style={{ animationDelay: "200ms" }}
          >
            <div className="rounded-[16px] bg-white p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold text-[#0C2E30]">Site audit</p>
                <span className="rounded-full bg-[#E3F5F3] px-3.5 py-1 text-xs font-semibold text-[#0C2E30]">
                  synthetic
                </span>
              </div>

              <ul className="mt-3 flex flex-col gap-1.5">
                {FINDINGS.map((f) => {
                  const sev = SEVERITY[f.level];
                  return (
                    <li
                      key={f.area}
                      className="flex items-center justify-between gap-3 rounded-lg border border-[#E6EFEF] py-1.5 pl-0 pr-3"
                    >
                      <div className="flex items-stretch gap-4">
                        <span className="w-1 self-stretch rounded-full" style={{ backgroundColor: sev.color }} />
                        <div className="py-0.5">
                          <p className="text-[11px] text-[#466B6F]">{f.area}</p>
                          <p className="text-[13px] font-semibold text-[#0C2E30]">{f.issue}</p>
                        </div>
                      </div>
                      <span
                        className="shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                        style={{ color: sev.text, borderColor: sev.border, backgroundColor: sev.bg }}
                      >
                        {sev.label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3 rounded-lg border border-[#E6EFEF] bg-[#F4F8F8] p-3">
                <p className="text-xs font-semibold text-[#0C2E30]">Finding types</p>
                <div className="mt-2 grid grid-cols-4 gap-2">
                  {["Observed", "Inferred", "Verdict", "Unknown"].map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[#DCE8E8] bg-white py-1 text-center text-[11px] text-[#466B6F]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
