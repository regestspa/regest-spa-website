"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Calculator, Sparkles, ArrowRight, Lock, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useSubscription } from "@/hooks/use-subscription";
import { AuthModal } from "@/components/auth/AuthModal";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

export function ProductosORO() {
  const { user } = useAuth();
  const { hasRegestbotAccess, hasCalculatorAccess, loading, isTrialActive, getDaysRemaining, accessCode } = useSubscription();
  const { toast } = useToast();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authPurpose, setAuthPurpose] = useState<"calculator" | "regestbot">("calculator");
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [validatingCode, setValidatingCode] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string>("");

  const validateAndAccess = async (url: string) => {
    if (!user) {
      setAuthPurpose(url.includes("regestbot") ? "regestbot" : "calculator");
      setShowAuthModal(true);
      return;
    }

    const hasAccess = url.includes("regestbot") ? hasRegestbotAccess() : hasCalculatorAccess();

    if (!hasAccess) {
      setPendingUrl(url);
      setShowCodeModal(true);
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleRegestbotAccess = () => {
    validateAndAccess("https://chatgpt.com/g/g-688940f19af881919fe3a753eecf77ed-regestbot");
  };

  const handleCalculatorAccess = () => {
    validateAndAccess("https://statuesque-scone-fcdb4f.netlify.app/");
  };

  const handleValidateCode = async () => {
    if (!codeInput || codeInput.length !== 6) {
      toast({
        title: "Código inválido",
        description: "Por favor ingresa un código de 6 dígitos.",
        variant: "destructive",
      });
      return;
    }

    try {
      setValidatingCode(true);

      const { data: codeData, error } = await supabase
        .from("access_codes")
        .select("code, expires_at")
        .eq("user_id", user?.id)
        .maybeSingle();

      if (error) throw error;

      if (!codeData) {
        toast({
          title: "Sin código",
          description: "No tienes un código de acceso. Ve a 'Mi Plan' para obtener uno.",
          variant: "destructive",
        });
        return;
      }

      if (codeData.code !== codeInput) {
        toast({
          title: "Código incorrecto",
          description: "El código ingresado no es válido.",
          variant: "destructive",
        });
        return;
      }

      const now = new Date();
      const expiresAt = new Date(codeData.expires_at);

      if (now > expiresAt) {
        toast({
          title: "Código expirado",
          description: "Tu código de acceso ha expirado. Actualiza a Premium para continuar.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Código válido",
        description: "Abriendo el producto...",
      });

      setShowCodeModal(false);
      setCodeInput("");
      window.open(pendingUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error validating code:", error);
      toast({
        title: "Error",
        description: "No se pudo validar el código.",
        variant: "destructive",
      });
    } finally {
      setValidatingCode(false);
    }
  };

  return (
    <section
      id="productos-oro"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(251,146,60,0.12),transparent_60%),radial-gradient(circle_at_top_left,rgba(249,115,22,0.08),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-orange-500/50 animate-gradient">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            PRODUCTOS ORO
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Herramientas Premium
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tecnología avanzada para profesionales y empresas exigentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-white">
                  GPT REGESTBOT
                </CardTitle>
                <p className="text-gray-400">
                  Asistente IA que concentra información contable, tributaria y
                  laboral de Chile.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border-2 border-orange-500/30 shadow-inner">
                  <p className="text-lg font-semibold text-white mb-2">
                    Es como tener al mejor tributarista 24/7.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Respuestas instantáneas sobre normativa chilena
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Análisis de casos tributarios complejos
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Actualizado con la legislación vigente
                    </li>
                  </ul>
                </div>

                {user && isTrialActive() && (
                  <div className="mb-3 p-3 bg-gradient-to-r from-orange-950/30 to-amber-950/30 border border-orange-500/30 rounded-xl">
                    <p className="text-sm text-orange-400 font-semibold">
                      Prueba gratuita: {getDaysRemaining()} días restantes
                    </p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleRegestbotAccess}
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-full shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-600/50 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    size="lg"
                  >
                    {!user ? (
                      <>Registrarse y probar gratis <ArrowRight className="ml-2 h-4 w-4" /></>
                    ) : !hasRegestbotAccess() ? (
                      <><Lock className="mr-2 h-4 w-4" /> Actualizar a Premium</>
                    ) : (
                      <>Abrir REGESTBOT <ArrowRight className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl font-bold text-white">
                  Calculadora Tributaria
                </CardTitle>
                <p className="text-gray-400">
                  Simula y planifica el Global Complementario con precisión
                  profesional.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border-2 border-orange-500/30 shadow-inner">
                  <p className="text-lg font-semibold text-white mb-2">
                    Escenarios comparativos para decisiones inteligentes.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Simulación de múltiples escenarios tributarios
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Exportación a PDF y Excel
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      Planificación anual completa
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleCalculatorAccess}
                    className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-600/50 transform hover:scale-105 transition-all"
                    size="lg"
                  >
                    {user ? "Ver demo" : "Iniciar sesión para ver demo"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => {
          setShowAuthModal(false);
          if (authPurpose === "calculator") {
            window.open("https://statuesque-scone-fcdb4f.netlify.app/", "_blank", "noopener,noreferrer");
          }
        }}
      />

      <Dialog open={showCodeModal} onOpenChange={setShowCodeModal}>
        <DialogContent className="bg-gray-900 border-orange-500/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <KeyRound className="h-6 w-6 text-orange-500" />
              Ingresa tu Código de Acceso
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Ingresa el código de 6 dígitos que recibiste en tu WhatsApp o correo electrónico.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="code" className="text-gray-300">
                Código de Acceso
              </Label>
              <Input
                id="code"
                type="text"
                maxLength={6}
                placeholder="000000"
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value.replace(/\D/g, ''))}
                className="bg-gray-800 border-gray-700 text-white text-center text-2xl tracking-widest font-bold"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleValidateCode();
                  }
                }}
              />
            </div>

            <div className="bg-orange-950/30 border border-orange-500/30 rounded-lg p-4">
              <p className="text-sm text-gray-300 mb-2">
                ¿No tienes tu código?
              </p>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• Ve a la sección "Mi Plan" para ver o solicitar tu código</li>
                <li>• Usa el botón de WhatsApp para recibirlo nuevamente</li>
                <li>• También puedes regenerar tu código si lo perdiste</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  setShowCodeModal(false);
                  setCodeInput("");
                }}
                className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleValidateCode}
                disabled={validatingCode || codeInput.length !== 6}
                className="flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
              >
                {validatingCode ? "Validando..." : "Validar Código"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
