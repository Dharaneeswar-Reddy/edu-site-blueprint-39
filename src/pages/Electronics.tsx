import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Zap, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import useStaff from "@/hooks/useStaff";
import useDepartmentTimetables from "@/hooks/useDepartmentTimetables";
import StaffCard from "@/components/StaffCard";
const Electronics = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { staff: departmentStaff, loading: staffLoading } = useStaff("Electronics", "teaching");
  const { timetables, loading: timetablesLoading } = useDepartmentTimetables("Electronics");
  
  const heroImages = ["/lovable-uploads/62dd7cbb-9d48-41a6-8c1e-138a0a64781f.png", "/lovable-uploads/e9171361-3daf-46c6-9dde-49cee7972f8d.png", "/lovable-uploads/f9770128-6b9e-40f0-b9e0-aa9a3cf2b0cd.png", "/lovable-uploads/548c6401-f5bd-40a6-9341-1a93bccfc0b6.png", "/lovable-uploads/73ac46cf-651f-4353-b496-5a721117f386.png"];
  const departmentPhotos = ["/lovable-uploads/62dd7cbb-9d48-41a6-8c1e-138a0a64781f.png", "/lovable-uploads/e9171361-3daf-46c6-9dde-49cee7972f8d.png", "/lovable-uploads/f9770128-6b9e-40f0-b9e0-aa9a3cf2b0cd.png", "/lovable-uploads/548c6401-f5bd-40a6-9341-1a93bccfc0b6.png", "/lovable-uploads/73ac46cf-651f-4353-b496-5a721117f386.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <PageLayout title="Department of Electronics" description="The Department of Electronics in SVRM college produce innovative Electronics Students by imparting quality Education with Ethical and Moral values to meet the Global Standards">
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => <img key={index} src={image} alt={`Electronics Department ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              
              
            </div>
          </div>
        </div>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p>
              Electronics is a branch of physics that deals with the study of electrons, their behavior, and how they affect electronic devices. It's a subfield of electrical engineering that uses devices like transistors, diodes, and integrated circuits to control and amplify electric currents.
            </p>
            <p>
              Electronics has had a major impact on many aspects of modern society, including: telecommunications, entertainment, education, health care, industry, and security.
            </p>
            <p>
              An Electronics Students can work in aviation and avionics, consumer electronics, electricity plants, manufacturing, transportation, communication & telecommunication, computer application, radio & television, diagnostic equipment manufacturing, and offshore companies.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 text-blue-800">VISION</h4>
              <p className="text-blue-700">
                To produce innovative Electronics Students by imparting quality Education with Ethical and Moral values to meet the Global Standards
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 text-green-800">MISSION</h4>
              <ul className="text-green-700 space-y-2">
                <li>• To provide proper training to rural youth in the region</li>
                <li>• To design academic programs through which the learner fits into global necessity</li>
                <li>• To create and promote brain storming skills of creativity and innovation inherent in the young minds of the area</li>
                <li>• To evolve a value-based education system instilling the values of hard work, discipline, and service mindedness</li>
                <li>• To impart holistic education based on the ethical values of Truth, Love, God. It enables the learners to develop as intellectually mature, morally upright, socially responsible, and spiritually inspired leaders to serve society.</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 text-purple-800">OBJECTIVES & GOALS</h4>
              <ul className="text-purple-700 space-y-2">
                <li>• Creating an interest in Electronics by means of the teaching and learning process</li>
                <li>• Motivating students to learn basic experimental work to get a conceptual background in Electronics</li>
                <li>• Maintaining the departmental library to keep valuable books and internet resources at the disposal of the students</li>
                <li>• Promoting students towards self-employment and also encouraging them to participate in internships with renowned industries and laboratories</li>
                <li>• Imparting high-quality education by adopting advanced methods of teaching</li>
                <li>• Conducting seminars and workshops to develop a scientific attitude among students</li>
                <li>• Establishing curriculum-related features towards applications of AI in Electronics by conducting workshops and webinars by eminent resource persons</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">90</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">2</div>
                <div className="text-sm text-gray-600">Faculty Members</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seat Structure and Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Seat Structure & Programs Offered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Undergraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>B.Sc. Electronics Honours</span>
                    <Badge variant="secondary">30 Seats</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Program Structure */}
        <Card>
          <CardHeader>
            <CardTitle>Course Structure - B.Sc. Electronics Honours (4 Years)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-3">Year I</h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-medium text-sm">Semester I</h6>
                        <ul className="text-xs space-y-1 mt-1">
                          <li>1. Essentials and Applications of Mathematical, Physical and Chemical Sciences</li>
                          <li>2. Advances in Mathematical, Physical and Chemical Sciences</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium text-sm">Semester II</h6>
                        <ul className="text-xs space-y-1 mt-1">
                          <li>3. Fundamental of Electricity and Electronics</li>
                          <li>4. Fundamental of Electricity and Electronics Practical Course</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-3">Year II</h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-medium text-sm">Semester III</h6>
                        <ul className="text-xs space-y-1 mt-1">
                          <li>5. Circuit theory and electronic devices</li>
                          <li>6. Circuit theory and electronic devices Practical Course</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium text-sm">Semester IV</h6>
                        <ul className="text-xs space-y-1 mt-1">
                          <li>7. Semiconductor devices and Materials</li>
                          <li>8. Semiconductor devices and Materials Practical Course</li>
                          <li>9. Digital Electronics</li>
                          <li>10. Digital Electronics Practical Course</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-3">Year III</h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-medium text-sm">Semester V</h6>
                        <ul className="text-xs space-y-1 mt-1">
                          <li>11. Analog Electronics</li>
                          <li>12. Analog Electronics Practical Course</li>
                          <li>13. Electronic communication system</li>
                          <li>14. Electronic communication system Practical Course</li>
                          <li>15. Electrical and electronics instrumentation</li>
                          <li>16. Electrical and electronics instrumentation Practical Course</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium text-sm">Semester VI</h6>
                        <ul className="text-xs space-y-1 mt-1">
                          <li>17. Microcontrol system</li>
                          <li>18. Microcontrol system Practical Course</li>
                          <li>19. Microprocessor system</li>
                          <li>20. Microprocessor system Practical Course</li>
                          <li>Internship</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-orange-600 mb-3">Year IV</h5>
                    <div className="space-y-3">
                      <div>
                        <h6 className="font-medium text-sm">Semester VII</h6>
                        <ul className="text-xs space-y-1 mt-1">
                          <li>21. Cellular Mobile Communication</li>
                          <li>22. Computer Network</li>
                          <li>23A. Industrial Electronics OR 23B. Embedded system Design</li>
                          <li>24A. Digital system Design OR 24B. Consumer Electronics</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium text-sm">Semester VIII</h6>
                        <ul className="text-xs space-y-1 mt-1">
                          <li>25A. Medical Electronics OR 25B. Advanced Communication Systems</li>
                          <li>26A. Electronic domestic applications OR 26B. Digital Communication Systems</li>
                          <li>27A. RF Networks OR 27B. Wireless Sensor Network Design</li>
                          <li>28A. Sensors OR 28B. Bio-medical Instrumentation</li>
                          <li>29A. Digital Signal Processing OR 29B. IoT Fundamentals</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Outcomes & Program Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Outcomes for B.Sc. Electronics (Honours)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <h6 className="font-medium text-blue-600 mb-1">1. Fundamental Knowledge</h6>
                  <p className="text-xs">Demonstrate a solid foundation in electronics, physics, and mathematics, enabling comprehensive understanding of theoretical principles and practical applications.</p>
                </div>
                <div>
                  <h6 className="font-medium text-blue-600 mb-1">2. Circuit Analysis and Design</h6>
                  <p className="text-xs">Apply knowledge of electronic components, circuits, and systems to design, analyze, and troubleshoot both analog and digital circuits.</p>
                </div>
                <div>
                  <h6 className="font-medium text-blue-600 mb-1">3. Laboratory and Technical Skills</h6>
                  <p className="text-xs">Develop hands-on skills in using laboratory instruments, simulation software, and microcontrollers (e.g., Arduino, Raspberry Pi) for experimental and project-based learning.</p>
                </div>
                <div>
                  <h6 className="font-medium text-blue-600 mb-1">4. Digital Systems and Communication</h6>
                  <p className="text-xs">Understand and apply concepts of digital electronics, microprocessors, microcontrollers, and communication systems in practical scenarios.</p>
                </div>
                <div>
                  <h6 className="font-medium text-blue-600 mb-1">5. Problem-Solving and Critical Thinking</h6>
                  <p className="text-xs">Identify, analyze, and solve complex problems in electronics by integrating theoretical and practical approaches.</p>
                </div>
                <div>
                  <h6 className="font-medium text-blue-600 mb-1">6. Embedded Systems and Programming</h6>
                  <p className="text-xs">Gain proficiency in programming languages (C, Python, VHDL, etc.) and apply them in embedded systems and automation projects.</p>
                </div>
                <div>
                  <h6 className="font-medium text-blue-600 mb-1">7. Modern Tools Usage</h6>
                  <p className="text-xs">Utilize simulation, CAD, and analysis tools (e.g., Multisim, MATLAB, Proteus) for modeling, designing, and testing of circuits and systems.</p>
                </div>
                <div>
                  <h6 className="font-medium text-blue-600 mb-1">8. Research and Innovation</h6>
                  <p className="text-xs">Engage in mini-projects, research activities, and innovative solutions.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <h6 className="font-medium text-green-600 mb-1">1. Scientific Knowledge</h6>
                  <p className="text-xs">Apply the knowledge of mathematics, physics, electronics, and computer science to understand, analyze, and solve problems in the interdisciplinary field of electronics.</p>
                </div>
                <div>
                  <h6 className="font-medium text-green-600 mb-1">2. Problem Analysis</h6>
                  <p className="text-xs">Identify, formulate, and analyze complex problems in electronics using principles of circuits, devices, digital systems, and communication technology.</p>
                </div>
                <div>
                  <h6 className="font-medium text-green-600 mb-1">3. Design and Development of Solutions</h6>
                  <p className="text-xs">Design and develop electronic circuits, systems, and applications to meet specific needs, considering safety, environmental, and societal aspects.</p>
                </div>
                <div>
                  <h6 className="font-medium text-green-600 mb-1">4. Modern Tool Usage</h6>
                  <p className="text-xs">Use modern software tools, programming languages, and laboratory instruments for simulation, design, testing, and analysis of electronic systems.</p>
                </div>
                <div>
                  <h6 className="font-medium text-green-600 mb-1">5. Scientific Temper & Research Aptitude</h6>
                  <p className="text-xs">Develop a scientific outlook and research mindset to carry out experiments, analyze data, and draw valid conclusions in electronics and interdisciplinary fields.</p>
                </div>
                <div>
                  <h6 className="font-medium text-green-600 mb-1">6. Ethics and Professional Responsibility</h6>
                  <p className="text-xs">Apply ethical principles and commit to professional ethics, responsibilities, and norms of scientific practice.</p>
                </div>
                <div>
                  <h6 className="font-medium text-green-600 mb-1">7. Individual and Team Work</h6>
                  <p className="text-xs">Work effectively as an individual and as a member/leader in diverse teams, demonstrating communication and collaboration skills.</p>
                </div>
                <div>
                  <h6 className="font-medium text-green-600 mb-1">8. Communication Skills</h6>
                  <p className="text-xs">Communicate effectively through oral presentations, technical reports, and digital platforms with scientific community, industry, and society at large.</p>
                </div>
                <div>
                  <h6 className="font-medium text-green-600 mb-1">9. Environment and Sustainability</h6>
                  <p className="text-xs">Understand the impact of electronics and technology on environment and society, and apply knowledge towards sustainable solutions.</p>
                </div>
                <div>
                  <h6 className="font-medium text-green-600 mb-1">10. Lifelong Learning</h6>
                  <p className="text-xs">Recognize the need for continuous learning and acquire the ability to adapt to emerging technologies and innovations in the field of electronics.</p>
                </div>
                <div>
                  <h6 className="font-medium text-green-600 mb-1">11. Entrepreneurship and Employability</h6>
                  <p className="text-xs">Develop entrepreneurial skills, innovation capacity, and employability through applied knowledge in electronics, instrumentation, automation, and IT.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Department Staff */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-college-blue" />
              Department Staff
            </CardTitle>
          </CardHeader>
          <CardContent>
            {staffLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading staff information...</p>
              </div>
            ) : departmentStaff.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departmentStaff.map((staff) => (
                  <StaffCard key={staff.id} staff={staff} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Users className="h-16 w-16 mx-auto mb-4 opacity-20" />
                <p>No staff information available at the moment.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Department Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Department Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentPhotos.map((photo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src={photo} alt={`Electronics Lab ${index + 1}`} className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Time Tables */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-college-blue" />
              Time Tables
            </CardTitle>
          </CardHeader>
          <CardContent>
            {timetablesLoading ? (
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

export default Electronics;