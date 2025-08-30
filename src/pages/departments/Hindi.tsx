import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Languages, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import { useDepartmentTimetables } from "@/hooks/useDepartmentTimetables";
const Hindi = () => {
  const {
    timetables,
    loading,
    error
  } = useDepartmentTimetables("Hindi");
  const departmentPhotos = ["/lovable-uploads/aae99b11-cfd7-4f65-b39f-c9b2beb0c9d6.png", "/lovable-uploads/6e42ca20-59a4-45f5-919d-59cb9d0413c8.png"];
  return <PageLayout title="हिंदी विभाग - Department of Hindi" description="हिंदी भाषा और साहित्य की समृद्ध परंपरा को आगे बढ़ाते हुए राष्ट्रीय एकता और सांस्कृतिक मूल्यों का संवर्धन।">
      <div className="space-y-8">
        
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          <img src="/lovable-uploads/90a79da6-220f-4c8f-89c3-4d85fe488101.png" alt="Hindi Department" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            
          </div>
        </div>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed">
              हिंदी भारत की राष्ट्रभाषा होने के साथ-साथ करोड़ों लोगों की मातृभाषा भी है। यह केवल एक भाषा नहीं, बल्कि भारतीय संस्कृति, सभ्यता और एकता की पहचान है। हिंदी सरल, सहज और भावनात्मक अभिव्यक्ति की भाषा है, जो जन-जन से जुड़ी हुई है। इसका साहित्य अत्यंत समृद्ध है, जिसमें प्रेम, वीरता, करुणा और समाज के विविध पहलुओं की सुंदर झलक मिलती है। हिंदी कवियों और लेखकों ने विश्व साहित्य को अनमोल रचनाएँ दी हैं। आज शिक्षा, संचार, प्रशासन और मीडिया में हिंदी का महत्व लगातार बढ़ रहा है। हमें गर्व है कि हिंदी जैसी भाषा हमारी विरासत है, जिसे अपनाकर हम अपनी संस्कृति को सहेज सकते हैं। हमें हिंदी का सम्मान करना चाहिए और इसे अपनी दिनचर्या में स्थान देना चाहिए।
            </p>
            <p>
              The department of Hindi was started in August 21 1969. It was developed under the able principal ship of the late Sri S. Madhusudhan Rao, the member student union. Ms. K Vijaya kumari, was the founder Head, department of Hindi. They succeeded the headship and contributed their mite for academic growth of the department as well as the institution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">170+</div>
                <div className="text-sm text-gray-600">Students enrolled</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">1</div>
                <div className="text-sm text-gray-600">Faculty Members</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">1969</div>
                <div className="text-sm text-gray-600">Established</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">4</div>
                <div className="text-sm text-gray-600">Academic Focus Areas</div>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Academic Focus</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Classical and Modern Hindi Literature</li>
                  <li>Hindi Grammar and Linguistics</li>
                  <li>Translation Studies and Creative Writing</li>
                  <li>Comparative Literature and Cultural Studies</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seat Structure and Programs */}

        <Card>
          <CardHeader>
            <CardTitle>Vision & Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Vision</h4>
                <p className="text-sm bg-blue-50 p-4 rounded-lg">
                  To provide holistic education and employability through Higher education for Rural youth of the area with values Truth, Love and God.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-600">Mission</h4>
                <ul className="text-sm space-y-2 bg-green-50 p-4 rounded-lg">
                  <li>• To provide proper training to rural young men and women of the region</li>
                  <li>• To design academic programs through which the learner fits to global necessity</li>
                  <li>• To create and promote, brain storm skills of creativity and innovation inherent in young minds of the area</li>
                  <li>• A sound value education system instilling the values of hard work, discipline and service mindedness</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Programs Offered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Undergraduate Programs</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                  <span>B. A, B. Com, B.sc, BCA Hindi Literature (I Year)</span>
                  <Badge variant="secondary">Available</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Program Structure */}
        <Card>
          <CardHeader>
            <CardTitle>Program Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">I Year Program Structure</h4>
                <div className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h5 className="font-medium text-blue-600 mb-2">I Year</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Introduction to Literature</li>
                    <li>• Poetry & Prose</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Goals and Objectives */}
        <Card>
          <CardHeader>
            <CardTitle>Goals and Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-semibold text-blue-600 mb-2">Education</h5>
                <p className="text-sm">Providing higher quality education in Hindi Language.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-600 mb-2">Communication</h5>
                <p className="text-sm">To develop Hindi speaking ability in students by the end of undergraduate programme</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-semibold text-purple-600 mb-2">Employment</h5>
                <p className="text-sm">Providing better employment opportunities for backward and rural youth.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <h5 className="font-semibold text-orange-600 mb-2">Culture</h5>
                <p className="text-sm">To make students free from rituals so as to develop love to Indian culture and heritage, through Hindi Literature.</p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <h5 className="font-semibold text-pink-600 mb-2">Higher Education</h5>
                <p className="text-sm">Brightening the future with wider educational opportunities</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Structure */}
        <Card>
          <CardHeader>
            <CardTitle>Course Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-4 text-blue-600">SEMESTER-I: हिन्दी गद्य साहित्य</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <h5 className="font-medium mb-2">Unit-1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• मित्रता - आचार्य रामचंद्र शुक्ल</li>
                      <li>• साहित्य की महत्ता - महावीर प्रसाद द्विवेदी</li>
                      <li>• बिंदा - महादेवी वर्मा</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-green-50">
                    <h5 className="font-medium mb-2">Unit-II</h5>
                    <ul className="text-sm space-y-1">
                      <li>• मुक्तिधन- प्रेमचन्द</li>
                      <li>• पुरस्कार जयशंकर प्रसाद</li>
                      <li>• और वह पढ़ गई डॉ कुसुम वियोगी</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-purple-50">
                    <h5 className="font-medium mb-2">Unit-III</h5>
                    <ul className="text-sm space-y-1">
                      <li>• हिन्दी साहित्य का इतिहास - सामान्य परिचय</li>
                      <li>• काल विभाजन</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-orange-50">
                    <h5 className="font-medium mb-2">Unit-IV</h5>
                    <ul className="text-sm space-y-1">
                      <li>• कार्यालयीन शब्दावली</li>
                      <li>• लिंग, वचन, काल, कारक</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-pink-50">
                    <h5 className="font-medium mb-2">Unit-V</h5>
                    <ul className="text-sm space-y-1">
                      <li>• व्यक्तिगत पत्र</li>
                      <li>• आवेन पत्र</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-green-600">SEMESTER-II: हि न्दी पद्य साहित्य</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <h5 className="font-medium mb-2">Unit-I (प्राचीन कविता)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• कबीर दास-५ दोहे</li>
                      <li>• सूरदास बाल लीला</li>
                      <li>• तुलसीदास-५ दोहे</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-green-50">
                    <h5 className="font-medium mb-2">Unit-II (आधुनिक कविता)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• मातृभाषा - भारतेंदु हरि क्षेद्र</li>
                      <li>• भिक्षुक - सूर्यकांत त्रिपाठी निराला</li>
                      <li>• मादा भ्रूण- रजनी तिलक</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-purple-50">
                    <h5 className="font-medium mb-2">Unit-III (सामान्य निबन्ध)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• विद्यार्थी और अनुशासन</li>
                      <li>• विश्व भाषा के रूप में हिंदी</li>
                      <li>• पर्यावरण प्रदूषण</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-orange-50">
                    <h5 className="font-medium mb-2">Unit-IV (प्रयोजन मूलक हिन्दी)</h5>
                    <ul className="text-sm space-y-1">
                      <li>• परिपत्र</li>
                      <li>• ज्ञापन</li>
                      <li>• अधिसूचना</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-pink-50">
                    <h5 className="font-medium mb-2">Unit-V</h5>
                    <ul className="text-sm space-y-1">
                      <li>• अनुवाद - अंग्रेजी से हिन्दी</li>
                      <li>• तेलुगु से हिन्दी</li>
                      <li>• संक्षेपण, संदर्भ ग्रंथ</li>
                    </ul>
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
              <CardTitle>Course Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• मानव मूल्यों को पहचानकर छात्र समाज कल्याण हेतु अपने योगदान दे सकेंगे।</li>
                <li>• आधुनिक युग की भावनाओं को पहचानकर सामाजिक समस्याओं के प्रति जागरुक हो सकेंगे।</li>
                <li>• हिन्दी और अंग्रेजी के माध्यम से विध्यार्थी अनुवाद कौशल विकसित कर सकेंगे।</li>
                <li>• छात्रों को व्याकरण के द्वारा भाषा में निपुणता बढ़ेगी।</li>
                <li>• छात्रों को पत्र लेखन द्वारा लेखन कौशल बढेगा तथा संप्रेषण का विकास भी होगा।</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• निबंध, रेखाचित्र, कहानी जैसी गद्य की विभिन्न विधाओं को समझ पाना एवं विश्लेषण कर पाना।</li>
                <li>• सच्चे मित्र के गुणों से अवगत हो पाना, जो की स्नातक स्तर के विद्यार्थियों के लिए अति आवश्यक है।</li>
                <li>• पठित रचनाओं में दर्शित सामाजिक, ऐतिहासिक, सांस्कृतिक आदि संदर्भों का मूल्यांकन कर पाना।</li>
                <li>• धार्मिक सहिष्णुता, देश प्रेम आदि उत्तम भावनाओं को जागृत कर पाना।</li>
                <li>• हिन्दी साहित्य इतिहास के संक्षिप्त अध्ययन से विविध काल एवं तत्कालीन परिस्थितियों से अवगत होना।</li>
                <li>• व्याकरणिक इकाइयों की समझ एवं प्रभावपूर्ण पत्र लेखन का ज्ञान अर्जित कर सकना।</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Departmental Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Departmental Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border rounded-lg bg-blue-50">
                  <h4 className="font-semibold text-blue-600 mb-3">Activity 1: Skill Enhancement Program</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Date:</strong> 10/01/2024</p>
                    <p><strong>Topic:</strong> Hindi Anuvaad</p>
                    <p><strong>Conducted by:</strong> Smt.V.V. Jaya Lakshmi</p>
                    <p><strong>Participants:</strong> 25 students</p>
                    <p><strong>Chairperson:</strong> Dr. A. Hari Krishna (Principal)</p>
                    <p className="mt-3"><strong>Report:</strong> A skill enhancement program was conducted by Department of Hindi on the topic of "Hindi Anuvaad" on 10/01/2024. To improve their Hindi language skills in daily life.</p>
                  </div>
                  <div className="mt-4">
                    <img src="/lovable-uploads/aae99b11-cfd7-4f65-b39f-c9b2beb0c9d6.png" alt="Hindi Skill Enhancement Program" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg bg-green-50">
                  <h4 className="font-semibold text-green-600 mb-3">Activity 2: National Hindi Day</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Date:</strong> 10/01/2024</p>
                    <p><strong>Conducted by:</strong> Smt V.V. Jaya Lakshmi</p>
                    <p><strong>Participants:</strong> 30 students</p>
                    <p><strong>Chairperson:</strong> Dr. A. Hari Krishna (Principal)</p>
                    <p><strong>Convenor:</strong> Smt V.V. Jaya Lakshmi</p>
                    <p className="mt-3"><strong>Report:</strong> "International Hindi Day" program was conducted by the Department of Hindi on 10/01/2025 in collaboration with college students will know about the importance Hindi language and will improve their language skills.</p>
                  </div>
                  <div className="mt-4">
                    <img src="/lovable-uploads/6e42ca20-59a4-45f5-919d-59cb9d0413c8.png" alt="National Hindi Day Celebration" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Hindi" />

        {/* Department Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Department Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departmentPhotos.map((photo, index) => <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src={photo} alt={`Hindi Department Activity ${index + 1}`} className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                </div>)}
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
            {loading ? <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground mt-2">Loading timetables...</p>
              </div> : timetables.length === 0 ? <div className="text-center py-8">
                <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">No timetables available at the moment.</p>
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
                    {timetables.map((timetable, index) => <tr key={timetable.id} className="border-b hover:bg-muted/10">
                        <td className="py-3 px-4 text-primary font-medium">{index + 1}</td>
                        <td className="py-3 px-4 text-primary">
                          <div>
                            <div className="font-medium">{timetable.title}</div>
                            {timetable.description && <div className="text-sm text-muted-foreground">{timetable.description}</div>}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Button variant="outline" size="sm" onClick={() => window.open(timetable.file_url, '_blank')}>
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

      </div>
    </PageLayout>;
};
export default Hindi;