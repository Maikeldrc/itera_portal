import "./ConnectedCareSection.css";

type IconName =
  | "database"
  | "users"
  | "chart"
  | "message"
  | "workflow"
  | "shield"
  | "phone"
  | "heart"
  | "clipboard"
  | "arrow"
  | "calendar";

const carePlanNodes = [
  { label: "Clinician App", icon: "users", tone: "blue", className: "node-1" },
  { label: "Patient App", icon: "phone", tone: "blue", className: "node-2" },
  { label: "Caregiver + Consent", icon: "shield", tone: "blue", className: "node-3" },
  { label: "Secure Chat & Video", icon: "message", tone: "blue", className: "node-4" },
  { label: "Home Vitals & Outcomes", icon: "heart", tone: "orange", className: "node-5" },
  { label: "Care Team Tasks", icon: "clipboard", tone: "orange", className: "node-6" },
  { label: "Quality Measures", icon: "chart", tone: "orange", className: "node-7" },
  { label: "Referral Workflow", icon: "arrow", tone: "orange", className: "node-8" },
] as const;

const featureCards = [
  {
    number: "01",
    icon: "database",
    title: "Computable care plan",
    text: "Structured goals and trackable tasks become the shared source of truth.",
    tone: "blue",
  },
  {
    number: "02",
    icon: "users",
    title: "One plan for every role",
    text: "Clinicians, patients, caregivers, and care teams see the same plan in the workflow.",
    tone: "blue",
  },
  {
    number: "03",
    icon: "chart",
    title: "Continuous measurement",
    text: "Vitals, patient-reported outcomes, and care gaps stream into the plan.",
    tone: "blue",
  },
  {
    number: "04",
    icon: "message",
    title: "Communication suite",
    text: "Secure chat, video, reminders, and messages stay tied to the journey.",
    tone: "orange",
  },
  {
    number: "05",
    icon: "workflow",
    title: "Workflow orchestration",
    text: "Follow-ups, referrals, tasks, and transitions are coordinated from one layer.",
    tone: "orange",
  },
  {
    number: "06",
    icon: "shield",
    title: "Quality and performance",
    text: "Quality measures, risk signals, and performance are tracked to drive improvement.",
    tone: "orange",
  },
] as const;

