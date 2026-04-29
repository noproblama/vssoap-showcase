export function DecorativeFlower({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-sage-200 ${className}`} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M50,30 Q60,40 50,50 Q40,40 50,30" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M70,50 Q60,60 50,50 Q60,40 70,50" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M50,70 Q40,60 50,50 Q60,60 50,70" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M30,50 Q40,40 50,50 Q40,60 30,50" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  );
}

export function DecorativeLeaf({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-sage-200 ${className}`} viewBox="0 0 100 100" fill="none">
      <path d="M50,10 Q70,30 60,50 Q55,70 50,90" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M50,10 Q30,30 40,50 Q45,70 50,90" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M50,30 Q60,35 55,45" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M50,50 Q40,55 45,65" stroke="currentColor" strokeWidth="0.8"/>
    </svg>
  );
}

export function DecorativeWave({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-sage-200 ${className}`} viewBox="0 0 200 100" fill="none">
      <path d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M0,60 Q25,40 50,60 T100,60 T150,60 T200,60" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
    </svg>
  );
}

export function DecorativeCircles({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-sage-200 ${className}`} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.8" opacity="0.8"/>
      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
    </svg>
  );
}

/* ─── Botanical illustrations ─────────────────────────────────────────────── */

export function BotanicalHoneycomb({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-stone-400 ${className}`} viewBox="0 0 110 110" fill="none">
      {/* 7 pointy-top hexagons (r=14) in a honeycomb cluster */}
      {/* Center (55,55) */}
      <polygon points="55,41 67.1,48 67.1,62 55,69 42.9,62 42.9,48" stroke="currentColor" strokeWidth="1"/>
      {/* Right (79.3,55) */}
      <polygon points="79.3,41 91.4,48 91.4,62 79.3,69 67.1,62 67.1,48" stroke="currentColor" strokeWidth="1"/>
      {/* Left (30.8,55) */}
      <polygon points="30.8,41 42.9,48 42.9,62 30.8,69 18.6,62 18.6,48" stroke="currentColor" strokeWidth="1"/>
      {/* Upper-right (67.1,34) */}
      <polygon points="67.1,20 79.3,27 79.3,41 67.1,48 55,41 55,27" stroke="currentColor" strokeWidth="1"/>
      {/* Upper-left (42.9,34) */}
      <polygon points="42.9,20 55,27 55,41 42.9,48 30.8,41 30.8,27" stroke="currentColor" strokeWidth="1"/>
      {/* Lower-right (67.1,76) */}
      <polygon points="67.1,62 79.3,69 79.3,83 67.1,90 55,83 55,69" stroke="currentColor" strokeWidth="1"/>
      {/* Lower-left (42.9,76) */}
      <polygon points="42.9,62 55,69 55,83 42.9,90 30.8,83 30.8,69" stroke="currentColor" strokeWidth="1"/>
      {/* Honey drop dripping from lower-right edge */}
      <path d="M73,94 C69,100 67,105 67,108 C67,111 70,113 73,113 C76,113 79,111 79,108 C79,105 77,100 73,94"
            stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
    </svg>
  );
}

export function BotanicalStrawberry({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-stone-400 ${className}`} viewBox="0 0 80 95" fill="none">
      {/* Body */}
      <path d="M40,88 C28,76 14,60 14,44 C14,30 26,22 40,22 C54,22 66,30 66,44 C66,60 52,76 40,88 Z"
            stroke="currentColor" strokeWidth="1.1"/>
      {/* Seeds — small elongated marks scattered over the body */}
      <ellipse cx="40" cy="38" rx="1.2" ry="2" stroke="currentColor" strokeWidth="0.7"/>
      <ellipse cx="32" cy="44" rx="1.2" ry="2" transform="rotate(-14,32,44)" stroke="currentColor" strokeWidth="0.7"/>
      <ellipse cx="48" cy="44" rx="1.2" ry="2" transform="rotate(14,48,44)" stroke="currentColor" strokeWidth="0.7"/>
      <ellipse cx="24" cy="50" rx="1.2" ry="2" transform="rotate(-22,24,50)" stroke="currentColor" strokeWidth="0.7"/>
      <ellipse cx="40" cy="52" rx="1.2" ry="2" stroke="currentColor" strokeWidth="0.7"/>
      <ellipse cx="56" cy="50" rx="1.2" ry="2" transform="rotate(22,56,50)" stroke="currentColor" strokeWidth="0.7"/>
      <ellipse cx="28" cy="61" rx="1.2" ry="2" transform="rotate(-10,28,61)" stroke="currentColor" strokeWidth="0.7"/>
      <ellipse cx="52" cy="61" rx="1.2" ry="2" transform="rotate(10,52,61)" stroke="currentColor" strokeWidth="0.7"/>
      <ellipse cx="40" cy="67" rx="1.2" ry="2" stroke="currentColor" strokeWidth="0.7"/>
      <ellipse cx="33" cy="74" rx="1.2" ry="2" transform="rotate(-5,33,74)" stroke="currentColor" strokeWidth="0.7"/>
      <ellipse cx="47" cy="74" rx="1.2" ry="2" transform="rotate(5,47,74)" stroke="currentColor" strokeWidth="0.7"/>
      {/* Calyx leaflets */}
      <path d="M40,22 C36,14 29,9 31,5 C33,2 37,6 39,12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M40,22 C44,14 51,9 49,5 C47,2 43,6 41,12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M40,22 C38,14 38,8 40,5 C42,8 42,14 40,22" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M40,22 C34,13 27,12 27,8 C27,5 32,6 37,13" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M40,22 C46,13 53,12 53,8 C53,5 48,6 43,13" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

export function BotanicalOlive({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-stone-400 ${className}`} viewBox="0 0 110 240" fill="none">
      {/* Main stem */}
      <path d="M55,235 C54,200 51,166 47,133 C43,100 47,68 55,32"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      {/* Pair 1 */}
      <g transform="translate(70,196) rotate(-38)">
        <ellipse cx="0" cy="0" rx="16" ry="5" stroke="currentColor" strokeWidth="1"/>
        <line x1="-14" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <g transform="translate(40,188) rotate(38)">
        <ellipse cx="0" cy="0" rx="16" ry="5" stroke="currentColor" strokeWidth="1"/>
        <line x1="-14" y1="0" x2="14" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <circle cx="30" cy="180" r="3.5" stroke="currentColor" strokeWidth="0.9"/>
      {/* Pair 2 */}
      <g transform="translate(66,162) rotate(-42)">
        <ellipse cx="0" cy="0" rx="15.5" ry="4.8" stroke="currentColor" strokeWidth="1"/>
        <line x1="-13" y1="0" x2="13" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <g transform="translate(37,155) rotate(42)">
        <ellipse cx="0" cy="0" rx="15.5" ry="4.8" stroke="currentColor" strokeWidth="1"/>
        <line x1="-13" y1="0" x2="13" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <circle cx="72" cy="154" r="3" stroke="currentColor" strokeWidth="0.9"/>
      {/* Pair 3 */}
      <g transform="translate(63,128) rotate(-45)">
        <ellipse cx="0" cy="0" rx="15" ry="4.5" stroke="currentColor" strokeWidth="1"/>
        <line x1="-13" y1="0" x2="13" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <g transform="translate(34,122) rotate(45)">
        <ellipse cx="0" cy="0" rx="15" ry="4.5" stroke="currentColor" strokeWidth="1"/>
        <line x1="-13" y1="0" x2="13" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <circle cx="30" cy="118" r="3" stroke="currentColor" strokeWidth="0.9"/>
      {/* Pair 4 */}
      <g transform="translate(61,95) rotate(-48)">
        <ellipse cx="0" cy="0" rx="14" ry="4.5" stroke="currentColor" strokeWidth="1"/>
        <line x1="-12" y1="0" x2="12" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <g transform="translate(35,89) rotate(48)">
        <ellipse cx="0" cy="0" rx="14" ry="4.5" stroke="currentColor" strokeWidth="1"/>
        <line x1="-12" y1="0" x2="12" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <circle cx="67" cy="88" r="2.5" stroke="currentColor" strokeWidth="0.9"/>
      {/* Pair 5 */}
      <g transform="translate(60,64) rotate(-51)">
        <ellipse cx="0" cy="0" rx="13" ry="4" stroke="currentColor" strokeWidth="1"/>
        <line x1="-11" y1="0" x2="11" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <g transform="translate(38,59) rotate(51)">
        <ellipse cx="0" cy="0" rx="13" ry="4" stroke="currentColor" strokeWidth="1"/>
        <line x1="-11" y1="0" x2="11" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      {/* Pair 6 */}
      <g transform="translate(60,38) rotate(-54)">
        <ellipse cx="0" cy="0" rx="12" ry="4" stroke="currentColor" strokeWidth="1"/>
        <line x1="-10" y1="0" x2="10" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <g transform="translate(43,34) rotate(54)">
        <ellipse cx="0" cy="0" rx="12" ry="4" stroke="currentColor" strokeWidth="1"/>
        <line x1="-10" y1="0" x2="10" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <circle cx="33" cy="52" r="2.5" stroke="currentColor" strokeWidth="0.9"/>
    </svg>
  );
}

export function BotanicalLavender({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-stone-400 ${className}`} viewBox="0 0 70 220" fill="none">
      {/* Main stem */}
      <path d="M35,215 L35,106" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      {/* Side leaf pairs */}
      <path d="M35,195 C26,188 18,179 20,169" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M35,195 C44,188 52,179 50,169" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M35,172 C26,165 17,155 20,145" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M35,172 C44,165 53,155 50,145" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M35,148 C26,141 18,131 21,121" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M35,148 C44,141 52,131 49,121" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      {/* Spike stem */}
      <line x1="35" y1="106" x2="35" y2="20" stroke="currentColor" strokeWidth="0.9"/>
      {/* Bud pairs */}
      <path d="M35,103 C28,97 25,90 27,84 C30,88 32,95 35,100" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M35,103 C42,97 45,90 43,84 C40,88 38,95 35,100" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M35,91 C28,85 25,78 27,72 C30,76 32,83 35,88" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M35,91 C42,85 45,78 43,72 C40,76 38,83 35,88" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M35,79 C28,73 25,66 27,60 C30,64 32,71 35,76" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M35,79 C42,73 45,66 43,60 C40,64 38,71 35,76" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M35,67 C29,61 26,54 28,48 C31,52 33,59 35,64" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M35,67 C41,61 44,54 42,48 C39,52 37,59 35,64" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M35,55 C29,49 27,42 29,36 C31,40 33,47 35,52" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M35,55 C41,49 43,42 41,36 C39,40 37,47 35,52" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M35,43 C30,37 28,31 30,25 C32,29 33,36 35,40" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M35,43 C40,37 42,31 40,25 C38,29 37,36 35,40" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M35,31 C30,26 29,20 31,15 C33,18 34,24 35,29" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
      <path d="M35,31 C40,26 41,20 39,15 C37,18 36,24 35,29" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
    </svg>
  );
}

