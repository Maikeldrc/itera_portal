import { AcoAccessSection } from "./components/AcoAccessSection";
import { BetweenVisitsAnimatedSection } from "./components/BetweenVisitsAnimatedSection";
import CareStakeholdersSection from "./components/CareStakeholdersSection";
import { ConnectedCareSection } from "./components/ConnectedCareSection";
import { FinalCTA } from "./components/FinalCTA";
import { FoundationValueBasedCareSection } from "./components/FoundationValueBasedCareSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LongitudinalCareJourneySection } from "./components/LongitudinalCareJourneySection";
import { MeasuredImpactSection } from "./components/MeasuredImpactSection";
import { PatientFirstSection } from "./components/PatientFirstSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { TrustBar } from "./components/TrustBar";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6fbfd] text-navy">
      <Header />
      <main>
        <Hero />
        <div className="post-hero-canvas">
          <TrustBar />
          <BetweenVisitsAnimatedSection />
          <LongitudinalCareJourneySection />
          <ConnectedCareSection />
          <SolutionsSection />
          <CareStakeholdersSection />
          <PatientFirstSection />
          <FoundationValueBasedCareSection />
          <AcoAccessSection />
          <MeasuredImpactSection />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}
