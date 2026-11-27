import type { Metadata } from "next";
import {
  Hero,
  WhatIs,
  Audience,
  Approach,
  Platform,
  WhyZoiQuest,
  Comparability,
  Capabilities,
  Cta,
  Faq,
} from "@/components/rank-tracking";

export const metadata: Metadata = {
  title: "Rank Tracking | ZoiQuest Search Intelligence",
  description:
    "Understand visibility changes over time. Compare search-position observations across defined queries, places, devices and periods — with their limitations visible.",
};

export default function RankTrackingPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      {/* Section 1 — Hero */}
      <Hero />
      {/* Section 2 — What is rank tracking? */}
      <WhatIs />
      {/* Section 3 — Who it's for */}
      <Audience />
      {/* Section 4 — Our approach */}
      <Approach />
      {/* Section 5 — Inside the platform */}
      <Platform />
      {/* Section 6 — Why ZoiQuest */}
      <WhyZoiQuest />
      {/* Section 7 — Compare like with like */}
      <Comparability />
      {/* Section 8 — Clearly distinct capabilities */}
      <Capabilities />
      {/* Section 9 — Evaluate ZoiQuest CTA */}
      <Cta />
      {/* Section 10 — Rank tracking FAQ */}
      <Faq />
    </div>
  );
}
