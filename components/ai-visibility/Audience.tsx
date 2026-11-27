import { GlobeIcon, ShieldCheckIcon } from "@/components/rank-tracking/icons";
import { LockIcon, SearchIcon } from "@/components/technical-site-audits/icons";
import { ImageCardSection } from "./parts";

const D = "/images/ai-visibility/";

/** Section 14 — Who it's for (one capability, different jobs) */
export default function Audience() {
  return (
    <ImageCardSection
      eyebrow="Who it's for"
      title="One capability, different jobs"
      items={[
        { Icon: SearchIcon, title: "SEO / AEO specialists", text: "Tell a mention from a cited source, with sample classifications.", image: `${D}audience-seo-aeo-specialists.webp`, alt: "Person typing on a laptop" },
        { Icon: GlobeIcon, title: "Global market owners", text: "See how locale changes interpretation, with a coverage matrix.", image: `${D}audience-global-market-owners.webp`, alt: "Wooden world map on a wall" },
        { Icon: ShieldCheckIcon, title: "Brand & reputation", text: "Handle wrong, absent or inconsistent answers with human review.", image: `${D}audience-brand-reputation.webp`, alt: "Two colleagues giving a high five at a desk" },
        { Icon: LockIcon, title: "Privacy & legal", text: "Rights-first storage and minimization, pending policy signoff.", image: `${D}audience-privacy-legal.webp`, alt: "Documents and a calculator on a desk" },
      ]}
    />
  );
}
