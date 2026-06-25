"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Bot, LogOut, User, Crown, Chrome as Home, ExternalLink, Lock, Clock as Unlock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AuthModal } from "@/components/auth/AuthModal";
import { PaymentWall } from "@/components/demo/PaymentWall";
import { useAuth } from "@/contexts/AuthContext";
import { useSubscription } from "@/hooks/use-subscription";

interface CalculoResultadoAnual {
  impuesto: number;
  factor: number;
  rebaja: number;
  tramo: string;
  uta: number;
}

const UTA = 617180;

function calcularIGC(renta: number): CalculoResultadoAnual {
  const uta = renta / UTA;
  let impuesto = 0;
  let factor = 0;
  let rebaja = 0;
  let tramo = "";

  if (uta <= 13.5) {
    factor = 0; rebaja = 0; impuesto = 0;
    tramo = "0 a 13,5 UTA (Exento)";
  } else if (uta <= 30) {
    factor = 0.04; rebaja = 540756;
    tramo = "13,5 a 30 UTA";
  } else if (uta <= 50) {
    factor = 0.08; rebaja = 1081511;
    tramo = "30 a 50 UTA";
  } else if (uta <= 70) {
    factor = 0.135; rebaja = 2491370;
    tramo = "50 a 70 UTA";
  } else if (uta <= 90) {
    factor = 0.23; rebaja = 7340222;
    tramo = "70 a 90 UTA";
  } else if (uta <= 120) {
    factor = 0.304; rebaja = 13296451;
    tramo = "90 a 120 UTA";
  } else {
    factor = 0.35; rebaja = 17522651;
    tramo = "Más de 120 UTA";
  }

  impuesto = Math.max(0, renta * factor - rebaja);
  return { impuesto, factor: factor * 100, rebaja, tramo, uta };
}

const chatAnswers: Record<string, string> = {
  iva: "El IVA (19%) se aplica sobre el valor neto de la operación. El vendedor lo recauda y lo entera mensualmente al SII.",
  restaurante: "Un restaurante necesita: inicio de actividades ante el SII, patente municipal, resolución sanitaria del SEREMI de Salud, boleta electrónica y declaración mensual de IVA.",
  ppm: "El PPM (Pago Provisional Mensual) es un anticipo a cuenta del Impuesto a la Renta que los contribuyentes de 1ª categoría pagan cada mes, calculado como un % de sus ventas netas.",
  renta: "Los trabajadores dependientes tributan según los tramos del Impuesto de Segunda Categoría. Los independientes aplican el IGC (Global Complementario) sobre su renta anual.",
};

