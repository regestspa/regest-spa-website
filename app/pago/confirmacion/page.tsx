"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CircleCheck as CheckCircle2, Circle as XCircle, ArrowRight, Chrome as Home, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function ConfirmacionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const status = searchParams.get("status") ?? "success";
  const ref = searchParams.get("ref") ?? "";
  const returnTo = searchParams.get("return") ?? "/demo-regest";
  const isSuccess = status === "success";

  const date = new Date().toLocaleDateString("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        {/* Status icon */}
        <div className="flex justify-center mb-8">
          {isSuccess ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2, stiffness: 200 }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-green-500/10 border-2 border-green-500/40 flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-400" />
              </div>
              <motion.div
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 1.6, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                className="absolute inset-0 rounded-full bg-green-500/20"
              />
            </motion.div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-red-500/10 border-2 border-red-500/40 flex items-center justify-center">
              <XCircle className="w-12 h-12 text-red-400" />
            </div>
          )}
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            {isSuccess ? "Pago exitoso" : "Pago rechazado"}
          </h1>
          <p className="text-gray-400">
            {isSuccess
              ? "Tu suscripción Premium ha sido activada exitosamente."
              : "No se pudo procesar tu pago. Intenta nuevamente."}
          </p>
        </div>

        {/* Receipt card */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-slate-900/80 border-green-500/20 mb-6">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <Receipt className="w-4 h-4" />
                  <span className="text-sm font-semibold">Comprobante de pago</span>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Plan", value: "Premium" },
                    { label: "Monto", value: "$29.990 CLP / mes" },
                    { label: "Estado", value: "Aprobado", highlight: true },
                    { label: "Referencia", value: ref || "—" },
                    { label: "Fecha", value: date },
                  ].map(({ label, value, highlight }) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{label}</span>
                      <span
                        className={`text-sm font-medium ${
                          highlight ? "text-green-400" : "text-gray-200"
                        }`}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator className="bg-white/5" />

                <p className="text-xs text-gray-500 text-center">
                  Este comprobante fue generado automáticamente. Guarda tu referencia de pago.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Actions */}
        <div className="space-y-3">
          {isSuccess ? (
            <>
              <Button
                onClick={() => router.push(returnTo)}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-semibold py-6 text-base"
              >
                Acceder a las herramientas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="ghost"
                onClick={() => router.push("/")}
                className="w-full text-gray-400 hover:text-white"
              >
                <Home className="w-4 h-4 mr-2" />
                Ir al inicio
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={() => router.back()}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6"
              >
                Intentar de nuevo
              </Button>
              <Button
                variant="ghost"
                onClick={() => router.push("/")}
                className="w-full text-gray-400 hover:text-white"
              >
                <Home className="w-4 h-4 mr-2" />
                Ir al inicio
              </Button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function ConfirmacionPage() {
  return (
    <Suspense>
      <ConfirmacionContent />
    </Suspense>
  );
}
