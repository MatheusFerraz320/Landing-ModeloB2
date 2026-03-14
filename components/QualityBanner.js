/* ──────────────────────────────────────────────────────────
   QualityBanner — Tira de validação de qualidade com CTA
   Personalize QUALITY_BANNER_CONFIG abaixo.
────────────────────────────────────────────────────────── */

const QUALITY_BANNER_CONFIG = {
  headline: "Qualidade certificada em cada entrega",
  subheadline:
    "Nossos processos seguem rigorosos padrões internacionais para garantir a excelência dos nossos produtos.",
  ctaLabel: "Solicite uma Cotação",
  ctaHref: "#contato",
  pillars: [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      label: "ISO 9001",
      description: "Certificação internacional de qualidade",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      label: "Rastreabilidade",
      description: "Controle total do processo produtivo",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: "Prazo Garantido",
      description: "Cumprimos rigorosamente os prazos acordados",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Equipe Especializada",
      description: "Profissionais altamente qualificados",
    },
  ],
};

export default function QualityBanner({
  headline = QUALITY_BANNER_CONFIG.headline,
  subheadline = QUALITY_BANNER_CONFIG.subheadline,
  ctaLabel = QUALITY_BANNER_CONFIG.ctaLabel,
  ctaHref = QUALITY_BANNER_CONFIG.ctaHref,
  pillars = QUALITY_BANNER_CONFIG.pillars,
}) {
  return (
    <section
      id="qualidade-banner"
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-500 via-orange-400 to-transparent" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-orange-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Qualidade
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            {headline}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {subheadline}
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 mx-auto mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{pillar.label}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={ctaHref}
            className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-105"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
