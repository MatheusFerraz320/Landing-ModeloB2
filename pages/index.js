import Head from "next/head";
import HeroSection from "@/sections/HeroSection";
import Cases from "@/sections/Cases";
import QualityBanner from "@/sections/QualityBanner";
import ProductLines from "@/sections/ProductLines";
import AboutSection from "@/sections/AboutSection";
import ContactForm from "@/sections/ContactForm";
import CTASection from "@/sections/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>ModeloB2 — Soluções Industriais de Alta Performance</title>
        <meta
          name="description"
          content="Soluções industriais certificadas. Componentes, tubulações, painéis elétricos e mais. Solicite sua cotação."
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

        {/* 6. Contact Form / Quote */}
        <ContactForm />

        {/* 7. Final CTA */}
        <CTASection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </>
  );
}
