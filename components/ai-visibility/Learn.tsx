import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/home";
import { ArrowRightIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { SectionHeader } from "./parts";

const D = "/images/ai-visibility/";

const RESOURCES = [
  {
    tag: "AEO",
    title: "The AEO guide",
    text: "How answer engines pick sources and shape replies.",
    cta: "Read the guide",
    href: "/#aeo-guide",
    image: `${D}resource-aeo-guide.webp`,
    alt: "Speaker presenting in front of an AI-themed screen",
  },
  {
    tag: "GEO",
    title: "The GEO guide",
    text: "Evidence-led discoverability across generative engines.",
    cta: "Read the guide",
    href: "/#geo-guide",
    image: `${D}resource-geo-guide.webp`,
    alt: "Presenter on stage beside a glowing AI chip graphic",
  },
  {
    tag: "Glossary",
    title: "AI search glossary",
    text: "Mentions, citations, references and more, defined.",
    cta: "Open the glossary",
    href: "/#ai-search-glossary",
    image: `${D}resource-ai-search-glossary.webp`,
    alt: "Hand holding a tablet with a holographic AI symbol above it",
  },
];

/** Section 15 — Learn (understand AEO & GEO) */
export default function Learn() {
  return (
    <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Learn"
          title="Understand AEO & GEO"
          intro="Original, dated and attributed — written to teach, not to chase keywords."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {RESOURCES.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <Link
                href={r.href}
                className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#DCE8E8] bg-white transition-shadow hover:shadow-[0_18px_40px_-20px_rgba(7,40,44,0.3)]"
              >
                <div className="relative h-[224px] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 397px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-[#0B3B40]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.5px] text-white">
                    {r.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
                  <h3 className="text-lg font-semibold text-[#0C2E30]">{r.title}</h3>
                  <p className="mt-2.5 text-[15px] leading-6 text-[#51696B]">{r.text}</p>
                  <span className="mt-auto flex items-center gap-2 pt-5 text-base font-semibold text-[#0A6B66]">
                    {r.cta}
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
