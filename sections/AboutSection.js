import { m } from "framer-motion";
import Image from "next/image";
import { fadeUpFast, staggerContainer, inViewViewport } from "@/utils/motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-10  bg-white">
      <m.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="visible"
        viewport={inViewViewport}
        variants={staggerContainer}
      >
        {/* Linha superior com badge */}
        <m.div className="text-center max-w-4xl mx-auto mb-12" variants={fadeUpFast}>
          <div className="inline-flex items-center gap-3 rounded-full 
          border border-white/30 bg-white/70 backdrop-blur-md 
          px-6 py-2.5 shadow-[0_10px_30px_rgba(15,23,42,0.12)]">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 opacity-90 shadow-[0_0_10px_rgba(59,130,246,0.7)]" />
            <span className="text-sm tracking-wide font-semibold text-slate-800">
              EFICIÊNCIA OPERACIONAL
            </span>
          </div>
        </m.div>

        {/* Grid principal: Imagem à esquerda | Texto à direita */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center mb-8">

          {/* Coluna Esquerda - Imagem (invisível, sem card) */}
          <m.div
            className="relative flex justify-center items-center "
            variants={fadeUpFast}
          >
            <div className="relative w-full h-[500px] md:h-[500px] ">
              <Image
                src="/comparacao.webp"
                alt="Soluções industriais Kronox"
                fill
                className="object-contain drop-shadow-2xl "
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />

              {/* Elementos decorativos sutis atrás da imagem */}
              <div className="absolute top-4 left-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl -z-10" />
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-red-500/5 rounded-full blur-2xl -z-10" />
            </div>
          </m.div>

          {/* Coluna Direita - Texto principal */}
          <m.div
            className="text-left"
            variants={fadeUpFast}
          >
            <h2 className="text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Sua elevatória ainda gera
              <span className="font-bold text-red-500 block mt-2">mais custo do que deveria?</span>
            </h2>

            <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8">
              Sistemas convencionais exigem mais limpeza, mais intervenção, mais obra civil e mais atenção operacional.
              As soluções Kronox foram desenvolvidas para reduzir esses gargalos com bombeamento em linha e operação mais eficiente.
            </p>


          </m.div>
        </div>

        {/* Grid de cards */}
        <m.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-8"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={staggerContainer}
        >
          {/* Card 1 - Bombeamento */}
          <m.div
            className="relative overflow-hidden rounded-3xl bg-white/5 p-8 
              shadow-xl transition-transform duration-300 hover:scale-105 
              border border-slate-400/80"
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
          </m.div>

          {/* Card 2 - manutenção */}
          <m.div
            className="relative overflow-hidden rounded-3xl bg-white/5 p-8 shadow-xl 
              transition-transform duration-300 
              hover:scale-105 border border-slate-400/80"
            variants={fadeUpFast}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-950/20 ring-1 ring-white/10">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 19.5h16M6.5 16.5v-4m5 4v-7m5 7v-2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6.5 9.5l4.5-3 3.5 2 3-2" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">Economia e eficiência</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Redução de extravasamento de bloqueio. Redução de custos operacionais e de manutenção.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-700">+ resistência</span>
                <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-700">anti-entupimento</span>
                <span className="rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-700">longa vida</span>
              </div>
            </div>
          </m.div>

          {/* Card 3 - aço inox */}
          <m.div
            className="relative overflow-hidden rounded-3xl bg-white/5 p-8 shadow-xl 
              transition-transform duration-300 
              hover:scale-105 border border-slate-400/80"
            variants={fadeUpFast}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-300 via-slate-400 to-zinc-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/20 ring-1 ring-white/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 6.75h18M3 12h18M3 17.25h18" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">Estrutura em aço inox</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                Construção em aço inoxidável para maior resistência à corrosão, durabilidade em ambiente agressivo e operação confiável por mais tempo.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-2xl border border-slate-300/80 bg-gradient-to-b from-white to-slate-100">
                  <p className="text-xl font-bold text-slate-800">INOX</p>
                  <p className="text-xs text-slate-600">estrutura</p>
                </div>
                <div className="text-center p-3 rounded-2xl border border-slate-300/80 bg-gradient-to-b from-white to-slate-100">
                  <p className="text-xl font-bold text-slate-800">+ vida</p>
                  <p className="text-xs text-slate-600">útil</p>
                </div>
              </div>
            </div>
          </m.div>
        </m.div>

        {/* CTA final */}
        <div className="text-center mt-16">
          <a
            href="#products"
            className="inline-flex items-center gap-3 rounded-full px-8 py-4 
              bg-gradient-to-r from-[#0082ca] 
              to-[#0066a0] hover:from-[#0066a0]
              hover:to-[#004b75] text-white font-bold 
              text-lg shadow-[0_18px_45px_rgba(0,130,202,0.28)] 
              transition-all duration-300 hover:scale-[1.03]"
          >
            Conheça nossas soluções
          </a>
          <p className="text-sm text-slate-900 mt-4">
            ✓ Análise gratuita  ✓ Projeto personalizado  ✓ Suporte técnico
          </p>
        </div>
      </m.div>
    </section>
  );
}