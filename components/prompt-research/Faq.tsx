"use client";

import { useState } from "react";
import { Reveal } from "@/components/home";
import { SectionHeader } from "@/components/ai-visibility/parts";
import { ChevronDownIcon } from "@/components/rank-tracking/icons";
import { CONTAINER } from "@/components/rank-tracking/ui";

const FAQS = [
  {
    question: "What is prompt research?",
    answer:
      "It's a way to identify, group and assess the questions and intents relevant to search and AI discovery — so teams can plan evidence-led investigations. This page teaches the method; it isn't a live prompt explorer.",
  },
  {
    question: "Is a prompt proof that someone asked it?",
    answer:
      "No. A candidate formulation is a question worth researching, not evidence that a real person submitted it to any assistant. It stays a hypothesis until it is legitimately observed with an approved method.",
  },
  {
    question: "Do you show search volume or prompt demand?",
    answer:
      "No. We don't invent frequency, popularity or \"share of AI questions\". Examples on this page are synthetic and carry no volume.",
  },
  {
    question: "Do you collect my prompts?",
    answer:
      "No. Nothing you type is collected on this page, and no AI provider is accessed. Any observation requires a separately authorized method with clear data rights.",
  },
  {
    question: "Does this guarantee anything about AI answers?",
    answer:
      "No. Prompt research helps you decide what to investigate. It doesn't predict or promise what an AI system will say, or whether your brand will appear.",
  },
];

/** Section 12 — Prompt research FAQ */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <SectionHeader eyebrow="Questions, answered plainly" title="Prompt research FAQ" center />

        <Reveal delay={100}>
          <div className="mx-auto mt-12 max-w-[860px] lg:mt-16">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              const panelId = `pr-faq-${idx}`;
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
