import styles from "./CareStakeholdersSection.module.css";

type Stakeholder = {
  title: string;
  description: string;
  variant: "provider" | "acos" | "teams" | "patients";
  icon: "provider" | "acos" | "teams" | "patients";
  recommended?: boolean;
};

const stakeholders: Stakeholder[] = [
  {
    title: "Provider Groups",
    description:
      "Streamline operations, improve care quality, and coordinate patient populations through one shared care model.",
    variant: "provider",
    icon: "provider",
  },
  {
    title: "ACOs & Value-Based Organizations",
    description:
      "Align care delivery, reduce cost, and support quality and shared-savings performance.",
    variant: "acos",
    icon: "acos",
    recommended: true,
  },
  {
    title: "Care Teams",
    description:
      "Collaborate through role-based workflows, shared tasks, and coordinated interventions.",
    variant: "teams",
    icon: "teams",
  },
  {
    title: "Patients & Caregivers",
    description:
      "Give patients and families the support, guidance, and engagement tools to stay on track every day.",
    variant: "patients",
    icon: "patients",
  },
] as const;

export default function CareStakeholdersSection() {
  return (
    <section className={styles.section} aria-labelledby="care-stakeholders-title">
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />

      <NetworkLayer />

      <div className={styles.header}>
        <div className={styles.eyebrow}>
          <EyebrowIcon />
          Who it&apos;s for
        </div>

        <h2 className={styles.title} id="care-stakeholders-title">
          Built for <span>Every</span> Care Stakeholder
        </h2>

        <p className={styles.subtitle}>
          Role-based experiences for the organizations, teams, and people who drive
          continuous, coordinated care.
        </p>
      </div>

      <div className={styles.grid} aria-label="Care stakeholder groups">
        {stakeholders.map((item) => (
          <article
            key={item.title}
            className={[
              styles.card,
              styles[item.variant],
              item.recommended ? styles.recommended : "",
            ].join(" ")}
          >
            {item.recommended && (
              <div className={styles.recommendedBadge}>
                <StarIcon />
                Recommended
              </div>
            )}

            <div className={styles.iconShell} aria-hidden="true">
              <StakeholderIcon type={item.icon} />
            </div>

            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>

            <a className={styles.learnLink} href="#">
              Learn more <span>→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function NetworkLayer() {
  return (
    <svg
      className={styles.networkLayer}
      viewBox="0 0 1600 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#b8dff7" strokeWidth="1.4" opacity="0.70">
        <path className={styles.nodeLine} d="M0 164L86 116L168 208L270 122L348 188" />
        <path className={styles.nodeLine} d="M1244 90L1344 154L1428 80L1516 142L1600 96" />
        <path className={styles.nodeLine} d="M20 700L178 768L310 710L472 790L626 736" />
        <path className={styles.nodeLine} d="M900 784L1024 726L1170 804L1326 740L1518 792" />
      </g>

      <g fill="#fff" stroke="#d6edfb" strokeWidth="2">
        {[
          [86, 116, 9, "0s"],
          [168, 208, 7, ".4s"],
          [270, 122, 6, ".8s"],
          [1344, 154, 8, ".2s"],
          [1428, 80, 7, ".6s"],
          [1516, 142, 6, "1s"],
          [178, 768, 7, ".9s"],
          [472, 790, 7, "1.4s"],
          [1024, 726, 7, ".5s"],
          [1326, 740, 7, "1.1s"],
        ].map(([cx, cy, r, delay]) => (
          <circle
            key={`${cx}-${cy}`}
            className={styles.networkDot}
            cx={cx}
            cy={cy}
            r={r}
            style={{ animationDelay: delay as string }}
          />
        ))}
      </g>
    </svg>
  );
}

function EyebrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M3.5 20a5.5 5.5 0 0 1 11 0"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M17 8v5M19.5 10.5h-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 2 2.9 6.1 6.7.9-4.9 4.7 1.2 6.6L12 17.1l-5.9 3.2 1.2-6.6L2.4 9l6.7-.9L12 2Z" />
    </svg>
  );
}

function StakeholderIcon({ type }: { type: "provider" | "acos" | "teams" | "patients" }) {
  if (type === "provider") {
    return (
      <svg className={styles.cardIcon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M12 54V24l20-10 20 10v30" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 54V34h24v20" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 22v14M25 29h14" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M18 54h28" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "acos") {
    return (
      <svg className={styles.cardIcon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <path d="M10 25h44" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M16 25v25M28 25v25M40 25v25M52 25v25" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M8 54h48" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M32 9 9 21h46L32 9Z" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="18" r="3" stroke="currentColor" strokeWidth="3.2" />
      </svg>
    );
  }

  if (type === "teams") {
    return (
      <svg className={styles.cardIcon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
        <circle cx="32" cy="18" r="8" stroke="currentColor" strokeWidth="3.2" />
        <circle cx="15" cy="25" r="6" stroke="currentColor" strokeWidth="3.2" />
        <circle cx="49" cy="25" r="6" stroke="currentColor" strokeWidth="3.2" />
        <path d="M19 54v-3c0-7.2 5.8-13 13-13s13 5.8 13 13v3" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M5 52v-2c0-5.7 4.6-10.3 10.3-10.3 2.1 0 4.1.6 5.7 1.7" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
        <path d="M59 52v-2c0-5.7-4.6-10.3-10.3-10.3-2.1 0-4.1.6-5.7 1.7" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={styles.cardIcon} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="22" cy="19" r="7" stroke="currentColor" strokeWidth="3.2" />
      <circle cx="44" cy="19" r="7" stroke="currentColor" strokeWidth="3.2" />
      <path d="M8 52v-3c0-6.6 5.4-12 12-12 4.5 0 8.4 2.5 10.4 6.2" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M56 52v-3c0-6.6-5.4-12-12-12-4.5 0-8.4 2.5-10.4 6.2" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path
        d="M32 53s-11-6.4-11-14.2A6.3 6.3 0 0 1 32 34.5a6.3 6.3 0 0 1 11 4.3C43 46.6 32 53 32 53Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
