import { GlobeIcon, ShieldCheckIcon } from "@/components/rank-tracking/icons";
import { QuoteIcon, SparklesIcon } from "./icons";
import { ImageCardSection } from "./parts";

const D = "/images/ai-visibility/";

/** Section 3 — Use cases (what teams do with it) */
export default function UseCases() {
  return (
    <ImageCardSection
      bg="tint"
      eyebrow="Use cases"
      title="What teams do with it"
      items={[
        { Icon: QuoteIcon, title: "Find missing citations", text: "Spot where you're mentioned but not cited as a source.", image: `${D}use-case-missing-citations.webp`, alt: "Hands typing on a laptop" },
        { Icon: SparklesIcon, title: "Track brand mentions", text: "Follow sampled presence across answers and contexts.", image: `${D}use-case-brand-mentions.webp`, alt: "Large open-plan office full of people at desks" },
        { Icon: GlobeIcon, title: "Compare across markets", text: "See how presence differs by locale — comparably.", image: `${D}use-case-compare-markets.webp`, alt: "Wooden world map on a wall" },
        { Icon: ShieldCheckIcon, title: "Monitor accuracy", text: "Catch wrong or inconsistent answers for human review.", image: `${D}use-case-answer-accuracy.webp`, alt: "Laptop showing analytics charts" },
      ]}
    />
  );
}
