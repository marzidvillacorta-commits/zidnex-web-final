"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-32 relative border-t border-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold text-sm mb-6 border border-slate-200">
            Sobre Nosotros
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Construyendo el futuro digital de empresas con ambición.
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Entendemos que el software no es un gasto, es una inversión para escalar. Nuestro enfoque es 100% estratégico: resolvemos problemas de negocio a través de ingeniería de software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Misión */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-blue-600 mb-8">
              <Target className="w-6 h-6" />
            </div>
            
            <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-900 mb-4">
              Nuestra Misión
            </h3>
            
            <p className="text-slate-600 leading-relaxed font-medium">
              Construir infraestructura tecnológica sólida que elimine cuellos de botella y permita a las empresas operar y escalar con máxima eficiencia, automatizando tareas manuales y digitalizando sus procesos clave.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-indigo-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 text-indigo-600 mb-8">
              <Eye className="w-6 h-6" />
            </div>
            
            <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-900 mb-4">
              Nuestra Visión
            </h3>
            
            <p className="text-slate-600 leading-relaxed font-medium">
              Convertirnos en el socio de ingeniería digital más confiable y referente para empresas de la región, destacando siempre por entregar software robusto que genera resultados de negocio reales y medibles.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
