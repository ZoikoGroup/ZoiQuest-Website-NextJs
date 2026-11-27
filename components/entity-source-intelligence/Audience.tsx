import { ImageCardSection } from "@/components/ai-visibility/parts";
import { ShieldCheckIcon } from "@/components/rank-tracking/icons";
import { DatabaseIcon, LockIcon, SearchIcon } from "@/components/technical-site-audits/icons";

const D = "/images/entity-source-intelligence/";

/** Section 9 — Who it's for (one capability, different jobs) */
export default function Audience() {
  return (
    <ImageCardSection
      eyebrow="Who it's for"
      title="One capability, different jobs"
      items={[
        { Icon: ShieldCheckIcon, title: "Brand owners", text: "Confirm you're resolved correctly — not confused with others.", image: `${D}audience-brand-owners.webp`, alt: "Two colleagues giving a high five at a desk" },
        { Icon: SearchIcon, title: "SEO / AEO analysts", text: "Understand which sources and publishers answers lean on.", image: `${D}audience-seo-aeo-analysts.webp`, alt: "Analysts discussing a printed chart" },
        { Icon: DatabaseIcon, title: "Data stewards", text: "Keep identity, alias and source concepts cleanly separated.", image: `${D}audience-data-stewards.webp`, alt: "Network cables plugged into a patch panel" },
        { Icon: LockIcon, title: "Legal & privacy", text: "Verify rights-cleared sources and no ownership overreach.", image: `${D}audience-legal-privacy.webp`, alt: "Documents and a calculator on a desk" },
      ]}
    />
  );
}
