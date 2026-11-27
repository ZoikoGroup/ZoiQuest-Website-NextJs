"use client";

import { useState } from "react";
import { Reveal } from "@/components/home";
import { ChevronDownIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";
import { SectionHeader } from "./parts";

const FAQS = [
  {
    question: "What is AI visibility?",
    answer:
      "It's understanding whether and how your brand appears in AI-generated answers — as a mention, a citation or not at all — observed from defined samples, with provenance and coverage in view. This page explains the approach; it isn't a live scanner.",
  },
  {
    question: "What's the difference between a mention and a citation?",
    answer:
      "A mention is your brand named in an answer. A citation is a verifiable source or reference the answer points to, where the surface exposes one. They are tracked separately — being mentioned doesn't mean you were cited, and the reverse is also possible.",
  },
  {
    question: "Which AI providers do you cover?",
    answer:
      "We don't make named-provider coverage claims on this page. Coverage is stated per surface, market and sample when an observation is made, so you always see exactly what was and wasn't observed.",
  },
  {
    question: "Are the answers shown here real?",
    answer:
      "No. The answer card, sources and presence states on this page are illustrative and labelled as such — they are not actual AI output.",
  },
  {
    question: "Does appearing in an AI answer guarantee anything?",
    answer:
      "No. Answer surfaces change continuously, and presence in a sample is a signal, not a promise of future placement, traffic or citations. ZoiQuest helps you observe and review — it doesn't guarantee outcomes.",
  },
];

/** Section 17 — AI visibility FAQ */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader eyebrow="Questions, answered plainly" title="AI visibility FAQ" center />

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-[860px] lg:mt-16">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `aiv-faq-${idx}`;
              return (
                <div key={item.question} className="border-b border-[#DCE8E8]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 text-left"
                  >
                    <span className="text-lg font-semibold leading-[28.8px] text-[#0C2E30]">{item.question}</span>
                    <ChevronDownIcon
                      className={`size-5 shrink-0 text-[#466B6F] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div id={panelId} className="max-w-[766px] px-1 pb-6">
                      <p className="text-base leading-[25.6px] text-[#51696B]">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
