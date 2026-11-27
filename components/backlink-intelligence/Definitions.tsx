import { Reveal } from "@/components/home";
import { SectionHeader } from "@/components/ai-visibility/parts";
import { CompareIcon, GlobeIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { LinkIcon } from "@/components/technical-site-audits/icons";

const TERMS = [
  {
    Icon: LinkIcon,
    title: "What is a backlink?",
    text: "An observed hyperlink on a source page that points to a destination. A mention, redirect or citation is not automatically a verified backlink.",
  },
  {
    Icon: GlobeIcon,
    title: "What is a referring domain?",
    text: "A single domain that links to you — possibly many times. Many links from one domain still count as one referring domain.",
  },
  {
    Icon: CompareIcon,
    title: "Do all links count equally?",
    text: "No. Links differ by attribute, context, relevance and provenance — value is interpreted, never a single fixed number.",
  },
];

/** Section 2 — Start with the words (backlink, referring domain, link value) */
export default function Definitions() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Start with the words"
          title="Backlink, referring domain, and link value"
          intro="Three definitions worth getting right before any analysis."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16">
          {TERMS.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full rounded-[18px] border border-[#DCE8E8] bg-white px-7 py-8">
                <Icon className="size-6 text-[#00B3A4]" />
                <h3 className="mt-5 text-lg font-semibold text-[#0C2E30]">{title}</h3>
                <p className="mt-2 text-[15px] leading-6 text-[#466B6F]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
