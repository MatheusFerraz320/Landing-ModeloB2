import { motion } from "framer-motion";
import { fadeUp, fadeUpFast, inViewViewport, staggerContainer } from "@/utils/motion";

const benefits = [
  {
    title: "Bombeamento em linha",
    description:
      "Instalação simplificada sem necessidade de obras civis complexas, reduzindo tempo e custo de implantação.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "from-[#0082ca] to-[#0066a0]",
  },
  {
    title: "Baixíssima manutenção",
    description:
      "Tecnologia anti‑entupimento e materiais resistentes que reduzem drasticamente a necessidade de intervenções.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    gradient: "from-[#0082ca] to-[#0070b0]",
  },
  {
    title: "Menos extravasamentos",
    description:
      "Sensores inteligentes e sistema de detecção de entupimento que previnem transbordamentos e paralisações.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    gradient: "from-[#0082ca] to-[#0077b3]",
  },
  {
    title: "Menos odores e gases",
    description:
      "Sistema fechado e vedado que minimiza a emissão de odores e gases, melhorando o ambiente de trabalho.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2M3 18l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2" />
      </svg>
    ),
    gradient: "from-[#0082ca] to-[#005f94]",
  },
  {
    title: "Estrutura em aço inox",
    description:
      "Fabricação em aço inoxidável de alta resistência, garantindo durabilidade e proteção contra corrosão.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: "from-[#0082ca] to-[#004b75]",
  },
  {
    title: "Expansão conforme demanda",
    description:
      "Sistema modular que permite ampliação progressiva da capacidade, adequando‑se ao crescimento da operação.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    gradient: "from-[#0082ca] to-[#003b5c]",
  },
];

export default function QualityBanner() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white">
      {/* Elementos decorativos de fundo com tons premium */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 max-w-7xl mx-auto">
          <div className="absolute top-20 right-8 h-72 w-72 rounded-full bg-[#0082ca]/5 blur-3xl" />
          <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção com tema refinado */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#0082ca]/20 bg-[#0082ca]/5 px-5 py-2 mb-6 shadow-sm backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#0082ca] animate-pulse" />
            <span className="text-sm font-semibold text-[#0082ca] tracking-[0.24em]">
              VANTAGENS EXCLUSIVAS
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-800 mb-6 tracking-tight">
            Por que escolher{" "}
            <span className="font-bold text-red-500">Kronox?</span>
          </h2>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Soluções projetadas para máxima eficiência, durabilidade e baixa manutenção.
          </p>
        </motion.div>

        {/* Grid de cards com estilo premium */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={staggerContainer}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-md
              p-8 shadow-xl border border-slate-300/70 ring-1 ring-white/60 transition-all
              duration-300 hover:scale-[1.02] hover:shadow-[0_24px_48px_rgba(0,130,202,0.18)]
              hover:border-[#0082ca]/40 group"
              variants={fadeUpFast}
            >
              {/* Detalhe sutil no canto */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0082ca]/5 to-transparent rounded-bl-[100px]" />

              <div className="relative">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0082ca]/20 ring-1 ring-white/30 group-hover:scale-110 transition-transform duration-300`}
                >
                  {benefit.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#0082ca] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{benefit.description}</p>
              </div>

              {/* Linha decorativa inferior */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0082ca]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}