import { Metadata } from "next";
import { ServiceLayout } from "@/components/servicios/ServiceLayout";
import { FuturisticBackground } from "@/components/servicios/FuturisticBackground";
import {
  ScrollText,
  FileSearch,
  Edit3,
  CheckCircle2,
  RefreshCw,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Reforma & Revisión de Estatutos | REGEST SpA",
  description:
    "Modificaciones societarias y revisión integral de estatutos. Actualiza tu empresa para adaptarla a nuevas necesidades del negocio.",
  openGraph: {
    title: "Reforma & Revisión de Estatutos | REGEST SpA",
    description:
      "Modificaciones societarias y revisión integral de estatutos. Actualiza tu empresa para adaptarla a nuevas necesidades del negocio.",
    images: ["/images/og-reforma.jpg"],
  },
};

export default function ReformaEstatutosPage() {
  const themeColors = {
    primary: "#6366f1",
    secondary: "#a855f7",
    accent: "#14b8a6",
  };

  return (
    <>
      <FuturisticBackground type="reforma" themeColors={themeColors} />
      <ServiceLayout
      title="Reforma & Revisión de Estatutos"
      subtitle="Modificaciones societarias y revisión integral de estatutos"
      description={[
        "Actualiza o modifica los estatutos de tu empresa para adaptarlos a nuevas necesidades del negocio. Ya sea que necesites cambiar el objeto social, modificar el capital, agregar o eliminar socios, o actualizar cualquier cláusula, te ayudamos con el proceso completo.",
        "Ofrecemos tanto revisiones integrales de estatutos existentes para identificar oportunidades de mejora, como la redacción y tramitación de reformas específicas. Todo con respaldo legal y tramitación expedita ante notarios y organismos públicos.",
        "El servicio incluye análisis de estatutos actuales, propuesta de modificaciones, redacción de reforma, tramitación notarial, publicación en Diario Oficial si corresponde, y actualización en todos los registros pertinentes.",
      ]}
      benefits={[
        {
          icon: FileSearch,
          title: "Análisis de estatutos actuales",
          description: "Revisión detallada de tu escritura vigente",
        },
        {
          icon: Edit3,
          title: "Propuesta de modificaciones",
          description: "Identificamos mejoras necesarias para tu empresa",
        },
        {
          icon: ScrollText,
          title: "Redacción de reforma",
          description: "Preparación profesional de documentos legales",
        },
        {
          icon: CheckCircle2,
          title: "Tramitación notarial y registro",
          description: "Gestión completa ante notaría y conservador",
        },
        {
          icon: RefreshCw,
          title: "Actualización en SII",
          description: "Modificación de datos en todos los organismos",
        },
        {
          icon: FileCheck,
          title: "Escritura protocolizada",
          description: "Entrega de documentos legales actualizados",
        },
      ]}
      processSteps={[
        {
          number: "01",
          title: "Revisión de estatutos",
          description: "Análisis de escritura actual y objetivos de cambio",
        },
        {
          number: "02",
          title: "Identificación de mejoras",
          description: "Detectamos oportunidades de optimización legal",
        },
        {
          number: "03",
          title: "Redacción de reforma",
          description: "Preparamos escritura de modificación estatutaria",
        },
        {
          number: "04",
          title: "Tramitación y registro",
          description: "Notaría, Diario Oficial y actualización en registros",
        },
        {
          number: "05",
          title: "Actualización de registros",
          description: "Modificación en SII y otros organismos pertinentes",
        },
      ]}
      statsTitle="Reforma Completa"
      statsHighlight="Análisis + Redacción + Notaría + Registro + Actualización SII. Desde $180.000 según complejidad."
      themeColors={themeColors}
      imageType="reforma"
    />
    </>
  );
}
