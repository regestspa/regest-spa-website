"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AccesoDemoRegestNuevo() {
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
      <div className="w-full max-w-2xl">
        <Card className="shadow-2xl border-2 border-orange-500/50 bg-slate-900/80 backdrop-blur-md">
          <CardHeader className="text-center space-y-4 pb-6">
            <CardTitle className="text-5xl font-bold text-white">
              Acceso a Demo REGEST
            </CardTitle>
            <p className="text-xl text-orange-200">
              Completa tus datos para acceder a la demostración
            </p>
          </CardHeader>
          <CardContent className="pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-base font-medium text-orange-100">
                  Nombre Completo
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="h-14 text-lg bg-slate-800/50 border-orange-500/30 text-white placeholder:text-gray-400 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="correo" className="text-base font-medium text-orange-100">
                  Correo Electrónico
                </Label>
                <Input
                  id="correo"
                  name="correo"
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="h-14 text-lg bg-slate-800/50 border-orange-500/30 text-white placeholder:text-gray-400 focus:border-orange-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-base font-medium text-orange-100">
                  WhatsApp (con código de país)
                </Label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="h-14 text-lg bg-slate-800/50 border-orange-500/30 text-white placeholder:text-gray-400 focus:border-orange-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-xl shadow-orange-500/30 transition-all duration-300"
              >
                Acceder a la Demo
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
