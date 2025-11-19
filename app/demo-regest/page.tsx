"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function DemoRegestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-950 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <Card className="shadow-2xl border-2 border-orange-500/30 bg-black/40 backdrop-blur-md">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-20 w-20 text-orange-500" />
            </div>
            <CardTitle className="text-4xl font-bold text-white">
              Demo REGEST
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6 pb-8">
            <p className="text-xl text-orange-200">
              Bienvenido a la demo de REGEST
            </p>
            <p className="text-gray-400">
              Esta es la pantalla de demostración donde se mostrará el contenido de la demo.
            </p>
            <Button
              onClick={() => window.location.href = '/'}
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-3 text-lg"
            >
              Volver al Inicio
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
