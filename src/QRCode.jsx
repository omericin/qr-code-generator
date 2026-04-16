import { useMemo } from 'react'
import QRCodeLib from 'qrcode'
import { FRAMES } from './frames.jsx'

function renderDot(r, c, shape, fgColor) {
  const x = c
  const y = r
  const cx = x + 0.5
  const cy = y + 0.5
  const key = `${r}-${c}`

  switch (shape) {
    case 'circle':
      return <circle key={key} cx={cx} cy={cy} r={0.45} fill={fgColor} />

    case 'pixel':
      return (
        <rect
          key={key}
          x={x + 0.1}
          y={y + 0.1}
          width={0.8}
          height={0.8}
          fill={fgColor}
        />
      )

    case 'rounded':
      return (
        <rect
          key={key}
          x={x + 0.05}
          y={y + 0.05}
          width={0.9}
          height={0.9}
          rx={0.3}
          ry={0.3}
          fill={fgColor}
        />
      )

    case 'heart': {
      const d = [
        `M ${cx} ${y + 0.88}`,
        `C ${x + 0.05} ${y + 0.58} ${x + 0.05} ${y + 0.18} ${x + 0.3} ${y + 0.18}`,
        `C ${x + 0.4} ${y + 0.18} ${cx} ${y + 0.3} ${cx} ${y + 0.42}`,
        `C ${cx} ${y + 0.3} ${x + 0.6} ${y + 0.18} ${x + 0.7} ${y + 0.18}`,
        `C ${x + 0.95} ${y + 0.18} ${x + 0.95} ${y + 0.58} ${cx} ${y + 0.88} Z`,
      ].join(' ')
      return <path key={key} d={d} fill={fgColor} />
    }

    case 'star': {
      const d = [
        `M ${cx} ${y + 0.02}`,
        `Q ${cx} ${cy} ${x + 0.98} ${cy}`,
        `Q ${cx} ${cy} ${cx} ${y + 0.98}`,
        `Q ${cx} ${cy} ${x + 0.02} ${cy}`,
        `Q ${cx} ${cy} ${cx} ${y + 0.02} Z`,
      ].join(' ')
      return <path key={key} d={d} fill={fgColor} />
    }

    case 'kite': {
      const d = [
        `M ${cx} ${y + 0.02}`,
        `L ${x + 0.98} ${y + 0.38}`,
        `L ${cx} ${y + 0.98}`,
        `L ${x + 0.02} ${y + 0.38} Z`,
      ].join(' ')
      return <path key={key} d={d} fill={fgColor} />
    }

    case 'square':
    default:
      return (
        <rect key={key} x={x} y={y} width={1} height={1} fill={fgColor} />
      )
  }
}

function renderFinder(col, row, shape, fgColor, bgColor, keyPrefix) {
  const cx = col + 3.5
  const cy = row + 3.5

  if (shape === 'rounded') {
    return (
      <g key={keyPrefix}>
        <rect
          x={col}
          y={row}
          width={7}
          height={7}
          rx={2}
          ry={2}
          fill={fgColor}
        />
        <rect
          x={col + 1}
          y={row + 1}
          width={5}
          height={5}
          rx={1.5}
          ry={1.5}
          fill={bgColor}
        />
        <rect
          x={col + 2}
          y={row + 2}
          width={3}
          height={3}
          rx={0.8}
          ry={0.8}
          fill={fgColor}
        />
      </g>
    )
  }

  if (shape === 'circle') {
    return (
      <g key={keyPrefix}>
        <circle cx={cx} cy={cy} r={3.5} fill={fgColor} />
        <circle cx={cx} cy={cy} r={2.5} fill={bgColor} />
        <circle cx={cx} cy={cy} r={1.5} fill={fgColor} />
      </g>
    )
  }

  return (
    <g key={keyPrefix}>
      <rect x={col} y={row} width={7} height={7} fill={fgColor} />
      <rect x={col + 1} y={row + 1} width={5} height={5} fill={bgColor} />
      <rect x={col + 2} y={row + 2} width={3} height={3} fill={fgColor} />
    </g>
  )
}

function isInFinder(r, c, n) {
  if (r < 7 && c < 7) return true
  if (r < 7 && c >= n - 7) return true
  if (r >= n - 7 && c < 7) return true
  return false
}

export default function QRCode({
  value,
  size = 280,
  level = 'H',
  shape = 'square',
  finderShape = 'square',
  frame = 'none',
  fgColor = '#1a1a1a',
  bgColor = '#ffffff',
}) {
  const matrix = useMemo(() => {
    if (!value) return null
    const qr = QRCodeLib.create(value, { errorCorrectionLevel: level })
    const n = qr.modules.size
    const data = qr.modules.data
    const rows = []
    for (let r = 0; r < n; r++) {
      const row = []
      for (let c = 0; c < n; c++) {
        row.push(data[r * n + c] === 1)
      }
      rows.push(row)
    }
    return rows
  }, [value, level])

  if (!matrix) return null

  const n = matrix.length
  const margin = 4
  const totalUnits = n + margin * 2

  const frameData = FRAMES[frame] || FRAMES.none
  const { W, H, qrX, qrY, qrSize, render: renderFrame } = frameData
  const moduleScale = qrSize / totalUnits

  const pxPerUnit = size / qrSize
  const displayWidth = W * pxPerUnit
  const displayHeight = H * pxPerUnit

  const isSquareLike = shape === 'square' && finderShape === 'square'

  return (
    <svg
      width={displayWidth}
      height={displayHeight}
      viewBox={`0 0 ${W} ${H}`}
      shapeRendering={isSquareLike ? 'crispEdges' : 'geometricPrecision'}
      role="img"
      aria-label="QR code"
    >
      {renderFrame({ fg: fgColor, bg: bgColor })}
      <g transform={`translate(${qrX} ${qrY}) scale(${moduleScale})`}>
        <rect width={totalUnits} height={totalUnits} fill={bgColor} />
        <g transform={`translate(${margin} ${margin})`}>
          {renderFinder(0, 0, finderShape, fgColor, bgColor, 'f-tl')}
          {renderFinder(n - 7, 0, finderShape, fgColor, bgColor, 'f-tr')}
          {renderFinder(0, n - 7, finderShape, fgColor, bgColor, 'f-bl')}
          {matrix.map((row, r) =>
            row.map((on, c) => {
              if (!on) return null
              if (isInFinder(r, c, n)) return null
              return renderDot(r, c, shape, fgColor)
            })
          )}
        </g>
      </g>
    </svg>
  )
}
