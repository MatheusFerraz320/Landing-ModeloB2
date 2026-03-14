/* ─────────────────────────────────────────────
   HeroSection — Hero / Header da landing page
   Personalize as variáveis HERO_CONFIG abaixo.
───────────────────────────────────────────── */

const HERO_CONFIG = {
  /** Caminho da imagem de fundo (coloque em /public). Use "" para usar o gradiente padrão. */
  bgImage: "",
  /** Caminho do logo da empresa (coloque em /public). Use "" para exibir o placeholder SVG. */
  logoSrc: "",
  companyName: "ModeloB2",
  headline: "Soluções industriais de alta performance",
  subheadline:
    "Há mais de 15 anos fornecendo produtos e serviços de qualidade para os maiores players do mercado.",
  ctaLabel: "Solicitar Cotação",
  ctaHref: "#contato",
};

function LogoPlaceholder({ name }) {
  return (
    <div className="w-20 h-20 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
      <span className="text-white font-black text-2xl tracking-widest select-none">
        {name
          .split(" ")
          .slice(0, 2)
          .map((w) => w[0])
          .join("")}
      </span>
    </div>
  );
}

export default function HeroSection({
  bgImage = HERO_CONFIG.bgImage,
  logoSrc = HERO_CONFIG.logoSrc,
  companyName = HERO_CONFIG.companyName,
  headline = HERO_CONFIG.headline,
  subheadline = HERO_CONFIG.subheadline,
  ctaLabel = HERO_CONFIG.ctaLabel,
  ctaHref = HERO_CONFIG.ctaHref,
}) {
  const bgStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={bgStyle}
    >
      {/* Gradient base (shown when no bgImage, or as overlay when bgImage exists) */}
      <div
        className={`absolute inset-0 ${
          bgImage
            ? "bg-black/60"
            : "bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800"
        }`}
      />

      {/* Decorative circle accents */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Logo */}
        {logoSrc ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={logoSrc}
            alt={`Logo ${companyName}`}
            className="w-20 h-20 object-contain mx-auto mb-6"
          />
        ) : (
          <LogoPlaceholder name={companyName} />
        )}

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
          {headline}
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {subheadline}
        </p>

        {/* CTA */}
        <a
          href={ctaHref}
          className="inline-block bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-orange-400/40"
        >
          {ctaLabel}
        </a>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40">
        <span className="text-xs tracking-widest uppercase">Conheça mais</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
