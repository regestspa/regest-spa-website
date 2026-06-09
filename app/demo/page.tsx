"use client";

import { MessageCircle, Briefcase, Zap, ChartBar as FileBarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DemoPage() {
  const whatsappUrl = "https://wa.me/56982428895";

  const demoFeatures = [
    {
      icon: Briefcase,
      title: "Gestión de Cartera",
      description: "Monitorea y administra tu cartera de clientes de manera eficiente",
    },
    {
      icon: Zap,
      title: "Automatización de Procesos",
      description: "Optimiza tus operaciones con flujos de trabajo automatizados",
    },
    {
      icon: FileBarChart,
      title: "Panel Tributario",
      description: "Accede a reportes y análisis tributarios en tiempo real",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Bienvenido a tu Demo de REGEST
          </h1>

          <p className="text-2xl text-gray-600">
            Tu acceso ha sido activado correctamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {demoFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-gray-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mb-12">
          <Button
            size="lg"
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-7 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <MessageCircle className="w-7 h-7 mr-3" />
            Contactar Soporte por WhatsApp
          </Button>
        </div>

        <div className="text-center text-gray-500 text-sm mt-16">
          <p>Acceso válido por 24 horas.</p>
        </div>
      </div>
    </div>
  );
}
