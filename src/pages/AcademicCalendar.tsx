
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "lucide-react";

const AcademicCalendar = () => {
  const academicYear = "2025-26";
  
  const oddSemesterEvents = [
    { date: "July 1, 2025", event: "Reopening of College for Odd Semester", category: "General" },
    { date: "July 5-10, 2025", event: "Orientation Program for First Year Students", category: "General" },
    { date: "August 15, 2025", event: "Independence Day Celebration", category: "Holiday" },
    { date: "September 5, 2025", event: "Teachers' Day Celebration", category: "Event" },
    { date: "September 15-20, 2025", event: "Mid Semester Examinations", category: "Exam" },
    { date: "October 2, 2025", event: "Gandhi Jayanti", category: "Holiday" },
    { date: "October 15-25, 2025", event: "Technical Symposium - TechVista 2025", category: "Event" },
    { date: "November 1-5, 2025", event: "Model Examinations", category: "Exam" },
    { date: "November 20-30, 2025", event: "End Semester Examinations", category: "Exam" },
    { date: "December 1, 2025", event: "Last Working Day of Odd Semester", category: "General" },
  ];
  
  const evenSemesterEvents = [
    { date: "January 2, 2026", event: "Reopening of College for Even Semester", category: "General" },
    { date: "January 14, 2026", event: "Pongal Celebrations", category: "Holiday" },
    { date: "January 26, 2026", event: "Republic Day Celebration", category: "Holiday" },
    { date: "February 15-20, 2026", event: "Annual Sports Meet", category: "Event" },
    { date: "February 28, 2026", event: "National Science Day Celebration", category: "Event" },
    { date: "March 5-10, 2026", event: "Mid Semester Examinations", category: "Exam" },
    { date: "March 15-20, 2026", event: "Cultural Fest - Kalakrithi 2026", category: "Event" },
    { date: "April 10-15, 2026", event: "Model Examinations", category: "Exam" },
    { date: "April 30, 2026", event: "College Day Celebration", category: "Event" },
    { date: "May 5-15, 2026", event: "End Semester Examinations", category: "Exam" },
    { date: "May 20, 2026", event: "Last Working Day of Even Semester", category: "General" },
  ];

  const getCategoryClass = (category: string) => {
    switch(category) {
      case "Holiday":
        return "bg-red-100 text-red-800";
      case "Exam":
        return "bg-purple-100 text-purple-800";
      case "Event":
        return "bg-green-100 text-green-800";
      default:
        return "bg-blue-100 text-blue-800";
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-college-blue mb-4">Academic Calendar</h1>
            <p className="text-gray-600">
              Academic Calendar for the year {academicYear}. Plan your academic activities, examinations, 
              and college events with our comprehensive calendar.
            </p>
          </div>

          <Card className="max-w-5xl mx-auto">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-college-blue" />
                <CardTitle>Academic Calendar {academicYear}</CardTitle>
              </div>
              <CardDescription>Important dates for the academic year</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="odd">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="odd">Odd Semester (July-Dec 2025)</TabsTrigger>
                  <TabsTrigger value="even">Even Semester (Jan-May 2026)</TabsTrigger>
                </TabsList>
                
                <TabsContent value="odd">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border px-4 py-2 text-left">Date</th>
                          <th className="border px-4 py-2 text-left">Event</th>
                          <th className="border px-4 py-2 text-left">Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {oddSemesterEvents.map((event, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="border px-4 py-2 font-medium">{event.date}</td>
                            <td className="border px-4 py-2">{event.event}</td>
                            <td className="border px-4 py-2">
                              <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryClass(event.category)}`}>
                                {event.category}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
                
                <TabsContent value="even">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border px-4 py-2 text-left">Date</th>
                          <th className="border px-4 py-2 text-left">Event</th>
                          <th className="border px-4 py-2 text-left">Category</th>
                        </tr>
                      </thead>
                      <tbody>
                        {evenSemesterEvents.map((event, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="border px-4 py-2 font-medium">{event.date}</td>
                            <td className="border px-4 py-2">{event.event}</td>
                            <td className="border px-4 py-2">
                              <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryClass(event.category)}`}>
                                {event.category}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-6 p-4 border rounded-md bg-amber-50 text-amber-800 text-sm">
                <p className="font-medium">Note:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>This calendar is tentative and subject to changes.</li>
                  <li>Any changes in examination dates will be notified separately.</li>
                  <li>Refer to department notices for specific departmental events.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default AcademicCalendar;