export function BotanicalChamomile({ className = "" }: { className?: string }) {
  const petalAngles = [0, 27.7, 55.4, 83.1, 110.8, 138.5, 166.2, 193.8, 221.5, 249.2, 276.9, 304.6, 332.3];
  return (
    <svg className={`text-stone-400 ${className}`} viewBox="0 0 120 180" fill="none">
      {/* Stem */}
      <path d="M60,175 C59,155 58,135 57,115 C57,98 60,82 60,68"
            stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Leaves */}
      <path d="M59,148 C49,142 40,133 34,121 C40,118 51,126 57,136"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M59,148 C69,141 78,132 82,120 C76,118 65,127 59,137"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <path d="M58,122 C50,115 43,105 45,94 C50,97 57,107 58,118"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      {/* Flower */}
      <g transform="translate(60,52)">
        <circle cx="0" cy="0" r="11.5" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="0" cy="0" r="6" stroke="currentColor" strokeWidth="0.7"/>
        {petalAngles.map((angle) => (
          <ellipse
            key={angle}
            cx="0" cy="-24"
            rx="4.5" ry="10"
            transform={`rotate(${angle})`}
            stroke="currentColor" strokeWidth="0.9"
          />
        ))}
      </g>
    </svg>
  );
}

export function BotanicalRose({ className = "" }: { className?: string }) {
  const outerAngles = [0, 72, 144, 216, 288];
  const innerAngles = [36, 108, 180, 252, 324];
  return (
    <svg className={`text-stone-400 ${className}`} viewBox="0 0 120 200" fill="none">
      {/* Stem */}
      <path d="M60,195 C60,170 58,150 57,130 C56,112 58,92 60,75"
            stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      {/* Thorns */}
      <path d="M59,160 C54,154 51,148 53,145" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      <path d="M59,140 C64,134 67,128 65,125" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
      {/* Leaves */}
      <path d="M58,148 C46,142 37,132 38,120 C44,122 54,131 58,142"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="38" y1="120" x2="58" y2="142" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M60,128 C72,121 81,111 80,99 C74,101 64,111 60,122"
            stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <line x1="80" y1="99" x2="60" y2="122" stroke="currentColor" strokeWidth="0.5"/>
      {/* Sepals */}
      <path d="M60,75 C55,68 50,62 48,56 C52,58 57,64 60,70" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M60,75 C65,68 70,62 72,56 C68,58 63,64 60,70" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      <path d="M60,75 C57,67 58,60 60,54 C62,60 63,67 60,72" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
      {/* Rose petals centered at (60,38) */}
      <g transform="translate(60,38)">
        {outerAngles.map((angle) => (
          <path
            key={angle}
            d="M0,0 C10,-5 20,-20 13,-34 C6,-42 -6,-42 -13,-34 C-20,-20 -10,-5 0,0"
            transform={`rotate(${angle})`}
            stroke="currentColor" strokeWidth="1"
          />
        ))}
        {innerAngles.map((angle) => (
          <path
            key={angle}
            d="M0,0 C6,-3 12,-13 8,-22 C4,-27 -4,-27 -8,-22 C-12,-13 -6,-3 0,0"
            transform={`rotate(${angle})`}
            stroke="currentColor" strokeWidth="0.8"
          />
        ))}
        <circle cx="0" cy="0" r="4.5" stroke="currentColor" strokeWidth="0.8"/>
      </g>
    </svg>
  );
}

