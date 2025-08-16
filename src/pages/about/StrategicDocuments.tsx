import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, Users } from "lucide-react";

const StrategicDocuments = () => {
  const documents = [
    {
      title: "Institutional Development Plan 2020-2025",
      description: "Comprehensive roadmap for institutional growth and academic excellence",
      category: "Strategic Planning",
      year: "2020",
      pages: "45",
      status: "Active"
    },
    {
      title: "Academic Quality Assurance Policy",
      description: "Framework for maintaining and enhancing academic standards",
      category: "Quality Assurance",
      year: "2021",
      pages: "28",
      status: "Active"
    },
    {
      title: "Research and Innovation Strategy",
      description: "Guidelines for promoting research culture and innovation",
      category: "Research",
      year: "2022",
      pages: "32",
      status: "Active"
    },
    {
      title: "Student Welfare and Support Policy",
      description: "Comprehensive framework for student support services",
      category: "Student Affairs",
      year: "2021",
      pages: "24",
      status: "Active"
    },
    {
      title: "Faculty Development and Training Manual",
      description: "Guidelines for continuous professional development",
      category: "Human Resources",
      year: "2022",
      pages: "38",
      status: "Active"
    },
    {
      title: "Digital Transformation Roadmap",
      description: "Strategy for technology integration and digital initiatives",
      category: "Technology",
      year: "2023",
      pages: "42",
      status: "Active"
    }
  ];

  const policies = [
    {
      title: "Admission Policy",
      description: "Guidelines for student admission process and criteria",
      lastUpdated: "March 2024"
    },
    {
      title: "Examination and Evaluation Policy",
      description: "Framework for assessment and examination procedures",
      lastUpdated: "January 2024"
    },
    {
      title: "Anti-Harassment Policy",
      description: "Zero tolerance policy against harassment and discrimination",
      lastUpdated: "February 2024"
    },
    {
      title: "Environmental and Sustainability Policy",
      description: "Commitment to green practices and environmental conservation",
      lastUpdated: "April 2024"
    }
  ];

  return (
    <PageLayout 
      title="Strategic Documents" 
      description="Key institutional documents that guide SVRMC's vision, policies, and strategic initiatives."
    >
      <div className="space-y-8">
        
        {/* Overview */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-college-blue">15+</h3>
                <p className="text-gray-600">Strategic Documents</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-college-blue">8</h3>
                <p className="text-gray-600">Core Policies</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-college-blue">2024</h3>
                <p className="text-gray-600">Latest Updates</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-college-blue">100%</h3>
                <p className="text-gray-600">Compliance</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategic Documents */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-6 w-6 text-college-blue mr-2" />
              Strategic Planning Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-lg mb-2">{doc.title}</h4>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {doc.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {doc.category}
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      {doc.year}
                    </span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                      {doc.pages} pages
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button size="sm" variant="ghost" className="flex-1">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Institutional Policies */}
        <Card>
          <CardHeader>
            <CardTitle>Institutional Policies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {policies.map((policy, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">{policy.title}</h4>
                    <Calendar className="h-4 w-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{policy.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">
                      Updated: {policy.lastUpdated}
                    </span>
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Governance Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Governance and Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Statutory Compliance</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• UGC Compliance Certificate</li>
                  <li>• NAAC Self-Study Report</li>
                  <li>• AISHE Annual Report</li>
                  <li>• Statutory Audit Reports</li>
                </ul>
                <Button variant="outline" size="sm" className="mt-3 w-full">
                  Access Documents
                </Button>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Academic Governance</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Academic Council Minutes</li>
                  <li>• Governing Body Resolutions</li>
                  <li>• Academic Regulations</li>
                  <li>• Faculty Handbook</li>
                </ul>
                <Button variant="outline" size="sm" className="mt-3 w-full">
                  View Academic Docs
                </Button>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Quality Assurance</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• IQAC Annual Reports</li>
                  <li>• Quality Enhancement Plans</li>
                  <li>• Best Practices Documentation</li>
                  <li>• Performance Indicators</li>
                </ul>
                <Button variant="outline" size="sm" className="mt-3 w-full">
                  Quality Documents
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Planning and Development */}
        <Card>
          <CardHeader>
            <CardTitle>Planning and Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6 py-4">
                <h4 className="font-semibold text-blue-700 mb-2">Five-Year Development Plan (2020-2025)</h4>
                <p className="text-gray-600 mb-3">
                  Comprehensive strategic plan outlining institutional goals, infrastructure development, 
                  academic enhancement, and quality improvement initiatives.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Full Document
                  </Button>
                  <Button size="sm" variant="ghost">Executive Summary</Button>
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-4">
                <h4 className="font-semibold text-green-700 mb-2">Annual Action Plans</h4>
                <p className="text-gray-600 mb-3">
                  Year-wise implementation roadmap with specific targets, timelines, and resource allocation 
                  for achieving strategic objectives.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">2024-25 Plan</Button>
                  <Button size="sm" variant="outline">2023-24 Report</Button>
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6 py-4">
                <h4 className="font-semibold text-purple-700 mb-2">Infrastructure Master Plan</h4>
                <p className="text-gray-600 mb-3">
                  Detailed blueprint for campus development, facility upgrades, and technology infrastructure 
                  enhancement over the next decade.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Master Plan
                  </Button>
                  <Button size="sm" variant="ghost">Progress Report</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Document Repository */}
        <Card>
          <CardHeader>
            <CardTitle>Document Repository Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">For Faculty & Staff</h4>
                <p className="text-gray-600 mb-4">
                  Access internal documents, policies, and strategic plans through the faculty portal.
                </p>
                <Button className="w-full">
                  <Users className="h-4 w-4 mr-2" />
                  Faculty Login
                </Button>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Public Documents</h4>
                <p className="text-gray-600 mb-4">
                  View publicly available documents including policies, annual reports, and compliance certificates.
                </p>
                <Button variant="outline" className="w-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Public Repository
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Document Queries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Planning and Development Office</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Dr. Meera Patel, Director Planning</p>
                  <p>Email: planning@svrmc.edu.in</p>
                  <p>Phone: +91-863-2345692</p>
                  <p>Office: Admin Block, Room 205</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Document requests: 24-48 hours processing</p>
                  <p>RTI applications: As per RTI Act</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default StrategicDocuments;