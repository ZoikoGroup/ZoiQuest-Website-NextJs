import type { Metadata } from "next";
import {
  Audience,
  Capabilities,
  ContextDimensions,
  Cta,
  EditorialExample,
  EvidenceBanner,
  Faq,
  FirstPrinciple,
  HelpsAnswer,
  Hero,
  HowItWorks,
  Independent,
  Misreadings,
} from "@/components/prompt-research";

export const metadata: Metadata = {
  title: "Prompt Research | ZoiQuest AI Discovery",
  description:
    "Research the questions shaping AI discovery. Explore question intent, alternative wording and research context — to understand what's worth investigating across search and AI experiences.",
};

export default function PromptResearchPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      {/* Section 1 — Hero */}
      <Hero />
      {/* Section 2 — Start from the question, not the keyword */}
      <HelpsAnswer />
      {/* Section 3 — A prompt is a hypothesis, not a headcount */}
      <FirstPrinciple />
      {/* Section 4 — Six independent things to keep distinct */}
      <ContextDimensions />
      {/* Section 5 — Frame, propose, qualify, observe, interpret */}
      <HowItWorks />
      {/* Section 6 — What a question cohort looks like */}
      <EditorialExample />
      {/* Section 7 — What prompt research isn't */}
      <Misreadings />
      {/* Section 8 — A good question is a hypothesis, not a headcount */}
      <EvidenceBanner />
      {/* Section 9 — Prompt research is not keyword research */}
      <Capabilities />
      {/* Section 10 — One capability, different jobs */}
      <Audience />
      {/* Section 11 — Research here. Act separately. */}
      <Independent />
      {/* Section 12 — Prompt research FAQ */}
      <Faq />
      {/* Section 13 — Ready to research the right questions? */}
      <Cta />
    </div>
  );
}
