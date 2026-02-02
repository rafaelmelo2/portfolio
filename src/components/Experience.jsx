import { Brain } from 'lucide-react'

export function ExperienceCard({ role, company, period, color, description }) {
  return (
    <div className="relative pl-8 md:pl-12 group">
      <div className={`absolute left-0 md:-left-[9px] top-0 h-3 w-3 md:h-4 md:w-4 rounded-full ${color} ring-4 ring-slate-900 group-hover:scale-125 transition-transform`}></div>
      <div className="bg-slate-800/40 p-5 md:p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-100">{role}</h3>
            <p className="text-emerald-400 font-medium text-sm md:text-base">{company}</p>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-700 whitespace-nowrap">{period}</span>
        </div>
        <div className="text-slate-400 text-sm md:text-base space-y-2">
          {description}
        </div>
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
          <ExperienceCard
            role="Estagiário de IA"
            company="HPE Automotores"
            period="2023 - Atual"
            color="bg-emerald-500"
            description={
              <ul className="list-disc list-inside space-y-2">
                <li>Otimização de QA utilizando <strong>YOLOv8</strong> para detecção de falhas.</li>
                <li>Automação de scripts ETL reduzindo em 40% o tempo de preparo de dados.</li>
                <li>Participação ativa em Daily Scrums e Code Reviews.</li>
              </ul>
            }
          />
          <ExperienceCard
            role="Dev Full Stack (Freelance)"
            company="Autônomo"
            period="2022 - 2023"
            color="bg-blue-500"
            description={
              <p>Criação de landing pages e sistemas simples com React e Firebase, focando em responsividade e UX.</p>
            }
          />
          <ExperienceCard
            role="Monitor Acadêmico"
            company="Universidade"
            period="2021 - 2022"
            color="bg-slate-500"
            description={
              <p>Monitoria de Algoritmos e Estrutura de Dados. Auxílio a alunos com lógica C++.</p>
            }
          />
        </div>
      </div>
    </section>
  )
}
