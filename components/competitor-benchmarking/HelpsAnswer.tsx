import { SparklesIcon } from "@/components/ai-visibility/icons";
import { ImageCardSection } from "@/components/ai-visibility/parts";
import { CompareIcon, PulseIcon } from "@/components/rank-tracking/icons";
import { TrendUpIcon } from "./icons";

const D = "/images/competitor-benchmarking/";

/** Section 3 — What it helps you answer (where do we stand — fairly?) */
export default function HelpsAnswer() {
  return (
    <ImageCardSection
      bg="tint"
      eyebrow="What it helps you answer"
      title="Where do we stand — fairly?"
      items={[
        { Icon: TrendUpIcon, title: "How do we compare on visibility?", text: "See search presence side by side, in context.", image: `${D}helps-visibility.webp`, alt: "Two colleagues discussing charts on a board" },
        { Icon: SparklesIcon, title: "On AI discovery?", text: "Compare observed answer presence, where measurable.", image: `${D}helps-ai-discovery.webp`, alt: "Engineer pointing at a large screen with a glowing sphere" },
        { Icon: PulseIcon, title: "On market demand?", text: "Relate interest across the cohort, with limits.", image: `${D}helps-demand.webp`, alt: "Presenters in front of an AI brain visual" },
        { Icon: CompareIcon, title: "Who belongs in the cohort?", text: "Scope a fair, defensible comparison set.", image: `${D}helps-right-cohort.webp`, alt: "Group of colleagues seated together in a data room" },
      ]}
    />
  );
}
