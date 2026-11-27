import { EdgeCardSection, STATE_COLORS as C } from "./parts";

/** Section 11 — Data lineage (from a question to a reviewed report) */
export default function Lineage() {
  return (
    <EdgeCardSection
      bg="tint"
      eyebrow="Data lineage"
      title="From a question to a reviewed report"
      intro="A rights-first path — classified and reviewed before anything becomes a report or a decision."
      items={[
        { title: "Cohort", text: "A question & locale group.", color: C.teal },
        { title: "Sample", text: "Rights-qualified observation.", color: C.teal },
        { title: "Classify", text: "Mention, citation, absence.", color: C.cyan },
        { title: "Review", text: "A human checks the evidence.", color: C.amber },
        { title: "Report", text: "Only then, a decision.", color: C.green },
      ]}
    />
  );
}
