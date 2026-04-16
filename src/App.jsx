import { useState } from 'react'
import QRCode from './QRCode.jsx'
import { FRAMES, FRAME_ORDER } from './frames.jsx'
import './App.css'

const DOT_SHAPES = [
  { id: 'square', label: 'Kare' },
  { id: 'circle', label: 'Yuvarlak' },
  { id: 'pixel', label: 'Piksel' },
  { id: 'rounded', label: 'Yumuşak' },
  { id: 'heart', label: 'Kalp' },
  { id: 'star', label: 'Yıldız' },
  { id: 'kite', label: 'Deltoit' },
]

const FINDER_SHAPES = [
  { id: 'square', label: 'Kare' },
  { id: 'rounded', label: 'Yumuşak' },
  { id: 'circle', label: 'Yuvarlak' },
]

const TABS = [
  { id: 'dots', label: 'Noktalar' },
  { id: 'corners', label: 'Köşeler' },
  { id: 'frame', label: 'Çerçeve' },
]

function App() {
  const [text, setText] = useState('')
  const [value, setValue] = useState('')
  const [tab, setTab] = useState('dots')
  const [shape, setShape] = useState('square')
  const [finderShape, setFinderShape] = useState('square')
  const [frame, setFrame] = useState('none')

  const handleGenerate = (e) => {
    e.preventDefault()
    setValue(text.trim())
  }

  const handleClear = () => {
    setText('')
    setValue('')
  }

  return (
    <main className="container">
      <div className="card">
        <h1>QR Code Generator</h1>
        <p className="subtitle">
          Aşağıdaki kutuya bir metin veya URL girin ve QR kodunu oluşturun.
        </p>

        <form className="form" onSubmit={handleGenerate}>
          <input
            type="text"
            className="input"
            placeholder="Örn: https://example.com"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="tabs" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                className={`tab ${tab === t.id ? 'active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="tab-panel">
            {tab === 'dots' && (
              <div className="chip-group" role="radiogroup" aria-label="Nokta şekli">
                {DOT_SHAPES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    role="radio"
                    aria-checked={shape === s.id}
                    className={`chip ${shape === s.id ? 'active' : ''}`}
                    onClick={() => setShape(s.id)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            {tab === 'corners' && (
              <div className="chip-group" role="radiogroup" aria-label="Köşe şekli">
                {FINDER_SHAPES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    role="radio"
                    aria-checked={finderShape === s.id}
                    className={`chip ${finderShape === s.id ? 'active' : ''}`}
                    onClick={() => setFinderShape(s.id)}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            {tab === 'frame' && (
              <div className="chip-group" role="radiogroup" aria-label="Çerçeve tasarımı">
                {FRAME_ORDER.map((id) => (
                  <button
                    key={id}
                    type="button"
                    role="radio"
                    aria-checked={frame === id}
                    className={`chip ${frame === id ? 'active' : ''}`}
                    onClick={() => setFrame(id)}
                  >
                    {FRAMES[id].label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="actions">
            <button type="submit" className="btn primary" disabled={!text.trim()}>
              Generate
            </button>
            <button type="button" className="btn secondary" onClick={handleClear}>
              Temizle
            </button>
          </div>
        </form>

        <div className="qr-area">
          {value ? (
            <QRCode
              value={value}
              size={280}
              level="H"
              shape={shape}
              finderShape={finderShape}
              frame={frame}
              bgColor="#ffffff"
              fgColor="#1a1a1a"
            />
          ) : (
            <div className="placeholder">QR kodunuz burada görünecek</div>
          )}
        </div>
      </div>
    </main>
  )
}

export default App
