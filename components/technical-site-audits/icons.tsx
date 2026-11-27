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

export const ScanIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
    <circle cx="11.5" cy="11.5" r="2.5" />
    <path d="m13.5 13.5 2 2" />
  </Svg>
);

export const DatabaseIcon = (p: IconProps) => (
  <Svg {...p}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
    <path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13" />
    <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
  </Svg>
);

export const LinkIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" />
    <path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
  </Svg>
);

export const GridIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="4" width="6.5" height="6.5" rx="1.2" />
    <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.2" />
    <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.2" />
    <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.2" />
  </Svg>
);

export const RouteIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M8.5 6H16a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h7.5" />
  </Svg>
);

export const GaugeIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 17a8.5 8.5 0 1 1 15 0" />
    <path d="m12 13 3.5-3.5" />
  </Svg>
);

export const LockIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="10.5" width="14" height="10" rx="2" />
    <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
  </Svg>
);

export const LayersIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 3 9 5-9 5-9-5Z" />
    <path d="m3 12.5 9 5 9-5" />
    <path d="m3 16.5 9 5 9-5" />
  </Svg>
);

export const ListOrderedIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10 6h10M10 12h10M10 18h10" />
    <path d="M4 5l1.5-1v5M3.8 13.5a1.5 1.5 0 1 1 2.4 1.2L4 17h2.5" />
  </Svg>
);

export const BadgeCheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 3 2.3 1.7 2.8-.2.9 2.7 2.3 1.6-.9 2.7.9 2.7-2.3 1.6-.9 2.7-2.8-.2L12 21l-2.3-1.7-2.8.2-.9-2.7-2.3-1.6.9-2.7-.9-2.7 2.3-1.6.9-2.7 2.8.2Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);

export const LightbulbIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 18h6M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z" />
  </Svg>
);

export const SearchIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </Svg>
);

export const CompassIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5Z" />
  </Svg>
);

export const TerminalIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5 7 5 5-5 5" />
    <path d="M12 18h7" />
  </Svg>
);

export const FileEditIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4" />
    <path d="M13 3v5h5v2" />
    <path d="m18.5 13.5 2 2-5.5 5.5H13v-2Z" />
  </Svg>
);

export const NodesIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
    <path d="M7 10.5V14a3 3 0 0 0 3 3h3.5" />
  </Svg>
);
