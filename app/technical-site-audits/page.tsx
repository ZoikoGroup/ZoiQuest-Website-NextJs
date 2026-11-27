import type { Metadata } from "next";
import {
  Approach,
  Audience,
  Capabilities,
  Categories,
  Cta,
  EvidenceBanner,
  Faq,
  FindingTypes,
  Hero,
  HowItWorks,
  Independent,
  Misreadings,
  Severity,
} from "@/components/technical-site-audits";

export const metadata: Metadata = {
  title: "Technical Site Audits | ZoiQuest Search Intelligence",
  description:
    "See your site's crawl health and what to fix first. Understand crawl access, indexing signals, site structure and prioritized issues — with evidence you can examine, and limits made clear.",
};

export default function TechnicalSiteAuditsPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      {/* Section 1 — Hero */}
      <Hero />
      {/* Section 2 — Eight categories, one evidence model */}
      <Categories />
      {/* Section 3 — Four states, never blurred */}
      <FindingTypes />
      {/* Section 4 — Not every finding is critical */}
      <Severity />
      {/* Section 5 — Request, observe, classify, prioritize, verify */}
      <HowItWorks />
      {/* Section 6 — Evidence you can examine */}
      <Approach />
      {/* Section 7 — What an audit can't prove */}
      <Misreadings />
      {/* Section 8 — A finding is evidence, not a verdict */}
      <EvidenceBanner />
      {/* Section 9 — Site audits are not rank tracking */}
      <Capabilities />
      {/* Section 10 — One audit, different jobs */}
      <Audience />
      {/* Section 11 — Audit here. Changes stay governed. */}
      <Independent />
      {/* Section 12 — Technical audits FAQ */}
      <Faq />
      {/* Section 13 — Ready to audit with evidence? */}
      <Cta />
    </div>
  );
}
