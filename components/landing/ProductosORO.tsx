"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Bot, Calculator, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import { useSubscription } from "@/hooks/use-subscription";

const REGESTBOT_URL = "https://chatgpt.com/g/g-688940f19af881919fe3a753eecf77ed-regestbot";
const CALCULATOR_URL = "https://statuesque-scone-fcdb4f.netlify.app/";

export function ProductosORO() {
  const router = useRouter();
  const { user } = useAuth();
  const { hasRegestbotAccess, hasCalculatorAccess, loading: subLoading } = useSubscription();

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);

  const guardedOpen = (url: string, checkAccess: () => boolean) => {
    // Not logged in → show auth modal, remember which URL to open after login
    if (!user) {
      setPendingUrl(url);
      setShowAuthModal(true);
      return;
    }

    // Still loading subscription state → wait for /demo-regest to handle it
    if (subLoading) {
      router.push("/demo-regest");
      return;
    }

    // Logged in but no active access → payment wall
    if (!checkAccess()) {
      router.push("/suscripcion");
      return;
    }

    // Fully authorized
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleAuthSuccess = () => {
    setShowAuthModal(false);
    // After login, send to demo page — it will re-check subscription and show PaymentWall if needed
    router.push("/demo-regest");
    setPendingUrl(null);
  };

  return (
    <>
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
              Accede a nuestras herramientas especializadas de IA y planificación tributaria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 h-full flex flex-col">
                <CardHeader className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl" />
                  <Bot className="h-12 w-12 text-orange-500 mb-4 relative z-10" />
                  <CardTitle className="text-2xl font-bold text-white relative z-10">
                    REGESTBOT
                  </CardTitle>
                  <p className="text-gray-400 relative z-10">Asistente de IA Especializado</p>
                </CardHeader>

                <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                  <div className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border-2 border-orange-500/30 shadow-inner">
                    <p className="text-lg font-semibold text-white mb-2">
                      Tu experto tributario disponible 24/7.
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Respuestas precisas sobre legislación tributaria
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Casos prácticos y ejemplos detallados
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        Actualizado con la legislación vigente
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => guardedOpen(REGESTBOT_URL, hasRegestbotAccess)}
                      className="flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white rounded-full shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-600/50 transform hover:scale-105 transition-all"
                      size="lg"
                    >
                      Abrir REGESTBOT <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-black border-2 border-orange-500/30 shadow-2xl hover:shadow-orange-500/30 transition-all duration-300 h-full flex flex-col">
                <CardHeader className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-3xl" />
                  <Calculator className="h-12 w-12 text-amber-500 mb-4 relative z-10" />
                  <CardTitle className="text-2xl font-bold text-white relative z-10">
                    Calculadora Tributaria
                  </CardTitle>
                  <p className="text-gray-400 relative z-10">Planificación Tributaria Avanzada</p>
                </CardHeader>

                <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
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
                      onClick={() => guardedOpen(CALCULATOR_URL, hasCalculatorAccess)}
                      className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-full shadow-lg shadow-orange-500/50 hover:shadow-xl hover:shadow-orange-600/50 transform hover:scale-105 transition-all"
                      size="lg"
                    >
                      Abrir Calculadora <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => {
          setShowAuthModal(false);
          setPendingUrl(null);
        }}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
}
