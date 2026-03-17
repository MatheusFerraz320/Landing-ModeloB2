import Head from "next/head";
import dynamic from "next/dynamic";
import HeroSection from "@/sections/HeroSection";
const AboutSection = dynamic(() => import("@/sections/AboutSection"));
const ProductLines = dynamic(() => import("@/sections/ProductLines"));
const Cases = dynamic(() => import("@/sections/Cases"));
const QualityBanner = dynamic(() => import("@/sections/QualityBanner"));
const ContactForm = dynamic(() => import("@/sections/ContactForm"));
const CTASection = dynamic(() => import("@/sections/CTASection"));
import Footer from "@/components/Footer";
import { UtmHook } from "@/hooks/UtmHook";

export default function Home() {
  UtmHook();

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
