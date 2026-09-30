interface LogoMarkProps {
  className?: string
  archColor?: string
  redColor?: string
  goldColor?: string
}

/**
 * MedBridge mark, redrawn as pure SVG per the brand logo:
 * a double bridge arch crossing a gold Canada map,
 * crowned by the red maple leaf.
 */
export default function LogoMark({
  className = 'h-10 w-10',
  archColor = 'currentColor',
  redColor = '#c01a28',
  goldColor = '#c9a227',
}: LogoMarkProps) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={className} aria-hidden="true">
      {/* gold Canada map (stylized landmass) */}
      <path
        d="M22 60 L27 55 L32 57 L35 52 L41 54 L45 50 L51 53 L56 49 L60 53 L66 51 L70 55 L76 54 L74 60 L77 64 L71 66 L67 70 L61 68 L56 72 L50 69 L44 71 L39 67 L33 68 L29 64 L24 63 Z"
        fill={goldColor}
        opacity="0.9"
      />
      <path
        d="M44 44 L46.5 48 L51 47 L48 50 L49.5 54.5 L45 52.5 L41.5 55 L42 50.5 L38.5 48 L43 47.5 Z"
        fill={goldColor}
        opacity="0.75"
      />
      {/* red maple leaf */}
      <path
        d="M48 18 L51 24 L56 21.5 L54.5 27 L60 28 L56 32 L57.5 37 L52 35.5 L50 41 L48 36.5 L46 41 L44 35.5 L38.5 37 L40 32 L36 28 L41.5 27 L40 21.5 L45 24 Z"
        fill={redColor}
      />
      <path d="M48 36.5 L48 46" stroke={redColor} strokeWidth="1.6" strokeLinecap="round" />
      {/* outer arch */}
      <path
        d="M8 78 C8 40 28 14 48 14 C68 14 88 40 88 78"
        stroke={archColor}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* inner arch */}
      <path
        d="M18 78 C18 48 32 26 48 26 C64 26 78 48 78 78"
        stroke={archColor}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* deck line */}
      <path
        d="M4 50 L92 50"
        stroke={archColor}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}
