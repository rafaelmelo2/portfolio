export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800 bg-slate-900 text-center">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} [Seu Nome]. Todos os direitos reservados.</p>
        <p className="flex items-center gap-1">
          Feito com <span className="text-red-500">❤</span> e código.
        </p>
      </div>
    </footer>
  )
}
