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

export const TargetIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" />
  </Svg>
);

export const TranslateIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 5h9M8.5 3v2M6 5c.8 3 3 5.5 6 7M11 5c-.8 3-3 5.5-6.5 7" />
    <path d="m12 21 4-9 4 9M13.5 18h5" />
  </Svg>
);

export const ChartBarsIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 4v16h16" />
    <path d="M8 16v-4M12 16V8M16 16v-6" />
  </Svg>
);
