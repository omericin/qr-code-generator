import { useState } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [value, setValue] = useState('')

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
            <QRCodeCanvas
              value={value}
              size={240}
              level="H"
              includeMargin
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
