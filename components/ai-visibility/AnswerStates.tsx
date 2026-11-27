import { EdgeCardSection, STATE_COLORS as C } from "./parts";

/** Section 7 — Answer states (wrong, absent or inconsistent) */
export default function AnswerStates() {
  return (
    <EdgeCardSection
      eyebrow="Answer states"
      title="Answers can be wrong, absent or inconsistent"
      intro="Every state is reportable and routed to human review — none is treated as a silent pass or failure."
      items={[
        { title: "Present", text: "Observed in the sample, with evidence.", color: C.green },
        { title: "Absent", text: "Not observed — a real, reported state.", color: C.mint },
        { title: "Ambiguous", text: "Unclear reference; flagged for review.", color: C.amber },
        { title: "Inconsistent", text: "Varies across samples; volatility shown.", color: C.teal },
        { title: "Negative / wrong", text: "Mischaracterized; escalated to a human.", color: C.red },
      ]}
    />
  );
}
