import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, BookOpen, Award, Download, Languages, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import { useDepartmentTimetables } from "@/hooks/useDepartmentTimetables";

const Telugu = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { timetables, loading, error } = useDepartmentTimetables("Telugu");

  const heroImages = [
    "/lovable-uploads/17bb2e0f-adc8-46fd-b6dc-aa370c366ef2.png",
    "/lovable-uploads/2132c67c-81c1-4c7b-a949-3054c289f2ce.png",
    "/lovable-uploads/3135e1f8-603d-4960-af26-bdc4f401f693.png",
    "/lovable-uploads/33bce374-c279-4e5c-afa1-9a764d7977c4.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/365bcf12-2218-4dd4-a6e7-6d4bc591739a.png",
    "/lovable-uploads/43b08f5f-94a1-4efc-a4bc-d959843cb7ea.png",
    "/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png",
    "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png",
    "/lovable-uploads/2971f306-36b5-4c33-9f8f-d999bf1c534f.png",
    "/lovable-uploads/666e3831-e7cd-4798-a8e2-25dd407509c3.png",
    "/lovable-uploads/55f5dacf-2144-4398-a16a-df5f1fb7ab4a.png"
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
      title="తెలుగు విభాగం - Department of Telugu" 
      description="తెలుగు భాష, సాహిత్యం మరియు సంస్కృతిని పరిరక్షిస్తూ, అభివృద్ధి చేస్తూ విద్యా వ్యవస్థను మెరుగుపరచుట."
    >
      <div className="space-y-8">
        
        {/* Hero Section with Department Logo */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Telugu Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Department Logo Overlay - Fixed Position */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
            <img
              src="/lovable-uploads/ff2af4bc-63bb-4c0c-b1fb-463a18d2e5e5.png"
              alt="Telugu Department Logo"
              className="h-24 md:h-32 w-auto object-contain bg-white/90 p-2 rounded-lg shadow-lg"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white mt-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">తెలుగు విభాగం</h1>
              <p className="text-xl md:text-2xl">సాహిత్య సంస్కృతి పరిరక్షణ</p>
            </div>
          </div>
        </div>

        {/* Programs Offered */}
        <Card>
          <CardHeader>
            <CardTitle>Programs Offered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-lg mb-2 text-blue-800">Telugu Literature Program</h4>
              <p className="text-gray-700 mb-3">B.A. B.Com. B.Sc. BCA. Telugu Literature (1 Year)</p>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Duration: 1 Year
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  All Streams Available
                </span>
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
            <div className="p-4 border rounded-lg bg-green-50">
              <h5 className="font-medium text-green-700 mb-3">Year 1 Curriculum</h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Introduction to Literature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Poetry & Prose</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Department Overview - Enhanced with Complete Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Establishment & Basic Info */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-lg mb-4 text-college-blue">శ్రీ వెలగపూడి రామకృష్ణ స్మారక కళాశాల, నగరం</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  <span className="font-medium">Established:</span>
                  <span className="text-orange-700 font-bold">August 21, 1969</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  <span className="font-medium">Current Strength:</span>
                  <span className="text-orange-700 font-bold">136 Students, 1 Faculty</span>
                </div>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm">
                ఏస్.వి.ఆర్ ఏమ్ కాలేజీలో తెలుగు విభాగం ఆగస్టు 21, 1969 న ప్రారంభించబడింది. ఈ విభాగం ఉద్దేశ్యం తెలుగు భాషా సాహిత్యాన్ని సంరక్షించడం మరియు అభివృద్ధి చేయడమే. విభాగం స్థాపన నుండి, విద్యార్థుల్లో తల్లి భాషపై గౌరవం మరియు అభిమానాన్ని పెంపొందించడానికి కృషి చేస్తోంది.
              </p>
              <p className="text-gray-800 leading-relaxed text-sm mt-3">
                ఇక్కడ తెలుగు ను ప్రధాన మరియు ద్వితీయ భాషలుగా అండర్ గ్రాడ్యుయేట్ ప్రోగ్రామ్స్‌లో బోధించబడుతోంది. పాఠశాల అధ్యయనంలో పక్కన విద్యార్థుల పఠన, రచన, మరియు భావ వ్యక్తీకరణ నైపుణ్యాలను అభివృద్ధి చేయడంపై దృష్టి సాధిస్తోంది.
              </p>
              <p className="text-gray-800 leading-relaxed text-sm mt-3">
                విభాగం తరచుగా కవితా పోటీలు, వ్యాస రచనలు, పద్య పఠనం, సాహిత్య సదస్సులు వంటి సాహిత్య మరియు సాంస్కృతిక కార్యక్రమాలను నిర్వహిస్తోంది, తద్వారా విద్యార్థులు తెలుగు సాహిత్య పరంపరతో సమీపంగా మమేకమవుతారు.
              </p>
              <p className="text-gray-800 leading-relaxed text-sm mt-3">
                అనుభవజ్ఞులైన, శ్రద్ధ కలిగిన అధ్యాపక బృందంతో ఈ విభాగం విద్యార్థులకు అనుకూలమైన, ఉత్తేజకరమైన విద్యా వాతావరణాన్ని కల్పిస్తూ వారికి భాషా, మేధస్సు మరియు సాంస్కృతిక అభివృద్ధికి దోహదం చేస్తోంది.
              </p>
            </div>

            {/* Academic Focus */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-700 mb-3">Academic Focus</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Classical and Modern Telugu Literature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Telugu Grammar and Linguistics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Translation Studies and Creative Writing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Comparative Literature and Cultural Studies</span>
                </li>
              </ul>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg border">
                <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">136</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg border">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">1</div>
                <div className="text-sm text-gray-600">Faculty Member</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg border">
                <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">1969</div>
                <div className="text-sm text-gray-600">Established</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg border">
                <Languages className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">55+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• To make the students as good translators and good speakers of Telugu</li>
                <li>• To make the students good professionals in media and Journalism</li>
                <li>• To make proactive responsible women</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-700">Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• To Improve the social awareness through the activities like essay writing, elocution, quiz etc conducted by Literary club</li>
                <li>• To promote the values in the field of Literary, Culture, Education, Social and Community through Telugu language</li>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-700 mb-2">Education</h5>
                <p className="text-sm text-gray-700">Providing higher quality education in TELUGU Language.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-700 mb-2">Communication</h5>
                <p className="text-sm text-gray-700">To develop TELUGU speaking ability in students by the end of undergraduate programme</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-700 mb-2">Employment</h5>
                <p className="text-sm text-gray-700">Providing better employment opportunities for backward and rural youth.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-700 mb-2">Culture</h5>
                <p className="text-sm text-gray-700">To make students free from rituals so as to develop love to Indian culture and heritage, through TELUGU Literature.</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-700 mb-2">Higher Education</h5>
                <p className="text-sm text-gray-700">Brightening the future with wider educational opportunities.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Semester Syllabus */}
        <Card>
          <CardHeader>
            <CardTitle>Semester Syllabus</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Semester 1 */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-700 mb-3">Semester 1: సాహిత్య సౌరభం</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <h5 className="font-medium text-blue-600">యూనిట్ 1 (ప్రాచీన కవిత్వం)</h5>
                    <ul className="ml-4 text-xs text-gray-700 space-y-1">
                      <li>• రాజనీతి - నన్నయ్య - ఆంధ్ర మహాభారతం</li>
                      <li>• నన్నయ్య కవి పరిచయం</li>
                      <li>• ప్రజాపాలన నాడు, నేడు</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-600">యూనిట్ 2 (ఆధునిక కవిత్వం)</h5>
                    <ul className="ml-4 text-xs text-gray-700 space-y-1">
                      <li>• గబ్బిలం - జాషువా పదమ భాగం</li>
                      <li>• గుర్రం జాషువా కవి పరిచయం</li>
                      <li>• కావ్య రచనా నేపథ్యం</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-600">యూనిట్ 3 (కథానిక)</h5>
                    <ul className="ml-4 text-xs text-gray-700 space-y-1">
                      <li>• అలరాస పుట్టిళ్ళు - కళ్యాణ సుందరీ</li>
                      <li>• రచయిత పరిచయం మరియు పాత్ర చిత్రణ</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-600">యూనిట్ 4 (నవల)</h5>
                    <ul className="ml-4 text-xs text-gray-700 space-y-1">
                      <li>• అసమర్ధుని జీవయాత్ర - గోపీచంద్</li>
                      <li>• నవల నేపథ్యం మరియు సందేశం</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-600">యూనిట్ 5 (జీవిత చరిత్ర)</h5>
                    <ul className="ml-4 text-xs text-gray-700 space-y-1">
                      <li>• మూడు వాఙ్మయ శిఖరాలు - తిరుమల రామచంద్ర</li>
                      <li>• వేటూరి ప్రభాకర శాస్త్రి</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Semester 2 */}
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-700 mb-3">Semester 2: ప్రాచీన ఆధునిక తెలుగు కవిత్వం</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <h5 className="font-medium text-green-600">యూనిట్ 1 - వ్యక్తీకరణ నైపుణ్యాలు</h5>
                    <ul className="ml-4 text-xs text-gray-700 space-y-1">
                      <li>• భాష - నిర్వచనాలు, లక్షణాలు</li>
                      <li>• భాష - ఆవశ్యకత, ప్రయోజనాలు</li>
                      <li>• వర్ణం - పదం - వాక్యం</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-600">యూనిట్ 2 - అనువాద రచన</h5>
                    <ul className="ml-4 text-xs text-gray-700 space-y-1">
                      <li>• అనువాదం - నిర్వచనాలు, ఆవశ్యకత</li>
                      <li>• అనువాద పద్ధతులు మరియు సమస్యలు</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-600">యూనిట్ 3 - మాధ్యమాలకు రచన</h5>
                    <ul className="ml-4 text-xs text-gray-700 space-y-1">
                      <li>• పత్రికా రచన - వార్తారచన, సంపాదకీయం</li>
                      <li>• శ్రవణ మాధ్యమం - రేడియో రచన</li>
                      <li>• దృశ్య మాధ్యమం - టెలివిజన్ రచన</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-600">యూనిట్ 4 - తెలుగు వ్యాసరచన</h5>
                    <ul className="ml-4 text-xs text-gray-700 space-y-1">
                      <li>• తెలుగు వ్యాసం - నిర్వచనాలు</li>
                      <li>• సాక్షి వ్యాసం - స్వభాష</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-600">యూనిట్ 5 - తెలుగు సాంకేతికత</h5>
                    <ul className="ml-4 text-xs text-gray-700 space-y-1">
                      <li>• తెలుగు లిపి పరిచయం - యూనికోడ్</li>
                      <li>• తెలుగు వికీపీడియ</li>
                      <li>• సామాజిక మాధ్యమాల్లో తెలుగు</li>
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
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>తెలుగు సాహిత్యం యొక్క ప్రాచీనతను, విశిష్టతను గుర్తించడం - ఆదికవి నన్నయ కాలంనాటి భాష, సంస్కృతులను పరిచయం చేయడం</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>జాషువా కాలంనాటి మత పరిస్థితులు, గబ్బిలం కావ్య విశేషాలు తెలియజేయడం ద్వారా సమాజం పట్ల అవగాహన పెంపొందింపజేయడం</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>సంపన్న కుటుంబాలలోని పరిస్థితులు, ప్రేమ, పరువు వంటివి మనిషిని ఎలా నడిపిస్తాయో అవగాహన కల్పించడం</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>జమీందారీ వ్యవస్థ మరియు మన సమాజంలో పెట్టుబడిదారీ చీజాలను అర్థం చేసుకోవడం</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">5.</span>
                  <span>జీవిత చరిత్ర ప్రక్రియను దాని విశిష్టతను పరిచయం చేయడం</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">6.</span>
                  <span>ప్రాచీన కావ్య భాషలోని వ్యాకరణాంశాలను అధ్యయనం చేయడం మరియు భాషా సామర్థ్యాన్ని పెంపొందింపజేయడం</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">1.</span>
                  <span>Expertise in the basic knowledge in Telugu language and literature and to provide proficiency to the other subject students to go for Higher Education and also employment opportunities in research.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">2.</span>
                  <span>Developing Intellectual, personal and professional abilities through effective communicative Telugu.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">3.</span>
                  <span>Telugu is the language of arts, science and commerce. Telugu increases student's chances of getting a good job in future.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">4.</span>
                  <span>Students can gain knowledge to make themselves to fit for competitive exams.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">5.</span>
                  <span>By having good communicational skills and command over language, one can become a good speaker.</span>
                </li>
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
              {/* Activity 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-blue-700 mb-3">Activity 1: Essay Writing Competition</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Date:</strong> 30/09/2024</p>
                    <p><strong>Topic:</strong> Things I Value Most</p>
                    <p><strong>Conducted by:</strong> Kumari K. Surekha</p>
                    <p><strong>Participants:</strong> 30 Students</p>
                    <p><strong>Collaboration:</strong> Sri Satya Sai Siva Samithi</p>
                    <p><strong>Chairperson:</strong> Dr. A. Hari Krishna (Principal)</p>
                    <p className="mt-3 text-gray-600">
                      An essay writing competition was conducted by department of Telugu in collaboration with Sri Satya Sai Sammathi. 
                      Students improved their skills on essay writing. Prizes (1st & 2nd) were distributed by Sri Satya Sai Seva Samithi.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="/lovable-uploads/2971f306-36b5-4c33-9f8f-d999bf1c534f.png"
                    alt="Essay Writing Competition"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Activity 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-green-700 mb-3">Activity 2: International Mother Language Day</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Date:</strong> 21/02/2025</p>
                    <p><strong>Conducted by:</strong> Kumari K. Surekha</p>
                    <p><strong>Participants:</strong> 30 Students</p>
                    <p><strong>Chairperson:</strong> Dr. A. Hari Krishna (Principal)</p>
                    <p><strong>Members:</strong> Smt V.V. Jaya Lakshmi (Hindi), Mr Gopi, Smt P.B.V.Rani (English)</p>
                    <p className="mt-3 text-gray-600">
                      "International Mother Language Day" program was conducted by department of Telugu in collaboration with college. 
                      Students learned about the importance of mother language and improved their language skills.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="/lovable-uploads/666e3831-e7cd-4798-a8e2-25dd407509c3.png"
                    alt="International Mother Language Day"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Activity 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-purple-700 mb-3">Activity 3: Swarna Andhra @2047 Essay Competition</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Date:</strong> 01/10/2024</p>
                    <p><strong>Conducted by:</strong> Kumari K. Surekha</p>
                    <p><strong>Participants:</strong> 60 Students</p>
                    <p><strong>Chairperson:</strong> Dr. A. Hari Krishna (Principal), V.V. Rao (AD)</p>
                    <p><strong>Members:</strong> Smt V.V. Jaya Lakshmi (Hindi), Smt P.B.V.Rani (English)</p>
                    <p className="mt-3 text-gray-600">
                      "Swarna Andhra @2047" essay writing competition was conducted as a Government Program. 
                      Many students participated and improved their imagination skills about how Andhra is going to be in the upcoming future.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="/lovable-uploads/55f5dacf-2144-4398-a16a-df5f1fb7ab4a.png"
                    alt="Swarna Andhra @2047 Essay Competition"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Telugu" />

        {/* Department Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Department Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentPhotos.map((photo, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={photo} 
                    alt={`Telugu Department ${index + 1}`}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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

export default Telugu;