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

            {/* CTA do header */}
            <button
              onClick={openModal}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm 
              px-6 py-2.5 text-sm font-semibold text-white border border-white/20 hover:scale-105 transition-all duration-300"
            >
              Fale com especialista
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* TEXTO HERO */}
          <motion.div
            className="w-full max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            variants={fadeUp}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Soluções industriais de alta performance
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-10">
              Soluções Kronox para companhias de saneamento , concessionárias. SAAEs e empreendimentos que precisam reduzir
              manutenção evitar bloqueios e simplificar a operação
            </p>

            {/* BOTÕES PRINCIPAIS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
              <button
                onClick={openModal}
                className="bg-red-500 hover:bg-orange-400 text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl 
                shadow-red-500/50 hover:shadow-orange-400/60 hover:scale-105 transition-all duration-300"
              >
                Solicitar Cotação
              </button>

              <a
                href="#about"
                className="group bg-red-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl shadow-red-500/50  transition-all duration-300 hover:scale-105 inline-flex items-center gap-4"
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