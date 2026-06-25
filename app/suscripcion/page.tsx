"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowLeft, CircleAlert as AlertCircle, CreditCard as Edit2, Copy, RefreshCw, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useAuth } from "@/contexts/AuthContext";
import { useSubscription } from "@/hooks/use-subscription";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  regestbot_access: boolean;
  calculator_access: boolean;
}

export default function SubscriptionPage() {
  const router = useRouter();
  const { user, profile, updateProfile } = useAuth();
  const { subscription, accessCode, loading: subLoading, refetch, refetchCode, isTrialActive, getDaysRemaining } = useSubscription();
  const { toast } = useToast();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [whatsapp, setWhatsapp] = useState("");
  const [isEditingWhatsapp, setIsEditingWhatsapp] = useState(false);
  const [savingWhatsapp, setSavingWhatsapp] = useState(false);
  const [regeneratingCode, setRegeneratingCode] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/");
      return;
    }
    fetchPlans();
  }, [user]);

  useEffect(() => {
    if (profile) {
      setWhatsapp(profile.whatsapp || "");
    }
  }, [profile]);

  const handleSaveWhatsapp = async () => {
    if (!whatsapp || whatsapp.length < 8) {
      toast({
        title: "Error",
        description: "Por favor ingresa un número de WhatsApp válido (mínimo 8 caracteres).",
        variant: "destructive",
      });
      return;
    }

    setSavingWhatsapp(true);
    const { error } = await updateProfile(whatsapp);

    if (error) {
      toast({
        title: "Error",
        description: "No se pudo actualizar tu número de WhatsApp.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "WhatsApp actualizado",
        description: "Tu número de WhatsApp ha sido actualizado exitosamente.",
      });
      setIsEditingWhatsapp(false);
    }

    setSavingWhatsapp(false);
  };

  const fetchPlans = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("subscription_plans")
        .select("*")
        .order("price", { ascending: true });

      if (error) throw error;
      setPlans(data || []);
    } catch (error) {
      console.error("Error fetching plans:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpgrade = (planId: string) => {
    const targetPlan = plans.find((p) => p.id === planId);
    if (!targetPlan) return;

    if (targetPlan.name === "Premium") {
      router.push(`/pago?plan=premium&return=${encodeURIComponent("/suscripcion")}`);
      return;
    }

    // Downgrade to Free — no payment required
    supabase
      .from("user_subscriptions")
      .update({ plan_id: planId, status: "active", is_trial: false, payment_status: "paid" })
      .eq("user_id", user?.id)
      .then(({ error }) => {
        if (error) {
          toast({ title: "Error", description: "No se pudo cambiar el plan.", variant: "destructive" });
        } else {
          toast({ title: "Plan actualizado", description: "Ahora estás en el plan Free." });
          refetch();
        }
      });
  };

  const handleRegenerateCode = async () => {
    try {
      setRegeneratingCode(true);

      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("No session");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-access-code`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${session.access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: "regenerate" }),
        }
      );

      if (!response.ok) throw new Error("Failed to regenerate code");

      const result = await response.json();

      toast({
        title: "Código regenerado",
        description: `Tu nuevo código es: ${result.code}. En producción se enviaría por WhatsApp al ${result.whatsapp} y al correo ${result.email}`,
      });

      refetchCode();
    } catch (error) {
      console.error("Error regenerating code:", error);
      toast({
        title: "Error",
        description: "No se pudo regenerar el código.",
        variant: "destructive",
      });
    } finally {
      setRegeneratingCode(false);
    }
  };

  const copyCodeToClipboard = () => {
    if (accessCode) {
      navigator.clipboard.writeText(accessCode.code);
      toast({
        title: "Código copiado",
        description: "El código ha sido copiado al portapapeles.",
      });
    }
  };

  const handleRequestCodeWhatsApp = async () => {
    try {
      if (!profile?.whatsapp) {
        toast({
          title: "WhatsApp requerido",
          description: "Por favor agrega tu número de WhatsApp primero.",
          variant: "destructive",
        });
        return;
      }

      setRegeneratingCode(true);

      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error("No session");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-access-code`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${session.access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: "send_whatsapp" }),
        }
      );

      if (!response.ok) throw new Error("Failed to send code");

      const result = await response.json();

      const whatsappNumber = profile.whatsapp.replace(/\D/g, '');
      const message = `Hola, soy ${user?.email}. Mi código de acceso REGEST es: ${result.code}`;
      const whatsappUrl = `https://wa.me/56${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, '_blank');

      toast({
        title: "Código enviado",
        description: "Se abrirá WhatsApp con tu código de acceso.",
      });

      refetchCode();
    } catch (error) {
      console.error("Error sending code:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el código.",
        variant: "destructive",
      });
    } finally {
      setRegeneratingCode(false);
    }
  };

  if (!user || loading || subLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-white">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className="mb-8 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Planes de Suscripción
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Elige tu plan
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Selecciona el plan que mejor se ajuste a tus necesidades
            </p>
          </motion.div>

          {isTrialActive() && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <Alert className="bg-gradient-to-r from-orange-950/40 to-amber-950/40 border-orange-500/50">
                <Clock className="h-4 w-4 text-orange-500" />
                <AlertTitle className="text-white font-bold">Prueba Gratuita de 7 Días</AlertTitle>
                <AlertDescription className="text-gray-300">
                  Tienes acceso completo a REGESTBOT y la Calculadora Tributaria. Te quedan {getDaysRemaining()} días de prueba.
                  {accessCode && (
                    <div className="mt-3 p-3 bg-black/30 rounded-lg">
                      <p className="text-sm text-gray-400 mb-2">Tu código de acceso:</p>
                      <div className="flex items-center gap-2 mb-3">
                        <code className="text-xl font-bold text-orange-400 tracking-wider">{accessCode.code}</code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={copyCodeToClipboard}
                          className="text-orange-500 hover:text-orange-400"
                          title="Copiar código"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={handleRegenerateCode}
                          disabled={regeneratingCode}
                          className="text-orange-500 hover:text-orange-400"
                          title="Regenerar código"
                        >
                          <RefreshCw className={`h-4 w-4 ${regeneratingCode ? 'animate-spin' : ''}`} />
                        </Button>
                      </div>
                      <Button
                        onClick={handleRequestCodeWhatsApp}
                        disabled={regeneratingCode || !profile?.whatsapp}
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        size="sm"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Solicitar código por WhatsApp
                      </Button>
                      <p className="text-xs text-gray-500 mt-3">
                        Expira el: {new Date(accessCode.expires_at).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  )}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          {!isTrialActive() && subscription?.is_trial && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <Alert className="bg-red-950/30 border-red-500/50">
                <AlertCircle className="h-4 w-4 text-red-500" />
                <AlertTitle className="text-white font-bold">Prueba Gratuita Expirada</AlertTitle>
                <AlertDescription className="text-gray-300">
                  Tu período de prueba ha finalizado. Actualiza a Premium para continuar accediendo a REGESTBOT.
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          {(!profile?.whatsapp || profile.whatsapp.length < 8) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8"
            >
              <Alert className="bg-orange-950/30 border-orange-500/50">
                <AlertCircle className="h-4 w-4 text-orange-500" />
                <AlertDescription className="text-white">
                  Por favor completa tu número de WhatsApp para continuar. Lo necesitamos para brindarte un mejor servicio.
                </AlertDescription>
              </Alert>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8"
          >
            <Card className="bg-gray-900/50 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-white">Mi Información</CardTitle>
                <CardDescription className="text-gray-400">
                  {subscription && (
                    <>Plan actual: <span className="font-bold text-orange-500">{subscription.plan.name}</span></>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-gray-300">Email</Label>
                  <Input
                    value={user.email || ""}
                    disabled
                    className="bg-gray-800 border-gray-700 text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-gray-300">WhatsApp</Label>
                    {!isEditingWhatsapp && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsEditingWhatsapp(true)}
                        className="text-orange-500 hover:text-orange-400"
                      >
                        <Edit2 className="h-4 w-4 mr-1" />
                        Editar
                      </Button>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="+56 9 1234 5678"
                      disabled={!isEditingWhatsapp}
                      className="bg-gray-800 border-gray-700 text-white disabled:text-gray-400"
                    />
                    {isEditingWhatsapp && (
                      <>
                        <Button
                          onClick={handleSaveWhatsapp}
                          disabled={savingWhatsapp}
                          className="bg-orange-600 hover:bg-orange-700"
                        >
                          {savingWhatsapp ? "Guardando..." : "Guardar"}
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsEditingWhatsapp(false);
                            setWhatsapp(profile?.whatsapp || "");
                          }}
                          className="border-gray-700"
                        >
                          Cancelar
                        </Button>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">Incluye código de país (ej. +56 para Chile)</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => {
              const isCurrentPlan = subscription?.plan.name === plan.name;
              const isPremium = plan.name === "Premium";

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className={`h-full ${isPremium ? 'border-2 border-orange-500 bg-gradient-to-br from-gray-900 to-black' : 'bg-gray-900/50'} relative overflow-hidden`}>
                    {isPremium && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                        Popular
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                      <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-white">
                          ${plan.price.toLocaleString()}
                        </span>
                        <span className="text-gray-400 ml-2">/mes</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <Check className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        onClick={() => handleUpgrade(plan.id)}
                        disabled={isCurrentPlan}
                        className={`w-full ${isPremium ? 'bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600' : 'bg-gray-700 hover:bg-gray-600'} text-white rounded-full`}
                        size="lg"
                      >
                        {isCurrentPlan ? "Plan Actual" : isPremium ? "Actualizar a Premium" : "Cambiar a Free"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center text-gray-400 text-sm"
          >
            <p>¿Necesitas ayuda? Contáctanos en info@regest.cl</p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
