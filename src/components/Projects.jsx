import { ArrowUpRight, Brain, Code, Database, Github, Globe, Monitor, Play, Server } from 'lucide-react'
import { useState } from 'react'
import { contatos, projetos } from '../data'
import { DemoPreview } from './DemoPreview'
import { Reveal, SectionHeading } from './ui'

const CATEGORIA_LABEL = {
  destaque: 'Destaque',
  ia: 'IA',
  dados: 'Dados',
  web: 'Web',
  fullstack: 'Full stack',
  desktop: 'Desktop',
  python: 'Python',
  extensao: 'Extensão',
  scripts: 'Scripts',
}

// Ícone da capa desenhada para projetos sem screenshot
const ICONE_CATEGORIA = {
  ia: Brain,
  dados: Database,
  web: Globe,
  fullstack: Server,
  desktop: Monitor,
}

function isUrlExterna(url) {
  if (!url || typeof url !== 'string') return false
  return url.startsWith('http://') || url.startsWith('https://')
}

function tagsUnicas(lista = []) {
  const vistas = new Set()
  return lista.filter((tag) => {
    const chave = tag.toLowerCase()
    if (vistas.has(chave)) return false
    vistas.add(chave)
    return true
  })
}

/**
 * Screenshot dentro de uma "janela" de navegador. Sem imagem, mostra uma capa com ícone da área e nome.
 * largo: no desktop vira um banner 2:1 (cards que ocupam duas colunas).
 */
