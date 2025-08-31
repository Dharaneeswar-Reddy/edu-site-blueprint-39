import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { useExaminationDocuments } from "@/hooks/useExaminationDocuments";
const ExaminationCell = () => {
  const [activeTab, setActiveTab] = useState("Academic Calendars");
  const {
    documents,
    loading
  } = useExaminationDocuments();
  const tabs = ["Academic Calendars", "Exam Fee Notifications", "Internal Time Tables", "Internal Circulars", "External Time Tables", "Results"];
  const handleOpenFile = (fileUrl: string) => {
    window.open(fileUrl, '_blank');
  };
  const filteredDocuments = documents.filter(doc => doc.document_type === activeTab);
  return <PageLayout title="Examination Cell" description="Central hub for all examination-related activities, schedules, and results at SVRMC.">
      <div className="space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap border-b bg-white rounded-lg shadow-sm">
          {tabs.map((tab, index) => <button key={index} onClick={() => setActiveTab(tab)} className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === tab ? 'border-blue-600 text-blue-600 bg-blue-50' : 'border-transparent text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}>
              {tab}
            </button>)}
        </div>

        {/* Content based on active tab */}
        <Card>
          <CardContent className="p-6">
            {loading ? <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground mt-2">Loading documents...</p>
              </div> : filteredDocuments.length === 0 ? <div className="text-center py-8">
                <p className="text-muted-foreground">No documents available for {activeTab}.</p>
              </div> : <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/20">
                      <th className="text-left py-3 px-4 font-semibold text-primary">S.No</th>
                      <th className="text-left py-3 px-4 font-semibold text-primary">Name</th>
                      <th className="text-center py-3 px-4 font-semibold text-primary">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDocuments.map((doc, index) => <tr key={doc.id} className="border-b hover:bg-muted/10">
                        <td className="py-3 px-4 text-primary font-medium">{index + 1}</td>
                        <td className="py-3 px-4 text-primary">{doc.title}</td>
                        <td className="py-3 px-4 text-center">
                          <Button variant="outline" size="sm" onClick={() => handleOpenFile(doc.file_url)}>
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>}
          </CardContent>
        </Card>

        {/* Contact for Queries Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary mb-6">Contact for Queries</h2>
          
          {/* Contact Details */}
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-4">Examination Office</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p><strong>Phone:</strong> +91-8632-235678</p>
                      <p><strong>Email:</strong> examcell@svrmc.edu.in</p>
                      <p><strong>Office Hours:</strong> 9:00 AM - 5:00 PM (Mon-Fri)</p>
                      <p><strong>Location:</strong> Administrative Block, Ground Floor</p>
                    </div>
                  </div>
                
              </div>
            </CardContent>
          </Card>

          {/* Exam Cell Staff */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-6">Examination Cell Staff</h3>
              
              {/* Controller of Examinations */}
              <div className="mb-8 p-6 bg-muted/20 rounded-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">CE</span>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-lg font-semibold text-primary">Dr. Rajesh Kumar</h4>
                    <p className="text-primary/80 font-medium">Controller of Examinations</p>
                    <p className="text-muted-foreground mt-2">Ph.D in Mathematics, 15+ years experience in examination administration</p>
                    <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                      <p><strong>Email:</strong> controller.exam@svrmc.edu.in</p>
                      <p><strong>Phone:</strong> +91-8632-235679</p>
                      <p><strong>Office:</strong> Room 101, Administrative Block</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exam Staff Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[{
                name: "Ms. Priya Sharma",
                designation: "Assistant Controller",
                department: "Examination Cell",
                email: "priya.exam@svrmc.edu.in",
                phone: "+91-8632-235680",
                specialization: "Result Processing & Grade Management"
              }, {
                name: "Mr. Suresh Reddy",
                designation: "Exam Coordinator",
                department: "Examination Cell",
                email: "suresh.exam@svrmc.edu.in",
                phone: "+91-8632-235681",
                specialization: "Time Table & Hall Allocation"
              }, {
                name: "Ms. Lakshmi Devi",
                designation: "Administrative Assistant",
                department: "Examination Cell",
                email: "lakshmi.exam@svrmc.edu.in",
                phone: "+91-8632-235682",
                specialization: "Student Queries & Documentation"
              }, {
                name: "Mr. Venkat Rao",
                designation: "Technical Assistant",
                department: "Examination Cell",
                email: "venkat.exam@svrmc.edu.in",
                phone: "+91-8632-235683",
                specialization: "Online Systems & IT Support"
              }, {
                name: "Ms. Anitha Kumari",
                designation: "Data Entry Operator",
                department: "Examination Cell",
                email: "anitha.exam@svrmc.edu.in",
                phone: "+91-8632-235684",
                specialization: "Mark Entry & Verification"
              }, {
                name: "Mr. Krishna Murthy",
                designation: "Office Assistant",
                department: "Examination Cell",
                email: "krishna.exam@svrmc.edu.in",
                phone: "+91-8632-235685",
                specialization: "General Administration"
              }].map((staff, index) => <div key={index} className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">
                          {staff.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary text-sm">{staff.name}</h4>
                        <p className="text-xs text-primary/70">{staff.designation}</p>
                      </div>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <p><strong>Specialization:</strong> {staff.specialization}</p>
                      <p><strong>Email:</strong> {staff.email}</p>
                      <p><strong>Phone:</strong> {staff.phone}</p>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </PageLayout>;
};
export default ExaminationCell;