import { Metadata } from "next";
import { ServiceLayout } from "@/components/servicios/ServiceLayout";
import { FuturisticBackground } from "@/components/servicios/FuturisticBackground";
import {
  ShieldCheck,
  FileText,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asesorías Tributarias | REGEST SpA",
  description:
    "Cumplimiento SII y planificación tributaria estratégica. Declaraciones mensuales, optimización legal de impuestos y representación ante el SII.",
  openGraph: {
    title: "Asesorías Tributarias | REGEST SpA",
    description:
      "Cumplimiento SII y planificación tributaria estratégica. Declaraciones mensuales, optimización legal de impuestos y representación ante el SII.",
    images: ["/images/og-tributaria.jpg"],
  },
};

export default function AsesoriasTributariasPage() {
  const themeColors = {
    primary: "#f97316",
    secondary: "#eab308",
    accent: "#06b6d4",
  };

  return (
    <>
      <FuturisticBackground type="tributario" themeColors={themeColors} />
      <ServiceLayout
      title="Asesorías Tributarias"
      subtitle="Cumplimiento SII y planificación tributaria estratégica"
      description={[
        "Cumple con el SII sin estrés y optimiza tu carga tributaria con planificación estratégica legal. Nuestro equipo de expertos tributarios te mantiene al día con todas tus obligaciones mientras busca oportunidades legítimas de optimización fiscal.",
        "Manejamos desde declaraciones mensuales simples hasta operaciones tributarias complejas. Te representamos ante el SII en fiscalizaciones y requerimientos, protegiéndote de multas y sanciones.",
        "Además, diseñamos estrategias de planificación tributaria anual para que aproveches todos los beneficios legales disponibles y reduzcas tu carga fiscal de forma inteligente y transparente.",
      ]}
      benefits={[
        {
          icon: FileText,
          title: "Declaraciones mensuales y anuales",
          description: "F29, F50, Renta y todas las obligaciones del SII",
        },
        {
          icon: ShieldCheck,
          title: "Representación ante el SII",
          description: "Respuesta profesional a fiscalizaciones",
        },
        {
          icon: Calendar,
          title: "Planificación tributaria anual",
          description: "Estrategia fiscal a medida para tu empresa",
        },
        {
          icon: TrendingDown,
          title: "Optimización legal de impuestos",
          description: "Reducción legítima de carga tributaria",
        },
        {
          icon: AlertCircle,
          title: "Respuesta a requerimientos",
          description: "Gestión de citaciones y solicitudes fiscales",
        },
        {
          icon: CheckCircle2,
          title: "Actualización normativa",
          description: "Al día con cambios en leyes tributarias",
        },
      ]}
      processSteps={[
        {
          number: "01",
          title: "Revisión de situación tributaria",
          description: "Análisis completo de tu posición fiscal actual",
        },
        {
          number: "02",
          title: "Planificación estratégica",
          description: "Diseño de estrategia de cumplimiento y optimización",
        },
        {
          number: "03",
          title: "Cumplimiento de obligaciones",
          description: "Declaraciones mensuales y anuales en plazo",
        },
        {
          number: "04",
          title: "Optimización de carga fiscal",
          description: "Aplicación de beneficios y franquicias legales",
        },
        {
          number: "05",
          title: "Seguimiento continuo",
          description: "Monitoreo de cambios normativos y ajustes",
        },
      ]}
      statsTitle="Tranquilidad Tributaria"
      statsHighlight="Cumplimiento 100% y optimización estratégica de tu carga fiscal. Desde $150.000/mes + declaración anual."
      themeColors={themeColors}
      imageType="tributario"
    />
    </>
  );
}
