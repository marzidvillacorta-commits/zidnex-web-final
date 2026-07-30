"use client";

import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between pt-32 pb-10 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] overflow-hidden">
      
      {/* Soft glowing orb in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Header / Kicker */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-blue-600 rounded-full" />
          </div>
          <p className="text-lg md:text-xl text-slate-700 leading-snug font-medium">
            Somos un estudio de ingeniería digital creando plataformas a medida, catálogos e-commerce y sistemas eficientes.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-right"
        >
          <a
            href="https://wa.me/51965473567?text=Hola%20Zidnex%20Digital%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 bg-slate-900 text-white px-8 py-4 rounded-full shadow-lg shadow-slate-900/20 hover:bg-blue-600 hover:shadow-blue-600/30 transition-all duration-500"
          >
            <span className="font-semibold text-sm uppercase tracking-wider">Iniciar proyecto</span>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-[-45deg] transition-transform duration-500">
              <ArrowDownRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>
      </div>

      {/* Elegant Typography Hero */}
      <div className="w-full flex-1 flex flex-col justify-end pb-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full px-6 md:px-12"
        >
          <h1 
            className="font-[family-name:var(--font-heading)] font-semibold text-slate-900 leading-[0.85] tracking-tight w-full text-center"
            style={{ fontSize: "clamp(3.5rem, 12vw, 15rem)" }}
          >
            Sistemas
          </h1>
          <h1 
            className="font-[family-name:var(--font-heading)] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 leading-[0.85] tracking-tight w-full text-center"
            style={{ fontSize: "clamp(3.5rem, 12vw, 15rem)" }}
          >
            Digitales
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
