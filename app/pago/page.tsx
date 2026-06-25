"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CreditCard, Lock, ShieldCheck, ArrowLeft, Check, CircleAlert as AlertCircle, Loader as Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const PLAN_DETAILS = {
  premium: {
    name: "Plan Premium",
    price: 29990,
    description: "Acceso completo a REGESTBOT y Calculadora Tributaria",
    features: [
      "REGESTBOT con respuestas ilimitadas",
      "Calculadora Anual IGC completa",
      "Exportación de resultados",
      "Soporte dedicado 24/7",
    ],
  },
};

function formatCard(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

function formatExpiry(value: string) {
  return value
    .replace(/\D/g, "")
    .slice(0, 4)
    .replace(/^(\d{2})(\d)/, "$1/$2");
}

function PagoContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();

  const planKey = (searchParams.get("plan") ?? "premium") as keyof typeof PLAN_DETAILS;
  const returnTo = searchParams.get("return") ?? "/demo-regest";
  const plan = PLAN_DETAILS[planKey] ?? PLAN_DETAILS.premium;

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [processing, setProcessing] = useState(false);
  const [step, setStep] = useState<"form" | "processing" | "done">("form");

  useEffect(() => {
    if (!user) {
      router.push(`/demo-regest`);
    }
  }, [user]);

  const isFormValid =
    cardNumber.replace(/\s/g, "").length === 16 &&
    cardName.trim().length >= 3 &&
    expiry.length === 5 &&
    cvv.length >= 3;

  const handlePay = async () => {
    if (!user || !isFormValid) return;
    setProcessing(true);
    setStep("processing");

    // Simulate network delay (Flow/Webpay processing)
    await new Promise((r) => setTimeout(r, 2800));

    try {
      const fakeRef = `FLOW-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)
        .toUpperCase()}`;

      const { data: planRow } = await supabase
        .from("subscription_plans")
        .select("id")
        .eq("name", "Premium")
        .single();

      if (!planRow) throw new Error("Plan no encontrado");

      const { error } = await supabase.from("user_subscriptions").upsert(
        {
          user_id: user.id,
          plan_id: planRow.id,
          status: "active",
          payment_status: "paid",
          payment_reference: fakeRef,
          paid_at: new Date().toISOString(),
          is_trial: false,
          started_at: new Date().toISOString(),
          expires_at: new Date(
            Date.now() + 30 * 24 * 60 * 60 * 1000
          ).toISOString(),
        },
        { onConflict: "user_id" }
      );

      if (error) throw error;

      setStep("done");
      await new Promise((r) => setTimeout(r, 1200));

      router.push(
        `/pago/confirmacion?status=success&ref=${fakeRef}&return=${encodeURIComponent(returnTo)}`
      );
    } catch (err: any) {
      toast.error("Error al procesar el pago", { description: err.message });
      setStep("form");
      setProcessing(false);
    }
  };

  if (step === "processing" || step === "done") {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 p-8"
        >
          <div className="relative mx-auto w-20 h-20">
            <div className="w-20 h-20 rounded-full border-4 border-orange-500/20 border-t-orange-500 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              {step === "done" ? (
                <Check className="w-8 h-8 text-green-400" />
              ) : (
                <Loader2 className="w-7 h-7 text-orange-400 animate-spin" />
              )}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {step === "done" ? "Pago aprobado" : "Procesando pago..."}
            </h2>
            <p className="text-gray-400 text-sm">
              {step === "done"
                ? "Redirigiendo a la confirmación..."
                : "Conectando con Flow / Webpay. Por favor espera."}
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Header */}
      <header className="border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </button>
          <div className="flex items-center gap-2 text-gray-400 text-xs">
            <Lock className="w-3.5 h-3.5 text-green-400" />
            Pago seguro cifrado
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm mb-4">
            <ShieldCheck className="w-4 h-4" />
            Simulación Flow / Webpay
          </div>
          <h1 className="text-3xl font-bold text-white">Completa tu pago</h1>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-3"
          >
            <Card className="bg-slate-900/80 border-white/10">
              <CardHeader className="pb-4">
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-orange-400" />
                  Datos de la tarjeta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {/* Bank logos row */}
                <div className="flex gap-2 flex-wrap">
                  {["Visa", "Mastercard", "RedCompra", "Débito"].map((b) => (
                    <span
                      key={b}
                      className="px-2.5 py-1 rounded text-xs font-semibold bg-slate-800 text-gray-400 border border-slate-700"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">
                    Número de tarjeta
                  </Label>
                  <Input
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCard(e.target.value))}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-600 font-mono tracking-widest"
                    maxLength={19}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300 text-sm">
                    Nombre en la tarjeta
                  </Label>
                  <Input
                    placeholder="NOMBRE APELLIDO"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value.toUpperCase())}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-600 uppercase"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-sm">
                      Vencimiento
                    </Label>
                    <Input
                      placeholder="MM/AA"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-600 font-mono"
                      maxLength={5}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-300 text-sm">CVV</Label>
                    <Input
                      placeholder="123"
                      value={cvv}
                      onChange={(e) =>
                        setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))
                      }
                      type="password"
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-600 font-mono"
                      maxLength={4}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 p-3 rounded-lg bg-blue-950/30 border border-blue-500/20">
                  <AlertCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <p className="text-xs text-blue-300 leading-relaxed">
                    Este es un entorno de{" "}
                    <strong>simulación</strong>. Puedes ingresar cualquier
                    número de tarjeta de prueba. No se realizará ningún cobro
                    real.
                  </p>
                </div>

                <Button
                  onClick={handlePay}
                  disabled={!isFormValid || processing}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-semibold py-6 text-base shadow-lg shadow-orange-500/20 disabled:opacity-40"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Pagar $
                  {plan.price.toLocaleString("es-CL")} CLP
                </Button>

                <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                  Conexión SSL 256-bit cifrada
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: order summary */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <Card className="bg-slate-900/60 border-orange-500/20 sticky top-6">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-base">
                  Resumen del pedido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-orange-400 font-semibold">{plan.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-xs text-gray-300"
                    >
                      <Check className="w-3.5 h-3.5 text-orange-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Separator className="bg-white/5" />

                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Subtotal</span>
                  <span className="text-white text-sm">
                    ${plan.price.toLocaleString("es-CL")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">IVA (19%)</span>
                  <span className="text-white text-sm">Incluido</span>
                </div>

                <Separator className="bg-white/5" />

                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Total mensual</span>
                  <span className="text-orange-400 font-bold text-lg">
                    ${plan.price.toLocaleString("es-CL")}
                  </span>
                </div>

                <p className="text-gray-500 text-xs text-center">
                  Renovación automática mensual. Cancela cuando quieras.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default function PagoPage() {
  return (
    <Suspense>
      <PagoContent />
    </Suspense>
  );
}
