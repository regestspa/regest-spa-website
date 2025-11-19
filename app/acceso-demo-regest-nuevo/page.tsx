"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function AccesoDemoRegestNuevoPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/demo-regest");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-950 to-black flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-white mb-3">
            Accede a la Demo de REGEST
          </h1>
          <p className="text-lg text-orange-200">
            Completa tus datos para continuar
          </p>
        </div>

        <Card className="shadow-2xl border-2 border-orange-500/30 bg-black/40 backdrop-blur-md">
          <CardContent className="pt-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-sm font-medium text-orange-100">
                  Nombre completo
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Escribe tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="h-12 bg-gray-900/50 border-orange-500/30 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="correo" className="text-sm font-medium text-orange-100">
                  Correo electrónico
                </Label>
                <Input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="tu@correo.com"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="h-12 bg-gray-900/50 border-orange-500/30 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-sm font-medium text-orange-100">
                  WhatsApp con código del país
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="+56912345678"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="h-12 bg-gray-900/50 border-orange-500/30 text-white placeholder:text-gray-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white mt-8 shadow-lg shadow-orange-500/50"
              >
                Ingresar a la Demo
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
