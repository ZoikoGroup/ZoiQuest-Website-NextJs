import { ImageCardSection } from "@/components/ai-visibility/parts";
import { NewspaperIcon } from "@/components/entity-source-intelligence/icons";
import { BriefcaseIcon } from "@/components/rank-tracking/icons";
import { LinkIcon, LockIcon } from "@/components/technical-site-audits/icons";

const D = "/images/backlink-intelligence/";

/** Section 14 — Who it's for (one capability, different jobs) */
export default function Audience() {
  return (
    <ImageCardSection
      eyebrow="Who it's for"
      title="One capability, different jobs"
      items={[
        { Icon: LinkIcon, title: "SEO & link builders", text: "Read attributes, anchors and source context, not just totals.", image: `${D}audience-seo-link-builders.webp`, alt: "SEO concept graphic over people using devices" },
        { Icon: NewspaperIcon, title: "Digital PR", text: "Understand where coverage turns into real, relevant links.", image: `${D}audience-digital-pr.webp`, alt: "Large open-plan office full of people at desks" },
        { Icon: BriefcaseIcon, title: "Agencies", text: "Explain link profiles to clients with evidence and limits.", image: `${D}audience-agencies.webp`, alt: "Agency team posing around a laptop" },
        { Icon: LockIcon, title: "Enterprise & legal", text: "Confirm rights-cleared sources and no automated verdicts.", image: `${D}audience-enterprise-legal.webp`, alt: "Documents and a calculator on a desk" },
      ]}
    />
  );
}
