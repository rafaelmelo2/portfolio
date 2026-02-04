import { useEffect, useCallback, useState } from 'react'
import { X, ExternalLink } from 'lucide-react'

const TAMANHOS = [
  { label: '50%', value: 50 },
  { label: '75%', value: 75 },
  { label: '100%', value: 100 },
]

export function DemoPreview({ url, title = 'Demo', onClose }) {
  const [tamanho, setTamanho] = useState(100)

  const handleEscape = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [handleEscape])

  if (!url) return null

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${title}`}
    >
      {/* Header: empilha em mobile, touch targets >= 44px */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 px-3 sm:px-4 py-3 bg-slate-900/95 border-b border-slate-700 shrink-0">
        <div className="flex items-center justify-between gap-2 min-w-0">
          <span className="text-slate-200 font-medium truncate text-sm sm:text-base">{title}</span>
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-[44px] px-3 py-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors touch-manipulation"
              title="Abrir em nova aba"
            >
              <ExternalLink size={18} />
              <span>Nova aba</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-colors touch-manipulation flex items-center justify-center"
              aria-label="Fechar"
            >
              <X size={22} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-800 border border-slate-600 w-fit">
          {TAMANHOS.map(({ label, value }) => (
            <button
              key={value}
              type="button"
              onClick={() => setTamanho(value)}
              className={`min-h-[40px] px-3 py-2 text-xs font-medium rounded transition-colors touch-manipulation ${
                tamanho === value
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      {/* Área redimensionável; clicar no fundo fecha */}
      <div
        className="flex-1 flex items-center justify-center p-2 sm:p-4 min-h-0"
        onClick={onClose}
        role="presentation"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative rounded-lg overflow-hidden border border-slate-600 bg-slate-900 shadow-2xl transition-[width,height] duration-300 ease-out flex flex-col w-full"
          style={{
            width: `${tamanho}vw`,
            maxWidth: '100%',
            height: `calc(${tamanho} * (100vh - 120px) / 100)`,
            maxHeight: 'calc(100vh - 120px)',
          }}
        >
          <iframe
            src={url}
            title="Preview da demo"
            className="w-full h-full min-h-0 border-0"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  )
}
