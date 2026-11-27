"use client";

import { useState } from "react";
import { Reveal } from "@/components/home";
import { SectionHeader } from "@/components/ai-visibility/parts";
import { ChevronDownIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";

const FAQS = [
  {
    question: "What counts as a backlink?",
    answer:
      "An observed hyperlink on a source page that points to a destination. A brand mention, a redirect or a citation isn't automatically a verified backlink — it has to be observed as a real link.",
  },
  {
    question: "Do you show domain authority scores or total backlink counts?",
    answer:
      "No black-box authority score. We explain why a source might matter — relevance, placement and provenance — and any counts are always shown with the coverage they came from, never as an index-size boast.",
  },
  {
    question: "Does getting more links improve my rankings?",
    answer:
      "Not necessarily. Search engines decide how links are weighed, and volume alone says little. One relevant referring domain can matter more than many weak links — and no link is a ranking guarantee.",
  },
  {
    question: "Do you detect toxic links or submit disavows?",
    answer:
      "We can surface unusual patterns with the evidence behind them, but we don't assign a toxicity score or file disavows. A person reviews and decides.",
  },
  {
    question: "Do you see every backlink to my site?",
    answer:
      "No. No crawler or index sees every link on the web. Every observation carries its coverage and freshness, so you can see what was — and wasn't — observed.",
  },
];

/** Section 16 — Backlink intelligence FAQ */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader eyebrow="Questions, answered plainly" title="Backlink intelligence FAQ" center />

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-[860px] lg:mt-16">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `bl-faq-${idx}`;
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
