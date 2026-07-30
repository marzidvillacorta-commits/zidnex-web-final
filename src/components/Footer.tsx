import Link from "next/link";
import { getSetting } from "@/actions/settings";

export default async function Footer() {
  const email = await getSetting("contact_email") || "marzidvillacorta@gmail.com";
  const phone = await getSetting("contact_phone") || "925035273";
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-4 flex flex-col items-start">
            <a href="#" className="flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-[family-name:var(--font-heading)] font-bold text-xl shadow-lg shadow-blue-600/20">
                Z
              </div>
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-heading)] font-bold text-xl leading-none tracking-tight">
                  ZIDNEX
                </span>
                <span className="text-[0.6rem] font-semibold tracking-widest text-slate-400 uppercase">
                  Digital
                </span>
              </div>
            </a>
            <p className="text-slate-400 font-medium leading-relaxed max-w-sm text-sm">
              Construimos sistemas y herramientas de software a medida para empresas que buscan escalar su operación sin cuellos de botella.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col items-start">
            <h5 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-6 text-slate-200">Servicios</h5>
            <div className="flex flex-col gap-4">
              <a href="#servicios" className="text-slate-400 text-sm font-medium hover:text-blue-400 transition-colors">Software a Medida</a>
              <a href="#servicios" className="text-slate-400 text-sm font-medium hover:text-blue-400 transition-colors">Web Corporativa</a>
              <a href="#servicios" className="text-slate-400 text-sm font-medium hover:text-blue-400 transition-colors">E-Commerce</a>
              <a href="#servicios" className="text-slate-400 text-sm font-medium hover:text-blue-400 transition-colors">Automatización</a>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-start">
            <h5 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-6 text-slate-200">Legal</h5>
            <div className="flex flex-col gap-4">
              <Link href="/legal/terminos" className="text-slate-400 text-sm font-medium hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="/legal/privacidad" className="text-slate-400 text-sm font-medium hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/libro-reclamaciones" className="flex items-center gap-2 text-slate-400 text-sm font-medium hover:text-white transition-colors group mt-2">
                <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <span className="text-[10px] font-bold font-serif text-white">LR</span>
                </div>
                <span>Libro de Reclamaciones</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-start">
            <h5 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-6 text-slate-200">Contacto</h5>
            <p className="text-slate-400 text-sm font-medium mb-6">
              Lunes a Viernes<br/>
              9:00 AM - 6:00 PM (PET)
            </p>
            <a 
              href={`https://wa.me/${phone}?text=Hola%20Zidnex%20Digital`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-300 backdrop-blur-sm mb-4"
            >
              Contactar por WhatsApp
            </a>
            <a 
              href={`mailto:${email}`}
              className="text-slate-400 text-sm font-medium hover:text-white transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              {email}
            </a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 gap-4">
          <p className="text-slate-500 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} Zidnex Digital. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 font-semibold text-sm flex items-center gap-2">
            RUC: 10710226721
            <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded-full tracking-widest uppercase">Empresa Registrada</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
