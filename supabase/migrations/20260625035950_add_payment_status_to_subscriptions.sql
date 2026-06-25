-- Add payment_status column to user_subscriptions
-- Values: 'pending' | 'paid' | 'failed' | 'refunded'
ALTER TABLE user_subscriptions
  ADD COLUMN IF NOT EXISTS payment_status text NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS payment_reference text,
  ADD COLUMN IF NOT EXISTS paid_at timestamptz;

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_payment_status
  ON user_subscriptions(payment_status);

-- Backfill: trial users and free-plan users keep 'pending';
-- Any existing active non-trial subscriptions are considered paid
UPDATE user_subscriptions
SET payment_status = 'paid',
    paid_at = started_at
WHERE status = 'active'
  AND (is_trial = false OR is_trial IS NULL)
  AND plan_id = (SELECT id FROM subscription_plans WHERE name = 'Premium' LIMIT 1);

-- Free plan users: mark as 'paid' because Free plan has no payment required
UPDATE user_subscriptions
SET payment_status = 'paid'
WHERE plan_id = (SELECT id FROM subscription_plans WHERE name = 'Free' LIMIT 1);

-- Update trigger function so new Free-plan users start as 'paid'
CREATE OR REPLACE FUNCTION create_free_subscription()
RETURNS TRIGGER AS $$
DECLARE
  free_plan_id uuid;
BEGIN
  SELECT id INTO free_plan_id FROM subscription_plans WHERE name = 'Free' LIMIT 1;
  IF free_plan_id IS NOT NULL THEN
    INSERT INTO user_subscriptions (user_id, plan_id, status, payment_status, expires_at)
    VALUES (NEW.id, free_plan_id, 'active', 'paid', NULL)
    ON CONFLICT (user_id) DO NOTHING;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
