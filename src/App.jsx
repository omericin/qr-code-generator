import { useState } from 'react'
import QRCode from './QRCode.jsx'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [value, setValue] = useState('')
  const [roundDots, setRoundDots] = useState(false)

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

          <label className="toggle">
            <input
              type="checkbox"
              checked={roundDots}
              onChange={(e) => setRoundDots(e.target.checked)}
            />
            <span>Yuvarlak noktalar</span>
          </label>

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
              size={240}
              level="H"
              shape={roundDots ? 'circle' : 'square'}
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
