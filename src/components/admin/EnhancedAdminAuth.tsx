import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Shield, AlertTriangle, KeyRound } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface LoginAttemptData {
  is_locked: boolean;
  remaining_attempts: number;
  lockout_minutes: number;
  failed_attempts: number;
}

const EnhancedAdminAuth = () => {
  const { toast } = useToast();
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [resetEmail, setResetEmail] = useState("");
  const [loginAttempts, setLoginAttempts] = useState<LoginAttemptData | null>(null);

  useEffect(() => {
    checkLoginAttempts();
  }, [formData.email]);

  const checkLoginAttempts = async () => {
    if (!formData.email) return;

    try {
      const { data, error } = await supabase.rpc('check_login_attempts', {
        user_email: formData.email
      });

      if (error) throw error;

      const attemptData = data as unknown as LoginAttemptData;
      setLoginAttempts(attemptData);
    } catch (error) {
      console.error('Error checking login attempts:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (loginAttempts?.is_locked) {
      toast({
        title: "Account Locked",
        description: `Too many failed attempts. Please try again in ${loginAttempts.lockout_minutes} minutes.`,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      const { error } = await signIn(formData.email, formData.password);
      
      if (error) {
        // Record failed login attempt
        await supabase.rpc('record_failed_login', {
          user_email: formData.email
        });

        // Check updated attempts
        await checkLoginAttempts();

        toast({
          title: "Sign In Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        // Reset login attempts on successful login
        await supabase.rpc('reset_login_attempts', {
          user_email: formData.email
        });

        toast({
          title: "Success",
          description: "Successfully signed in to admin panel.",
        });
      }
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "An unexpected error occurred.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resetEmail) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/admin/reset-password`,
      });

      if (error) throw error;

      toast({
        title: "Password Reset Sent",
        description: "Check your email for password reset instructions.",
      });

      setShowForgotPassword(false);
      setResetEmail("");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send password reset email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (showForgotPassword) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
        <Card className="w-full max-w-md border-t-4 border-t-primary shadow-lg">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <KeyRound className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
              <CardDescription>
                Enter your email to receive reset instructions
              </CardDescription>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reset-email">Email</Label>
                <Input
                  id="reset-email"
                  type="email"
                  placeholder="admin@college.edu"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link"}
                </Button>
                <Button 
                  type="button" 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => setShowForgotPassword(false)}
                >
                  Back to Sign In
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 p-4">
      <Card className="w-full max-w-md border-t-4 border-t-primary shadow-lg">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Admin Access</CardTitle>
            <CardDescription>
              Secure portal for website administration
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent>
          {loginAttempts?.is_locked && (
            <Alert className="mb-4" variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Account locked due to too many failed attempts. 
                Try again in {loginAttempts.lockout_minutes} minutes.
              </AlertDescription>
            </Alert>
          )}

          {loginAttempts && !loginAttempts.is_locked && loginAttempts.failed_attempts > 0 && (
            <Alert className="mb-4" variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                {loginAttempts.remaining_attempts} attempts remaining before account lockout.
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="signin-email">Email</Label>
              <Input
                id="signin-email"
                name="email"
                type="email"
                placeholder="admin@college.edu"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="signin-password">Password</Label>
              <div className="relative">
                <Input
                  id="signin-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              disabled={loading || (loginAttempts?.is_locked)}
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>

            <div className="text-center">
              <Button 
                type="button" 
                variant="link" 
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot your password?
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedAdminAuth;