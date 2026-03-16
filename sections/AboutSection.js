import { motion } from "framer-motion";
import { fadeUp, fadeUpFast, inViewViewport, staggerContainer } from "@/utils/motion";

export default function AboutSection() {
  const benefits = [
    "Suporte técnico especializado 24/7",
    "Rastreabilidade total dos processos",
    "Cumprimento rigoroso de prazos",
    "Soluções personalizadas por projeto",
  ];

  const stats = [
    { value: "500+", label: "Clientes ativos", detail: "indústrias atendidas" },
    { value: "24h", label: "Prazo de resposta", detail: "para demandas comerciais" },
    { value: "99,8%", label: "Índice de qualidade", detail: "em processos monitorados" },
    { value: "15+", label: "Anos de mercado", detail: "com evolução contínua" },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28 bg-white">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 max-w-7xl mx-auto">
          <div className="absolute top-20 right-8 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-100 bg-orange-50 px-5 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-sm font-semibold text-orange-700 tracking-[0.24em]">
              CONHEÇA NOSSA HISTÓRIA
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Soluções que
            <span className="font-bold text-orange-400 block mt-2">geram confiança</span>
          </h2>

          <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Há mais de 15 anos entregando excelência e construindo parcerias sólidas com as maiores indústrias do país.
          </p>
        </motion.div>

        {/* Grid de cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={staggerContainer}
        >
          {/* Card 1 - Experiência */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-white/5 p-8 shadow-md 
            transition-transform duration-300 hover:scale-105 border border-slate-300"
            variants={fadeUpFast}
          >
            <div className="relative">
              <div className="w-16 h-16 
              bg-gradient-to-br from-orange-400 to-amber-500 
              rounded-2xl flex items-center 
              justify-center mb-6 shadow-lg shadow-orange-950/20 ring-1 ring-white/10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">15+ anos</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                de experiência no mercado industrial, atendendo os mais rigorosos padrões de qualidade.
              </p>

              <div className="flex items-center gap-2 text-orange-400 font-medium">
                <span>Excelência comprovada</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Certificações */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-white/5 p-8 shadow-md 
            transition-transform duration-300 
            hover:scale-105 border border-slate-300"
            variants={fadeUpFast}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-950/20 ring-1 ring-white/10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">Certificações</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                ISO 9001, ISO 14001 e OHSAS 18001, garantindo qualidade em cada processo.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-700">ISO 9001</span>
                <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-700">ISO 14001</span>
                <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-700">OHSAS</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Estrutura */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-white/5 p-8 shadow-md 
            transition-transform duration-300 
            hover:scale-105 border border-slate-300"
            variants={fadeUpFast}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-950/20 ring-1 ring-white/10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">Estrutura</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                5.000 m² de área industrial com tecnologia de ponta e equipe especializada.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-2xl border border-slate-200 bg-slate-50">
                  <p className="text-xl font-bold text-slate-900">120+</p>
                  <p className="text-xs text-slate-500">colaboradores</p>
                </div>
                <div className="text-center p-3 rounded-2xl border border-slate-200 bg-slate-50">
                  <p className="text-xl font-bold text-slate-900">3</p>
                  <p className="text-xs text-slate-500">unidades</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Banner de confiança */}
        <motion.div
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] mb-16 shadow-[0_32px_100px_rgba(3,7,18,0.45)]"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUp}
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.92),rgba(17,24,39,0.82),rgba(30,41,59,0.9))]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/14 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/14 rounded-full blur-3xl" />
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="text-white">
              <span className="inline-block text-orange-300 text-sm font-semibold tracking-[0.24em] mb-3">
                POR QUE ESCOLHER A MODELOB2
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Parceiro estratégico para sua operação
              </h3>
              <p className="text-slate-200 text-lg mb-6 max-w-xl">
                Mais que um fornecedor, somos um parceiro comprometido com o sucesso do seu negócio.
              </p>

              <div className="space-y-3">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-500/18 ring-1 ring-orange-300/15 flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div className="grid grid-cols-2 gap-4" variants={staggerContainer}>
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/7 backdrop-blur-md p-6 text-left transition-transform hover:scale-105"
                  variants={fadeUpFast}
                >
                  <div className="text-2xl md:text-3xl font-bold text-orange-300 mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-100 uppercase tracking-[0.22em] mb-2">{stat.label}</div>
                  <p className="text-sm text-slate-300 leading-relaxed">{stat.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* CTA final */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUp}
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-white font-semibold shadow-[0_22px_55px_rgba(249,115,22,0.28)] transition-all duration-300 hover:from-orange-400 hover:to-amber-400"
          >
            <span className="text-lg">Quero conhecer mais</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="text-sm text-slate-900 mt-4">
            ✓ Atendimento personalizado  ✓ Orçamento em 24h  ✓ Suporte técnico
          </p>
        </motion.div>
      </div>
    </section>
  );
}