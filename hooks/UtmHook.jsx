import { useState } from 'react';

function getUtmFromStorage() {
  if (typeof window === 'undefined') return {};

  try {
    const saved = localStorage.getItem('utm_params');
    if (!saved) return {};
    return JSON.parse(saved);
  } catch (error) {
    console.log('Erro ao ler parâmetros UTM do localStorage', error);
    return {};
  }
}

function getUtmFromLocation() {
  if (typeof window === 'undefined') return {};

  const urlParams = new URLSearchParams(window.location.search);
  return {
    ad_id: urlParams.get('ad_id') || '',
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_term: urlParams.get('utm_term') || '',
    utm_content: urlParams.get('utm_content') || '',
  };
}

export function initializeUtmParams() {
  if (typeof window === 'undefined') return {};

  const params = getUtmFromLocation();
  localStorage.setItem('utm_params', JSON.stringify(params));
  return params;
}

export function UtmHook() {
  const [utmParams] = useState(() => initializeUtmParams());

  return utmParams;
}

export function useUtmFromStorage() {
  const [utmParams] = useState(() => getUtmFromStorage());

  return utmParams;
}
