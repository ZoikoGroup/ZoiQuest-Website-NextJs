import SplitFeature from "./SplitFeature";

/** Section 6 — Count the right thing (links vs referring domains) */
export default function CountRightThing() {
  return (
    <SplitFeature
      eyebrow="Count the right thing"
      lines={["Links and referring", "domains aren't the same"]}
      intro="Ten links from one site are ten links — but a single referring domain. Confusing the two inflates a profile and misleads a comparison."
      points={[
        "Referring domains show breadth; links show volume.",
        "One strong, relevant domain can outweigh many weak links.",
        "Neither number is a ranking — both need context.",
      ]}
      image="/images/backlink-intelligence/count-links-vs-domains.webp"
      alt="Person working on a laptop beside a robot"
    />
  );
}
