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
  const [documents, setDocuments] = useState<PDFDocument[]>([
    { name: "IV B.Tech I & II Sem Academic Calendar 2025-2026" },
    { name: "III B.Tech I & II Sem Academic Calendar 2025-2026" },
    { name: "II B.Tech I & II Sem Academic Calendar 2025-2026" },
    { name: "M.Tech III & IV Sem Academic Calendar 2025-2026" },
    { name: "MCA III & IV Sem Academic Calendar 2025-2026" },
    { name: "MBA III & IV Sem Academic Calendar 2025-2026" },
    { name: "MCA I & II SEM ACADEMIC CALENDAR 2024-2025" },
    { name: "M.Tech I & II SEM ACADEMIC CALENDAR 2024-2025" }
  ]);

  const tabs = [
    "Academic Calendars",
    "Exam Fee Notifications", 
    "External Time Tables",
    "Internal Time Tables",
    "Internal Circulars",
    "Downloads",
    "Exam Cell - ERP"
  ];

  const handleFileUpload = (index: number, file: File) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index].file = file;
    setDocuments(updatedDocuments);
  };

  const handleOpenFile = (document: PDFDocument) => {
    if (document.file) {
      const url = URL.createObjectURL(document.file);
      window.open(url, '_blank');
    }
  };

  return (
    <PageLayout 
      title="Examination Cell" 
      description="Central hub for all examination-related activities, schedules, and results at SVRMC."
    >
      <div className="space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b bg-white rounded-lg shadow-sm">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? index === 0 
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200 text-gray-800 border-b-2 border-blue-500"
                  : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              } ${index === 0 ? "rounded-tl-lg" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content based on active tab */}
        <Card>
          <CardContent className="p-6">
            {activeTab === "Academic Calendars" && (
              <div>
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
                      {documents.map((doc, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 text-blue-600 font-medium">{index + 1}</td>
                          <td className="py-3 px-4 text-blue-600">{doc.name}</td>
                          <td className="py-3 px-4 text-center">
                            <div className="flex flex-col gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleOpenFile(doc)}
                                disabled={!doc.file}
                                className="w-24"
                              >
                                Open File
                              </Button>
                              <input
                                type="file"
                                accept=".pdf"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];
                                  if (file) handleFileUpload(index, file);
                                }}
                                className="hidden"
                                id={`file-${index}`}
                              />
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => document.getElementById(`file-${index}`)?.click()}
                                className="w-24"
                              >
                                Upload PDF
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab !== "Academic Calendars" && (
              <div className="text-center py-8">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{activeTab}</h3>
                <p className="text-gray-500 mb-4">Documents for this category will be available soon.</p>
                <input
                  type="file"
                  accept=".pdf"
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files || []);
                    console.log(`Uploaded ${files.length} files for ${activeTab}`);
                  }}
                  className="hidden"
                  id={`upload-${activeTab}`}
                />
                <Button
                  variant="outline"
                  onClick={() => document.getElementById(`upload-${activeTab}`)?.click()}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Upload Documents
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Important Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <h4 className="font-semibold text-red-700">Urgent: Semester End Examinations</h4>
                <p className="text-red-600 mt-1">Final semester examinations will commence from March 15, 2024. Students are advised to check their hall tickets.</p>
                <Button variant="outline" size="sm" className="mt-2">
                  <Download className="h-4 w-4 mr-2" />
                  Download Notice
                </Button>
              </div>
              
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <h4 className="font-semibold text-blue-700">Mid-Term Results Available</h4>
                <p className="text-blue-600 mt-1">Mid-term examination results have been published. Students can check their performance online.</p>
                <Button variant="outline" size="sm" className="mt-2">
                  View Results
                </Button>
              </div>
              
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <h4 className="font-semibold text-green-700">Exam Application Deadline Extended</h4>
                <p className="text-green-600 mt-1">The deadline for exam form submission has been extended to February 28, 2024.</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Apply Online
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Examination Rules */}
        <Card>
          <CardHeader>
            <CardTitle>Examination Rules & Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">For Students</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Arrive at exam hall 30 minutes before start time</li>
                  <li>• Bring valid ID card and hall ticket</li>
                  <li>• Mobile phones are strictly prohibited</li>
                  <li>• Use only blue/black ink pens</li>
                  <li>• Follow dress code guidelines</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">For Faculty</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Report to duty 45 minutes before exam</li>
                  <li>• Ensure proper seating arrangements</li>
                  <li>• Maintain strict vigilance during exam</li>
                  <li>• Submit answer scripts within time</li>
                  <li>• Follow evaluation guidelines</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Downloads Section */}
        <Card>
          <CardHeader>
            <CardTitle>Downloads & Forms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Exam Application Form</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Hall Ticket Download</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Exam Fee Structure</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Re-evaluation Form</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Supplementary Exam Form</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>Grade Card Application</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Examination Cell</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <p className="text-gray-600">Monday to Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Contact Details</h4>
                <p className="text-gray-600">Phone: +91-863-2345678</p>
                <p className="text-gray-600">Email: exams@svrmc.edu.in</p>
                <p className="text-gray-600">Location: Administrative Block, Ground Floor</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default ExaminationCell;