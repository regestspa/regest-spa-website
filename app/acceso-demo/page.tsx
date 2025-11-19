"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function AccesoDemoPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    whatsapp: "",
  });

  const webhookUrl = "https://MI-WEBHOOK/registrar-demo";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          correo: formData.correo,
          whatsapp: formData.whatsapp,
        }),
      });

      if (response.ok) {
        router.push("/demo");
      } else {
        alert("Hubo un error al procesar tu solicitud. Por favor intenta nuevamente.");
        setIsLoading(false);
      }
    } catch (error) {
      alert("Hubo un error al procesar tu solicitud. Por favor intenta nuevamente.");
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl shadow-lg mb-6">
            <span className="text-white font-bold text-4xl">R</span>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Accede a la Demo de REGEST
          </h1>

          <p className="text-xl text-gray-600">
            Completa tus datos para ingresar
          </p>
        </div>

        <Card className="shadow-xl border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl">Información de Contacto</CardTitle>
            <CardDescription className="text-base">
              Ingresa tus datos para acceder a la demostración
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-base font-semibold">
                  Nombre completo *
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="correo" className="text-base font-semibold">
                  Correo electrónico *
                </Label>
                <Input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-base font-semibold">
                  WhatsApp con código del país *
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="+56912345678"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="h-12 text-base"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 text-lg font-semibold bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  "Ingresar a la Demo"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center text-gray-500 text-sm mt-8">
          <p>© {new Date().getFullYear()} REGEST SpA. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
}
