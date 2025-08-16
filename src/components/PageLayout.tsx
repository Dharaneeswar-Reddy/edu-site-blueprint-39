import { ReactNode } from "react";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
  return (
    <Layout>
      <Breadcrumb />
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-college-blue mb-4">{title}</h1>
              {description && (
                <p className="text-lg text-gray-600">{description}</p>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageLayout;