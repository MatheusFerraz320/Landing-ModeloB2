import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUpFast, inViewViewport } from '@/utils/motion';

const rdButton = () => {
  const rdForm = document.getElementById("rd-floating_button-ly4393ic");
  if (rdForm) rdForm.click();
};

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductLines() {
  const products = [
    {
      name: "Baby Booster",
      badge: "Compacto",
      description: "Compacto e econômico para aplicações pontuais .",
      image: "/babyBooster.webp",
      alt: "Baby Booster - solução compacta"
    },
    {
      name: "Booster Z",
      badge: "Flexível",
      description: "Flexível para operação e manutenção.",
      image: "/boosterZ.webp",
      alt: "Booster Z - flexível para operação e manutenção"
    },
    {
      name: "Booster W",
      badge: "Alta vazão",
      description: "Indicado para maiores vazões e variações de demanda.",
      image: "/boosterW.webp",
      alt: "Booster W - para altas vazões"
    },
    {
      name: "Booster Hércules",
      badge: "Expansível",
      description: "Preparado para expansão gradual do sistema.",
      image: "/boosterHercules.webp",
      alt: "Booster Hércules - preparado para expansão"
    }
  ];

  return (
    <section id="products" className="relative overflow-hidden py-24">
      {/* Fundo principal com gradiente elegante na cor #0082ca */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0082ca] via-[#0066a0] to-[#004b75]" />
      
      {/* Overlay suave para garantir contraste dos cards */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Elementos decorativos com tons complementares */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
        initial="hidden"
        whileInView="show"
        viewport={inViewViewport}
        variants={fadeUpFast}
      >
        {/* Header */}
        <div className="relative text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-white/90 text-sm 
          font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 bg-white/10 backdrop-blur-sm 
          border border-white/20 rounded-full">
            Linha de soluções
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 text-shadow-lg">
            Soluções para diferentes portes e aplicações
          </h2>
          <p className="text-white/80 text-lg">
            Escolha a solução ideal para sua necessidade, com tecnologia e eficiência Kronox.
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative">
          {/* Setas personalizadas */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 
          bg-white/20 backdrop-blur-md border border-white/30 rounded-full shadow-xl hover:shadow-2xl 
          flex items-center justify-center text-white hover:text-[#a52727] transition-all duration-300 hover:scale-110 -ml-6 product-prev">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 
          backdrop-blur-md border border-white/30 rounded-full shadow-xl hover:shadow-2xl flex items-center 
          justify-center text-white hover:text-[#a52727] transition-all duration-300 hover:scale-110 -mr-6 product-next">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.product-prev',
              nextEl: '.product-next',
            }}
            pagination={{
              clickable: true,
              el: '.product-pagination',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            loop={true}
            className="pb-14"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="group rounded-2xl 
                border border-white/20 bg-white/10 backdrop-blur-sm 
                shadow-[0_24px_50px_rgba(0,0,0,0.3)] 
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] 
                hover:border-[#a52727]/40 transition-all duration-300 
                overflow-hidden h-[470px] flex flex-col">
                  
                  {/* Imagem do produto */}
                  <div className="relative h-60 bg-slate-800/60 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={65}
                      className="w-full h-full object-cover
                      group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Badge com tema vermelho */}
                    <span className="absolute top-4 
                    right-4 text-xs 
                    font-semibold bg-[#a52727] 
                    text-white px-3 py-1.5 rounded-full shadow-lg">
                      {product.badge}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {product.name}
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-4 min-h-[72px]">
                      {product.description}
                    </p>
                    <button
                      onClick={rdButton}
                      className="inline-flex 
                      items-center gap-2 text-sm md:text-base font-extrabold 
                      text-white hover:text-red-700 transition-colors
                       group/link"
                    >
                      Solicitar cotação
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Paginação */}
          <div className="product-pagination flex justify-center gap-2 mt-6" />
        </div>
      </motion.div>
    </section>
  );
}