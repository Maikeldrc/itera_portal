import type { CSSProperties } from "react";

type HeroOrchestrationAnimationProps = {
  className?: string;
};

const beams = [
  ["hero-left-top", "hero-beam hero-beam-blue hero-beam-strong"],
  ["hero-left-mid", "hero-beam hero-beam-orange"],
  ["hero-left-bottom", "hero-beam hero-beam-blue"],
  ["hero-right-top", "hero-beam hero-beam-green hero-beam-strong"],
  ["hero-right-mid", "hero-beam hero-beam-blue"],
  ["hero-right-bottom", "hero-beam hero-beam-green"],
  ["hero-bottom-wide", "hero-beam hero-beam-white"],
  ["hero-core-a", "hero-beam hero-beam-blue"],
  ["hero-core-b", "hero-beam hero-beam-green"],
];

const nodes = [
  [800, 382, "hero-node"],
  [74, 280, "hero-node"],
  [68, 650, "hero-node hero-node-orange"],
  [390, 808, "hero-node"],
  [1530, 268, "hero-node hero-node-green"],
  [1530, 648, "hero-node"],
  [1248, 810, "hero-node hero-node-green"],
  [300, 818, "hero-node hero-node-orange"],
  [1310, 818, "hero-node"],
  [530, 390, "hero-node"],
  [1104, 394, "hero-node hero-node-green"],
  [500, 560, "hero-node hero-node-orange"],
  [1130, 570, "hero-node hero-node-green"],
];

const comets = [
  ["hero-left-top", "hero-comet hero-comet-blue", "1.12", "5.3s", "0s"],
  ["hero-left-mid", "hero-comet hero-comet-orange", "1.02", "6.1s", "-1.8s"],
  ["hero-left-bottom", "hero-comet hero-comet-blue", "0.96", "6.8s", "-3.2s"],
  ["hero-right-top", "hero-comet hero-comet-green", "1.12", "5.5s", "-1.1s"],
  ["hero-right-mid", "hero-comet hero-comet-blue", "1.02", "6.3s", "-2.4s"],
  ["hero-right-bottom", "hero-comet hero-comet-green", "0.96", "6.9s", "-3.6s"],
  ["hero-bottom-wide", "hero-comet hero-comet-blue", "0.88", "7.5s", "-4.1s"],
  ["hero-core-a", "hero-comet hero-comet-blue", "0.84", "5.6s", "-2.8s"],
  ["hero-core-b", "hero-comet hero-comet-green", "0.84", "5.9s", "-3.9s"],
];

function Comet({
  pathId,
  className,
  scale,
  duration,
  begin,
}: {
  pathId: string;
  className: string;
  scale: string;
  duration: string;
  begin: string;
}) {
  return (
    <g className={className} style={{ "--s": scale } as CSSProperties}>
      <animateMotion dur={duration} begin={begin} repeatCount="indefinite" rotate="auto">
        <mpath href={`#${pathId}`} />
      </animateMotion>
      <ellipse className="hero-tail-blur" cx="-40" cy="0" rx="84" ry="11" />
      <path className="hero-tail-core" d="M-118 0 C-88 -11 -40 -9 -8 0 C-40 9 -88 11 -118 0 Z" />
      <path className="hero-tail-hotline" d="M-100 0 C-72 -2.7 -35 -2.4 -4 0" />
      <circle className="hero-head-glow" cx="0" cy="0" r="15" />
      <circle className="hero-head" cx="0" cy="0" r="5.2" />
    </g>
  );
}

