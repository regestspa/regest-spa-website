"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  regestbot_access: boolean;
  calculator_access: boolean;
}

interface UserSubscription {
  id: string;
  plan: SubscriptionPlan;
  status: string;
  started_at: string;
  expires_at: string | null;
}

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    fetchSubscription();
  }, [user]);

  const fetchSubscription = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("user_subscriptions")
        .select(`
          id,
          status,
          started_at,
          expires_at,
          plan:subscription_plans(
            id,
            name,
            description,
            price,
            features,
            regestbot_access,
            calculator_access
          )
        `)
        .eq("user_id", user?.id)
        .eq("status", "active")
        .maybeSingle();

      if (error) throw error;

      setSubscription(data as any);
    } catch (error) {
      console.error("Error fetching subscription:", error);
      setSubscription(null);
    } finally {
      setLoading(false);
    }
  };

  const hasRegestbotAccess = () => {
    if (!subscription) return false;
    return subscription.plan.regestbot_access;
  };

  const hasCalculatorAccess = () => {
    if (!subscription) return false;
    return subscription.plan.calculator_access;
  };

  const isPremium = () => {
    if (!subscription) return false;
    return subscription.plan.name === "Premium";
  };

  return {
    subscription,
    loading,
    hasRegestbotAccess,
    hasCalculatorAccess,
    isPremium,
    refetch: fetchSubscription,
  };
}
