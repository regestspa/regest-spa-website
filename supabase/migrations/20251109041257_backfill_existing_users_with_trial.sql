/*
  # Backfill Trial Access for Existing Users

  1. Updates
    - Add trial period to all existing user subscriptions that don't have one
    - Generate access codes for all users without codes
    - Set 7-day trial period starting from now

  2. Actions
    - Update user_subscriptions to add trial data
    - Insert access codes for users who don't have them
*/

-- Update existing subscriptions to have trial period
UPDATE user_subscriptions
SET is_trial = true,
    trial_start_date = now(),
    trial_end_date = now() + INTERVAL '7 days'
WHERE is_trial IS NULL OR is_trial = false;

-- Create access codes for users who don't have them
INSERT INTO access_codes (user_id, code, expires_at)
SELECT 
  us.user_id,
  LPAD(FLOOR(RANDOM() * 1000000)::text, 6, '0'),
  now() + INTERVAL '7 days'
FROM user_subscriptions us
WHERE NOT EXISTS (
  SELECT 1 FROM access_codes WHERE user_id = us.user_id
);