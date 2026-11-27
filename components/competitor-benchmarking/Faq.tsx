"use client";

import { useState } from "react";
import { Reveal } from "@/components/home";
import { SectionHeader } from "@/components/ai-visibility/parts";
import { ChevronDownIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";

const FAQS = [
  {
    question: "What is competitor benchmarking in ZoiQuest?",
    answer:
      "It's a way to compare defined search and AI-discovery signals across a scoped set of brands — fairly, in context, with source, method and uncertainty in view. This page explains the method; it isn't a live competitor tracker.",
  },
  {
    question: "Does a comparison cohort mean these are my real rivals?",
    answer:
      "No. A cohort is a deliberately scoped analytical selection. Including a brand in it isn't a claim that you actually compete in the market — it's a choice you make, with a stated rationale.",
  },
  {
    question: "Do you show real competitor data or scores?",
    answer:
      "No. This page uses synthetic specimens only — no live competitor data, no logos and no fictional scores. Real comparisons appear only within an authorized workspace, with their evidence attached.",
  },
  {
    question: "Can any two brands be compared directly?",
    answer:
      "Only when market, device, language, surface, period and method align. If one of those differs, we show \"not comparable\" rather than a misleading gap.",
  },
  {
    question: "Does a higher signal prove we're winning?",
    answer:
      "No. An observed difference in visibility or demand isn't proof of cause, revenue or success. ZoiQuest shows the signal with its context and uncertainty so you can interpret it — not declare a winner.",
  },
];

/** Section 12 — Competitor benchmarking FAQ */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader eyebrow="Questions, answered plainly" title="Competitor benchmarking FAQ" center />

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-[860px] lg:mt-16">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `cb-faq-${idx}`;
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
