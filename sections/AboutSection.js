export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-white">
      {/* Elementos de fundo premium */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full max-w-7xl mx-auto inset-0">
          <div className="absolute top-40 right-0 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute bottom-40 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge premium */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-orange-100 px-5 py-2 rounded-full mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-sm font-semibold text-orange-700 tracking-wider">
              CONHEÇA NOSSA HISTÓRIA
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Soluções que
            <span className="font-bold text-orange-500 block mt-2">geram confiança</span>
          </h2>

          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Há mais de 15 anos entregando excelência e construindo parcerias sólidas com as maiores indústrias do país.
          </p>
        </div>

        {/* Grid de cards premium */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1 - Experiência */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)] transition-all duration-500 border border-gray-100/50">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">15+ anos</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                de experiência no mercado industrial, atendendo os mais rigorosos padrões de qualidade.
              </p>
              
              <div className="flex items-center gap-2 text-orange-500 font-medium">
                <span>Excelência comprovada</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Card 2 - Certificações */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-500 border border-gray-100/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Certificações</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                ISO 9001, ISO 14001 e OHSAS 18001, garantindo qualidade em cada processo.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">ISO 9001</span>
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">ISO 14001</span>
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">OHSAS</span>
              </div>
            </div>
          </div>

          {/* Card 3 - Estrutura */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-100/50">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Estrutura</h3>
              <p className="text-slate-500 leading-relaxed mb-4">
                5.000 m² de área industrial com tecnologia de ponta e equipe especializada.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-slate-50 rounded-xl">
                  <p className="text-xl font-bold text-slate-900">120+</p>
                  <p className="text-xs text-slate-500">colaboradores</p>
                </div>
                <div className="text-center p-2 bg-slate-50 rounded-xl">
                  <p className="text-xl font-bold text-slate-900">3</p>
                  <p className="text-xs text-slate-500">unidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner de confiança */}
        <div className="relative bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl overflow-hidden mb-16">
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
          
          <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Lado esquerdo - Texto */}
            <div className="text-white">
              <span className="inline-block text-orange-400 text-sm font-semibold tracking-wider mb-3">
                POR QUE ESCOLHER A MODELOB2
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Parceiro estratégico para sua operação
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                Mais que um fornecedor, somos um parceiro comprometido com o sucesso do seu negócio.
              </p>
              
              {/* Lista de benefícios */}
              <div className="space-y-3">
                {[
                  'Suporte técnico especializado 24/7',
                  'Rastreabilidade total dos processos',
                  'Cumprimento rigoroso de prazos',
                  'Soluções personalizadas por projeto',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lado direito - Números em destaque */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '500+', label: 'Clientes ativos', icon: '🏭' },
                { value: '24h', label: 'Prazo de resposta', icon: '⚡' },
                { value: '99,8%', label: 'Índice de qualidade', icon: '✨' },
                { value: '15+', label: 'Anos de mercado', icon: '⭐' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="text-3xl mb-2 block">{stat.icon}</span>
                  <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-1">{stat.value}</div>
                  <div className="text-xs text-blue-200 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA final - Conheça mais */}
        <div className="text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 group"
          >
            <span className="text-lg">Quero conhecer mais</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <p className="text-sm text-slate-400 mt-4">
            ✓ Atendimento personalizado  ✓ Orçamento em 24h  ✓ Suporte técnico
          </p>
        </div>
      </div>
    </section>
  );
}