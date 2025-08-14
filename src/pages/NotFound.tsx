
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md p-8">
          <h1 className="text-6xl font-bold text-college-blue mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-6">Oops! The page you are looking for doesn't exist.</p>
          <p className="text-muted-foreground mb-8">
            The page you are trying to access may have been moved, deleted, or might never have existed.
          </p>
          <Button className="bg-college-blue hover:bg-blue-700" asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
