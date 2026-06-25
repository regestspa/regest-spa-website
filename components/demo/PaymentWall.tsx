"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Check, CreditCard, MessageCircle, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

interface PaymentWallProps {
  feature: "calculator" | "regestbot" | "both";
  onPaymentSimulated?: () => void;
}

const WHATSAPP_URL = "https://wa.me/56982428895";

const premiumFeatures = [
  "Calculadora Anual IGC completa con todos los tramos",
  "REGESTBOT con respuestas ilimitadas",
  "Exportación de resultados en PDF",
  "Historial de consultas guardado",
  "Asesoría tributaria prioritaria",
  "Soporte dedicado 24/7",
];

export function PaymentWall({ feature, onPaymentSimulated }: PaymentWallProps) {
  const { user } = useAuth();
  const [simulating, setSimulating] = useState(false);

  const featureLabel =
    feature === "calculator"
      ? "la Calculadora Anual"
      : feature === "regestbot"
      ? "el REGESTBOT"
      : "la Calculadora y el REGESTBOT";

  // Simulate Flow/Webpay payment: marks subscription as paid in DB
  const handleSimulatePayment = async () => {
    if (!user) return;
    setSimulating(true);
    try {
      // Simulate a payment reference as Flow/Webpay would return
      const fakeRef = `FLOW-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

      // Get Premium plan id
      const { data: plan } = await supabase
        .from("subscription_plans")
        .select("id")
        .eq("name", "Premium")
        .single();

      if (!plan) throw new Error("Plan Premium no encontrado");

      // Upsert subscription to Premium + paid
      const { error } = await supabase
        .from("user_subscriptions")
        .upsert(
          {
            user_id: user.id,
            plan_id: plan.id,
            status: "active",
            payment_status: "paid",
            payment_reference: fakeRef,
            paid_at: new Date().toISOString(),
            is_trial: false,
            started_at: new Date().toISOString(),
          },
          { onConflict: "user_id" }
        );

      if (error) throw error;

      toast.success("Pago procesado exitosamente", {
        description: `Referencia: ${fakeRef}. Acceso Premium activado.`,
      });

      onPaymentSimulated?.();
    } catch (err: any) {
      toast.error("Error al procesar el pago", { description: err.message });
    } finally {
      setSimulating(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-[420px] w-full p-6"
    >
      <div className="w-full max-w-lg">
        {/* Lock icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-600/30 to-amber-500/20 border border-orange-500/40 flex items-center justify-center">
              <Lock className="w-9 h-9 text-orange-400" />
            </div>
            <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </span>
          </div>
        </div>

        <div className="text-center mb-8">
          <Badge className="mb-3 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1">
            <Zap className="w-3 h-3 mr-1 inline" />
            Solo Plan Premium
          </Badge>
          <h2 className="text-2xl font-bold text-white mb-2">
            Acceso restringido
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Para usar {featureLabel} necesitas un plan Premium activo con pago confirmado.
          </p>
        </div>

        <Card className="bg-slate-900/80 border-orange-500/40 mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-base flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange-400" />
              Plan Premium — $29.990 / mes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {premiumFeatures.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <Check className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Payment simulation (Flow/Webpay) */}
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-500/20 flex items-start gap-2">
            <Clock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
            <p className="text-xs text-blue-300 leading-relaxed">
              <span className="font-semibold">Pasarela de pago simulada.</span> En producción, este botón redirige a Flow/Webpay. Al confirmar el pago, nuestro sistema actualiza tu estado automáticamente.
            </p>
          </div>

          <Button
            onClick={handleSimulatePayment}
            disabled={simulating}
            className="w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-semibold py-6 text-base shadow-lg shadow-orange-500/20"
          >
            <CreditCard className="w-5 h-5 mr-2" />
            {simulating ? "Procesando pago..." : "Pagar con Flow / Webpay (Simulado)"}
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className="w-full border-green-600/50 text-green-400 hover:bg-green-600/10 py-5"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Consultar por WhatsApp
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
