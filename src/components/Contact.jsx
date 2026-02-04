import { Mail, Linkedin, Github, Globe } from 'lucide-react'
import { contatos, contatoFormulario } from '../data'

const ICONES = {
  Mail,
  Linkedin,
  Github,
  Globe,
}

function ContactLink({ item }) {
  const Icon = ICONES[item.icone] ?? Mail
  const isEmail = item.tipo === 'email'
  const isLinkedIn = item.tipo === 'linkedin'
  const isGitHub = item.tipo === 'github'

  const colorClass = isEmail
    ? 'hover:text-emerald-400 group-hover:border-emerald-500/50'
    : isLinkedIn
      ? 'hover:text-blue-400 group-hover:border-blue-500/50'
      : isGitHub
        ? 'hover:text-purple-400 group-hover:border-purple-500/50'
        : 'hover:text-emerald-400 group-hover:border-emerald-500/50'

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col items-center gap-2 text-slate-400 transition-colors touch-manipulation min-w-[56px] min-h-[56px] justify-center ${colorClass}`}
    >
      <div className="p-3 md:p-4 bg-slate-800 rounded-full group-hover:bg-slate-700 border border-slate-700 transition-all min-w-[48px] min-h-[48px] flex items-center justify-center">
        <Icon size={20} className="md:w-6 md:h-6 shrink-0" />
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-wider">{item.label}</span>
    </a>
  )
}

export function Contact() {
  const { titulo, subtitulo } = contatoFormulario

  return (
    <section id="contato" className="py-16 md:py-20 bg-gradient-to-t from-slate-900 via-slate-900 to-slate-800/20">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">{titulo}</h2>
        <p className="text-slate-400 mb-8 text-sm md:text-base">
          {subtitulo}
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {contatos.map((item) => (
            <ContactLink key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
