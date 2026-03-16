import Head from "next/head";
import HeroSection from "@/sections/HeroSection";
import Cases from "@/sections/Cases";
import QualityBanner from "@/sections/QualityBanner";
import ProductLines from "@/sections/ProductLines";
import AboutSection from "@/sections/AboutSection";
import ContactForm from "@/sections/ContactForm";
import CTASection from "@/sections/CTASection";
import Footer from "@/components/Footer";
import WhatsButton from "@/components/WhatsButton";

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
        {/* 1. Hero / Header */}
        <HeroSection />
 
        {/* 2. Sobre / conheça mais */}
        <AboutSection />

        {/* 3. Linha de Produtos */}
        <ProductLines />
        
        {/* 4. Marcas Parceiras — carrossel */}
        <Cases />

        {/* 5. Tira de qualidade com CTA */}
        <QualityBanner />

        {/* 6. Formulário de Contato / Cotação */}
        <ContactForm />

        {/* 7. CTA Final */}
        <CTASection />
      </main>

      {/* 8. Footer */}
      <Footer />
      <WhatsButton />
    </>
  );
}
