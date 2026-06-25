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
  is_trial: boolean;
  trial_start_date: string | null;
  trial_end_date: string | null;
  payment_status: string;
  payment_reference: string | null;
  paid_at: string | null;
}

interface AccessCode {
  code: string;
  expires_at: string;
  last_sent_at: string;
}

export function useSubscription() {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState<UserSubscription | null>(null);
  const [accessCode, setAccessCode] = useState<AccessCode | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setSubscription(null);
      setAccessCode(null);
      setLoading(false);
      return;
    }

    fetchSubscription();
    fetchAccessCode();
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
          is_trial,
          trial_start_date,
          trial_end_date,
          payment_status,
          payment_reference,
          paid_at,
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

  const fetchAccessCode = async () => {
    try {
      const { data, error } = await supabase
        .from("access_codes")
        .select("code, expires_at, last_sent_at")
        .eq("user_id", user?.id)
        .maybeSingle();

      if (error) throw error;

      setAccessCode(data);
    } catch (error) {
      console.error("Error fetching access code:", error);
      setAccessCode(null);
    }
  };

  const isTrialActive = () => {
    if (!subscription || !subscription.is_trial) return false;
    if (!subscription.trial_end_date) return false;
    return new Date() < new Date(subscription.trial_end_date);
  };

  // A user has paid if payment_status === 'paid'
  const hasPaid = () => {
    if (!subscription) return false;
    return subscription.payment_status === "paid";
  };

  const hasRegestbotAccess = () => {
    if (!subscription) return false;
    if (isTrialActive()) return true;
    if (!hasPaid()) return false;
    return subscription.plan.regestbot_access;
  };

  const hasCalculatorAccess = () => {
    if (!subscription) return false;
    if (isTrialActive()) return true;
    if (!hasPaid()) return false;
    return subscription.plan.calculator_access;
  };

  const isPremium = () => {
    if (!subscription) return false;
    return subscription.plan.name === "Premium";
  };

  const getDaysRemaining = () => {
    if (!subscription || !subscription.trial_end_date) return 0;
    const diff = new Date(subscription.trial_end_date).getTime() - Date.now();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  return {
    subscription,
    accessCode,
    loading,
    hasRegestbotAccess,
    hasCalculatorAccess,
    isPremium,
    isTrialActive,
    hasPaid,
    getDaysRemaining,
    refetch: fetchSubscription,
    refetchCode: fetchAccessCode,
  };
}
