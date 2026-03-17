import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        id="rdstation-loader"
        src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/f89894fe-0a6a-4d2b-bd89-d8508a3284d8-loader.js"
        strategy="lazyOnload"
      />
    </>
  );
}
