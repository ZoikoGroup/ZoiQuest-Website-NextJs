import SplitFeature from "./SplitFeature";

/** Section 8 — Quality, explained (no single number tells you a link is good) */
export default function Quality() {
  return (
    <SplitFeature
      imageSide="left"
      eyebrow="Quality, explained"
      lines={["No single number tells you", "a link is \"good\""]}
      intro="ZoiQuest is designed to explain why a source might matter — relevance, context and provenance — rather than hand you an unexplained authority score to trust."
      points={[
        "Topical relevance of the source to the destination.",
        "Placement and context around the link.",
        "Provenance and how the link was observed.",
      ]}
      image="/images/backlink-intelligence/quality-source-context.webp"
      alt="Woman using a laptop in front of a wall of light strips"
    />
  );
}