export function HeroOrchestrationAnimation({ className = "" }: HeroOrchestrationAnimationProps) {
  return (
    <div className={`hero-orchestration-animation ${className}`} aria-hidden="true">
      <div className="hero-animation-frame">
        <img
          className="hero-animation-image hero-animation-end"
          src="/images/hero/itera-hero-final.webp"
          alt=""
          loading="eager"
        />

        <div className="hero-animation-core-glow" />

        <svg className="hero-animation-energy" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="hero-soft-blur" x="-100%" y="-180%" width="300%" height="460%">
              <feGaussianBlur stdDeviation="8.5" />
            </filter>
            <filter id="hero-micro-blur" x="-90%" y="-150%" width="280%" height="380%">
              <feGaussianBlur stdDeviation="3.4" />
            </filter>

            <linearGradient id="hero-blue-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#1b98e0" stopOpacity="0.02" />
              <stop offset="22%" stopColor="#1b98e0" stopOpacity="0.48" />
              <stop offset="52%" stopColor="#ffffff" stopOpacity="0.78" />
              <stop offset="78%" stopColor="#1b98e0" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#1b98e0" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="hero-green-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#18b991" stopOpacity="0.02" />
              <stop offset="28%" stopColor="#18b991" stopOpacity="0.44" />
              <stop offset="56%" stopColor="#ffffff" stopOpacity="0.70" />
              <stop offset="100%" stopColor="#18b991" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient id="hero-orange-gradient" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#E97A43" stopOpacity="0.02" />
              <stop offset="35%" stopColor="#f2a06d" stopOpacity="0.36" />
              <stop offset="58%" stopColor="#ffffff" stopOpacity="0.66" />
              <stop offset="100%" stopColor="#E97A43" stopOpacity="0.02" />
            </linearGradient>

            <linearGradient id="hero-blue-tail-soft" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#1b98e0" stopOpacity="0" />
              <stop offset="28%" stopColor="#53ddff" stopOpacity="0.24" />
              <stop offset="56%" stopColor="#96f2ff" stopOpacity="0.54" />
              <stop offset="82%" stopColor="#e8ffff" stopOpacity="0.90" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="hero-blue-tail-core" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#1b98e0" stopOpacity="0" />
              <stop offset="36%" stopColor="#6fe8ff" stopOpacity="0.20" />
              <stop offset="72%" stopColor="#c6fbff" stopOpacity="0.84" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="hero-blue-line-hot" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#7eeaff" stopOpacity="0" />
              <stop offset="44%" stopColor="#b6f8ff" stopOpacity="0.46" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="hero-blue-head-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="42%" stopColor="#9befff" stopOpacity="0.84" />
              <stop offset="100%" stopColor="#1b98e0" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="hero-green-tail-soft" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#18b991" stopOpacity="0" />
              <stop offset="28%" stopColor="#68ffd4" stopOpacity="0.20" />
              <stop offset="56%" stopColor="#9fffe3" stopOpacity="0.48" />
              <stop offset="82%" stopColor="#eafff7" stopOpacity="0.86" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="hero-green-tail-core" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#18b991" stopOpacity="0" />
              <stop offset="36%" stopColor="#82ffd9" stopOpacity="0.18" />
              <stop offset="72%" stopColor="#d0fff0" stopOpacity="0.80" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="hero-green-line-hot" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#7affd8" stopOpacity="0" />
              <stop offset="44%" stopColor="#cdffef" stopOpacity="0.42" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
            <radialGradient id="hero-green-head-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="42%" stopColor="#baffeb" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#18b991" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="hero-orange-tail-soft" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#E97A43" stopOpacity="0" />
              <stop offset="28%" stopColor="#f2bd91" stopOpacity="0.18" />
              <stop offset="56%" stopColor="#ffe0bb" stopOpacity="0.42" />
              <stop offset="82%" stopColor="#fff4e8" stopOpacity="0.80" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.98" />
            </linearGradient>
            <linearGradient id="hero-orange-tail-core" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#E97A43" stopOpacity="0" />
              <stop offset="36%" stopColor="#ffc78f" stopOpacity="0.15" />
              <stop offset="72%" stopColor="#fff0dc" stopOpacity="0.74" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="hero-orange-line-hot" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#ffd09f" stopOpacity="0" />
              <stop offset="44%" stopColor="#fff0dc" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.98" />
            </linearGradient>
            <radialGradient id="hero-orange-head-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="42%" stopColor="#fff1dc" stopOpacity="0.78" />
              <stop offset="100%" stopColor="#E97A43" stopOpacity="0" />
            </radialGradient>

            <path id="hero-left-top" d="M792,382 C650,300 520,258 386,266 C260,273 162,278 74,280" />
            <path id="hero-left-mid" d="M790,440 C632,430 512,455 405,507 C280,568 172,618 68,650" />
            <path id="hero-left-bottom" d="M794,575 C674,686 548,760 390,808" />
            <path id="hero-right-top" d="M806,382 C960,282 1104,258 1238,276 C1374,304 1462,284 1530,268" />
            <path id="hero-right-mid" d="M812,442 C954,430 1078,465 1194,522 C1312,580 1412,622 1530,648" />
            <path id="hero-right-bottom" d="M808,575 C942,696 1078,760 1248,810" />
            <path id="hero-bottom-wide" d="M300,818 C480,730 636,670 800,612 C975,670 1138,730 1310,818" />
            <path id="hero-core-a" d="M530,390 C624,350 705,340 800,360 C895,340 1002,350 1104,394" />
            <path id="hero-core-b" d="M500,560 C628,510 720,500 800,512 C905,498 1018,520 1130,570" />
          </defs>

          {beams.map(([pathId, className]) => (
            <use href={`#${pathId}`} className={className} key={pathId} />
          ))}

          <ellipse className="hero-core-pulse" cx="800" cy="395" rx="180" ry="64" />
          <ellipse className="hero-core-pulse hero-core-pulse-delayed" cx="800" cy="395" rx="250" ry="96" />

          {nodes.map(([cx, cy, className]) => (
            <circle className={String(className)} cx={Number(cx)} cy={Number(cy)} r="4.2" key={`${cx}-${cy}`} />
          ))}

          {comets.map(([pathId, className, scale, duration, begin]) => (
            <Comet
              pathId={pathId}
              className={className}
              scale={scale}
              duration={duration}
              begin={begin}
              key={`${pathId}-${begin}`}
            />
          ))}
        </svg>

        <div className="hero-animation-white-field" />
      </div>
    </div>
  );
}
