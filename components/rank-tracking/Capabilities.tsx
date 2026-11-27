import { Reveal, SplitText } from "@/components/home";
import { CONTAINER, Eyebrow, H2 } from "./ui";

const CAPABILITIES = [
  { title: "Rank Tracking", text: "Monitor how observed positions change over time.", current: true },
  { title: "Keyword Research", text: "Discover demand, question families and intent.", current: false },
  { title: "SERP Analysis", text: "Read result layout and features for a query.", current: false },
  { title: "AI Visibility", text: "Presence in AI answer surfaces — not organic rank.", current: false },
];

/** Section 8 — Clearly distinct capabilities */
export default function Capabilities() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col gap-4">
            <Eyebrow>Clearly distinct capabilities</Eyebrow>
            <SplitText as="h2" text="Rank tracking is not SERP analysis" className={H2} />
            <p className="max-w-[800px] text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
              Each capability answers a different question. Related pages link
              only when approved and live.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <div
                aria-current={c.current ? "page" : undefined}
                className={`flex h-full flex-col gap-3 rounded-[18px] border p-6 transition-colors ${
                  c.current
                    ? "border-[#165258] bg-gradient-to-br from-[#E3F5F3] to-white"
                    : "border-[#DCE8E8] bg-white hover:border-[#9ED3CF]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-lg font-semibold text-[#0C2E30]">{c.title}</p>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                      c.current ? "bg-[#165258] text-white" : "bg-[#F0F5F5] text-[#2F4F52]"
                    }`}
                  >
                    {c.current ? "This page" : "Related"}
                  </span>
                </div>
                <p className="text-[15px] leading-6 text-[#51696B]">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
