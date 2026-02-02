import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-12 text-center">O que dizem sobre mim</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-700 relative">
            <Quote className="absolute top-6 left-6 text-emerald-500/20 w-8 h-8 md:w-12 md:h-12" />
            <p className="text-slate-300 text-base md:text-lg italic leading-relaxed text-center mb-6 pt-6 px-2 md:px-4">
              &quot;O [Seu Nome] demonstrou uma curva de aprendizado excepcional durante o estágio. Sua capacidade de pegar um conceito teórico de IA e aplicá-lo em um problema real da linha de montagem foi impressionante. Tem um futuro brilhante como engenheiro.&quot;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-700 flex items-center justify-center text-lg md:text-xl font-bold text-emerald-500">
                G
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm md:text-base">Gestor / Tech Lead</p>
                <p className="text-emerald-400 text-xs md:text-sm">HPE Automotores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
