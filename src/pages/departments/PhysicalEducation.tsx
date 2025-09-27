import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, Zap, Mail, Download, FileText, Trophy, Target, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import useStudentAchievements from "@/hooks/useStudentAchievements";
const PhysicalEducation = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {
    achievements,
    loading: achievementsLoading
  } = useStudentAchievements("Physical Education");
  const heroImages = [];
  const departmentPhotos = ["/lovable-uploads/d87e5dab-fcca-417d-93c3-6e7a95fadefe.png", "/lovable-uploads/e57191fd-f471-4f51-922b-b0469d5e986c.png", "/lovable-uploads/548c502f-f9c1-42ea-a2e5-c1be0587ae3d.png", "/lovable-uploads/20c98bba-762d-44a6-bd81-9e54e4524d60.png", "/lovable-uploads/6f0d123f-d8ba-4e1a-bbbe-c3d2f78f5629.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  const events = ["National Sports Day Celebrations", "Cricket", "SVRMC FEST", "BallBadminton Tournament Men & women", "Kabaddi men & women", "Tennikoit Selections", "West Godavari Table Tennis Association Tournament", "Volley Ball Selections", "INDEPENDENCE DAY", "DISTRICT LEVEL YOUTH FESTIVAL", "REPUBLIC DAY", "ANNUAL DAY", "CRR FEST 2", "W.G. Kabaddi Sr. Dist. Tournament", "APMSRV Cricket Tournament", "Circle Day Celebrations", "ABVP Yuvajana Vaarotswalu", "FOUNDER'S DAY", "CULTURAL COMPETITIONS", "District School Games", "AP State Tennis Ranking Circuits", "AP College Teachers Badminton Tournament", "AKNU Intercollegiate Games", "Eenadu Champion Cricket Cup", "Annual Sports Meet"];
  return <PageLayout title="Department of Physical Education" description="At SVRM College, we believe education goes beyond classrooms. The Department of Physical Education inspires students to stay fit, active, and energetic while learning teamwork and leadership through sports.">
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        {heroImages.length > 0 && (
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
            {heroImages.map((image, index) => <img key={index} src={image} alt={`Physical Education Department ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                
                
              </div>
            </div>
          </div>
        )}

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Department of Physical Education at SVRM College, Nagaram, plays a vital role in shaping well-rounded individuals by promoting fitness, discipline, teamwork, and leadership. With excellent facilities including a spacious playground, indoor stadium, and modern gym, the department encourages students to actively participate in sports and games at local, university, state, and national levels.
            </p>
            <p>
              Many students have brought laurels to the college and secured placements in the Army, Navy, Police, and other defense and service sectors through sports achievements. From local games to competitive tournaments, we empower rural youth to discover their talent, build confidence, and embrace a healthy lifestyle.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">1000+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">2</div>
                <div className="text-sm text-gray-600">Faculty & Coaches</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-6 w-6 text-blue-600" />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                "To promote physical fitness, sportsmanship, and holistic development among rural youth, nurturing them into confident, disciplined, and responsible citizens with opportunities to excel in academics, sports, and professional careers."
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-green-600" />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Encourage active participation in sports and fitness activities</li>
                <li>• Provide modern facilities and expert guidance for excellence</li>
                <li>• Instill values of discipline, teamwork, and leadership</li>
                <li>• Support career opportunities in defense and service sectors</li>
                <li>• Create a culture where health and fitness go hand in hand with academics</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Goals & Objectives */}
        <Card>
          <CardHeader>
            <CardTitle>Goals & Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Goals</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Ensure holistic development through physical fitness and sports</li>
                  <li>• Create a healthy, active, and disciplined campus environment</li>
                  <li>• Provide opportunities for rural youth to excel at all levels</li>
                  <li>• Guide students towards careers in Army, Navy, Police, and defense sectors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-600">Objectives</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Encourage daily physical activities for health and well-being</li>
                  <li>• Develop skills in traditional and modern sports</li>
                  <li>• Inculcate values of teamwork, leadership, and fair play</li>
                  <li>• Identify and nurture talented athletes for competitions</li>
                  <li>• Integrate physical education with academics for balanced growth</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Physical Facilities */}
        <Card>
          <CardHeader>
            <CardTitle>Physical Facilities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Playground Facilities</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Two Volleyball Courts</li>
                  <li>• Two Kabaddi Courts</li>
                  <li>• Two Ball-Badminton Courts</li>
                  <li>• One Kho-Kho Court</li>
                  <li>• 400m Track for Athletics</li>
                  <li>• Facilities for Discus, Javelin, Shotput, Hammer Throw</li>
                  <li>• High Jump, Long Jump, Pole Vault, and Hurdles</li>
                  <li>• Cricket Kit & Mat with practice area</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-600">Gym & Indoor Facilities</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Three Shuttle Badminton Courts (cement floor)</li>
                  <li>• Two Table Tennis Tables</li>
                  <li>• Four Carrom Boards (separate for boys & girls)</li>
                  <li>• Ten Chess Boards</li>
                  <li>• Fitness equipment for strength & conditioning</li>
                  <li>• Outdoor facilities like Parallel Bars & Horizontal Bars</li>
                  <li>• 100 bedded sports hostel (2300 sq.m. plinth area)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Student Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-college-blue" />
              Student Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            {achievementsLoading ? <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2"></div>
                <p className="text-gray-500">Loading achievements...</p>
              </div> : achievements.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map(achievement => <div key={achievement.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{achievement.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {achievement.file_type.toUpperCase()}
                      </Badge>
                    </div>
                    {achievement.description && <p className="text-xs text-gray-600 mb-2">{achievement.description}</p>}
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{achievement.academic_year || 'N/A'}</span>
                      <Button variant="outline" size="sm" onClick={() => window.open(achievement.file_url, '_blank')} className="h-6 px-2 text-xs">
                        <Download className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>)}
              </div> : <div className="text-center py-8">
                <Trophy className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No achievements uploaded yet.</p>
              </div>}
          </CardContent>
        </Card>

        {/* Legacy & Recognition */}
        <Card>
          <CardHeader>
            <CardTitle>Legacy & Recognition</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              SVRM College, Nagaram has a rich legacy in sports and athletics, consistently producing champions at college, university, state, and national levels. Our students have excelled in multiple disciplines, with professional coaching and access to modern facilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-blue-600">Staff Achievements</h4>
                <ul className="text-sm space-y-1">
                  <li>• Faculty actively participate in state-level staff tournaments</li>
                  <li>• Hosted A.P. College Teachers Badminton Tournament</li>
                  <li>• Multiple staff recognized for super veteran doubles championships</li>
                  <li>• Best player awards in various sports</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Recognition</h4>
                <ul className="text-sm space-y-1">
                  <li>• Consistent nurturing of sports talent through coaching</li>
                  <li>• Annual Sports Day celebrations</li>
                  <li>• Instilling discipline, teamwork, and leadership</li>
                  <li>• Role model in sports excellence alongside academics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Outreach Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Outreach Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Coaching & Training</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Kabaddi, Kho-Kho, Volleyball coaching camps</li>
                  <li>• Ball-Badminton, Athletics coaching for local students</li>
                  <li>• Women's sports camps for underrepresented sports</li>
                  <li>• Skill enhancement workshops during vacations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-green-600">Community Programs</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Inter-School & Inter-College tournaments</li>
                  <li>• Community fitness & awareness programs</li>
                  <li>• Talent identification & scholarship opportunities</li>
                  <li>• Collaboration with local sports associations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sports Events */}
        <Card>
          <CardHeader>
            <CardTitle>Sports Events & Competitions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {events.map((event, index) => <div key={index} className="p-3 bg-gray-50 rounded-lg text-sm">
                  {event}
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Physical Education" />

        {/* Department Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Department Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {departmentPhotos.map((photo, index) => <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img src={photo} alt={`Sports Activity ${index + 1}`} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
                </div>)}
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>;
};
export default PhysicalEducation;