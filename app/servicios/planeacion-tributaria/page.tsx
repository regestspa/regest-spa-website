import { Metadata } from "next";
import { ServiceLayout } from "@/components/servicios/ServiceLayout";
import { FuturisticBackground } from "@/components/servicios/FuturisticBackground";
import {
  CheckCircle2,
  TrendingDown,
  Calendar,
  BarChart3,
  Shield,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Planeación Tributaria | REGEST SpA",
  description:
    "Planificación anual para optimizar tu carga tributaria legalmente. Estrategias de optimización fiscal, proyección de impuestos y seguimiento trimestral.",
  openGraph: {
    title: "Planeación Tributaria | REGEST SpA",
    description:
      "Planificación anual para optimizar tu carga tributaria legalmente. Estrategias de optimización fiscal, proyección de impuestos y seguimiento trimestral.",
    images: ["/images/og-planeacion.jpg"],
  },
};

export default function PlaneacionTributariaPage() {
  const themeColors = {
    primary: "#eab308",
    secondary: "#f97316",
    accent: "#3b82f6",
  };

  return (
    <>
      <FuturisticBackground type="planeacion" themeColors={themeColors} />
      <ServiceLayout
      title="Planeación Tributaria"
      subtitle="Planificación anual para optimizar tu carga tributaria legalmente"
      description={[
        "Reduce legalmente tu carga tributaria con estrategias de planificación fiscal avanzada. La planeación tributaria no es evasión; es el uso inteligente y legal de beneficios, franquicias y estructuras que la ley permite para optimizar tu situación fiscal.",
        "Analizamos tu realidad empresarial, proyectamos tus impuestos anuales y diseñamos una estrategia personalizada que puede incluir: elección de régimen tributario óptimo, aprovechamiento de créditos fiscales, timing estratégico de inversiones, estructuración de operaciones y más.",
        "El servicio incluye seguimiento trimestral para ajustar la estrategia según cambios en tu negocio o en la normativa. Te acompañamos todo el año con un plan fiscal que maximiza tu rentabilidad después de impuestos.",
      ]}
      benefits={[
        {
          icon: BarChart3,
          title: "Análisis de situación tributaria",
          description: "Evaluación completa de tu posición fiscal actual",
        },
        {
          icon: TrendingDown,
          title: "Proyección de impuestos anuales",
          description: "Estimación precisa de tu carga tributaria futura",
        },
        {
          icon: Shield,
          title: "Estrategias de optimización legal",
          description: "Reducción legítima mediante beneficios y franquicias",
        },
        {
          icon: Calendar,
          title: "Calendario de obligaciones fiscales",
          description: "Nunca más olvides una declaración o pago",
        },
        {
          icon: CheckCircle2,
          title: "Simulación de escenarios tributarios",
          description: "Evalúa el impacto fiscal de decisiones antes de tomarlas",
        },
        {
          icon: RefreshCw,
          title: "Seguimiento y ajustes trimestrales",
          description: "Revisión periódica y adaptación de la estrategia",
        },
      ]}
      processSteps={[
        {
          number: "01",
          title: "Análisis de situación",
          description: "Revisión profunda de tu realidad tributaria y financiera",
        },
        {
          number: "02",
          title: "Proyección de impuestos",
          description:
            "Estimación de carga tributaria anual bajo escenario base",
        },
        {
          number: "03",
          title: "Diseño de estrategia",
          description:
            "Planificación de acciones legales de optimización fiscal",
        },
        {
          number: "04",
          title: "Implementación de tácticas",
          description: "Ejecución de estrategias a lo largo del año fiscal",
        },
        {
          number: "05",
          title: "Seguimiento trimestral",
          description: "Monitoreo de resultados y ajustes según sea necesario",
        },
      ]}
      statsTitle="Optimización Fiscal Anual"
      statsHighlight="Análisis + Proyección + Estrategia + Seguimiento Trimestral. Desde $450.000 planificación anual."
      themeColors={themeColors}
      imageType="planeacion"
    />
    </>
  );
}
