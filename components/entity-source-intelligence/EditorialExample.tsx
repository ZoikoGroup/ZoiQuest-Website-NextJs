import Image from "next/image";
import { Reveal } from "@/components/home";
import { MessageIcon } from "@/components/ai-visibility/icons";
import { SectionHeader } from "@/components/ai-visibility/parts";
import { CompareIcon, GlobeIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { NewspaperIcon } from "./icons";

const ROWS = [
  { Icon: MessageIcon, label: "alias: Your Brand Inc." },
  { Icon: GlobeIcon, label: "yourbrand.example" },
  { Icon: NewspaperIcon, label: "publisher: Example Media" },
  { Icon: CompareIcon, label: "YourBrand (other industry)?", flag: "Possibly different" },
];

/** Section 6 — An editorial example (what a resolution looks like) */
export default function EditorialExample() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="An editorial example"
          title="What a resolution looks like"
          intro="A synthetic illustration — no real graph, counts or match percentages."
        />

        <div className="mt-12 grid grid-cols-1 items-center gap-10 lg:mt-16 lg:grid-cols-[592px_1fr] lg:gap-14">
          <Reveal>
            <div className="relative h-[300px] overflow-hidden rounded-[18px] sm:h-[444px]">
              <Image
                src="/images/entity-source-intelligence/editorial-example-team-circle.webp"
                alt="Team sitting in a circle discussing in an office"
                fill
                sizes="(max-width: 1024px) 100vw, 592px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-[18px] border border-[#DCE8E8] bg-white">
              <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DCE8E8] bg-[#F4F8F8] px-5 py-5">
                <span className="text-base text-[#0C2E30]">
                  Candidate: <strong className="font-semibold text-[#10535A]">YourBrand</strong>
                </span>
                <span className="text-xs text-[#466B6F]">Illustrative · resolution uncertain</span>
              </figcaption>
              <ul>
                {ROWS.map(({ Icon, label, flag }, i) => (
                  <li
                    key={label}
                    className={`flex items-center gap-3.5 px-5 py-4 ${i > 0 ? "border-t border-[#E6EFEF]" : ""}`}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#E3F5F3] text-[#10535A]">
                      <Icon className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[15px] text-[#0C2E30]">{label}</span>
                    {flag && (
                      <span className="shrink-0 rounded-full border border-[#DCE8E8] bg-[#F4F8F8] px-3 py-1 text-xs font-semibold text-[#2F4F52]">
                        {flag}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
