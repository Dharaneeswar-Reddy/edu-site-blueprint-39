import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, Bug, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import { useDepartmentTimetables } from "@/hooks/useDepartmentTimetables";

const Zoology = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { timetables, loading: timetablesLoading } = useDepartmentTimetables("Zoology");

  const heroImages = [
    "/lovable-uploads/4696f63f-d3f7-49c7-bc36-69b667664c17.png",
    "/lovable-uploads/36a70005-7337-4469-bcac-8923147539a0.png",
    "/lovable-uploads/ea21ce61-dae4-45b3-84a8-b24f6a35f80c.png",
    "/lovable-uploads/3e27e075-1eb6-4981-8f3f-8ae9e9c1dcd1.png",
    "/lovable-uploads/851cdbe6-ca62-40de-8d16-1db2b9fd7486.png",
    "/lovable-uploads/96591788-c738-4e4a-8008-f2e91e49f1b4.png",
    "/lovable-uploads/d59244a4-0fb8-44f9-b86e-67a09338d232.png"
  ];

  const departmentPhotos = [
    "/lovable-uploads/4696f63f-d3f7-49c7-bc36-69b667664c17.png",
    "/lovable-uploads/36a70005-7337-4469-bcac-8923147539a0.png",
    "/lovable-uploads/ea21ce61-dae4-45b3-84a8-b24f6a35f80c.png",
    "/lovable-uploads/3e27e075-1eb6-4981-8f3f-8ae9e9c1dcd1.png",
    "/lovable-uploads/851cdbe6-ca62-40de-8d16-1db2b9fd7486.png",
    "/lovable-uploads/96591788-c738-4e4a-8008-f2e91e49f1b4.png",
    "/lovable-uploads/d59244a4-0fb8-44f9-b86e-67a09338d232.png"
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
      title="Department of Zoology" 
      description="Understanding animal life, behavior, and evolution through comprehensive zoological education and research."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Zoology Department ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Zoology Department</h1>
              <p className="text-xl md:text-2xl">Exploring Animal Life & Behavior</p>
            </div>
          </div>
        </div>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bug className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Zoology seeks to provide a comprehensive understanding of the animal kingdom to benefit science, conservation, and society.
            </p>
            <p>
              The Zoology department was established in the year 1970. We have B.sc, CBZ and CZA with Aqua culture program. The hall mark of the department is the Zoology Museum with rarest of the rare collections, and it is considered as the best museum among affiliated colleges of Acharya Nagarjuna University.
            </p>
            <p>
              Dr. T. Indira Krishna Rao, Sri G. Ramakrishna Babu, Sri K. Sitarama Raju, Sri P. Venkata Rao & Sri B. Venkata Rao developed the department to the present extent in all aspects. The department is now headed by Dr.K.Suresh babu with two staff members namely Smt.B.Anuradha and Sri.Ch.Sudheer.
            </p>
            <p>
              P. Rama Krishna (1995-1998), P. Koti Sankara Ramesh (2001-2004) and I.Bharghavi (2005- 2008) were awarded Prof. P.N.GANAPATHI MEMORIAL GOLD MEDAL IN ZOOLOGY for the highest marks in Acharya Nagarjuna University affiliated colleges. We conducted two UGC sponsored National seminars in the year of 2009 and 2015.
            </p>
            <p>
              The laboratory of the department is really unique. Its environment is superb. It has around 31Bio – visual charts. It has 26 compound microscopes and 23 dissection microscopes, 2 binocular dissection microscopes, 1 over head projector and 2 LCD projectors with E-class rooms.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">73</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">03</div>
                <div className="text-sm text-gray-600">Faculty Members</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seat Structure and Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Programs Offered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Undergraduate Programs</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>B.Sc. Zoology (Honours)</span>
                    <Badge variant="secondary">30 Seats</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.Sc. Aqua culture (Honours)</span>
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
            <CardTitle>Program Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">B.Sc. Zoology (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Animal Diversity-I Biology of Non-Chordates</li>
                      <li>• Animal Diversity-I Biology of Non Chordates Practical Course</li>
                      <li>• Cell and Molecular Biology</li>
                      <li>• Cell and Molecular Biology Practical Course</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Animal Diversity-II Biology of Chordates</li>
                      <li>• Animal Diversity-II Biology of Chordates Practical Course</li>
                      <li>• Principles of Genetics</li>
                      <li>• Principles of Genetics Practical Course</li>
                      <li>• Animal Biotechnology</li>
                      <li>• Animal Biotechnology Practical Course</li>
                      <li>• Evolution and Zoogeography</li>
                      <li>• Evolution and Zoogeography Practical Course</li>
                      <li>• Embryology</li>
                      <li>• Embryology Practical Course</li>
                      <li>• Animal Physiology: Life Sustaining Systems</li>
                      <li>• Animal Physiology: Life Sustaining Systems Practical Course</li>
                      <li>• Immunology</li>
                      <li>• Immunology Practical Course</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Poultry Management-I (Poultry Farming)</li>
                      <li>• Poultry Management-I (Poultry Farming) Practical Course</li>
                      <li>• Poultry Management-II (Poultry Production and Management)</li>
                      <li>• Poultry Management-II (Poultry Production and Management) Practical Course</li>
                      <li>• Sustainable Aquaculture Management</li>
                      <li>• Sustainable Aquaculture Management Practical Course</li>
                      <li><strong>OR</strong></li>
                      <li>• Live Stock Management-1 (Biology of Dairy Animals)</li>
                      <li>• Live Stock Management-1 (Biology of Dairy Animals) Practical Course</li>
                      <li>• Post-Harvest Technology of Fish and Fisheries</li>
                      <li>• Post-Harvest Technology of Fish and Fisheries Practical Course</li>
                      <li>• Internship</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">B.Sc. Aqua culture (3 Years)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-blue-600 mb-2">Year 1</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Introduction to Classical Biology</li>
                      <li>• Introduction to Applied Biology</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">Year 2</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Taxonomy and Functional Anatomy of Fin Fish and Shellfish (T)</li>
                      <li>• Taxonomy and Functional Anatomy of Fin Fish and Shellfish (P)</li>
                      <li>• Biology of fin fish & shell fish (T)</li>
                      <li>• Biology of fin fish & shell fish (P)</li>
                      <li>• Basic Principles of Aquaculture (T)</li>
                      <li>• Basic Principles of Aquaculture (P)</li>
                      <li>• Capture Fisheries (T)</li>
                      <li>• Capture Fisheries (P)</li>
                      <li>• Fresh water Aquaculture (T)</li>
                      <li>• Fresh water Aquaculture (P)</li>
                      <li>• Brackish water Aquaculture (T)</li>
                      <li>• Brackish water Aquaculture (P)</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-purple-600 mb-2">Year 3</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Fish Health management (T)</li>
                      <li>• Fish Health management (P)</li>
                      <li>• Shrimp Health Management (T)</li>
                      <li>• Shrimp Health Management (P)</li>
                      <li>• Fish nutrition & Feed technology (T)</li>
                      <li>• Fish nutrition & Feed technology (P)</li>
                      <li>• Extension, Economics & Marketing (T)</li>
                      <li>• Extension, Economics & Marketing (P)</li>
                      <li>• Ornamental Fishery (T)</li>
                      <li>• Ornamental Fishery (P)</li>
                      <li>• Fishery Engineering (T)</li>
                      <li>• Fishery Engineering (P)</li>
                      <li>• Fish Processing Technology (T)</li>
                      <li>• Fish Processing Technology (P)</li>
                      <li>• Internship</li>
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
              <CardTitle>Zoology Course Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Understand the diversity, structure, and classification of animals across phyla</li>
                <li>• Gain knowledge of cell biology, genetics, and evolutionary principles</li>
                <li>• Learn animal physiology, development, and ecological interactions</li>
                <li>• Acquire practical skills in lab techniques, dissection, and fieldwork</li>
                <li>• Develop scientific reasoning, research aptitude, and ethical awareness</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Zoology Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Acquire comprehensive knowledge of animal biology, biodiversity, and life processes</li>
                <li>• Develop analytical and problem-solving skills in biological sciences</li>
                <li>• Apply laboratory and field techniques in zoological research and studies</li>
                <li>• Understand environmental and ethical responsibilities in wildlife conservation</li>
                <li>• Prepare for careers in education, research, healthcare, or environmental sectors</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Aquaculture Course Outcomes & Program Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Aquaculture Course Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Understand the basics of aquaculture systems, species, and farming techniques</li>
                <li>• Learn about water quality management and aquatic animal health</li>
                <li>• Gain knowledge of fish breeding, nutrition, and hatchery practices</li>
                <li>• Apply skills in pond management, disease control, and sustainable aquaculture</li>
                <li>• Prepare for careers in fish farming, fisheries, and aquatic resource management</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aquaculture Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Gain comprehensive knowledge of aquaculture practices and aquatic organism biology</li>
                <li>• Develop skills in sustainable fish farming, water management, and disease control</li>
                <li>• Apply scientific techniques in breeding, nutrition, and aquaculture system design</li>
                <li>• Understand environmental, economic, and ethical aspects of aquaculture</li>
                <li>• Prepare for professional roles in aquaculture industries, research, and resource management</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Zoology" />

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
                    alt={`Zoology Lab ${index + 1}`}
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
            {timetablesLoading ? (
              <div className="text-center py-8">
                <div className="animate-pulse text-muted-foreground">Loading timetables...</div>
              </div>
            ) : timetables.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {timetables.map((timetable) => (
                  <div key={timetable.id} className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">{timetable.title}</h4>
                    {timetable.description && (
                      <p className="text-sm text-muted-foreground mb-3">{timetable.description}</p>
                    )}
                    {timetable.academic_year && (
                      <p className="text-xs text-muted-foreground mb-2">Academic Year: {timetable.academic_year}</p>
                    )}
                    {timetable.semester && (
                      <p className="text-xs text-muted-foreground mb-3">Semester: {timetable.semester}</p>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(timetable.file_url, '_blank')}
                      className="w-full"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      View Schedule
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No timetables available at the moment. Please check back later.
              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default Zoology;