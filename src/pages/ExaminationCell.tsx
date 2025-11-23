import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useState } from "react";
import { useExaminationDocuments } from "@/hooks/useExaminationDocuments";
import { useExaminationStaff } from "@/hooks/useExaminationStaff";

const ExaminationCell = () => {
  const [activeTab, setActiveTab] = useState("Academic Calendars");
  const { documents, loading } = useExaminationDocuments();
  const { staff: examinationStaff, loading: staffLoading } = useExaminationStaff();

  const tabs = [
    "Academic Calendars",
    "Exam Fee Notifications",
    "Internal Time Tables",
    "Internal Circulars",
    "External Time Tables",
    "Results",
  ];

  // ⭐ Redirect logic for Results tab
  const handleTabClick = (tab: string) => {
    if (tab === "Results") {
      window.location.href = "https://results.svrmc.in/"; // 🔥 CHANGE TO YOUR LINK
      return;
    }
    setActiveTab(tab);
  };

  const handleOpenFile = (fileUrl: string) => {
    window.open(fileUrl, "_blank");
  };

  const filteredDocuments = documents.filter(
    (doc) => doc.document_type === activeTab
  );

  const mainController = examinationStaff.find(
    (staff) =>
      staff.name.toLowerCase().includes("p. srinivasa rao") ||
      staff.designation.toLowerCase().includes("controller of examination")
  );

  const additionalController = examinationStaff.find(
    (staff) =>
      staff.name.toLowerCase().includes("u. siva prasad") ||
      staff.designation.toLowerCase().includes("addl. controller")
  );

  const otherStaff = examinationStaff.filter(
    (staff) => !staff.designation.toLowerCase().includes("controller")
  );

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
              key={index}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-transparent text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <Card>
          <CardContent className="p-6">
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground mt-2">
                  Loading documents...
                </p>
              </div>
            ) : filteredDocuments.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  No documents available for {activeTab}.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/20">
                      <th className="text-left py-3 px-4 font-semibold text-primary">
                        S.No
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-primary">
                        Name
                      </th>
                      <th className="text-center py-3 px-4 font-semibold text-primary">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDocuments.map((doc, index) => (
                      <tr
                        key={doc.id}
                        className="border-b hover:bg-muted/10"
                      >
                        <td className="py-3 px-4 text-primary font-medium">
                          {index + 1}
                        </td>
                        <td className="py-3 px-4 text-primary">
                          {doc.title}
                        </td>
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

        {/* Contact Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary mb-6">
            Contact for Queries
          </h2>

          <Card>
            <CardContent className="p-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Examination Office
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Phone:</strong> 94408 26791, 98490 55376 &
                    98496 29431
                  </p>
                  <p>
                    <strong>Email:</strong> coesvrmc@gmail.com
                  </p>
                  <p>
                    <strong>Office Hours:</strong> 10:00 AM - 5:00 PM
                  </p>
                  <p>
                    <strong>Location:</strong> Examination Cell
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Staff */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-6">
                Examination Cell Staff
              </h3>

              {staffLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="text-muted-foreground mt-2">
                    Loading staff...
                  </p>
                </div>
              ) : (
                <>
                  {/* Controllers */}
                  <div className="mb-8 p-6 bg-muted/20 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      {mainController && (
                        <div className="flex flex-col items-center text-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden bg-primary/10 mb-4">
                            {mainController.photo_url ? (
                              <img
                                src={mainController.photo_url}
                                alt={mainController.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-2xl font-bold text-primary">
                                {mainController.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            )}
                          </div>
                          <h4 className="text-lg font-semibold text-primary">
                            {mainController.name}
                          </h4>
                          <p className="text-primary/80 font-medium">
                            {mainController.designation}
                          </p>
                        </div>
                      )}

                      {additionalController && (
                        <div className="flex flex-col items-center text-center">
                          <div className="w-24 h-24 rounded-full overflow-hidden bg-primary/10 mb-4">
                            {additionalController.photo_url ? (
                              <img
                                src={additionalController.photo_url}
                                alt={additionalController.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-2xl font-bold text-primary">
                                {additionalController.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            )}
                          </div>
                          <h4 className="text-lg font-semibold text-primary">
                            {additionalController.name}
                          </h4>
                          <p className="text-primary/80 font-medium">
                            {additionalController.designation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Other Staff */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-primary mb-4">
                      Support Staff
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {otherStaff.map((staff) => (
                        <div
                          key={staff.id}
                          className="bg-card border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <h5 className="font-semibold text-primary">
                            {staff.name}
                          </h5>
                          <p className="text-sm text-primary/70 font-medium">
                            {staff.designation}
                          </p>
                          <div className="text-xs mt-2 text-muted-foreground space-y-1">
                            <p>
                              <strong>Email:</strong> {staff.email}
                            </p>
                            <p>
                              <strong>Phone:</strong> {staff.phone}
                            </p>
                            <p>
                              <strong>Department:</strong>{" "}
                              {staff.department}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default ExaminationCell;
