export function LongitudinalCareJourneySection() {
  return (
    <section className="longitudinal-journey-section relative isolate overflow-hidden bg-[#f3f8fb] px-6 py-16 lg:px-12" data-header-bg="#f3f8fb">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.9),rgba(255,255,255,0)_38%),radial-gradient(circle_at_75%_42%,rgba(27,152,224,0.13),rgba(27,152,224,0)_42%)]" />
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="relative z-10 lg:col-span-5 lg:max-w-[575px]">
          <p className="eyebrow mb-6 inline-flex max-w-full whitespace-normal rounded-full border border-primary/15 bg-white/65 px-4 py-2 shadow-sm">
            Care Between Visits. Outcomes Across the Journey.
          </p>
          <h2 className="heading-section max-w-full break-words">
            Longitudinal care for the entire patient journey<span className="text-orange">.</span>
          </h2>
          <p className="text-hero mt-5 max-w-[545px]">
            ITERA.HEALTH coordinates clinicians, care teams, patients, and caregivers from early risk to complex disease
            through a digital care orchestration infrastructure.
          </p>
        </div>

        <div className="relative min-w-0 lg:col-span-7">
          <div className="relative ml-auto overflow-visible bg-[#f3f8fb]">
            <video
              aria-label="Animated healthcare technology care orchestration visual"
              autoPlay
              className="hero-composite-photo relative mx-auto block h-auto w-full max-w-[880px]"
              loop
              muted
              onCanPlay={(event) => {
                void event.currentTarget.play();
              }}
              playsInline
              poster="/hero-orchestration-reference.png"
              preload="metadata"
              src="/hero-healthcare-technology.mp4"
            >
              <source src="/hero-healthcare-technology.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f3f8fb] via-[#f3f8fb]/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#f3f8fb] via-[#f3f8fb]/35 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#f3f8fb] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
