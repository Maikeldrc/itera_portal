import { ArrowRight, Building2, ChartNoAxesCombined, Network } from "lucide-react";

const steps = [
  {
    title: "ACO Accountability",
    text: "Accountable for quality, cost, and patient outcomes across the population.",
    Icon: Building2,
  },
  {
    title: "ACCESS Care Orchestration",
    text: "Tech-enabled care between visits that closes gaps, coordinates teams, and manages risk.",
    Icon: Network,
  },
  {
    title: "Longitudinal Care Outcomes",
    text: "Better health, lower total cost, and improved care experience over time.",
    Icon: ChartNoAxesCombined,
  },
];

export function AcoAccessSection() {
  return (
    <section className="post-section-compact" data-header-bg="#f6fbfd" id="platform">
      <div className="post-container rounded-[var(--itera-card-radius)] bg-white/30 px-5 py-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
        <h2 className="heading-section-sm mx-auto max-w-[880px] text-center">
          ACOs Changed How Medicare Pays. ACCESS Changes How Care Happens.
        </h2>
        <div className="mt-12 grid items-center gap-[var(--itera-grid-gap)] lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.map(({ title, text, Icon }, index) => (
            <div className="contents" key={title}>
              <div className="flex gap-6">
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-deep-blue text-white shadow-glow">
                  <Icon size={38} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="flow-title">{title}</h3>
                  <p className="flow-text mt-3">{text}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden text-primary lg:block" size={46} strokeWidth={1.7} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
