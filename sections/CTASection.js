import { handleRDClick } from "@/hooks/UtmHook";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[linear-gradient(135deg,_#0f172a_0%,_#1e293b_58%,_#111827_100%)]">
      {/* Decorative shapes */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-500/14 blur-3xl pointer-events-none" />
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
         Fale com a Vazão e entenda qual solução {" "}
         <span className="text-red-500 block mt-1">Kronox</span>
         {" "}faz sentido para sua operação
        </h2>
        <p className="text-slate-200 text-xl mb-10 max-w-2xl mx-auto">
          Receba uma avaliação técnica da sua necessidade com foco em eficiência, confiabilidade e viabilidade de implantação.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => handleRDClick('final_cta')} className="bg-red-500 
              text-white font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_25px_rgba(239,68,68,0.7)] 
              hover:scale-105 transition-all duration-300">
                Quero falar com especialista
              </button>
        </div>
      </div>
    </section>

  );
}
