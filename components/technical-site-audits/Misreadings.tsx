import { Reveal, SplitText } from "@/components/home";
import { CheckCircleIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";

const MYTHS = [
  { myth: "Crawlable means indexed", reality: "a page a crawler can fetch is not proof a search engine indexed it." },
  { myth: "noindex means removed", reality: "a directive is a signal, not a confirmed removal from an index." },
  { myth: "One score proves experience", reality: "a single metric isn't real-user experience — or a ranking promise." },
];

/** Section 7 — Read it honestly (what an audit can't prove) */
export default function Misreadings() {
  return (
    <section className="w-full bg-[#F4F8F8] pb-20 lg:pb-[114px]">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col gap-4">
            <Eyebrow>Read it honestly</Eyebrow>
            <SplitText as="h2" text="What an audit can't prove" className={H2} />
            <p className="text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
              Common misreadings — and what a finding actually means.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16">
          {MYTHS.map((m, i) => (
            <Reveal key={m.myth} delay={i * 80}>
              <div className="h-full rounded-[16px] border border-[#DCE8E8] bg-white px-6 py-5">
                <p className="flex items-center gap-2 text-sm font-semibold text-[#466B6F]">
                  <CheckCircleIcon className="size-4 shrink-0 text-[#0C2E30]" />
                  <span className="line-through decoration-[#466B6F]">
                    <span className="sr-only">Myth: </span>
                    {m.myth}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-[22px] text-[#2F4F52]">
                  <strong className="font-semibold text-[#0C2E30]">Reality:</strong> {m.reality}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
