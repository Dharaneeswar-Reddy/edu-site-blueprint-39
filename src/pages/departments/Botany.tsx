import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, BookOpen, Award, Leaf, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";
import DepartmentStaff from "@/components/DepartmentStaff";
import { useDepartmentTimetables } from "@/hooks/useDepartmentTimetables";
import botanyHeroImage from "@/assets/botany-hero.png";
const Botany = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {
    timetables,
    loading,
    error
  } = useDepartmentTimetables("Botany");
  const heroImages = [botanyHeroImage];
  const departmentPhotos = ["/lovable-uploads/7ecf4141-f3db-4a34-b9c2-4a0c5af6c711.png", "/lovable-uploads/09edbd5d-984f-41ea-9176-ae2cb550d878.png", "/lovable-uploads/888ae344-c040-4057-9423-38e1e4328152.png", "/lovable-uploads/208097d5-1a3d-4850-b72e-7a0e44ded787.png", "/lovable-uploads/6119578b-9c06-42e6-b80d-fd03c8c0fffc.png", "/lovable-uploads/ffb3cc7c-1414-44ed-89b7-a6160bf7578f.png", "/lovable-uploads/e6b48831-58cc-474a-81fe-fa4e53081732.png", "/lovable-uploads/31b6ffc3-d5b7-441c-bbdd-294127563557.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return <PageLayout title="Department of Botany" description="Exploring plant life, biodiversity, and ecological relationships through comprehensive botanical education and research.">
      <div className="space-y-8">
        
        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          <img 
            src={botanyHeroImage} 
            alt="Department of Botany - Jagadish Chandra Bose Quote" 
            className="w-full h-full object-cover" 
            style={{ objectPosition: 'center 35%' }}
          />
        </div>

        {/* Seat Structure and Programs */}
        <Card>
          <CardHeader>
            <CardTitle>Seat Structure & Programs Offered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">B.Sc. Botany Minor (Regular) – 30 (Zoology Major)</h4>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                    <span>B.Sc. Botany Minor (Regular)</span>
                    <Badge variant="secondary">30 Seats</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">B.Sc. Botany Minor (Honours) – 30 (Aqua Major)</h4>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                    <span>B.Sc. Botany Minor (Honours)</span>
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
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Semester</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Course No.</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Course Title</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Hours/Week</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={2} className="border border-gray-300 px-4 py-2 font-medium">II</td>
                    <td rowSpan={2} className="border border-gray-300 px-4 py-2">III</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2">Non-vascular Plants</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Non-vascular Plants – Practical</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className="border border-gray-300 px-4 py-2"></td>
                    <td rowSpan={2} className="border border-gray-300 px-4 py-2">IV</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">Vascular Plants</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Vascular Plants – Practical</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td rowSpan={4} className="border border-gray-300 px-4 py-2 font-medium">III</td>
                    <td rowSpan={4} className="border border-gray-300 px-4 py-2">V</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">Anatomy and Embryology of Angiosperms</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Anatomy and Embryology of Angiosperms – Practical</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">4</td>
                    <td className="border border-gray-300 px-4 py-2">Plant Ecology, Biodiversity and Phytogeography</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Plant Ecology, Biodiversity and Phytogeography – Practical</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td rowSpan={4} className="border border-gray-300 px-4 py-2"></td>
                    <td rowSpan={4} className="border border-gray-300 px-4 py-2">VI</td>
                    <td className="border border-gray-300 px-4 py-2">5</td>
                    <td className="border border-gray-300 px-4 py-2">Cell Biology and Genetics</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Cell Biology and Genetics – Practical</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">6</td>
                    <td className="border border-gray-300 px-4 py-2">Plant Physiology and Metabolism</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"></td>
                    <td className="border border-gray-300 px-4 py-2">Plant Physiology and Metabolism – Practical</td>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-college-blue" />
              Department Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Department Information</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Users className="h-6 w-6 text-college-blue mx-auto mb-1" />
                    <div className="text-lg font-bold text-college-blue">50</div>
                    <div className="text-xs text-gray-600">Students</div>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Award className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-green-600">01</div>
                    <div className="text-xs text-gray-600">Faculty Member</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Department of Botany</h4>
                <p className="text-sm text-gray-700">
                  The Department of Botany studies the world of plants and their importance in our daily 
                  lives. Students learn about plant structure, growth, functions, and their role in the 
                  environment. The department also teaches how plants help in agriculture, medicine, 
                  industry, and biodiversity conservation.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3 text-green-600">History of Botany Department</h4>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><strong>Year of establishment:</strong> 1970</p>
                      <p><strong>Courses offered:</strong> B.Sc. (B.Z.C)</p>
                      <p><strong>Intermediate:</strong> Bi.P.C Group</p>
                      <p><strong>Admission:</strong> Through merit</p>
                    </div>
                    <div>
                      <p><strong>Affiliated to:</strong></p>
                      <p>• B.Sc. course - ANU</p>
                      <p>• BiP.C - Board of intermediate Education A.P</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-purple-600">Heads of the Department</h4>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <p>1. Sri. C. Suryanarayana raju (1970 – 2001)</p>
                    <p>2. K.Sambasivarao (2001 – 2004)</p>
                    <p>3. Sri. J.Mohanarao (2004 – 2010)</p>
                    <p>4. Sri. P. Venkateswararao (2010 – 2010)</p>
                    <p>5. Smt. T.Madhaviglory (2011 – 2018)</p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-purple-200">
                    <p className="font-medium"><strong>Present faculty:</strong> Sri. P.Venkatanarayana (HOD) 2019 – onwards</p>
                    <p className="font-medium"><strong>Supporting staff:</strong> M. Siva Sankar Rao</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vision and Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                "Thamasoma Jyothirgamaya" – From Darkness to Light. Our vision is to dispel ignorance by 
                imparting true education that is rooted in principles, truth, love, and values of faith. 
                We aim to nurture young minds into enlightened individuals who contribute positively to 
                society and the environment.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li>• To prepare academically strong, ecologically responsible, aesthetically sensitive, and well-disciplined graduates in the field of plant sciences.</li>
                <li>• To foster scientific temper, environmental awareness, and ethical values among students.</li>
                <li>• To encourage research, innovation, and community engagement for sustainable development.</li>
                <li>• To inspire students to actively participate in nation-building and contribute to the well-being of society.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Objectives and Goals */}
        <Card>
          <CardHeader>
            <CardTitle>Objectives and Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• To impart the scientific, moral education and to inculcate competitive, humanitarian values among the students.</li>
              <li>• The aim of the department is to ensure that you can achieve an up-to-date level of understanding of plant science.</li>
              <li>• To prepare students for success in profession or career.</li>
              <li>• To assist farmers of neighboring villages in good harvesting.</li>
              <li>• To recommend suitable crops for the region.</li>
            </ul>
          </CardContent>
        </Card>

        {/* SVRMC Botanical Garden */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              SVRMC Botanical Garden
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              The Botanical Garden at SVRMC is an important resource for both education and conservation. 
              It serves as a living laboratory where students, researchers, and visitors can explore the 
              rich diversity of plant life.
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <img src="/lovable-uploads/31b6ffc3-d5b7-441c-bbdd-294127563557.png" alt="SVRMC Botanical Garden" className="w-full h-48 object-cover rounded-lg mb-4" />
              <p className="text-sm">
                Our garden provides students with hands-on learning opportunities in plant taxonomy, 
                ecology, physiology, and environmental studies. Well-maintained pathways, labeled plant 
                collections, and seasonal flowering plants make the garden not only a center for learning 
                but also a peaceful green space that enhances the campus environment.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Future Plans */}
        <Card>
          <CardHeader>
            <CardTitle>Future Plans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                <li>• To increase the rare collection of the Herbarium</li>
                <li>• To develop the Botanical Garden with rare collections</li>
                <li>• Collection of specific plants which are useful to control the pollution and maintained Eco-friendly Environment</li>
                <li>• To conduct demonstration camp cum exhibition on medicinal plants and medicinal plant products</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>• To organize workshops, health talks, displaying banners on the nutritional values of millets in view of "INTERNATIONAL YEAR OF MILLETS 2023"</li>
                <li>• To assist farmers of neighboring villages in good harvesting</li>
                <li>• To recommend suitable crops for the region</li>
              </ul>
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
                <li>• Understand plant structure and function</li>
                <li>• Master taxonomic classification systems</li>
                <li>• Develop field identification skills</li>
                <li>• Apply biotechnology techniques</li>
                <li>• Analyze ecological relationships</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program Outcomes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Environmental conservation awareness</li>
                <li>• Research and analytical skills</li>
                <li>• Laboratory techniques proficiency</li>
                <li>• Scientific communication abilities</li>
                <li>• Career readiness in botanical sciences</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Department Staff */}
        <DepartmentStaff departmentName="Botany" />

        {/* Department Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Department Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentPhotos.map((photo, index) => <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img src={photo} alt={`Botany Lab ${index + 1}`} className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
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
export default Botany;