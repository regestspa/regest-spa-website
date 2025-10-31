import { Metadata } from "next";
import { ServiceLayout } from "@/components/servicios/ServiceLayout";
import { FuturisticBackground } from "@/components/servicios/FuturisticBackground";
import {
  Building2,
  FileText,
  CheckCircle2,
  Clock,
  Users,
  Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Creación de Empresas | REGEST SpA",
  description:
    "Constitución de sociedades con todo el soporte legal y administrativo. Asesoría en tipo societario, tramitación notarial y obtención de RUT.",
  openGraph: {
    title: "Creación de Empresas | REGEST SpA",
    description:
      "Constitución de sociedades con todo el soporte legal y administrativo. Asesoría en tipo societario, tramitación notarial y obtención de RUT.",
    images: ["/images/og-empresas.jpg"],
  },
};

export default function CreacionEmpresasPage() {
  const themeColors = {
    primary: "#8b5cf6",
    secondary: "#ec4899",
    accent: "#06b6d4",
  };

  return (
    <>
      <FuturisticBackground type="empresas" themeColors={themeColors} />
      <ServiceLayout
      title="Creación de Empresas"
      subtitle="Constitución de sociedades con todo el soporte legal y administrativo"
      description={[
        "Constituye tu empresa en tiempo récord con asesoría completa sobre el mejor tipo de sociedad para tu negocio. Ya sea que necesites una SpA, una SRL, una EIRL o cualquier otra forma jurídica, te guiamos en cada paso del proceso.",
        "Nos encargamos de toda la burocracia: desde la redacción de estatutos personalizados hasta la tramitación ante notario, publicación en el Diario Oficial, inscripción en el Registro de Comercio y obtención del RUT. Todo incluido en un solo paquete.",
        "Tu única tarea es definir el nombre y giro de tu empresa. Nosotros hacemos el resto y te entregamos tu sociedad lista para empezar a facturar y operar legalmente.",
      ]}
      benefits={[
        {
          icon: Users,
          title: "Asesoría en tipo societario",
          description: "SpA, SRL, EIRL o la estructura ideal para ti",
        },
        {
          icon: FileText,
          title: "Redacción de estatutos",
          description: "Estatutos personalizados según tus necesidades",
        },
        {
          icon: CheckCircle2,
          title: "Tramitación notarial completa",
          description: "Gestión ante notario sin que te muevas",
        },
        {
          icon: Shield,
          title: "Publicación Diario Oficial",
          description: "Extracto de constitución en tiempo récord",
        },
        {
          icon: Building2,
          title: "Inscripción en Registro de Comercio",
          description: "Formalización legal de tu empresa",
        },
        {
          icon: Clock,
          title: "Obtención de RUT y timbraje",
          description: "Todo listo para iniciar operaciones",
        },
      ]}
      processSteps={[
        {
          number: "01",
          title: "Definición de estructura",
          description: "Asesoramos en la mejor forma jurídica para tu negocio",
        },
        {
          number: "02",
          title: "Redacción de estatutos",
          description: "Preparamos documentos personalizados",
        },
        {
          number: "03",
          title: "Tramitación de documentos",
          description: "Notaría, Diario Oficial y Registro de Comercio",
        },
        {
          number: "04",
          title: "Obtención de RUT",
          description: "Inscripción en SII y timbraje de documentos",
        },
        {
          number: "05",
          title: "Entrega de empresa operativa",
          description: "Tu empresa lista para facturar y operar",
        },
      ]}
      statsTitle="Paquete Completo"
      statsHighlight="Notaría + Diario Oficial + Registro de Comercio + RUT + Timbraje. Desde $280.000 paquete completo."
      themeColors={themeColors}
      imageType="empresas"
    />
    </>
  );
}
