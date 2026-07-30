"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  { 
    id: "01", 
    title: "Descubrimiento", 
    description: "Profundizamos en la lógica de negocio, las necesidades del usuario y las restricciones técnicas antes de escribir una sola línea de código.",
    icon: Search
  },
  { 
    id: "02", 
    title: "Ingeniería & Diseño", 
    description: "Diseñamos la arquitectura del sistema y la interfaz de usuario en paralelo, asegurando que el producto final sea hermoso y escalable.",
    icon: PenTool
  },
  { 
    id: "03", 
    title: "Despliegue", 
    description: "Pruebas rigurosas, optimización de rendimiento y un lanzamiento fluido con soporte continuo para tu equipo.",
    icon: Rocket
  }
];

export default function Process() {
  return (
    <section id="proceso" className="bg-slate-900 text-white py-32 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-2xl mb-24">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Nuestro Método
          </h2>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            Un proceso estructurado para transformar complejidad en simplicidad. Sin sorpresas, solo resultados de ingeniería precisos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative flex flex-col group"
              >
                {/* Step Connector Line (Desktop only) */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-16 right-[-2rem] h-[1px] bg-gradient-to-r from-slate-700 to-transparent" />
                )}

                <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 mb-8 relative z-10 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-500 shadow-lg">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-slate-500 text-sm font-semibold">[{step.id}]</span>
                  {step.title}
                </h3>
                
                <p className="text-slate-400 font-medium leading-relaxed pr-6">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
