"use client";
import { useState, useEffect } from 'react';

/**
 * Hook customizado para capturar, salvar e recuperar parâmetros UTM.
 * 
 * Como funciona:
 * 1. Ao carregar a página, ele verifica a URL em busca de UTMs.
 * 2. Se encontrar na URL, ele salva no `localStorage` para navegações futuras.
 * 3. Se não encontrar na URL, ele tenta resgatar do `localStorage` (caso o usuário tenha vindo de uma campanha antes).
 * 
 * Dessa forma, você nunca perde o tracking do RD Station, mesmo se o usuário navegar pelo site antes de preencher o formulário.
 */
export function useUtm() {
  const [utm, setUtm] = useState({});

  useEffect(() => {
    // Lista de todos os parâmetros que queremos mapear
    const utmKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "ad_id"
    ];

    const currentUtm = {};
    const params = new URLSearchParams(window.location.search);

    utmKeys.forEach(key => {
      // 1. Tenta pegar o valor diretamente da URL
      const urlValue = params.get(key);
      
      if (urlValue) {
        // Se existe na URL, salva no state e no hook de armazenamento (localStorage)
        currentUtm[key] = urlValue;
        localStorage.setItem(key, urlValue);
      } else {
        // 2. Se não tem na URL, tenta recuperar de um acesso anterior salvo no localStorage
        const storageValue = localStorage.getItem(key);
        currentUtm[key] = storageValue || "";
      }
    });

    // Atualiza o estado com os parâmetros processados
    setUtm(currentUtm);
  }, []); // Executa apenas uma vez na montagem do componente

  // Retorna o objeto completo para ser espalhado (spread) no payload da request
  return utm;
}
