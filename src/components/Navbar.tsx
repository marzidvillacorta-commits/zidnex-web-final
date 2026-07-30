"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-500 rounded-2xl ${
          scrolled ? "bg-white/70 backdrop-blur-md shadow-lg shadow-slate-200/50 border border-white/50" : "bg-transparent"
        }`}
      >
        <div className="px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-[family-name:var(--font-heading)] font-bold text-xl group-hover:bg-blue-600 transition-colors duration-500 shadow-md">
              Z
            </div>
            <div className="flex flex-col">
              <span className="font-[family-name:var(--font-heading)] font-bold text-xl leading-none tracking-tight text-slate-900">
                ZIDNEX
              </span>
              <span className="text-[0.6rem] font-semibold tracking-widest text-slate-500 uppercase">
                Digital
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 bg-white/50 px-6 py-2 rounded-full border border-slate-100">
            {["Servicios", "Proceso", "Portafolio"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a 
              href="https://wa.me/51965473567?text=Hola%20Zidnex%20Digital%2C%20quiero%20empezar%20un%20proyecto."
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-slate-900 text-white px-6 py-3 rounded-full hover:bg-blue-600 hover:shadow-md hover:shadow-blue-600/20 transition-all"
            >
              Iniciar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900 p-2 bg-white rounded-xl shadow-sm border border-slate-100"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-4 z-[60] bg-slate-900 text-white rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-800">
              <span className="font-[family-name:var(--font-heading)] font-bold text-2xl tracking-tight">ZIDNEX</span>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-800 rounded-full text-slate-300 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col justify-center px-10 gap-8">
              {["Servicios", "Proceso", "Portafolio"].map((item, i) => (
                <motion.a 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight hover:text-blue-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="https://wa.me/51965473567?text=Hola%20Zidnex%20Digital%2C%20quiero%20empezar%20un%20proyecto."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-8 text-center text-sm font-semibold bg-blue-600 text-white px-6 py-4 rounded-full"
              >
                Iniciar Proyecto
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
