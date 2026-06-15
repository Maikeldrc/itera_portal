import { Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const columns = {
  Solutions: ["Chronic & Rising Risk Care", "Transitional Care", "Value-Based Care", "Patient Engagement", "Care Enablement"],
  Platform: ["Platform Overview", "Interoperability", "Security & Privacy", "BrickL Architecture", "AI & Automation"],
  Company: ["About ITERA.HEALTH", "Leadership", "Careers", "Press & News", "Investors"],
  Resources: ["Resource Library", "Blog", "Case Studies", "Events", "Security"],
};

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-soft px-6 pb-10 pt-10 lg:px-12" data-header-bg="#e8f1f2" id="contact">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[1.25fr_2fr_1fr]">
        <div>
          <Logo />
          <p className="footer-text mt-5 max-w-[330px]">
            A digital care orchestration platform that connects people, data, and care teams to deliver better
            outcomes every day.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Twitter, Mail].map((Icon, index) => (
              <a className="grid h-9 w-9 place-items-center rounded-full border border-primary/20 text-primary" href="#contact" key={index} aria-label="Social link">
                <Icon size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(columns).map(([title, links]) => (
            <div key={title}>
              <h3 className="footer-heading">{title}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a className="footer-text transition hover:text-primary" href="#resources">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="footer-heading">Contact</h3>
          <ul className="mt-4 space-y-3 font-body text-[13px] font-medium leading-[22px] text-navy/70">
            <li className="flex gap-2"><Phone size={15} className="text-primary" /> +1 877 414 7228</li>
            <li className="flex gap-2"><Mail size={15} className="text-primary" /> info@itera.health</li>
            <li className="flex gap-2"><MapPin size={15} className="text-primary" /> 100 Lake Meadow Drive, New Windsor, TX 77380</li>
          </ul>
        </div>
      </div>
      <p className="caption mx-auto mt-10 max-w-[1320px]">
        Copyright 2026 ITERA.HEALTH, Inc.
      </p>
    </footer>
  );
}
