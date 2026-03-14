import { useState } from 'react';
export default function ModalForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    //lógica do modal
    e.preventDefault();
    const whatsMessage = `Cotação Personalizada -
    Nome : ${formData.name}
    Email : ${formData.email}
    Empresa : ${formData.company}
    Mensagem: ${formData.message}`
    const whatsNumber = '5513991621955'
    const whatsUrl = `https://wa.me/${whatsNumber}?text=${encodeURIComponent(whatsMessage)}`;
    window.open(whatsUrl, '_blank');
    console.log('Form enviado:', formData);
    setSubmitted(true);

    
    // Fecha o modal após 3 segundos
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        interest: '',
        message: ''
      });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop com blur */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container - Centralizado */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto transform transition-all">
          
          {/* Header com gradiente */}
          <div className="relative bg-gradient-to-r from-blue-900 to-slate-800 rounded-t-2xl p-6">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl" />
            
            <div className="relative flex items-center justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Solicitar Cotação
                </h2>
                <p className="text-blue-100 text-sm mt-1">
                  Preencha os dados abaixo e retornaremos em até 24h
                </p>
              </div>
              
              {/* Botão fechar */}
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl p-2 transition-all duration-300"
                aria-label="Fechar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Corpo do Modal */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {submitted ? (
              /* Mensagem de Sucesso */
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Solicitação Enviada!
                </h3>
                <p className="text-slate-500 mb-4">
                  Obrigado pelo contato, <span className="font-semibold text-orange-500">{formData.name}</span>.
                </p>
                <p className="text-sm text-slate-400">
                  Nossa equipe retornará em breve.
                </p>
              </div>
            ) : (
              /* Formulário */
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Grid 2 colunas no desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Nome */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Nome completo <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Digite seu nome completo"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      E-mail <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="seu@email.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                    />
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Telefone / WhatsApp <span className="text-orange-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(11) 99999-8888"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da sua empresa"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                    />
                  </div>

                  {/* Interesse */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Principal interesse <span className="text-orange-500">*</span>
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
                    >
                      <option value="" disabled>Selecione uma opção</option>
                      <option>Cotação de produtos</option>
                      <option>Parceria comercial</option>
                      <option>Suporte técnico</option>
                      <option>Projeto personalizado</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Mensagem <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Descreva sua necessidade ou projeto..."
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none"
                    />
                  </div>
                </div>

                {/* Checkbox de consentimento */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-500">
                    Concordo em receber comunicações e estou ciente da{' '}
                    <a href="#" className="text-orange-500 hover:text-orange-600 underline">
                      Política de Privacidade
                    </a>
                  </label>
                </div>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-400/40"
                  >
                    Enviar Solicitação
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 border-2 border-gray-200 hover:border-gray-300 text-slate-600 font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:bg-gray-50"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Footer com info de segurança */}
          <div className="border-t border-gray-100 p-4 bg-gray-50 rounded-b-2xl">
            <p className="text-xs text-slate-400 text-center flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Seus dados estão seguros e não serão compartilhados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

