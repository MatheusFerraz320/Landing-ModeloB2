import { useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { fadeUp } from "@/utils/motion";
import ModalForm from "@/components/ModalForm";

export default function HeroSection() {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <header id="hero" className="relative flex items-center overflow-hidden" style={{ minHeight: '70vh' }}>

      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/bgHeroNew.webp"
          alt="Fundo industrial"
          fill
          priority
          loading="eager"
          fetchPriority="high"
          quality={75}
          className="object-cover scale-[1.02] brightness-[0.82] saturate-[0.9]"
          sizes="100vw"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 w-full">

        {/* Header com logo */}
        <div className="flex items-center justify-between mb-8 lg:mb-12">
          <Image
            src="/Logo-Vazão-White.webp"
            alt="Kronox"
            width={180}
            height={60}
            priority
            className="object-contain w-[140px] md:w-[180px]"
          />
        </div>

        {/* HERO SPLIT - Ajustado para melhor responsividade */}
        <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-12 items-center">

          {/* TEXTO ESQUERDA - Com limites de largura */}
          <m.div
            className="text-left max-w-2xl"
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
          >
            <h1 className="font-extrabold 
            text-slate-50  lg:leading-[1.05] 
            tracking-tight mb-6 drop-shadow-[0_6px_24px_rgba(2,6,23,0.85)] text-3xl lg:text-[40px]">
              Soluções de poço seco que otimizam o empreendimento e&nbsp;agregam
              <span className="text-red-500"> valor para construtoras.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl font-medium text-slate-100/95 max-w-xl mb-8 md:mb-10 leading-relaxed drop-shadow-[0_3px_12px_rgba(2,6,23,0.8)]">
              Soluções Kronox para companhias de saneamento, concessionárias, SAAEs e empreendimentos que precisam reduzir manutenção, evitar bloqueios e simplificar a operação.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={handleClick}
                className="bg-red-500 text-white font-bold text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.7)] hover:scale-105 transition-all duration-300 text-center whitespace-nowrap"
              >
                Solicitar avaliação técnica
              </button>

              <a
                href="#about"
                className="group bg-white/10 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <span>Saber mais</span>
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
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
          </m.div>

          {/* DIREITA - Imagem com altura responsiva */}
          <div className="flex justify-center items-end h-full">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[520px]">
              <Image
                src="/comp.webp"
                alt="Componentes Kronox"
                fill
                loading="lazy"
                fetchPriority="low"
                quality={75}
                className="object-contain object-bottom md:object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>

      <ModalForm isOpen={openModal} onClose={closeModal} />
    </header>
  );
}