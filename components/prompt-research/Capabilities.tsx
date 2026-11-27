import Link from "next/link";
import { Reveal } from "@/components/home";
import { SectionHeader } from "@/components/ai-visibility/parts";
import { CONTAINER } from "@/components/rank-tracking/ui";

const CAPABILITIES = [
  { title: "Prompt Research", text: "Organize and assess candidate questions and intent.", current: true },
  { title: "Keyword Research", text: "Discover search demand and keyword themes." },
  { title: "AI Visibility", text: "Where you appear in AI-generated answers.", href: "/ai-visibility" },
  { title: "SERP Analysis", text: "Read result layout and features for a query." },
];

const CARD = "flex h-full flex-col gap-3 rounded-[18px] border p-6 transition-colors";

/** Section 9 — Clearly distinct capabilities */
export default function Capabilities() {
  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader
          eyebrow="Clearly distinct capabilities"
          title="Prompt research is not keyword research"
          intro="Each capability answers a different question. Related pages link only when approved and live."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {CAPABILITIES.map((c, i) => {
            const body = (
              <>
                <div className="flex items-start justify-between gap-2">
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
              </>
            );
            return (
              <Reveal key={c.title} delay={i * 70}>
                {c.current ? (
                  <div aria-current="page" className={`${CARD} border-[#165258] bg-gradient-to-br from-[#E3F5F3] to-white`}>
                    {body}
                  </div>
                ) : c.href ? (
                  <Link href={c.href} className={`${CARD} border-[#DCE8E8] bg-white hover:border-[#00C8B8]`}>
                    {body}
                  </Link>
                ) : (
                  <div className={`${CARD} border-[#DCE8E8] bg-white`}>{body}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
