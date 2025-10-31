"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Handshake,
  LineChart,
  Users,
  ShieldCheck,
  Building2,
  FileText,
  ScrollText,
  FileSignature,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const servicios = [
  {
    icon: Handshake,
    title: "Recuperación de Cartera",
    description: "Estrategias efectivas de cobranza con empatía y resultados medibles.",
    url: "/servicios/recuperacion-de-cartera",
    detalle: {
      intro: "Recupera tus cuentas por cobrar con métodos profesionales y empáticos que mantienen la relación con tus clientes.",
      beneficios: [
        "Análisis completo de tu cartera morosa",
        "Estrategias personalizadas según perfil del deudor",
        "Gestión telefónica, digital y presencial",
        "Reportes mensuales de avances y recuperación",
        "Negociación de acuerdos de pago favorables",
        "Respaldo legal en casos complejos"
      ],
      proceso: "Evaluamos tu cartera, clasificamos deudores, ejecutamos estrategia de cobranza y reportamos resultados.",
      precio: "Desde $250.000/mes + comisión por éxito"
    }
  },
  {
    icon: LineChart,
    title: "Análisis de Cartera",
    description: "Evaluación profunda de tu cartera con análisis de datos y reportes claros.",
    url: "/servicios/analisis-de-cartera",
    detalle: {
      intro: "Obtén visibilidad completa de tu cartera de clientes con análisis predictivo y recomendaciones estratégicas.",
      beneficios: [
        "Dashboard con métricas clave en tiempo real",
        "Análisis de días promedio de pago",
        "Identificación de clientes de riesgo",
        "Proyección de flujo de caja",
        "Segmentación de clientes por comportamiento",
        "Recomendaciones automatizadas"
      ],
      proceso: "Integramos tus datos, aplicamos modelos de análisis, generamos reportes visuales y entregamos insights accionables.",
      precio: "Desde $180.000/mes"
    }
  },
  {
    icon: Users,
    title: "Asesorías Contables",
    description: "Contabilidad clara y oportuna para decisiones financieras informadas.",
    url: "/servicios/asesorias-contables",
    detalle: {
      intro: "Mantén tu contabilidad al día con profesionales certificados que te explican tus números en lenguaje simple.",
      beneficios: [
        "Contabilidad completa y actualizada",
        "Estados financieros mensuales",
        "Conciliaciones bancarias",
        "Control de inventarios y costos",
        "Asesoría en decisiones de inversión",
        "Cumplimiento normativo contable"
      ],
      proceso: "Recopilamos documentación, procesamos información, generamos estados financieros y te asesoramos mensualmente.",
      precio: "Desde $120.000/mes según tamaño empresa"
    }
  },
  {
    icon: ShieldCheck,
    title: "Asesorías Tributarias",
    description: "Cumplimiento SII y planificación tributaria estratégica.",
    url: "/servicios/asesorias-tributarias",
    detalle: {
      intro: "Cumple con el SII sin estrés y optimiza tu carga tributaria con planificación estratégica legal.",
      beneficios: [
        "Declaraciones mensuales y anuales",
        "Representación ante el SII",
        "Planificación tributaria anual",
        "Optimización legal de impuestos",
        "Respuesta a requerimientos fiscales",
        "Actualización normativa constante"
      ],
      proceso: "Revisamos tu situación tributaria, planificamos estrategia, cumplimos obligaciones y optimizamos carga fiscal.",
      precio: "Desde $150.000/mes + declaración anual"
    }
  },
  {
    icon: Building2,
    title: "Creación de Empresas",
    description: "Constitución de sociedades con todo el soporte legal y administrativo.",
    url: "/servicios/creacion-de-empresas",
    detalle: {
      intro: "Constituye tu empresa en tiempo récord con asesoría completa sobre el mejor tipo de sociedad para tu negocio.",
      beneficios: [
        "Asesoría en elección de tipo societario",
        "Redacción de estatutos personalizados",
        "Tramitación completa ante notario",
        "Publicación en Diario Oficial",
        "Inscripción en Registro de Comercio",
        "Obtención de RUT y timbraje"
      ],
      proceso: "Definimos estructura, redactamos estatutos, tramitamos documentos y entregamos empresa lista para operar.",
      precio: "Desde $280.000 paquete completo"
    }
  },
  {
    icon: FileText,
    title: "Inicio de Actividades",
    description: "Trámites ante el SII para comenzar tu actividad comercial sin complicaciones.",
    url: "/servicios/inicio-de-actividades",
    detalle: {
      intro: "Inicia tu actividad económica cumpliendo todos los requisitos del SII desde el primer día.",
      beneficios: [
        "Inscripción en inicio de actividades SII",
        "Selección de régimen tributario óptimo",
        "Solicitud de timbraje de documentos",
        "Alta de libros contables",
        "Configuración de facturación electrónica",
        "Capacitación en obligaciones tributarias"
      ],
      proceso: "Recopilamos antecedentes, tramitamos ante SII, configuramos sistemas y capacitamos en uso.",
      precio: "Desde $80.000 trámite completo"
    }
  },
  {
    icon: ScrollText,
    title: "Reforma & Revisión de Estatutos",
    description: "Modificaciones societarias y revisión integral de estatutos.",
    url: "/servicios/reforma-estatutos",
    detalle: {
      intro: "Actualiza o modifica los estatutos de tu empresa para adaptarlos a nuevas necesidades del negocio.",
      beneficios: [
        "Análisis de estatutos actuales",
        "Propuesta de modificaciones necesarias",
        "Redacción de reforma estatutaria",
        "Tramitación ante notario y registro",
        "Actualización en SII y otros organismos",
        "Entrega de escritura protocolizada"
      ],
      proceso: "Revisamos estatutos, identificamos mejoras, redactamos reforma, tramitamos y actualizamos registros.",
      precio: "Desde $180.000 según complejidad"
    }
  },
  {
    icon: FileSignature,
    title: "Revisión de Contratos",
    description: "Análisis legal de contratos para proteger tus intereses.",
    url: "/servicios/revision-de-contratos",
    detalle: {
      intro: "Revisa tus contratos con expertos que identifican riesgos y protegen tus intereses comerciales.",
      beneficios: [
        "Revisión exhaustiva de cláusulas",
        "Identificación de riesgos legales",
        "Recomendaciones de modificaciones",
        "Redacción de contratos personalizados",
        "Asesoría en negociación de términos",
        "Validación de cumplimiento normativo"
      ],
      proceso: "Recibimos contrato, analizamos cláusulas, identificamos riesgos y entregamos informe con recomendaciones.",
      precio: "Desde $120.000 por contrato"
    }
  },
  {
    icon: CheckCircle2,
    title: "Planeación Tributaria",
    description: "Planificación anual para optimizar tu carga tributaria legalmente.",
    url: "/servicios/planeacion-tributaria",
    detalle: {
      intro: "Reduce legalmente tu carga tributaria con estrategias de planificación fiscal avanzada.",
      beneficios: [
        "Análisis de situación tributaria actual",
        "Proyección de impuestos anuales",
        "Estrategias de optimización legal",
        "Calendario de obligaciones fiscales",
        "Simulación de escenarios tributarios",
        "Seguimiento y ajustes trimestrales"
      ],
      proceso: "Analizamos tu situación, proyectamos impuestos, diseñamos estrategia de optimización y hacemos seguimiento.",
      precio: "Desde $450.000 planificación anual"
    }
  },
];

export function Servicios() {
  return (
    <section
      id="servicios"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.08),transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Haz clic en cualquier servicio para ver su página completa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => {
            const IconComponent = servicio.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="h-full hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 border border-orange-500/20 bg-gray-900/50 backdrop-blur-md rounded-3xl hover:-translate-y-2 group"
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center mb-4 shadow-lg shadow-orange-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">
                      {servicio.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">{servicio.description}</p>
                    <Button
                      variant="ghost"
                      className="text-orange-500 hover:text-orange-400 hover:bg-orange-500/10 p-0 h-auto font-semibold group/btn"
                      asChild
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link href={servicio.url}>
                        Página completa
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
