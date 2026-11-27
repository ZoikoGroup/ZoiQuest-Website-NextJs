import type { Metadata } from "next";
import {
  AnswerStates,
  Audience,
  Cta,
  Dimensions,
  EvidenceAnatomy,
  EvidenceBanner,
  Faq,
  Hero,
  HowMeasured,
  Independent,
  InsidePlatform,
  KeyFigures,
  Learn,
  Lineage,
  Locale,
  Presence,
  UseCases,
  Vocabulary,
} from "@/components/ai-visibility";

export const metadata: Metadata = {
  title: "AI Visibility | ZoiQuest Search Intelligence",
  description:
    "Understand where your brand appears in AI answers. Examine mentions, citations and question context using defined samples, provenance and coverage-aware interpretation.",
};

export default function AiVisibilityPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      {/* Section 1 — Hero */}
      <Hero />
      {/* Section 2 — Presence, not a leaderboard */}
      <Presence />
      {/* Section 3 — What teams do with it */}
      <UseCases />
      {/* Section 4 — Six words that aren't the same */}
      <Vocabulary />
      {/* Section 5 — Locale changes interpretation */}
      <Locale />
      {/* Section 6 — Define, observe, classify, review, decide */}
      <HowMeasured />
      {/* Section 7 — Answers can be wrong, absent or inconsistent */}
      <AnswerStates />
      {/* Section 8 — Four dimensions must align */}
      <Dimensions />
      {/* Section 9 — What a sample must carry */}
      <EvidenceAnatomy />
      {/* Section 10 — See presence with its evidence */}
      <InsidePlatform />
      {/* Section 11 — From a question to a reviewed report */}
      <Lineage />
      {/* Section 12 — Key figures (6 concepts, 4 dimensions, 5 states) */}
      <KeyFigures />
      {/* Section 13 — Appearing in an answer is a signal, not a guarantee */}
      <EvidenceBanner />
      {/* Section 14 — One capability, different jobs */}
      <Audience />
      {/* Section 15 — Understand AEO & GEO */}
      <Learn />
      {/* Section 16 — Understand here. Act separately. */}
      <Independent />
      {/* Section 17 — AI visibility FAQ */}
      <Faq />
      {/* Section 18 — Ready to see where you appear in AI answers? */}
      <Cta />
    </div>
  );
}
