import { Brain, Code, Cpu, ExternalLink, Play, Terminal } from 'lucide-react'
import { useState } from 'react'
import { projetos } from '../data'
import { DemoPreview } from './DemoPreview'

const ICONE_POR_CATEGORIA = {
  destaque: Brain,
  ia: Brain,
  fullstack: Terminal,
  web: Cpu,
  default: Code,
}

function getImagemUrl(imagem) {
  if (!imagem) return null
  return `/imgs/projects/${imagem}`
}

function isUrlExterna(url) {
  if (!url || typeof url !== 'string') return false
  return url.startsWith('http://') || url.startsWith('https://')
}

export function ProjectCard({ projeto, onOpenDemo }) {
  const Icon = ICONE_POR_CATEGORIA[projeto.categoria] ?? ICONE_POR_CATEGORIA.default
  const featured = projeto.valorAprendizado >= 5
  const imagemUrl = getImagemUrl(projeto.imagem)
  const temDemoLocal = Boolean(projeto.demoLocal)

  const link = projeto.github || (projeto.demo && !temDemoLocal)
  const Wrapper = link && !temDemoLocal ? 'a' : 'div'
  const wrapperProps =
    link && !temDemoLocal
      ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
      : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`group relative bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col ${featured ? 'md:col-span-2 bg-slate-800/80' : ''}`}
    >
      {imagemUrl && (
        <div className="relative h-32 md:h-40 overflow-hidden bg-slate-800">
          <img src={imagemUrl} alt={projeto.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute inset-0 bg-black/50 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-out" aria-hidden />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between gap-2 mb-4">
          <div className="inline-flex p-3 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit">
            <Icon size={24} />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {temDemoLocal && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onOpenDemo?.(projeto.demoLocal, projeto.titulo)
                }}
                className="inline-flex items-center gap-1.5 min-h-[44px] px-3 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 text-sm font-medium hover:bg-emerald-500/30 active:bg-emerald-500/30 transition-colors touch-manipulation"
              >
                <Play size={14} />
                Ver demo
              </button>
            )}
            {(projeto.github || projeto.demo) && !temDemoLocal && (
              <ExternalLink className="text-emerald-400 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-100 mb-2">{projeto.titulo}</h3>
        <p className="text-slate-400 mb-4 text-sm leading-relaxed flex-grow">{projeto.descricao}</p>
        {projeto.observacoes && (
          <p className="text-slate-500 text-xs italic mb-4">{projeto.observacoes}</p>
        )}
        <div className="mt-auto">
          <div className="w-full h-px bg-slate-700/50 mb-4" />
          <div className="flex flex-wrap gap-2">
            {projeto.tecnologias.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-700 text-slate-300 border border-slate-600 group-hover:border-emerald-500/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export function Projects() {
  const [demoPreview, setDemoPreview] = useState(null)

  return (
    <section id="projetos" className="py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-12">Projetos Técnicos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((projeto) => (
            <ProjectCard
              key={projeto.id}
              projeto={projeto}
              onOpenDemo={(url, title) => {
              if (isUrlExterna(url)) {
                window.open(url, '_blank', 'noopener,noreferrer')
                return
              }
              setDemoPreview({ url, title })
            }}
            />
          ))}
        </div>
      </div>
      {demoPreview && (
        <DemoPreview
          url={demoPreview.url}
          title={demoPreview.title}
          onClose={() => setDemoPreview(null)}
        />
      )}
    </section>
  )
}
