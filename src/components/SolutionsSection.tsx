import { Building2, ChartBarIncreasing, UserRoundCheck, UsersRound } from "lucide-react";

const solutions = [
  {
    title: "Chronic & Rising Risk Care",
    text: "Identify early, engage early, intervene early.",
    Icon: UserRoundCheck,
  },
  {
    title: "Transitional Care",
    text: "Seamless transitions, real-time alerts, fewer readmissions.",
    Icon: Building2,
  },
  {
    title: "Value-Based Care Enablement",
    text: "Close gaps, improve quality, achieve shared savings.",
    Icon: ChartBarIncreasing,
  },
  {
    title: "Patient & Caregiver Engagement",
    text: "Make it simple for patients to stay on track.",
    Icon: UsersRound,
  },
];

export function SolutionsSection() {
  return (
    <section className="post-section-compact" data-header-bg="#f6fbfd" id="solutions">
      <div className="post-container">
      <h2 className="heading-section-sm text-center">
        Solutions for every step of the care journey.
      </h2>
      <div className="mt-8 grid gap-[var(--itera-grid-gap)] md:grid-cols-2 xl:grid-cols-4">
        {solutions.map(({ title, text, Icon }) => (
          <article className="rounded-[var(--itera-card-radius)] border border-[var(--itera-card-border)] bg-[var(--itera-card-bg)] p-7 shadow-[var(--itera-card-shadow)]" key={title}>
            <div className="grid h-16 w-16 place-items-center rounded-full bg-primary/8 text-primary">
              <Icon size={32} strokeWidth={2} aria-hidden="true" />
            </div>
            <h3 className="solution-title mt-5">{title}</h3>
            <p className="solution-text mt-3">{text}</p>
            <a className="mt-4 inline-flex items-center gap-2 font-body text-[14px] font-bold leading-5 tracking-[-0.01em] text-primary" href="#resources">
              Learn more <span aria-hidden="true">-&gt;</span>
            </a>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
