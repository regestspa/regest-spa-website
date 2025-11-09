"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const { signIn, signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Inicio de sesión exitoso");
      onClose();
      onSuccess?.();
    }

    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!whatsapp || whatsapp.length < 8) {
      toast.error("Por favor ingresa un número de WhatsApp válido");
      return;
    }

    setLoading(true);

    const { error } = await signUp(email, password, whatsapp);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Cuenta creada exitosamente");
      onClose();
      onSuccess?.();
    }

    setLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-gray-900 border-orange-500/30">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">Acceso a Demo</DialogTitle>
          <DialogDescription className="text-gray-400">
            Inicia sesión o crea una cuenta para acceder a la demo de la Calculadora Tributaria
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger value="signin" className="data-[state=active]:bg-orange-600">
              Iniciar Sesión
            </TabsTrigger>
            <TabsTrigger value="signup" className="data-[state=active]:bg-orange-600">
              Registrarse
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signin-email" className="text-gray-300">Email</Label>
                <Input
                  id="signin-email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signin-password" className="text-gray-300">Contraseña</Label>
                <Input
                  id="signin-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
              >
                {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-gray-300">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-whatsapp" className="text-gray-300">WhatsApp</Label>
                <Input
                  id="signup-whatsapp"
                  type="text"
                  placeholder="+56 9 1234 5678"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  required
                  minLength={8}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <p className="text-xs text-gray-500">Incluye código de país (ej. +56 para Chile)</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-gray-300">Contraseña</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
              >
                {loading ? "Creando cuenta..." : "Crear Cuenta"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
