"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function Contacto() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      toast({
        title: "Error",
        description: "Por favor completa los campos requeridos",
        variant: "destructive"
      });
      return;
    }

    const whatsappText = `Hola soy ${formData.nombre} (${formData.email}) Tel: ${formData.telefono || 'No proporcionado'} Mensaje: ${formData.mensaje}`;
    const whatsappUrl = `https://wa.me/56982428895?text=${encodeURIComponent(whatsappText)}`;

    window.open(whatsappUrl, '_blank');

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: ""
    });

    toast({
      title: "Éxito",
      description: "Redirigiendo a WhatsApp...",
    });
  };

  return (
    <section
      id="contacto"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.08),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Escríbenos y te responderemos a la brevedad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full rounded-3xl border-2 border-orange-500/30 shadow-2xl bg-gray-900/50 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Envíanos un mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre completo
                    </label>
                    <Input
                      id="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="rounded-xl bg-black/30 border-orange-500/30 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-xl bg-black/30 border-orange-500/30 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="+56 9 1234 5678"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="rounded-xl bg-black/30 border-orange-500/30 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={5}
                      required
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="rounded-xl bg-black/30 border-orange-500/30 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-full py-6 text-lg shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-600/50 transform hover:scale-105 transition-all"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="rounded-3xl border-2 border-orange-500/30 shadow-2xl bg-gray-900/50 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Información de contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/50">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Teléfono</h3>
                    <p className="text-gray-400">+56 9 8242 8895</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/50">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/56982428895"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline hover:text-orange-600 transition-colors"
                    >
                      Chatear ahora
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/50">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">YouTube</h3>
                    <a
                      href="https://www.youtube.com/@impuestochile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:underline hover:text-orange-600 transition-colors"
                    >
                      @impuestochile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-2xl bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 animate-gradient shadow-orange-500/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  Política de servicio
                </h3>
                <p className="text-white/90 leading-relaxed">
                  En REGEST SpA nos comprometemos a brindar servicios de calidad con
                  transparencia y profesionalismo. Trabajamos bajo estándares éticos
                  y cumplimos rigurosamente con la normativa chilena vigente.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
