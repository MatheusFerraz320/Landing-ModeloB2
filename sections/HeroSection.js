"use client";

import { useState } from "react";
import Image from "next/image";
import ModalForm from "@/components/ModalForm";
import ChatBot from "@/components/ChatBot";
import { motion } from "framer-motion";
import { fadeUp, inViewViewport } from "@/utils/motion";

export default function HeroSection() {
  const [isModalOpen, setisModalOpen] = useState(false);

  const openModal = () => setisModalOpen(true);
  const closeModal = () => setisModalOpen(false);

  return (
    <>
      <header className="relative min-h-screen flex items-center overflow-hidden">
        {/* Imagem de fundo com Next.js Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Fundo industrial"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay escuro para contraste */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Elementos decorativos (ajustados com opacidade menor) */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-orange-500/20 blur-3xl" />

        {/* Conteúdo principal (acima do overlay) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          {/* HEADER com logo e CTA */}
          <div className="flex items-center justify-between mb-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
            <Image 
              src="/logo.webp" 
              alt="Kronox" 
              width={180} 
              height={60} 
              className="object-contain"
              priority
            />
            </div>
          </div>

          {/* TEXTO HERO */}
          <motion.div
            className="w-full max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            variants={fadeUp}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-50 leading-[1.05] tracking-tight mb-6 drop-shadow-[0_6px_24px_rgba(2,6,23,0.85)]">
              Soluções industriais
              <span className="block text-red-500">de alta performance</span>
            </h1>

            <p className="text-lg md:text-2xl font-medium text-slate-100/95 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-[0_3px_12px_rgba(2,6,23,0.8)]">
              Soluções Kronox para companhias de saneamento, concessionárias, SAAEs e empreendimentos que precisam reduzir manutenção,
              evitar bloqueios e simplificar a operação.
            </p>

            {/* BOTÕES PRINCIPAIS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
              <button
                onClick={openModal}
                className="bg-red-500 text-white font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.7)] hover:scale-105 transition-all duration-300"
              >
                Solicitar Cotação
              </button>

              <a
                href="#about"
                className="group bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.7)] transition-all duration-300 hover:scale-105 inline-flex items-center gap-4"
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
        </div>
      </header>

      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}