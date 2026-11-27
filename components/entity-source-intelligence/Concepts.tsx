import { Reveal } from "@/components/home";
import { MessageIcon, QuoteIcon } from "@/components/ai-visibility/icons";
import { IconCard, SectionHeader } from "@/components/ai-visibility/parts";
import { EvidenceIcon, GlobeIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { RouteIcon } from "@/components/technical-site-audits/icons";
import { NewspaperIcon } from "./icons";

const CONCEPTS = [
  { Icon: RouteIcon, title: "Entity identity", text: "The thing itself — resolved, with uncertainty shown." },
  { Icon: MessageIcon, title: "Name & alias", text: "Labels that may be shared across different entities." },
  { Icon: GlobeIcon, title: "Domain", text: "A web domain — not proof of who owns an entity." },
  { Icon: NewspaperIcon, title: "Publisher", text: "Who published a source — distinct from the entity." },
  { Icon: QuoteIcon, title: "Citation", text: "An attributed reference — not ownership or authority." },
  { Icon: EvidenceIcon, title: "Source document", text: "A specific document, with its own provenance." },
];

/** Section 2 — Different things, often confused (six concepts, kept distinct) */
export default function Concepts() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Different things, often confused"
          title="Six concepts, kept distinct"
          intro="Shared spellings or links aren't enough to assert identity, ownership or authority — so these are never merged."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {CONCEPTS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 70}>
              <IconCard {...c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
