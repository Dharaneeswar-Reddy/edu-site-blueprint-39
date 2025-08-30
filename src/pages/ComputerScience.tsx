import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Cpu, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import { useDepartmentTimetables } from "@/hooks/useDepartmentTimetables";

const ComputerScience = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { timetables, loading, error } = useDepartmentTimetables("Computer Science");

  const heroImages = [
    "/lovable-uploads/0c919efa-1218-4c67-8c23-35ceaa355014.png",
    "/lovable-uploads/9ca62294-2911-4407-b13a-c3cba06af79b.png",
    "/lovable-uploads/2b3acfa1-27c7-4f20-9538-2ae32cc4d7ee.png",
    "/lovable-uploads/b4c998e6-35dc-46cd-9211-83c5d07a641d.png",
    "/lovable-uploads/42406bfe-3d1b-499c-a992-6f33c42ceebf.png",
    "/lovable-uploads/074cdcc3-34a8-4340-88d9-e64c54f80c47.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/e98f9552-31a8-4563-ba1c-d2996d761365.png",
    "/lovable-uploads/df09bc14-a701-443d-8856-e86228cf804a.png",
    "/lovable-uploads/2b3acfa1-27c7-4f20-9538-2ae32cc4d7ee.png",
    "/lovable-uploads/b4c998e6-35dc-46cd-9211-83c5d07a641d.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <PageLayout 
      title="Department of Computer Science" 
      description="Shaping Digital Futures, Empowering Rural Minds through Technology. Providing quality education, digital skills, and community outreach to prepare students and rural youth for success in the modern world."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Computer Science Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Computer Science Department</h1>
              <p className="text-xl md:text-2xl">Shaping Digital Innovators</p>
            </div>
          </div>
        </div>

        {/* Department Overview and Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Department Overview */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-6 w-6 text-college-blue" />
                  Department Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Department of Computer Science, Sri Velagapudi Ramakrishna Memorial College is the first 
                  academic Computer Centre in the area of old Repalle providing Quality Higher education in 
                  Computer Science & Applications and brightening the future with wider educational opportunities 
                  and better employment prospects for the backward rural youth.
                </p>
                <p>
                  Committed to providing quality education, research opportunities, and skill development in the 
                  ever-evolving field of computing and technology. Established with the vision of empowering rural 
                  youth through digital knowledge, the department blends strong academic foundations with practical 
                  exposure to prepare students for careers in IT, software development, data science, artificial 
                  intelligence, and emerging technologies.
                </p>
                <p>
                  With a dedicated team of experienced faculty, modern computer labs, and access to the latest 
                  software and digital resources, the department ensures that students gain both theoretical 
                  understanding and hands-on skills. Beyond academics, it encourages participation in coding 
                  competitions, workshops, seminars, and industry collaborations, fostering innovation and 
                  problem-solving abilities.
                </p>
                <p>
                  The department also plays a vital role in bridging the digital divide for rural learners, 
                  equipping them with the knowledge, confidence, and adaptability to succeed in higher education, 
                  research, and the global job market.
                </p>
                <p>
                  Beyond academics, the department is deeply committed to community service and rural development. 
                  Through digital literacy workshops, computer training camps, and outreach programs, it extends 
                  the benefits of technology to rural youth, schools, and local communities. These initiatives 
                  help bridge the digital divide, promote ICT awareness, and empower communities to access 
                  opportunities in education, employment, and entrepreneurship.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                    <div className="text-2xl font-bold text-college-blue">500+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">10</div>
                    <div className="text-sm text-gray-600">Faculty Members</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Department Photos */}
          <div className="space-y-4">
            {departmentPhotos.map((photo, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={photo} 
                  alt={`Computer Science Lab ${index + 1}`}
                  className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Seat Structure and Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Seat Structure & Programs Offered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Undergraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>B.Sc Computer Science</span>
                    <Badge variant="secondary">88 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>BCA Computer Applications</span>
                    <Badge variant="secondary">100 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded">
                    <span>B.Com Computer Applications</span>
                    <Badge variant="secondary">40 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded">
                    <span>B.Sc Electronics</span>
                    <Badge variant="secondary">30 Seats</Badge>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Postgraduate Programs</h4>
                <div className="p-3 bg-gray-50 rounded text-center">
                  <span className="text-gray-600">No PG programs currently</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Program Structure */}
        <Card>
          <CardHeader>
            <CardTitle>Course Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* B.Sc Computer Science */}
              <div>
                <h4 className="font-semibold mb-4 text-blue-600">B.Sc Computer Science (Semester I to VI)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-gray-300 p-2 text-left">Year</th>
                        <th className="border border-gray-300 p-2 text-left">Semester</th>
                        <th className="border border-gray-300 p-2 text-left">Course</th>
                        <th className="border border-gray-300 p-2 text-left">Title of the Course</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr><td className="border border-gray-300 p-2 font-medium" rowSpan={4}>I</td><td className="border border-gray-300 p-2" rowSpan={2}>I</td><td className="border border-gray-300 p-2">1</td><td className="border border-gray-300 p-2">Computer Fundamentals and Office Automation</td></tr>
                      <tr><td className="border border-gray-300 p-2">2</td><td className="border border-gray-300 p-2">Problem Solving Using C</td></tr>
                      <tr><td className="border border-gray-300 p-2" rowSpan={2}>II</td><td className="border border-gray-300 p-2">3</td><td className="border border-gray-300 p-2">Data Structures using C</td></tr>
                      <tr><td className="border border-gray-300 p-2">4</td><td className="border border-gray-300 p-2">Digital Logic Design</td></tr>
                      <tr><td className="border border-gray-300 p-2 font-medium" rowSpan={6}>II</td><td className="border border-gray-300 p-2" rowSpan={3}>III</td><td className="border border-gray-300 p-2">5</td><td className="border border-gray-300 p-2">OOPS Through JAVA</td></tr>
                      <tr><td className="border border-gray-300 p-2">6</td><td className="border border-gray-300 p-2">Data Base Management</td></tr>
                      <tr><td className="border border-gray-300 p-2">7</td><td className="border border-gray-300 p-2">Computer Organisation</td></tr>
                      <tr><td className="border border-gray-300 p-2" rowSpan={3}>IV</td><td className="border border-gray-300 p-2">8</td><td className="border border-gray-300 p-2">Operating Systems</td></tr>
                      <tr><td className="border border-gray-300 p-2">9</td><td className="border border-gray-300 p-2">Computer Networks</td></tr>
                      <tr><td className="border border-gray-300 p-2">10</td><td className="border border-gray-300 p-2">Python Programming</td></tr>
                      <tr><td className="border border-gray-300 p-2 font-medium" rowSpan={8}>III</td><td className="border border-gray-300 p-2" rowSpan={4}>V</td><td className="border border-gray-300 p-2">11</td><td className="border border-gray-300 p-2">Software Engineering</td></tr>
                      <tr><td className="border border-gray-300 p-2">12 A or 12 B</td><td className="border border-gray-300 p-2">Web Interface Design Technologies / SEB1:Data Science with R</td></tr>
                      <tr><td className="border border-gray-300 p-2">13 A or 13 B</td><td className="border border-gray-300 p-2">Web Application Development using PHP & MySQL / Python for Data Science</td></tr>
                      <tr><td className="border border-gray-300 p-2">-</td><td className="border border-gray-300 p-2">Project Work</td></tr>
                      <tr><td className="border border-gray-300 p-2" rowSpan={4}>VI</td><td className="border border-gray-300 p-2">14 A or 14 B</td><td className="border border-gray-300 p-2">Mobile Application Development / Data Visualization Tools</td></tr>
                      <tr><td className="border border-gray-300 p-2">15 A or 15 B</td><td className="border border-gray-300 p-2">MERN Stack / Machine Learning</td></tr>
                      <tr><td className="border border-gray-300 p-2">-</td><td className="border border-gray-300 p-2">Internship</td></tr>
                      <tr><td className="border border-gray-300 p-2">-</td><td className="border border-gray-300 p-2">Project Presentation</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-600 mt-2">
                  <strong>Note:</strong> In the III Year (during the V and VI Semesters), students are required to select a pair of electives from one of the Two specified domains. For example: if set 'A' is chosen, courses 12 to 15 to be chosen as 12 A, 13 A, 14 A and 15 A. To ensure in-depth understanding and skill development in the chosen domain, students must continue with the same domain electives in both the V and VI Semesters.
                </p>
              </div>

              {/* B.C.A. (Computer Applications) */}
              <div>
                <h4 className="font-semibold mb-4 text-green-600">B.C.A. (Computer Applications) - Semester I to VI</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-green-50">
                        <th className="border border-gray-300 p-2 text-left">Year</th>
                        <th className="border border-gray-300 p-2 text-left">Semester</th>
                        <th className="border border-gray-300 p-2 text-left">Course</th>
                        <th className="border border-gray-300 p-2 text-left">Title of the Course</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr><td className="border border-gray-300 p-2 font-medium" rowSpan={4}>I</td><td className="border border-gray-300 p-2" rowSpan={2}>I</td><td className="border border-gray-300 p-2">1</td><td className="border border-gray-300 p-2">Computer Fundamentals and Office Automation</td></tr>
                      <tr><td className="border border-gray-300 p-2">2</td><td className="border border-gray-300 p-2">Problem Solving Using C</td></tr>
                      <tr><td className="border border-gray-300 p-2" rowSpan={2}>II</td><td className="border border-gray-300 p-2">3</td><td className="border border-gray-300 p-2">Data Structures using C</td></tr>
                      <tr><td className="border border-gray-300 p-2">4</td><td className="border border-gray-300 p-2">Database Management System</td></tr>
                      <tr><td className="border border-gray-300 p-2 font-medium" rowSpan={6}>II</td><td className="border border-gray-300 p-2" rowSpan={3}>III</td><td className="border border-gray-300 p-2">5</td><td className="border border-gray-300 p-2">OOPS Through JAVA</td></tr>
                      <tr><td className="border border-gray-300 p-2">6</td><td className="border border-gray-300 p-2">Computer Organisation</td></tr>
                      <tr><td className="border border-gray-300 p-2">7</td><td className="border border-gray-300 p-2">Probability and Statistics</td></tr>
                      <tr><td className="border border-gray-300 p-2" rowSpan={3}>IV</td><td className="border border-gray-300 p-2">8</td><td className="border border-gray-300 p-2">Operating Systems</td></tr>
                      <tr><td className="border border-gray-300 p-2">9</td><td className="border border-gray-300 p-2">Python Programming</td></tr>
                      <tr><td className="border border-gray-300 p-2">10</td><td className="border border-gray-300 p-2">Software Engineering</td></tr>
                      <tr><td className="border border-gray-300 p-2 font-medium" rowSpan={6}>III</td><td className="border border-gray-300 p-2" rowSpan={3}>V</td><td className="border border-gray-300 p-2">11</td><td className="border border-gray-300 p-2">Data Mining</td></tr>
                      <tr><td className="border border-gray-300 p-2">12 A or 12 B</td><td className="border border-gray-300 p-2">Web Interface Design Technologies / Computer Networks</td></tr>
                      <tr><td className="border border-gray-300 p-2">13 A or 13 B</td><td className="border border-gray-300 p-2">Web Application Development using PHP & MySQL / Cyber Security</td></tr>
                      <tr><td className="border border-gray-300 p-2" rowSpan={3}>VI</td><td className="border border-gray-300 p-2">14 A or 14 B</td><td className="border border-gray-300 p-2">Mobile Application Development / Cloud Fundamentals and Security</td></tr>
                      <tr><td className="border border-gray-300 p-2">15 A or 15 B</td><td className="border border-gray-300 p-2">MERN Stack / Digital Forensics</td></tr>
                      <tr><td className="border border-gray-300 p-2">-</td><td className="border border-gray-300 p-2">Project Work</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* B.Com. (Computer Applications) */}
              <div>
                <h4 className="font-semibold mb-4 text-purple-600">B.Com. (Computer Applications) - Semester I to VI</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-purple-50">
                        <th className="border border-gray-300 p-2 text-left">Year</th>
                        <th className="border border-gray-300 p-2 text-left">Semester</th>
                        <th className="border border-gray-300 p-2 text-left">Course</th>
                        <th className="border border-gray-300 p-2 text-left">Title of the Course</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr><td className="border border-gray-300 p-2 font-medium" rowSpan={4}>I</td><td className="border border-gray-300 p-2" rowSpan={2}>I</td><td className="border border-gray-300 p-2">1</td><td className="border border-gray-300 p-2">Financial Accounting I</td></tr>
                      <tr><td className="border border-gray-300 p-2">2</td><td className="border border-gray-300 p-2">Business Organization and Management</td></tr>
                      <tr><td className="border border-gray-300 p-2" rowSpan={2}>II</td><td className="border border-gray-300 p-2">3</td><td className="border border-gray-300 p-2">Financial Accounting II</td></tr>
                      <tr><td className="border border-gray-300 p-2">4</td><td className="border border-gray-300 p-2">Office Tools for Business</td></tr>
                      <tr><td className="border border-gray-300 p-2 font-medium" rowSpan={6}>II</td><td className="border border-gray-300 p-2" rowSpan={3}>III</td><td className="border border-gray-300 p-2">5</td><td className="border border-gray-300 p-2">Advanced Accounting</td></tr>
                      <tr><td className="border border-gray-300 p-2">6</td><td className="border border-gray-300 p-2">Business Statistics</td></tr>
                      <tr><td className="border border-gray-300 p-2">7</td><td className="border border-gray-300 p-2">Data Base Management System</td></tr>
                      <tr><td className="border border-gray-300 p-2" rowSpan={3}>IV</td><td className="border border-gray-300 p-2">8</td><td className="border border-gray-300 p-2">Corporate Accounting</td></tr>
                      <tr><td className="border border-gray-300 p-2">9</td><td className="border border-gray-300 p-2">Cost and Management Accounting</td></tr>
                      <tr><td className="border border-gray-300 p-2">10</td><td className="border border-gray-300 p-2">Computerized Accounting with Tally</td></tr>
                      <tr><td className="border border-gray-300 p-2 font-medium" rowSpan={5}>III</td><td className="border border-gray-300 p-2" rowSpan={2}>V</td><td className="border border-gray-300 p-2">11</td><td className="border border-gray-300 p-2">Entrepreneurship & Startups</td></tr>
                      <tr><td className="border border-gray-300 p-2">12 A or 12 B</td><td className="border border-gray-300 p-2">E-Commerce / Business Intelligence and Data Visualization</td></tr>
                      <tr><td className="border border-gray-300 p-2" rowSpan={3}>VI</td><td className="border border-gray-300 p-2">13 A or 13 B</td><td className="border border-gray-300 p-2">Business Analytics Using Excel and Power BI / Accounting Information System</td></tr>
                      <tr><td className="border border-gray-300 p-2">14 A or 14 B</td><td className="border border-gray-300 p-2">Auditing / Financial Institutions and Markets</td></tr>
                      <tr><td className="border border-gray-300 p-2">15 A or 15 B</td><td className="border border-gray-300 p-2">Income Tax / Financial Planning</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Consolidated COs, POs, and PSOs */}
        <Card>
          <CardHeader>
            <CardTitle>Consolidated Course Outcomes, Program Outcomes, and Program Specific Outcomes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* B.Sc. Computer Science */}
              <div>
                <h4 className="font-semibold mb-4 text-blue-600">B.Sc. Computer Science</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium mb-2 text-blue-500">Program Outcomes (POs)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• PO1: Apply computer science & math fundamentals</li>
                      <li>• PO2: Analyze & solve computational problems</li>
                      <li>• PO3: Design efficient software</li>
                      <li>• PO4: Apply ethics & professionalism</li>
                      <li>• PO5: Communicate & work in teams</li>
                      <li>• PO6: Lifelong learning & adaptability</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-blue-500">Program Specific Outcomes (PSOs)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• PSO1: Apply programming & algorithms</li>
                      <li>• PSO2: Design DB, software, & networks</li>
                      <li>• PSO3: Use modern tools for research & innovation</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-blue-500">Course Outcomes (COs)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Foundation in programming, algorithms, DBMS, OS, networking</li>
                      <li>• Apply math & stats in computing</li>
                      <li>• Develop software & testing skills</li>
                      <li>• Exposure to AI, cloud, data science</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* B.C.A. (Computer Applications) */}
              <div>
                <h4 className="font-semibold mb-4 text-green-600">B.C.A. (Computer Applications)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium mb-2 text-green-500">Program Outcomes (POs)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• PO1: Apply computing in business & industry</li>
                      <li>• PO2: Solve application-oriented problems</li>
                      <li>• PO3: Design & deploy software systems</li>
                      <li>• PO4: Work ethically & in teams</li>
                      <li>• PO5: Lifelong learning</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-green-500">Program Specific Outcomes (PSOs)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• PSO1: Develop apps in C, Java, Python</li>
                      <li>• PSO2: Apply web, mobile, & DB tech</li>
                      <li>• PSO3: Implement security & networking</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-green-500">Course Outcomes (COs)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Skills in C, Java, Python, Web & Mobile apps</li>
                      <li>• Apply DBMS, SE, OS</li>
                      <li>• Real-time projects using cloud, data mining, full stack</li>
                      <li>• Develop entrepreneurship & project management</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* B.Com (Computer Applications) */}
              <div>
                <h4 className="font-semibold mb-4 text-purple-600">B.Com (Computer Applications)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-medium mb-2 text-purple-500">Program Outcomes (POs)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• PO1: Apply commerce & management knowledge</li>
                      <li>• PO2: Use IT in business analysis</li>
                      <li>• PO3: Accounting, financial, entrepreneurial skills</li>
                      <li>• PO4: Apply ethics in business</li>
                      <li>• PO5: Effective communication & lifelong learning</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-purple-500">Program Specific Outcomes (PSOs)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• PSO1: Apply Tally, DBMS, office tools</li>
                      <li>• PSO2: Integrate IT with accounting, auditing, taxation</li>
                      <li>• PSO3: Use BI & analytics for decisions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-purple-500">Course Outcomes (COs)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Knowledge in accounting, management, taxation</li>
                      <li>• Apply Excel, Power BI, Tally ERP, DBMS</li>
                      <li>• Learn e-commerce, entrepreneurship, finance</li>
                      <li>• Skills for industry, startups, professional practice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Computer Science" />

        {/* Time Tables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-college-blue" />
              Time Tables
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground mt-2">Loading timetables...</p>
              </div>
            ) : timetables.length === 0 ? (
              <div className="text-center py-8">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">No timetables available at the moment.</p>
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
                    {timetables.map((timetable, index) => (
                      <tr key={timetable.id} className="border-b hover:bg-muted/10">
                        <td className="py-3 px-4 text-primary font-medium">{index + 1}</td>
                        <td className="py-3 px-4 text-primary">
                          <div>
                            <div className="font-medium">{timetable.title}</div>
                            {timetable.description && (
                              <div className="text-sm text-muted-foreground">{timetable.description}</div>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(timetable.file_url, '_blank')}
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
    </PageLayout>
  );
};

export default ComputerScience;