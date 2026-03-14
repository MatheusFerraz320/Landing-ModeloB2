"use client"

import { useState } from "react"
import ModalForm from "@/components/ModalForm"
import ChatBot from "@/components/ChatBot"
import { motion } from "framer-motion"
import { fadeUp, inViewViewport } from "@/utils/motion"

export default function HeroSection() {

const [isModalOpen,setisModalOpen] = useState(false)

const openModal = () => setisModalOpen(true)
const closeModal = () => setisModalOpen(false)

return (

<>

<header className="relative min-h-screen flex items-center overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800" />

<div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl" />
<div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />

<div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">

<div className="flex flex-col lg:flex-row items-center gap-16">

{/* TEXTO HERO */}
<motion.div
className="flex-1 text-center lg:text-left"
initial="hidden"
whileInView="show"
viewport={inViewViewport}
variants={fadeUp}
>

<div className="mx-auto lg:mx-0 mb-6 w-20 h-20 rounded-2xl 
bg-white/20 border-2 border-white/40 flex items-center justify-center backdrop-blur">

<span className="text-white font-black text-2xl tracking-widest">
MB
</span>
</div>

<h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
Soluções industriais de alta performance
</h1>

<p className="text-lg md:text-xl text-blue-100/80 max-w-xl mb-10">
Há mais de 15 anos fornecendo produtos e serviços de qualidade para os maiores players do mercado.
</p>

{/* ✅ BOTÕES */}
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:justify-center lg:justify-start">
  <button
    onClick={openModal}
    className="bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-10 py-4 rounded-full 
    shadow-2xl shadow-orange-500/50 
    hover:shadow-orange-400/60 hover:scale-105  
    transition-all duration-300"
  >
    Solicitar Cotação
  </button>
  
  <a
    href="#about"
    className="group bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-8 py-4 rounded-full 
    shadow-2xl shadow-orange-500/50 hover:shadow-orange-400/60 
    transition-all duration-300 hover:scale-105 
    inline-flex items-center gap-4"
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

</motion.div> {/* Fim da div do texto */}

{/* CHATBOT */}
<motion.div
className="flex-1 w-full max-w-md"
initial="hidden"
whileInView="show"
viewport={inViewViewport}
variants={fadeUp}
>
<ChatBot />
</motion.div>

</div> {/* Fim da flex row */}

</div> {/* Fim do container */}

</header>

<ModalForm
isOpen={isModalOpen}
onClose={closeModal}
/>

</>

)}