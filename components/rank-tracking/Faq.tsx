"use client";

import { useState } from "react";
import { Reveal, SplitText } from "@/components/home";
import { ChevronDownIcon } from "./icons";
import { CONTAINER, Eyebrow, H2 } from "./ui";

const FAQS = [
  {
    question: "What is rank tracking in ZoiQuest?",
    answer:
      "It's a proposed capability for observing how search positions change over time for defined queries, places, devices and periods — with comparability and evidence in view. This page explains the approach; it isn't a live monitoring dashboard.",
  },
  {
    question: "How is it different from SERP analysis and keyword research?",
    answer:
      "Keyword research looks at demand and intent before you choose what to track. SERP analysis reads the layout and features of a results page at one point in time. Rank tracking follows observed positions for the same defined inputs across periods, so you can see movement rather than a single snapshot.",
  },
  {
    question: "Are the positions and trends shown here real?",
    answer:
      "No. Every chart, count and change on this page is a synthetic illustration and is labelled as such. Real observations would only be shown with their source, market, device and period attached.",
  },
  {
    question: "Do you offer real-time monitoring or alerts?",
    answer:
      "We don't claim real-time coverage. Observations are tied to a disclosed window, and any refresh frequency or notification behavior would be stated explicitly rather than implied.",
  },
  {
    question: "Does a ranking change prove my change worked?",
    answer:
      "No. A position change is an observation, not proof of cause. Search systems, competitors, personalization and volatility all move results. ZoiQuest is designed to show movement with its context so you can form and test hypotheses — not to attribute outcomes automatically.",
  },
];

/** Section 10 — Rank tracking FAQ */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>Questions, answered plainly</Eyebrow>
            <SplitText as="h2" text="Rank tracking FAQ" className={H2} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-[860px] lg:mt-16">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `rt-faq-${idx}`;
              return (
                <div key={item.question} className="border-b border-[#DCE8E8]">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 text-left"
                  >
                    <span className="text-lg font-semibold leading-[28.8px] text-[#0C2E30]">
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`size-5 shrink-0 text-[#466B6F] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
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
