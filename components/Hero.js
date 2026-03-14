export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white pt-20"
    >
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Bem-vindo ao ModeloB2
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Sua empresa no{" "}
            <span className="text-indigo-600">próximo nível</span>
          </h1>
          <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto md:mx-0">
            Soluções modernas e inovadoras para impulsionar o crescimento do seu
            negócio B2B. Conectamos empresas e geramos resultados reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Comece Agora
            </a>
            <a
              href="#features"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-colors"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-indigo-400 rounded-3xl -rotate-3 opacity-20"></div>
            <div className="relative bg-indigo-600 rounded-3xl flex items-center justify-center w-full h-full shadow-2xl">
              <svg
                className="w-40 h-40 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
