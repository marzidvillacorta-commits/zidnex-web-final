"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function LibroReclamaciones() {
  const [formData, setFormData] = useState({
    tipoDocumento: "DNI",
    numeroDocumento: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    correo: "",
    direccion: "",
    tipoReclamo: "Reclamo",
    detalle: "",
    pedido: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular el envío por WhatsApp al igual que el contacto
    const msg = `*NUEVO REGISTRO - LIBRO DE RECLAMACIONES*%0A%0A*Consumidor:* ${formData.nombres} ${formData.apellidos}%0A*Doc:* ${formData.tipoDocumento} ${formData.numeroDocumento}%0A*Contacto:* ${formData.correo} | ${formData.telefono}%0A%0A*Tipo:* ${formData.tipoReclamo}%0A*Detalle:* ${formData.detalle}%0A*Pedido:* ${formData.pedido}`;
    window.open(`https://wa.me/51925035273?text=${msg}`, "_blank");
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-8 mb-8">
            <div>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-slate-900 mb-2">Libro de Reclamaciones</h1>
              <p className="text-slate-500">Conforme a lo establecido en el Código de Protección y Defensa del Consumidor (Perú).</p>
            </div>
            <div className="mt-6 md:mt-0 bg-slate-100 p-4 rounded-xl text-sm text-slate-600 w-full md:w-64">
              <strong>Razón Social:</strong> VILLACORTA OBESO MARCOS ZIDANI<br/>
              <strong>RUC:</strong> 10710226721<br/>
              <strong>Domicilio:</strong> Caserío Las Delicias, Usquil, Otuzco - La Libertad.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 1. Datos del Consumidor */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                Identificación del Consumidor
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Nombres *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={formData.nombres} onChange={e => setFormData({...formData, nombres: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Apellidos *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={formData.apellidos} onChange={e => setFormData({...formData, apellidos: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Tipo de Doc. *</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.tipoDocumento} onChange={e => setFormData({...formData, tipoDocumento: e.target.value})}>
                    <option>DNI</option>
                    <option>CE</option>
                    <option>Pasaporte</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">N° de Documento *</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={formData.numeroDocumento} onChange={e => setFormData({...formData, numeroDocumento: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Celular / Teléfono *</label>
                  <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={formData.telefono} onChange={e => setFormData({...formData, telefono: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Correo electrónico *</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={formData.correo} onChange={e => setFormData({...formData, correo: e.target.value})} />
                </div>
              </div>
            </div>

            {/* 2. Detalle del Reclamo */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                Detalle de la Queja o Reclamo
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="tipo" value="Reclamo" checked={formData.tipoReclamo === "Reclamo"} onChange={() => setFormData({...formData, tipoReclamo: "Reclamo"})} />
                    <span className="text-sm font-medium text-slate-700">Reclamo (Disconformidad relacionada al servicio prestado)</span>
                  </label>
                </div>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="tipo" value="Queja" checked={formData.tipoReclamo === "Queja"} onChange={() => setFormData({...formData, tipoReclamo: "Queja"})} />
                    <span className="text-sm font-medium text-slate-700">Queja (Disconformidad no relacionada a los servicios prestados; malestar o descontento)</span>
                  </label>
                </div>

                <div className="space-y-1 pt-4">
                  <label className="text-sm font-medium text-slate-700">Detalle *</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={formData.detalle} onChange={e => setFormData({...formData, detalle: e.target.value})} />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Pedido / Solución esperada *</label>
                  <textarea required rows={2} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    value={formData.pedido} onChange={e => setFormData({...formData, pedido: e.target.value})} />
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm text-slate-600 space-y-2">
              <p>
                <strong>Nota 1:</strong> La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.
              </p>
              <p>
                <strong>Nota 2:</strong> ZIDNEX DIGITAL debe dar respuesta al reclamo o queja en un plazo legal no mayor a quince (15) días hábiles improrrogables, mediante comunicación al correo electrónico proporcionado.
              </p>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
              <Send className="w-5 h-5" />
              Enviar {formData.tipoReclamo}
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}
