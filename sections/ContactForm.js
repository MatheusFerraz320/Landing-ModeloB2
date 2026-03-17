import { useState } from "react";
import { UtmHook } from "../hooks/UtmHook"; 
import { motion } from "framer-motion";
import { fadeUpFast, inViewViewport } from "@/utils/motion";
import { sendToRd } from "@/lib/rdStation";

const inputClass =
  "w-full rounded-xl border border-slate-200/90 bg-white/90 px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0082ca] focus:border-transparent transition";

export default function ContactForm() {
  const utmParams = UtmHook();
  
  const [form, setForm] = useState(() => ({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    finality: "",   
    product: "",
    utm_source: utmParams.utm_source || "",
    utm_medium: utmParams.utm_medium || "",
    ad_id: utmParams.ad_id || "",
    utm_campaign: utmParams.utm_campaign || "",
    utm_term: utmParams.utm_term || "",
    utm_content: utmParams.utm_content || ""
  }));
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await sendToRd({
        name: form.name,
        phone: form.phone,
        email: form.email,
        company: form.company,
        product: form.product,
        finality: form.finality,
        utmParams: {
          utm_source: form.utm_source,
          utm_medium: form.utm_medium,
          utm_campaign: form.utm_campaign,
          utm_term: form.utm_term,
          utm_content: form.utm_content,
          ad_id: form.ad_id,
        },
      });
      setSubmitted(true);
    } catch (err) {
      setError("Erro ao enviar. Tente novamente ou ligue para (19) 3450-7396.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-8 h-72 w-72 rounded-full bg-[#0082ca]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#a52727]/10 blur-3xl" />
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-10 sm:mb-14 relative"
          initial="hidden"
          whileInView="show"
          viewport={inViewViewport}
          variants={fadeUpFast}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/40 px-5 py-2 mb-6 shadow-[0_18px_60px_rgba(8,15,30,0.12)] backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#0082ca] animate-pulse" />
            <span className="text-sm font-semibold text-slate-900 tracking-[0.24em]">
              FALE COM UM ESPECIALISTA
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Pronto para transformar sua operação?
          </h2>
          <p className="text-slate-700 text-lg max-w-xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas para oferecer a solução ideal.
          </p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
         
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="rounded-2xl border border-slate-200 bg-white/75 p-6 sm:p-8 backdrop-blur-md text-slate-900 shadow-[0_18px_55px_rgba(15,23,42,0.12)]">
              <h3 className="font-bold text-lg mb-6 text-slate-900">Canais de atendimento</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0082ca]/10 flex items-center justify-center flex-shrink-0 text-[#0082ca]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm">+55 (19) 3450-7396</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0082ca]/10 flex items-center justify-center flex-shrink-0 text-[#0082ca]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm">contato@kronox.com.br</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0082ca]/10 flex items-center justify-center flex-shrink-0 text-[#0082ca]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm">São Paulo, SP — Brasil</span>
                </li>
              </ul>
              <hr className="border-slate-200 my-7" />
              <p className="text-slate-600 text-sm leading-relaxed">
                Atendemos de <strong className="text-slate-900">segunda a sexta</strong>, das 8h às 18h. Respondemos todas as solicitações em até 24 horas úteis.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                <svg className="w-4 h-4 text-[#0082ca]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Atendimento 100% seguro e confidencial</span>
              </div>
            </div>
          </div>

          
          <motion.div
            className="w-full flex-1"
            initial="hidden"
            whileInView="show"
            viewport={inViewViewport}
            variants={fadeUpFast}
          >
            {submitted ? (
              <div className="rounded-2xl p-8 sm:p-12 border border-slate-200 bg-white/80 backdrop-blur-md shadow-[0_18px_55px_rgba(15,23,42,0.12)] text-center text-slate-900">
                <div className="w-16 h-16 bg-[#0082ca]/20 rounded-full flex items-center justify-center mx-auto mb-5 ring-1 ring-[#0082ca]/30">
                  <svg className="w-8 h-8 text-[#0082ca]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitação enviada!</h3>
                <p className="text-slate-700">
                  Obrigado pelo contato, <strong>{form.name}</strong>. Nossa equipe retornará em breve.
                </p>
                {process.env.NODE_ENV === 'development' && (
                  <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-lg text-left text-xs">
                    <p className="font-semibold text-slate-900">UTMs capturadas:</p>
                    <p>Source: {form.utm_source || 'direto'}</p>
                    <p>Medium: {form.utm_medium || 'direto'}</p>
                    <p>Campaign: {form.utm_campaign || 'não definida'}</p>
                  </div>
                )}
              </div>
            ) : (
              <form
                name="[b2] Form kronox"
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 
                bg-white/80 backdrop-blur-md p-6 sm:p-8 
                shadow-[0_18px_55px_rgba(15,23,42,0.12)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
              >
                <input type="hidden" name="utm_source" value={form.utm_source} />
                <input type="hidden" name="utm_medium" value={form.utm_medium} />
                <input type="hidden" name="ad_id" value={form.ad_id} />
                <input type="hidden" name="utm_campaign" value={form.utm_campaign} />
                <input type="hidden" name="utm_term" value={form.utm_term} />
                <input type="hidden" name="utm_content" value={form.utm_content} />
                
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Nome completo <span className="text-[#a52727]">*</span>
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
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                    E-mail <span className="text-[#a52727]">*</span>
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
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Telefone / WhatsApp
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(11) 9 9999-8888"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Empresa
                  </label>
                  <input
                    required
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                    className={inputClass}
                  />
                </div>

                
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Finalidade <span className="text-[#a52727]">*</span>
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="inline-flex items-center gap-2 text-slate-800">
                      <input
                        type="radio"
                        name="finality"
                        value="consumo"
                        checked={form.finality === "consumo"}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 accent-[#0082ca]"
                      />
                      <span>Para consumo</span>
                    </label>
                    <label className="inline-flex items-center gap-2 text-slate-800">
                      <input
                        type="radio"
                        name="finality"
                        value="revenda"
                        checked={form.finality === "revenda"}
                        onChange={handleChange}
                        className="h-4 w-4 accent-[#0082ca]"
                      />
                      <span>Para revenda</span>
                    </label>
                  </div>
                </div> 

                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Produto/serviço de interesse <span className="text-[#a52727]">*</span>
                  </label>
                  <textarea
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Descreva sua necessidade ou projeto..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                {error && (
                  <div className="sm:col-span-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                )}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full 
                    bg-gradient-to-r from-[#0082ca] 
                    to-[#0066a0] hover:from-[#0066a0]
                     hover:to-[#004b75] text-white font-bold 
                     text-lg py-4 rounded-xl shadow-[0_18px_45px_rgba(0,130,202,0.28)] 
                     transition-all duration-300 hover:scale-[1.01]
                     disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? "Enviando..." : "Enviar Solicitação"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}