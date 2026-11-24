"use client";

import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text?: string;
  lines?: string[];
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
}

export default function SplitText({
  text,
  lines,
  as = "h2",
  className = "",
  delay = 0,
  stagger = 55,
  immediate = false,
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(immediate);

  const lineList = lines ?? (text ? [text] : []);
  const fullText = lineList.join(" ");

  useEffect(() => {
    if (immediate) return;
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -24px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  const setRef = (node: HTMLElement | null) => {
    containerRef.current = node;
  };

  const wordLines = lineList.reduce<
    Array<{ line: string; words: Array<{ word: string; index: number }> }>
  >((acc, line) => {
    const offset = acc.reduce((sum, item) => sum + item.words.length, 0);
    const words = line
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((word, idx) => ({ word, index: offset + idx }));
    return [...acc, { line, words }];
  }, []);

  const content = wordLines.map(({ line, words }, lineIdx) => (
    <span
      key={`${lineIdx}-${line}`}
      className={lineIdx < wordLines.length - 1 ? "block" : "inline"}
    >
      {words.map(({ word, index }) => {
        const wordDelay = delay + index * stagger;

        return (
          <span
            key={`${index}-${word}`}
            aria-hidden="true"
            className="mr-[0.26em] inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] last:mr-0"
          >
            <span
              style={
                immediate
                  ? { animationDelay: `${wordDelay}ms` }
                  : { transitionDelay: `${wordDelay}ms` }
              }
              className={
                immediate
                  ? "zq-word-inner inline-block animate-zq-word-rise"
                  : `zq-word-inner inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-[115%] opacity-0"
                    }`
              }
            >
              {word}
            </span>
          </span>
        );
      })}
    </span>
  ));

  if (as === "h1") {
    return (
      <h1 ref={setRef} aria-label={fullText} className={className}>
        {content}
      </h1>
    );
  }
  if (as === "h3") {
    return (
      <h3 ref={setRef} aria-label={fullText} className={className}>
        {content}
      </h3>
    );
  }
  if (as === "p") {
    return (
      <p ref={setRef} aria-label={fullText} className={className}>
        {content}
      </p>
    );
  }
  if (as === "span") {
    return (
      <span ref={setRef} aria-label={fullText} className={className}>
        {content}
      </span>
    );
  }

  return (
    <h2 ref={setRef} aria-label={fullText} className={className}>
      {content}
    </h2>
  );
}
