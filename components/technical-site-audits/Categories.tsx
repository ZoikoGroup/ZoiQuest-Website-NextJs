import { Reveal, SplitText } from "@/components/home";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";
import { DatabaseIcon, GaugeIcon, GridIcon, LayersIcon, LinkIcon, LockIcon, RouteIcon, ScanIcon } from "./icons";

const CATEGORIES = [
  { Icon: ScanIcon, title: "Crawl accessibility", text: "Whether a defined request can retrieve permitted resources." },
  { Icon: DatabaseIcon, title: "Indexability signals", text: "Observable directives and conditions — not a confirmed index state." },
  { Icon: LinkIcon, title: "Canonical hints", text: "Declared preferred-URL relationships and potential conflicts." },
  { Icon: GridIcon, title: "Rendering", text: "Content and links available after a defined rendering strategy." },
  { Icon: RouteIcon, title: "Site architecture", text: "Links, redirects and sitemaps observable in scope." },
  { Icon: GaugeIcon, title: "Performance", text: "Lab or field measurements, with provenance and context." },
  { Icon: LockIcon, title: "Security-facing config", text: "HTTPS, mixed content and redirect chains — not a pen test." },
  { Icon: LayersIcon, title: "Content & duplication", text: "Soft-404 and duplicate-template candidates to confirm manually." },
];

/** Section 2 — What an audit reveals (eight categories) */
export default function Categories() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col gap-4">
            <Eyebrow>What an audit reveals</Eyebrow>
            <SplitText as="h2" text="Eight categories, one evidence model" className={H2} />
            <p className="max-w-[780px] text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
              Each category is observed under defined conditions — results vary
              by access, rendering and source, and none imply a guaranteed
              ranking effect.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-4">
          {CATEGORIES.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 70}>
              <div className="h-full rounded-[14px] border border-[#DCE8E8] bg-white px-5 py-5 transition-colors hover:border-[#9ED3CF]">
                <div className="flex items-center gap-2.5">
                  <Icon className="size-5 shrink-0 text-[#165258]" />
                  <p className="text-[15px] font-semibold text-[#0C2E30]">{title}</p>
                </div>
                <p className="mt-2 text-sm leading-[22px] text-[#466B6F]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
