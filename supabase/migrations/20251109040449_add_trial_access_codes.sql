/*
  # Add Trial Access Codes System

  1. Changes to Tables
    - Update `user_subscriptions` table
      - Add `trial_start_date` (timestamptz) - When trial started
      - Add `trial_end_date` (timestamptz) - When trial ends (7 days after start)
      - Add `is_trial` (boolean) - Whether user is on trial
    
    - Create `access_codes` table
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `code` (text) - 6-digit access code
      - `created_at` (timestamptz)
      - `expires_at` (timestamptz) - Fixed expiration date (doesn't change on regeneration)
      - `last_sent_at` (timestamptz) - Last time code was sent

  2. Security
    - Enable RLS on access_codes table
    - Users can only read and update their own codes

  3. Default Behavior
    - New users get 7-day trial automatically
    - Access code is generated on signup
    - Code can be regenerated but expiration date stays the same
*/

-- Add trial columns to user_subscriptions
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_subscriptions' AND column_name = 'trial_start_date'
  ) THEN
    ALTER TABLE user_subscriptions ADD COLUMN trial_start_date timestamptz;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_subscriptions' AND column_name = 'trial_end_date'
  ) THEN
    ALTER TABLE user_subscriptions ADD COLUMN trial_end_date timestamptz;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'user_subscriptions' AND column_name = 'is_trial'
  ) THEN
    ALTER TABLE user_subscriptions ADD COLUMN is_trial boolean DEFAULT false;
  END IF;
END $$;

-- Create access_codes table
CREATE TABLE IF NOT EXISTS access_codes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  code text NOT NULL,
  created_at timestamptz DEFAULT now(),
  expires_at timestamptz NOT NULL,
  last_sent_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE access_codes ENABLE ROW LEVEL SECURITY;

-- Policies for access_codes
CREATE POLICY "Users can read own access code"
  ON access_codes FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own access code"
  ON access_codes FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own access code"
  ON access_codes FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Function to generate random 6-digit code
CREATE OR REPLACE FUNCTION generate_access_code()
RETURNS text AS $$
DECLARE
  code text;
BEGIN
  code := LPAD(FLOOR(RANDOM() * 1000000)::text, 6, '0');
  RETURN code;
END;
$$ LANGUAGE plpgsql;

-- Update the create_free_subscription function to include trial
CREATE OR REPLACE FUNCTION create_free_subscription()
RETURNS TRIGGER AS $$
DECLARE
  free_plan_id uuid;
  trial_start timestamptz;
  trial_end timestamptz;
BEGIN
  -- Get the free plan ID
  SELECT id INTO free_plan_id FROM subscription_plans WHERE name = 'Free' LIMIT 1;
  
  -- Set trial dates
  trial_start := now();
  trial_end := now() + INTERVAL '7 days';
  
  -- Create subscription for new user with trial
  IF free_plan_id IS NOT NULL THEN
    INSERT INTO user_subscriptions (user_id, plan_id, status, expires_at, is_trial, trial_start_date, trial_end_date)
    VALUES (NEW.id, free_plan_id, 'active', NULL, true, trial_start, trial_end);
  END IF;
  
  -- Create access code for new user
  INSERT INTO access_codes (user_id, code, expires_at)
  VALUES (NEW.id, generate_access_code(), trial_end);
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to regenerate access code (keeps same expiration date)
CREATE OR REPLACE FUNCTION regenerate_access_code(p_user_id uuid)
RETURNS text AS $$
DECLARE
  new_code text;
  existing_expires_at timestamptz;
BEGIN
  -- Get existing expiration date
  SELECT expires_at INTO existing_expires_at
  FROM access_codes
  WHERE user_id = p_user_id;
  
  -- Generate new code
  new_code := generate_access_code();
  
  -- Update code while keeping same expiration date
  UPDATE access_codes
  SET code = new_code,
      last_sent_at = now()
  WHERE user_id = p_user_id;
  
  RETURN new_code;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_access_codes_user_id ON access_codes(user_id);
CREATE INDEX IF NOT EXISTS idx_access_codes_expires_at ON access_codes(expires_at);