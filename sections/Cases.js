import { motion } from 'framer-motion';
import { fadeUp, fadeUpFast, inViewViewport, staggerContainer } from '@/utils/motion';
import Image from 'next/image';

// Logos de clientes (simuladas, substitua pelos paths reais)
const clientLogos = [
  { src: '/cases/compesaLogo.webp', alt: 'Compensa Empresa' },
  { src: '/cases/embasaLogo.webp', alt: 'Embasa Empresa' },
  { src: '/cases/brk-ambiental.webp', alt: 'BRK Ambiental' },
  { src: '/cases/verde-alagoas.webp', alt: 'Verde Alagoas' },
  { src: '/cases/cagepa.webp', alt: 'Cagepa' },
];

// Cases OBJ
const cases = [
  {
    title: 'Instalação na Sabesp',
    location: 'Hortolândia - SP',
    description:
      ' Modelo baby booster 2,2Kw/2VV.',
    badge: 'Sabesp',
    image: '/cases/instalacaoCampinas.webp',
  },
  {
    title: 'Premiação Projeto de Excelência EM Resultados',
    location: 'Iguá - CUIABÁ/MT',
    description:
      'Prêmio Projeto de Excelência EM Resultados com a EEE IN-Line.',
    badge: 'Premiação',
    image: '/cases/premio.webp',
  },
  {
    title: 'Instalação em condomínios ',
    location: 'Campinas/SP',
    description:
      'Fornecimento de sistemas modulares para expansão gradual da capacidade de tratamento, atendendo ao crescimento da demanda.',
    badge: 'Expansão',
    image: '/cases/instalacaoCampinas.webp',
  },
];

export default function Cases() {
  return (
    <section id="cases" className="relative overflow-hidden py-20 md:py-28 bg-black">
      {/* Elementos decorativos sutis */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-8 h-72 w-72 rounded-full bg-[#0082ca]/10 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-[#a52727]/10 blur-3xl" />
        <div className="absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com logo e título */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUp}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#0082ca] animate-pulse" />
            <span className="text-sm font-semibold text-white/80 tracking-[0.24em]">
              PROVA SOCIAL
            </span>
          </div>
          
          <div className="mb-6 flex flex-col items-center gap-2">
            <Image
              src="/kronoxlogo.png"
              alt="Kronox"
              width={160}
              height={52}
              className="object-contain w-28 h-auto sm:w-36 md:w-40 "
            />
            <span className="text-4xl font-bold text-white">
              Kronox<span className="text-red-500">.</span>
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Tecnologia já aplicada em
            <span className="font-bold text-[#0082ca] block mt-2">operações reais</span>
          </h2>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Casos em concessionárias, autarquias e empreendimentos, com instalações em operações como Iguá Cuiabá e DAEV Valinhos. 
            Nosso portfólio inclui soluções premiadas que comprovam a eficiência da Kronox.
          </p>
        </motion.div>

        {/* Grid de cases */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={staggerContainer}
        >
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden 
              bg-white/5 border border-white/10 hover:border-[#0082ca]/30 transition-all duration-500"
              variants={fadeUpFast}
            >
              {/* Imagem de fundo do case */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <span className="absolute top-4 right-4 bg-[#a52727] text-white text-xs font-bold px-3 py-1.5 rounded-full z-10">
                  {caseItem.badge}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{caseItem.title}</h3>
                <p className="text-[#0082ca] text-sm font-medium mb-3">{caseItem.location}</p>
                <p className="text-white/70 text-sm leading-relaxed">{caseItem.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Módulo "Nossos Clientes" */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUp}
        >
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            <span className="font-bold text-[#0082ca]">Nossos clientes</span> confiam na Kronox
          </h3>
          <p className="text-white/50 text-sm mb-12 max-w-2xl mx-auto">
            Empresas líderes em diversos setores utilizam nossas soluções para potencializar suas operações
          </p>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 items-center justify-items-center"
            variants={staggerContainer}
          >
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="w-full h-28 group relative overflow-hidden rounded-xl transition-all duration-500"
                variants={fadeUpFast}
                whileHover={{ y: -8 }}
              >
                {/* Card background com gradiente sutil */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 border border-white/20 group-hover:border-[#0082ca]/60 group-hover:from-white/15 transition-all duration-500" />
                
                {/* Efeito glow no hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{
                    boxShadow: 'inset 0 0 30px rgba(0, 130, 202, 0.15), 0 0 30px rgba(0, 130, 202, 0.2)'
                  }}
                />

                {/* Container da imagem com padding */}
                <div className="relative w-full h-full flex items-center justify-center px-4 py-5">
                  {/* Backdrop mais claro no hover para melhor contraste */}
                  <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/8 transition-all duration-500 pointer-events-none" />
                  
                  {/* Imagem do logo */}
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="object-fill 
                    max-h-16 max-w-[90%] relative z-10 filter 
                    brightness-110 saturate-110 group-hover:brightness-125 group-hover:saturate-125 transition-all duration-500"
                  />
                </div>

                {/* Bottom accent line que aparece no hover */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0082ca] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>

          <p className="text-white/40 text-sm mt-16">
            E muitas outras empresas que já transformaram sua operação com a Kronox.
          </p>
        </motion.div>
      </div>
    </section>
  );
}