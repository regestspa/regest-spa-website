"use client";

import { MessageCircle, FileText, BarChart3, Calculator, Clock, CheckCircle2, TrendingUp, Shield } from "lucide-react";

export default function DemoPage() {
  const whatsappNumber = "56982218271";
  const whatsappMessage = encodeURIComponent("Hola, necesito soporte con mi demo de REGEST");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const demoFeatures = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Gestión Contable",
      description: "Explora nuestras herramientas de contabilidad y gestión financiera",
      color: "from-blue-600 to-blue-500",
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Análisis Tributario",
      description: "Visualiza reportes y análisis tributarios en tiempo real",
      color: "from-green-600 to-green-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Análisis de Cartera",
      description: "Monitorea el estado de tu cartera y recuperación de créditos",
      color: "from-orange-600 to-orange-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Planificación Estratégica",
      description: "Herramientas de planificación y proyección financiera",
      color: "from-cyan-600 to-cyan-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Auditoría y Control",
      description: "Sistemas de control y auditoría de procesos contables",
      color: "from-rose-600 to-rose-500",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Reportes Automáticos",
      description: "Genera reportes personalizados automáticamente",
      color: "from-teal-600 to-teal-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl shadow-lg mb-6">
            <span className="text-white font-bold text-3xl">R</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bienvenido a tu Demo de <span className="text-orange-600">REGEST</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Gracias por verificar tu identidad
          </p>

          <div className="inline-flex items-center space-x-2 bg-orange-50 border border-orange-200 rounded-full px-6 py-3 mb-8">
            <Clock className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-medium">
              Tu acceso estará activo por 24 horas
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {demoFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200 cursor-pointer"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-8 shadow-xl text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesitas ayuda con tu demo?
            </h2>

            <p className="text-orange-50 mb-6 text-lg">
              Nuestro equipo de soporte está disponible para responder tus preguntas y guiarte en el uso de la plataforma
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Contactar Soporte WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            ¿Qué puedes hacer en tu demo?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Explorar todas las funcionalidades</h4>
                <p className="text-gray-600 text-sm">Acceso completo a todas las herramientas de REGEST durante 24 horas</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Cargar datos de prueba</h4>
                <p className="text-gray-600 text-sm">Experimenta con datos simulados para entender el sistema</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Generar reportes personalizados</h4>
                <p className="text-gray-600 text-sm">Crea y exporta reportes con tus propios parámetros</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Soporte en tiempo real</h4>
                <p className="text-gray-600 text-sm">Contacta con nuestro equipo vía WhatsApp cuando lo necesites</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} REGEST SpA. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}
