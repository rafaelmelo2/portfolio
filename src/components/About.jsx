import { Terminal } from 'lucide-react'

export function About() {
  return (
    <section id="sobre" className="py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-2 md:-inset-4 bg-slate-800 rounded-xl rotate-3 opacity-50"></div>
            <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 h-64 md:h-[400px]">
              <div className="flex flex-col items-center justify-center h-full text-slate-500 bg-slate-900 px-4">
                <Terminal size={48} className="mb-4 opacity-50" />
                <p className="text-sm text-center">[Foto sua no trabalho/faculdade]</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              Sobre Mim <div className="h-px bg-emerald-500 flex-grow max-w-[50px] md:max-w-[100px]"></div>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
              Combinando o rigor acadêmico da Ciência da Computação com a velocidade do ambiente industrial automotivo.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
              Atualmente, atuo como estagiário na HPE Automotores, onde migrei da teoria para a prática, implementando soluções de Visão Computacional que impactam diretamente a linha de produção. Minha filosofia é que a IA deve ser uma ferramenta de eficiência, não apenas um conceito abstrato.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-emerald-500">
                <h4 className="font-bold text-slate-200 text-sm md:text-base">Foco Atual</h4>
                <p className="text-xs md:text-sm text-slate-400">Computer Vision & Edge AI</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-slate-200 text-sm md:text-base">Objetivo</h4>
                <p className="text-xs md:text-sm text-slate-400">Efetivação como Jr. Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
