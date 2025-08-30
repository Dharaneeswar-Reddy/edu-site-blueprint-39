import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Book, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import { useDepartmentTimetables } from "@/hooks/useDepartmentTimetables";
const English = () => {
  const {
    timetables,
    loading,
    error
  } = useDepartmentTimetables("English");
  const departmentPhotos = ["/lovable-uploads/3bc86c14-c438-4cb9-a9f5-03bcad4c929d.png", "/lovable-uploads/6108bb5a-5f7c-4701-88a2-1f642b6807fd.png"];
  return <PageLayout title="Department of English" description="Nurturing literary appreciation, communication skills, and critical thinking through the study of English language and literature.">
      <div className="space-y-8">
        
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          <img src="/lovable-uploads/a3b4a9e7-1cf7-47e5-8f5f-c284f1385e0a.png" alt="English Department" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            
          </div>
        </div>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The department of ENGLISH was started in August 21 1969. The Department of English was established on August 21, 1969, marking the beginning of a legacy dedicated to literary excellence and transformative education. Over the decades, it has evolved into a vibrant academic hub that nurtures intellectual curiosity, creative expression, and critical thinking.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Academic Achievements</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Year of Establishment:</strong> 1969</p>
                  <p><strong>Year of Introduction of Course:</strong> 1969</p>
                  <p><strong>Number of faculty with M.Phil:</strong> 02</p>
                  <p><strong>Number of faculty Pursuing Ph.D:</strong> 02</p>
                </div>
                <div>
                  <p><strong>International Seminars Participated:</strong> 01</p>
                  <p><strong>National Seminars Participated:</strong> 11</p>
                  <p><strong>State Seminars Participated:</strong> 02</p>
                  <p><strong>Refresher courses attended:</strong> 03</p>
                </div>
              </div>
            </div>
            
            <p>
              The Department of English at SVRMC is dedicated to fostering a deep appreciation for English language and literature while developing critical thinking and communication skills. Our comprehensive programs explore literary works spanning different periods, genres, and cultural contexts.
            </p>
            <p>
              With experienced faculty members who are passionate about teaching and research, we provide students with a rich learning environment that encourages creative expression, analytical thinking, and effective communication. Our graduates excel in fields such as education, journalism, content writing, and literary research.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">225</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">01</div>
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
                <div className="text-sm text-gray-600">Programs</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vision & Mission */}
        <Card>
          <CardHeader>
            <CardTitle>Vision & Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Vision</h4>
                <p className="text-sm bg-blue-50 p-4 rounded-lg">
                  Expelling Darkness of Ignorance from the minds of young men by providing real education on the basis of divine principles "Truth Love God" (Tama Soma Jyothirgamaya)
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-600">Mission</h4>
                <ul className="text-sm space-y-2 bg-green-50 p-4 rounded-lg">
                  <li>• To provide proper training to rural youth of the region</li>
                  <li>• To design academic programs through which the learner fits to global necessity</li>
                  <li>• To create and promote, brain storm skills of creativity and innovation inherent in young minds of the area</li>
                  <li>• To evolve value based education system instilling the values of hard work, discipline and service mindedness</li>
                  <li>• To impart holistic education based on ethical values of Truth, Love, God. It enables the learners to develop as intellectually mature, morally upright, socially responsible and spiritually inspired leaders to serve the society</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Aims and Objectives */}
        <Card>
          <CardHeader>
            <CardTitle>Aims and Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">AIMS</h4>
                  <ul className="text-sm space-y-2">
                    <li>• To enable the students develop interest in English</li>
                    <li>• Listen to the language with proper comprehension</li>
                    <li>• Express themselves creatively and imaginatively</li>
                    <li>• Improve their drafting and editing skills</li>
                    <li>• Get prepared for the university examinations through an intensive study of the prescribed texts</li>
                    <li>• Gain awareness through seminars, workshops and project works etc.</li>
                    <li>• Gain confidence in pursuing their careers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-3">OBJECTIVES</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Language development</li>
                    <li>• And literary development (in the students)</li>
                    <li>• To develop the skills of LSRW (Listening, Speaking, Reading and Writing)</li>
                  </ul>
                </div>
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
                  <span>B.A.B.Com.B.sc.Bca.English Literature (1Year)</span>
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
                <h4 className="font-semibold mb-3">Year 1 Program Structure</h4>
                <div className="p-4 border rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                  <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Introduction to Literature</li>
                    <li>• English Grammar & Composition</li>
                    <li>• Poetry & Prose</li>
                    <li>• Communication Skills</li>
                  </ul>
                </div>
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
                <h4 className="font-semibold mb-4 text-blue-600">SEMESTER-I: A Course in Communication and Soft Skills</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <h5 className="font-medium mb-2">Unit I: Listening Skills</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Importance of Listening</li>
                      <li>• Types of Listening</li>
                      <li>• Barriers to Listening</li>
                      <li>• Effective Listening</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-green-50">
                    <h5 className="font-medium mb-2">Unit II: Phonetics</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Sounds of English: Vowels and Consonants</li>
                      <li>• Syllable</li>
                      <li>• Word Stress</li>
                      <li>• Intonation</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-purple-50">
                    <h5 className="font-medium mb-2">Unit III: Grammar</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Concord</li>
                      <li>• Articles</li>
                      <li>• Prepositions</li>
                      <li>• Tenses</li>
                      <li>• Question tags</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-orange-50">
                    <h5 className="font-medium mb-2">Unit IV: Speaking Skills</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Greetings & Introduction</li>
                      <li>• Asking and Giving Information</li>
                      <li>• Yes, We Can - Barack Obama</li>
                      <li>• Agreeing/Disagreeing</li>
                      <li>• Leader Should Know How to Manage Failure - Dr. A.P.J. Abdul Kalam</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-pink-50">
                    <h5 className="font-medium mb-2">Unit V: Soft Skills</h5>
                    <ul className="text-sm space-y-1">
                      <li>• SWOC</li>
                      <li>• Attitude</li>
                      <li>• Emotional Intelligence</li>
                      <li>• Netiquette</li>
                      <li>• Interpersonal Skills</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-green-600">SEMESTER-II: A Course in Reading and Writing Skills</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg bg-blue-50">
                    <h5 className="font-medium mb-2">Unit I: Poetry & Skills</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Ulysses - Alfred Lord Tennyson</li>
                      <li>• Vocabulary: Conversion of Words</li>
                      <li>• One Word Substitutes</li>
                      <li>• Collocations</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-green-50">
                    <h5 className="font-medium mb-2">Unit II: Prose & Skills</h5>
                    <ul className="text-sm space-y-1">
                      <li>• The Best Investment I Ever Made - A.J. Cronin</li>
                      <li>• Florence Nightingale - Abrar Mohsin</li>
                      <li>• Skimming and Scanning</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-purple-50">
                    <h5 className="font-medium mb-2">Unit III: Prose & Poetry</h5>
                    <ul className="text-sm space-y-1">
                      <li>• The Night Train at Deoli - Ruskin Bond</li>
                      <li>• Stopping by Woods on a Snowy Evening - Robert Frost</li>
                      <li>• Reading Comprehension</li>
                      <li>• Note Making/Taking</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-orange-50">
                    <h5 className="font-medium mb-2">Unit IV: Poetry & Skills</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Night of the Scorpion - Nissim Ezekiel</li>
                      <li>• Expansion of Ideas</li>
                      <li>• Notices, Agendas and Minutes</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg bg-pink-50">
                    <h5 className="font-medium mb-2">Unit V: Skills</h5>
                    <ul className="text-sm space-y-1">
                      <li>• An Astrologer's Day - R.K Narayan</li>
                      <li>• Curriculum Vitae and Resume</li>
                      <li>• Letters</li>
                      <li>• E-Correspondence</li>
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
                <li>• Understand the importance of listening and practice effective listening</li>
                <li>• Use grammar effectively for accuracy in writing and speaking. Use relevant vocabulary in everyday communication</li>
                <li>• Acquire ability to use Soft Skills in professional and daily life</li>
                <li>• Confidently use the skills of communication</li>
                <li>• Use reading skills for effective comprehension</li>
                <li>• Build up a repository of active vocabulary</li>
                <li>• Own writing strategies in academic skills</li>
                <li>• Enable writing skills for future purposes</li>
                <li>• Enhance communicative competence through Reading and Writing skills acquired</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Speak fluently in English</li>
                <li>• Participate confidently in any social interaction</li>
                <li>• Face any professional discourse</li>
                <li>• Demonstrate critical thinking</li>
                <li>• Enhance conversational skills by observing the professional interviews</li>
                <li>• Use grammar effectively in writing and speaking</li>
                <li>• Demonstrate the use of good vocabulary</li>
                <li>• Demonstrate an understanding of writing skills</li>
                <li>• Acquire ability to use soft skills in professional and daily life</li>
                <li>• Confidently use the tools of communication skills</li>
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
                  <h4 className="font-semibold text-blue-600 mb-3">Activity 1: Swarna Andhra @2047 Essay Writing Competition</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Date:</strong> 01/10/2024</p>
                    <p><strong>Conducted by:</strong> Smt P.B.V Rani</p>
                    <p><strong>Participants:</strong> 60 students</p>
                    <p><strong>Chairperson:</strong> Dr. A. Hari Krishna (Principal), V.V. Rao (AD sir)</p>
                    <p><strong>Convenor:</strong> Smt P.B.V. Rani</p>
                    <p className="mt-3"><strong>Report:</strong> "Swarna Andhra @2047" an essay writing competition was conducted by the Department of English on 01/10/2024 a Govt Program. Many students participated and students will improve their imagination skills about how Andhra is going to be in upcoming future.</p>
                  </div>
                  <div className="mt-4">
                    <img src="/lovable-uploads/3bc86c14-c438-4cb9-a9f5-03bcad4c929d.png" alt="Swarna Andhra Essay Writing Competition" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg bg-green-50">
                  <h4 className="font-semibold text-green-600 mb-3">Activity 2: Skill Enhancement Program</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Date:</strong> 09/01/2024</p>
                    <p><strong>Conducted by:</strong> Smt P.B.V Rani</p>
                    <p><strong>Participants:</strong> 25 students</p>
                    <p><strong>Chairperson:</strong> Dr. A. Hari Krishna (Principal), V.V. Rao (AD sir)</p>
                    <p><strong>Convenor:</strong> Smt P.B.V. Rani</p>
                    <p className="mt-3"><strong>Report:</strong> A skill Enhancement Programme Based on soft skills was conducted by Department of English on 09/01/2024 on the topic reading comprehensive. Student will improve their reading skills and their speaking.</p>
                  </div>
                  <div className="mt-4">
                    <img src="/lovable-uploads/6108bb5a-5f7c-4701-88a2-1f642b6807fd.png" alt="Skill Enhancement Program" className="w-full h-48 object-cover rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Staff */}
        <DepartmentStaff departmentName="English" />

        {/* Department Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Department Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departmentPhotos.map((photo, index) => <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src={photo} alt={`English Department Activity ${index + 1}`} className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
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
export default English;