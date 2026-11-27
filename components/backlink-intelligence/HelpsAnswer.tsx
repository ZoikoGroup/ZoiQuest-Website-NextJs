import { ImageCardSection } from "@/components/ai-visibility/parts";
import { PulseIcon, ShieldCheckIcon } from "@/components/rank-tracking/icons";
import { LayersIcon, LinkIcon } from "@/components/technical-site-audits/icons";

const D = "/images/backlink-intelligence/";

/** Section 3 — What it helps you answer (who links to you — and how) */
export default function HelpsAnswer() {
  return (
    <ImageCardSection
      bg="tint"
      eyebrow="What it helps you answer"
      title="Who links to you — and how"
      items={[
        { Icon: LinkIcon, title: "Who links to you?", text: "See observed referring pages and domains, in context.", image: `${D}helps-who-links.webp`, alt: "Woman with digital data projected onto her face" },
        { Icon: LayersIcon, title: "What kind of links?", text: "Distinguish follow, nofollow, sponsored and UGC.", image: `${D}helps-kind-of-links.webp`, alt: "Person browsing a website on a phone beside a laptop" },
        { Icon: PulseIcon, title: "How has it changed?", text: "Watch discovery over time, with coverage caveats.", image: `${D}helps-how-changed.webp`, alt: "Two people looking at a glowing AI visual" },
        { Icon: ShieldCheckIcon, title: "Which links need review?", text: "Surface unusual patterns for a human to judge.", image: `${D}helps-links-need-review.webp`, alt: "Hands pointing at a brain visual on a monitor" },
      ]}
    />
  );
}
