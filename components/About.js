const stats = [
  { value: "500+", label: "Empresas Atendidas" },
  { value: "98%", label: "Satisfação dos Clientes" },
  { value: "10M+", label: "Transações Processadas" },
  { value: "5 anos", label: "de Experiência" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Transformando negócios{" "}
              <span className="text-indigo-600">B2B</span> com tecnologia
            </h2>
            <p className="text-lg text-gray-500 mb-6 leading-relaxed">
              Somos uma empresa especializada em soluções B2B, com foco em
              ajudar empresas a crescer de forma sustentável. Nossa plataforma
              integra tecnologia de ponta com a expertise de nosso time para
              entregar resultados extraordinários.
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Com mais de 5 anos de mercado, atendemos centenas de empresas em
              todo o Brasil, sempre com o compromisso de inovar e superar as
              expectativas dos nossos clientes.
            </p>
            <a
              href="#contact"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Conheça Nossa História
            </a>
          </div>

          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl font-extrabold text-indigo-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
