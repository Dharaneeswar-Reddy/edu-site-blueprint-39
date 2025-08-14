
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExamSchedule = () => {
  const currentExams = [
    {
      department: "Computer Science Engineering",
      exams: [
        { date: "May 10, 2025", time: "10:00 AM - 1:00 PM", code: "CS601", subject: "Cloud Computing" },
        { date: "May 12, 2025", time: "10:00 AM - 1:00 PM", code: "CS602", subject: "Artificial Intelligence" },
        { date: "May 14, 2025", time: "10:00 AM - 1:00 PM", code: "CS603", subject: "Information Security" },
        { date: "May 16, 2025", time: "10:00 AM - 1:00 PM", code: "CS604", subject: "Big Data Analytics" },
        { date: "May 19, 2025", time: "10:00 AM - 1:00 PM", code: "CS605", subject: "Mobile Computing" }
      ]
    },
    {
      department: "Electronics & Communication Engineering",
      exams: [
        { date: "May 10, 2025", time: "10:00 AM - 1:00 PM", code: "EC601", subject: "VLSI Design" },
        { date: "May 12, 2025", time: "10:00 AM - 1:00 PM", code: "EC602", subject: "Wireless Communication" },
        { date: "May 14, 2025", time: "10:00 AM - 1:00 PM", code: "EC603", subject: "Digital Signal Processing" },
        { date: "May 16, 2025", time: "10:00 AM - 1:00 PM", code: "EC604", subject: "Antenna Design" },
        { date: "May 19, 2025", time: "10:00 AM - 1:00 PM", code: "EC605", subject: "Microprocessors" }
      ]
    },
    {
      department: "Mechanical Engineering",
      exams: [
        { date: "May 10, 2025", time: "10:00 AM - 1:00 PM", code: "ME601", subject: "Advanced Thermodynamics" },
        { date: "May 12, 2025", time: "10:00 AM - 1:00 PM", code: "ME602", subject: "Machine Design" },
        { date: "May 14, 2025", time: "10:00 AM - 1:00 PM", code: "ME603", subject: "Robotics" },
        { date: "May 16, 2025", time: "10:00 AM - 1:00 PM", code: "ME604", subject: "CAD/CAM" },
        { date: "May 19, 2025", time: "10:00 AM - 1:00 PM", code: "ME605", subject: "Manufacturing Technology" }
      ]
    },
    {
      department: "Civil Engineering",
      exams: [
        { date: "May 10, 2025", time: "10:00 AM - 1:00 PM", code: "CE601", subject: "Structural Engineering" },
        { date: "May 12, 2025", time: "10:00 AM - 1:00 PM", code: "CE602", subject: "Environmental Engineering" },
        { date: "May 14, 2025", time: "10:00 AM - 1:00 PM", code: "CE603", subject: "Transportation Engineering" },
        { date: "May 16, 2025", time: "10:00 AM - 1:00 PM", code: "CE604", subject: "Geotechnical Engineering" },
        { date: "May 19, 2025", time: "10:00 AM - 1:00 PM", code: "CE605", subject: "Water Resource Engineering" }
      ]
    }
  ];

  const upcomingExams = [
    {
      examType: "Mid Semester Examination",
      startDate: "March 5, 2026",
      endDate: "March 10, 2026",
      note: "Schedule will be published one week before examinations"
    },
    {
      examType: "Model Examinations",
      startDate: "April 10, 2026",
      endDate: "April 15, 2026",
      note: "Schedule will be published two weeks before examinations"
    },
    {
      examType: "End Semester Examinations",
      startDate: "May 5, 2026",
      endDate: "May 15, 2026",
      note: "Schedule will be published three weeks before examinations"
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-college-blue mb-4">Examination Schedule</h1>
            <p className="text-gray-600">
              View the current examination timetable and upcoming examination dates.
            </p>
          </div>

          <Tabs defaultValue="current" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="current">Current Examination Schedule</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Examinations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="current">
              <Card>
                <CardHeader>
                  <CardTitle>Current End Semester Examination Schedule</CardTitle>
                  <CardDescription>May 2025 Examinations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="cse">
                    <TabsList className="w-full flex flex-wrap justify-start mb-4">
                      <TabsTrigger value="cse" className="mb-2 mr-2">CSE</TabsTrigger>
                      <TabsTrigger value="ece" className="mb-2 mr-2">ECE</TabsTrigger>
                      <TabsTrigger value="mech" className="mb-2 mr-2">Mechanical</TabsTrigger>
                      <TabsTrigger value="civil" className="mb-2 mr-2">Civil</TabsTrigger>
                    </TabsList>
                    
                    {currentExams.map((dept, index) => (
                      <TabsContent key={index} value={dept.department === "Computer Science Engineering" ? "cse" : 
                        dept.department === "Electronics & Communication Engineering" ? "ece" :
                        dept.department === "Mechanical Engineering" ? "mech" : "civil"}>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-gray-50">
                                <th className="border px-4 py-2 text-left">Date</th>
                                <th className="border px-4 py-2 text-left">Time</th>
                                <th className="border px-4 py-2 text-left">Code</th>
                                <th className="border px-4 py-2 text-left">Subject</th>
                              </tr>
                            </thead>
                            <tbody>
                              {dept.exams.map((exam, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                  <td className="border px-4 py-2 font-medium">{exam.date}</td>
                                  <td className="border px-4 py-2">{exam.time}</td>
                                  <td className="border px-4 py-2">{exam.code}</td>
                                  <td className="border px-4 py-2">{exam.subject}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              <div className="mt-6 p-4 border rounded-md bg-amber-50 text-amber-800 text-sm">
                <p className="font-medium">Examination Guidelines:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Students should arrive 30 minutes before the examination start time.</li>
                  <li>College ID card is mandatory for entry into the examination hall.</li>
                  <li>Electronic devices are not permitted in the examination hall.</li>
                  <li>Students will not be allowed to leave the examination hall in the first hour and last 15 minutes.</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Examinations</CardTitle>
                  <CardDescription>Projected examination dates for next semester</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {upcomingExams.map((exam, index) => (
                      <div key={index} className="border rounded-md p-4 bg-white">
                        <h3 className="font-medium text-lg text-college-blue">{exam.examType}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <p className="text-gray-600">
                            <span className="font-medium">Period:</span> {exam.startDate} to {exam.endDate}
                          </p>
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Upcoming</div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">{exam.note}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 p-4 border rounded-md bg-blue-50 text-blue-800 text-sm">
                <p className="font-medium">Note:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Examination dates are tentative and subject to change.</li>
                  <li>Final examination schedule will be published on the college notice board and website.</li>
                  <li>Students are advised to regularly check the examination portal for updates.</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default ExamSchedule;
