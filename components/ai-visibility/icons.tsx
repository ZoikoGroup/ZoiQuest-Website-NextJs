import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const SparklesIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10 4.5 11.6 9l4.4 1.6-4.4 1.6L10 16.7l-1.6-4.5L4 10.6 8.4 9Z" />
    <path d="M17.5 3v4M15.5 5h4M18 15.5v3M16.5 17h3" />
  </Svg>
);

export const QuoteIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 18V11a5 5 0 0 1 4-4.9M5 11h4v7H5ZM14 18V11a5 5 0 0 1 4-4.9M14 11h4v7h-4Z" />
  </Svg>
);

export const MessageIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 5h16v11H9l-5 4Z" />
    <path d="M8 9h8M8 12.5h5" />
  </Svg>
);

/** Filled four-point star used in the hero's synthetic answer card. */
export const StarBurstIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path fill="currentColor" d="M12 2c.6 4.6 2.4 7.4 10 10-7.6 2.6-9.4 5.4-10 10-.6-4.6-2.4-7.4-10-10 7.6-2.6 9.4-5.4 10-10Z" />
  </svg>
);
