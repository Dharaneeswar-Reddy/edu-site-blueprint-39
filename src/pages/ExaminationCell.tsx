import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar, FileText, Clock, Users } from "lucide-react";
import { useState } from "react";
interface PDFDocument {
  name: string;
  file?: File;
}
const ExaminationCell = () => {
  const [activeTab, setActiveTab] = useState("Academic Calendars");
  const documentsByTab = {
    "Academic Calendars": [{
      name: "IV B.Tech I & II Sem Academic Calendar 2025-2026"
    }, {
      name: "III B.Tech I & II Sem Academic Calendar 2025-2026"
    }, {
      name: "II B.Tech I & II Sem Academic Calendar 2025-2026"
    }, {
      name: "M.Tech III & IV Sem Academic Calendar 2025-2026"
    }, {
      name: "MCA III & IV Sem Academic Calendar 2025-2026"
    }, {
      name: "MBA III & IV Sem Academic Calendar 2025-2026"
    }, {
      name: "MCA I & II SEM ACADEMIC CALENDAR 2024-2025"
    }, {
      name: "M.Tech I & II SEM ACADEMIC CALENDAR 2024-2025"
    }],
    "Exam Fee Notifications": [{
      name: "B.Tech Exam Fee Notification 2024-25"
    }, {
      name: "M.Tech Exam Fee Structure 2024-25"
    }, {
      name: "MCA Exam Fee Notification 2024-25"
    }, {
      name: "MBA Exam Fee Structure 2024-25"
    }, {
      name: "Supplementary Exam Fee Notification"
    }, {
      name: "Re-evaluation Fee Structure"
    }],
    "External Time Tables": [{
      name: "B.Tech IV Year II Sem External Time Table"
    }, {
      name: "B.Tech III Year II Sem External Time Table"
    }, {
      name: "B.Tech II Year II Sem External Time Table"
    }, {
      name: "M.Tech II Year External Time Table"
    }, {
      name: "MCA II Year External Time Table"
    }, {
      name: "MBA II Year External Time Table"
    }],
    "Internal Time Tables": [{
      name: "B.Tech IV Year Internal Time Table"
    }, {
      name: "B.Tech III Year Internal Time Table"
    }, {
      name: "B.Tech II Year Internal Time Table"
    }, {
      name: "M.Tech Internal Time Table"
    }, {
      name: "MCA Internal Time Table"
    }, {
      name: "MBA Internal Time Table"
    }],
    "Internal Circulars": [{
      name: "Internal Assessment Guidelines 2024-25"
    }, {
      name: "Mid-term Exam Instructions"
    }, {
      name: "Assignment Submission Guidelines"
    }, {
      name: "Lab Exam Circular"
    }, {
      name: "Project Evaluation Circular"
    }, {
      name: "Continuous Assessment Notification"
    }],
    "Downloads": [{
      name: "Exam Application Form"
    }, {
      name: "Hall Ticket Format"
    }, {
      name: "Re-evaluation Application Form"
    }, {
      name: "Supplementary Exam Form"
    }, {
      name: "Grade Card Application"
    }, {
      name: "Transcript Application Form"
    }],
    "Exam Cell - ERP": [{
      name: "ERP User Manual for Students"
    }, {
      name: "ERP User Manual for Faculty"
    }, {
      name: "Online Exam Guidelines"
    }, {
      name: "ERP Login Instructions"
    }, {
      name: "System Requirements"
    }, {
      name: "Troubleshooting Guide"
    }]
  };
  const [documents, setDocuments] = useState<Record<string, PDFDocument[]>>(documentsByTab);
  const tabs = ["Academic Calendars", "Exam Fee Notifications", "External Time Tables", "Internal Time Tables", "Internal Circulars", "Downloads", "Exam Cell - ERP"];
  const handleFileUpload = (index: number, file: File, tab: string) => {
    const updatedDocuments = {
      ...documents
    };
    updatedDocuments[tab][index].file = file;
    setDocuments(updatedDocuments);
  };
  const handleOpenFile = (document: PDFDocument) => {
    if (document.file) {
      const url = URL.createObjectURL(document.file);
      window.open(url, '_blank');
    }
  };
  const currentDocuments = documents[activeTab] || [];
  return <PageLayout title="Examination Cell" description="Central hub for all examination-related activities, schedules, and results at SVRMC.">
      <div className="space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b bg-white rounded-lg shadow-sm">
          {tabs.map((tab, index) => {})}
        </div>

        {/* Content based on active tab */}
        <Card>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left py-3 px-4 font-semibold text-blue-600">S.No</th>
                    <th className="text-left py-3 px-4 font-semibold text-blue-600">Name</th>
                    <th className="text-center py-3 px-4 font-semibold text-blue-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentDocuments.map((doc, index) => <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 text-blue-600 font-medium">{index + 1}</td>
                      <td className="py-3 px-4 text-blue-600">{doc.name}</td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex flex-col gap-2">
                          <Button variant="outline" size="sm" onClick={() => handleOpenFile(doc)} disabled={!doc.file} className="w-24">
                            Open File
                          </Button>
                          <input type="file" accept=".pdf" onChange={e => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(index, file, activeTab);
                      }} className="hidden" id={`file-${activeTab}-${index}`} />
                          <Button variant="outline" size="sm" onClick={() => document.getElementById(`file-${activeTab}-${index}`)?.click()} className="w-24">
                            Upload PDF
                          </Button>
                        </div>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>;
};
export default ExaminationCell;