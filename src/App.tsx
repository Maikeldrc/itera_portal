import { AcoAccessSection } from "./components/AcoAccessSection";
import { BrickLInfrastructureSection } from "./components/BrickLInfrastructureSection";
import { FinalCTA } from "./components/FinalCTA";
import { FoundationValueBasedCareSection } from "./components/FoundationValueBasedCareSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LongitudinalCareJourneySection } from "./components/LongitudinalCareJourneySection";
import { MeasuredImpactSection } from "./components/MeasuredImpactSection";
import { PatientFirstSection } from "./components/PatientFirstSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { TrustBar } from "./components/TrustBar";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-soft text-navy">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <LongitudinalCareJourneySection />
        <FoundationValueBasedCareSection />
        <ProblemSection />
        <AcoAccessSection />
        <PatientFirstSection />
        <MeasuredImpactSection />
        <BrickLInfrastructureSection />
        <SolutionsSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
