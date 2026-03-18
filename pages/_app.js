import "@/styles/globals.css";
import { useEffect } from "react";

const UTM_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "ad_id"];

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const stored = JSON.parse(localStorage.getItem("utm_params") || "{}");
    const merged = { ...stored };

    UTM_FIELDS.forEach((field) => {
      const val = urlParams.get(field);
      if (val) {
        merged[field] = val;
        localStorage.setItem(field, val);
      }
    });
    localStorage.setItem("utm_params", JSON.stringify(merged));

    // Reinjecta UTMs na URL para o script do RD Station ler automaticamente
    let changed = false;
    UTM_FIELDS.forEach((field) => {
      if (merged[field] && !urlParams.get(field)) {
        urlParams.set(field, merged[field]);
        changed = true;
      }
    });

    if (changed) {
      const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
      window.history.replaceState({}, "", newUrl);
    }
  }, []);

  return <Component {...pageProps} />;
}
