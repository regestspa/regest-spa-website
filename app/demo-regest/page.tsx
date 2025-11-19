"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home } from "lucide-react";

export default function DemoRegest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-950 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <Card className="shadow-2xl border-2 border-orange-500/50 bg-slate-900/80 backdrop-blur-md">
          <CardHeader className="text-center space-y-6 pt-12 pb-8">
            <div className="flex justify-center">
              <div className="rounded-full bg-orange-500/20 p-6">
                <CheckCircle className="h-24 w-24 text-orange-500" />
              </div>
            </div>
            <CardTitle className="text-6xl font-bold text-white">
              Demo REGEST
            </CardTitle>
            <p className="text-2xl text-orange-200">
              ¡Bienvenido a la Demostración!
            </p>
          </CardHeader>
          <CardContent className="text-center space-y-8 pb-12">
            <div className="space-y-4">
              <p className="text-xl text-gray-300">
                Acceso concedido exitosamente
              </p>
              <p className="text-lg text-gray-400">
                Esta es la pantalla de demostración de REGEST donde podrás explorar todas las funcionalidades de nuestra plataforma.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-10 py-6 text-lg font-semibold shadow-xl shadow-orange-500/30"
              >
                <Home className="mr-2 h-5 w-5" />
                Volver al Inicio
              </Button>
              <Button
                onClick={() => window.location.href = '/acceso-demo-regest-nuevo'}
                variant="outline"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-10 py-6 text-lg font-semibold"
              >
                Nuevo Acceso
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
