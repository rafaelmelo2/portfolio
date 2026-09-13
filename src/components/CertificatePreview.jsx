import { ExternalLink, ShieldCheck, X } from 'lucide-react'
import { useCallback, useEffect } from 'react'

const EXTENSOES_IMAGEM = /\.(jpe?g|png|gif|webp|svg)(\?|$)/i
const EXTENSAO_PDF = /\.pdf(\?|$)/i

/** Garante caminho absoluto para arquivos locais (public/). */
function normalizarUrl(url) {
  if (!url || typeof url !== 'string') return ''
  const s = url.trim()
  if (s.startsWith('http://') || s.startsWith('https://') || s.startsWith('/')) return s
  return `/${s}`
}

/** Retorna URL absoluta e codificada (espacos, virgulas, etc.) para uso em iframe/img. */
function urlParaSrc(url) {
  if (!url || typeof url !== 'string') return url
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  try {
    return new URL(url, window.location.origin).href
  } catch {
    return url.split('/').map(encodeURIComponent).join('/')
  }
}

function isImagem(url) {
  if (!url || typeof url !== 'string') return false
  return EXTENSOES_IMAGEM.test(url)
}

function isPdf(url) {
  if (!url || typeof url !== 'string') return false
  return EXTENSAO_PDF.test(url)
}

export function CertificatePreview({ url, title = 'Certificado', linkValidacao, onClose }) {
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

  const urlNormalizada = normalizarUrl(url)
  if (!urlNormalizada) return null
  const urlSrc = urlParaSrc(urlNormalizada)

  const usarImagem = isImagem(urlNormalizada)
  const usarPdf = isPdf(urlNormalizada)

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Preview: ${title}`}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col w-full max-w-3xl max-h-[90vh] sm:max-h-[85vh] bg-ink rounded-2xl border border-line shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 px-3 sm:px-4 py-3 bg-ink-2 border-b border-line shrink-0">
          <div className="flex items-center justify-between gap-2 min-w-0">
            <span className="text-paper font-medium truncate text-sm sm:text-base">{title}</span>
            <button
              type="button"
              onClick={onClose}
              className="min-w-[44px] min-h-[44px] p-2 rounded-lg text-muted hover:text-paper hover:bg-ink-3 transition-colors touch-manipulation flex items-center justify-center shrink-0 sm:hidden"
              aria-label="Fechar"
            >
              <X size={22} />
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {linkValidacao && (
              <a
                href={linkValidacao}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 min-h-[44px] px-3 py-2 text-sm text-accent hover:text-paper transition-colors touch-manipulation"
                title="Validar certificado na plataforma"
              >
                <ShieldCheck size={18} />
                Validar
              </a>
            )}
            <a
              href={urlSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-[44px] px-3 py-2 text-sm text-signal hover:text-paper transition-colors touch-manipulation"
              title="Abrir em nova aba"
            >
              <ExternalLink size={18} />
              Nova aba
            </a>
            <button
              type="button"
              onClick={onClose}
              className="hidden sm:flex min-w-[44px] min-h-[44px] p-2 rounded-lg text-muted hover:text-paper hover:bg-ink-3 transition-colors items-center justify-center touch-manipulation"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>
          </div>
        </header>
        <div className="flex-1 min-h-0 flex items-center justify-center bg-black overflow-auto p-3 sm:p-4">
          {usarImagem ? (
            <img
              src={urlSrc}
              alt={`Certificado: ${title}`}
              className="max-w-full max-h-[65vh] sm:max-h-[70vh] w-auto h-auto object-contain rounded"
            />
          ) : usarPdf ? (
            <iframe
              src={`${urlSrc}#toolbar=0`}
              title={`Certificado: ${title}`}
              className="w-full min-h-[50vh] sm:min-h-[60vh] max-h-[65vh] sm:max-h-[70vh] border-0 rounded bg-white"
            />
          ) : (
            <iframe
              src={urlSrc}
              title={`Certificado: ${title}`}
              className="w-full min-h-[50vh] sm:min-h-[60vh] max-h-[65vh] sm:max-h-[70vh] border-0 rounded bg-white"
              sandbox="allow-scripts allow-same-origin"
            />
          )}
        </div>
      </div>
    </div>
  )
}
