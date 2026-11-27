import Image from "next/image";
import Link from "next/link";
import { SplitText } from "@/components/home";
import { ArrowRightIcon, EvidenceIcon, PlayIcon } from "@/components/rank-tracking/icons";
import { LayersIcon, LinkIcon, ScanIcon } from "@/components/technical-site-audits/icons";

const FEATURES = [
  { Icon: LinkIcon, title: "Link discovery", text: "Referring pages pointing to a destination." },
  { Icon: LayersIcon, title: "Attributes, not just totals", text: "Follow, nofollow, sponsored, UGC." },
  { Icon: EvidenceIcon, title: "Source quality in context", text: "Relevance and provenance — no black-box score." },
  { Icon: ScanIcon, title: "Coverage, disclosed", text: "No index sees every link." },
];

/** Section 1 — Hero (understand links, examine the evidence) */
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-b-[40px] bg-[#07282C] lg:rounded-b-[80px]">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ backgroundImage: "linear-gradient(160deg, #07282C 0%, #0A3A40 55%, #0C434A 100%)" }}
      />
      <div
        aria-hidden="true"
        className="animate-zq-drift pointer-events-none absolute -right-32 top-10 size-[520px] rounded-full bg-[#00C8B8]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-14 pt-16 sm:px-10 sm:pt-20 lg:px-[100px] lg:pb-[72px] lg:pt-[120px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_500px] lg:gap-16">
          <div className="flex flex-col items-start gap-5">
            <p className="animate-zq-fade-up text-[13px] font-semibold uppercase leading-[20.8px] tracking-[1.56px] text-[#8FE0D6]">
              Search intelligence
            </p>
            <SplitText
              as="h1"
              immediate
              lines={["Understand links.", "Examine the", "evidence."]}
              className="text-4xl font-bold leading-[1.04] tracking-[-0.025em] text-white sm:text-6xl lg:text-[72px] lg:leading-[74px]"
            />
            <p
              className="animate-zq-fade-up max-w-[560px] text-lg leading-7 text-[#CFE7E4] sm:text-[20px] sm:leading-[32px]"
              style={{ animationDelay: "260ms" }}
            >
              Explore how referring pages, link attributes and observation
              context inform responsible backlink research — without reducing
              source quality to an unexplained score.
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

          <div
            className="animate-zq-fade-up rounded-[24px] border border-white/10 bg-white/[0.05] p-4 sm:p-6"
            style={{ animationDelay: "200ms" }}
          >
            <div className="relative h-[320px] overflow-hidden rounded-[16px] sm:h-[391px]">
              <Image
                src="/images/backlink-intelligence/hero-analysts-code-screen.webp"
                alt="Two analysts reviewing code on a large screen"
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>
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
