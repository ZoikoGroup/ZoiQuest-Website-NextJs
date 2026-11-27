import type { Metadata } from "next";
import {
  Alignment,
  Audience,
  Capabilities,
  Cta,
  EvidenceBanner,
  Faq,
  FirstPrinciple,
  HelpsAnswer,
  Hero,
  HowMeasured,
  Independent,
  Misreadings,
  Signals,
} from "@/components/competitor-benchmarking";

export const metadata: Metadata = {
  title: "Competitor Benchmarking | ZoiQuest Market & Authority",
  description:
    "Compare competitors with context. Learn how search and AI-discovery signals can be compared fairly across brands, markets and time — with source methods and uncertainty in view.",
};

export default function CompetitorBenchmarkingPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      {/* Section 1 — Hero */}
      <Hero />
      {/* Section 2 — A cohort is a selection, not a verdict */}
      <FirstPrinciple />
      {/* Section 3 — Where do we stand — fairly? */}
      <HelpsAnswer />
      {/* Section 4 — Six things that must align */}
      <Alignment />
      {/* Section 5 — Define, align, observe, compare, interpret */}
      <HowMeasured />
      {/* Section 6 — What goes side by side */}
      <Signals />
      {/* Section 7 — What a benchmark can't prove */}
      <Misreadings />
      {/* Section 8 — A fair comparison beats a flattering one */}
      <EvidenceBanner />
      {/* Section 9 — One capability, different jobs */}
      <Audience />
      {/* Section 10 — Benchmarking is not share of voice */}
      <Capabilities />
      {/* Section 11 — Compare here. Act separately. */}
      <Independent />
      {/* Section 12 — Competitor benchmarking FAQ */}
      <Faq />
      {/* Section 13 — Ready to compare — fairly? */}
      <Cta />
    </div>
  );
}
