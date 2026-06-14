export const patientFirstSectionContent = {
  eyebrow: "PATIENT-FIRST INTELLIGENCE",
  title: "Care that starts with the patient, not the population.",
  highlight: "patient",
  subtitle:
    "Most systems infer risk from the population down. We build it from the patient up — combining each patient's real-time signals with their claims history.",
  cards: [
    {
      title: "Digital Chronic Care",
      description: "Proactively manage chronic and rising-risk patients before conditions escalate.",
      icon: "heart-pulse",
      accent: "blue",
    },
    {
      title: "Patient-Level Risk Vector",
      description: "Detect risk forming in individual patients before it shows up in claims.",
      icon: "user-risk",
      accent: "teal",
    },
    {
      title: "Early Interventions",
      description: "Act on physiologic and behavioral signals in time to adjust care.",
      icon: "pulse",
      accent: "orange",
    },
    {
      title: "Clinical Collaboration",
      description: "Keep PCPs, specialists, and care teams aligned on shared plans.",
      icon: "users",
      accent: "teal",
    },
    {
      title: "Care Quality Management",
      description: "Track quality measures per patient as care happens, not after claims.",
      icon: "shield",
      accent: "blue",
    },
    {
      title: "Transition Awareness",
      description: "Real-time ADT alerts when a patient is admitted, discharged, or transferred.",
      icon: "clipboard",
      accent: "orange",
    },
  ],
} as const;

export type PatientFirstSectionContent = typeof patientFirstSectionContent;
export type PatientFirstCard = PatientFirstSectionContent["cards"][number];
