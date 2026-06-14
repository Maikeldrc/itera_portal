import type { ReactNode } from "react";
import { patientFirstSectionContent, type PatientFirstSectionContent } from "./patientFirstSectionContent";

const assetBase = "/patient-first-section/assets";

const iconMap = {
  "heart-pulse": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 39s-14-8.6-18-19.1C3.2 12.5 8.3 7 14.6 7c3.7 0 6.4 2 9.4 5.2C27 9 29.7 7 33.4 7 39.7 7 44.8 12.5 42 19.9 38 30.4 24 39 24 39Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path d="M10 24h8l3-6 5 13 4-7h8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </svg>
  ),
  "user-risk": (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="21" cy="17" r="7" stroke="currentColor" strokeWidth="3" />
      <path d="M8 40c2.2-7.5 7.3-11 13-11 4.3 0 8.2 2 10.8 6" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
      <circle cx="35" cy="32" r="5" stroke="currentColor" strokeWidth="3" />
      <path d="M35 24v3m0 10v3m-8-8h3m10 0h3" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  ),
  pulse: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M4 25h9l5-13 8 25 6-18 4 6h8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="7" stroke="currentColor" strokeWidth="3" />
      <circle cx="32" cy="20" r="6" opacity="0.75" stroke="currentColor" strokeWidth="3" />
      <path d="M5 40c2-8 6.8-12 13-12s11 4 13 12" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
      <path d="M27 31c5.2.6 8.8 3.7 10.5 9" opacity="0.75" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M24 5 39 11v11c0 10.2-6.3 17.3-15 21-8.7-3.7-15-10.8-15-21V11l15-6Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="3" />
      <path d="m17 24 5 5 10-11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M17 8h14l2 5h5v28H10V13h5l2-5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="3" />
      <path d="M17 13h14M17 24h14M17 31h10" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M9 39h30" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
      <path d="M13 32V20m8 12V13m8 19V24m8 8V9" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  ),
} satisfies Record<PatientFirstSectionContent["cards"][number]["icon"] | "chart", ReactNode>;

function renderHighlightedTitle(title: string, highlight: string) {
  const index = title.toLowerCase().indexOf(highlight.toLowerCase());
  if (index < 0) return title;

  return (
    <>
      {title.slice(0, index)}
      <span className="highlight">{title.slice(index, index + highlight.length)}</span>
      {title.slice(index + highlight.length)}
    </>
  );
}

type PatientFirstSectionProps = {
  content?: PatientFirstSectionContent;
};

export function PatientFirstSection({ content = patientFirstSectionContent }: PatientFirstSectionProps) {
  return (
    <section className="patient-first-section" data-header-bg="#f8fbff" id="for-patients" aria-labelledby="patient-first-title">
      <div className="patient-first-section__bg" aria-hidden="true" />

      <div className="patient-first-section__header">
        <p className="patient-first-section__eyebrow">{content.eyebrow}</p>
        <h2 id="patient-first-title" className="patient-first-section__title">
          {renderHighlightedTitle(content.title, content.highlight)}
        </h2>
        <p className="patient-first-section__subtitle">{content.subtitle}</p>
        <div className="patient-first-section__accent-line" aria-hidden="true" />
      </div>

      <div className="patient-first-section__body">
        <div className="patient-first-section__visual" aria-hidden="true">
          <img className="patient-first-section__halo" src={`${assetBase}/layers/03-patient-data-halo.svg`} alt="" />
          <img className="patient-first-section__patient-img" src={`${assetBase}/layers/02-patient-visual.png`} alt="" />
          <span className="patient-first-section__floating-icon patient-first-section__floating-icon--one">{iconMap["heart-pulse"]}</span>
          <span className="patient-first-section__floating-icon patient-first-section__floating-icon--two">{iconMap.users}</span>
          <span className="patient-first-section__floating-icon patient-first-section__floating-icon--three">{iconMap.pulse}</span>
          <span className="patient-first-section__floating-icon patient-first-section__floating-icon--four">{iconMap.clipboard}</span>
          <span className="patient-first-section__floating-icon patient-first-section__floating-icon--five">{iconMap.shield}</span>
          <span className="patient-first-section__floating-icon patient-first-section__floating-icon--six">{iconMap.chart}</span>
        </div>

        <div className="patient-first-section__cards-wrap">
          <img className="patient-first-section__connectors" src={`${assetBase}/layers/04-connector-lines.svg`} alt="" aria-hidden="true" />
          <div className="patient-first-section__cards">
            {content.cards.map((card) => (
              <article className={`patient-card patient-card--${card.accent}`} key={card.title}>
                <div className="patient-card__heading">
                  <div className="patient-card__icon" aria-hidden="true">
                    {iconMap[card.icon]}
                  </div>
                  <div>
                    <h3 className="patient-card__title">{card.title}</h3>
                    <div className="patient-card__rule" aria-hidden="true" />
                  </div>
                </div>
                <p className="patient-card__description">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
