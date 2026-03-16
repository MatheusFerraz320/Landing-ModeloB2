import ModalForm from "@/components/ModalForm";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, inViewViewport } from "@/utils/motion";

export default function CTASection() {
  const [isModalOpen,setisModalOpen] = useState(false)
  const openModal = () => setisModalOpen(true)
  const closeModal = () => setisModalOpen(false)


  return (
    <>
    <section className="py-24 relative overflow-hidden bg-[linear-gradient(135deg,_#0f172a_0%,_#1e293b_58%,_#111827_100%)]">
      {/* Decorative shapes */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-500/14 blur-3xl pointer-events-none" />
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <motion.div
        className="relative max-w-4xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="show"
        viewport={inViewViewport}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          Pronto para elevar sua operação?
        </h2>
        <p className="text-slate-200 text-xl mb-10 max-w-2xl mx-auto">
          Entre em contato agora e descubra como nossas soluções podem transformar seus resultados.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={openModal}
            className="bg-red-500 
             text-white 
            font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.7)]
            transition-all duration-300 hover:scale-105"
          >
            Solicitar Cotação
          </button>
          <a
            href="#produtos"
            className="border-2 border-white/45 text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Conhecer Produtos
          </a>
        </div>
      </motion.div>
    </section>
    <ModalForm 
        isOpen={isModalOpen}
        onClose={closeModal} 
        />
    </>

  );
}
