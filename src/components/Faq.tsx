"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Puedo administrar mi web desde el celular?",
    answer: "Sí. Cuando el proyecto incluye un panel administrable, podrás actualizar la información principal desde tu celular o computadora."
  },
  {
    question: "¿Los pedidos pueden llegar a WhatsApp?",
    answer: "Sí. Podemos preparar un flujo para que el cliente seleccione productos y te envíe el pedido ordenado directamente a WhatsApp."
  },
  {
    question: "¿Necesito dominio y hosting?",
    answer: "Sí, y te orientamos para elegirlos y configurarlos correctamente a nombre de tu negocio."
  },
  {
    question: "¿Puedo empezar con algo simple y luego mejorarlo?",
    answer: "Claro. Podemos comenzar con lo esencial y dejar una base preparada para agregar funciones cuando las necesites."
  },
  {
    question: "¿Dan soporte después de entregar?",
    answer: "Sí. Incluimos orientación inicial y soporte según el alcance acordado para que puedas empezar con tranquilidad."
  },
  {
    question: "¿Cuánto demora crear una web o sistema?",
    answer: "Depende del alcance. Una web sencilla puede tomar algunas semanas; un catálogo o sistema requiere una estimación después de conocer sus funciones."
  }
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
      
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-slate-400 font-medium text-lg">
              Respuestas claras antes de empezar a trabajar juntos.
            </p>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-slate-800/50 border ${openIdx === idx ? 'border-blue-500/50 shadow-lg shadow-blue-900/20' : 'border-slate-800'} rounded-2xl overflow-hidden transition-all duration-300`}
              >
                <button 
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className={`font-[family-name:var(--font-heading)] text-lg md:text-xl font-bold transition-colors ${openIdx === idx ? 'text-blue-400' : 'text-slate-200'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 shrink-0 rounded-full bg-slate-800 flex items-center justify-center transition-transform duration-300 ${openIdx === idx ? 'rotate-180 bg-blue-600 text-white' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {openIdx === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-slate-400 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
