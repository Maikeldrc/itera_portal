import { Award, Download, Flame, ShieldCheck } from "lucide-react";

const trustItems = [
  { label: "ACCESS", sub: "Participant", Icon: Award },
  { label: "FHIR", sub: "Native", Icon: Flame, fire: true },
  { label: "HIPAA", sub: "Compliant", Icon: ShieldCheck },
  { label: "CARIN", sub: "Blue Button", Icon: Download },
];

export function TrustBar() {
  return (
    <section className="relative z-20 -mt-10 px-6 lg:-mt-14 lg:px-12" data-header-bg="#e8f1f2">
      <div className="mx-auto grid max-w-[1220px] grid-cols-2 rounded-3xl border border-white/80 bg-white/90 shadow-soft backdrop-blur-xl lg:grid-cols-4">
        {trustItems.map(({ label, sub, Icon, fire }, index) => (
          <div className="trust-item" key={label}>
            <div
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-full sm:h-14 sm:w-14 ${
                fire
                  ? "bg-gradient-to-b from-yellow-50 to-orange-50 text-orange"
                  : "border border-primary/20 bg-white text-primary"
              }`}
            >
              {fire ? <Icon size={31} fill="#E97A43" stroke="#ffb000" /> : <Icon size={28} strokeWidth={2.2} />}
            </div>
            <div>
              <p className="trust-label">{label}</p>
              <p className="trust-label mt-1">{sub}</p>
            </div>
            {index < trustItems.length - 1 && <span className="hidden h-16 w-px bg-primary/15 lg:block" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}
