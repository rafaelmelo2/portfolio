
export function About() {
  return (
    <section id="sobre" className="py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-2 md:-inset-4 bg-slate-800 rounded-xl rotate-3 opacity-50"></div>
            <div className="relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 h-64 md:h-[400px]">
              <div className="flex flex-col items-center justify-center h-full text-slate-500 bg-slate-900 px-4">
                <img src="/imgs/eu6.png" alt="Fael" className="w-full h-full object-cover" />
                <p className="text-sm text-center"></p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6 flex items-center gap-3">
              Sobre Mim 
              <div className="h-px bg-emerald-500 flex-grow max-w-[50px] md:max-w-[100px]"></div>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
              Sou estudante de Ciência da Computação com forte foco em transformar ideias em soluções digitais funcionais, escaláveis e orientadas a resultados.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
              Atualmente, atuo como estagiário na HPE Automotores, aplicando inteligência artificial, automação e análise de dados para otimizar processos industriais. Paralelamente, desenvolvo projetos próprios envolvendo SaaS, bots, sistemas web e infraestrutura em nuvem, sempre buscando unir tecnologia, eficiência e impacto real.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-emerald-500">
                <h4 className="font-bold text-slate-200 text-sm md:text-base">Foco Atual</h4>
                <p className="text-xs md:text-sm text-slate-400">
                  IA Aplicada, Automação & Full Stack
                </p>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-slate-200 text-sm md:text-base">Objetivo</h4>
                <p className="text-xs md:text-sm text-slate-400">
                  Atuar como Engenheiro de Software / IA
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
