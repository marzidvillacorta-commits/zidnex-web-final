"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Code, Smartphone, Database, Zap } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Software a Medida",
    description: "Sistemas CRM, Dashboards y herramientas internas construidas para escalar con tu operación. Diseñamos la arquitectura desde cero para que se adapte exactamente a tus procesos de negocio, eliminando cuellos de botella y trabajo manual.",
    icon: Database
  },
  {
    id: "02",
    title: "Webs Corporativas",
    description: "Plataformas de alta conversión con diseño UI/UX premium. Optimizadas para velocidad y SEO, diseñadas para captar leads de alto valor y posicionar tu marca como líder en su sector.",
    icon: Code
  },
  {
    id: "03",
    title: "Catálogos & E-Commerce",
    description: "Tiendas online robustas y catálogos digitales interactivos. Integra pasarelas de pago, gestión de inventario y pedidos directos a WhatsApp para una experiencia de compra fluida.",
    icon: Smartphone
  },
  {
    id: "04",
    title: "Automatización de Procesos",
    description: "Conectamos tus herramientas (WhatsApp, CRMs, Emails) para que operen de forma sincronizada. Implementamos flujos automáticos que ahorran cientos de horas a tu equipo operativo cada mes.",
    icon: Zap
  }
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 }
    }
  };

  return (
    <section id="servicios" className="bg-[#F8FAFC] py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
            Nuestras Soluciones
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Ingeniería digital para empresas exigentes.
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            No usamos plantillas genéricas. Construimos infraestructura sólida que resuelve problemas reales y genera retornos medibles.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIdx === idx;
            
            return (
              <motion.div 
                key={service.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-200 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-500 flex flex-col justify-between cursor-default"
                whileHover={{ y: -10 }}
              >
                {/* Animated glowing orb behind icon */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1.2 : 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 blur-2xl rounded-full pointer-events-none"
                />

                <div className="relative z-10 flex justify-between items-start mb-10">
                  <motion.div 
                    animate={{ 
                      backgroundColor: isHovered ? "#2563eb" : "#f8fafc",
                      color: isHovered ? "#ffffff" : "#475569"
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:border-blue-500"
                  >
                    <motion.div
                      animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    animate={{ x: isHovered ? -10 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-[family-name:var(--font-heading)] font-black text-slate-200 text-5xl tracking-tighter group-hover:text-blue-100"
                  >
                    {service.id}
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Animated bottom accent line */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-t-full origin-left"
                />
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  );
}
