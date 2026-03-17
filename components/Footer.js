import { motion } from "framer-motion";
import { fadeUp, inViewViewport } from "@/utils/motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-6">
      <motion.div
        className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2"
        initial="hidden"
        whileInView="show"
        viewport={inViewViewport}
        variants={fadeUp}
      >
        <p className="text-sm">
          &copy; {year} Vazão Engenharia e Montagem. Todos os direitos reservados.
        </p>
        <p className="text-sm">
          Desenvolvido por{" "}
          <a href="#" className="hover:text-white transition-colors font-semibold">
            b2 marketing industrial
          </a>
        </p>
      </motion.div>
    </footer>
  );
}