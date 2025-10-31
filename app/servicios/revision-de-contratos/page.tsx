import { Metadata } from "next";
import { ServiceLayout } from "@/components/servicios/ServiceLayout";
import { FuturisticBackground } from "@/components/servicios/FuturisticBackground";
import {
  FileSignature,
  Search,
  AlertTriangle,
  Edit,
  Shield,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Revisión de Contratos | REGEST SpA",
  description:
    "Análisis legal de contratos para proteger tus intereses. Revisión exhaustiva, identificación de riesgos y redacción personalizada.",
  openGraph: {
    title: "Revisión de Contratos | REGEST SpA",
    description:
      "Análisis legal de contratos para proteger tus intereses. Revisión exhaustiva, identificación de riesgos y redacción personalizada.",
    images: ["/images/og-contratos.jpg"],
  },
};

export default function RevisionContratosPage() {
  const themeColors = {
    primary: "#ef4444",
    secondary: "#f97316",
    accent: "#eab308",
  };

  return (
    <>
      <FuturisticBackground type="contratos" themeColors={themeColors} />
      <ServiceLayout
      title="Revisión de Contratos"
      subtitle="Análisis legal de contratos para proteger tus intereses"
      description={[
        "Revisa tus contratos con expertos que identifican riesgos y protegen tus intereses comerciales. Antes de firmar cualquier acuerdo importante, es fundamental entender exactamente qué estás aceptando y cuáles son tus obligaciones y derechos.",
        "Analizamos contratos de todo tipo: arrendamiento, compraventa, prestación de servicios, confidencialidad, asociación, distribución, franquicias y más. También redactamos contratos personalizados desde cero cuando necesitas un documento específico para tu negocio.",
        "Te entregamos un informe claro en lenguaje simple explicando los hallazgos, los riesgos detectados y las modificaciones que recomendamos negociar. Si lo necesitas, te asesoramos durante la negociación de términos.",
      ]}
      benefits={[
        {
          icon: Search,
          title: "Revisión exhaustiva de cláusulas",
          description: "Análisis línea por línea de todo el documento",
        },
        {
          icon: AlertTriangle,
          title: "Identificación de riesgos legales",
          description: "Detectamos cláusulas abusivas o peligrosas",
        },
        {
          icon: Edit,
          title: "Recomendaciones de modificaciones",
          description: "Propuestas concretas de mejoras al contrato",
        },
        {
          icon: FileSignature,
          title: "Redacción de contratos personalizados",
          description: "Creamos documentos a medida para tu negocio",
        },
        {
          icon: Shield,
          title: "Asesoría en negociación",
          description: "Te guiamos en la discusión de términos",
        },
        {
          icon: CheckCircle2,
          title: "Validación de cumplimiento normativo",
          description: "Verificamos conformidad con leyes vigentes",
        },
      ]}
      processSteps={[
        {
          number: "01",
          title: "Recepción de contrato",
          description:
            "Nos envías el documento a revisar o el objetivo del nuevo contrato",
        },
        {
          number: "02",
          title: "Análisis de cláusulas",
          description:
            "Revisión detallada de términos, condiciones y obligaciones",
        },
        {
          number: "03",
          title: "Identificación de riesgos",
          description: "Detectamos aspectos conflictivos o desfavorables",
        },
        {
          number: "04",
          title: "Informe con recomendaciones",
          description: "Documento con hallazgos y propuestas de cambios",
        },
        {
          number: "05",
          title: "Asesoría en negociación",
          description:
            "Te apoyamos en la discusión de términos si lo necesitas",
        },
      ]}
      statsTitle="Protección Legal"
      statsHighlight="Revisión completa + Informe detallado + Recomendaciones. Desde $120.000 por contrato."
      themeColors={themeColors}
      imageType="contratos"
    />
    </>
  );
}
