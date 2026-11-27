import type { Metadata } from "next";
import {
  Anatomy,
  Attributes,
  Audience,
  Capabilities,
  ChangeOverTime,
  CountRightThing,
  Coverage,
  Cta,
  Definitions,
  EvidenceBanner,
  Faq,
  HelpsAnswer,
  Hero,
  HowMeasured,
  Independent,
  Quality,
  Risk,
} from "@/components/backlink-intelligence";

export const metadata: Metadata = {
  title: "Backlink Intelligence | ZoiQuest Search Intelligence",
  description:
    "Understand links and examine the evidence. Explore referring pages, link attributes and observation context — without reducing source quality to an unexplained score.",
};

export default function BacklinkIntelligencePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      {/* Section 1 — Hero */}
      <Hero />
      {/* Section 2 — Backlink, referring domain, and link value */}
      <Definitions />
      {/* Section 3 — Who links to you — and how */}
      <HelpsAnswer />
      {/* Section 4 — What makes up one backlink */}
      <Anatomy />
      {/* Section 5 — Not all links say the same thing */}
      <Attributes />
      {/* Section 6 — Links and referring domains aren't the same */}
      <CountRightThing />
      {/* Section 7 — Discover, verify, classify, assess, disclose */}
      <HowMeasured />
      {/* Section 8 — No single number tells you a link is "good" */}
      <Quality />
      {/* Section 9 — Discovery is observed, not live */}
      <ChangeOverTime />
      {/* Section 10 — Unusual patterns are flagged, not judged */}
      <Risk />
      {/* Section 11 — What every link observation carries */}
      <Coverage />
      {/* Section 12 — Backlinks is not share of voice */}
      <Capabilities />
      {/* Section 13 — A link is evidence to examine, not a score to trust */}
      <EvidenceBanner />
      {/* Section 14 — One capability, different jobs */}
      <Audience />
      {/* Section 15 — Analyze here. Act separately. */}
      <Independent />
      {/* Section 16 — Backlink intelligence FAQ */}
      <Faq />
      {/* Section 17 — Ready to read links as evidence? */}
      <Cta />
    </div>
  );
}
