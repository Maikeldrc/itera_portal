import { ClipboardCheck, HeartPulse, LockKeyhole, Network, TrendingUp } from "lucide-react";

const signalCards = [
  { title: "BP Reading", value: "120/76 mmHg", Icon: HeartPulse },
  { title: "Care Plan Task", value: "Medication Review", Icon: LockKeyhole },
  { title: "Care Manager Note", value: "Completed", Icon: ClipboardCheck },
];

const actionRows = [
  {
    title: "Act Early",
    description: "Detect risk and intervene sooner.",
    Icon: TrendingUp,
    accent: "blue",
  },
  {
    title: "Close Gaps",
    description: "Coordinate care and ensure follow-up.",
    Icon: Network,
    accent: "teal",
  },
  {
    title: "Better Outcomes",
    description: "Improve quality and total cost.",
    Icon: HeartPulse,
    accent: "orange",
  },
] as const;

const bpPoints = [
  [0, 24],
  [20, 17],
  [40, 22],
  [60, 12],
  [80, 19],
  [100, 14],
  [120, 21],
  [140, 10],
  [160, 16],
  [180, 20],
];

const accentStyles = {
  blue: "bg-primary/10 text-primary",
  teal: "bg-teal-500/10 text-teal-600",
  orange: "bg-orange/10 text-orange",
} as const;

