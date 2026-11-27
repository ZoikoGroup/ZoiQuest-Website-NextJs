import { ImageCardSection } from "@/components/ai-visibility/parts";
import { CompareIcon } from "@/components/rank-tracking/icons";
import { DatabaseIcon, LayersIcon, RouteIcon } from "@/components/technical-site-audits/icons";

const D = "/images/entity-source-intelligence/";

/** Section 3 — What it helps you answer (who, and from where) */
export default function HelpsAnswer() {
  return (
    <ImageCardSection
      bg="tint"
      eyebrow="What it helps you answer"
      title="Who, and from where"
      items={[
        { Icon: RouteIcon, title: "Who is this entity?", text: "Resolve identity beyond a matching name.", image: `${D}helps-who-is-this-entity.webp`, alt: "Two colleagues working at desks in an office" },
        { Icon: LayersIcon, title: "What names & domains?", text: "See aliases and domains, without inferring ownership.", image: `${D}helps-names-and-domains.webp`, alt: "Abstract binary background with the text http://" },
        { Icon: DatabaseIcon, title: "Which sources inform it?", text: "See referenced sources, where a surface exposes them.", image: `${D}helps-which-sources.webp`, alt: "Abstract binary background with the word Information" },
        { Icon: CompareIcon, title: "Same, or different?", text: "Check whether two candidates are really one entity.", image: `${D}helps-same-or-different.webp`, alt: "Wooden blocks printed with question marks" },
      ]}
    />
  );
}
