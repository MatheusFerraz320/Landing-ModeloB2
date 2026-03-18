import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* ✅ Preload para LCP image - Hero */}
        <link rel="preload" as="image" href="/Hero.webp" />
        
        {/* ✅ Preconnect para Google Tag Manager */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />

        {/* GTM: iframe noscript fallback (apenas para browsers sem JS) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZPD6JC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </Html>
  );
}