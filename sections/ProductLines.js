// Primeiro instale: npm install swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { fadeUp, inViewViewport } from '@/utils/motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProductLines() {
  const products = [
    {
      name: "Componentes CNC",
      badge: "Alta Precisão",
      description: "Peças usinadas com alta precisão dimensional para aplicações críticas.",
      image: "/images/produtos/cnc.jpg", // Substitua pelos seus paths
      alt: "Componentes CNC de alta precisão"
    },
    {
      name: "Tubulações Industriais",
      badge: "Linha Completa",
      description: "Linhas de tubulação para transporte de fluidos e gases industriais.",
      image: "/images/produtos/tubulacoes.jpg",
      alt: "Tubulações industriais"
    },
    {
      name: "Painéis Elétricos",
      badge: "Normas ABNT",
      description: "Painéis de comando e controle montados conforme normas ABNT/IEC.",
      image: "/images/produtos/paineis.jpg",
      alt: "Painéis elétricos industriais"
    },
    {
      name: "Reservatórios",
      badge: "Sob Medida",
      description: "Tanques e reservatórios fabricados em aço inox e carbono.",
      image: "/images/produtos/reservatorios.jpg",
      alt: "Reservatórios industriais"
    },
    {
      name: "Estruturas Metálicas",
      badge: "Engenharia",
      description: "Estruturas soldadas para suporte de equipamentos e edificações industriais.",
      image: "/images/produtos/estruturas.jpg",
      alt: "Estruturas metálicas"
    },
    {
      name: "Ferramentas Especiais",
      badge: "Customizado",
      description: "Ferramental customizado para processos produtivos de alta exigência.",
      image: "/images/produtos/ferramentas.jpg",
      alt: "Ferramentas especiais"
    }
  ];

  return (
    <section id="produtos" className="relative overflow-hidden py-24 bg-[linear-gradient(180deg,_#0e1728_0%,_#111827_100%)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="relative text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUp}
        >
          <span className="inline-block text-orange-200 text-sm font-semibold tracking-widest uppercase mb-3 px-4 py-1.5 bg-white/8 border border-white/12 rounded-full">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Linha de Produtos
          </h2>
          <p className="text-slate-200/85 text-lg">
            Soluções completas para sua operação industrial, do projeto à entrega.
          </p>
        </motion.div>

        {/* Carrossel */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUp}
        >
          {/* Setas personalizadas */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-slate-100 hover:text-orange-300 transition-all duration-300 hover:scale-110 -ml-6 product-prev">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-slate-100 hover:text-orange-300 transition-all duration-300 hover:scale-110 -mr-6 product-next">
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
              <SwiperSlide key={index}>
                <div className="group rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] shadow-[0_24px_70px_rgba(2,6,23,0.45)] hover:shadow-[0_30px_90px_rgba(249,115,22,0.18)] hover:border-orange-300/25 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  
                  {/* Imagem do produto */}
                  <div className="relative h-56 bg-slate-900/60 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Badge sobreposto */}
                    <span className="absolute top-4 right-4 text-xs font-semibold bg-orange-500/90 text-white px-3 py-1.5 rounded-full shadow-lg">
                      {product.badge}
                    </span>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {product.name}
                    </h3>
                    <p className="text-slate-200/82 leading-relaxed mb-4 flex-1">
                      {product.description}
                    </p>
                    <a
                      href="#contato"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-200 transition-colors group/link"
                    >
                      Solicitar cotação
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Paginação */}
          <div className="product-pagination flex justify-center gap-2 mt-6" />
        </motion.div>
      </div>
    </section>
  );
}