function Janela({ projeto, largo = false, className = '' }) {
  const src = projeto.imagem ? encodeURI(`/imgs/projects/${projeto.imagem}`) : null
  const Icone = ICONE_CATEGORIA[projeto.categoria] ?? Code

  return (
    <div className={`flex flex-col overflow-hidden rounded-[1.1rem] border border-line bg-ink-3 ${className}`}>
      <div aria-hidden className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper/20" />
        <span className="ml-2 truncate font-mono text-[0.65rem] text-faint">~/projetos/{projeto.id}</span>
      </div>
      <div className={`relative aspect-[16/10] overflow-hidden ${largo ? 'lg:aspect-[2/1]' : ''}`}>
        {src ? (
          <img
            src={src}
            alt={`Captura de tela do projeto ${projeto.titulo}`}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
              projeto.ajuste === 'contain'
                ? 'bg-white object-contain p-3'
                : `object-cover ${
                    projeto.ajuste === 'esquerda' ? 'object-left' : largo ? 'object-center' : 'object-top'
                  }`
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-br from-ink-2 via-ink to-accent/25">
            <span aria-hidden className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-signal/10 blur-3xl" />
            <Icone
              aria-hidden
              size={56}
              strokeWidth={1.25}
              className="relative text-signal transition-transform duration-700 group-hover:scale-110"
            />
            <span className="relative px-6 text-center font-display text-xl font-bold tracking-tight text-paper/90">
              {projeto.titulo.split(' — ')[0]}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

function Acoes({ projeto, onOpenDemo, grande = false }) {
  const tamanho = grande ? 'min-h-[52px] px-6 text-base' : 'min-h-[44px] px-4 text-sm'
  const secundario = `inline-flex items-center gap-2 rounded-full border border-line font-display font-semibold text-paper transition-colors duration-300 hover:border-signal hover:text-signal ${tamanho}`

  if (!projeto.demoLocal && !projeto.demo && !projeto.github) {
    return <span className="kicker text-faint">Código privado</span>
  }

  return (
    <div className="flex flex-wrap gap-2">
      {projeto.demoLocal && (
        <button
          type="button"
          onClick={() => onOpenDemo(projeto.demoLocal, projeto.titulo)}
          className={`inline-flex items-center gap-2 rounded-full bg-signal font-display font-bold text-ink transition-transform duration-300 hover:-translate-y-0.5 ${tamanho}`}
        >
          <Play size={grande ? 16 : 14} className="fill-current" />
          {isUrlExterna(projeto.demoLocal) ? 'Ver ao vivo' : 'Abrir demo'}
        </button>
      )}
      {projeto.demo && (
        <a href={projeto.demo} target="_blank" rel="noopener noreferrer" className={secundario}>
          Ver site <ArrowUpRight size={16} />
        </a>
      )}
      {projeto.github && (
        <a href={projeto.github} target="_blank" rel="noopener noreferrer" className={secundario}>
          <Github size={16} /> Código
        </a>
      )}
    </div>
  )
}

function Tags({ projeto, limite = 6 }) {
  const tags = tagsUnicas(projeto.tecnologias)
  const extras = tags.length - limite

  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologias">
      {tags.slice(0, limite).map((tag) => (
        <li key={tag} className="chip">
          {tag}
        </li>
      ))}
      {extras > 0 && <li className="chip text-faint">+{extras}</li>}
    </ul>
  )
}

export function ProjectCard({ projeto, onOpenDemo, wide = false }) {
  return (
    <article className="group flex h-full flex-col gap-2 rounded-[1.5rem] border border-line bg-ink-2 p-2.5 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-signal/40">
      <Janela projeto={projeto} largo={wide} />
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p className="kicker text-signal">{CATEGORIA_LABEL[projeto.categoria] ?? projeto.categoria}</p>
        <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight md:text-2xl">{projeto.titulo}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{projeto.descricao}</p>
        {projeto.observacoes && (
          <p className="mt-3 border-l-2 border-accent/60 pl-3 text-xs leading-relaxed text-faint">
            {projeto.observacoes}
          </p>
        )}
        <div className="mt-5">
          <Tags projeto={projeto} />
        </div>
        <div className="mt-auto pt-6">
          <Acoes projeto={projeto} onOpenDemo={onOpenDemo} />
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const [demoPreview, setDemoPreview] = useState(null)
  // O primeiro projeto de projetos.json vira o destaque grande; "arquivo": true vai para a lista de antigos
  const [destaque, ...demais] = projetos.filter((p) => !p.arquivo)
  const antigos = projetos.filter((p) => p.arquivo)
  const github = contatos.find((c) => c.tipo === 'github')?.url

  const abrirDemo = (url, title) => {
    if (isUrlExterna(url)) {
      window.open(url, '_blank', 'noopener,noreferrer')
      return
    }
    setDemoPreview({ url, title })
  }

  return (
    <section id="projetos" className="relative border-t border-line bg-ink-2/40 py-24 md:py-36">
      <div className="shell">
        <SectionHeading index="02" kicker="Projetos" title="Trabalho real, no ar e no GitHub.">
          Sistemas corporativos, produtos com parceiros e projetos pessoais. Onde dá, você pode abrir e testar.
        </SectionHeading>

        {destaque && (
          <Reveal className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7 lg:[perspective:1800px]">
              <div className="rounded-[1.25rem] shadow-[0_50px_120px_-50px_rgb(var(--signal)/0.45)] transition-transform duration-700 ease-out lg:[transform:rotateY(-9deg)_rotateX(4deg)] lg:group-hover:[transform:rotateY(0deg)_rotateX(0deg)]">
                <Janela projeto={destaque} />
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="kicker text-signal">
                Em destaque · {CATEGORIA_LABEL[destaque.categoria] ?? destaque.categoria}
              </p>
              <h3 className="mt-5 text-4xl font-extrabold leading-none tracking-[-0.03em] md:text-5xl">
                {destaque.titulo}
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-muted">{destaque.descricao}</p>
              <div className="mt-6">
                <Tags projeto={destaque} limite={8} />
              </div>
              <div className="mt-8">
                <Acoes projeto={destaque} onOpenDemo={abrirDemo} grande />
              </div>
            </div>
          </Reveal>
        )}

        <div className="mt-20 grid gap-6 [grid-auto-flow:dense] md:grid-cols-2 lg:grid-cols-3">
          {demais.map((projeto, i) => {
            const wide = projeto.valorAprendizado >= 5
            return (
              <Reveal key={projeto.id} delay={(i % 3) * 90} className={wide ? 'lg:col-span-2' : ''}>
                <ProjectCard projeto={projeto} onOpenDemo={abrirDemo} wide={wide} />
              </Reveal>
            )
          })}

          {/* Último item do grid: fecha a malha e leva para o GitHub */}
          {github && (
            <Reveal delay={90} className="md:col-span-2 lg:col-span-1">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full min-h-[18rem] flex-col justify-between rounded-[1.5rem] border border-dashed border-line p-7 transition-colors duration-500 hover:border-signal hover:bg-signal hover:text-ink md:p-8"
              >
                <span className="flex items-center justify-between">
                  <Github size={28} />
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-current transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={22} />
                  </span>
                </span>
                <span>
                  <span className="kicker block text-muted transition-colors group-hover:text-ink/70">
                    Código aberto
                  </span>
                  <span className="mt-3 block font-display text-3xl font-extrabold leading-tight tracking-tight">
                    Mais repositórios no GitHub
                  </span>
                </span>
              </a>
            </Reveal>
          )}
        </div>

        {antigos.length > 0 && (
          <Reveal className="mt-16">
            <p className="kicker text-faint">Projetos mais antigos</p>
            <ul className="mt-5 grid border-t border-line md:grid-cols-2">
              {antigos.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center justify-between gap-4 border-b border-line py-3 md:odd:pr-8 md:even:border-l md:even:pl-8"
                >
                  <span className="min-w-0">
                    <span className="block font-display text-lg font-semibold">{p.titulo}</span>
                    <span className="block truncate text-sm text-muted">{p.descricao}</span>
                  </span>
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kicker inline-flex min-h-[44px] shrink-0 items-center gap-1 text-signal transition-colors hover:text-paper"
                    >
                      Código <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <span className="kicker shrink-0 text-faint">Privado</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>

      {demoPreview && (
        <DemoPreview url={demoPreview.url} title={demoPreview.title} onClose={() => setDemoPreview(null)} />
      )}
    </section>
  )
}
