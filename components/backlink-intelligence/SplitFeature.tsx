import Image from "next/image";
import { Reveal, SplitText } from "@/components/home";
import { CheckCircleIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";

/** Text + check-list beside a 592×444 photo. Used by four sections. */
export default function SplitFeature({
  eyebrow,
  lines,
  intro,
  points,
  image,
  alt,
  imageSide = "right",
  bg = "white",
}: {
  eyebrow: string;
  lines: string[];
  intro: string;
  points: string[];
  image: string;
  alt: string;
  imageSide?: "left" | "right";
  bg?: "white" | "tint";
}) {
  const photo = (
    <Reveal delay={imageSide === "right" ? 120 : 0}>
      <div className="relative h-[300px] overflow-hidden rounded-[18px] sm:h-[444px]">
        <Image src={image} alt={alt} fill sizes="(max-width: 1024px) 100vw, 592px" className="object-cover" />
      </div>
    </Reveal>
  );

  const text = (
    <Reveal delay={imageSide === "left" ? 120 : 0}>
      <div className="flex flex-col gap-4">
        <Eyebrow>{eyebrow}</Eyebrow>
        <SplitText as="h2" lines={lines} className={H2} />
        <p className="text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">{intro}</p>
        <ul className="mt-4 flex flex-col gap-3.5">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-[15px] leading-6 text-[#2F4F52]">
              <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-[#00B3A4]" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );

  return (
    <section className={`w-full py-20 lg:py-[114px] ${bg === "tint" ? "bg-[#F4F8F8]" : "bg-white"}`}>
      <div className={CONTAINER}>
        <div
          className={`grid grid-cols-1 items-center gap-12 lg:gap-14 ${
            imageSide === "left" ? "lg:grid-cols-[592px_1fr]" : "lg:grid-cols-[1fr_592px]"
          }`}
        >
          {imageSide === "left" ? (
            <>
              {photo}
              {text}
            </>
          ) : (
            <>
              {text}
              {photo}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
