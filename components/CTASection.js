/* ──────────────────────────────────────────────────────
   CTASection — Seção de chamada para ação final
   Personalize CTA_CONFIG abaixo.
────────────────────────────────────────────────────── */

const CTA_CONFIG = {
  headline: "Pronto para elevar sua operação?",
  subheadline:
    "Entre em contato agora e descubra como nossas soluções podem transformar seus resultados.",
  primaryCta: { label: "Solicitar Cotação", href: "#contato" },
  secondaryCta: { label: "Conhecer Produtos", href: "#produtos" },
};

export default function CTASection({
  headline = CTA_CONFIG.headline,
  subheadline = CTA_CONFIG.subheadline,
  primaryCta = CTA_CONFIG.primaryCta,
  secondaryCta = CTA_CONFIG.secondaryCta,
}) {
  return (
    <section className="py-24 bg-orange-500 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-white/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-orange-400/40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          {headline}
        </h2>
        <p className="text-orange-100 text-xl mb-10 max-w-2xl mx-auto">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryCta.href}
            className="bg-white text-orange-600 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-orange-50 transition-all duration-300 hover:scale-105"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
