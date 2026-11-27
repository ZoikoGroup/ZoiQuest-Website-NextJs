import { EvidenceIcon, PulseIcon } from "@/components/rank-tracking/icons";
import { QuoteIcon, SparklesIcon } from "./icons";
import { ImageCardSection } from "./parts";

const D = "/images/ai-visibility/";

/** Section 2 — What it helps you answer (presence, not a leaderboard) */
export default function Presence() {
  return (
    <ImageCardSection
      eyebrow="What it helps you answer"
      title="Presence, not a leaderboard"
      intro="AI visibility helps teams understand whether and how a brand shows up in generated answers — from observed samples, with limits in view."
      items={[
        { Icon: SparklesIcon, title: "Do we appear at all?", text: "See observed presence across sampled answers and contexts.", image: `${D}presence-answer-presence.webp`, alt: "Person typing on a laptop at a desk" },
        { Icon: QuoteIcon, title: "Mentioned, cited, or neither?", text: "Tell a passing mention from an actual cited source.", image: `${D}presence-mention-or-citation.webp`, alt: "Hands typing on a laptop keyboard" },
        { Icon: PulseIcon, title: "How does it change?", text: "Watch sampled presence shift, with volatility disclosed.", image: `${D}presence-change-over-time.webp`, alt: "Person working on a laptop beside plants" },
        { Icon: EvidenceIcon, title: "What sources shape it?", text: "See referenced context where a surface exposes it.", image: `${D}presence-sources.webp`, alt: "Hands on a laptop on a bright desk" },
      ]}
    />
  );
}
