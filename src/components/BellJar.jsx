import { motion } from "framer-motion";

const DOME_PATH = "M58,300 C58,145 72,40 150,40 C228,40 242,145 242,300 Z";

/**
 * The site's signature illustration: a dimensional glass bell jar with
 * the novel's title set inside the dome, sitting on a static table line.
 * `lift` and `fog` must be framer-motion MotionValues (from
 * useTransform/useScroll/useMotionValue) — this lets the dome move and
 * seal on every frame without triggering a React re-render.
 *
 * Both are bound directly with no intermediate derived transforms (no
 * useTransform-of-a-useTransform chains) — that indirection is what broke
 * once already, silently freezing at a stale value.
 *
 * lift: 0 (resting on the table) -> negative (raised)
 * fog:  0 (clear) -> 1 (fully sealed: dark, opaque haze over the glass)
 */
export default function BellJar({ lift, fog, className, showTitle = true, title = "THE BELL JAR" }) {
  return (
    <svg
      viewBox="0 0 300 380"
      className={className}
      role="img"
      aria-label={`An illustrated bell jar${showTitle ? `, "${title}" set inside the glass,` : ""} lifting to reveal what's underneath`}
    >
      <defs>
        <clipPath id="domeClip">
          <path d={DOME_PATH} />
        </clipPath>
        {/* Directional light, upper-left — Option B's dimensional treatment */}
        <radialGradient id="domeLight" cx="32%" cy="22%" r="85%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
          <stop offset="42%" stopColor="#cdbfa0" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#5f5138" stopOpacity="0.3" />
        </radialGradient>
        <linearGradient id="rimLight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="coolEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bfe3ea" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#bfe3ea" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="hazeFill" cx="50%" cy="55%" r="70%">
          <stop offset="0%" stopColor="#5c5140" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#2a241c" stopOpacity="0.97" />
        </radialGradient>
        <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id="titleGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="1.1" />
        </filter>
        {/* Invisible guide the title text rides along */}
        <path id="titleArc" d="M62,180 C100,150 200,150 238,180" fill="none" />
      </defs>

      {/* Static table line — the jar rises away from this, it never moves */}
      <ellipse cx="150" cy="332" rx="118" ry="10" fill="none" stroke="#7a6a52" strokeWidth="1.5" opacity="0.35" />
      <ellipse cx="150" cy="332" rx="118" ry="10" fill="#2c2420" opacity="0.07" />

      <motion.g style={{ y: lift }}>
        {/* Dome silhouette + dimensional light */}
        <path d={DOME_PATH} fill="url(#domeLight)" stroke="#2c2420" strokeWidth="2.5" />

        {/* Faint horizontal seams — a quiet, manufactured, "built" texture */}
        <g clipPath="url(#domeClip)" stroke="#2c2420" strokeWidth="1" opacity="0.08">
          <line x1="50" y1="110" x2="250" y2="110" />
          <line x1="50" y1="150" x2="250" y2="150" />
          <line x1="50" y1="190" x2="250" y2="190" />
          <line x1="50" y1="230" x2="250" y2="230" />
          <line x1="50" y1="270" x2="250" y2="270" />
        </g>

        {/* Bottom lip */}
        <ellipse cx="150" cy="300" rx="92" ry="13" fill="#fdf8ee" fillOpacity="0.3" stroke="#2c2420" strokeWidth="2" />
        {/* Knob */}
        <ellipse cx="150" cy="30" rx="13" ry="9" fill="#fdf8ee" stroke="#2c2420" strokeWidth="2" />
        <line x1="150" y1="39" x2="150" y2="46" stroke="#2c2420" strokeWidth="2.5" />

        {/* Rim light + highlights — the haze overlay below draws over these as the jar seals */}
        <g clipPath="url(#domeClip)">
          <path d="M58,300 C58,145 72,40 150,40" fill="none" stroke="url(#rimLight)" strokeWidth="5" opacity="0.8" />
          <path d="M242,300 C242,145 228,40 150,40" fill="none" stroke="url(#coolEdge)" strokeWidth="4" opacity="0.6" />
        </g>
        <g clipPath="url(#domeClip)" filter="url(#softBlur)">
          <path d="M94,70 C86,140 86,210 96,270" stroke="#ffffff" strokeWidth="9" fill="none" opacity="0.5" />
          <path d="M196,80 C203,140 202,200 194,250" stroke="#bfe3ea" strokeWidth="5" fill="none" opacity="0.35" />
        </g>

        {showTitle && (
          <text
            filter="url(#titleGlow)"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="14"
            letterSpacing="1"
            fill="#2c2420"
            fillOpacity="0.55"
            textAnchor="middle"
          >
            <textPath href="#titleArc" startOffset="50%" method="stretch" spacing="auto">{title}</textPath>
          </text>
        )}

        {/* Interior haze — opacity bound directly to fog, 0 (clear) to 1 (fully sealed) */}
        <motion.path d={DOME_PATH} fill="url(#hazeFill)" style={{ opacity: fog }} />
      </motion.g>
    </svg>
  );
}
