"use client";

import { useState, useEffect } from "react";
import { getSetting, saveSetting } from "@/actions/settings";
import { Save, CheckCircle2 } from "lucide-react";

export default function SettingsPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load initial settings
    const loadSettings = async () => {
      const dbEmail = await getSetting("contact_email");
      const dbPhone = await getSetting("contact_phone");
      setEmail(dbEmail || "marzidvillacorta@gmail.com"); // Fallback
      setPhone(dbPhone || "925035273");
    };
    loadSettings();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaved(false);
    
    await saveSetting("contact_email", email);
    await saveSetting("contact_phone", phone);
    
    setIsSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Configuraciones Generales</h1>
        <p className="text-slate-500">Administra los datos de contacto que se muestran en toda tu página web.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-8">
          <form onSubmit={handleSave} className="space-y-6 max-w-xl">
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Correo Electrónico Corporativo</label>
              <p className="text-xs text-slate-500 mb-2">Se mostrará en el pie de página y formularios.</p>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ej: hola@zidnexdigital.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Número de WhatsApp</label>
              <p className="text-xs text-slate-500 mb-2">Se usará para los botones de contacto y cotización rápida.</p>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ej: 925035273"
                required
              />
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button 
                type="submit"
                disabled={isSaving}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium py-3 px-6 rounded-xl flex items-center gap-2 transition-colors"
              >
                <Save className="w-4 h-4" />
                {isSaving ? "Guardando..." : "Guardar Cambios"}
              </button>

              {saved && (
                <span className="flex items-center gap-1 text-emerald-600 text-sm font-medium animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4" /> Guardado
                </span>
              )}
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
