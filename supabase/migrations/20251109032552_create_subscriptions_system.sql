/*
  # Create Subscriptions System

  1. New Tables
    - `subscription_plans`
      - `id` (uuid, primary key)
      - `name` (text) - Plan name (e.g., "Free", "Premium", "Enterprise")
      - `description` (text) - Plan description
      - `price` (numeric) - Monthly price
      - `features` (jsonb) - Plan features
      - `regestbot_access` (boolean) - Access to REGESTBOT
      - `calculator_access` (boolean) - Access to calculator
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `user_subscriptions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `plan_id` (uuid, foreign key to subscription_plans)
      - `status` (text) - Subscription status (active, expired, cancelled)
      - `started_at` (timestamptz) - When subscription started
      - `expires_at` (timestamptz) - When subscription expires
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Users can read their own subscriptions
    - Users can read all subscription plans
    - Only authenticated users can access

  3. Default Data
    - Insert default subscription plans (Free and Premium)
*/

-- Create subscription_plans table
CREATE TABLE IF NOT EXISTS subscription_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  description text NOT NULL,
  price numeric NOT NULL DEFAULT 0,
  features jsonb DEFAULT '[]'::jsonb,
  regestbot_access boolean DEFAULT false,
  calculator_access boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create user_subscriptions table
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id uuid NOT NULL REFERENCES subscription_plans(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'active',
  started_at timestamptz DEFAULT now(),
  expires_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;

-- Policies for subscription_plans
CREATE POLICY "Anyone can read subscription plans"
  ON subscription_plans FOR SELECT
  TO authenticated
  USING (true);

-- Policies for user_subscriptions
CREATE POLICY "Users can read own subscription"
  ON user_subscriptions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own subscription"
  ON user_subscriptions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own subscription"
  ON user_subscriptions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Insert default subscription plans
INSERT INTO subscription_plans (name, description, price, features, regestbot_access, calculator_access)
VALUES 
  (
    'Free',
    'Plan gratuito con acceso básico',
    0,
    '["Acceso a calculadora tributaria", "Información de servicios", "Contacto directo"]'::jsonb,
    false,
    true
  ),
  (
    'Premium',
    'Plan premium con acceso completo',
    29990,
    '["Acceso a REGESTBOT 24/7", "Calculadora tributaria avanzada", "Asesoría prioritaria", "Exportación ilimitada", "Soporte dedicado"]'::jsonb,
    true,
    true
  )
ON CONFLICT (name) DO NOTHING;

-- Function to automatically create free subscription for new users
CREATE OR REPLACE FUNCTION create_free_subscription()
RETURNS TRIGGER AS $$
DECLARE
  free_plan_id uuid;
BEGIN
  -- Get the free plan ID
  SELECT id INTO free_plan_id FROM subscription_plans WHERE name = 'Free' LIMIT 1;
  
  -- Create subscription for new user
  IF free_plan_id IS NOT NULL THEN
    INSERT INTO user_subscriptions (user_id, plan_id, status, expires_at)
    VALUES (NEW.id, free_plan_id, 'active', NULL);
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signups
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION create_free_subscription();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_plan_id ON user_subscriptions(plan_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_status ON user_subscriptions(status);