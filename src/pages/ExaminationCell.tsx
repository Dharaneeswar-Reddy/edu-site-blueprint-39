import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { useExaminationDocuments } from "@/hooks/useExaminationDocuments";
const ExaminationCell = () => {
  const [activeTab, setActiveTab] = useState("Academic Calendars");
  const { documents, loading } = useExaminationDocuments();
  const tabs = ["Academic Calendars", "Exam Fee Notifications", "External Time Tables", "Internal Time Tables", "Internal Circulars", "Results"];
  const handleOpenFile = (fileUrl: string) => {
    window.open(fileUrl, '_blank');
  };

  const filteredDocuments = documents.filter(doc => doc.document_type === activeTab);
  return <PageLayout title="Examination Cell" description="Central hub for all examination-related activities, schedules, and results at SVRMC.">
      <div className="space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b bg-white rounded-lg shadow-sm">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        <Card>
          <CardContent className="p-6">
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground mt-2">Loading documents...</p>
              </div>
            ) : filteredDocuments.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No documents available for {activeTab}.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/20">
                      <th className="text-left py-3 px-4 font-semibold text-primary">S.No</th>
                      <th className="text-left py-3 px-4 font-semibold text-primary">Name</th>
                      <th className="text-center py-3 px-4 font-semibold text-primary">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDocuments.map((doc, index) => (
                      <tr key={doc.id} className="border-b hover:bg-muted/10">
                        <td className="py-3 px-4 text-primary font-medium">{index + 1}</td>
                        <td className="py-3 px-4 text-primary">{doc.title}</td>
                        <td className="py-3 px-4 text-center">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => handleOpenFile(doc.file_url)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </PageLayout>;
};
export default ExaminationCell;