import { Award, Network, UsersRound } from "lucide-react";

const foundationSteps = [
  {
    number: "1",
    title: "Identify & Engage",
    description: "Find the right patients early using predictive risk and real-time signals.",
    Icon: UsersRound,
    accent: "blue",
  },
  {
    number: "2",
    title: "Coordinate & Deliver",
    description: "Orchestrate the right care, in the right place, at the right time.",
    Icon: Network,
    accent: "teal",
  },
  {
    number: "3",
    title: "Improve & Reward",
    description: "Measure outcomes, close gaps, and drive meaningful value for all.",
    Icon: Award,
    accent: "orange",
  },
] as const;

const accentStyles = {
  blue: {
    badge: "bg-primary text-white",
    icon: "bg-primary/10 text-primary",
    border: "border-b-primary",
    arrowLine: "border-primary/55",
    arrowHead: "border-l-primary/55",
  },
  teal: {
    badge: "bg-teal-600 text-white",
    icon: "bg-teal-500/10 text-teal-600",
    border: "border-b-teal-600",
    arrowLine: "border-teal-500/55",
    arrowHead: "border-l-teal-500/55",
  },
  orange: {
    badge: "bg-orange text-white",
    icon: "bg-orange/10 text-orange",
    border: "border-b-orange",
    arrowLine: "border-orange/55",
    arrowHead: "border-l-orange/55",
  },
} as const;

export function FoundationValueBasedCareSection() {
  return (
    <section className="post-section-compact" data-header-bg="#f6fbfd">
      <div className="post-container grid grid-cols-1 gap-10 rounded-[var(--itera-card-radius)] border border-[var(--itera-card-border)] bg-[var(--itera-card-bg)] p-8 shadow-[var(--itera-card-shadow)] backdrop-blur-xl lg:grid-cols-[0.85fr_1.75fr] lg:items-center lg:p-12">
        <div className="max-w-[420px]">
          <p className="font-body text-[12px] font-extrabold uppercase leading-[18px] tracking-[0.22em] text-primary">
            ACCESS Care Orchestration
          </p>
          <h2 className="mt-7 font-heading text-[clamp(32px,3vw,44px)] font-extrabold leading-[1.06] tracking-[-0.04em] text-navy">
            The Foundation for Value-Based Care
          </h2>
          <span className="mt-6 block h-1 w-14 rounded-full bg-orange" />
          <p className="mt-7 max-w-[360px] font-body text-[16px] leading-[27px] tracking-[-0.01em] text-navy/72">
            The ACCESS model drives coordinated, personalized care that improves outcomes and reduces total cost of care.
          </p>
          <a className="mt-8 inline-flex items-center gap-2 font-body text-[15px] font-bold leading-5 tracking-[-0.01em] text-primary transition hover:text-deep" href="#platform">
            Explore the ACCESS Model
            <span aria-hidden="true">-&gt;</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-[var(--itera-grid-gap)] md:grid-cols-3">
          {foundationSteps.map((step, index) => {
            const styles = accentStyles[step.accent];
            const Icon = step.Icon;

            return (
              <article
                className={`relative min-h-[320px] rounded-[var(--itera-card-radius)] border border-[var(--itera-card-border)] border-b-[5px] ${styles.border} bg-white/76 px-8 pb-8 pt-9 text-center shadow-[var(--itera-card-shadow)] backdrop-blur-xl`}
                key={step.title}
              >
                {index < foundationSteps.length - 1 && (
                  <div className="pointer-events-none absolute right-[-34px] top-[128px] z-10 hidden w-[64px] items-center md:flex" aria-hidden="true">
                    <span className={`h-0 w-full border-t-2 border-dotted ${styles.arrowLine}`} />
                    <span className={`-ml-1 h-0 w-0 border-y-[7px] border-l-[10px] border-y-transparent ${styles.arrowHead}`} />
                  </div>
                )}

                <span className={`mx-auto grid h-11 w-11 place-items-center rounded-full font-heading text-[20px] font-extrabold leading-none ${styles.badge}`}>
                  {step.number}
                </span>
                <div className={`mx-auto mt-7 grid h-24 w-24 place-items-center rounded-full ${styles.icon}`}>
                  <Icon size={44} strokeWidth={1.8} />
                </div>
                <h3 className="mt-8 font-heading text-[19px] font-extrabold leading-[24px] tracking-[-0.025em] text-navy">
                  {step.title}
                </h3>
                <p className="mx-auto mt-5 max-w-[220px] font-body text-[14px] leading-[23px] tracking-[-0.01em] text-navy/68">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
