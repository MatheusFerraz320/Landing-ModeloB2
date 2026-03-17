export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-sm">
          &copy; {year} Vazão Engenharia. Todos os direitos reservados.
        </p>
        <p className="text-sm">
          Desenvolvido por{" "}
          <a href="#" className="hover:text-white transition-colors font-semibold">
            b2 marketing industrial
          </a>
        </p>
      </div>
    </footer>
  );
}