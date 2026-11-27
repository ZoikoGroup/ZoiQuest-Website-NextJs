import Link from "next/link";
import { ArrowRightIcon, PlayIcon } from "./icons";

export const CONTAINER =
  "mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[100px]";

export const H2 =
  "text-3xl font-bold leading-[1.1] tracking-[-0.018em] text-[#0C2E30] sm:text-5xl sm:leading-[51.84px]";

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p className="text-sm font-semibold leading-[22.4px]">
      <span className="text-[#00C8B8]">/ </span>
      <span className={tone === "dark" ? "text-[#8FE0D6]" : "text-[#0A6B66]"}>
        {children}
      </span>
    </p>
  );
}

export function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 rounded-full border border-transparent bg-[#00C8B8] px-6 py-3.5 text-base font-semibold leading-[25.6px] text-[#07332F] transition-colors hover:bg-[#19DAC9]"
    >
      <span>{children}</span>
      <ArrowRightIcon className="size-[18px] shrink-0" />
    </Link>
  );
}

export function GhostButton({
  href,
  children,
  withPlay = false,
}: {
  href: string;
  children: React.ReactNode;
  withPlay?: boolean;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/12 px-6 py-3.5 text-base font-semibold leading-[25.6px] text-white backdrop-blur-[4px] transition-colors hover:bg-white/20"
    >
      <span>{children}</span>
      {withPlay && <PlayIcon className="size-[18px] shrink-0" />}
    </Link>
  );
}

/**
 * Synthetic, illustrative trend line. Values are 0–100 (higher = better
 * visibility). Dots are HTML so they stay round when the SVG stretches.
 */
export function TrendChart({
  values,
  dotIndexes,
  className = "",
}: {
  values: number[];
  dotIndexes: number[];
  className?: string;
}) {
  const W = 100;
  const H = 100;
  const pts = values.map((v, i) => ({
    x: (i / (values.length - 1)) * W,
    y: H - v,
  }));
  const line = pts.map((p) => `${p.x},${p.y}`).join(" ");
  const area = `0,${H} ${line} ${W},${H}`;

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="absolute inset-0 size-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="zq-rt-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00C8B8" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#00C8B8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={area} fill="url(#zq-rt-area)" />
        <polyline
          points={line}
          fill="none"
          stroke="#165258"
          strokeWidth={2.4}
          vectorEffect="non-scaling-stroke"
          pathLength={440}
          className="animate-zq-draw-chart"
        />
      </svg>
      {dotIndexes.map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C8B8] ring-2 ring-white"
          style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%` }}
        />
      ))}
    </div>
  );
}

export const CHANGE_LEGEND = [
  { label: "Moved up", color: "#1E7A5C" },
  { label: "Moved down", color: "#B5524F" },
  { label: "Unchanged", color: "#9ED3CF" },
];
