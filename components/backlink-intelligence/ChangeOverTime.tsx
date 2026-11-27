import SplitFeature from "./SplitFeature";

/** Section 9 — Change over time (discovery is observed, not live) */
export default function ChangeOverTime() {
  return (
    <SplitFeature
      bg="tint"
      eyebrow="Change over time"
      lines={["Discovery is observed, not", "live"]}
      intro="New and lost links appear as they're discovered within coverage — a sampled view over time, never a real-time or complete feed, and never a claimed velocity."
      points={[
        "\"New\" and \"lost\" are relative to what was collected.",
        "A spike can be collection, not reality.",
        "Trends are read with their coverage window.",
      ]}
      image="/images/backlink-intelligence/change-discovery-over-time.webp"
      alt="Woman holding a laptop against a teal background"
    />
  );
}
