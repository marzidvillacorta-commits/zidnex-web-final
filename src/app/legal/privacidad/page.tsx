import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          <div className="border-b border-slate-100 pb-8 mb-8">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-extrabold text-slate-900 mb-4">
              Política de Privacidad y Tratamiento de Datos Personales
            </h1>
            <p className="text-slate-500 text-sm font-medium">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-[family-name:var(--font-heading)] prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600">
            <p className="lead text-lg font-medium text-slate-700">
              En <strong>ZIDNEX DIGITAL</strong> (VILLACORTA OBESO MARCOS ZIDANI, con RUC <strong>10710226721</strong> y domicilio fiscal en La Libertad, Otuzco, Usquil, Caserío Las Delicias), valoramos profundamente su privacidad. Esta política describe cómo recopilamos, usamos, protegemos y compartimos sus datos personales en estricto cumplimiento con la <strong>Ley N° 29733, Ley de Protección de Datos Personales</strong> de la República del Perú, y su respectivo reglamento.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">1. ¿Qué datos personales recopilamos?</h2>
            <p>
              Recopilamos información personal únicamente cuando usted nos la proporciona de forma voluntaria al interactuar con nuestra plataforma, ya sea mediante formularios de contacto, solicitudes de cotización o a través del Libro de Reclamaciones. Los datos que solemos solicitar incluyen:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Datos de contacto:</strong> Nombres, apellidos, correo electrónico, número de teléfono o celular (WhatsApp).</li>
              <li><strong>Datos de facturación:</strong> RUC, DNI, Razón Social y Dirección fiscal (exclusivamente cuando se formaliza un contrato).</li>
              <li><strong>Información técnica:</strong> Dirección IP, tipo de navegador, tiempo de visita y páginas consultadas, recopilados de forma anónima mediante cookies para análisis estadístico.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">2. Finalidad del Tratamiento de los Datos</h2>
            <p>
              Sus datos personales serán almacenados en nuestros bancos de datos y serán utilizados de manera confidencial y exclusiva para las siguientes finalidades:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Responder a sus consultas, brindar soporte y enviar cotizaciones sobre nuestros servicios de desarrollo web, E-Commerce y automatización.</li>
              <li>Formalizar contratos, emitir comprobantes de pago y gestionar la cobranza.</li>
              <li>Gestionar y dar respuesta a quejas o reclamos ingresados en nuestro Libro de Reclamaciones virtual.</li>
              <li>Enviarle información relevante sobre actualizaciones de nuestros servicios, promociones o boletines informativos (siempre que usted haya dado su consentimiento para recibir comunicaciones de marketing).</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">3. Uso de Cookies y Tecnologías de Rastreo</h2>
            <p>
              Este sitio web utiliza cookies (pequeños archivos de texto que se almacenan en su navegador) para mejorar la experiencia del usuario y analizar el tráfico del sitio. 
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Cookies Estrictamente Necesarias:</strong> Permiten la navegación básica por la página y el uso de sus funciones. No pueden ser desactivadas.</li>
              <li><strong>Cookies Analíticas:</strong> Nos ayudan a entender cómo los visitantes interactúan con la web (ej. Google Analytics) recogiendo información de forma anónima.</li>
            </ul>
            <p>
              Al ingresar a nuestra web por primera vez, se le mostrará un aviso permitiéndole aceptar el uso de cookies. Usted puede configurar su navegador para bloquear o eliminar las cookies en cualquier momento.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">4. Transferencia y Cesión de Datos a Terceros</h2>
            <p>
              ZIDNEX DIGITAL garantiza que <strong>no venderá, alquilará ni cederá</strong> sus datos personales a terceros con fines publicitarios o comerciales sin su consentimiento expreso. 
            </p>
            <p>
              Sin embargo, para poder operar y brindar nuestros servicios, podríamos compartir su información estrictamente necesaria con proveedores tecnológicos de confianza (por ejemplo, pasarelas de pago, proveedores de hosting, servicios de facturación electrónica) los cuales están sujetos a estrictas normas de confidencialidad. Asimismo, sus datos podrán ser compartidos con autoridades gubernamentales o judiciales en caso sea requerido por mandato legal.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">5. Medidas de Seguridad</h2>
            <p>
              Hemos implementado las medidas de seguridad técnicas, organizativas y legales necesarias para salvaguardar sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología y los riesgos a los que están expuestos.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">6. Plazo de Conservación</h2>
            <p>
              Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial o durante los años necesarios para cumplir con las obligaciones legales aplicables (por ejemplo, datos de facturación regulados por SUNAT), o hasta que usted solicite su supresión/cancelación.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">7. Ejercicio de los Derechos ARCO</h2>
            <p>
              Como titular de sus datos personales, la ley le otorga el derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO)</strong> a su tratamiento.
            </p>
            <p>
              Para ejercer cualquiera de estos derechos, deberá enviar una solicitud formal, adjuntando una copia de su DNI o documento de identidad, al correo electrónico: <strong>marzidvillacorta@gmail.com</strong>. Responderemos a su solicitud dentro de los plazos establecidos por la normativa peruana vigente.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">8. Cambios en la Política de Privacidad</h2>
            <p>
              ZIDNEX DIGITAL se reserva el derecho de modificar esta Política de Privacidad en cualquier momento, adaptándola a novedades legislativas o jurisprudenciales. Toda modificación será publicada de manera visible en esta misma página.
            </p>

            <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
              <p className="text-sm text-slate-700 mb-0">
                Al continuar navegando y utilizando los servicios de ZIDNEX DIGITAL, usted reconoce haber leído, comprendido y aceptado íntegramente la presente Política de Privacidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
