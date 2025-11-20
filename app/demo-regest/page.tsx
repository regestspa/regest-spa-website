"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Bot, Home, ExternalLink } from "lucide-react";

interface CalculoResultadoAnual {
  impuesto: number;
  factor: number;
  rebaja: number;
  tramo: string;
  uta: number;
}

export default function DemoRegest() {
  const [rentaAnual, setRentaAnual] = useState("");
  const [resultadoAnual, setResultadoAnual] = useState<CalculoResultadoAnual | null>(null);
  const [chatResponse, setChatResponse] = useState("");

  const handleCalcularAnual = () => {
    const renta = parseFloat(rentaAnual);
    if (isNaN(renta) || renta < 0) return;

    const UTA = 617180;
    const uta = renta / UTA;

    let impuesto = 0;
    let factor = 0;
    let rebaja = 0;
    let tramo = "";

    if (uta <= 13.5) {
      factor = 0;
      rebaja = 0;
      impuesto = 0;
      tramo = "0 a 13,5 UTA (Exento)";
    } else if (uta <= 30) {
      factor = 0.04;
      rebaja = 540756;
      impuesto = (renta * factor) - rebaja;
      tramo = "13,5 a 30 UTA";
    } else if (uta <= 50) {
      factor = 0.08;
      rebaja = 1081511;
      impuesto = (renta * factor) - rebaja;
      tramo = "30 a 50 UTA";
    } else if (uta <= 70) {
      factor = 0.135;
      rebaja = 2491370;
      impuesto = (renta * factor) - rebaja;
      tramo = "50 a 70 UTA";
    } else if (uta <= 90) {
      factor = 0.23;
      rebaja = 7340222;
      impuesto = (renta * factor) - rebaja;
      tramo = "70 a 90 UTA";
    } else if (uta <= 120) {
      factor = 0.304;
      rebaja = 13296451;
      impuesto = (renta * factor) - rebaja;
      tramo = "90 a 120 UTA";
    } else {
      factor = 0.35;
      rebaja = 17522651;
      impuesto = (renta * factor) - rebaja;
      tramo = "Más de 120 UTA";
    }

    setResultadoAnual({
      impuesto: Math.max(0, impuesto),
      factor: factor * 100,
      rebaja,
      tramo,
      uta
    });
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
                <div className="flex-1">
                  <CardTitle className="text-xl text-white">Calculadora Tributaria</CardTitle>
                  <CardDescription className="text-gray-400 text-sm mt-1">
                    Elige entre cálculo mensual o anual
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Calculadora Anual (IGC Real)
                  </h3>
                  <p className="text-sm text-gray-400">
                    Ingresa tu renta anual sin deducciones.
                  </p>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="renta-anual" className="text-gray-300">
                    Renta anual
                  </Label>
                  <Input
                    id="renta-anual"
                    type="number"
                    placeholder="Ingresa tu renta anual"
                    value={rentaAnual}
                    onChange={(e) => setRentaAnual(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-500"
                  />
                  <Button
                    onClick={handleCalcularAnual}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white"
                  >
                    Calcular Impuesto Anual
                  </Button>
                </div>

                {resultadoAnual !== null && (
                  <div className="space-y-4">
                    <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg space-y-2">
                      <p className="text-orange-400 font-bold text-lg">
                        Impuesto anual estimado: ${resultadoAnual.impuesto.toLocaleString('es-CL', { maximumFractionDigits: 0 })}
                      </p>
                      <div className="text-sm text-gray-300 space-y-1">
                        <p>Tu renta: {resultadoAnual.uta.toFixed(2)} UTA</p>
                        <p>Tasa aplicada: {resultadoAnual.factor}%</p>
                        <p>Rebaja del tramo: ${resultadoAnual.rebaja.toLocaleString('es-CL')}</p>
                        <p>Tramo: {resultadoAnual.tramo}</p>
                      </div>
                    </div>

                    <div className="p-3 bg-slate-800 border border-slate-700 rounded-lg">
                      <p className="text-xs text-gray-400">
                        <span className="font-semibold text-gray-300">Referencia:</span> 1 UTA = $617.180 (valor fijo para esta simulación según DL 824, art. 52)
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {resultadoAnual !== null && (
                <div className="space-y-3 pt-4 border-t border-slate-700">
                  <p className="text-sm text-gray-300 text-center leading-relaxed">
                    ¿Quieres optimizar tu impuesto y pagar solo lo justo?<br />
                    Accede a la versión completa y descubre cuánto puedes ahorrar con REGEST.
                  </p>
                  <Button
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-6 text-base font-semibold"
                    onClick={() => window.open('https://wa.me/56912345678', '_blank')}
                  >
                    Solicitar versión completa
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              )}
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