export function ProblemSection() {
  return (
    <section className="px-6 py-5 lg:px-12" data-header-bg="#dfeef8" id="for-providers">
      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 overflow-hidden rounded-[34px] border border-primary/10 bg-[linear-gradient(135deg,rgba(239,248,255,0.96),rgba(219,236,250,0.94))] p-6 shadow-[0_24px_80px_rgba(0,43,92,0.1)] lg:grid-cols-[0.95fr_1fr] lg:gap-16 lg:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_23%_50%,rgba(255,255,255,0.9),rgba(255,255,255,0)_32%),radial-gradient(circle_at_80%_16%,rgba(27,152,224,0.14),rgba(27,152,224,0)_42%)]" />

        <div className="relative min-h-[560px]">
          <div className="absolute left-[7%] top-[4%] h-[500px] w-[500px] rounded-full border border-primary/18 bg-white/15 shadow-[inset_0_0_0_18px_rgba(255,255,255,0.16)] max-sm:left-1/2 max-sm:h-[360px] max-sm:w-[360px] max-sm:-translate-x-1/2" />
          <svg className="absolute left-[1%] top-[2%] h-[520px] w-[560px] max-w-none max-sm:left-1/2 max-sm:h-[390px] max-sm:w-[410px] max-sm:-translate-x-1/2" viewBox="0 0 560 520" fill="none" aria-hidden="true">
            <ellipse cx="255" cy="265" rx="232" ry="232" stroke="#1b98e0" strokeOpacity="0.22" strokeWidth="1.3" />
            <ellipse cx="255" cy="265" rx="194" ry="194" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2.6" />
            <path d="M65 150C172 86 312 80 426 140C500 180 515 270 472 344C410 452 256 470 138 420C42 380 18 250 65 150Z" stroke="#3f7fe5" strokeDasharray="7 12" strokeOpacity="0.55" strokeWidth="1.6" />
            <path d="M32 362C138 292 232 286 328 326C424 366 484 340 535 292" stroke="#3f7fe5" strokeOpacity="0.55" strokeWidth="2" />
            <path d="M96 454C176 493 315 494 424 438C508 394 538 324 518 242" stroke="#3f7fe5" strokeDasharray="8 13" strokeOpacity="0.5" strokeWidth="1.5" />
            <circle cx="74" cy="178" r="10" fill="#ffffff" stroke="#3f7fe5" strokeWidth="2" />
            <circle cx="423" cy="139" r="10" fill="#ffffff" stroke="#3f7fe5" strokeWidth="2" />
            <circle cx="419" cy="326" r="10" fill="#ffffff" stroke="#3f7fe5" strokeWidth="2" />
            <circle cx="318" cy="438" r="10" fill="#ffffff" stroke="#3f7fe5" strokeWidth="2" />
          </svg>

          <div className="absolute bottom-0 left-[17%] h-[500px] w-[400px] overflow-hidden rounded-b-[240px] max-sm:left-1/2 max-sm:h-[380px] max-sm:w-[310px] max-sm:-translate-x-1/2">
            <img
              className="h-full w-full object-cover object-[47%_50%]"
              src="/care-manager.png"
              alt="Care manager reviewing patient signals on a tablet"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(223,238,248,0)_66%,rgba(223,238,248,0.78)_100%)]" />
          </div>

          <div className="absolute left-0 top-6 flex w-[230px] flex-col gap-7 max-sm:left-2 max-sm:top-5 max-sm:w-[180px]">
            {signalCards.map(({ title, value, Icon }, index) => (
              <article className="rounded-2xl border border-primary/10 bg-white/88 p-5 shadow-[0_16px_42px_rgba(0,43,92,0.11)] backdrop-blur-xl max-sm:p-4" key={title}>
                <div className="flex gap-3">
                  <Icon className="mt-1 shrink-0 text-primary" size={21} />
                  <div className="min-w-0 flex-1">
                    <p className="font-body text-[13px] font-extrabold leading-[18px] tracking-[-0.01em] text-navy max-sm:text-[12px]">{title}</p>
                    <p className="mt-1 font-body text-[12px] font-semibold leading-[17px] tracking-[-0.01em] text-navy/70 max-sm:text-[11px]">{value}</p>
                    {index === 0 && (
                      <svg className="mt-3 h-8 w-full" viewBox="0 0 190 42" aria-hidden="true" preserveAspectRatio="xMinYMid meet">
                        <path d={bpPoints.map(([x, y], pointIndex) => `${pointIndex === 0 ? "M" : "L"}${x} ${y}`).join(" ")} fill="none" stroke="#3f7fe5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        {bpPoints.map(([x, y]) => (
                          <circle cx={x} cy={y} fill="#3f7fe5" key={`${x}-${y}`} r="2.6" stroke="#ffffff" strokeWidth="1.4" />
                        ))}
                      </svg>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative z-10 py-4 lg:pr-10">
          <h2 className="font-heading text-[clamp(34px,4vw,54px)] font-extrabold leading-[1.04] tracking-[-0.045em] text-navy">
            Healthcare happens in visits. Outcomes happen between them.
          </h2>
          <span className="mt-7 block h-1 w-14 rounded-full bg-orange" />
          <p className="mt-7 max-w-[560px] font-body text-[16px] leading-[27px] tracking-[-0.01em] text-navy/76">
            We bring together clinical teams, patient signals, and care operations to act early, close gaps, and deliver
            better outcomes.
          </p>

          <div className="mt-7 grid max-w-[560px] gap-4">
            {actionRows.map(({ title, description, Icon, accent }) => (
              <article className="grid grid-cols-[58px_1fr_auto] items-center gap-5 rounded-2xl border border-primary/10 bg-white/86 px-5 py-4 shadow-[0_14px_38px_rgba(0,43,92,0.09)] backdrop-blur-xl" key={title}>
                <div className={`grid h-12 w-12 place-items-center rounded-full ${accentStyles[accent]}`}>
                  <Icon size={27} strokeWidth={1.9} />
                </div>
                <div className="grid gap-1 sm:grid-cols-[0.75fr_1.25fr] sm:items-center sm:gap-6">
                  <h3 className="font-heading text-[17px] font-extrabold leading-[22px] tracking-[-0.025em] text-navy">
                    {title}
                  </h3>
                  <p className="font-body text-[13px] font-medium leading-[20px] tracking-[-0.01em] text-navy/66">
                    {description}
                  </p>
                </div>
                <span className="text-primary" aria-hidden="true">
                  &gt;
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
