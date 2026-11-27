import { Reveal } from "@/components/home";
import { MessageIcon } from "@/components/ai-visibility/icons";
import { IconCard, SectionHeader } from "@/components/ai-visibility/parts";
import { NewspaperIcon } from "@/components/entity-source-intelligence/icons";
import { ClockIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { CompassIcon, GridIcon, LayersIcon } from "@/components/technical-site-audits/icons";

const PARTS = [
  { Icon: NewspaperIcon, title: "Source page", text: "The URL where the link was observed." },
  { Icon: CompassIcon, title: "Destination", text: "The target URL the link points to." },
  { Icon: MessageIcon, title: "Anchor text", text: "The clickable text — context, not a ranking lever." },
  { Icon: LayersIcon, title: "Attribute", text: "Follow, nofollow, sponsored or UGC, as marked." },
  { Icon: GridIcon, title: "Placement", text: "Where on the page, and in what context." },
  { Icon: ClockIcon, title: "First seen", text: "When it was first observed; coverage-bound." },
];

/** Section 4 — Link anatomy (what makes up one backlink) */
export default function Anatomy() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Link anatomy"
          title="What makes up one backlink"
          intro="Every observed link carries these parts — so interpretation is grounded, not guessed."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {PARTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 70}>
              <IconCard {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
