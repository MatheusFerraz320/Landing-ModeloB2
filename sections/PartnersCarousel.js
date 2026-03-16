// Primeiro instale: npm install swiper (já deve estar instalado)

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';  // ← Removido Pagination
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, inViewViewport } from '@/utils/motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';  // ← Só navigation, sem pagination

export default function PartnersCarousel() {
  const swiperRef = useRef(null);
  
  // Lista de parceiros (com os nomes exatos das imagens)
  const partners = [
    { name: "AçoMaster", image: "acomaster.png" },
    { name: "TechInd", image: "techind.png" },
    { name: "MetalPro", image: "metalpro.png" },
    { name: "IndusBR", image: "indusbr.png" },
    { name: "FerroMax", image: "ferromax.png" },
    { name: "GlobalParts", image: "globalparts.png" },
    { name: "PrecisaoCNC", image: "precisaocnc.png" },
    { name: "HydroTech", image: "hydrotech.png" },
    { name: "EletroTech", image: "eletrotech.png" },
    { name: "MegaInd", image: "megaind.png" },
  ];

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <section id="parceiros" className="relative overflow-hidden py-16 md:py-20 bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-0 h-72 w-72 rounded-full bg-blue-500/8 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/8 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="relative text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUp}
        >
          <span className="inline-block text-orange-600 text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100">
            Parceiros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Marcas que confiam na gente
          </h2>
          <p className="text-slate-600 text-lg">
            Trabalhamos com as melhores empresas do setor
          </p>
        </motion.div>

        {/* Carrossel com setas */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUp}
        >
          {/* Seta Esquerda */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 
                     bg-white border border-slate-200 rounded-full shadow-lg hover:shadow-xl 
                     flex items-center justify-center
                     text-slate-600 hover:text-orange-500
                     transition-all duration-300 hover:scale-110
                     -ml-5 md:-ml-6"
            aria-label="Slide anterior"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Seta Direita */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 
                     bg-white border border-slate-200 rounded-full shadow-lg hover:shadow-xl 
                     flex items-center justify-center
                     text-slate-600 hover:text-orange-500
                     transition-all duration-300 hover:scale-110
                     -mr-5 md:-mr-6"
            aria-label="Próximo slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Swiper Container */}
          <div className="overflow-hidden px-8 md:px-12">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation]}  // ← Só Navigation, sem Pagination
              spaceBetween={24}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
                1280: { slidesPerView: 4, spaceBetween: 32 },
              }}
              loop={true}
              className="w-full"
            >
              {partners.map((partner, idx) => (
                <SwiperSlide key={idx}>
                  <div className="rounded-xl border border-slate-200 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.08)] hover:shadow-[0_20px_55px_rgba(249,115,22,0.12)] transition-all duration-300 hover:scale-105 p-6 h-28 flex items-center justify-center">
                    <img 
                      src={`/images/parceiros/${partner.image}`}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>      
      </div>
    </section>
  );
}