"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { useSubscription } from "@/hooks/use-subscription";

export default function AccesoDemoRegestNuevo() {
  const router = useRouter();
  const { user } = useAuth();
  const { hasCalculatorAccess, hasRegestbotAccess, loading: subLoading } = useSubscription();

  useEffect(() => {
    // Wait until auth state is resolved
    if (user === undefined) return;

    // Not logged in → redirect to demo page which will show the auth modal
    if (!user) {
      router.replace("/demo-regest");
      return;
    }

    // Logged in, wait for subscription to load
    if (subLoading) return;

    // Logged in but no active paid access → payment wall
    if (!hasCalculatorAccess() && !hasRegestbotAccess()) {
      router.replace("/suscripcion");
      return;
    }

    // Fully authorized
    router.replace("/demo-regest");
  }, [user, subLoading]);

  // Show nothing while redirecting — no content should be accessible here
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-orange-500/40 border-t-orange-500 rounded-full animate-spin" />
        <p className="text-gray-500 text-sm">Verificando acceso...</p>
      </div>
    </div>
  );
}
