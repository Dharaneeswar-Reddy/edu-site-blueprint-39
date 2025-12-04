import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface InviteAdminRequest {
  email: string;
  role: 'admin' | 'moderator';
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

    const authHeader = req.headers.get('Authorization')!;
    const token = authHeader.replace('Bearer ', '');
    const { data: { user } } = await supabaseClient.auth.getUser(token);

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Check if user is super admin
    const { data: isSuperAdmin } = await supabaseClient.rpc('is_super_admin', { user_id: user.id });
    
    if (!isSuperAdmin) {
      return new Response(
        JSON.stringify({ error: 'Only super admins can invite new admins' }),
        {
          status: 403,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const { email, role }: InviteAdminRequest = await req.json();

    if (!email || !role) {
      return new Response(
        JSON.stringify({ error: 'Email and role are required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Generate a secure invitation token
    const invitationToken = crypto.randomUUID();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 24); // 24 hour expiry

    // Create invitation record
    const { error: inviteError } = await supabaseClient
      .from('admin_invitations')
      .insert({
        email,
        invited_by: user.id,
        invitation_token: invitationToken,
        role,
        expires_at: expiresAt.toISOString(),
      });

    if (inviteError) {
      console.error('Error creating invitation:', inviteError);
      return new Response(
        JSON.stringify({ error: 'Failed to create invitation' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Send invitation email
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    const inviteUrl = `${Deno.env.get('SITE_URL')}/admin/accept-invitation?token=${invitationToken}`;

    const emailResponse = await resend.emails.send({
      from: "Admin Team <admin@yourdomain.com>",
      to: [email],
      subject: "Admin Invitation - College Management System",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Admin Invitation</h2>
          <p>You have been invited to join as an administrator in the College Management System.</p>
          <p><strong>Role:</strong> ${role.charAt(0).toUpperCase() + role.slice(1)}</p>
          <p>Click the link below to accept your invitation and set up your account:</p>
          <a href="${inviteUrl}" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Accept Invitation</a>
          <p style="margin-top: 20px; color: #666; font-size: 14px;">
            This invitation will expire in 24 hours. If you didn't expect this invitation, please ignore this email.
          </p>
          <p style="color: #666; font-size: 14px;">
            If the button doesn't work, copy and paste this link into your browser:<br>
            ${inviteUrl}
          </p>
        </div>
      `,
    });

    console.log('Invitation email sent:', emailResponse);

    // Log audit trail
    await supabaseClient.from('audit_logs').insert({
      user_id: user.id,
      action: 'admin_invited',
      resource_type: 'user',
      resource_id: email,
      details: { role, invitation_token: invitationToken },
    });

    return new Response(
      JSON.stringify({ 
        success: true,
        message: `Invitation sent to ${email}`,
        expires_at: expiresAt.toISOString()
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error: any) {
    console.error('Error in invite-admin function:', error);
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