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
          <m.div
            className="text-left"
            initial="hidden" // LCP rápido
            whileInView="show"
            variants={fadeUp}
          >
            <h1 className="font-extrabold text-slate-50 leading-[1.05] tracking-tight 
            mb-6 drop-shadow-[0_6px_24px_rgba(2,6,23,0.85)] text-5xl" >
              Soluções de poço seco que otimizam o empreendimento e
              <span className="block text-red-500">agregam valor para construtoras.</span>
            </h1>

            <p className="text-lg text-xl font-medium text-slate-100/95 
            max-w-xl mb-10 leading-relaxed drop-shadow-[0_3px_12px_rgba(2,6,23,0.8)]">
              Soluções Kronox para companhias de saneamento, concessionárias, SAAEs e empreendimentos que precisam reduzir manutenção,
              evitar bloqueios e simplificar a operação.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button
                onClick={handleClick}
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
          {/* DIREITA - Imagem integrada diretamente ao fundo */}
          <div className="flex justify-center items-end h-full">
            <div className="relative w-full h-[520px]">
              <Image
                src="/comp.webp"
                alt="Componentes Kronox"
                fill
                loading="lazy"
                fetchPriority="low"
                quality={75}
                className="object-contain object-center h-[520px] md:scale-140"
                sizes="100vw"
              />
            </div>
          </div>

          {/* Overlay muito sutil */}
        </div>
      </div>



      <ModalForm isOpen={openModal} onClose={closeModal} />
    </header>
  );
}