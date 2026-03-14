/* ──────────────────────────────────────────────────────────
   QualitySection — Segunda seção de validação de qualidade
   Personalize QUALITY_SECTION_CONFIG abaixo.
────────────────────────────────────────────────────────── */

const QUALITY_SECTION_CONFIG = {
  sectionTitle: "Compromisso com a Excelência",
  sectionSubtitle:
    "Cada produto que sai da nossa fábrica passa por um rigoroso controle de qualidade para garantir a sua satisfação.",
  bodyText:
    "Investimos continuamente em tecnologia, treinamento e processos para manter os mais altos padrões do setor. Nosso sistema de gestão da qualidade abrange desde o recebimento da matéria-prima até a expedição do produto final.",
  stats: [
    { value: "+15", label: "Anos de mercado" },
    { value: "500+", label: "Clientes ativos" },
    { value: "99,8%", label: "Índice de qualidade" },
    { value: "24h", label: "Prazo de resposta" },
  ],
  certifications: [
    { code: "ISO 9001", description: "Sistema de Gestão da Qualidade" },
    { code: "ISO 14001", description: "Gestão Ambiental" },
    { code: "OHSAS 18001", description: "Saúde e Segurança" },
    { code: "INMETRO", description: "Conformidade nacional" },
  ],
};

export default function QualitySection({
  sectionTitle = QUALITY_SECTION_CONFIG.sectionTitle,
  sectionSubtitle = QUALITY_SECTION_CONFIG.sectionSubtitle,
  bodyText = QUALITY_SECTION_CONFIG.bodyText,
  stats = QUALITY_SECTION_CONFIG.stats,
  certifications = QUALITY_SECTION_CONFIG.certifications,
}) {
  return (
    <section id="qualidade" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top — Text + Certifications */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-20">
          {/* Left — text */}
          <div className="flex-1">
            <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
              Qualidade
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
              {sectionTitle}
            </h2>
            <p className="text-slate-500 text-lg mb-4 leading-relaxed">{sectionSubtitle}</p>
            <p className="text-slate-500 leading-relaxed">{bodyText}</p>
          </div>

          {/* Right — certifications */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center hover:border-orange-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-black text-slate-900 text-lg">{cert.code}</span>
                <span className="text-slate-500 text-sm mt-1">{cert.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl p-8 shadow-lg"
            >
              <div className="text-4xl font-black text-orange-400 mb-2">{stat.value}</div>
              <div className="text-blue-200 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
