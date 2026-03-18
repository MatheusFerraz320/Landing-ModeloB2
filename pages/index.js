import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSection from "@/sections/HeroSection";

const AboutSection = dynamic(() => import("@/sections/AboutSection"));
const ProductLines = dynamic(() => import("@/sections/ProductLines"));
const Cases = dynamic(() => import("@/sections/Cases"), {
  ssr: false,
  loading: () => <section className="h-[520px] bg-black" aria-hidden="true" />,
});
const QualityBanner = dynamic(() => import("@/sections/QualityBanner"), {
  ssr: false,
  loading: () => <section className="h-[320px] bg-white" aria-hidden="true" />,
});
const FormRD = dynamic(() => import("@/sections/newForm"), {
  ssr: false,
  loading: () => <section className="h-[500px] bg-slate-100" aria-hidden="true" />,
});
const CTASection = dynamic(() => import("@/sections/CTASection"), {
  ssr: false,
  loading: () => <section className="h-[260px] bg-white" aria-hidden="true" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <footer className="h-[220px] bg-slate-900" aria-hidden="true" />,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>ModeloB2 — Soluções Industriais de Alta Performance</title>
        <meta
          name="description"
          content="Soluções industriais certificadas. 
          Componentes, tubulações, painéis elétricos e mais. Solicite sua cotação."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* 1. Hero */}
        <HeroSection />
 
        {/* 2. About */}
        <AboutSection />

        {/* 3. Product Lines */}
        <ProductLines />
        
        {/* 4. Cases */}
        <Cases />

        {/* 5. Quality Banner with CTA */}
        <QualityBanner />

        <FormRD />

        {/* 7. Final CTA */}
        <CTASection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </>
  );
}
