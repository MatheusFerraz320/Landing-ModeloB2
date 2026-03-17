import { useState, useEffect } from 'react';

const RD_LOADER_ID = 'rdstation-loader';
const RD_LOADER_SRC = 'https://d335luupugsy2.cloudfront.net/js/loader-scripts/f89894fe-0a6a-4d2b-bd89-d8508a3284d8-loader.js';
const RD_BUTTON_ID = 'rd-floating_button-ly4393ic';
let rdLoaderPromise;

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

function ensureRDLoader() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (document.getElementById(RD_BUTTON_ID)) return Promise.resolve();
  if (rdLoaderPromise) return rdLoaderPromise;

  rdLoaderPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById(RD_LOADER_ID);

    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('RD loader failed')), { once: true });
      setTimeout(resolve, 1200);
      return;
    }

    const script = document.createElement('script');
    script.id = RD_LOADER_ID;
    script.src = RD_LOADER_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('RD loader failed'));
    document.body.appendChild(script);
  });

  return rdLoaderPromise;
}

export async function handleRDClick(source = 'site_cta') {
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

  try {
    await ensureRDLoader();
  } catch {
    return;
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
