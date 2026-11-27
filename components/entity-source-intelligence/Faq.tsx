"use client";

import { useState } from "react";
import { Reveal } from "@/components/home";
import { SectionHeader } from "@/components/ai-visibility/parts";
import { ChevronDownIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";

const FAQS = [
  {
    question: "What is entity & source intelligence?",
    answer:
      "It's a way to resolve an entity's identity — separate from its names, aliases, domains and publishers — and to understand which sources an answer references, with provenance and uncertainty in view. This page explains the method; it isn't a live entity explorer.",
  },
  {
    question: "Isn't a matching name enough to identify an entity?",
    answer:
      "No. Different organizations, products and people can share the same name or alias. Identity is resolved with evidence, and when it can't be confirmed, we show the uncertainty instead of merging candidates.",
  },
  {
    question: "Does a citation or domain prove ownership or authority?",
    answer:
      "No. A domain or citation is a signal to examine, not proof of who owns, controls or speaks for an entity. Ownership and authority are assessed separately and never assumed from a link.",
  },
  {
    question: "Do you show real entity graphs or match percentages?",
    answer:
      "No. Everything on this page is a synthetic illustration. We don't invent graphs, counts or match percentages, and real resolutions appear only with their sources and provenance attached.",
  },
  {
    question: "Does ZoiQuest guarantee a knowledge-panel relationship?",
    answer:
      "No. Knowledge panels and entity relationships are controlled by third-party platforms. ZoiQuest helps you understand the signals involved; it doesn't edit knowledge graphs or promise how any platform will represent you.",
  },
];

/** Section 12 — Entity & source FAQ */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader eyebrow="Questions, answered plainly" title="Entity & source FAQ" center />

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-[860px] lg:mt-16">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `esi-faq-${idx}`;
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
