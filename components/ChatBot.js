import { useState, useEffect } from "react";
import { BsChatDots, BsWhatsapp } from "react-icons/bs";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiUser } from "react-icons/fi";

export default function Chatbot() {
  // Definição dos passos (steps)
  const steps = {
    inicio: {
      message: "Olá 👋 Vou te direcionar para o atendimento.",
      options: [
        { label: "Atendimento", next: "atendimento" },
        { label: "Orçamento", next: "orcamento" }
      ]
    },
    atendimento: {
      message: "Qual tipo de atendimento você precisa?",
      options: [
        { label: "Suporte técnico", next: "suporte" },
        { label: "Financeiro", next: "financeiro" }
      ]
    },
    orcamento: {
      message: "Qual tipo de projeto você deseja?",
      options: [
        { label: "Site institucional", next: "site" },
        { label: "Landing page", next: "landing" }
      ]
    },
    suporte: {
      message: "Perfeito! Vamos continuar no WhatsApp.",
      whatsapp: "5511999999999" // Substitua pelo número real
    },
    financeiro: {
      message: "Ok! Vamos falar no WhatsApp.",
      whatsapp: "5511999999999"
    },
    site: {
      message: "Ótima escolha! Vamos continuar no WhatsApp.",
      whatsapp: "5511999999999"
    },
    landing: {
      message: "Perfeito! Vamos falar no WhatsApp.",
      whatsapp: "5511999999999"
    }
  };

  const [step, setStep] = useState("inicio");
  const [messages, setMessages] = useState([]);
  const [answers, setAnswers] = useState([]); // Guarda as respostas do usuário
  const [isTyping, setIsTyping] = useState(false);

  // Inicializa com a mensagem de boas-vindas
  useEffect(() => {
    setMessages([{ type: "bot", text: steps.inicio.message }]);
  }, []);

  const handleOption = (option) => {
    // Adiciona a resposta do usuário às mensagens e ao histórico
    setMessages((prev) => [...prev, { type: "user", text: option.label }]);
    setAnswers((prev) => [...prev, option.label]);

    // Muda para o próximo passo
    setStep(option.next);

    // Simula o bot "digitando"
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: steps[option.next].message }
      ]);
      setIsTyping(false);
    }, 800);
  };

  const currentStep = steps[step];

  // Monta a mensagem para o WhatsApp com todas as respostas
  const getWhatsAppMessage = () => {
    const baseMessage = "Olá! Vim do chatbot e minhas escolhas foram:";
    const answersText = answers.join(" → "); // Ex: Atendimento → Suporte técnico
    return encodeURIComponent(`${baseMessage}\n${answersText}`);
  };

  const whatsappUrl = currentStep.whatsapp
    ? `https://wa.me/${currentStep.whatsapp}?text=${getWhatsAppMessage()}`
    : "#";

  return (
    <div className="w-[380px] h-[560px] bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden transition-all duration-300 ease-in-out">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
          <BsChatDots className="text-orange-400 text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">Atendimento Virtual</h3>
          <p className="text-xs text-slate-300 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Online • Respondemos em instantes
          </p>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scroll-smooth">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-end gap-2 ${
              msg.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.type === "bot" && (
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                <HiOutlineChatAlt2 className="text-orange-500 text-lg" />
              </div>
            )}
            <div
              className={`px-4 py-2 text-sm rounded-2xl max-w-[75%] shadow-sm ${
                msg.type === "user"
                  ? "bg-slate-800 text-white rounded-br-none"
                  : "bg-white border border-gray-200 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
            {msg.type === "user" && (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                <FiUser className="text-gray-700 text-lg" />
              </div>
            )}
          </div>
        ))}

        {/* Indicador de digitação */}
        {isTyping && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <HiOutlineChatAlt2 className="text-orange-500 text-lg" />
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none px-4 py-2 shadow-sm">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          </div>
        )}

        {/* OPÇÕES - exibe apenas se houver opções e não estiver em um passo final */}
        {currentStep.options && !currentStep.whatsapp && (
          <div className="flex flex-col gap-2 mt-4">
            {currentStep.options.map((option) => (
              <button
                key={option.label}
                onClick={() => handleOption(option)}
                className="text-left px-4 py-3 rounded-xl bg-white border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 text-sm font-medium shadow-sm hover:shadow"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {/* BOTÃO WHATSAPP - exibe quando o passo tem número */}
        {currentStep.whatsapp && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-4 bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
          >
            <BsWhatsapp size={20} />
            Continuar no WhatsApp
          </a>
        )}
      </div>

      {/* FOOTER OPCIONAL - créditos ou informação */}
      <div className="bg-gray-100 p-2 text-center text-xs text-gray-500 border-t">
        Atendimento 24h • Escolha uma opção para começar
      </div>
    </div>
  );
}