"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  category?: string; // fallback for old data
  tags: string;
  image: string;
  link: string | null;
};

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/portfolio")
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProjects(data.projects);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="portafolio" className="bg-[#F8FAFC] py-32">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Casos Reales
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Sistemas que actualmente están procesando pedidos, automatizando flujos y escalando negocios reales.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 animate-pulse">
                <div className="aspect-[4/3] bg-slate-200" />
                <div className="p-8 flex flex-col flex-1">
                  <div className="h-6 bg-slate-200 rounded-full w-3/4 mb-4" />
                  <div className="h-4 bg-slate-200 rounded-full w-full mb-2" />
                  <div className="h-4 bg-slate-200 rounded-full w-5/6 mb-8" />
                  <div className="h-4 bg-slate-200 rounded-full w-1/3 mt-auto" />
                </div>
              </div>
            ))
          ) : (
            projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 border border-slate-200 hover:border-blue-200 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {project.tags || project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Ver Proyecto
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
