import { motion } from 'framer-motion';
import { fadeUp, fadeUpFast, inViewViewport, staggerContainer } from '@/utils/motion';
import Image from 'next/image';

// Logos de clientes (simuladas, substitua pelos paths reais)
const clientLogos = [
  { src: '/logos/cliente1.png', alt: 'Cliente 1' },
  { src: '/logos/cliente2.png', alt: 'Cliente 2' },
  { src: '/logos/cliente3.png', alt: 'Cliente 3' },
  { src: '/logos/cliente4.png', alt: 'Cliente 4' },
  { src: '/logos/cliente5.png', alt: 'Cliente 5' },
  { src: '/logos/cliente6.png', alt: 'Cliente 6' },
  { src: '/logos/cliente7.png', alt: 'Cliente 7' },
  { src: '/logos/cliente8.png', alt: 'Cliente 8' },
];

// Cases extraídos dos PDFs (conteúdo simulado, ajustar conforme necessário)
const cases = [
  {
    title: 'Instalação na Sabesp',
    location: 'Hortolândia - SP',
    description:
      ' Modelo baby booster 2,2Kw/2VV.',
    badge: 'Projeto Premiado',
    image: '/cases/igua-cuiaba.jpg', 
  },
  {
    title: 'ELEVATÓRIO COM SISTEMA DE BOMBEAMENTO EM LINHA',
    location: 'IGUÁ-CUIABÁ/MT',
    description:
      'Prêmio Projeto de Excelência EM Resultados com a EEE IN-Line.',
    badge: 'Premiação',
    image: '/cases/daevalinhos.jpg',
  },
  {
    title: 'Instalação em condomínio ',
    location: 'SÃO PEDRO/SP',
    description:
      'Fornecimento de sistemas modulares para expansão gradual da capacidade de tratamento, atendendo ao crescimento da demanda.',
    badge: 'Expansão',
    image: '/cases/autarquia.jpg',
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
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[#0082ca]/30 transition-all duration-500"
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
          <h3 className="text-2xl md:text-3xl font-light text-white mb-10">
            <span className="font-bold text-[#0082ca]">Nossos clientes</span> confiam na Kronox
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="w-32 h-20 bg-white/5 rounded-lg border border-white/10 p-4 flex items-center justify-center grayscale hover:grayscale-0 hover:bg-white/10 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={50}
                  className="object-contain max-h-full"
                />
              </div>
            ))}
          </div>

          <p className="text-white/50 text-sm mt-10">
            E muitas outras empresas que já transformaram sua operação com a Kronox.
          </p>
        </motion.div>
      </div>
    </section>
  );
}