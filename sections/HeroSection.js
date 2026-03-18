import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/motion";

export default function HeroSection({ loadRdScript }) {

  const rdButton = () => { 
    if (typeof loadRdScript === "function") {
      loadRdScript();
    }
    const rdForm = document.getElementById("rd-floating_button-ly4393ic");
    if (rdForm) rdForm.click();
  };

  return (
    <header id="hero" className="relative flex items-center overflow-hidden" style={{ minHeight: '70vh' }}>
      
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/Hero.webp"
          alt="Fundo industrial"
          fill
          priority
          quality={75} // otimiza LCP
          className="object-cover scale-[1.02] brightness-[0.82] saturate-[0.9]"
          sizes="100vw"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 w-full">

        {/* Header com logo */}
        <div className="flex items-center justify-between mb-12">
          <Image 
            src="/Logo-Vazão-White.webp" 
            alt="Kronox" 
            width={180} 
            height={60} 
            priority
            className="object-contain"
          />
        </div>

        {/* HERO SPLIT */}
        <div className="grid lg:grid-cols-[60%_40%] gap-9 items-center">

          {/* TEXTO ESQUERDA */}
          <motion.div
            className="text-left"
            initial="visible" // ⚡ LCP rápido
            animate="show"
            variants={fadeUp}
          >
            <h1 className="font-extrabold text-slate-50 leading-[1.05] tracking-tight 
            mb-6 drop-shadow-[0_6px_24px_rgba(2,6,23,0.85)] text-5xl" >
              Soluções industriais
              <span className="block text-red-500">de alta performance</span>
            </h1>

            <p className="text-lg text-xl font-medium text-slate-100/95 
            max-w-xl mb-10 leading-relaxed drop-shadow-[0_3px_12px_rgba(2,6,23,0.8)]">
              Soluções Kronox para companhias de saneamento, concessionárias, SAAEs e empreendimentos que precisam reduzir manutenção,
              evitar bloqueios e simplificar a operação.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={rdButton}
                className="bg-red-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.7)] hover:scale-105 transition-all duration-300 text-center"
              >
                Solicitar avaliação técnica
              </button>

              <a
                href="#about"
                className="group bg-white/10 text-white font-bold text-lg px-8 py-4 rounded-full backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <span>Saber mais</span>
                <svg
                  className="w-5 h-5 animate-bounce group-hover:animate-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* DIREITA (imagem futura / mockup / vídeo) */}
          <div className="flex justify-center items-center">
            <div className="w-full h-[520px] bg-white/10 rounded-2xl
             backdrop-blur-md flex items-center justify-center border border-white/10">
              <span className="text-white/70 text-sm">
                IMG
              </span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}