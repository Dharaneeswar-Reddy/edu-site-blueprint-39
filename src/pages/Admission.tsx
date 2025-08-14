
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Calendar, FileCheck, FileText, Users, Phone, Mail, GraduationCap, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Admission = () => {
  const programs = [
    {
      id: 1,
      name: "Bachelor of Technology (B.Tech)",
      duration: "4 years",
      specializations: [
        "Computer Science & Engineering",
        "Electronics & Communication Engineering",
        "Mechanical Engineering",
        "Civil Engineering",
        "Electrical & Electronics Engineering"
      ]
    },
    {
      id: 2,
      name: "Master of Technology (M.Tech)",
      duration: "2 years",
      specializations: [
        "Computer Science & Engineering",
        "Digital Systems & Signal Processing",
        "Thermal Engineering",
        "Structural Engineering"
      ]
    },
    {
      id: 3,
      name: "Bachelor of Science (B.Sc)",
      duration: "3 years",
      specializations: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science"
      ]
    },
    {
      id: 4,
      name: "Master of Science (M.Sc)",
      duration: "2 years",
      specializations: [
        "Applied Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science"
      ]
    },
    {
      id: 5,
      name: "Bachelor of Commerce (B.Com)",
      duration: "3 years",
      specializations: [
        "Accounting",
        "Finance",
        "Banking"
      ]
    },
    {
      id: 6,
      name: "Master of Business Administration (MBA)",
      duration: "2 years",
      specializations: [
        "Finance",
        "Marketing",
        "Human Resources",
        "Operations Management"
      ]
    }
  ];

  const importantDates = [
    { event: "Application Portal Opens", date: "June 1, 2025" },
    { event: "Last Date for Application Submission", date: "July 15, 2025" },
    { event: "Entrance Examination", date: "July 30, 2025" },
    { event: "Result Declaration", date: "August 10, 2025" },
    { event: "Counselling Process", date: "August 15-25, 2025" },
    { event: "Commencement of Classes", date: "September 1, 2025" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-college-blue text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Begin Your Journey with SVRMC</h1>
            <p className="text-lg md:text-xl mb-8">Admission for the academic year 2025-26 is now open. Take the first step towards a successful career with quality education at SVRMC.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-college-blue hover:bg-gray-100">
                Apply Online
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-college-blue">
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Process Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8 text-center">Admission Process</h2>
          
          <Tabs defaultValue="undergraduate" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
              <TabsTrigger value="undergraduate" className="text-lg">Undergraduate</TabsTrigger>
              <TabsTrigger value="postgraduate" className="text-lg">Postgraduate</TabsTrigger>
              <TabsTrigger value="phd" className="text-lg">Ph.D Programs</TabsTrigger>
            </TabsList>
            
            <TabsContent value="undergraduate" className="border rounded-lg p-6 bg-white">
              <h3 className="text-xl font-bold mb-4">Undergraduate Admission Process</h3>
              <ol className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="font-medium">Online Application</p>
                    <p className="text-gray-600">Complete the online application form and pay the application fee.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="font-medium">Entrance Examination</p>
                    <p className="text-gray-600">Appear for the SVRMC entrance examination or submit scores from recognized national/state-level entrance tests.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="font-medium">Merit List Publication</p>
                    <p className="text-gray-600">Merit lists will be published on the college website and notice board.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <p className="font-medium">Counselling and Document Verification</p>
                    <p className="text-gray-600">Attend the counselling session as per the schedule and bring all original documents for verification.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                  <div>
                    <p className="font-medium">Fee Payment</p>
                    <p className="text-gray-600">Pay the admission fee to secure your seat.</p>
                  </div>
                </li>
              </ol>
              <Button className="mt-4">Apply for Undergraduate Programs</Button>
            </TabsContent>
            
            <TabsContent value="postgraduate" className="border rounded-lg p-6 bg-white">
              <h3 className="text-xl font-bold mb-4">Postgraduate Admission Process</h3>
              <ol className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="font-medium">Online Application</p>
                    <p className="text-gray-600">Complete the online application form and pay the application fee.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="font-medium">Entrance Test/Interview</p>
                    <p className="text-gray-600">Appear for the department-specific entrance test or interview.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="font-medium">Selection and Offer Letter</p>
                    <p className="text-gray-600">Selected candidates will receive an offer letter for admission.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <p className="font-medium">Document Verification</p>
                    <p className="text-gray-600">Submit all required documents for verification.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                  <div>
                    <p className="font-medium">Fee Payment</p>
                    <p className="text-gray-600">Pay the admission fee to secure your seat.</p>
                  </div>
                </li>
              </ol>
              <Button className="mt-4">Apply for Postgraduate Programs</Button>
            </TabsContent>
            
            <TabsContent value="phd" className="border rounded-lg p-6 bg-white">
              <h3 className="text-xl font-bold mb-4">Ph.D Admission Process</h3>
              <ol className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="font-medium">Research Proposal Submission</p>
                    <p className="text-gray-600">Submit a detailed research proposal along with the application form.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="font-medium">Entrance Test</p>
                    <p className="text-gray-600">Appear for the Ph.D entrance test (exemption for candidates with valid NET/SLET/GATE scores).</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="font-medium">Personal Interview</p>
                    <p className="text-gray-600">Shortlisted candidates will be called for a personal interview with the departmental research committee.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <p className="font-medium">Selection and Admission</p>
                    <p className="text-gray-600">Final selection based on entrance test performance, interview, and research proposal evaluation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-college-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                  <div>
                    <p className="font-medium">Registration</p>
                    <p className="text-gray-600">Complete the registration process and assignment of research supervisor.</p>
                  </div>
                </li>
              </ol>
              <Button className="mt-4">Apply for Ph.D Programs</Button>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8 text-center">Academic Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Card key={program.id} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{program.name}</CardTitle>
                      <CardDescription>Duration: {program.duration}</CardDescription>
                    </div>
                    <div className="bg-college-blue/10 p-2 rounded-full">
                      <GraduationCap className="h-6 w-6 text-college-blue" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">Specializations:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {program.specializations.map((spec, index) => (
                      <li key={index} className="text-gray-700">{spec}</li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link to={`/programs/${program.id}`} className="text-college-blue hover:underline font-medium flex items-center">
                      <Bookmark className="h-4 w-4 mr-2" /> Learn more about this program
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" size="lg">View All Programs</Button>
          </div>
        </div>
      </section>

      {/* Important Dates and Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Important Dates */}
            <div>
              <h2 className="section-title mb-8">Important Dates</h2>
              <Card>
                <CardContent className="p-0">
                  <ul className="divide-y divide-gray-100">
                    {importantDates.map((item, index) => (
                      <li key={index} className="p-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-college-blue mr-3" />
                          <span>{item.event}</span>
                        </div>
                        <span className="font-semibold">{item.date}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <div className="mt-6 text-sm text-gray-600">
                <p>* Dates are subject to change. Please check the website regularly for updates.</p>
              </div>
            </div>
            
            {/* Required Documents */}
            <div>
              <h2 className="section-title mb-8">Required Documents</h2>
              <Card className="bg-white p-6">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <FileCheck className="h-5 w-5 text-college-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Academic Certificates</h3>
                      <p className="text-gray-600">10th, 12th mark sheets and certificates, Degree certificate for PG programs</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FileCheck className="h-5 w-5 text-college-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Entrance Exam Scores</h3>
                      <p className="text-gray-600">JEE/GATE/NET/SLET scorecard as applicable</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FileCheck className="h-5 w-5 text-college-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Identity and Address Proof</h3>
                      <p className="text-gray-600">Aadhaar Card, PAN Card, Passport, Voter ID, etc.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FileCheck className="h-5 w-5 text-college-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Passport Size Photographs</h3>
                      <p className="text-gray-600">Recent passport-sized photographs (4-6 copies)</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FileCheck className="h-5 w-5 text-college-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Category Certificate</h3>
                      <p className="text-gray-600">Valid caste certificate for SC/ST/OBC candidates</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <FileCheck className="h-5 w-5 text-college-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Transfer Certificate</h3>
                      <p className="text-gray-600">Original Transfer Certificate from the last attended institution</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="flex items-center gap-2">
                    <FileText className="h-4 w-4" /> Download Document Checklist
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What is the admission process for foreign students?",
                answer: "Foreign students need to submit their academic records, passport details, and complete an online application. They may also need to provide English proficiency test scores like IELTS or TOEFL. After initial screening, shortlisted candidates will be interviewed online."
              },
              {
                question: "Are there any scholarships available?",
                answer: "Yes, SVRMC offers various scholarships based on academic merit, sports achievements, and financial need. There are also government scholarships available for eligible students. Details can be found in the scholarship section of our website."
              },
              {
                question: "How can I apply for hostel accommodation?",
                answer: "Hostel accommodation is available for both boys and girls. You can apply for hostel accommodation after receiving an admission offer. The application form is available on the college website or can be obtained from the hostel office."
              },
              {
                question: "Is there an entrance examination for all courses?",
                answer: "Not all courses require an entrance examination. Some programs admit students based on their performance in qualifying examinations or interviews. Please refer to the specific admission requirements for each program on our website."
              },
              {
                question: "Can I change my program after admission?",
                answer: "Program changes may be permitted within the first two weeks of the academic session, subject to availability of seats and fulfillment of eligibility criteria for the new program. Such requests need to be approved by the respective department heads."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions about the admission process?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> Contact Admission Office
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email Your Query
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Users className="h-4 w-4" /> Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/lovable-uploads/bf17da84-634b-4ca1-b09f-996816eb4e61.png")' }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Academic Community?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Take the first step towards a rewarding career. Apply now for the 2025-26 academic year.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-college-blue hover:bg-gray-100">
              Start Your Application
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-college-blue">
              Download Admission Brochure
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admission;
