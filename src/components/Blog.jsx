import { ArrowLeft, ArrowRight, ArrowUpRight, Search, X } from 'lucide-react'
import { useEffect, useMemo } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { contatos } from '../data'
import { formatarData, posts, rotuloTag, tagsBlog } from '../data/blog'
import { Markdown } from './Markdown'
import { Reveal } from './ui'

const DESCRICAO_BLOG =
  'Toda semana, os problemas que resolvi com IA, dados e automação, e o que aprendi no caminho.'

function useMetaPagina(titulo, descricao) {
  useEffect(() => {
    const tituloAnterior = document.title
    const meta = document.querySelector('meta[name="description"]')
    const descricaoAnterior = meta?.getAttribute('content')
    document.title = titulo
    if (meta && descricao) meta.setAttribute('content', descricao)
    return () => {
      document.title = tituloAnterior
      if (meta && descricaoAnterior) meta.setAttribute('content', descricaoAnterior)
    }
  }, [titulo, descricao])
}

const normalizar = (texto) =>
  texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

function Hashtags({ tags, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label="Tags">
      {tags.map((tag) => (
        <li key={tag} className="chip" title={rotuloTag(tag)}>
          #{tag}
        </li>
      ))}
    </ul>
  )
}

export function Blog() {
  useMetaPagina('Blog | Rafael Melo', DESCRICAO_BLOG)
  const [params, setParams] = useSearchParams()
  const tag = params.get('tag') ?? ''
  const busca = params.get('q') ?? ''

  const atualizar = (chave, valor) => {
    const novos = new URLSearchParams(params)
    if (valor) novos.set(chave, valor)
    else novos.delete(chave)
    setParams(novos, { replace: true })
  }

  const filtrados = useMemo(() => {
    const termo = normalizar(busca.trim())
    return posts.filter((p) => {
      if (tag && !p.tags.includes(tag)) return false
      if (!termo) return true
      return normalizar([p.titulo, p.resumo, p.tags.join(' '), p.projetos.join(' '), p.corpo].join(' ')).includes(termo)
    })
  }, [tag, busca])

  return (
    <section className="relative overflow-hidden pb-24 pt-32 md:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-signal/10 blur-[130px]"
      />
      <div className="shell relative">
        <div className="grid items-end gap-8 border-b border-line pb-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="kicker flex animate-rise items-center gap-3 text-signal">
              <span aria-hidden className="h-px w-10 bg-signal/60" />
              Blog
            </p>
            <h1
              className="mt-6 animate-rise text-[clamp(2.75rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.035em]"
              style={{ animationDelay: '100ms' }}
            >
              Diário de engenharia.
            </h1>
          </div>
          <div className="animate-rise md:col-span-5" style={{ animationDelay: '200ms' }}>
            <p className="text-lg leading-relaxed text-muted">{DESCRICAO_BLOG}</p>
            <p className="mt-3 text-sm leading-relaxed text-faint">
              Os posts semanais nascem dos meus commits, passam por um filtro que remove código e regras de negócio,
              e só entram no ar depois da minha revisão.
            </p>
          </div>
        </div>

        {posts.length > 0 && (
          <div className="mt-10 space-y-5">
            <label className="relative block max-w-xl">
              <span className="sr-only">Buscar posts</span>
              <Search size={18} aria-hidden className="absolute left-5 top-1/2 -translate-y-1/2 text-faint" />
              <input
                type="search"
                value={busca}
                onChange={(e) => atualizar('q', e.target.value)}
                placeholder="Buscar por assunto, tecnologia ou projeto"
                className="min-h-[52px] w-full rounded-full border border-line bg-ink-2 pl-12 pr-5 text-paper placeholder:text-faint focus:border-signal focus:outline-none"
              />
            </label>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tag">
              <button
                type="button"
                onClick={() => atualizar('tag', '')}
                aria-pressed={!tag}
                className={`min-h-[40px] rounded-full border px-4 font-mono text-xs transition-colors ${
                  !tag ? 'border-signal bg-signal text-ink' : 'border-line text-muted hover:border-signal hover:text-signal'
                }`}
              >
                todas
              </button>
              {tagsBlog.map((t) => (
                <button
                  key={t.slug}
                  type="button"
                  title={t.descricao}
                  onClick={() => atualizar('tag', tag === t.slug ? '' : t.slug)}
                  aria-pressed={tag === t.slug}
                  className={`min-h-[40px] rounded-full border px-4 font-mono text-xs transition-colors ${
                    tag === t.slug
                      ? 'border-signal bg-signal text-ink'
                      : 'border-line text-muted hover:border-signal hover:text-signal'
                  }`}
                >
                  #{t.slug} <span className="opacity-60">{t.total}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {posts.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-display text-3xl font-bold">O primeiro post chega no domingo.</p>
            <p className="mt-3 text-muted">Enquanto isso, veja os projetos que já estão no ar.</p>
            <Link
              to="/#projetos"
              className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-signal px-7 font-display font-bold text-ink"
            >
              Ver projetos <ArrowRight size={18} />
            </Link>
          </div>
        ) : filtrados.length === 0 ? (
          <div className="py-20">
            <p className="font-display text-2xl font-bold">Nenhum post com esses filtros.</p>
            <button
              type="button"
              onClick={() => setParams(new URLSearchParams(), { replace: true })}
              className="kicker mt-4 inline-flex min-h-[44px] items-center gap-2 text-signal hover:text-paper"
            >
              <X size={14} /> Limpar filtros
            </button>
          </div>
        ) : (
          <ol className="mt-12 border-t border-line">
            {filtrados.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={Math.min(i, 4) * 60}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-3">
                    <p className="kicker text-muted">
                      <time dateTime={post.data}>{formatarData(post.data)}</time>
                    </p>
                    <p className="kicker mt-2 text-faint">{post.leitura} min de leitura</p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-signal md:text-4xl">
                      {post.titulo}
                    </h2>
                    {post.resumo && <p className="mt-3 max-w-3xl text-lg leading-relaxed text-muted">{post.resumo}</p>}
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                      <Hashtags tags={post.tags} />
                      <span className="kicker inline-flex items-center gap-2 text-signal">
                        Ler post
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ol>
        )}
      </div>
    </section>
  )
}

export function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  useMetaPagina(post ? `${post.titulo} | Blog de Rafael Melo` : 'Post não encontrado | Rafael Melo', post?.resumo)

  if (!post) {
    return (
      <section className="flex min-h-[70vh] items-center pb-24 pt-36">
        <div className="shell">
          <p className="kicker text-signal">Blog · 404</p>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight">Post não encontrado.</h1>
          <Link
            to="/blog"
            className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-signal px-7 font-display font-bold text-ink"
          >
            <ArrowLeft size={18} /> Ver todos os posts
          </Link>
        </div>
      </section>
    )
  }

  const indice = posts.indexOf(post)
  const anterior = posts[indice + 1]
  const proximo = posts[indice - 1]
  const email = contatos.find((c) => c.tipo === 'email')?.url

  return (
    <article className="relative pb-24 pt-32 md:pt-40">
      <div className="shell">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="kicker inline-flex min-h-[44px] items-center gap-2 text-muted transition-colors hover:text-signal"
          >
            <ArrowLeft size={14} /> Blog
          </Link>

          <header className="animate-rise">
            <p className="kicker mt-8 flex flex-wrap gap-x-3 gap-y-1 text-faint">
              <time dateTime={post.data}>{formatarData(post.data)}</time>
              <span aria-hidden>·</span>
              <span>{post.leitura} min de leitura</span>
              {post.origem === 'linkedin' && (
                <>
                  <span aria-hidden>·</span>
                  <span>Publicado também no LinkedIn</span>
                </>
              )}
            </p>
            <h1 className="mt-5 text-[clamp(2.4rem,5.5vw,4.25rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              {post.titulo}
            </h1>
            {post.resumo && <p className="mt-6 text-xl leading-relaxed text-muted">{post.resumo}</p>}
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Tags">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <Link
                    to={`/blog?tag=${tag}`}
                    title={rotuloTag(tag)}
                    className="chip min-h-[36px] transition-colors hover:border-signal hover:text-signal"
                  >
                    #{tag}
                  </Link>
                </li>
              ))}
            </ul>
          </header>

          <div className="mt-12 border-t border-line pt-10">
            <Markdown fonte={post.corpo} />
          </div>

          {(anterior || proximo) && (
            <nav aria-label="Outros posts" className="mt-16 grid gap-4 border-t border-line pt-10 sm:grid-cols-2">
              {anterior ? (
                <Link to={`/blog/${anterior.slug}`} className="group rounded-2xl border border-line p-6 hover:border-signal">
                  <span className="kicker text-faint">← Anterior</span>
                  <span className="mt-2 block font-display text-lg font-bold group-hover:text-signal">{anterior.titulo}</span>
                </Link>
              ) : (
                <span />
              )}
              {proximo && (
                <Link
                  to={`/blog/${proximo.slug}`}
                  className="group rounded-2xl border border-line p-6 text-right hover:border-signal"
                >
                  <span className="kicker text-faint">Próximo →</span>
                  <span className="mt-2 block font-display text-lg font-bold group-hover:text-signal">{proximo.titulo}</span>
                </Link>
              )}
            </nav>
          )}

          <aside className="mt-16 rounded-[1.75rem] bg-signal p-8 text-ink md:p-10">
            <p className="font-display text-3xl font-extrabold leading-tight tracking-tight">Quer conversar sobre isso?</p>
            <p className="mt-3 text-ink/75">Me conta o seu caso ou me chama para trocar ideia sobre o tema.</p>
            <a
              href={email}
              className="group mt-6 inline-flex min-h-[52px] items-center gap-3 rounded-full bg-ink px-7 font-display font-bold text-paper"
            >
              Falar comigo
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
            </a>
          </aside>
        </div>
      </div>
    </article>
  )
}
