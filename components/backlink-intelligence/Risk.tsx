import SplitFeature from "./SplitFeature";

/** Section 10 — Risk, with a human in the loop (flagged, not judged) */
export default function Risk() {
  return (
    <SplitFeature
      bg="tint"
      imageSide="left"
      eyebrow="Risk, with a human in the loop"
      lines={["Unusual patterns are", "flagged, not judged"]}
      intro={'ZoiQuest can surface patterns worth a closer look — but it doesn\'t assign a "toxicity score," file a disavow, or decide a link is harmful on your behalf.'}
      points={[
        "Patterns are surfaced with evidence for human review.",
        "No automated penalty, spam verdict or disavow submission.",
        "You decide; we show why something stood out.",
      ]}
      image="/images/backlink-intelligence/risk-unusual-patterns.webp"
      alt="Laptop screen reading SEO LINK on a desk with coffee"
    />
  );
}
