import { createClient } from 'npm:@supabase/supabase-js@2.58.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface AccessCodeData {
  code: string;
  expires_at: string;
}

interface UserProfile {
  whatsapp: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      throw new Error('No authorization header');
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      throw new Error('Unauthorized');
    }

    const { action } = await req.json();

    if (action === 'regenerate') {
      const { data: newCode, error: regenerateError } = await supabase.rpc(
        'regenerate_access_code',
        { p_user_id: user.id }
      );

      if (regenerateError) throw regenerateError;

      const { data: codeData, error: codeError } = await supabase
        .from('access_codes')
        .select('code, expires_at')
        .eq('user_id', user.id)
        .single();

      if (codeError) throw codeError;

      const { data: profileData, error: profileError } = await supabase
        .from('user_profiles')
        .select('whatsapp')
        .eq('user_id', user.id)
        .single();

      if (profileError) throw profileError;

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Código regenerado. En producción se enviaría por WhatsApp y correo.',
          code: codeData.code,
          expires_at: codeData.expires_at,
          whatsapp: profileData.whatsapp,
          email: user.email,
        }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const { data: codeData, error: codeError } = await supabase
      .from('access_codes')
      .select('code, expires_at')
      .eq('user_id', user.id)
      .single();

    if (codeError) throw codeError;

    const { data: profileData, error: profileError } = await supabase
      .from('user_profiles')
      .select('whatsapp')
      .eq('user_id', user.id)
      .single();

    if (profileError) throw profileError;

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Código obtenido. En producción se enviaría por WhatsApp y correo.',
        code: codeData.code,
        expires_at: codeData.expires_at,
        whatsapp: profileData.whatsapp,
        email: user.email,
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});