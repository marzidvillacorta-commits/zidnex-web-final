"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    service: "Web Corporativa",
    details: ""
  });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola Zidnex Digital, mi nombre es ${formData.name}.%0A%0AEstoy interesado en: ${formData.service}.%0A%0ATe cuento un poco más de lo que necesito:%0A${formData.details}`;
    window.open(`https://wa.me/51965473567?text=${text}`, "_blank");
  };

  return (
    <section className="bg-[#F8FAFC] py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-6 border border-blue-100">
              Cotización Rápida
            </div>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8">
              Cuéntanos tu idea.
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12">
              Te orientamos con una solución clara según lo que vendes, cómo atiendes y qué necesitas mejorar en tu proceso actual.
            </p>

            <div className="space-y-6">
              {[
                "1. Qué ofrece tu negocio",
                "2. Cómo atiendes actualmente",
                "3. Qué te gustaría mejorar"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-sm">
                    ✓
                  </div>
                  <p className="font-semibold text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-slate-900 mb-8">
              Solicitar Presupuesto
            </h3>
            
            <form onSubmit={handleSend} className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Tu Nombre / Empresa</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900"
                  placeholder="Ej. Juan Pérez - Mi Tienda"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Servicio de interés</label>
                <select 
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900 appearance-none"
                >
                  <option>Web Corporativa</option>
                  <option>Catálogo Digital</option>
                  <option>Sistema a Medida</option>
                  <option>Automatización simple</option>
                  <option>Aún no lo sé, busco asesoría</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Cuéntanos más de lo que deseas</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.details}
                  onChange={e => setFormData({...formData, details: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-slate-900 resize-none"
                  placeholder="Explícanos brevemente tu idea o necesidad actual..."
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold rounded-xl px-6 py-4 flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all active:scale-[0.98]"
              >
                <span>Enviar por WhatsApp</span>
                <Send className="w-5 h-5" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
