import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { Reveal, SplitText } from "@/components/home";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const BG = {
  white: "bg-white",
  tint: "bg-[#F4F8F8]",
} as const;

export const SECTION_Y = "py-20 lg:py-[114px]";

/** Shared eyebrow + heading + intro block used by most sections. */
export function SectionHeader({
  eyebrow,
  title,
  lines,
  intro,
  center = false,
}: {
  eyebrow: string;
  title?: string;
  lines?: string[];
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal>
      <div className={`flex flex-col gap-4 ${center ? "items-center text-center" : ""}`}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SplitText as="h2" text={title} lines={lines} className={H2} />
        {intro && (
          <p className="max-w-[790px] text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export interface ImageCardItem {
  Icon: Icon;
  title: string;
  text: string;
  image: string;
  alt: string;
}

/** Four photo cards with an icon badge — used by three sections. */
export function ImageCardSection({
  eyebrow,
  title,
  intro,
  items,
  bg = "white",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: ImageCardItem[];
  bg?: keyof typeof BG;
}) {
  return (
    <section className={`w-full ${BG[bg]} ${SECTION_Y}`}>
      <div className={CONTAINER}>
        <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {items.map(({ Icon, title: t, text, image, alt }, i) => (
            <Reveal key={t} delay={i * 80}>
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
                <div className="px-6 pb-8 pt-6">
                  <h3 className="text-lg font-semibold text-[#0C2E30]">{t}</h3>
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

/** Five compact cards with a coloured left edge — answer states, lineage. */
export function EdgeCardSection({
  eyebrow,
  title,
  intro,
  items,
  bg = "white",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  items: { title: string; text: string; color: string }[];
  bg?: keyof typeof BG;
}) {
  return (
    <section className={`w-full ${BG[bg]} ${SECTION_Y}`}>
      <div className={CONTAINER}>
        <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />
        <div className="mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 70}>
              <div
                className="h-full rounded-[12px] border border-[#DCE8E8] border-l-[3px] bg-white px-4 py-4"
                style={{ borderLeftColor: it.color }}
              >
                <p className="text-[15px] font-semibold text-[#0C2E30]">{it.title}</p>
                <p className="mt-1 text-[13px] leading-5 text-[#466B6F]">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Small bordered card with an inline icon + title. */
export function IconCard({ Icon, title, text }: { Icon: Icon; title: string; text: string }) {
  return (
    <div className="h-full rounded-[14px] border border-[#DCE8E8] bg-white p-5 transition-colors hover:border-[#9ED3CF]">
      <div className="flex items-center gap-2.5">
        <Icon className="size-5 shrink-0 text-[#165258]" />
        <p className="text-[15px] font-semibold text-[#0C2E30]">{title}</p>
      </div>
      <p className="mt-2.5 text-sm leading-[22px] text-[#466B6F]">{text}</p>
    </div>
  );
}

export const STATE_COLORS = {
  green: "#1E7A5C",
  mint: "#9ED3CF",
  amber: "#8C6A2E",
  teal: "#10535A",
  red: "#B5524F",
  cyan: "#00C8B8",
} as const;
