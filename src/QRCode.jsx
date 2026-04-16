import { useMemo } from 'react'
import QRCodeLib from 'qrcode'

export default function QRCode({
  value,
  size = 240,
  margin = 4,
  level = 'H',
  shape = 'square',
  bgColor = '#ffffff',
  fgColor = '#1a1a1a',
}) {
  const matrix = useMemo(() => {
    if (!value) return null
    const qr = QRCodeLib.create(value, { errorCorrectionLevel: level })
    const size = qr.modules.size
    const data = qr.modules.data
    const rows = []
    for (let r = 0; r < size; r++) {
      const row = []
      for (let c = 0; c < size; c++) {
        row.push(data[r * size + c] === 1)
      }
      rows.push(row)
    }
    return rows
  }, [value, level])

  if (!matrix) return null

  const moduleCount = matrix.length
  const totalCount = moduleCount + margin * 2

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${totalCount} ${totalCount}`}
      shapeRendering={shape === 'square' ? 'crispEdges' : 'geometricPrecision'}
      role="img"
      aria-label="QR code"
    >
      <rect width={totalCount} height={totalCount} fill={bgColor} />
      {matrix.map((row, r) =>
        row.map((on, c) => {
          if (!on) return null
          const x = c + margin
          const y = r + margin
          if (shape === 'circle') {
            return (
              <circle
                key={`${r}-${c}`}
                cx={x + 0.5}
                cy={y + 0.5}
                r={0.45}
                fill={fgColor}
              />
            )
          }
          return (
            <rect
              key={`${r}-${c}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={fgColor}
            />
          )
        })
      )}
    </svg>
  )
}
