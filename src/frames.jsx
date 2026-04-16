const FONT = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'

export const FRAMES = {
  none: {
    label: 'Yok',
    W: 300,
    H: 300,
    qrX: 0,
    qrY: 0,
    qrSize: 300,
    render: () => null,
  },

  classic: {
    label: 'Klasik',
    W: 340,
    H: 400,
    qrX: 20,
    qrY: 20,
    qrSize: 300,
    render: ({ fg, bg }) => (
      <g>
        <rect
          x={5}
          y={5}
          width={330}
          height={390}
          rx={16}
          fill="none"
          stroke={fg}
          strokeWidth={4}
        />
        <rect x={100} y={345} width={140} height={36} rx={18} fill={fg} />
        <text
          x={170}
          y={370}
          textAnchor="middle"
          fill={bg}
          fontFamily={FONT}
          fontSize={18}
          fontWeight={700}
          letterSpacing={3}
        >
          SCAN ME
        </text>
      </g>
    ),
  },

  rounded: {
    label: 'Yumuşak',
    W: 360,
    H: 420,
    qrX: 30,
    qrY: 30,
    qrSize: 300,
    render: ({ fg, bg }) => (
      <g>
        <rect x={5} y={5} width={350} height={410} rx={28} fill={fg} />
        <text
          x={180}
          y={390}
          textAnchor="middle"
          fill={bg}
          fontFamily={FONT}
          fontSize={28}
          fontWeight={800}
          letterSpacing={6}
        >
          SCAN ME
        </text>
      </g>
    ),
  },

  ribbonTop: {
    label: 'Şerit',
    W: 360,
    H: 395,
    qrX: 30,
    qrY: 65,
    qrSize: 300,
    render: ({ fg, bg }) => (
      <g>
        <path d="M 5 25 L 30 25 L 30 75 L 5 75 L 18 50 Z" fill={fg} />
        <rect x={30} y={25} width={300} height={50} fill={fg} />
        <path d="M 355 25 L 330 25 L 330 75 L 355 75 L 342 50 Z" fill={fg} />
        <text
          x={180}
          y={58}
          textAnchor="middle"
          fill={bg}
          fontFamily={FONT}
          fontSize={22}
          fontWeight={800}
          letterSpacing={5}
        >
          SCAN ME
        </text>
        <rect
          x={25}
          y={60}
          width={310}
          height={310}
          rx={6}
          fill="none"
          stroke={fg}
          strokeWidth={3}
        />
      </g>
    ),
  },

  speechBubble: {
    label: 'Balon',
    W: 340,
    H: 400,
    qrX: 20,
    qrY: 20,
    qrSize: 300,
    render: ({ fg, bg }) => (
      <g>
        <path
          d="M 25 5 Q 5 5 5 25 L 5 340 Q 5 360 25 360 L 140 360 L 160 385 L 180 360 L 315 360 Q 335 360 335 340 L 335 25 Q 335 5 315 5 Z"
          fill={bg}
          stroke={fg}
          strokeWidth={4}
        />
        <text
          x={170}
          y={347}
          textAnchor="middle"
          fill={fg}
          fontFamily={FONT}
          fontSize={20}
          fontWeight={800}
          letterSpacing={3}
        >
          SCAN ME
        </text>
      </g>
    ),
  },

  ticket: {
    label: 'Bilet',
    W: 340,
    H: 400,
    qrX: 20,
    qrY: 20,
    qrSize: 300,
    render: ({ fg, bg }) => (
      <g>
        <rect
          x={5}
          y={5}
          width={330}
          height={390}
          rx={10}
          fill={bg}
          stroke={fg}
          strokeWidth={3}
        />
        <line
          x1={22}
          y1={335}
          x2={318}
          y2={335}
          stroke={fg}
          strokeWidth={2}
          strokeDasharray="6,4"
        />
        <circle cx={5} cy={335} r={10} fill={bg} stroke={fg} strokeWidth={3} />
        <circle cx={335} cy={335} r={10} fill={bg} stroke={fg} strokeWidth={3} />
        <text
          x={170}
          y={375}
          textAnchor="middle"
          fill={fg}
          fontFamily={FONT}
          fontSize={24}
          fontWeight={800}
          letterSpacing={4}
        >
          SCAN ME
        </text>
      </g>
    ),
  },

  dashed: {
    label: 'Kesikli',
    W: 340,
    H: 400,
    qrX: 20,
    qrY: 20,
    qrSize: 300,
    render: ({ fg, bg }) => (
      <g>
        <rect
          x={10}
          y={10}
          width={320}
          height={380}
          rx={14}
          fill="none"
          stroke={fg}
          strokeWidth={3}
          strokeDasharray="10,6"
        />
        <rect x={95} y={342} width={150} height={36} rx={8} fill={fg} />
        <text
          x={170}
          y={366}
          textAnchor="middle"
          fill={bg}
          fontFamily={FONT}
          fontSize={18}
          fontWeight={700}
          letterSpacing={3}
        >
          SCAN ME
        </text>
      </g>
    ),
  },

  arrowTag: {
    label: 'Etiket',
    W: 340,
    H: 410,
    qrX: 20,
    qrY: 20,
    qrSize: 300,
    render: ({ fg, bg }) => (
      <g>
        <rect
          x={15}
          y={15}
          width={310}
          height={310}
          fill="none"
          stroke={fg}
          strokeWidth={3}
        />
        <path
          d="M 50 345 L 290 345 L 320 375 L 290 405 L 50 405 L 20 375 Z"
          fill={fg}
        />
        <text
          x={170}
          y={385}
          textAnchor="middle"
          fill={bg}
          fontFamily={FONT}
          fontSize={22}
          fontWeight={800}
          letterSpacing={4}
        >
          SCAN ME
        </text>
      </g>
    ),
  },

  badge: {
    label: 'Rozet',
    W: 340,
    H: 360,
    qrX: 20,
    qrY: 20,
    qrSize: 300,
    render: ({ fg, bg }) => (
      <g>
        <rect
          x={15}
          y={15}
          width={310}
          height={310}
          fill="none"
          stroke={fg}
          strokeWidth={3}
        />
        <circle cx={305} cy={30} r={38} fill={fg} />
        <text
          x={305}
          y={28}
          textAnchor="middle"
          fill={bg}
          fontFamily={FONT}
          fontSize={13}
          fontWeight={800}
          letterSpacing={1.5}
        >
          SCAN
        </text>
        <text
          x={305}
          y={46}
          textAnchor="middle"
          fill={bg}
          fontFamily={FONT}
          fontSize={13}
          fontWeight={800}
          letterSpacing={2}
        >
          ME
        </text>
      </g>
    ),
  },

  tab: {
    label: 'Sekme',
    W: 340,
    H: 395,
    qrX: 20,
    qrY: 75,
    qrSize: 300,
    render: ({ fg, bg }) => (
      <g>
        <path
          d="M 90 15 Q 105 15 112 30 L 125 55 L 215 55 L 228 30 Q 235 15 250 15 Z"
          fill={fg}
        />
        <text
          x={170}
          y={44}
          textAnchor="middle"
          fill={bg}
          fontFamily={FONT}
          fontSize={18}
          fontWeight={800}
          letterSpacing={4}
        >
          SCAN ME
        </text>
        <rect
          x={15}
          y={55}
          width={310}
          height={325}
          rx={8}
          fill="none"
          stroke={fg}
          strokeWidth={3}
        />
      </g>
    ),
  },

  doubleBorder: {
    label: 'Çift Çizgi',
    W: 360,
    H: 410,
    qrX: 30,
    qrY: 30,
    qrSize: 300,
    render: ({ fg, bg }) => (
      <g>
        <rect
          x={5}
          y={5}
          width={350}
          height={400}
          fill="none"
          stroke={fg}
          strokeWidth={3}
        />
        <rect
          x={15}
          y={15}
          width={330}
          height={380}
          fill="none"
          stroke={fg}
          strokeWidth={1.5}
        />
        <text
          x={180}
          y={375}
          textAnchor="middle"
          fill={fg}
          fontFamily={FONT}
          fontSize={22}
          fontWeight={800}
          letterSpacing={5}
        >
          SCAN ME
        </text>
      </g>
    ),
  },
}

export const FRAME_ORDER = [
  'none',
  'classic',
  'rounded',
  'ribbonTop',
  'speechBubble',
  'ticket',
  'dashed',
  'arrowTag',
  'badge',
  'tab',
  'doubleBorder',
]
