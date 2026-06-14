import {
  ArrowRight,
  BarChart3,
  Database,
  MessageCircle,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

const platformPillars = [
  {
    number: "01",
    icon: Database,
    title: "Computable care plan",
    text: "Structured goals and trackable tasks become the shared source of truth.",
    tone: "blue",
  },
  {
    number: "02",
    icon: UsersRound,
    title: "One plan for every role",
    text: "Clinicians, patients, caregivers, and care teams see the same plan in role-specific views.",
    tone: "blue",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Continuous measurement",
    text: "Vitals, patient-reported outcomes, and care gaps stream into the plan.",
    tone: "blue",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Communication suite",
    text: "Secure chat, video, reminders, and messages stay tied to the journey.",
    tone: "orange",
  },
  {
    number: "05",
    icon: Workflow,
    title: "Workflow orchestration",
    text: "Follow-ups, referrals, tasks, and transitions are coordinated from one layer.",
    tone: "orange",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Quality and performance",
    text: "Quality measures, risk signals, and performance are tracked as care happens.",
    tone: "orange",
  },
];

export function BrickLInfrastructureSection() {
  return (
    <section className="brickl-platform-section relative overflow-hidden bg-[#eef7fc]" data-header-bg="#eef7fc" id="brickl">
      <img
        alt="BrickL care orchestration platform background with care plan, clinical apps, operational command center, and connected healthcare workflows."
        className="brickl-platform-bg absolute"
        src="/BrickL_Platform.png"
      />
      <div className="brickl-platform-readability absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#eef7fc] via-[#eef7fc]/72 to-transparent" />

      <div className="brickl-platform-content relative z-10 mx-auto flex max-w-[1680px] flex-col px-6 pb-8 pt-20 sm:px-10 lg:px-16 lg:pt-24 xl:px-[64px]">
        <div className="brickl-platform-copy max-w-[590px]">
            <h2 className="font-heading text-[clamp(36px,3vw,52px)] font-extrabold leading-[1.08] tracking-[-0.05em] text-navy">
              <span className="block">Built for connected care. </span>
              <span className="block">
                Powered by <span className="text-primary">one</span>{" "}
              </span>
              <span className="block italic text-[#E97A43]">computable care plan.</span>
            </h2>
            <p className="mt-6 max-w-[535px] font-body text-[16px] leading-[28px] tracking-[-0.01em] text-primary">
              ITERA.HEALTH brings care teams, workflows, engagement, and outcomes together on one orchestration
              layer, so every role, every signal, and every task moves care forward.
            </p>

            <div className="brickl-platform-actions mt-9">
              <a
                className="inline-flex h-14 items-center justify-center gap-3 rounded-[0.8rem] bg-primary px-8 font-body text-[16px] font-bold tracking-[-0.01em] text-white shadow-[0_18px_38px_rgba(27,152,224,0.28)] transition hover:-translate-y-0.5 hover:bg-deep"
                href="#top"
              >
                Book a demo <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                className="inline-flex h-14 items-center justify-center gap-3 rounded-[0.8rem] border border-primary bg-white/60 px-8 font-body text-[16px] font-bold tracking-[-0.01em] text-primary shadow-[0_16px_34px_rgba(0,43,92,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
                href="#solutions"
              >
                Explore the platform <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="brickl-platform-bottom mt-auto space-y-4 pt-[390px] lg:pt-0">
            <div className="brickl-platform-card-grid overflow-hidden rounded-[1.8rem] border border-primary/10 bg-white/78 shadow-[0_28px_80px_rgba(0,43,92,0.12)] backdrop-blur-xl">
              {platformPillars.map((pillar) => {
                const Icon = pillar.icon;
                const isOrange = pillar.tone === "orange";

                return (
                  <article
                    className="brickl-platform-pillar border-primary/12 p-5"
                    key={pillar.number}
                  >
                    <div className="mb-5 flex items-center gap-5">
                      <span
                        className={[
                          "grid h-10 w-10 place-items-center rounded-full font-heading text-[18px] font-extrabold tracking-[-0.04em]",
                          isOrange ? "bg-[#E97A43]/10 text-[#E97A43]" : "bg-primary/10 text-primary",
                        ].join(" ")}
                      >
                        {pillar.number}
                      </span>
                      <Icon
                        aria-hidden="true"
                        className={isOrange ? "text-[#E97A43]" : "text-primary"}
                        size={25}
                        strokeWidth={2.2}
                      />
                    </div>
                    <h3 className="font-heading text-[17px] font-extrabold leading-[22px] tracking-[-0.025em] text-navy">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 font-body text-[14px] leading-[22px] tracking-[-0.01em] text-[#0f2747]/85">
                      {pillar.text}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mx-auto flex max-w-[980px] flex-col items-center justify-center gap-4 rounded-full border border-primary/10 bg-white/72 px-7 py-4 text-center shadow-[0_18px_60px_rgba(0,43,92,0.1)] backdrop-blur-xl sm:flex-row sm:text-left">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-white shadow-[0_14px_30px_rgba(27,152,224,0.24)]">
                <ShieldCheck size={25} aria-hidden="true" />
              </span>
              <strong className="whitespace-nowrap font-heading text-[20px] font-extrabold leading-6 tracking-[-0.025em] text-primary">
                FHIR-compatible orchestration
              </strong>
              <span className="hidden h-8 w-px bg-primary/18 sm:block" />
              <p className="font-body text-[14px] leading-[22px] tracking-[-0.01em] text-[#315f94]">
                A single plan that can be read, updated, measured, and acted on by every authorized role.
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}
