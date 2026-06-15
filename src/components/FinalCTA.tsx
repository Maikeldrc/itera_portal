export function FinalCTA() {
  return (
    <section className="post-section-compact" data-header-bg="#f6fbfd" id="cta">
      <div className="post-container">
      <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#002b5c,#001d5d_58%,#003366)] px-8 py-7 text-white shadow-[0_24px_54px_rgba(0,43,92,0.18)]">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(255,255,255,0.55)_1px,transparent_1.5px)] [background-size:22px_22px]" />
        <div className="relative flex flex-col items-center justify-between gap-6 lg:flex-row">
          <h2 className="max-w-[680px] text-center font-heading text-[clamp(28px,3vw,40px)] font-extrabold leading-[1.12] tracking-[-0.035em] lg:text-left">
            Transform care delivery. Improve outcomes. Lower total cost.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a className="btn-primary" href="#enrollment">
              Start Enrollment <span aria-hidden="true">-&gt;</span>
            </a>
            <a className="button-label inline-flex h-12 items-center gap-3 rounded-full border border-white/35 px-8 text-white transition hover:bg-white/10" href="#contact">
              Talk to Our Team <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
