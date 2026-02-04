import { Construction } from 'lucide-react'

export function Blog() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-24 px-4 md:px-6">
      <div className="text-center max-w-md">
        <div className="inline-flex p-6 rounded-2xl bg-slate-800/50 border border-slate-700 mb-8">
          <Construction className="w-16 h-16 md:w-24 md:h-24 text-emerald-400/80" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">Blog em Construção</h1>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
          Em breve teremos conteúdos sobre desenvolvimento, IA e tecnologia por aqui. Volte depois!
        </p>
      </div>
    </section>
  )
}
