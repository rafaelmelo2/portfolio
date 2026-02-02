import { Mail, Linkedin, Github, Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contato" className="py-16 md:py-20 bg-gradient-to-t from-slate-900 via-slate-900 to-slate-800/20">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-6">Pronto para o Próximo Nível</h2>
        <p className="text-slate-400 mb-8 text-sm md:text-base">
          Combinando energia, técnica e visão de negócio. <br />
          Estou disponível para entrevistas e desafios técnicos.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a href="#" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
            <div className="p-3 md:p-4 bg-slate-800 rounded-full group-hover:bg-slate-700 border border-slate-700 group-hover:border-emerald-500/50 transition-all">
              <Mail size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-wider">E-mail</span>
          </a>
          <a href="#" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
            <div className="p-3 md:p-4 bg-slate-800 rounded-full group-hover:bg-slate-700 border border-slate-700 group-hover:border-blue-500/50 transition-all">
              <Linkedin size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-wider">LinkedIn</span>
          </a>
          <a href="#" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors">
            <div className="p-3 md:p-4 bg-slate-800 rounded-full group-hover:bg-slate-700 border border-slate-700 group-hover:border-purple-500/50 transition-all">
              <Github size={20} className="md:w-6 md:h-6" />
            </div>
            <span className="text-[10px] md:text-xs uppercase tracking-wider">GitHub</span>
          </a>
        </div>

        <form className="text-left space-y-4 bg-slate-800/30 p-6 md:p-8 rounded-2xl border border-slate-700 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Nome</label>
              <input type="text" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Recrutador / Empresa" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
              <input type="email" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="contato@empresa.com" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Mensagem</label>
            <textarea rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-3 text-slate-100 focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Gostaríamos de agendar uma entrevista..."></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all flex justify-center items-center gap-2 shadow-lg shadow-emerald-500/20">
            Enviar Mensagem <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}
