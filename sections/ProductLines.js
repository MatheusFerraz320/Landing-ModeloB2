export default function ProductLines() {
  return (
    <section id="produtos" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Linha de Produtos
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Soluções completas para sua operação industrial, do projeto à entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Componentes CNC */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 group-hover:bg-orange-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:text-orange-500 transition-colors duration-300 mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-bold text-slate-900">Componentes CNC</h3>
              <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                Alta Precisão
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">Peças usinadas com alta precisão dimensional para aplicações críticas.</p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              Solicitar cotação
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Tubulações Industriais */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 group-hover:bg-orange-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:text-orange-500 transition-colors duration-300 mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-bold text-slate-900">Tubulações Industriais</h3>
              <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                Linha Completa
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">Linhas de tubulação para transporte de fluidos e gases industriais.</p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              Solicitar cotação
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Painéis Elétricos */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 group-hover:bg-orange-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:text-orange-500 transition-colors duration-300 mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-bold text-slate-900">Painéis Elétricos</h3>
              <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                Normas ABNT
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">Painéis de comando e controle montados conforme normas ABNT/IEC.</p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              Solicitar cotação
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Reservatórios */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 group-hover:bg-orange-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:text-orange-500 transition-colors duration-300 mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-bold text-slate-900">Reservatórios</h3>
              <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                Sob Medida
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">Tanques e reservatórios fabricados em aço inox e carbono.</p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              Solicitar cotação
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Estruturas Metálicas */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 group-hover:bg-orange-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:text-orange-500 transition-colors duration-300 mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-bold text-slate-900">Estruturas Metálicas</h3>
              <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                Engenharia
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">Estruturas soldadas para suporte de equipamentos e edificações industriais.</p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              Solicitar cotação
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Ferramentas Especiais */}
          <div className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-50 group-hover:bg-orange-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:text-orange-500 transition-colors duration-300 mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-xl font-bold text-slate-900">Ferramentas Especiais</h3>
              <span className="text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full whitespace-nowrap">
                Customizado
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">Ferramental customizado para processos produtivos de alta exigência.</p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              Solicitar cotação
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}