import {
  ArrowRight,
  BarChart3,
  Database,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const journeyCards = [
  {
    title: "Connect Data",
    text: "Unify EHR, claims, and social data",
    Icon: Database,
  },
  {
    title: "Coordinate Teams",
    text: "Align care managers, clinicians, and staff",
    Icon: UsersRound,
  },
  {
    title: "Engage Patients",
    text: "Scale outreach, education, and feedback",
    Icon: MessageSquareText,
  },
  {
    title: "Measure Outcomes",
    text: "Track quality, utilization, and performance",
    Icon: BarChart3,
  },
];

export function LongitudinalCareJourneySection() {
  return (
    <section className="longitudinal-journey-section post-section relative isolate overflow-hidden bg-transparent" data-header-bg="#f6fbfd">
      <div className="post-container">
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(560px,1.1fr)] lg:gap-14">
          <div className="relative z-10">
            <p className="eyebrow mb-7 inline-flex max-w-full whitespace-normal rounded-full border border-[#3657d8]/70 bg-white/65 px-6 py-3 text-[#3657d8] shadow-sm">
              Care Between Visits. Outcomes Across the Journey.
            </p>
            <h2 className="heading-section max-w-[650px] break-words">
              Longitudinal care for the entire patient journey<span className="text-orange">.</span>
            </h2>
            <p className="text-hero mt-5 max-w-[650px]">
              ITERA.HEALTH coordinates clinicians, care teams, patients, and caregivers from early risk to complex disease
              through a digital care orchestration infrastructure.
            </p>

            <div className="mt-7 flex max-w-[640px] flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
              <div className="flex items-center gap-3 font-body text-[15px] font-bold leading-5 tracking-[-0.01em] text-teal-600">
                <ShieldCheck size={25} strokeWidth={2.2} aria-hidden="true" />
                Secure by design
              </div>
              <div className="flex items-center gap-3 font-body text-[15px] font-bold leading-5 tracking-[-0.01em] text-orange">
                <LockKeyhole size={25} strokeWidth={2.2} aria-hidden="true" />
                Interoperable
              </div>
              <div className="flex items-center gap-3 font-body text-[15px] font-bold leading-5 tracking-[-0.01em] text-[#3657d8]">
                <Sparkles size={25} strokeWidth={2.2} aria-hidden="true" />
                Built for outcomes
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex h-14 items-center justify-center gap-4 rounded-full bg-[#3657d8] px-8 font-body text-[16px] font-bold leading-5 tracking-[-0.01em] text-white shadow-[0_18px_38px_rgba(54,87,216,0.22)] transition hover:-translate-y-0.5"
                href="#cta"
              >
                Request a demo
                <ArrowRight size={20} aria-hidden="true" />
              </a>
              <a
                className="inline-flex h-14 items-center justify-center gap-4 rounded-full px-7 font-body text-[16px] font-bold leading-5 tracking-[-0.01em] text-[#3657d8] transition hover:-translate-y-0.5 hover:bg-white/50"
                href="#platform"
              >
                Explore the platform
                <ArrowRight size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="longitudinal-visual-wrap">
              <video
                aria-label="Animated healthcare technology care orchestration visual"
                autoPlay
                className="longitudinal-video"
                loop
                muted
                onCanPlay={(event) => {
                  void event.currentTarget.play();
                }}
                playsInline
                poster="/hero-orchestration-reference.png"
                preload="metadata"
                src="/hero-healthcare-technology.mp4"
              >
                <source src="/hero-healthcare-technology.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>

        <div className="mt-11 grid gap-[var(--itera-grid-gap)] sm:grid-cols-2 lg:grid-cols-4">
          {journeyCards.map(({ title, text, Icon }) => (
            <article
              className="grid min-h-[126px] grid-cols-[78px_1fr] items-center overflow-hidden rounded-[var(--itera-card-radius)] border border-[var(--itera-card-border)] bg-[var(--itera-card-bg)] p-5 shadow-[var(--itera-card-shadow)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white"
              key={title}
            >
              <div className="grid h-[68px] w-[68px] place-items-center rounded-full bg-primary/8 text-primary">
                <Icon size={32} strokeWidth={2.15} aria-hidden="true" />
              </div>
              <div className="border-l border-primary/12 pl-5">
                <h3 className="font-heading text-[18px] font-extrabold leading-[23px] tracking-[-0.025em] text-primary">
                  {title}
                </h3>
                <p className="mt-2 font-body text-[15px] font-semibold leading-[23px] tracking-[-0.01em] text-navy">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
