"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or rejected cookies
    const consent = localStorage.getItem("zidnex_cookie_consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setShow(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("zidnex_cookie_consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("zidnex_cookie_consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]"
        >
          <div className="container mx-auto px-4 py-3 md:py-3 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 relative">
            <button 
              onClick={handleDecline}
              className="absolute top-1 right-2 md:hidden text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-3 flex-1">
              <div className="bg-slate-100 p-1.5 rounded-full text-slate-500 shrink-0 hidden md:flex">
                <Cookie className="w-4 h-4" />
              </div>
              <div className="text-[13px] text-slate-500 leading-snug max-w-5xl pr-4 md:pr-0">
                Utilizamos cookies propias y de terceros para asegurar el correcto funcionamiento del sitio y entender cómo interactúas con él. 
                Al continuar navegando, aceptas su uso.{' '}
                <Link href="/legal/privacidad" className="text-slate-700 hover:text-blue-600 font-medium underline underline-offset-2 ml-1 transition-colors">
                  Ver Política de Privacidad
                </Link>
              </div>
            </div>

            <div className="flex w-full md:w-auto gap-2 shrink-0">
              <button
                onClick={handleDecline}
                className="flex-1 md:flex-none px-4 py-2 bg-transparent border border-slate-200 hover:bg-slate-50 text-slate-600 font-medium rounded-md transition-colors text-[13px]"
              >
                Rechazar
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-md transition-colors text-[13px]"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
