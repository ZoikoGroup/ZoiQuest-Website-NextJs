import { ImageCardSection } from "@/components/ai-visibility/parts";
import { FileEditIcon, LockIcon, SearchIcon } from "@/components/technical-site-audits/icons";
import { ChartBarsIcon } from "./icons";

const D = "/images/prompt-research/";

/** Section 10 — Who it's for (one capability, different jobs) */
export default function Audience() {
  return (
    <ImageCardSection
      bg="tint"
      eyebrow="Who it's for"
      title="One capability, different jobs"
      items={[
        { Icon: SearchIcon, title: "SEO / AEO / GEO", text: "Turn intent into an evidence-led research plan.", image: `${D}audience-seo-aeo-geo.webp`, alt: "Hands typing on a laptop" },
        { Icon: FileEditIcon, title: "Content & growth", text: "Prioritize topics around real questions, not guesses.", image: `${D}audience-content-growth.webp`, alt: "Laptop, mug and notepad on a wooden desk" },
        { Icon: ChartBarsIcon, title: "Market researchers", text: "Structure question cohorts with disclosed limits.", image: `${D}audience-market-researchers.webp`, alt: "Researcher smiling while working on a laptop" },
        { Icon: LockIcon, title: "Data-rights reviewers", text: "Confirm no prompt collection and rights-first method.", image: `${D}audience-data-rights.webp`, alt: "Documents and a calculator on a desk" },
      ]}
    />
  );
}
