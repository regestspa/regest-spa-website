"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function AccesoDemoRegestPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    whatsapp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/demo");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Accede a la Demo de REGEST
          </h1>
          <p className="text-lg text-gray-600">
            Ingresa tus datos para comenzar
          </p>
        </div>

        <Card className="shadow-2xl border border-gray-200">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-sm font-medium text-gray-700">
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
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="correo" className="text-sm font-medium text-gray-700">
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
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
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
                  className="h-11"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base font-semibold bg-orange-600 hover:bg-orange-700 text-white mt-6"
              >
                Entrar a la Demo
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
