import "./BookMeetingSection.css";

const roles = [
  "Select your role",
  "Chief Medical Officer",
  "Chief Executive Officer",
  "VP of Clinical Operations",
  "Health Plan Medical Director",
  "Care Management Leader",
  "Population Health Director",
  "ACO / Value-Based Care Lead",
  "Other",
];

const bullets = [
  {
    title: "Tailored to your contracts & risk model",
    text: "ACO, MA, or commercial value-based arrangements.",
  },
  {
    title: "No IT lift to evaluate",
    text: "FHIR-native and CARIN Blue Button ready.",
  },
];

const cards = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="7" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="32" cy="20" r="6" opacity="0.7" stroke="currentColor" strokeWidth="2.5" />
        <path d="M5 40c2-8 6.8-12 13-12s11 4 13 12" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M27 31c5.2.6 8.8 3.7 10.5 9" opacity="0.7" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
    title: "See real patient impact",
    text: "Bring your own cohort and measure. We'll run it live.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M8 36 L20 22 L29 30 L40 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M34 14h6v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Connect the dots",
    text: "See how care, signals, and outcomes come together.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "30 minutes to clarity",
    text: "A focused session with our outcomes team.",
  },
];

export function BookMeetingSection() {
  return (
    <section className="bms" id="book-meeting" aria-labelledby="bms-title">
      {/* Background photo */}
      <div className="bms__bg" aria-hidden="true">
        <img
          className="bms__bg-img"
          src="/book-meeting-bg.png"
          alt=""
          loading="lazy"
        />
        <div className="bms__bg-overlay" />
      </div>
      {/* Top + bottom page-colour fades, outside the mask */}
      <div className="bms__fade-top" aria-hidden="true" />
      <div className="bms__fade-bottom" aria-hidden="true" />

      {/* Heartbeat decorative line */}
      <div className="bms__ecg" aria-hidden="true">
        <svg viewBox="0 0 320 40" fill="none" preserveAspectRatio="none">
          <polyline
            points="0,20 40,20 55,5 65,35 75,20 90,20 100,10 110,30 120,20 320,20"
            stroke="rgba(27,152,224,0.5)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="bms__inner">
        {/* Left column — copy */}
        <div className="bms__copy">
          <p className="bms__eyebrow">BOOK A MEETING</p>

          <h2 id="bms-title" className="bms__title">
            See your team show up for a patient who isn't in the room.
          </h2>

          <p className="bms__subtitle">
            Bring a cohort and a measure you care about. In 30 minutes we'll
            show you where continuous, between-visit care would have changed the
            outcome, and the economics.
          </p>

          <ul className="bms__bullets" role="list">
            {bullets.map((b) => (
              <li key={b.title} className="bms__bullet">
                <span className="bms__bullet-check" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="9" fill="#1b65e0" />
                    <path
                      d="M6 10.5l3 3 5-6"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>
                  <strong className="bms__bullet-title">{b.title}</strong>
                  <span className="bms__bullet-text">{b.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — form card */}
        <div className="bms__form-wrap">
          <div className="bms__form-card">
            {/* Card header */}
            <div className="bms__form-header">
              <span className="bms__form-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect width="32" height="32" rx="8" fill="#1b65e0" />
                  <rect x="7" y="8" width="18" height="16" rx="2" stroke="#fff" strokeWidth="1.8" />
                  <path d="M12 8V6M20 8V6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M7 13h18" stroke="#fff" strokeWidth="1.5" />
                  <path d="M11 17h4M11 20.5h6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <h3 className="bms__form-title">Request your meeting</h3>
            </div>

            <p className="bms__form-stat">
              Patients on the platform averaged{" "}
              <strong className="bms__stat-highlight">−9.84 mmHg systolic</strong>{" "}
              over 10 months. In 30 minutes, see what continuous care could do
              for your cohort.
            </p>

            <form className="bms__form" onSubmit={(e) => e.preventDefault()}>
              <div className="bms__field">
                <label htmlFor="bms-name" className="bms__label">
                  FULL NAME
                </label>
                <input
                  id="bms-name"
                  type="text"
                  className="bms__input"
                  placeholder="e.g. Jane Smith"
                  autoComplete="name"
                />
              </div>

              <div className="bms__field">
                <label htmlFor="bms-email" className="bms__label">
                  WORK EMAIL
                </label>
                <input
                  id="bms-email"
                  type="email"
                  className="bms__input"
                  placeholder="e.g. jane.smith@healthplan.com"
                  autoComplete="email"
                />
              </div>

              <div className="bms__field">
                <label htmlFor="bms-org" className="bms__label">
                  ORGANIZATION
                </label>
                <input
                  id="bms-org"
                  type="text"
                  className="bms__input"
                  placeholder="e.g. Acme Health Plan"
                  autoComplete="organization"
                />
              </div>

              <div className="bms__field">
                <label htmlFor="bms-role" className="bms__label">
                  YOU ARE…
                </label>
                <div className="bms__select-wrap">
                  <select id="bms-role" className="bms__select">
                    {roles.map((r) => (
                      <option key={r} value={r === "Select your role" ? "" : r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <span className="bms__select-chevron" aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>

              <button type="submit" className="bms__submit">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="bms__submit-icon">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Book my 30-min meeting
                <span aria-hidden="true" className="bms__submit-arrow">→</span>
              </button>

              <p className="bms__privacy">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="bms__lock-icon">
                  <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M5.5 7V5.5a2.5 2.5 0 015 0V7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                We only use this information to respond to your request.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom feature cards */}
      <div className="bms__cards-row">
        {cards.map((c) => (
          <div key={c.title} className="bms__card">
            <span className="bms__card-icon" aria-hidden="true">
              {c.icon}
            </span>
            <div>
              <h4 className="bms__card-title">{c.title}</h4>
              <p className="bms__card-text">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
