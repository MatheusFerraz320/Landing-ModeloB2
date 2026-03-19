import "@/styles/globals.css";
import Script from "next/script";
import { LazyMotion, domAnimation } from "framer-motion";



export default function App({ Component, pageProps }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {/* GTM principal - Carregamento via interação para não bloquear o Lighthouse */}
      <Script
        id="gtm-script"
        strategy="afterInteractive" 
        dangerouslySetInnerHTML={{
          __html: `
            let gtmLoaded = false;
            function loadGTM() {
              if (gtmLoaded) return;
              gtmLoaded = true;
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s);
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WZPD6JC');
              
              // Remove events once loaded
              window.removeEventListener('scroll', loadGTM);
              window.removeEventListener('mousemove', loadGTM);
              window.removeEventListener('touchstart', loadGTM);
            }
            
            // Load on interaction to protect Lighthouse scores
            window.addEventListener('scroll', loadGTM, { passive: true });
            window.addEventListener('mousemove', loadGTM, { passive: true });
            window.addEventListener('touchstart', loadGTM, { passive: true });
            
            // Fallback load after 5 seconds if no interaction
            setTimeout(loadGTM, 5000);
          `,
        }}
      />

      {/* Script de Monitoramento do RD Station */}
      <Script
        id="rd-station-tracking"
        strategy="afterInteractive"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/b49922e23ecdb074ee8c6562d96c06de-loader.js"
      />

      <Component {...pageProps} />
    </LazyMotion>
  );
}