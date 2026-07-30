"use client";

import { useState, useEffect } from "react";
import { getProjects, createProject, deleteProject } from "@/actions/portfolio";
import { Plus, Trash2, ExternalLink } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string | null;
  tags: string;
};

export default function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "", image: "", link: "", tags: "" });

  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProject(formData);
    setIsAdding(false);
    setFormData({ title: "", description: "", image: "", link: "", tags: "" });
    loadProjects();
  };

  const handleDelete = async (id: string) => {
    if(confirm("¿Estás seguro de eliminar este proyecto?")) {
      await deleteProject(id);
      loadProjects();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Gestor de Portafolio</h1>
          <p className="text-slate-500">Añade o elimina proyectos para mostrarlos en tu web.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl flex items-center gap-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          {isAdding ? "Cancelar" : "Nuevo Proyecto"}
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 animate-in fade-in slide-in-from-top-4">
          <h2 className="text-xl font-bold mb-4">Añadir Proyecto</h2>
          <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input required placeholder="Título del proyecto" className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
            <input placeholder="Enlace (URL) - opcional" className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200" value={formData.link} onChange={e => setFormData({...formData, link: e.target.value})} />
            <input required placeholder="URL de la imagen (ej: https://...)" className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} />
            <input required placeholder="Etiquetas (ej: React, Node.js)" className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200" value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} />
            <textarea required placeholder="Breve descripción" className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 md:col-span-2" rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 px-6 rounded-xl transition-colors">Guardar Proyecto</button>
            </div>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
            <div className="h-40 bg-slate-100 relative">
              {p.image && <img src={p.image} alt={p.title} className="w-full h-full object-cover" />}
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-slate-900 leading-tight">{p.title}</h3>
                {p.link && <a href={p.link} target="_blank" className="text-blue-600 hover:text-blue-800"><ExternalLink className="w-4 h-4" /></a>}
              </div>
              <p className="text-sm text-slate-500 mb-4 flex-1">{p.description}</p>
              <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                <div className="text-xs font-medium text-slate-400 truncate max-w-[150px]">{p.tags}</div>
                <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {projects.length === 0 && !isAdding && (
          <div className="col-span-full py-12 text-center text-slate-500 border-2 border-dashed border-slate-200 rounded-2xl">
            Aún no tienes proyectos en tu portafolio. Haz clic en "Nuevo Proyecto".
          </div>
        )}
      </div>
    </div>
  );
}
