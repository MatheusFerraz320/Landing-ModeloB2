/* ────────────────────────────────────────────────────
   PartnersCarousel — Carrossel infinito de parceiros
   Personalize PARTNERS_CONFIG abaixo.
──────────────────────────────────────────────────── */

const PARTNERS_CONFIG = {
  sectionTitle: "Marcas Parceiras",
  sectionSubtitle: "Trabalhamos com as melhores marcas do segmento",
  /** Cada item: { name, logoSrc (opcional), bgColor, textColor } */
  partners: [
    { name: "AçoMaster", bgColor: "#1e3a5f", textColor: "#fff" },
    { name: "TechInd", bgColor: "#374151", textColor: "#fff" },
    { name: "MetalPro", bgColor: "#7c3aed", textColor: "#fff" },
    { name: "IndusBR", bgColor: "#0369a1", textColor: "#fff" },
    { name: "FerroMax", bgColor: "#b45309", textColor: "#fff" },
    { name: "GlobalParts", bgColor: "#065f46", textColor: "#fff" },
    { name: "PrecisaoCNC", bgColor: "#9f1239", textColor: "#fff" },
    { name: "HydroTech", bgColor: "#1d4ed8", textColor: "#fff" },
  ],
};

function PartnerLogo({ partner }) {
  if (partner.logoSrc) {
    return (
      <div className="flex-shrink-0 w-40 h-20 mx-6 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={partner.logoSrc}
          alt={partner.name}
          className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </div>
    );
  }

  return (
    <div
      className="flex-shrink-0 w-44 h-20 mx-6 rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default select-none"
      style={{ backgroundColor: partner.bgColor }}
    >
      <span
        className="font-bold text-lg tracking-wide"
        style={{ color: partner.textColor }}
      >
        {partner.name}
      </span>
    </div>
  );
}

export default function PartnersCarousel({
  sectionTitle = PARTNERS_CONFIG.sectionTitle,
  sectionSubtitle = PARTNERS_CONFIG.sectionSubtitle,
  partners = PARTNERS_CONFIG.partners,
}) {
  // Duplicate list for seamless loop
  const items = [...partners, ...partners];

  return (
    <section id="parceiros" className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
        <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
          Parceiros
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
          {sectionTitle}
        </h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          {sectionSubtitle}
        </p>
      </div>

      {/* Carousel track */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex carousel-track" style={{ width: "max-content" }}>
          {items.map((partner, idx) => (
            <PartnerLogo key={`${partner.name}-${idx}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
