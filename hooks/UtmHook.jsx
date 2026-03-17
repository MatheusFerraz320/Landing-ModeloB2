import { useState, useEffect } from 'react';
const RD_BUTTON_ID = 'rd-floating_button-ly4393ic';

const EMPTY_UTM = {
  ad_id: '',
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
};

function getUtmFromStorage() {
  if (typeof window === 'undefined') return EMPTY_UTM;

  try {
    const saved = sessionStorage.getItem('utm_params');
    if (!saved) return EMPTY_UTM;
    const parsed = JSON.parse(saved);
    return {
      ...EMPTY_UTM,
      ...parsed,
    };
  } catch {
    return EMPTY_UTM;
  }
}

export function UtmHook() {
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = new URLSearchParams(window.location.search);
    const params = {
      ad_id: urlParams.get('ad_id') || '',
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
    };

    setUtmParams(params);
    
    // salvar no navegador para persistencia
    sessionStorage.setItem('utm_params', JSON.stringify(params));
  }, []);

  return utmParams;
}

export function useUtmFromStorage() {
  const [utmParams, setUtmParams] = useState(EMPTY_UTM);

  useEffect(() => {
    setUtmParams(getUtmFromStorage());
  }, []);

  return utmParams;
}

export function pushLeadModalOpenEvent(source = 'lead_modal') {
  if (typeof window === 'undefined') return;

  const utmParams = getUtmFromStorage();

  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'lead_modal_opened',
      form_type: 'site_modal',
      source,
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      utm_term: utmParams.utm_term,
      utm_content: utmParams.utm_content,
      ad_id: utmParams.ad_id,
    });
  }
}

export function handleRDClick(source = 'site_cta') {
  if (typeof window === 'undefined') return;

  const utmParams = getUtmFromStorage();

  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'rd_form_opened',
      form_type: 'rd_station',
      source,
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      utm_term: utmParams.utm_term,
      utm_content: utmParams.utm_content,
      ad_id: utmParams.ad_id,
    });
  }

  const clickButton = () => {
    const button = document.getElementById(RD_BUTTON_ID);
    if (!button) return false;
    button.click();
    return true;
  };

  if (clickButton()) return;
  setTimeout(clickButton, 400);
  setTimeout(clickButton, 1000);
}
