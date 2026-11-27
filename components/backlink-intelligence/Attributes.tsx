import type { SVGProps } from "react";
import { Reveal } from "@/components/home";
import { MessageIcon } from "@/components/ai-visibility/icons";
import { SectionHeader } from "@/components/ai-visibility/parts";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { LinkIcon, LockIcon } from "@/components/technical-site-audits/icons";

const BagIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M5 7h14l-1 13H6Z" />
    <path d="M9 10V6a3 3 0 0 1 6 0v4" />
  </svg>
);

const ATTRIBUTES = [
  { Icon: LinkIcon, title: "Follow", text: "A standard link with no restricting attribute." },
  { Icon: LockIcon, title: "Nofollow", text: "Marked so engines may not pass authority." },
  { Icon: BagIcon, title: "Sponsored", text: "Declared paid or promotional placement." },
  { Icon: MessageIcon, title: "UGC", text: "User-generated, e.g. forums or comments." },
];

/** Section 5 — Link attributes (not all links say the same thing) */
export default function Attributes() {
  return (
    <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Link attributes"
          title="Not all links say the same thing"
          intro="Attributes are signals declared by the source — read, never assumed."
        />
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {ATTRIBUTES.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div>
                <Icon className="size-6 text-[#00B3A4]" />
                <p className="mt-4 text-lg font-semibold text-[#0C2E30]">{title}</p>
                <p className="mt-1 max-w-[260px] text-[15px] leading-6 text-[#2F4F52]">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
