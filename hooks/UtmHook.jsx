import { useState, useEffect } from 'react';

export function UtmHook() {
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const params = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
    };

    setUtmParams(params);
    
    // usar modalForm
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