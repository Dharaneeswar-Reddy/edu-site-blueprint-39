import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Award, Users, Eye, Heart, Trophy, FileCheck, Shield, Globe, Building, BookOpen, FlaskConical, Computer, GraduationCap, ChevronRight } from "lucide-react";

const AboutUs = () => {
  const [expandedBuilding, setExpandedBuilding] = useState<string | null>(null);


  const toggleExpansion = (buildingId: string) => {
    setExpandedBuilding(expandedBuilding === buildingId ? null : buildingId);
  };

  const principals = [
    { sno: 1, name: "Sri K.Umavara Murthy", period: "1969-77,1978-83" },
    { sno: 2, name: "Sri N.V.S.Srinivasa Rao", period: "1977-78" },
    { sno: 3, name: "Sri N.Kotewara Rao", period: "1983-93" },
    { sno: 4, name: "Sri K.Ravi Babu", period: "1993-98" },
    { sno: 5, name: "Dr M.V.Subba Rao", period: "1998-2000" },
    { sno: 6, name: "Sri C.Surya Narayana Raju", period: "2000-01" },
    { sno: 7, name: "Sri A.V.Raghava Rao", period: "2001-03" },
    { sno: 8, name: "Sri B.Srinivasa Rao (FAC)", period: "2003-04" },
    { sno: 9, name: "Sri K.Samba Siva Rao(FAC)", period: "2004-05" },
    { sno: 10, name: "Dr V.K.Mohan", period: "2005-06" },
    { sno: 11, name: "Sri J.Mohan Rao (FAC)", period: "2006-07" },
    { sno: 12, name: "Sri P.Gopi Chandra Swamy", period: "2007-2008" },
    { sno: 13, name: "Dr K.Surendra Babu", period: "2008-09" },
    { sno: 14, name: "Sri G.S.B.Prabhakara Rao", period: "2009-10" },
    { sno: 15, name: "Sri B.Ratna raju", period: "2010-2016" },
    { sno: 16, name: "Sri M.Sudhakara Rao (FAC)", period: "2016-2018" },
    { sno: 17, name: "Sri Goli Srinivasa Rao", period: "2018-2020" },
    { sno: 18, name: "Dr G.Hanumantha Rao", period: "May 2020-03-01-2023" },
    { sno: 19, name: "Dr A.Hari Krishna (FAC)", period: "04-01-2023--Present" }
  ];

  const bestTeachers = [
    {
      year: "1982",
      name: "Sri. K. Umavara Murthy, M.A - Principal",
      achievement: "Best Teacher Award"
    },
    {
      year: "2005", 
      name: "Dr. V. K. Mohan, M.A, Ph.D - Principal",
      achievement: "Best Teacher Award"
    }
  ];

  const collegeAwards = [
    {
      title: "Africa Education Leadership 2016 Innovative Leader Award",
      recipient: "Dr SRK Prasad, VICE-PRESIDENT",
      description: "Received Innovative Leader Award in Africa Education Leadership Awards Function held on 7th December, 2016 at Mauritius."
    },
    {
      title: "BIZZ 2015 International Award",
      description: "International Award BIZZ-2015 from WORLDCOB"
    },
    {
      title: "Best Laboratory",
      description: "Best Laboratory 1st Prize in Affiliated Colleges From Acharya Nagarjuna University,Guntur"
    },
    {
      title: "Best Library",
      description: "Best Library 2nd Prize in Affiliated Colleges From Acharya Nagarjuna University,Guntur."
    },
    {
      title: "Best Eco-friendly Campus",
      description: "Best Eco-friendly Campus 1st Prize in Affiliated Colleges From Acharya Nagarjuna University,Guntur."
    }
  ];

  const coreValues = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Integrity",
      description: "Upholding honesty, ethical principles, and transparency in all academic and personal endeavors."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Excellence", 
      description: "Striving for the highest standards in education, research, and holistic development."
    },
    {
      icon: <Globe className="h-6 w-6 text-green-500" />,
      title: "Innovation",
      description: "Encouraging creativity, critical thinking, and problem-solving to meet evolving challenges."
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      title: "Inclusivity",
      description: "Providing equitable opportunities and fostering a supportive, diverse, and empowering environment for all students."
    }
  ];

  return (
    <PageLayout
      title="About Us"
      description="Discover SVRM College's rich legacy, vision, and commitment to excellence in education, discipline, and holistic development."
    >
      <div className="space-y-12">
        {/* College Profile */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-6">
            <Award className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">College Profile</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                College Profile – SVRM College, Nagaram
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Shri Velagapudi Ramakrishna Memorial College (SVRMC) stands as a beacon of quality education in Andhra Pradesh, carrying forward a legacy of over five decades in nurturing young minds. Established with the noble vision of providing accessible and excellent higher education in a rural setting, the college is sponsored by the Repalle Taluk Educational Improvement (R.T.E.I.) Society and functions as a Private Aided College affiliated with Acharya Nagarjuna University.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                SVRM College has grown into a distinguished rural autonomous institution, committed to academic excellence, research innovation, and holistic student development. Guided by its motto "A Sound Mind in a Sound Body", the college blends learning, discipline, and character-building with a focus on cultural, physical, and social growth. The foundation stone was laid by the President of India, Sri V.V. Giri, a testimony to its national importance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Set amidst a 30-acre eco-friendly, clean and green campus, the college offers state-of-the-art infrastructure, including well-equipped laboratories, spacious classrooms, a magnificent library with an archaeological museum, separate hostels for boys and girls, and extensive sports facilities. Though located in a rural backdrop, SVRM College provides urban-level facilities while retaining the serenity and beauty of its gardens, trees, and natural surroundings.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                The college offers a wide range of undergraduate and postgraduate programs across arts, science, commerce, and professional streams. With a dedicated faculty, modern teaching methods, research opportunities, and vibrant extracurricular activities, SVRM ensures the all-round development of every student.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Beyond academics, the institution actively promotes NCC, NSS, community engagement, disaster preparedness, sports, and cultural activities, instilling values of leadership, teamwork, patriotism, and social responsibility.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, SVRM College stands as a preferred destination for higher education in the region, empowering rural youth to compete globally while remaining deeply rooted in values of service, discipline, and excellence.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">55+</div>
                    <div className="text-sm text-gray-600">Years of Experience</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">1000+</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">15+</div>
                    <div className="text-sm text-gray-600">Departments</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>


        {/* Vision and Mission */}
        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-blue-500" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be a beacon of higher education in rural Andhra Pradesh, expelling the darkness of ignorance from the minds of young men and women by providing real education on the basis of divine principles — Truth, Love, and God (Tamaso mā jyotirgamaya). We strive to empower students with knowledge, skills, and values that foster innovation, inclusivity, and social responsibility, while nurturing their potential to excel in a rapidly changing world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-green-500" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed">
                    • To provide accessible, affordable, and quality higher education to rural youth, guided by the ideals of Truth, Love, and God.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    • To expel ignorance and enlighten minds through holistic education that integrates academic excellence with moral and spiritual values.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    • To cultivate ethical leadership, social commitment, and community responsibility among students.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    • To promote research, innovation, and entrepreneurial spirit in tune with national and global needs.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    • To contribute to nation-building by shaping competent, confident, and value-driven graduates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Successive Principals */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
                Successive Principals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-gray-300 px-4 py-2 text-left">S.NO.</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">NAME</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">PERIOD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {principals.map((principal, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">{principal.sno}</td>
                        <td className="border border-gray-300 px-4 py-2 font-medium">{principal.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{principal.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Principal's Message */}
        <section className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Principal's Message</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <img 
                src="/lovable-uploads/3341758d-2afe-451e-bd68-de2f00f13f2b.png" 
                alt="Principal" 
                className="w-48 h-48 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Dr. Anagani Hari Krishna</h3>
              <p className="text-blue-600">Principal</p>
            </div>
            <div className="md:col-span-2">
              <blockquote className="text-lg text-gray-700 mb-4">
                It is my privilege to welcome you to Sri Velagapudi Ramakrishna Memorial College, a distinguished institution committed to nurturing young minds in the rural heartland of Andhra Pradesh. For over five decades, SVRM College has been dedicated to providing quality, accessible, and value-based education, empowering students to excel academically, morally, and socially.
              </blockquote>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our mission is to expel the darkness of ignorance and illuminate minds through holistic education grounded in the timeless principles of Truth, Love, and God (Tamaso mā jyotirgamaya). We strive to cultivate integrity, excellence, innovation, and inclusivity in all aspects of learning, preparing our students to meet the challenges of a rapidly changing world with confidence and competence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At SVRM College, we believe that education is not just the acquisition of knowledge, but a journey of personal growth, social responsibility, and nation-building. I invite students, faculty, and stakeholders to join us in our endeavor to shape enlightened, ethical, and empowered citizens who will contribute meaningfully to society.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Together, let us uphold the proud legacy of SVRM College and continue to illuminate the path of learning for generations to come.
              </p>
            </div>
          </div>
        </section>

        {/* Best Teacher Awards */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-yellow-500" />
                Best Teacher Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {bestTeachers.map((teacher, index) => (
                  <Card key={index} className="border border-yellow-200 bg-yellow-50">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">{teacher.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{teacher.name}</h3>
                      <p className="text-gray-700 text-sm">{teacher.achievement}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* College Awards */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Award className="h-6 w-6 text-yellow-500" />
                College Awards & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {collegeAwards.map((award, index) => (
                  <div key={index} className="border-l-4 border-l-yellow-500 pl-6 py-4 bg-yellow-50 rounded-r-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                    {award.recipient && (
                      <p className="text-blue-600 font-medium mb-2">{award.recipient}</p>
                    )}
                    <p className="text-gray-700">{award.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Autonomous Status */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8">
            <img 
              src="/lovable-uploads/e56a5a3d-04a7-4f4a-86aa-0e9bec979d4d.png" 
              alt="Autonomous Status 2011" 
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-purple-800 mb-2">Autonomous Status</h3>
            <p className="text-gray-700">Granted Autonomous Status in 2011</p>
          </div>
        </section>

        {/* Certificates */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Accreditations & Certifications</h2>
          <Tabs defaultValue="naac" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="naac">NAAC</TabsTrigger>
              <TabsTrigger value="aishe">AISHE</TabsTrigger>
              <TabsTrigger value="iso">ISO</TabsTrigger>
              <TabsTrigger value="autonomous">Autonomous</TabsTrigger>
            </TabsList>
            
            <TabsContent value="naac" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileCheck className="h-6 w-6 text-green-600" />
                    NAAC Accreditation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Shree Velagapudi Ramakrishna Memorial College is accredited with CGPA of 2.91 on four point scale at B++ grade valid up to April 30, 2028.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Grade: B++ (2.91 CGPA)</li>
                        <li>• Validity: Valid up to April 30, 2028</li>
                        <li>• Date: May 01, 2023</li>
                        <li>• Affiliated to Acharya Nagarjuna University, Andhra Pradesh</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <img 
                        src="/lovable-uploads/2d8dff4c-fff8-4196-a280-0043c04b213c.png" 
                        alt="NAAC Certificate" 
                        className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="aishe" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                    AISHE Registration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Government of India, Ministry of Education, Department of Higher Education, Statistics Division has certified our college under All India Survey on Higher Education (AISHE).
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Ministry: Education, Government of India</li>
                        <li>• Department: Higher Education</li>
                        <li>• Division: Statistics Division</li>
                        <li>• Status: Certified</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <img 
                        src="/lovable-uploads/904d01ad-291a-4681-be0f-bb29e99b4f47.png" 
                        alt="AISHE Certificate" 
                        className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="iso" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-purple-600" />
                    ISO Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        SVRM College, Nagaram has been certified by KVQA CERTIFICATION SERVICES PVT. LTD. for Quality Management System ISO 9001:2015.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Standard: ISO 9001:2015</li>
                        <li>• Certification Body: KVQA Certification Services Pvt. Ltd.</li>
                        <li>• Location: Nagaram, PIN: 522 268, Bapatla Dist, A.P, India</li>
                        <li>• Scope: Quality Management System</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <img 
                        src="/lovable-uploads/ded58525-7dc9-415e-a5e3-b8966be023ae.png" 
                        alt="ISO Certificate" 
                        className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="autonomous" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Award className="h-6 w-6 text-orange-600" />
                    Autonomous Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        University Grants Commission has approved the extension of autonomous status to Shree Velagapudi Ramakrishna Memorial College, Bapatla Andhra Pradesh affiliated to Acharya Nagarjuna University for a period of 05 years from the academic year 2023-2024 to 2027-2028.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Approved by: University Grants Commission</li>
                        <li>• Period: 2023-2024 to 2027-2028 (5 years)</li>
                        <li>• Date: July 2023</li>
                        <li>• Status: Extended Autonomous Status</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <img 
                        src="/lovable-uploads/ba7f6704-4cc8-4d72-ae2d-691361dab65b.png" 
                        alt="Autonomous Status Document" 
                        className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutUs;