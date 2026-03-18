import "@/styles/globals.css";

import Script from "next/script";

import { LazyMotion, domAnimation } from "framer-motion";

export function reportWebVitals(metric) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", metric.name, {
      event_category: "Web Vitals",
      value: Math.round(metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

export default function App({ Component, pageProps }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {/*GTM*/}
      <Script
        id="gtm-script"
        strategy="lazyOnload" 
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s);
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-WZPD6JC');`,
        }}
      />

      <Component {...pageProps} />
    </LazyMotion>
  );
}