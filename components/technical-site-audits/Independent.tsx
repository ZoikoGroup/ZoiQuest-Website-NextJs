import { Reveal, SplitText } from "@/components/home";
import { CheckCircleIcon } from "@/components/rank-tracking/icons";
import { CONTAINER, Eyebrow, H2 } from "@/components/rank-tracking/ui";
import { LockIcon, NodesIcon } from "./icons";

const AUDIT_STEPS = ["Observe health", "Classify findings", "Prioritize fixes"];
const EXECUTION_STEPS = ["Plan changes", "Governed actions", "Separate billing"];

const GUARANTEES = [
  { Icon: CheckCircleIcon, text: "No scan on page load; only authorized, consented scope is fetched." },
  { Icon: NodesIcon, text: "No unattended remediation; ZoikoVertex actions need separate opt-in." },
  { Icon: LockIcon, text: "Marketing access never grants rights to scan third-party or tenant content." },
];

function Column({
  brand,
  title,
  steps,
  tone,
}: {
  brand: string;
  title: string;
  steps: string[];
  tone: "mint" | "plain";
}) {
  return (
    <div
      className={`flex-1 rounded-[18px] border px-6 pb-12 pt-8 ${
        tone === "mint" ? "border-[#BFE3DE] bg-[#E1F4F1]" : "border-[#DCE8E8] bg-[#F4F8F8]"
      }`}
    >
      <p className="text-[13px] font-semibold text-[#2F4F52]">{brand}</p>
      <p className="text-lg font-semibold text-[#10535A]">{title}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {steps.map((s) => (
          <li key={s} className="rounded-lg border border-[#DCE8E8] bg-white px-4 py-2 text-sm text-[#0C2E30]">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Section 11 — Independent by design (audit vs. governed execution) */
export default function Independent() {
  return (
    <section className="w-full bg-[#F4F8F8] py-20 lg:py-[114px]">
      <div className={CONTAINER}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="mx-auto w-full max-w-[552px]">
              <div className="relative flex flex-col gap-10 sm:flex-row sm:gap-[72px]">
                <Column brand="ZoiQuest" title="Audit" steps={AUDIT_STEPS} tone="mint" />
                <Column brand="ZoikoVertex" title="Execution" steps={EXECUTION_STEPS} tone="plain" />

                {/* Divider + lock */}
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-1/2 hidden -translate-x-1/2 border-l-2 border-dashed border-[#9ED3CF] sm:block"
                />
                <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#10535A] text-white ring-4 ring-[#F4F8F8]">
                  <LockIcon className="size-7" />
                  <span className="sr-only">Separate authorization boundary</span>
                </span>
              </div>
              <p className="mt-6 text-center text-sm text-[#466B6F]">
                Separate authorization · no unattended remediation
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-col gap-4">
              <Eyebrow>Independent by design</Eyebrow>
              <SplitText as="h2" lines={["Audit here. Changes stay", "governed."]} className={H2} />
              <p className="text-lg leading-7 text-[#51696B] sm:text-[20px] sm:leading-[32px]">
                An audit explains and prioritizes — it never changes your site
                or crawls without permission.
              </p>
              <ul className="mt-2 flex flex-col gap-3.5">
                {GUARANTEES.map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-[15px] leading-6 text-[#2F4F52]">
                    <Icon className="mt-0.5 size-5 shrink-0 text-[#00B3A4]" />
                    {text}
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
