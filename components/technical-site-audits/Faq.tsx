"use client";

import { useState } from "react";
import { Reveal, SplitText } from "@/components/home";
import { ChevronDownIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";

const FAQS = [
  {
    question: "What does a technical site audit check?",
    answer:
      "Crawl access, indexing signals, canonical hints, rendering, site architecture, performance, security-facing configuration and content/duplication — each observed under defined conditions, with evidence and limits.",
  },
  {
    question: "Does loading this page crawl my site?",
    answer:
      "No. Nothing is fetched when you visit this page. An audit only runs against a scope you have authorized and consented to.",
  },
  {
    question: "If a page is crawlable, is it indexed?",
    answer:
      "Not necessarily. Being fetchable shows a crawler could retrieve the page; whether a search engine indexes it is that engine's decision. We only report an index state when the engine itself reports it.",
  },
  {
    question: "Do you show real scores or scan results here?",
    answer:
      "No. Every finding, severity and status on this page is a synthetic illustration and is labelled as such. Real results appear only for an authorized audit, with their evidence attached.",
  },
  {
    question: "Does ZoiQuest fix issues automatically?",
    answer:
      "No. An audit explains and prioritizes; it never changes your site. Any execution through ZoikoVertex is a separate product that needs its own opt-in and authorization.",
  },
];

/** Section 12 — Technical audits FAQ */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>Questions, answered plainly</Eyebrow>
            <SplitText as="h2" text="Technical audits FAQ" className={H2} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-[860px] lg:mt-16">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `tsa-faq-${idx}`;
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
