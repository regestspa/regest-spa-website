import { Metadata } from "next";
import { ServiceLayout } from "@/components/servicios/ServiceLayout";
import { FuturisticBackground } from "@/components/servicios/FuturisticBackground";
import {
  FileText,
  CheckCircle2,
  Shield,
  BookOpen,
  Zap,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Inicio de Actividades | REGEST SpA",
  description:
    "Trámites ante el SII para comenzar tu actividad comercial sin complicaciones. Inscripción, timbraje y facturación electrónica.",
  openGraph: {
    title: "Inicio de Actividades | REGEST SpA",
    description:
      "Trámites ante el SII para comenzar tu actividad comercial sin complicaciones. Inscripción, timbraje y facturación electrónica.",
    images: ["/images/og-inicio.jpg"],
  },
};

export default function InicioActividadesPage() {
  const themeColors = {
    primary: "#22c55e",
    secondary: "#3b82f6",
    accent: "#f59e0b",
  };

  return (
    <>
      <FuturisticBackground type="actividades" themeColors={themeColors} />
      <ServiceLayout
      title="Inicio de Actividades"
      subtitle="Trámites ante el SII para comenzar tu actividad comercial sin complicaciones"
      description={[
        "Inicia tu actividad económica cumpliendo todos los requisitos del SII desde el primer día. Nos encargamos de la inscripción en el Servicio de Impuestos Internos, selección del régimen tributario óptimo y configuración de todos tus sistemas de facturación.",
        "Incluye la solicitud de timbraje de documentos tributarios (facturas, boletas, guías), el alta de libros contables y la configuración completa de tu sistema de facturación electrónica para que puedas empezar a vender desde el día uno.",
        "Además, te capacitamos en el uso del portal SII y en tus obligaciones tributarias básicas, para que operes con confianza y sin sorpresas.",
      ]}
      benefits={[
        {
          icon: FileText,
          title: "Inscripción en SII",
          description:
            "Inicio de actividades ante el Servicio de Impuestos Internos",
        },
        {
          icon: Shield,
          title: "Selección de régimen tributario",
          description: "Elegimos el régimen más conveniente para tu negocio",
        },
        {
          icon: Award,
          title: "Timbraje de documentos",
          description: "Facturas, boletas y guías de despacho autorizadas",
        },
        {
          icon: BookOpen,
          title: "Alta de libros contables",
          description: "Libros de compra, venta e inventario registrados",
        },
        {
          icon: Zap,
          title: "Facturación electrónica",
          description: "Configuración completa de sistema de e-factura",
        },
        {
          icon: CheckCircle2,
          title: "Capacitación incluida",
          description: "Te enseñamos a cumplir tus obligaciones tributarias",
        },
      ]}
      processSteps={[
        {
          number: "01",
          title: "Recopilación de antecedentes",
          description: "RUT de empresa, giros y datos de representante legal",
        },
        {
          number: "02",
          title: "Tramitación ante SII",
          description: "Inscripción de inicio de actividades en línea",
        },
        {
          number: "03",
          title: "Configuración de sistemas",
          description: "Timbraje y setup de facturación electrónica",
        },
        {
          number: "04",
          title: "Capacitación en uso",
          description:
            "Te enseñamos a emitir documentos y cumplir obligaciones",
        },
        {
          number: "05",
          title: "Entrega de credenciales",
          description: "Acceso completo al portal SII y sistemas",
        },
      ]}
      statsTitle="Trámite Express"
      statsHighlight="Inscripción + Timbraje + Facturación Electrónica + Capacitación. Desde $80.000 trámite completo."
      themeColors={themeColors}
      imageType="actividades"
    />
    </>
  );
}
