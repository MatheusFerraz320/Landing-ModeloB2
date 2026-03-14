/* ─────────────────────────────────────────────────────
   ContactForm — Formulário de contato / cotação
   Personalize CONTACT_CONFIG abaixo.
───────────────────────────────────────────────────── */

import { useState } from "react";

const CONTACT_CONFIG = {
  sectionTitle: "Solicite sua Cotação",
  sectionSubtitle:
    "Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.",
  infoItems: [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "+55 (11) 9 9999-8888",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "contato@modelob2.com.br",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "São Paulo, SP — Brasil",
    },
  ],
};

const inputClass =
  "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition";

export default function ContactForm({
  sectionTitle = CONTACT_CONFIG.sectionTitle,
  sectionSubtitle = CONTACT_CONFIG.sectionSubtitle,
  infoItems = CONTACT_CONFIG.infoItems,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-orange-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">{sectionSubtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Info sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl p-8 text-white">
              <h3 className="font-bold text-lg mb-6">Fale conosco</h3>
              <ul className="space-y-5">
                {infoItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-blue-100 text-sm">{item.label}</span>
                  </li>
                ))}
              </ul>
              <hr className="border-white/10 my-7" />
              <p className="text-blue-200 text-sm leading-relaxed">
                Atendemos de <strong className="text-white">segunda a sexta</strong>, das 8h às 18h. Respondemos todas as
                solicitações em até 24 horas úteis.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitação enviada!</h3>
                <p className="text-slate-500">
                  Obrigado pelo contato, <strong>{form.name}</strong>. Nossa equipe retornará em breve.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Nome completo <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    E-mail <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@empresa.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(11) 9 9999-8888"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                    className={inputClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Assunto <span className="text-orange-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Selecione um assunto
                    </option>
                    <option>Cotação de produto</option>
                    <option>Parceria comercial</option>
                    <option>Suporte técnico</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Mensagem <span className="text-orange-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Descreva sua necessidade..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg py-4 rounded-xl shadow-md shadow-orange-200 transition-all duration-300 hover:scale-[1.01]"
                  >
                    Enviar Solicitação
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
