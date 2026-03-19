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
          <a href="https://b2marketingindustrial.com.br/" className="hover:text-white transition-colors font-semibold">
            B2 Marketing Industrial
          </a>
        </p>
      </div>
    </footer>
  );
}