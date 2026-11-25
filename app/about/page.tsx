import type { Metadata } from "next";
import {
  AboutHeroAndStory,
  FutureCareersFaqCta,
  PlatformAndMethod,
  ProblemsAudiencesDiffs,
  TrustPrinciplesRelationship,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About ZoiQuest | Global Search & AI Discovery Intelligence",
  description:
    "Make sense of how the world discovers you. Learn about ZoiQuest's mission, method, principles, and standalone architecture within the Zoiko Group.",
};

export default function AboutPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <AboutHeroAndStory />
      <ProblemsAudiencesDiffs />
      <PlatformAndMethod />
      <TrustPrinciplesRelationship />
      <FutureCareersFaqCta />
    </div>
  );
}
