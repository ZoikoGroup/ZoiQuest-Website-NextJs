import type { SVGProps } from "react";

export const NewspaperIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...p}
  >
    <path d="M6 4h12a1 1 0 0 1 1 1v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8h2" />
    <path d="M6 4v14a2 2 0 0 1-2 0" />
    <path d="M9 8h6M9 11.5h6M9 15h4" />
  </svg>
);