export default function DemoRegestPage() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const { hasCalculatorAccess, hasRegestbotAccess, isPremium, isTrialActive, loading: subLoading } = useSubscription();

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [rentaAnual, setRentaAnual] = useState("");
  const [resultado, setResultado] = useState<CalculoResultadoAnual | null>(null);
  const [chatResponse, setChatResponse] = useState("");
  const [activeTab, setActiveTab] = useState<"calculator" | "regestbot">("calculator");

  // Show auth modal immediately if not logged in
  useEffect(() => {
    if (!user && !subLoading) {
      setShowAuthModal(true);
    }
  }, [user, subLoading]);

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  const handleCalc = () => {
    const renta = parseFloat(rentaAnual);
    if (isNaN(renta) || renta <= 0) return;
    setResultado(calcularIGC(renta));
  };

  const handleChat = (key: string) => {
    setChatResponse(chatAnswers[key] ?? "");
  };

  const canUseCalculator = user && hasCalculatorAccess();
  const canUseRegestbot = user && hasRegestbotAccess();

  const planBadge = isPremium()
    ? { label: "Premium", className: "bg-gradient-to-r from-orange-600 to-amber-500 text-white" }
    : isTrialActive()
    ? { label: "Prueba Gratuita", className: "bg-blue-600/20 text-blue-400 border border-blue-500/30" }
    : { label: "Free", className: "bg-gray-700/50 text-gray-400 border border-gray-600/30" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push("/")} className="text-orange-500 font-bold text-xl tracking-tight">
              REGEST
            </button>
            <Separator orientation="vertical" className="h-5 bg-white/10" />
            <span className="text-gray-400 text-sm">Demo Interactiva</span>
          </div>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm truncate max-w-[160px]">{user.email}</span>
              </div>
              <Badge className={planBadge.className}>
                {isPremium() && <Crown className="w-3 h-3 mr-1 inline" />}
                {planBadge.label}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-gray-400 hover:text-white"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <Button
              size="sm"
              onClick={() => setShowAuthModal(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              Iniciar Sesión
            </Button>
          )}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent mb-3">
            Demo REGEST
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Herramientas reales para la gestión tributaria. Inicia sesión y accede según tu plan.
          </p>
        </motion.div>

        {/* Access status bar */}
        {user && !subLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border ${canUseCalculator ? "bg-green-950/30 border-green-500/30 text-green-400" : "bg-red-950/20 border-red-500/20 text-red-400"}`}>
              {canUseCalculator ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
              Calculadora Anual
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm border ${canUseRegestbot ? "bg-green-950/30 border-green-500/30 text-green-400" : "bg-red-950/20 border-red-500/20 text-red-400"}`}>
              {canUseRegestbot ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
              REGESTBOT
            </div>
            {!isPremium() && !isTrialActive() && (
              <button
                onClick={() => router.push("/suscripcion")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm border border-orange-500/40 text-orange-400 hover:bg-orange-500/10 transition-colors"
              >
                <Crown className="w-3.5 h-3.5" />
                Ver planes
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </motion.div>
        )}

        {/* Tab switcher */}
        {user && (
          <div className="flex gap-2 justify-center mb-8">
            {(["calculator", "regestbot"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-500/20"
                    : "bg-slate-800/50 text-gray-400 hover:text-white border border-white/5"
                }`}
              >
                {tab === "calculator" ? <Calculator className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                {tab === "calculator" ? "Calculadora" : "REGESTBOT"}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        {!user ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5">
              <Lock className="w-7 h-7 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Inicia sesión para continuar</h2>
            <p className="text-gray-400 mb-6 max-w-sm">
              Crea una cuenta gratuita o inicia sesión para acceder a las herramientas de REGEST.
            </p>
            <Button
              onClick={() => setShowAuthModal(true)}
              className="bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white px-8 py-6 text-base font-semibold"
            >
              Iniciar Sesión / Registrarse
            </Button>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            {activeTab === "calculator" && (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                <Card className="bg-slate-900/80 border-orange-500/20 shadow-xl max-w-2xl mx-auto">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-orange-500/15 rounded-xl">
                        <Calculator className="h-7 w-7 text-orange-500" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl">Calculadora Anual IGC</CardTitle>
                        <CardDescription className="text-gray-400">
                          Impuesto Global Complementario según DL 824 art. 52
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {canUseCalculator ? (
                      <div className="space-y-5">
                        <div className="space-y-2">
                          <Label htmlFor="renta" className="text-gray-300">Renta anual bruta (CLP)</Label>
                          <Input
                            id="renta"
                            type="number"
                            placeholder="Ej: 15000000"
                            value={rentaAnual}
                            onChange={(e) => setRentaAnual(e.target.value)}
                            className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-600"
                          />
                        </div>
                        <Button
                          onClick={handleCalc}
                          className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white"
                        >
                          Calcular impuesto
                        </Button>

                        {resultado && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-3"
                          >
                            <div className="p-5 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                              <p className="text-orange-300 font-bold text-2xl mb-1">
                                ${resultado.impuesto.toLocaleString("es-CL", { maximumFractionDigits: 0 })}
                              </p>
                              <p className="text-gray-400 text-sm">Impuesto anual estimado</p>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {[
                                { label: "UTA equivalente", value: `${resultado.uta.toFixed(2)} UTA` },
                                { label: "Tasa marginal", value: `${resultado.factor}%` },
                                { label: "Rebaja de tramo", value: `$${resultado.rebaja.toLocaleString("es-CL")}` },
                                { label: "Tramo tributario", value: resultado.tramo },
                              ].map((item) => (
                                <div key={item.label} className="p-3 bg-slate-800/80 rounded-lg border border-slate-700">
                                  <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                                  <p className="text-sm font-semibold text-gray-200">{item.value}</p>
                                </div>
                              ))}
                            </div>
                            <p className="text-xs text-gray-500 text-center">
                              1 UTA = $617.180 · Referencia: DL 824, art. 52
                            </p>
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <PaymentWall feature="calculator" returnPath="/demo-regest" />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeTab === "regestbot" && (
              <motion.div
                key="regestbot"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
              >
                <Card className="bg-slate-900/80 border-orange-500/20 shadow-xl max-w-2xl mx-auto">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-orange-500/15 rounded-xl">
                        <Bot className="h-7 w-7 text-orange-500" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl">REGESTBOT</CardTitle>
                        <CardDescription className="text-gray-400">
                          Asistente tributario inteligente de REGEST
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {canUseRegestbot ? (
                      <div className="space-y-5">
                        <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                          <p className="text-gray-300 text-sm">
                            Hola, soy REGESTBOT. ¿En qué puedo ayudarte hoy?
                          </p>
                        </div>

                        <div className="space-y-2">
                          {[
                            { key: "iva", label: "¿Cómo se calcula el IVA?" },
                            { key: "restaurante", label: "¿Qué documentos necesita un restaurante?" },
                            { key: "ppm", label: "¿Qué es el PPM?" },
                            { key: "renta", label: "¿Cómo tributan los trabajadores independientes?" },
                          ].map(({ key, label }) => (
                            <Button
                              key={key}
                              variant="outline"
                              onClick={() => handleChat(key)}
                              className="w-full justify-start text-left border-slate-700 text-gray-300 hover:bg-slate-800 hover:text-orange-400 hover:border-orange-500/40 transition-all"
                            >
                              {label}
                            </Button>
                          ))}
                        </div>

                        <AnimatePresence>
                          {chatResponse && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl"
                            >
                              <p className="text-gray-300 text-sm leading-relaxed">{chatResponse}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <Button
                          variant="outline"
                          className="w-full border-green-600/40 text-green-400 hover:bg-green-600/10"
                          onClick={() => window.open("https://wa.me/56982428895", "_blank")}
                        >
                          Hablar con asesor real
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <PaymentWall feature="regestbot" returnPath="/demo-regest" />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        )}

        {/* Footer nav */}
        <div className="flex justify-center gap-4 mt-12">
          <Button
            onClick={() => router.push("/")}
            variant="ghost"
            className="text-gray-400 hover:text-white"
          >
            <Home className="w-4 h-4 mr-2" />
            Inicio
          </Button>
          {user && (
            <Button
              onClick={() => router.push("/suscripcion")}
              variant="ghost"
              className="text-gray-400 hover:text-orange-400"
            >
              <Crown className="w-4 h-4 mr-2" />
              Mi suscripción
            </Button>
          )}
        </div>
      </main>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => setShowAuthModal(false)}
      />
    </div>
  );
}
