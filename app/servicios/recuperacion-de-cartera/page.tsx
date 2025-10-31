import { Metadata } from "next";
import { ServiceLayout } from "@/components/servicios/ServiceLayout";
import { FuturisticBackground } from "@/components/servicios/FuturisticBackground";
import {
  BarChart3,
  MessageSquare,
  TrendingUp,
  FileText,
  Users,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Recuperación de Cartera | REGEST SpA",
  description:
    "Cobranza empática y basada en datos para recuperar capital y reactivar clientes. Trazabilidad, reportes y resultados medibles.",
  openGraph: {
    title: "Recuperación de Cartera | REGEST SpA",
    description:
      "Cobranza empática y basada en datos para recuperar capital y reactivar clientes. Trazabilidad, reportes y resultados medibles.",
    images: ["/images/og-cartera.jpg"],
  },
};

export default function RecuperacionCarteraPage() {
  const themeColors = {
    primary: "#3b82f6",
    secondary: "#f97316",
    accent: "#10b981",
  };

  return (
    <>
      <FuturisticBackground type="cartera" themeColors={themeColors} />
      <ServiceLayout
      title="Recuperación de Cartera"
      subtitle="Cobranza empática + data para normalizar tu flujo de caja"
      description={[
        "Implementamos estrategias efectivas de cobranza preventiva y prejudicial, combinando gestión humana con tecnología para maximizar la recuperación del capital sin dañar la relación comercial. Diagnosticamos la morosidad, segmentamos por riesgo y priorizamos acciones de alto impacto. Reportes claros y trazabilidad completa.",
        "Nuestro enfoque es integral: recuperar capital y también clientes. Negociamos acuerdos sostenibles, reactivamos relaciones y estabilizamos el flujo de caja.",
        "Trabajamos con sectores: retail, transporte, telecomunicaciones, monitoreo satelital, inmobiliario y más.",
      ]}
      benefits={[
        {
          icon: BarChart3,
          title: "Segmentación por riesgo",
          description: "Priorizamos acciones según nivel de morosidad",
        },
        {
          icon: MessageSquare,
          title: "Comunicación multicanal",
          description: "Teléfono, WhatsApp, email y más",
        },
        {
          icon: TrendingUp,
          title: "Estrategias por antigüedad",
          description: "Tácticas adaptadas al ciclo de la deuda",
        },
        {
          icon: FileText,
          title: "Trazabilidad y reportes",
          description: "Información en tiempo real, siempre disponible",
        },
        {
          icon: Users,
          title: "Negociación empática",
          description: "Profesionalismo que cuida la relación comercial",
        },
        {
          icon: CheckCircle2,
          title: "Reinserción de clientes",
          description: "Recuperamos capital y también clientes fieles",
        },
      ]}
      processSteps={[
        {
          number: "01",
          title: "Diagnóstico de cartera",
          description: "Análisis profundo de data inicial y segmentación",
        },
        {
          number: "02",
          title: "Estrategia personalizada",
          description: "Plan de acción adaptado a cada segmento de riesgo",
        },
        {
          number: "03",
          title: "Contacto y negociación",
          description: "Gestión empática con acuerdos de pago viables",
        },
        {
          number: "04",
          title: "Seguimiento continuo",
          description: "Monitoreo activo con reportes semanales detallados",
        },
        {
          number: "05",
          title: "Retroalimentación",
          description: "Ajustes estratégicos y reintegro de clientes",
        },
      ]}
      statsTitle="Promedios históricos REGEST"
      statsHighlight="95% en cartera vigente, 65% en cartera prejudicial/castigada"
      statsSubtext="*Resultados referenciales; varían según volumen, antigüedad y sector."
      themeColors={themeColors}
      imageType="cartera"
    />
    </>
  );
}
