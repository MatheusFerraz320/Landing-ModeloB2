import { useState } from 'react';
import { useUtmFromStorage } from '../hooks/UtmHook';

export default function ModalForm({ isOpen, onClose }) {
  const utmParams = useUtmFromStorage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: '',
    ...utmParams
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsMessage = `Cotação Personalizada -
    Nome: ${formData.name}
    Email: ${formData.email}
    Empresa: ${formData.company}
    Telefone: ${formData.phone}
    Interesse: ${formData.interest}
    Mensagem: ${formData.message}

    *DADOS DE ORIGEM*:
    UTM Source: ${formData.utm_source || 'direto'}
    UTM Medium: ${formData.utm_medium || 'direto'}
    UTM Campaign: ${formData.utm_campaign || 'não definida'}
    UTM Term: ${formData.utm_term || 'não definido'}
    UTM Content: ${formData.utm_content || 'não definido'}`;
    const whatsNumber = '5513991621955';
    window.open(`https://wa.me/${whatsNumber}?text=${encodeURIComponent(whatsMessage)}`, '_blank');

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        interest: '',
        message: '',
        ...utmParams
      });
      onClose();
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-auto transform transition-all">
          
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-900 to-slate-800 rounded-t-2xl p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Solicitar Cotação</h2>
            <p className="text-blue-100 text-sm mt-1">Preencha os dados abaixo e retornaremos em até 24h</p>
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-xl p-2 transition-all duration-300"
              aria-label="Fechar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Solicitação Enviada!</h3>
                <p className="text-slate-500 mb-4">Obrigado pelo contato, <span className="font-semibold text-orange-500">{formData.name}</span>.</p>
                <p className="text-sm text-slate-400">Nossa equipe retornará em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* UTMs hidden */}
                {Object.entries(utmParams).map(([key, value]) => (
                  <input key={key} type="hidden" name={key} value={value} />
                ))}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nome completo <span className="text-orange-500">*</span></label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Digite seu nome completo" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">E-mail <span className="text-orange-500">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="seu@email.com" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Telefone / WhatsApp <span className="text-orange-500">*</span></label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="(11) 99999-8888" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Empresa</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Nome da sua empresa" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Principal interesse <span className="text-orange-500">*</span></label>
                    <select name="interest" value={formData.interest} onChange={handleChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition">
                      <option value="" disabled>Selecione uma opção</option>
                      <option>Cotação de produtos</option>
                      <option>Parceria comercial</option>
                      <option>Suporte técnico</option>
                      <option>Projeto personalizado</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Mensagem <span className="text-orange-500">*</span></label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Descreva sua necessidade ou projeto..." className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition resize-none" />
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" id="consent" required className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400" />
                  <label htmlFor="consent" className="text-sm text-slate-500">
                    Concordo em receber comunicações e estou ciente da{' '}
                    <a href="#" className="text-red-500">Política de Privacidade</a>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button type="submit" className="flex-1 bg-red-500 text-white font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]">Enviar Solicitação</button>
                  <button type="button" onClick={onClose} className="flex-1 border-2 border-gray-200 hover:border-gray-300 text-slate-600 font-bold text-lg py-4 rounded-xl transition-all duration-300 hover:bg-gray-50">Cancelar</button>
                </div>
              </form>
            )}
          </div>

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