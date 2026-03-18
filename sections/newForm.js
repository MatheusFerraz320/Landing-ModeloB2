"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function FormRD() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    product: "",
    email: "",
    phone: "",
    finality: "",
  });

  const [utm, setUtm] = useState({});
  const [loading, setLoading] = useState(false);

  // Captura UTMs da URL apenas na montagem do form
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setUtm({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      ad_id: params.get("ad_id") || "",
    });
  }, []);
  const whatsMsg = `Olá, gostaria de falar com um especialista da ModeloB2. Meu nome é 
  ${form.name} e estou interessado no produto ${form.product}. Poderiam me ajudar? vim da campanha 
  ${utm.utm_campaign || "orgânica"}.`;


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //  RD STATION
      await fetch("https://api.rd.services/platform/conversions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer b49922e23ecdb074ee8c6562d96c06de",
        },
        body: JSON.stringify({
          event_type: "CONVERSION",
          event_family: "CDP",
          payload: {
            conversion_identifier: "[B2] Form Kronox",

            // padrão
            name: form.name,
            email: form.email,
            phone: form.phone || "",
            company_name: form.company || "",

            //campos personalizados
            cf_product: form.product || "",
            cf_finality: form.finality || "",
            
            ...utm,
          },
        }),
      });

      // SEND EMAIL   
      await emailjs.send(
        "service_falje4g",
        "template_6wq37yv",
        {
          ...form,
          ...utm,
        },
        "61xYofVMBaMtGRdio"
      );
      console.log(`Formulário enviado: ${JSON.stringify(form)} com UTMs: ${JSON.stringify(utm)}`);
      setForm({
        name: "",
        company: "",
        product: "",
        email: "",
        phone: "",
        finality: "",
      });

    } catch (err) {
      console.error(err);
      alert("Erro ao enviar");
    } finally {
      setLoading(false);
    }
    window.open(`https://api.whatsapp.com/send?phone=5599199999999&text=${encodeURIComponent(whatsMsg)}`, "_blank");
  };

  return (
    <motion.section
      id="rd-form"
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-[#0082ca]/10 blur-3xl" />
        <div className="absolute -bottom-10 left-0 h-80 w-80 rounded-full bg-[#a52727]/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center rounded-full border 
            border-[#0082ca]/25 bg-[#0082ca]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-[#0082ca]">
              CONSULTORIA TECNICA
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-slate-900">
              Fale com um especialista e receba um plano para sua operacao
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mx-auto lg:mx-0">
              Conte os detalhes do seu cenario e retornamos com uma avaliacao tecnica, opcoes de produto e recomendacoes para implantacao.
            </p>
            <div className="mt-8 rounded-2xl border border-slate-300 bg-white/70 p-5 backdrop-blur-sm space-y-2">
              <p className="text-sm font-semibold text-slate-900">Vazão Engenharia</p>
              <p className="text-sm text-slate-700">Email: solucoes@mkt.vazao.com.br</p>
              <p className="text-sm text-slate-700">Telefone: TEL: 81992039379</p>
              <p className="text-sm text-slate-700">Av.Barão de Bonito 880 Brasilit Recife PE</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white/90 p-5 sm:p-7 shadow-[0_24px_60px_rgba(15,23,42,0.14)] backdrop-blur-md"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                placeholder="Nome"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0082ca]"
                onChange={handleChange}
              />

              <input
                name="company"
                value={form.company}
                placeholder="Empresa"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0082ca]"
                onChange={handleChange}
              />

              <input
                name="product"
                value={form.product}
                placeholder="Qual produto de interesse"
                required
                className="sm:col-span-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0082ca]"
                onChange={handleChange}
              />

              <input
                name="email"
                type="email"
                value={form.email}
                placeholder="Email"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0082ca]"
                onChange={handleChange}
              />

              <input
                name="phone"
                value={form.phone}
                placeholder="Telefone"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0082ca]"
                onChange={handleChange}
              />

              <div className="sm:col-span-2 rounded-xl border border-slate-200 px-4 py-3">
                <p className="text-sm font-semibold text-slate-800 mb-2">Finalidade</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="inline-flex items-center gap-2 text-slate-700">
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
                  <label className="inline-flex items-center gap-2 text-slate-700">
                    <input
                      type="radio"
                      name="finality"
                      value="revenda"
                      checked={form.finality === "revenda"}
                      onChange={handleChange}
                      required
                      className="h-4 w-4 accent-[#0082ca]"
                    />
                    <span>Para revenda</span>
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#0082ca] to-[#0066a0] 
              px-4 py-3 font-bold text-white transition-all duration-300 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
