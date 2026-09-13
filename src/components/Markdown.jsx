import { Fragment } from 'react'
import { Link } from 'react-router-dom'

/*
 * Renderizador do subconjunto de Markdown documentado em src/content/blog/README.md.
 * Gera elementos React (nunca HTML cru), então conteúdo de post não injeta script.
 */

const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\)|\*[^*\s][^*]*\*|_[^_\s][^_]*_)/g
const INICIO_DE_BLOCO = /^(```|#{1,3}\s|>|\s*[-*]\s+|\s*\d+[.)]\s+|(-{3,}|\*{3,})\s*$)/

const classeLink = 'text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:text-paper'

function inline(texto, chave = 'i') {
  return texto
    .split(INLINE)
    .filter((parte) => parte !== '')
    .map((parte, i) => {
      const k = `${chave}-${i}`
      if (parte.length > 4 && parte.startsWith('**') && parte.endsWith('**')) {
        return (
          <strong key={k} className="font-semibold text-paper">
            {inline(parte.slice(2, -2), k)}
          </strong>
        )
      }
      if (parte.length > 2 && parte.startsWith('`') && parte.endsWith('`')) {
        return (
          <code key={k} className="rounded-md border border-line bg-ink-3 px-1.5 py-0.5 font-mono text-[0.85em] text-signal">
            {parte.slice(1, -1)}
          </code>
        )
      }
      const link = parte.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
      if (link) {
        const [, rotulo, url] = link
        if (url.startsWith('/')) {
          return (
            <Link key={k} to={url} className={classeLink}>
              {rotulo}
            </Link>
          )
        }
        if (/^https?:\/\//.test(url)) {
          return (
            <a key={k} href={url} target="_blank" rel="noopener noreferrer" className={classeLink}>
              {rotulo}
            </a>
          )
        }
        return <Fragment key={k}>{rotulo}</Fragment>
      }
      if (parte.length > 2 && /^([*_]).*\1$/.test(parte)) {
        return <em key={k}>{parte.slice(1, -1)}</em>
      }
      return <Fragment key={k}>{parte}</Fragment>
    })
}

function lerBlocos(fonte) {
  const linhas = fonte.replace(/\r\n/g, '\n').split('\n')
  const blocos = []
  let i = 0

  const coletar = (teste, limpar) => {
    const itens = []
    while (i < linhas.length && teste.test(linhas[i])) {
      itens.push(linhas[i].replace(limpar, ''))
      i++
    }
    return itens
  }

  while (i < linhas.length) {
    const linha = linhas[i]
    if (!linha.trim()) {
      i++
      continue
    }

    const cerca = linha.match(/^```\s*([\w+-]*)\s*$/)
    if (cerca) {
      const codigo = []
      i++
      while (i < linhas.length && !/^```\s*$/.test(linhas[i])) {
        codigo.push(linhas[i])
        i++
      }
      i++
      blocos.push({ tipo: 'codigo', lang: cerca[1], texto: codigo.join('\n') })
      continue
    }

    const titulo = linha.match(/^(#{1,3})\s+(.*)$/)
    if (titulo) {
      blocos.push({ tipo: titulo[1].length === 3 ? 'h3' : 'h2', texto: titulo[2] })
      i++
      continue
    }
    if (/^(-{3,}|\*{3,})\s*$/.test(linha)) {
      blocos.push({ tipo: 'hr' })
      i++
      continue
    }
    if (/^>\s?/.test(linha)) {
      blocos.push({ tipo: 'citacao', texto: coletar(/^>\s?/, /^>\s?/).join(' ') })
      continue
    }
    if (/^\s*[-*]\s+/.test(linha)) {
      blocos.push({ tipo: 'ul', itens: coletar(/^\s*[-*]\s+/, /^\s*[-*]\s+/) })
      continue
    }
    if (/^\s*\d+[.)]\s+/.test(linha)) {
      blocos.push({ tipo: 'ol', itens: coletar(/^\s*\d+[.)]\s+/, /^\s*\d+[.)]\s+/) })
      continue
    }

    const paragrafo = [linha.trim()]
    i++
    while (i < linhas.length && linhas[i].trim() && !INICIO_DE_BLOCO.test(linhas[i])) {
      paragrafo.push(linhas[i].trim())
      i++
    }
    blocos.push({ tipo: 'p', texto: paragrafo.join(' ') })
  }
  return blocos
}

export function Markdown({ fonte }) {
  return (
    <div className="space-y-6 text-lg leading-relaxed text-paper/85">
      {lerBlocos(fonte).map((bloco, i) => {
        const k = `b${i}`
        switch (bloco.tipo) {
          case 'h2':
            return (
              <h2 key={k} className="pt-8 text-3xl font-bold leading-tight tracking-tight text-paper md:text-4xl">
                {inline(bloco.texto, k)}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={k} className="pt-4 text-2xl font-bold leading-snug tracking-tight text-paper">
                {inline(bloco.texto, k)}
              </h3>
            )
          case 'ul':
            return (
              <ul key={k} className="space-y-3">
                {bloco.itens.map((item, j) => (
                  <li key={j} className="flex gap-3">
                    <span aria-hidden className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" />
                    <span>{inline(item, `${k}-${j}`)}</span>
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={k} className="list-decimal space-y-3 pl-6 marker:font-mono marker:text-signal">
                {bloco.itens.map((item, j) => (
                  <li key={j} className="pl-2">
                    {inline(item, `${k}-${j}`)}
                  </li>
                ))}
              </ol>
            )
          case 'citacao':
            return (
              <blockquote key={k} className="border-l-2 border-signal py-1 pl-6 font-display text-2xl font-semibold leading-snug text-paper">
                {inline(bloco.texto, k)}
              </blockquote>
            )
          case 'codigo':
            return (
              <div key={k} className="overflow-hidden rounded-2xl border border-line bg-ink-2">
                {bloco.lang && (
                  <p className="kicker border-b border-line px-5 py-2.5 text-faint">{bloco.lang}</p>
                )}
                <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-paper/90">
                  <code>{bloco.texto}</code>
                </pre>
              </div>
            )
          case 'hr':
            return <hr key={k} className="border-line" />
          default:
            return <p key={k}>{inline(bloco.texto, k)}</p>
        }
      })}
    </div>
  )
}
