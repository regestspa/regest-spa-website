import { Metadata } from "next";
import { ServiceLayout } from "@/components/servicios/ServiceLayout";
import { FuturisticBackground } from "@/components/servicios/FuturisticBackground";
import {
  Calculator,
  FileText,
  TrendingUp,
  CheckCircle2,
  Building,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Asesorías Contables | REGEST SpA",
  description:
    "Contabilidad clara y oportuna para decisiones financieras informadas. Estados financieros mensuales y control de inventarios.",
  openGraph: {
    title: "Asesorías Contables | REGEST SpA",
    description:
      "Contabilidad clara y oportuna para decisiones financieras informadas. Estados financieros mensuales y control de inventarios.",
    images: ["/images/og-contable.jpg"],
  },
};

export default function AsesoriasContablesPage() {
  const themeColors = {
    primary: "#10b981",
    secondary: "#3b82f6",
    accent: "#f59e0b",
  };

  return (
    <>
      <FuturisticBackground type="contable" themeColors={themeColors} />
      <ServiceLayout
      title="Asesorías Contables"
      subtitle="Contabilidad clara y oportuna para decisiones financieras informadas"
      description={[
        "Mantén tu contabilidad al día con profesionales certificados que te explican tus números en lenguaje simple. Entendemos que la contabilidad puede ser compleja, por eso nos enfocamos en traducir la información financiera en insights accionables para tu negocio.",
        "Nuestro servicio incluye desde el registro diario de operaciones hasta la preparación de estados financieros mensuales, conciliaciones bancarias y control de inventarios. Todo con la precisión y el cumplimiento normativo que tu empresa necesita.",
        "Trabajamos con empresas de todos los tamaños: desde emprendimientos hasta medianas empresas con operaciones complejas. Nos adaptamos a tus necesidades específicas.",
      ]}
      benefits={[
        {
          icon: FileText,
          title: "Contabilidad completa",
          description: "Registro y clasificación de todas tus operaciones",
        },
        {
          icon: Calculator,
          title: "Estados financieros mensuales",
          description: "Balance, estado de resultados y flujo de efectivo",
        },
        {
          icon: CheckCircle2,
          title: "Conciliaciones bancarias",
          description: "Control exacto de tus cuentas bancarias",
        },
        {
          icon: Building,
          title: "Control de inventarios",
          description: "Seguimiento de stock y costos de producción",
        },
        {
          icon: TrendingUp,
          title: "Asesoría en inversiones",
          description: "Análisis financiero para decisiones estratégicas",
        },
        {
          icon: Clock,
          title: "Cumplimiento normativo",
          description: "Actualización constante con normas contables",
        },
      ]}
      processSteps={[
        {
          number: "01",
          title: "Recopilación de documentación",
          description: "Facturas, boletas, comprobantes y movimientos bancarios",
        },
        {
          number: "02",
          title: "Procesamiento de información",
          description: "Registro contable según plan de cuentas",
        },
        {
          number: "03",
          title: "Generación de estados financieros",
          description: "Balances y reportes mensuales detallados",
        },
        {
          number: "04",
          title: "Asesoría mensual",
          description: "Reunión para revisar números y tomar decisiones",
        },
        {
          number: "05",
          title: "Seguimiento continuo",
          description: "Apoyo permanente en consultas contables",
        },
      ]}
      statsTitle="Estados Financieros Mensuales"
      statsHighlight="Balance, estado de resultados y flujo de efectivo detallados. Desde $120.000/mes según tamaño de empresa."
      themeColors={themeColors}
      imageType="contable"
    />
    </>
  );
}
