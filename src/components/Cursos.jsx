import { useState } from 'react'
import { GraduationCap, FileText } from 'lucide-react'
import { cursos } from '../data'
import { CertificatePreview } from './CertificatePreview'

const EXTENSOES_IMAGEM = /\.(jpe?g|png|gif|webp|svg)(\?|$)/i
const EXTENSAO_PDF = /\.pdf(\?|$)/i

function isImagem(url) {
  if (!url || typeof url !== 'string') return false
  return EXTENSOES_IMAGEM.test(url)
}

function isPdf(url) {
  if (!url || typeof url !== 'string') return false
  return EXTENSAO_PDF.test(url)
}

function CursoCard({ curso, onPreviewCertificado }) {
  const { titulo, instituicao, periodo, cargaHoraria, link, linkValidacao, observacoes } = curso
  const openPreview = () => onPreviewCertificado?.(link, titulo, linkValidacao)
  const linkNorm = link?.trim().startsWith('/') ? link.trim() : `/${link?.trim() || ''}`
  const linkUrl = linkNorm ? linkNorm.split('/').map(encodeURIComponent).join('/') : ''

  return (
    <div className="bg-slate-800/40 p-5 md:p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Miniatura clicável: preview à mostra, clique abre o modal */}
        {link && (
          <button
            type="button"
            onClick={openPreview}
            className="shrink-0 w-20 h-20 sm:w-20 sm:h-20 rounded-lg border border-slate-600 overflow-hidden bg-slate-800 hover:border-emerald-500/50 hover:ring-2 hover:ring-emerald-500/20 active:ring-emerald-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50 touch-manipulation"
            title="Clique para ver o certificado"
          >
            {isImagem(linkNorm) ? (
              <img
                src={linkUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : isPdf(linkNorm) ? (
              <span className="w-full h-full block relative bg-slate-800 overflow-hidden">
                <iframe
                  src={`${linkUrl}#toolbar=0`}
                  title="Preview do certificado"
                  className="absolute left-0 top-0 pointer-events-none border-0 bg-white"
                  style={{
                    width: '400px',
                    height: '560px',
                    transform: 'scale(0.2)',
                    transformOrigin: '0 0',
                  }}
                />
              </span>
            ) : (
              <span className="w-full h-full flex items-center justify-center text-slate-500">
                <FileText size={32} />
              </span>
            )}
          </button>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-slate-100 mb-1">{titulo}</h3>
          <p className="text-emerald-400 text-sm mb-2">{instituicao}</p>
          {(periodo || cargaHoraria) && (
            <p className="text-slate-500 text-xs font-mono">
              {[periodo, cargaHoraria].filter(Boolean).join(' · ')}
            </p>
          )}
          {observacoes && (
            <p className="text-slate-400 text-sm mt-2">{observacoes}</p>
          )}
          <div className="flex flex-wrap gap-2 mt-3">
            {link && (
              <>
                <button
                  type="button"
                  onClick={openPreview}
                  className="min-h-[44px] px-3 py-2 text-sm text-emerald-400 hover:text-emerald-300 active:text-emerald-300 transition-colors touch-manipulation rounded-lg -ml-1"
                >
                  Ver certificado →
                </button>
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center px-3 py-2 text-xs text-slate-500 hover:text-slate-300 transition-colors touch-manipulation rounded-lg"
                  title="Abrir em nova aba"
                >
                  Nova aba
                </a>
              </>
            )}
            {linkValidacao && (
              <a
                href={linkValidacao}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center text-xs text-slate-400 hover:text-slate-200 transition-colors px-3 py-2 rounded-lg border border-slate-600 hover:border-slate-500 touch-manipulation"
                title="Validar certificado na plataforma"
              >
                Validar certificado
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Cursos() {
  const [preview, setPreview] = useState(null)

  if (!cursos?.length) return null

  return (
    <section id="cursos" className="py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <GraduationCap className="text-emerald-400" /> Cursos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {cursos.map((curso) => (
            <CursoCard
              key={curso.id}
              curso={curso}
              onPreviewCertificado={(url, title, linkValidacao) => setPreview({ url, title, linkValidacao })}
            />
          ))}
        </div>
      </div>
      {preview && (
        <CertificatePreview
          url={preview.url}
          title={preview.title}
          linkValidacao={preview.linkValidacao}
          onClose={() => setPreview(null)}
        />
      )}
    </section>
  )
}
