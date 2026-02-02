import { Brain, Terminal, Cpu, ExternalLink } from 'lucide-react'

export function ProjectCard({ title, description, tags, icon: Icon, featured }) {
  return (
    <div className={`group relative bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 ${featured ? 'md:col-span-2 bg-slate-800/80' : ''} flex flex-col`}>
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        <ExternalLink className="text-emerald-400 w-5 h-5" />
      </div>
      <div className="mb-4 inline-flex p-3 rounded-lg bg-emerald-500/10 text-emerald-400 w-fit">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">{description}</p>

      <div className="mt-auto">
        <div className="w-full h-px bg-slate-700/50 mb-4"></div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-700 text-slate-300 border border-slate-600 group-hover:border-emerald-500/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projetos" className="py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-12">Projetos Técnicos</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            featured={true}
            title="S.V.A (Visão Automotiva)"
            description="Solução de visão computacional para identificar microfissuras em componentes. Utiliza CNN treinada com dataset proprietário aumentado. Implementado em Raspberry Pi 4."
            tags={['Python', 'TensorFlow', 'OpenCV', 'IoT', 'Docker']}
            icon={Brain}
          />
          <ProjectCard
            title="Chatbot Técnico (RAG)"
            description="Assistente que lê manuais PDF e tira dúvidas de operadores. Orchestrado via LangChain."
            tags={['OpenAI', 'LangChain', 'ChromaDB', 'Streamlit']}
            icon={Terminal}
          />
          <ProjectCard
            title="IoT Dashboard"
            description="Painel para visualização de sensores (temp, vibração) em tempo real via WebSockets."
            tags={['React', 'Node.js', 'Socket.io', 'InfluxDB']}
            icon={Cpu}
          />
        </div>
      </div>
    </section>
  )
}
