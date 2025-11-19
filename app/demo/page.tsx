"use client";

import { MessageCircle, FileText, BarChart3, Calculator, Clock, CheckCircle2, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DemoPage() {
  const whatsappNumber = "56982218271";
  const whatsappMessage = encodeURIComponent("Hola, necesito soporte con mi demo de REGEST");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const demoFeatures = [
    {
      icon: FileText,
      title: "Gestión Contable",
      description: "Explora nuestras herramientas de contabilidad y gestión financiera",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Calculator,
      title: "Análisis Tributario",
      description: "Visualiza reportes y análisis tributarios en tiempo real",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: BarChart3,
      title: "Análisis de Cartera",
      description: "Monitorea el estado de tu cartera y recuperación de créditos",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: TrendingUp,
      title: "Planificación Estratégica",
      description: "Herramientas de planificación y proyección financiera",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      icon: Shield,
      title: "Auditoría y Control",
      description: "Sistemas de control y auditoría de procesos contables",
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
    {
      icon: CheckCircle2,
      title: "Reportes Automáticos",
      description: "Genera reportes personalizados automáticamente",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl shadow-lg mb-6">
            <span className="text-white font-bold text-4xl">R</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Bienvenido a tu Demo de <span className="text-orange-600">REGEST</span>
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Gracias por verificar tu identidad
          </p>

          <Badge variant="outline" className="px-6 py-3 text-base border-orange-300 bg-orange-50">
            <Clock className="w-5 h-5 mr-2 text-orange-600" />
            <span className="text-orange-800 font-medium">
              Tu acceso estará activo por 24 horas
            </span>
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {demoFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gray-200 hover:border-orange-300">
                <CardHeader>
                  <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-gradient-to-br from-orange-600 to-orange-500 border-0 shadow-xl mb-12">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl text-white mb-2">
              ¿Necesitas ayuda con tu demo?
            </CardTitle>
            <CardDescription className="text-orange-50 text-lg">
              Nuestro equipo de soporte está disponible para responder tus preguntas y guiarte en el uso de la plataforma
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button
              size="lg"
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 font-semibold shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Contactar Soporte WhatsApp
            </Button>
          </CardContent>
        </Card>

        <Card className="border-gray-200">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">¿Qué puedes hacer en tu demo?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-lg">Explorar todas las funcionalidades</h4>
                  <p className="text-gray-600">Acceso completo a todas las herramientas de REGEST durante 24 horas</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-lg">Cargar datos de prueba</h4>
                  <p className="text-gray-600">Experimenta con datos simulados para entender el sistema</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-lg">Generar reportes personalizados</h4>
                  <p className="text-gray-600">Crea y exporta reportes con tus propios parámetros</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-lg">Soporte en tiempo real</h4>
                  <p className="text-gray-600">Contacta con nuestro equipo vía WhatsApp cuando lo necesites</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} REGEST SpA. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}
