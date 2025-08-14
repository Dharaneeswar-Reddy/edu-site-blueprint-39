
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const FacultyLogin = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!employeeId || !password) {
      toast({
        title: "Missing Information",
        description: "Please enter both employee ID and password.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome to the Faculty Portal.",
      });
      navigate("/");
    }, 1500);
  };

  return (
    <Layout>
      <section className="pt-32 pb-12 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <img 
                    src="/lovable-uploads/5c7ebe72-4ecd-4e54-8ce5-6bf0a6141878.png" 
                    alt="SVRMC Logo" 
                    className="h-16 w-16"
                  />
                </div>
                <CardTitle className="text-2xl">Faculty Login</CardTitle>
                <CardDescription>Access your faculty account to manage courses, upload documents, and more.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="employeeId">Employee ID</Label>
                      <Input
                        id="employeeId"
                        placeholder="Enter your employee ID"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="#" className="text-xs text-college-blue hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button disabled={isLoading} className="w-full">
                      {isLoading ? "Logging in..." : "Log In"}
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 text-center text-sm">
                <div className="text-gray-500">
                  New Faculty? <Link to="/contact" className="text-college-blue hover:underline">Contact admin</Link> for registration.
                </div>
                <div className="text-gray-500">
                  <Link to="/student-login" className="text-college-blue hover:underline">Student Login</Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FacultyLogin;
