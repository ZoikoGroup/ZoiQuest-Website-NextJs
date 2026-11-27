/** Severity palette shared by the hero card and the severity section. */
export const SEVERITY = {
  critical: { label: "Critical", color: "#B5524F", text: "#B5524F", border: "#EBC9C6", bg: "#FDF3F2" },
  high: { label: "High", color: "#8C6A2E", text: "#8C6A2E", border: "#E5D6B8", bg: "#FBF6EC" },
  medium: { label: "Medium", color: "#10535A", text: "#10535A", border: "#CFE3E2", bg: "#F2F8F8" },
  low: { label: "Low", color: "#10535A", text: "#10535A", border: "#CFE3E2", bg: "#F2F8F8" },
  none: { label: "Not evaluated", color: "#9ED3CF", text: "#8FBDBA", border: "#DCEDEC", bg: "#F5FAFA" },
} as const;
