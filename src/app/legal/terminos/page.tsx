import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
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
              Términos y Condiciones de Servicio
            </h1>
            <p className="text-slate-500 text-sm font-medium">
              Última actualización: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-[family-name:var(--font-heading)] prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600">
            <p className="lead text-lg font-medium text-slate-700">
              Bienvenido a <strong>ZIDNEX DIGITAL</strong>. El presente documento establece las Condiciones Generales que regulan la prestación de los servicios de ingeniería digital, diseño y automatización por parte de <strong>VILLACORTA OBESO MARCOS ZIDANI</strong> (en adelante "ZIDNEX DIGITAL"), identificado con RUC <strong>10710226721</strong>, a favor de sus clientes (en adelante "EL CLIENTE").
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">1. Objeto y Aceptación</h2>
            <p>
              El uso de este sitio web, la solicitud de cotizaciones y la eventual contratación de los servicios ofrecidos por ZIDNEX DIGITAL implica la aceptación expresa, plena y sin reservas por parte de EL CLIENTE de todas y cada una de las disposiciones incluidas en estos Términos y Condiciones. Si usted no está de acuerdo con alguna de las condiciones establecidas, deberá abstenerse de utilizar nuestros servicios.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">2. Descripción de los Servicios</h2>
            <p>
              ZIDNEX DIGITAL ofrece servicios orientados a la transformación y optimización digital B2B (Business to Business), incluyendo, pero no limitándose a:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Software a Medida:</strong> Diseño y desarrollo de sistemas CRM, Dashboards empresariales, intranets y herramientas internas hechas a la medida de la operatividad de EL CLIENTE.</li>
              <li><strong>Webs Corporativas:</strong> Creación de plataformas informativas y landing pages con diseño UI/UX premium y estructuradas para el posicionamiento en motores de búsqueda (SEO).</li>
              <li><strong>Catálogos & E-Commerce:</strong> Tiendas virtuales robustas que integran inventario, pasarelas de pago y conexión directa para ventas por WhatsApp.</li>
              <li><strong>Automatización de Procesos:</strong> Integración de APIs, webhooks y herramientas de terceros (CRMs, Email Marketing, WhatsApp Business) para reducir tiempos operativos.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">3. Cotizaciones, Presupuestos y Contratación</h2>
            <p>
              Toda información de precios o tarifas brindada a través del sitio web es de carácter estrictamente referencial. El proceso formal de contratación consta de las siguientes etapas:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Levantamiento de Requerimientos:</strong> Reunión inicial para definir los alcances técnicos del proyecto.</li>
              <li><strong>Emisión de Presupuesto Formal:</strong> ZIDNEX DIGITAL enviará un documento o contrato de locación de servicios detallando funcionalidades, plazos de entrega, hitos de pago y costos exactos.</li>
              <li><strong>Firma y Adelanto:</strong> El proyecto solo iniciará una vez que EL CLIENTE haya aceptado el presupuesto, firmado el acuerdo (digital o físicamente) y abonado el porcentaje de inicial estipulado en dicho documento (usualmente el 50%).</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">4. Condiciones de Pago y Facturación</h2>
            <p>
              De conformidad con las leyes tributarias del Perú para personas naturales con negocio, los pagos deberán realizarse mediante transferencia bancaria a las cuentas oficiales indicadas en el contrato. ZIDNEX DIGITAL emitirá el comprobante de pago correspondiente (Factura, Boleta de Venta o Recibo por Honorarios Electrónico, según lo acordado) tras la validación de cada depósito.
            </p>
            <p>
              El incumplimiento en el pago de cualquier hito o cuota facultará a ZIDNEX DIGITAL a suspender temporalmente el desarrollo del proyecto y/o retener la entrega de credenciales o códigos fuente hasta la regularización de la deuda.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">5. Tiempos de Entrega y Modificaciones</h2>
            <p>
              Los plazos de entrega serán fijados en el cronograma del contrato específico de cada proyecto. Dichos plazos están condicionados a la entrega oportuna de información, activos (logotipos, textos, imágenes) y retroalimentación por parte de EL CLIENTE.
            </p>
            <p>
              Cualquier requerimiento o funcionalidad adicional solicitada por EL CLIENTE que no se encuentre estipulada en el alcance inicial del contrato, estará sujeta a una nueva evaluación técnica, modificación del plazo de entrega y un presupuesto adicional.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">6. Propiedad Intelectual y Derechos de Uso</h2>
            <p>
              Una vez cancelado el 100% del valor total del proyecto, ZIDNEX DIGITAL cederá a EL CLIENTE los derechos patrimoniales sobre el código fuente, diseño de interfaces y estructura del software desarrollado a medida, otorgándole la titularidad para su libre uso y explotación.
            </p>
            <p>
              ZIDNEX DIGITAL se reserva el derecho de utilizar los proyectos finalizados, fragmentos visuales (capturas de pantalla) y el logotipo de EL CLIENTE como parte de su portafolio de trabajos, casos de éxito y material promocional, a menos que se firme un Acuerdo de Confidencialidad (NDA) que lo prohíba de forma expresa antes del inicio del proyecto.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">7. Garantía y Soporte Técnico</h2>
            <p>
              Todo proyecto entregado incluye una garantía técnica de funcionamiento que cubre exclusivamente la corrección de errores (bugs) de código producidos por nuestro desarrollo. El periodo estándar de esta garantía es de treinta (30) días calendario contados a partir de la entrega final, salvo que el contrato estipule un plazo mayor.
            </p>
            <p>
              Esta garantía <strong>no cubre</strong> problemas derivados de:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Modificaciones al código o configuraciones realizadas por terceros ajenos a ZIDNEX DIGITAL.</li>
              <li>Caídas de servicios externos, fallos en el proveedor de hosting contratado por EL CLIENTE, o cambios en APIs de terceros (ej. caídas de WhatsApp, Meta, pasarelas de pago).</li>
              <li>Actualizaciones mayores en navegadores web que ocurran meses después de la entrega del proyecto.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">8. Limitación de Responsabilidad</h2>
            <p>
              ZIDNEX DIGITAL no asume responsabilidad alguna por daños indirectos, lucro cesante, pérdida de datos o interrupciones del negocio de EL CLIENTE derivadas del uso o imposibilidad de uso del software desarrollado, una vez que este ha sido aceptado y puesto en producción. La responsabilidad máxima de ZIDNEX DIGITAL por cualquier reclamo relacionado con el servicio prestado se limita estrictamente al monto total pagado por EL CLIENTE por el servicio en cuestión.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-slate-800">9. Jurisdicción y Ley Aplicable</h2>
            <p>
              Estos Términos y Condiciones se rigen e interpretan de acuerdo con las leyes de la República del Perú. Para cualquier divergencia o controversia que pudiera derivarse de la prestación de los servicios o de la interpretación de este documento, ambas partes renuncian expresamente al fuero de sus domicilios y se someten a la jurisdicción de los Jueces y Tribunales de la ciudad de Trujillo, La Libertad, Perú.
            </p>

            <div className="mt-12 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
              <p className="text-sm text-slate-600 mb-0">
                Para consultas sobre estos términos, por favor escríbanos a: <strong>marzidvillacorta@gmail.com</strong> o comuníquese a través de nuestro Libro de Reclamaciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
