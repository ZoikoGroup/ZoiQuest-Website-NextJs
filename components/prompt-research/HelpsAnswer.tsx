import { MessageIcon } from "@/components/ai-visibility/icons";
import { ImageCardSection } from "@/components/ai-visibility/parts";
import { CompassIcon, LayersIcon } from "@/components/technical-site-audits/icons";
import { TargetIcon } from "./icons";

const D = "/images/prompt-research/";

/** Section 2 — What it helps you answer (start from the question) */
export default function HelpsAnswer() {
  return (
    <ImageCardSection
      eyebrow="What it helps you answer"
      title="Start from the question, not the keyword"
      intro="Prompt research helps teams organize potential questions, examine intent and plan evidence-led investigations."
      items={[
        { Icon: MessageIcon, title: "Which questions matter?", text: "Group candidate formulations worth investigating.", image: `${D}helps-which-questions.webp`, alt: "Audience members raising their hands to ask questions" },
        { Icon: TargetIcon, title: "What's the intent?", text: "Tell learn, compare and act apart with context.", image: `${D}helps-intent.webp`, alt: "Hands holding an open report with diagrams" },
        { Icon: LayersIcon, title: "How is it worded?", text: "Explore variants of the same underlying need.", image: `${D}helps-wording.webp`, alt: "Laptop, coffee mug and notepad on a wooden desk" },
        { Icon: CompassIcon, title: "Where to investigate?", text: "Plan what to study, within approved coverage.", image: `${D}helps-where-to-investigate.webp`, alt: "Attendees listening at a conference" },
      ]}
    />
  );
}
