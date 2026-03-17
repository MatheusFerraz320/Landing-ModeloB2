import { useState, useEffect } from 'react';

export function UtmHook() {
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const params = {
      ad_id: urlParams.get('ad_id') || 'Erro: ad_id não encontrado',
      utm_source: urlParams.get('utm_source') || 'Erro: utm_source não encontrado',
      utm_medium: urlParams.get('utm_medium') || 'Erro: utm_medium não encontrado',
      utm_campaign: urlParams.get('utm_campaign') || 'Erro: utm_campaign não encontrado',
      utm_term: urlParams.get('utm_term') || 'Erro: utm_term não encontrado',
      utm_content: urlParams.get('utm_content') || 'Erro: utm_content não encontrado',
    };

    setUtmParams(params);
    
    // salvar no navegador para persistencia
    sessionStorage.setItem('utm_params', JSON.stringify(params));
  }, []);

  return utmParams;
}

// hooks/useUtmFromStorage.js (para modais)
export function useUtmFromStorage() {
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    const saved = sessionStorage.getItem('utm_params');
    if (saved) {
      setUtmParams(JSON.parse(saved));
    }
  }, []);

  return utmParams;
}

