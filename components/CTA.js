export default function CTA() {
  return (
    <section className="py-24 bg-indigo-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Pronto para transformar seu negócio?
        </h2>
        <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
          Junte-se a centenas de empresas que já estão crescendo com o ModeloB2.
          Comece gratuitamente hoje mesmo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Começar Gratuitamente
          </a>
          <a
            href="#features"
            className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors"
          >
            Ver Recursos
          </a>
        </div>
      </div>
    </section>
  );
}
