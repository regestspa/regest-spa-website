"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Bot, Home, ExternalLink } from "lucide-react";

export default function DemoRegest() {
  const [rentaAnual, setRentaAnual] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [chatResponse, setChatResponse] = useState("");

  const handleCalcular = () => {
    const renta = parseFloat(rentaAnual);
    if (!isNaN(renta)) {
      const impuesto = renta * 0.10;
      setResultado(impuesto);
    }
  };

  const handleChatQuestion = (question: string) => {
    let response = "";
    switch (question) {
      case "iva":
        response = "El IVA se calcula aplicando 19% sobre el valor neto.";
        break;
      case "restaurante":
        response = "Un restaurante necesita inicio de actividades, patente, resolución sanitaria y boleta electrónica.";
        break;
      case "ppm":
        response = "El PPM es un anticipo mensual al Impuesto a la Renta.";
        break;
    }
    setChatResponse(response);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            Demo REGEST
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300">
            Explora nuestras herramientas antes de contratar.
          </p>
          <p className="text-sm text-green-400">
            Acceso concedido exitosamente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="bg-slate-900/90 border-2 border-orange-500/30 shadow-xl hover:border-orange-500/60 transition-all">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <Calculator className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">Calculadora Tributaria</CardTitle>
                  <CardDescription className="text-gray-400">
                    Simula rápidamente tu impuesto estimado.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="renta" className="text-gray-300">
                  Renta anual
                </Label>
                <Input
                  id="renta"
                  type="number"
                  placeholder="Ingresa tu renta anual"
                  value={rentaAnual}
                  onChange={(e) => setRentaAnual(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500"
                />
                <Button
                  onClick={handleCalcular}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white"
                >
                  Calcular
                </Button>
              </div>

              {resultado !== null && (
                <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                  <p className="text-orange-400 font-semibold">
                    Resultado estimado: ${resultado.toLocaleString('es-CL')}
                  </p>
                </div>
              )}

              <Button
                variant="outline"
                className="w-full border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
                onClick={() => window.open('https://wa.me/56912345678', '_blank')}
              >
                Ver versión completa
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/90 border-2 border-orange-500/30 shadow-xl hover:border-orange-500/60 transition-all">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <Bot className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">REGESTBOT</CardTitle>
                  <CardDescription className="text-gray-400">
                    Prueba nuestro asistente inteligente.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <p className="text-gray-300">¿En qué puedo ayudarte?</p>
              </div>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start text-left border-slate-700 text-gray-300 hover:bg-slate-800 hover:text-orange-400"
                  onClick={() => handleChatQuestion('iva')}
                >
                  ¿Cómo se calcula el IVA?
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left border-slate-700 text-gray-300 hover:bg-slate-800 hover:text-orange-400"
                  onClick={() => handleChatQuestion('restaurante')}
                >
                  ¿Qué documentos necesita un restaurante?
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left border-slate-700 text-gray-300 hover:bg-slate-800 hover:text-orange-400"
                  onClick={() => handleChatQuestion('ppm')}
                >
                  ¿Qué es el PPM?
                </Button>
              </div>

              {chatResponse && (
                <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                  <p className="text-gray-300">{chatResponse}</p>
                </div>
              )}

              <Button
                variant="outline"
                className="w-full border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
                onClick={() => window.open('https://wa.me/56912345678', '_blank')}
              >
                Hablar con REGESTBOT real
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-6 text-lg font-semibold shadow-xl shadow-orange-500/30"
          >
            <Home className="mr-2 h-5 w-5" />
            Volver al Inicio
          </Button>
          <Button
            onClick={() => window.location.href = '/acceso-demo-regest-nuevo'}
            variant="outline"
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg font-semibold"
          >
            Nuevo Acceso
          </Button>
        </div>
      </div>
    </div>
  );
}
