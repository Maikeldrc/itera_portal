import {
  PlayCircle,
  UserRound,
  UsersRound,
} from "lucide-react";
import { HeroOrchestrationAnimation } from "./HeroOrchestrationAnimation";

export function Hero() {
  return (
    <section className="orchestration-hero relative isolate overflow-hidden bg-[#edf7fb]" data-header-bg="transparent" id="top">
      <HeroOrchestrationAnimation className="absolute inset-0 -z-20" />

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(247,252,255,0.22)_0%,rgba(237,247,251,0.04)_38%,rgba(246,251,253,0.72)_78%,#f6fbfd_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_52%,rgba(246,251,253,0.52)_100%)]" />

      <div className="orchestration-hero-stage relative mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="orchestration-person" aria-hidden="true">
          <img src="/patient-hero.png" alt="" loading="eager" />
        </div>
        <div className="hero-copy-card">
          <h1>
            <span className="hero-headline-line">One patient. One plan.</span>
            <span className="hero-headline-line">Every team, connected<span className="text-orange">.</span></span>
          </h1>
          <p className="hero-copy-text">
            BrickL turns clinical signals, patient communication, care team operations, and FHIR-native workflows into
            one longitudinal care orchestration layer.
          </p>
          <div className="hero-actions">
            <a className="hero-action hero-action-outline" href="#platform">
              See how it works
              <PlayCircle size={18} aria-hidden="true" />
            </a>
            <a className="hero-action hero-action-provider" href="#for-providers">
              For providers
              <UsersRound size={18} aria-hidden="true" />
            </a>
            <a className="hero-action hero-action-patient" href="#for-patients">
              For patients
              <UserRound size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
