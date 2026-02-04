import { ChevronRight, Download } from 'lucide-react'

export function Hero({ scrollTo }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden px-4 md:px-6">
      <div className="absolute top-20 right-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 md:w-72 md:h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
        <div className="order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] md:text-xs font-semibold mb-6 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponível para contratação
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-slate-100 mb-6 leading-tight">
          Onde código encontra <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
              Inteligência
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            Transformando dados brutos em inteligência acionável. <br />
            Estagiário na HPE Automotores e futuro Cientista da Computação, focado em dados, IA e automação.
            <br />Técnico e criativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button onClick={() => scrollTo('projetos')} className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 w-full sm:w-auto">
              Ver Projetos <ChevronRight size={18} />
            </button>
            <button className="border border-slate-700 hover:border-slate-500 text-slate-300 py-3 px-8 rounded-lg transition-all flex items-center justify-center gap-2 group w-full sm:w-auto">
              <Download size={18} className="group-hover:translate-y-1 transition-transform" /> Download CV
            </button>
          </div>
        </div>

        <div className="order-2 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] lg:w-[30rem] lg:h-[30rem] xl:w-[32rem] xl:h-[32rem]">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-[2rem] rotate-6 opacity-30 blur-lg"></div>
            <div className="absolute inset-0 bg-slate-800 rounded-[2rem] border border-slate-700 shadow-2xl overflow-hidden group">
              <img
                src="./imgs/eu5.jpg"
                alt="Foto de Perfil Profissional"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                <p className="text-white font-bold text-lg">Rafael Melo</p>
                <p className="text-emerald-400 text-sm">AI Intern</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
