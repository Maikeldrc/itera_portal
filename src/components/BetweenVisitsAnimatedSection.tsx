import "./BetweenVisitsAnimatedSection.css";

const actionCards = [
  {
    title: "Act Early",
    copy: "Detect risk and intervene sooner.",
    tone: "",
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 19V11M12 19V5M19 19v-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M4.5 14.5 11.5 8l3.5 3.5L20 6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Close Gaps",
    copy: "Coordinate care and ensure follow-up.",
    tone: "teal",
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="17" r="3.5" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Better Outcomes",
    copy: "Improve quality and total cost.",
    tone: "orange",
    icon: (
      <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20 8.7c0 5.4-8 9.8-8 9.8s-8-4.4-8-9.8A4.55 4.55 0 0 1 12 5a4.55 4.55 0 0 1 8 3.7Z" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export function BetweenVisitsAnimatedSection() {
  return (
    <section
      className="between-visits-section"
      data-header-bg="#e8f1f2"
      id="for-providers"
      aria-label="Healthcare between visits animated section"
    >
      <div className="between-visits-shell">
        <div className="between-visits-visual">
          <div className="between-visits-portrait-wrap">
            <img
              className="between-visits-portrait-image"
              src="/images/between-visits-visual-layer-tinted.webp"
              alt="Care manager using a tablet to coordinate patient care"
            />
            <div className="between-visits-portrait-colorwash" />
            <div className="between-visits-portrait-vignette" />
            <div className="between-visits-portrait-ring" />

            <svg className="between-visits-orbit-svg" viewBox="0 0 520 520" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <filter id="between-visits-tail-blur" x="-120%" y="-200%" width="340%" height="500%">
                  <feGaussianBlur stdDeviation="5.8" />
                </filter>
                <linearGradient id="between-visits-tail-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#1b98e0" stopOpacity="0" />
                  <stop offset="42%" stopColor="#7beaff" stopOpacity="0.18" />
                  <stop offset="78%" stopColor="#dfffff" stopOpacity="0.78" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                </linearGradient>
                <path id="between-visits-orbit-path-a" d="M88,272 C92,108 216,22 342,58 C448,88 492,208 454,326 C414,452 254,502 132,414 C62,364 42,304 88,272" />
                <path id="between-visits-orbit-path-b" d="M66,340 C162,244 260,204 402,212 C468,216 503,164 478,104" />
                <path id="between-visits-orbit-path-c" d="M112,118 C192,182 294,222 430,222" />
              </defs>

              <path className="between-visits-orbit solid" d="M86,260 C82,105 218,20 350,60 C470,96 500,232 444,352 C384,478 230,486 118,392 C54,338 44,286 86,260" />
              <path className="between-visits-orbit dashed" d="M108,264 C120,142 214,78 334,104 C428,126 472,234 430,330 C386,432 250,454 150,390 C92,352 72,300 108,264" />
              <path className="between-visits-orbit thin" d="M52,360 C170,246 286,208 420,214 C480,216 510,166 486,96" />

              <circle className="between-visits-orbit-node" cx="112" cy="118" r="7" />
              <circle className="between-visits-orbit-node" cx="430" cy="222" r="6" />
              <circle className="between-visits-orbit-node" cx="118" cy="392" r="7" />
              <circle className="between-visits-orbit-node orange" cx="454" cy="326" r="5" />

              <g className="between-visits-comet">
                <animateMotion dur="6.2s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#between-visits-orbit-path-a" />
                </animateMotion>
                <ellipse className="between-visits-comet-tail" cx="-34" cy="0" rx="62" ry="7" />
                <circle className="between-visits-comet-head" cx="0" cy="0" r="4.6" />
              </g>
              <g className="between-visits-comet">
                <animateMotion dur="5.4s" begin="-1.8s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#between-visits-orbit-path-b" />
                </animateMotion>
                <ellipse className="between-visits-comet-tail" cx="-30" cy="0" rx="54" ry="6.4" />
                <circle className="between-visits-comet-head" cx="0" cy="0" r="4.2" />
              </g>
              <g className="between-visits-comet">
                <animateMotion dur="4.9s" begin="-3s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#between-visits-orbit-path-c" />
                </animateMotion>
                <ellipse className="between-visits-comet-tail" cx="-28" cy="0" rx="48" ry="5.8" />
                <circle className="between-visits-comet-head" cx="0" cy="0" r="4" />
              </g>
            </svg>
          </div>

          <article className="between-visits-float-card bp">
            <div className="between-visits-card-top">
              <span className="between-visits-float-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M20 8.5c0 5.5-8 10-8 10s-8-4.5-8-10A4.5 4.5 0 0 1 12 5a4.5 4.5 0 0 1 8 3.5Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M7.5 12h2l1.2-2.7 2 5.2 1.4-2.5h2.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
              <h4>BP Reading</h4>
            </div>
            <p>120/76 mmHg</p>
            <svg className="between-visits-bp-chart" viewBox="0 0 112 28" fill="none" aria-hidden="true">
              <path d="M2 22 L18 17 L31 19 L45 12 L59 18 L73 15 L87 18 L108 10" stroke="#4b6cff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </article>

          <article className="between-visits-float-card task">
            <div className="between-visits-card-top">
              <span className="between-visits-float-icon">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <h4>Care Plan Task</h4>
            </div>
            <p>Medication Review</p>
          </article>

          <article className="between-visits-float-card note">
            <div className="between-visits-card-top">
              <span className="between-visits-float-icon">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="5" y="5" width="14" height="16" rx="2.5" stroke="currentColor" strokeWidth="2" />
                  <path d="M9 4v4M15 4v4M9 13l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h4>Care Manager Note</h4>
            </div>
            <p>Completed</p>
          </article>
        </div>

        <div className="between-visits-content">
          <h2>Healthcare happens in visits. Outcomes happen between them.</h2>
          <div className="between-visits-accent-line" />
          <p className="between-visits-lead">
            We bring together clinical teams, patient signals, and care operations to act early, close gaps, and deliver better outcomes.
          </p>

          <div className="between-visits-action-stack">
            {actionCards.map(({ title, copy, icon, tone }) => (
              <article className="between-visits-action-card" key={title}>
                <div className={`between-visits-action-icon ${tone}`}>{icon}</div>
                <div className="between-visits-action-title">{title}</div>
                <div className="between-visits-action-copy">{copy}</div>
                <div className="between-visits-action-arrow" aria-hidden="true">
                  &rsaquo;
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
