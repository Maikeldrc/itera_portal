type LogoProps = {
  variant?: "dark" | "light";
};

export function Logo({ variant = "dark" }: LogoProps) {
  return (
    <a className="block shrink-0" href="#top" aria-label="ITERA.HEALTH home">
      <img
        className={`h-auto w-[168px] sm:w-[220px] ${variant === "light" ? "brightness-0 invert" : ""}`}
        src="/itera-logo.png"
        alt="ITERA.HEALTH Scalable Health Outcomes"
      />
    </a>
  );
}
