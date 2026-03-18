// ✅ Exemplos de Lazy Loading para reduzir JS não utilizado

// ANTES (Carrega tudo na página inicial):
// import ModalForm from "@/components/ModalForm";
// import WhatsButton from "@/components/WhatsButton";

// DEPOIS (Carrega apenas quando necessário):

import dynamic from 'next/dynamic';

// ✅ Lazy load com fallback
export const ModalForm = dynamic(() => import("@/components/ModalForm"), {
  loading: () => <div />, // Skeleton ou vazio
  ssr: false, // Não renderizar no servidor (reduz HTML size)
});

export const WhatsButton = dynamic(() => import("@/components/WhatsButton"), {
  ssr: false,
});

// ✅ Lazy load para Heavy Animations (framer-motion é pesado)
export const CTASection = dynamic(() => import("@/sections/CTASection"), {
  loading: () => <div style={{ height: "400px" }} />,
});

export const ProductLines = dynamic(() => import("@/sections/ProductLines"), {
  loading: () => <div style={{ height: "600px" }} />,
});

// ✅ Lazy load para Carousel (Swiper é pesado ~40kb)
export const CasesCarousel = dynamic(() => import("@/sections/Cases"), {
  loading: () => <div style={{ height: "500px", background: "#f0f0f0" }} />,
  ssr: false,
});

// USO NAS PÁGINAS:
// import { ModalForm, WhatsButton } from "@/lib/dynamicLoading";
// 
// Isso reduzirá o bundle inicial em ~50-100kb
