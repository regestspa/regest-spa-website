import { Metadata } from "next";
import { ServiceLayout } from "@/components/servicios/ServiceLayout";
import { FuturisticBackground } from "@/components/servicios/FuturisticBackground";
import {
  BarChart3,
  TrendingUp,
  Users,
  AlertTriangle,
  Target,
  PieChart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Análisis de Cartera | REGEST SpA",
  description:
    "Evaluación profunda de tu cartera con análisis de datos y reportes claros. Dashboard con métricas clave en tiempo real.",
  openGraph: {
    title: "Análisis de Cartera | REGEST SpA",
    description:
      "Evaluación profunda de tu cartera con análisis de datos y reportes claros. Dashboard con métricas clave en tiempo real.",
    images: ["/images/og-analisis.jpg"],
  },
};

export default function AnalisisCarteraPage() {
  const themeColors = {
    primary: "#06b6d4",
    secondary: "#8b5cf6",
    accent: "#10b981",
  };

  return (
    <>
      <FuturisticBackground type="analisis" themeColors={themeColors} />
      <ServiceLayout
      title="Análisis de Cartera"
      subtitle="Evaluación profunda de tu cartera con análisis de datos y reportes claros"
      description={[
        "Obtén visibilidad completa de tu cartera de clientes con análisis predictivo y recomendaciones estratégicas. Nuestro dashboard te permite tomar decisiones informadas basadas en datos reales y actualizados constantemente.",
        "Identificamos patrones de comportamiento, anticipamos problemas de liquidez y te ayudamos a priorizar acciones que maximicen tu flujo de caja. Todo en una plataforma intuitiva y fácil de usar.",
        "Ideal para empresas que necesitan gestionar múltiples clientes, optimizar políticas de crédito y reducir la morosidad de forma proactiva.",
      ]}
      benefits={[
        {
          icon: BarChart3,
          title: "Dashboard en tiempo real",
          description: "Visualiza métricas clave de tu cartera al instante",
        },
        {
          icon: TrendingUp,
          title: "Análisis de días promedio",
          description: "Conoce el comportamiento de pago de tus clientes",
        },
        {
          icon: AlertTriangle,
          title: "Identificación de riesgo",
          description: "Detecta clientes con probabilidad de morosidad",
        },
        {
          icon: PieChart,
          title: "Proyección de flujo de caja",
          description: "Anticipa ingresos futuros con precisión",
        },
        {
          icon: Users,
          title: "Segmentación inteligente",
          description: "Clasifica clientes por comportamiento de pago",
        },
        {
          icon: Target,
          title: "Recomendaciones automatizadas",
          description: "Acciones sugeridas basadas en datos",
        },
      ]}
      processSteps={[
        {
          number: "01",
          title: "Integración de datos",
          description: "Conectamos con tus sistemas contables y ERP",
        },
        {
          number: "02",
          title: "Aplicación de modelos",
          description: "Análisis predictivo y segmentación avanzada",
        },
        {
          number: "03",
          title: "Generación de reportes",
          description: "Visualizaciones claras y comprensibles",
        },
        {
          number: "04",
          title: "Insights accionables",
          description: "Recomendaciones estratégicas personalizadas",
        },
        {
          number: "05",
          title: "Monitoreo continuo",
          description: "Actualización automática de métricas",
        },
      ]}
      statsTitle="Análisis en Tiempo Real"
      statsHighlight="Métricas actualizadas al minuto para decisiones inmediatas. Integración directa con tus sistemas existentes sin complicaciones."
      themeColors={themeColors}
      imageType="analisis"
    />
    </>
  );
}
