"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function FormRD() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    finality: "",
    message: "",
  });

  const [utm, setUtm] = useState({});

  // aptura UTMs da URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setUtm({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // =========================
      // 🔵 RD STATION
      // =========================
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

            // personalizados
            cf_product: form.product || "",
            cf_finality: form.finality || "",

            // UTMs
            ...utm,
          },
        }),
      });

      // =========================
      // 🟣 EMAIL
      // =========================
      await emailjs.send(
        "service_xxx",
        "template_xxx",
        {
          ...form,
          ...utm,
        },
        "public_key_xxx"
      );

      alert("Enviado com sucesso 🚀");

    } catch (err) {
      console.error(err);
      alert("Erro ao enviar");
    }
  };

  return (
    <motion.section
      id="rd-form"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-16 flex justify-center"
    >
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">

        <input
          placeholder="Nome"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Telefone"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input
          placeholder="Empresa"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />

        <input
          placeholder="Produto"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, product: e.target.value })}
        />

        <input
          placeholder="Finalidade"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, finality: e.target.value })}
        />

        <textarea
          placeholder="Mensagem"
          className="w-full p-2 border"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="w-full bg-black text-white p-2">
          Enviar
        </button>
      </form>
    </motion.section>
  );
}