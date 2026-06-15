import {
  Activity,
  ArrowRight,
  BookOpen,
  Check,
  Heart,
  HeartPulse,
  Home,
  LineChart,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TriangleAlert,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const timelineSteps = [
  {
    number: "1",
    title: "Vital streams in",
    text: "A home reading arrives.",
    Icon: Home,
    tone: "blue",
  },
  {
    number: "2",
    title: "Alert fires",
    text: "Above-goal threshold crossed.",
    Icon: TriangleAlert,
    tone: "orange",
  },
  {
    number: "3",
    title: "A nurse acts",
    text: "Care manager reaches out.",
    Icon: Stethoscope,
    tone: "blue",
  },
  {
    number: "4",
    title: "Task closes",
    text: "Follow-up back in the plan.",
    Icon: Check,
    tone: "green",
  },
];

const projectedMetrics = [
  {
    value: 28,
    suffix: "%",
    label: "lower heart-failure risk",
    Icon: Heart,
    className: "impact-projected-blue",
  },
  {
    value: 20,
    suffix: "%",
    label: "fewer major CV events",
    Icon: Activity,
    className: "impact-projected-green",
  },
  {
    value: 27,
    suffix: "%",
    label: "lower stroke risk",
    Icon: BrainIcon,
    className: "impact-projected-purple",
  },
];

const flowSteps = [
  { title: "1. Signal appears", text: "BP reading enters", Icon: HeartPulse, tone: "orange" },
  { title: "2. Alert triggers", text: "Threshold exceeded", Icon: TriangleAlert, tone: "orange" },
  { title: "3. Team responds", text: "Outreach is made", Icon: Stethoscope, tone: "blue" },
  { title: "4. Outcome improves", text: "Plan updated", Icon: Check, tone: "green" },
  { title: "5. Impact measured", text: "Results are tracked", Icon: LineChart, tone: "navy" },
];

function useCountUp(inView: boolean, end: number, duration = 1400, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    let startTime = 0;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      setValue(Number((end * easeOut(progress)).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [decimals, duration, end, inView]);

  return value;
}

export function MeasuredImpactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const mainMetric = useCountUp(isActive, 7.3, 950, 1);
  const metric28 = useCountUp(isActive, 28, 760);
  const metric20 = useCountUp(isActive, 20, 760);
  const metric27 = useCountUp(isActive, 27, 760);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const numericMetrics = [metric28, metric20, metric27];

  return (
    <section
      className={`impact-section ${isActive ? "impact-section-active" : ""}`}
      data-header-bg="#e8f1f2"
      ref={sectionRef}
      aria-labelledby="impact-title"
    >
      <div className="impact-ambient impact-ambient-one" />
      <div className="impact-ambient impact-ambient-two" />

      <div className="mx-auto max-w-[1440px] px-6 py-10 lg:px-12 xl:py-12">
        <div className="impact-heading">
          <p className="impact-eyebrow">
            <Sparkles size={14} strokeWidth={1.8} aria-hidden="true" />
            CARE THAT DOESN'T WAIT
          </p>
          <h2 className="impact-title" id="impact-title">
            Real-time care. Measured impact<span>.</span>
          </h2>
          <p className="impact-subtitle">From patient signal to coordinated action and better outcomes.</p>
        </div>

        <div className="impact-grid">
          <article className="impact-care-card">
            <div className="impact-card-kicker">
              <span className="impact-kicker-icon">
                <HeartPulse size={28} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span>PATIENT ALERT</span>
            </div>

            <h3>A signal moves. The team moves with it.</h3>

            <div className="impact-bp-module">
              <div className="impact-bp-copy impact-bp-start">
                <p>HOME BP · MMHG</p>
                <strong>158/96</strong>
                <span>Today, 8:36 AM</span>
              </div>

              <svg className="impact-bp-line" viewBox="0 0 390 95" aria-hidden="true">
                <defs>
                  <linearGradient id="bpGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="#ff5f2e" />
                    <stop offset="48%" stopColor="#d8a50b" />
                    <stop offset="100%" stopColor="#22a96b" />
                  </linearGradient>
                </defs>
                <path className="impact-bp-track" d="M12 36 C 110 25, 190 82, 378 58" />
                <path className="impact-bp-draw" d="M12 36 C 110 25, 190 82, 378 58" />
                <circle className="impact-bp-dot impact-bp-dot-start" cx="12" cy="36" r="6.5" />
                <circle className="impact-bp-dot impact-bp-dot-end" cx="378" cy="58" r="6.5" />
                <circle className="impact-bp-runner" cx="12" cy="36" r="5.5" />
              </svg>

              <div className="impact-bp-copy impact-bp-end">
                <strong>122/78</strong>
                <p>Improved</p>
                <span>Today, 9:42 AM</span>
              </div>
            </div>

            <div className="impact-timeline" aria-label="Care workflow timeline">
              <div className="impact-timeline-line">
                <span />
              </div>
              {timelineSteps.map(({ number, title, text, Icon, tone }, index) => (
                <div className={`impact-timeline-step impact-step-${index + 1} impact-tone-${tone}`} key={title}>
                  <div className="impact-step-number">{number}</div>
                  <div className="impact-step-icon">
                    <Icon size={30} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              ))}
            </div>

            <div className="impact-aida-strip">
              <Sparkles className="impact-aida-sparkle" size={34} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <h4>AI Assistant (AIDA)</h4>
                <p>Continuously analyzes data, prioritizes alerts, and supports your care team.</p>
              </div>
              <span>Always on</span>
            </div>
          </article>

          <article className="impact-results-panel">
            <div className="impact-mesh" aria-hidden="true" />
            <p className="impact-results-kicker">REAL RESULTS, MEASURED</p>

            <div className="impact-main-metric">
              <p>
                {mainMetric.toFixed(1)}
                <span>%</span>
              </p>
              <span className="impact-measured-badge">
                <Check size={17} strokeWidth={2} aria-hidden="true" />
                MEASURED
              </span>
            </div>

            <p className="impact-mm-text">
              <strong>-9.84 mmHg systolic</strong>
              <span>·</span>
              over 10 months
            </p>
            <p className="impact-results-copy">
              Average systolic reduction in a high-risk cardiovascular Medicare population, measured on the Itera
              platform.
            </p>

            <div className="impact-results-divider" />

            <div className="impact-projected-label">PROJECTED*</div>
            <div className="impact-projected-grid">
              {projectedMetrics.map(({ value, suffix, label, Icon, className }, index) => {
                const displayValue = typeof value === "number" ? numericMetrics[index] : value;
                return (
                  <div className={`impact-projected-item ${className}`} key={label}>
                    <span>
                      <Icon size={34} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <strong>
                      {displayValue}
                      {suffix}
                    </strong>
                    <p>{label}</p>
                  </div>
                );
              })}
            </div>

            <p className="impact-disclaimer">
              * Associations replicated from published literature in high-risk cardiovascular populations. Not
              separately measured ITERA.HEALTH outcomes.
            </p>

            <a className="impact-methodology" href="#platform">
              <BookOpen size={22} strokeWidth={1.7} aria-hidden="true" />
              See methodology
              <ArrowRight size={18} strokeWidth={1.9} aria-hidden="true" />
            </a>
          </article>
        </div>

        <div className="impact-flow-bar" aria-label="How it works animation flow">
          <p>HOW IT WORKS</p>
          <div className="impact-flow-steps">
            {flowSteps.map(({ title, text, Icon, tone }, index) => (
              <div className={`impact-flow-step impact-flow-${index + 1} impact-tone-${tone}`} key={title}>
                <span className="impact-flow-icon">
                  <Icon size={27} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <div>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>
                {index < flowSteps.length - 1 ? <ArrowRight className="impact-flow-arrow" size={22} /> : null}
              </div>
            ))}
          </div>
        </div>

        <p className="impact-security-note">
          <ShieldCheck size={21} strokeWidth={1.7} aria-hidden="true" />
          Secure. HIPAA Compliant. FHIR Native. Built for value-based care.
        </p>
      </div>
    </section>
  );
}

function BrainIcon({ size = 24, strokeWidth = 2, ...props }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.3 5.1c-2.4.1-4.1 2-4.1 4.1 0 .7.2 1.4.5 2a4.1 4.1 0 0 0 1.1 7.9h2.5M15.7 5.1c2.4.1 4.1 2 4.1 4.1 0 .7-.2 1.4-.5 2a4.1 4.1 0 0 1-1.1 7.9h-2.5M8.3 5.1C8.4 3.4 9.8 2 11.5 2H12c1.9 0 3.5 1.6 3.7 3.1M8.3 5.1v14M15.7 5.1v14M8.3 10.4H6.7M15.7 10.4h1.6M8.3 14.6H6.4M15.7 14.6h1.9M11.2 7.3c.7.6 1.3.6 2 0M10.8 17.1c.9-.5 1.7-.5 2.5 0"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
