import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "Platform", href: "#platform" },
  { label: "For Providers", href: "#for-providers" },
  { label: "For Patients", href: "#for-patients" },
  { label: "About", href: "#brickl" },
  { label: "Resources", href: "#contact" },
];
const defaultHeaderBackground = "transparent";

export function Header() {
  const [headerBackground, setHeaderBackground] = useState(defaultHeaderBackground);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTransparent = headerBackground === "transparent";

  useEffect(() => {
    const updateHeaderBackground = () => {
      const header = document.querySelector("header");
      const probeY = (header?.getBoundingClientRect().bottom ?? 0) + 2;
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-header-bg]"));
      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= probeY && rect.bottom > probeY;
      });
      const previousSections = sections.filter((section) => section.getBoundingClientRect().top <= probeY);
      const activeSection = currentSection ?? previousSections[previousSections.length - 1];

      setHeaderBackground(activeSection?.dataset.headerBg ?? defaultHeaderBackground);
    };

    updateHeaderBackground();
    window.addEventListener("scroll", updateHeaderBackground, { passive: true });
    window.addEventListener("resize", updateHeaderBackground);
    window.addEventListener("hashchange", updateHeaderBackground);
    document.addEventListener("scroll", updateHeaderBackground, { capture: true, passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeaderBackground);
      window.removeEventListener("resize", updateHeaderBackground);
      window.removeEventListener("hashchange", updateHeaderBackground);
      document.removeEventListener("scroll", updateHeaderBackground, { capture: true });
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 ${
        isTransparent ? "border-b border-transparent shadow-none" : "border-b border-primary/10 shadow-[0_10px_34px_rgba(0,43,92,0.055)]"
      }`}
      style={{ backgroundColor: isTransparent ? "rgba(255, 255, 255, 0)" : headerBackground }}
    >
      <div className="relative z-[70] mx-auto flex h-20 w-full max-w-[1320px] items-center justify-between gap-2 px-4 sm:h-24 sm:px-6 lg:px-12">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden items-center gap-12 lg:flex">
          {navItems.map((item) => (
            <a className="nav-link transition hover:text-primary" href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            className="hidden h-11 items-center justify-center rounded-full border border-primary/20 bg-white/18 px-5 font-body text-[14px] font-bold leading-5 tracking-[-0.01em] text-navy backdrop-blur-[6px] transition hover:border-primary/35 hover:bg-white/42 hover:text-primary sm:inline-flex"
            href="/login"
          >
            Login
          </a>
          <a
            className="inline-flex h-11 items-center gap-2 rounded-full bg-orange px-3 font-body text-[13px] font-bold leading-5 tracking-[-0.01em] text-white shadow-[0_14px_28px_rgba(255,70,1,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(255,70,1,0.28)] sm:gap-3 sm:px-7 sm:text-[14px]"
            href="#cta"
          >
            <span className="hidden min-[430px]:inline">Get Started</span>
            <span className="min-[430px]:hidden">Start</span>
          </a>
          <button
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/20 bg-white/20 text-navy backdrop-blur-[6px] transition hover:border-primary/40 hover:bg-white/45 sm:h-11 sm:w-11"
            aria-controls="site-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <X aria-hidden="true" size={24} strokeWidth={2.5} /> : <Menu aria-hidden="true" size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <button className="fixed inset-0 z-[55] cursor-default bg-navy/5 backdrop-blur-[2px]" aria-label="Close menu" onClick={closeMenu} type="button" />
          <div
            className="fixed right-4 top-[88px] z-[80] w-[calc(100vw-2rem)] overflow-hidden rounded-[28px] border border-primary/15 bg-white/82 p-3 shadow-[0_28px_80px_rgba(0,43,92,0.16)] backdrop-blur-2xl sm:right-6 sm:top-[104px] sm:w-[420px] lg:right-[max(3rem,calc((100vw-1320px)/2+3rem))]"
            id="site-menu"
            role="dialog"
            aria-label="Site menu"
          >
            <nav className="grid gap-1" aria-label="Hamburger navigation">
              {navItems.map((item) => (
                <a
                  className="group flex items-center justify-between rounded-2xl px-5 py-4 font-body text-[16px] font-semibold leading-5 tracking-[-0.01em] text-navy transition hover:bg-primary/8 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  href={item.href}
                  key={item.label}
                  onClick={closeMenu}
                >
                  {item.label}
                  <span className="text-primary transition group-hover:translate-x-1" aria-hidden="true">
                    -&gt;
                  </span>
                </a>
              ))}
            </nav>
            <div className="mt-3 border-t border-primary/10 p-3">
              <a
                className="mb-3 inline-flex h-12 w-full items-center justify-center rounded-full border border-primary/20 bg-white/48 px-6 font-body text-[15px] font-bold leading-5 tracking-[-0.01em] text-navy transition hover:border-primary/35 hover:bg-white/70 hover:text-primary"
                href="/login"
                onClick={closeMenu}
              >
                Login
              </a>
              <a
                className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full bg-orange px-6 font-body text-[15px] font-bold leading-5 tracking-[-0.01em] text-white shadow-[0_18px_34px_rgba(233,122,67,0.24)] transition hover:-translate-y-0.5"
                href="#cta"
                onClick={closeMenu}
              >
                Get Started
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
