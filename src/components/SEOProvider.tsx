import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

interface SEOProviderProps {
  children: ReactNode;
}

const SEOProvider = ({ children }: SEOProviderProps) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};

export default SEOProvider;