export function BotanicalHerb({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-stone-400 ${className}`} viewBox="0 0 100 180" fill="none">
      {/* Main stem */}
      <path d="M50,175 C50,150 49,125 49,100 C49,78 50,58 50,40"
            stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      {/* Branch left 1 */}
      <path d="M49,145 C41,138 33,131 27,123" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <g transform="translate(36,136) rotate(35)">
        <ellipse cx="0" cy="0" rx="9" ry="4" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-7" y1="0" x2="7" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <g transform="translate(27,124) rotate(32)">
        <ellipse cx="0" cy="0" rx="8" ry="3.5" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-6" y1="0" x2="6" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      {/* Branch right 1 */}
      <path d="M49,145 C57,138 65,131 71,123" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <g transform="translate(62,136) rotate(-35)">
        <ellipse cx="0" cy="0" rx="9" ry="4" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-7" y1="0" x2="7" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <g transform="translate(71,124) rotate(-32)">
        <ellipse cx="0" cy="0" rx="8" ry="3.5" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-6" y1="0" x2="6" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      {/* Branch left 2 */}
      <path d="M49,112 C41,105 33,98 27,90" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <g transform="translate(37,103) rotate(38)">
        <ellipse cx="0" cy="0" rx="8.5" ry="3.5" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-6.5" y1="0" x2="6.5" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <g transform="translate(27,91) rotate(35)">
        <ellipse cx="0" cy="0" rx="7.5" ry="3" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-5.5" y1="0" x2="5.5" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      {/* Branch right 2 */}
      <path d="M49,112 C57,105 65,98 71,90" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <g transform="translate(61,103) rotate(-38)">
        <ellipse cx="0" cy="0" rx="8.5" ry="3.5" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-6.5" y1="0" x2="6.5" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <g transform="translate(71,91) rotate(-35)">
        <ellipse cx="0" cy="0" rx="7.5" ry="3" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-5.5" y1="0" x2="5.5" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      {/* Branch left 3 */}
      <path d="M50,78 C42,72 35,65 29,57" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <g transform="translate(38,69) rotate(40)">
        <ellipse cx="0" cy="0" rx="8" ry="3.5" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-6" y1="0" x2="6" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      {/* Branch right 3 */}
      <path d="M50,78 C58,72 65,65 71,57" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      <g transform="translate(62,69) rotate(-40)">
        <ellipse cx="0" cy="0" rx="8" ry="3.5" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-6" y1="0" x2="6" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      {/* Terminal leaves */}
      <g transform="translate(48,54) rotate(-12)">
        <ellipse cx="0" cy="0" rx="9" ry="4" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-7" y1="0" x2="7" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
      <g transform="translate(54,42) rotate(12)">
        <ellipse cx="0" cy="0" rx="8.5" ry="3.5" stroke="currentColor" strokeWidth="0.9"/>
        <line x1="-6.5" y1="0" x2="6.5" y2="0" stroke="currentColor" strokeWidth="0.5"/>
      </g>
    </svg>
  );
}
