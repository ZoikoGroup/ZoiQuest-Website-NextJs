import { ImageCardSection } from "@/components/ai-visibility/parts";
import { ChartBarsIcon } from "@/components/prompt-research/icons";
import { BriefcaseIcon, BuildingIcon } from "@/components/rank-tracking/icons";
import { TrendUpIcon } from "./icons";

const D = "/images/competitor-benchmarking/";

/** Section 9 — Who it's for (one capability, different jobs) */
export default function Audience() {
  return (
    <ImageCardSection
      eyebrow="Who it's for"
      title="One capability, different jobs"
      items={[
        { Icon: TrendUpIcon, title: "SEO & growth leads", text: "Scope fair cohorts and read signals in context.", image: `${D}audience-seo-growth.webp`, alt: "Colleagues reviewing an ESG report on a laptop" },
        { Icon: ChartBarsIcon, title: "Market researchers", text: "Compare demand and presence with disclosed limits.", image: `${D}audience-market-researchers.webp`, alt: "Presenter showing a growth chart to a small audience" },
        { Icon: BuildingIcon, title: "Enterprise strategy", text: "Benchmark brands and regions on comparable methodology.", image: `${D}audience-enterprise-strategy.webp`, alt: "Glass office towers seen from below" },
        { Icon: BriefcaseIcon, title: "Agencies", text: "Build defensible client comparisons, cohort by cohort.", image: `${D}audience-agencies.webp`, alt: "Agency team meeting around a conference table" },
      ]}
    />
  );
}
