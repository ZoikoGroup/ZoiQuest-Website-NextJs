import {
  HeroSection,
  LearnPlansAndFaq,
  PlatformAndSolutions,
  TrustGlobalIntegrations,
  WorkflowAndPreview,
} from "@/components/home";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <PlatformAndSolutions />
      <WorkflowAndPreview />
      <TrustGlobalIntegrations />
      <LearnPlansAndFaq />
    </div>
  );
}
