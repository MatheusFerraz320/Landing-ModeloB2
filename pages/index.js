import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSection from "@/sections/HeroSection";

const AboutSection = dynamic(() => import("@/sections/AboutSection"));
const ProductLines = dynamic(() => import("@/sections/ProductLines"));
const Cases = dynamic(() => import("@/sections/Cases"));
const QualityBanner = dynamic(() => import("@/sections/QualityBanner"));
const FormRD = dynamic(() => import("@/sections/newForm"));
const CTASection = dynamic(() => import("@/sections/CTASection"));
const Footer = dynamic(() => import("@/components/Footer"));

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