export function ConnectedCareSection() {
  return (
    <section className="connected-care-section" data-header-bg="#f4f8fc" id="brickl">
      <div className="connected-care-wrap">
        <div className="connected-care-hero">
          <div className="connected-care-diagram-outer">
            <CarePlanDiagram />
          </div>

          <div className="connected-care-copy">
            <h2 className="connected-care-title">
              <span>Built for connected care.</span>
              <span>
                Powered by <em className="connected-care-blue">one</em>
              </span>
              <span className="connected-care-orange">computable care plan.</span>
            </h2>
            <p className="connected-care-lede">
              BrickL brings care teams, workflows, engagement, and outcomes together on one orchestration layer, so
              every role, every signal, and every task moves care forward.
            </p>
            <div className="connected-care-actions">
              <a className="connected-care-button connected-care-button-primary" href="#top">
                Book a demo
              </a>
              <a className="connected-care-button connected-care-button-secondary" href="#solutions">
                Explore the platform
              </a>
            </div>
          </div>
        </div>

        <div className="connected-care-features" aria-label="BrickL platform capabilities">
          {featureCards.map((feature) => (
            <article className={`connected-care-feature connected-care-${feature.tone}`} key={feature.number}>
              <div className="connected-care-feature-head">
                <span className="connected-care-feature-number">{feature.number}</span>
                <span className="connected-care-feature-icon" aria-hidden="true">
                  <Icon name={feature.icon} />
                </span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>

        <div className="connected-care-footer-pill">
          <div className="connected-care-footer-left">
            <span className="connected-care-footer-icon" aria-hidden="true">
              <Icon name="shield" />
            </span>
            <strong>FHIR-compatible orchestration</strong>
          </div>
          <p>A single plan that can be read, updated, measured, and acted on by every authorized role.</p>
          <div className="connected-care-tags" aria-label="Platform attributes">
            <span>Secure</span>
            <span>Interoperable</span>
            <span>Scalable</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CarePlanDiagram() {
  return (
    <div className="connected-care-diagram" aria-label="Animated care plan interconnection diagram">
      <div className="connected-care-halo" />
      <div className="connected-care-ring connected-care-ring-a" />
      <div className="connected-care-ring connected-care-ring-b" />
      <div className="connected-care-ring connected-care-ring-c" />

      <svg className="connected-care-diagram-svg" viewBox="0 0 760 610" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="connectedCareBlue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d8efff" stopOpacity="0" />
            <stop offset="55%" stopColor="#7fc9ff" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.92" />
          </linearGradient>
          <linearGradient id="connectedCareOrange" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffe0c7" stopOpacity="0" />
            <stop offset="55%" stopColor="#ffad72" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.92" />
          </linearGradient>
          <filter id="connectedCareGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="connected-care-link-lines">
          <path className="connected-care-spoke blue" d="M380 305 C292 246 255 125 173 110" />
          <path className="connected-care-spoke blue" d="M380 305 C267 285 206 220 92 230" />
          <path className="connected-care-spoke blue" d="M380 305 C266 334 202 366 96 360" />
          <path className="connected-care-spoke blue" d="M380 305 C296 400 236 480 178 492" />
          <path className="connected-care-spoke orange" d="M380 305 C468 246 505 125 587 110" />
          <path className="connected-care-spoke orange" d="M380 305 C493 285 554 220 668 230" />
          <path className="connected-care-spoke orange" d="M380 305 C494 334 558 366 664 360" />
          <path className="connected-care-spoke orange" d="M380 305 C464 400 524 480 582 492" />
        </g>

        <path className="connected-care-energy blue" d="M173 110 C255 125 292 246 380 305 C468 246 505 125 587 110" />
        <path className="connected-care-energy orange delay-1" d="M92 230 C206 220 267 285 380 305 C493 285 554 220 668 230" />
        <path className="connected-care-energy blue delay-2" d="M96 360 C202 366 266 334 380 305 C494 334 558 366 664 360" />
        <path className="connected-care-energy orange delay-3" d="M178 492 C236 480 296 400 380 305 C464 400 524 480 582 492" />
      </svg>

      {["dot-1", "dot-2", "dot-3", "dot-4", "dot-5", "dot-6", "dot-7", "dot-8"].map((dot, index) => (
        <span
          className={`connected-care-dot ${dot} ${index % 2 ? "connected-care-dot-orange" : ""}`}
          key={dot}
        />
      ))}

      {carePlanNodes.map((node) => (
        <div className={`connected-care-node ${node.className} connected-care-${node.tone}`} key={node.label}>
          <span aria-hidden="true">
            <Icon name={node.icon} />
          </span>
          <strong>{node.label}</strong>
        </div>
      ))}

      <div className="connected-care-core">
        <div className="connected-care-core-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <h3>Care Plan</h3>
        <small>computable · always current</small>
        <div className="connected-care-core-accent" />
      </div>
    </div>
  );
}

function Icon({ name }: { name: IconName }) {
  switch (name) {
    case "database":
      return (
        <svg viewBox="0 0 24 24">
          <ellipse cx="12" cy="6" rx="6" ry="3" />
          <path d="M6 6v6c0 1.7 2.7 3 6 3s6-1.3 6-3V6" />
          <path d="M6 12v6c0 1.7 2.7 3 6 3s6-1.3 6-3v-6" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M2 20a6 6 0 0 1 12 0" />
          <path d="M10 20a6 6 0 0 1 12 0" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-7" />
          <path d="M22 20V8" />
        </svg>
      );
    case "message":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M7 17l-3 3V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7Z" />
          <path d="M8 9h8M8 13h5" />
        </svg>
      );
    case "workflow":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M7 7h11" />
          <path d="M14 4l4 3-4 3" />
          <path d="M17 17H6" />
          <path d="M10 14l-4 3 4 3" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M11 17h2" />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M20.5 8.5c0 5-8.5 10.5-8.5 10.5S3.5 13.5 3.5 8.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8.5 2.5Z" />
          <path d="M7 12h3l1.5-3 2.2 5 1.3-2h2" />
        </svg>
      );
    case "clipboard":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M9 4h6l1 2h3v15H5V6h3l1-2Z" />
          <path d="M9 12h6M9 16h4" />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M7 7h11" />
          <path d="M14 4l4 3-4 3" />
          <path d="M17 17H6" />
          <path d="M10 14l-4 3 4 3" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24">
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M8 11h8M8 15h4" />
        </svg>
      );
    case "shield":
    default:
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
          <path d="M10 12l2 2 4-4" />
        </svg>
      );
  }
}
