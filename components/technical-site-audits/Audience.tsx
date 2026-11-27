import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";
import { BuildingIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";
import { FileEditIcon, SearchIcon, TerminalIcon } from "./icons";

const AUDIENCES = [
  {
    Icon: SearchIcon,
    title: "Technical SEO leads",
    text: "See categories, reproducible evidence and external-search limits.",
    image: "/images/technical-site-audits/audience-technical-seo-leads.webp",
    alt: "Technical SEO team reviewing dashboards on multiple monitors",
  },
  {
    Icon: TerminalIcon,
    title: "Developers & SRE",
    text: "Tell a 5xx from a blocked resource or a rendering failure, with steps.",
    image: "/images/technical-site-audits/audience-developers-sre.webp",
    alt: "Developers discussing code displayed on large screens",
  },
  {
    Icon: FileEditIcon,
    title: "Content leads",
    text: "See which issues may affect discovery of important content.",
    image: "/images/technical-site-audits/audience-content-leads.webp",
    alt: "Content team working together at their desks",
  },
  {
    Icon: BuildingIcon,
    title: "Enterprise & governance",
    text: "No auto-crawl on load; consent-gated service and a staffed path.",
    image: "/images/technical-site-audits/audience-enterprise-governance.webp",
    alt: "Large team gathered around a whiteboard planning session",
  },
];

/** Section 10 — Who it's for (one audit, different jobs) */
export default function Audience() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col gap-4">
            <Eyebrow>Who it&apos;s for</Eyebrow>
            <SplitText as="h2" text="One audit, different jobs" className={H2} />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {AUDIENCES.map(({ Icon, title, text, image, alt }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-[18px] border border-[#DCE8E8] bg-white transition-shadow hover:shadow-[0_18px_40px_-20px_rgba(7,40,44,0.3)]">
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 293px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <span className="absolute bottom-3.5 left-3.5 flex size-11 items-center justify-center rounded-xl bg-white text-[#0C2E30] shadow-sm">
                    <Icon className="size-5" />
                  </span>
                </div>
                <div className="px-6 pb-7 pt-6">
                  <h3 className="text-lg font-semibold text-[#0C2E30]">{title}</h3>
                  <p className="mt-2.5 text-[15px] leading-6 text-[#51696B]">{text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
