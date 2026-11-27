import type { Metadata } from "next";
import {
  Audience,
  Capabilities,
  Concepts,
  Cta,
  EditorialExample,
  EvidenceBanner,
  Faq,
  HelpsAnswer,
  Hero,
  HowMeasured,
  Independent,
  Misreadings,
  Provenance,
} from "@/components/entity-source-intelligence";

export const metadata: Metadata = {
  title: "Entity & Source Intelligence | ZoiQuest Search Intelligence",
  description:
    "Understand the entities and sources behind AI answers. Separate identity from names, domains and publishers — and see which sources an answer references, with provenance and limits in view.",
};

export default function EntitySourceIntelligencePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      {/* Section 1 — Hero */}
      <Hero />
      {/* Section 2 — Six concepts, kept distinct */}
      <Concepts />
      {/* Section 3 — Who, and from where */}
      <HelpsAnswer />
      {/* Section 4 — A matching name is not an identity */}
      <Misreadings />
      {/* Section 5 — Resolve, qualify, map, review, disclose */}
      <HowMeasured />
      {/* Section 6 — What a resolution looks like */}
      <EditorialExample />
      {/* Section 7 — What every source carries */}
      <Provenance />
      {/* Section 8 — Identity is resolved, not assumed */}
      <EvidenceBanner />
      {/* Section 9 — One capability, different jobs */}
      <Audience />
      {/* Section 10 — Entity intelligence is not AI visibility */}
      <Capabilities />
      {/* Section 11 — Understand here. Act separately. */}
      <Independent />
      {/* Section 12 — Entity & source FAQ */}
      <Faq />
      {/* Section 13 — Ready to resolve entities with evidence? */}
      <Cta />
    </div>
  );
}
