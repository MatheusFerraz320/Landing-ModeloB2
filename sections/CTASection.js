import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeUpFast, staggerContainer, inViewViewport } from '@/utils/motion';

const rdButton = () => {
  const rdForm = document.getElementById("rd-floating_button-ly4393ic");
  if (rdForm) rdForm.click();
};

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[linear-gradient(135deg,_#0f172a_0%,_#1e293b_58%,_#111827_100%)]">
      {/* Decorative shapes */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-500/14 blur-3xl pointer-events-none" />
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <motion.div
        className="relative max-w-6xl mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={inViewViewport}
        variants={staggerContainer}
      >
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div className="text-center lg:text-left space-y-6" variants={fadeUpFast}>
            <h2 className="text-3xl md:text-4xl font-black text-white ">
              A Vazão ajuda você a encontrar a solução{" "}
              <span className="text-red-500">Kronox</span>
              {" "}ideal para sua operação
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Da analise da necessidade à recomendação da melhor solução Kronox , a Vazão apoia sua operação com visão técnica e aplicação pratica.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start pt-4">
              <button
                onClick={rdButton}
                className="bg-red-500 text-white font-bold text-lg px-12 py-4 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:bg-red-600 hover:shadow-[0_0_40px_rgba(239,68,68,0.8)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Quero falar com especialista
              </button>
            </div>
          </motion.div>
          <motion.div className="flex justify-center pt-10" variants={fadeUpFast}>
            {/* Right: Logos Stack */}
            <div className="flex flex-col items-center gap-8">
              {/* Primary Logo */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-2xl -z-10" />
                <Image 
                  src="/Logo-Vazão-White.webp" 
                  alt="Vazão Logo" 
                  width={280}
                  height={120}
                  className="drop-shadow-2xl object-contain"
                  priority
                />
              </div>
              
              {/* Kronox Logo */}
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-2xl -z-10" />
                <Image 
                  src="/Kronox.webp" 
                  alt="Kronox Logo" 
                  width={300}
                  height={200}
                  className="drop-shadow-2xl object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>

  );
}
