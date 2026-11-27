import { Reveal, SplitText } from "@/components/home";
import { CheckCircleIcon, StatusFailIcon, StatusOkIcon } from "./icons";
import { CONTAINER, Eyebrow, H2 } from "./ui";

const DIMENSIONS = [
  { label: "Query", ok: true },
  { label: "Place", ok: true },
  { label: "Device", ok: false },
  { label: "Period", ok: true },
];

const PRINCIPLES = [
  "Query, place, device and period held constant.",
  "\"Not comparable\" shown when a dimension differs.",
  "Personalization and volatility disclosed, not hidden.",
];

function SnapshotCard({ title }: { title: string }) {
  return (
    <div className="w-full rounded-[18px] border border-[#DCE8E8] bg-white p-5 sm:max-w-[214px]">
      <p className="text-[15px] font-semibold text-[#0C2E30]">{title}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {DIMENSIONS.map((d) => (
          <li
            key={d.label}
            className="flex items-center justify-between rounded-md bg-[#F4F8F8] px-3.5 py-2 text-sm text-[#466B6F]"
          >
            {d.label}
            {d.ok ? (
              <StatusOkIcon className="size-[18px]" aria-label="matches" role="img" />
            ) : (
              <StatusFailIcon className="size-[18px]" aria-label="differs" role="img" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Section 7 — Compare like with like (two snapshots) */
export default function Comparability() {
  return (
    <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="flex flex-col items-center">
              <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <SnapshotCard title="Snapshot A" />
                <span className="text-lg font-semibold text-[#9ED3CF]">vs</span>
                <SnapshotCard title="Snapshot B" />
              </div>
              <p
                role="status"
                className="mt-10 rounded-xl border border-[#F0C9C4] bg-[#FBE7E4] px-6 py-3 text-[15px] font-semibold text-[#B54B4B]"
              >
                Not comparable — device differs
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-4">
              <Eyebrow>Compare like with like</Eyebrow>
              <SplitText as="h2" lines={["Two snapshots, one", "honest question"]} className={H2} />
              <p className="text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                A rank change only means something when the query, place,
                device and period match. ZoiQuest is designed to check
                comparability before it shows a trend.
              </p>
              <ul className="mt-2 flex flex-col gap-3">
                {PRINCIPLES.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] leading-6 text-[#2F4F52]">
                    <CheckCircleIcon className="mt-0.5 size-5 shrink-0 text-[#00C8B8]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
