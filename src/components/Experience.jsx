import { Brain } from 'lucide-react'
import { experiencias } from '../data'

export function ExperienceCard({ experiencia }) {
  const { cargo, empresa, periodo, cor, destaques } = experiencia

  return (
    <div className="relative pl-8 md:pl-12 group">
      <div
        className={`absolute left-0 md:-left-[9px] top-0 h-3 w-3 md:h-4 md:w-4 rounded-full ${cor} ring-4 ring-slate-900 group-hover:scale-125 transition-transform`}
      />
      <div className="bg-slate-800/40 p-5 md:p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-100">{cargo}</h3>
            <p className="text-emerald-400 font-medium text-sm md:text-base">{empresa}</p>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-700 whitespace-nowrap">
            {periodo}
          </span>
        </div>
        <ul className="text-slate-400 text-sm md:text-base space-y-2 list-disc list-inside">
          {destaques.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <section id="experiencia" className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <Brain className="text-emerald-400" /> Trajetória
        </h2>

        <div className="relative border-l border-slate-700 ml-1.5 md:ml-6 space-y-12">
          {experiencias.map((exp) => (
            <ExperienceCard key={exp.id} experiencia={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
