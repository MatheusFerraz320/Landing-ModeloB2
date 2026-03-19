import { useState } from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';
import { fadeUpFast, staggerContainer, inViewViewport } from '@/utils/motion';
import ModalForm from '@/components/ModalForm';

export default function CTASection() {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[linear-gradient(135deg,_#0f172a_0%,_#1e293b_58%,_#111827_100%)]">
      {/* Decorative shapes */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-500/14 blur-3xl pointer-events-none" />
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <m.div
        className="relative max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={inViewViewport}
        variants={staggerContainer}
      >
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left: Text Content */}
          <m.div className="text-center lg:text-left space-y-6" variants={fadeUpFast}>
            <h2 className="text-3xl font-black text-white ">
              A Vazão ajuda você a encontrar a solução{" "}
              <span className="text-red-500">Kronox</span>
              {" "}ideal para sua operação
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              As EEE da Kronox permitem uma implantação mais rápida da infraestrutura de esgoto, ajudando você a
              acelerar a entrega do empreendimento.
            </p>
            <div className="flex gap-10">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-2xl -z-10" />
              <Image
                src="/Logo-Vazão-White.webp"
                alt="Vazão Logo"
                width={180}
                height={120}
                className="drop-shadow-2xl object-contain"
                loading='lazy'
              />
              <Image
                src="/Kronox.webp"
                alt="Kronox Logo"
                width={180}
                height={120}
                className="drop-shadow-2xl object-contain"
                loading='lazy'
              />
            </div>


            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-4">
              <button
                onClick={handleClick}
                className="bg-red-500 text-white font-bold text-lg px-12 py-4 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:bg-red-600 hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Quero falar com especialista
              </button>
            </div>
          </m.div>
          <m.div className="flex justify-center pt-10" variants={fadeUpFast}>
            {/* Direita - comp */}
            <div className="flex flex-col items-center gap-8 mb-15">

              {/* Comparação do lado do texto*/}
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-2xl -z-10  " />
                <Image
                  src="/ctaSec.webp"
                  alt="comparação do serviço"
                  width={500}
                  height={200}
                  className="drop-shadow-2xl object-contain rounded-2xl"
                />
              </div>
            </div>
          </m.div>
        </div>
      </m.div>
      <ModalForm isOpen={openModal} onClose={closeModal} />
    </section>

  );
}
