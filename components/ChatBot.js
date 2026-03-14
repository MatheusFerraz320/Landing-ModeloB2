"use client"

import { useState, useEffect, useRef } from "react"
import { FiSend, FiMessageCircle, FiUser, FiPhone, FiTarget, FiPackage } from "react-icons/fi"
import { BsChatDots, BsWhatsapp } from "react-icons/bs"
import { HiOutlineChatAlt2 } from "react-icons/hi"

export default function Chatbot() {
  const steps = [
    { 
      key: "servico", 
      question: "Seja bem-vindo! Qual serviço você procura?",
      icon: <FiPackage className="text-orange-500" />
    },
    { 
      key: "objetivo", 
      question: " Qual o objetivo do seu projeto?",
      icon: <FiTarget className="text-orange-500" />
    },
    { 
      key: "nome", 
      question: " Perfeito! Qual seu nome?",
      icon: <FiUser className="text-orange-500" />
    },
    { 
      key: "whatsapp", 
      question: "Para finalizar, qual seu WhatsApp?",
      icon: <FiPhone className="text-orange-500" />
    }
  ]

  const [stepIndex, setStepIndex] = useState(0)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [answers, setAnswers] = useState({})
  const [isTyping, setIsTyping] = useState(false)

  const chatRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    addBotMessage(steps[0].question)
    // Foca no input automaticamente
    setTimeout(() => inputRef.current?.focus(), 500)
  }, [])

  function addBotMessage(text) {
    setIsTyping(true)
    setTimeout(() => {
      setMessages(prev => [...prev, { type: "bot", text }])
      setIsTyping(false)
    }, 800)
  }

  function handleSend() {
    if (!input.trim()) return

    const currentStep = steps[stepIndex]

    // Adiciona mensagem do usuário
    setMessages(prev => [
      ...prev,
      { type: "user", text: input }
    ])

    const updated = {
      ...answers,
      [currentStep.key]: input
    }

    setAnswers(updated)
    setInput("")

    const nextStep = stepIndex + 1

    if (nextStep < steps.length) {
      setStepIndex(nextStep)
      addBotMessage(steps[nextStep].question)
    } else {
      const message = `
*Atendimento Personalizado - Site*

* Nome:* ${updated.nome}
* WhatsApp:* ${updated.whatsapp}
* Serviço:* ${updated.servico}
* Objetivo:* ${updated.objetivo}
`

      addBotMessage("✅ Perfeito! Redirecionando para nosso WhatsApp...")

      setTimeout(() => {
        window.open(
          `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`,
          "_blank"
        )
      }, 2000)
    }
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-5 flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center">
            <BsChatDots className="w-5 h-5 text-orange-400" />
          </div>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-base">Atendimento Online</h3>
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Online • Respondemos em minutos
          </p>
        </div>
        
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-orange-500/50" />
          <div className="w-2 h-2 rounded-full bg-orange-500/30" />
          <div className="w-2 h-2 rounded-full bg-orange-500/10" />
        </div>
      </div>

      {/* Chat Area */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-gray-50 to-white"
        style={{ minHeight: "320px", maxHeight: "320px" }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-slideIn`}
          >
            {/* Avatar  */}
            {msg.type === "bot" && (
              <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center mr-2 flex-shrink-0 self-end mb-1">
                <HiOutlineChatAlt2 className="w-4 h-4 text-orange-500" />
              </div>
            )}
            
            <div
              className={`px-4 py-3 rounded-2xl text-sm max-w-[85%] shadow-sm ${
                msg.type === "user"
                  ? "bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-br-none"
                  : "bg-white border border-gray-100 rounded-bl-none"
              }`}
            >
              {msg.text}
              
              {/* Horário da mensagem (simulado) */}
              <span className={`text-[10px] block mt-1 ${
                msg.type === "user" ? "text-slate-400" : "text-slate-400"
              }`}>
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            
            {/* Avatar para mensagens do usuário */}
            {msg.type === "user" && (
              <div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center ml-2 flex-shrink-0 self-end mb-1">
                <FiUser className="w-4 h-4 text-slate-600" />
              </div>
            )}
          </div>
        ))}
        
        {/* Indicador de digitação */}
        {isTyping && (
          <div className="flex justify-start animate-slideIn">
            <div className="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center mr-2">
              <HiOutlineChatAlt2 className="w-4 h-4 text-orange-500" />
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-none px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input User */}
      <div className="p-4 border-t border-gray-100 bg-white">
        <div className="flex items-center gap-2 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all duration-200">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Digite sua resposta..."
            className="flex-1 bg-transparent px-4 py-3 text-sm outline-none"
          />
          
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`mr-2 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
              input.trim()
                ? "bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-500/25"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiSend className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}