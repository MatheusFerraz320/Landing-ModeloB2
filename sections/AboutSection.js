import { motion } from "framer-motion";
import { fadeUp, fadeUpFast, inViewViewport, staggerContainer } from "@/utils/motion";

export default function AboutSection() {

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-red-100 bg-red-100 px-5 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-sm font-semibold text-red-700 tracking-[0.24em]">
              EFICIÊNCIA OPERACIONAL
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Sua elevatória ainda gera
            <span className="font-bold text-red-500 block mt-2">mais custo do que deveria?</span>
          </h2>

          <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Sistemas convencionais exigem mais limpeza, mais intervenção, mais obra civil e mais atenção operacional. 
            As soluções Kronox foram desenvolvidas para reduzir esses gargalos com bombeamento em linha e operação mais eficiente.
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
          {/* Card 1 - Bombeamento em linha */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">Bombeamento em linha</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Instalação simplificada, sem necessidade de obras civis complexas. Menor tempo de parada e rápida ativação.
              </p>

              <div className="flex items-center gap-2 text-red-400 font-medium">
                <span>Eficiência desde o start</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Menos intervenções */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-white/5 p-8 shadow-md 
            transition-transform duration-300 
            hover:scale-105 border border-slate-300"
            variants={fadeUpFast}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-950/20 ring-1 ring-white/10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">Menos manutenção</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Tecnologia anti-entupimento e materiais resistentes reduzem a necessidade de limpeza e intervenções corretivas.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-700">+ resistência</span>
                <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-700">anti-entupimento</span>
                <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-700">longa vida</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Eficiência energética */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-white/5 p-8 shadow-md 
            transition-transform duration-300 
            hover:scale-105 border border-slate-300"
            variants={fadeUpFast}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-950/20 ring-1 ring-white/10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">Eficiência energética</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Motores de alto rendimento e design hidráulico otimizado reduzem o consumo de energia em até 25%.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-2xl border border-slate-200 bg-slate-50">
                  <p className="text-xl font-bold text-slate-900">-25%</p>
                  <p className="text-xs text-slate-500">consumo</p>
                </div>
                <div className="text-center p-3 rounded-2xl border border-slate-200 bg-slate-50">
                  <p className="text-xl font-bold text-slate-900">A+</p>
                  <p className="text-xs text-slate-500">eficiência</p>
                </div>
              </div>
            </div>
          </motion.div>
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
          className="inline-flex items-center gap-3 rounded-full bg-red-400 px-8 py-4 
          text-white font-semibold shadow-lg shadow-[0_20px_50px_rgba(249,115,22,0.3)] 
          transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            Entre em contato agora
          </a>
          <p className="text-sm text-slate-900 mt-4">
            ✓ Análise gratuita  ✓ Projeto personalizado  ✓ Suporte técnico
          </p>
        </motion.div>
      </div>
    </section>
  );
}