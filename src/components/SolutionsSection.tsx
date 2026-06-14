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
    <section className="mx-auto max-w-[1320px] px-6 pb-6 lg:px-12" data-header-bg="#e8f1f2" id="solutions">
      <h2 className="heading-section-sm text-center">
        Solutions for every step of the care journey.
      </h2>
      <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {solutions.map(({ title, text, Icon }) => (
          <article className="rounded-2xl border border-primary/15 bg-white/60 p-7 shadow-soft" key={title}>
            <Icon className="text-primary" size={39} strokeWidth={1.8} aria-hidden="true" />
            <h3 className="solution-title mt-5">{title}</h3>
            <p className="solution-text mt-3">{text}</p>
            <a className="mt-4 inline-flex items-center gap-2 font-body text-[14px] font-bold leading-5 tracking-[-0.01em] text-primary" href="#resources">
              Learn more <span aria-hidden="true">-&gt;</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
