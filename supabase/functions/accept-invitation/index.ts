import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AcceptInvitationRequest {
  token: string;
  email: string;
  password: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { token, email, password }: AcceptInvitationRequest = await req.json();

    if (!token || !email || !password) {
      return new Response(
        JSON.stringify({ error: 'Token, email, and password are required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Validate invitation token
    const { data: invitation, error: inviteError } = await supabaseClient
      .from('admin_invitations')
      .select('*')
      .eq('invitation_token', token)
      .eq('email', email)
      .eq('is_active', true)
      .single();

    if (inviteError || !invitation) {
      return new Response(
        JSON.stringify({ error: 'Invalid or expired invitation' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Check if invitation is expired
    if (new Date(invitation.expires_at) < new Date()) {
      return new Response(
        JSON.stringify({ error: 'Invitation has expired' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Check if invitation was already used
    if (invitation.used_at) {
      return new Response(
        JSON.stringify({ error: 'Invitation has already been used' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Create the user account
    const { data: authData, error: authError } = await supabaseClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm email for invited users
    });

    if (authError || !authData.user) {
      console.error('Error creating user:', authError);
      return new Response(
        JSON.stringify({ error: 'Failed to create user account' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Assign the role to the new user
    const { error: roleError } = await supabaseClient
      .from('user_roles')
      .insert({
        user_id: authData.user.id,
        role: invitation.role,
      });

    if (roleError) {
      console.error('Error assigning role:', roleError);
      // Clean up - delete the created user if role assignment fails
      await supabaseClient.auth.admin.deleteUser(authData.user.id);
      return new Response(
        JSON.stringify({ error: 'Failed to assign admin role' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Mark invitation as used
    await supabaseClient
      .from('admin_invitations')
      .update({
        used_at: new Date().toISOString(),
        is_active: false,
      })
      .eq('id', invitation.id);

    // Log audit trail
    await supabaseClient.from('audit_logs').insert({
      user_id: authData.user.id,
      action: 'admin_invitation_accepted',
      resource_type: 'user',
      resource_id: authData.user.id,
      details: { 
        role: invitation.role,
        invited_by: invitation.invited_by,
        invitation_token: token
      },
    });

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Admin account created successfully',
        user: {
          id: authData.user.id,
          email: authData.user.email,
          role: invitation.role
        }
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Error in accept-invitation function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);