import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Award, Building } from "lucide-react";

const History = () => {
  return (
    <PageLayout 
      title="History of SVRMC" 
      description="Journey of excellence spanning over five decades of quality education and community service."
    >
      <div className="space-y-8">
        
        {/* Timeline Header */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-college-blue mb-4">1972 - 2024</h2>
              <p className="text-lg text-gray-600">
                Five decades of nurturing minds and building futures
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <Building className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">1972</h3>
              <p className="text-gray-600">Establishment</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">10,000+</h3>
              <p className="text-gray-600">Alumni</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">25+</h3>
              <p className="text-gray-600">Awards</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">52</h3>
              <p className="text-gray-600">Years</p>
            </CardContent>
          </Card>
        </div>

        {/* Foundation Story */}
        <Card>
          <CardHeader>
            <CardTitle>Foundation and Early Years (1972-1980)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Shri Velagapudi Ramakrishna Memorial College was established in 1972 by the R.T.E.I. Society 
                with a vision to provide quality higher education to the rural and semi-urban communities of 
                Krishna district. Named after the revered educationist Shri Velagapudi Ramakrishna, the college 
                was founded on the principles of academic excellence, character building, and social service.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The college started with just three undergraduate programs - B.A., B.Com, and B.Sc. - and a 
                modest infrastructure. The founding fathers envisioned an institution that would not only impart 
                education but also instill values of discipline, integrity, and service to society.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Growth and Development */}
        <Card>
          <CardHeader>
            <CardTitle>Growth and Development (1980-2000)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">
                The 1980s marked a period of significant expansion for SVRMC. The college received government 
                aid status, ensuring financial stability and enabling further development. New departments were 
                established, including Physics, Chemistry, Mathematics, and English, strengthening the academic 
                foundation.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The 1990s witnessed the introduction of professional courses and the establishment of well-equipped 
                laboratories. The college library was expanded, and computer education was introduced, keeping pace 
                with technological advancements. The campus infrastructure grew substantially during this period.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Modern Era */}
        <Card>
          <CardHeader>
            <CardTitle>Modern Era and Excellence (2000-Present)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">
                The new millennium brought transformative changes to SVRMC. The college embraced digitalization, 
                introduced innovative teaching methodologies, and focused on research and development. The 
                establishment of specialized departments like Computer Science and Biotechnology positioned 
                the college as a modern educational institution.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Recent years have seen SVRMC achieving significant milestones including NAAC accreditation, 
                NIRF rankings, and recognition for academic excellence. The college continues to evolve, 
                adapting to changing educational needs while maintaining its core values and commitment to quality.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Notable Achievements Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Notable Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-college-blue pl-6 py-2">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">NAAC Accreditation</h4>
                  <span className="text-sm text-gray-500">2018</span>
                </div>
                <p className="text-gray-600">Received 'B+' grade from NAAC, recognizing quality in education and institutional practices.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6 py-2">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">NIRF Ranking</h4>
                  <span className="text-sm text-gray-500">2020</span>
                </div>
                <p className="text-gray-600">First appearance in NIRF rankings, positioned among top colleges in Andhra Pradesh.</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6 py-2">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Digital Campus Initiative</h4>
                  <span className="text-sm text-gray-500">2019</span>
                </div>
                <p className="text-gray-600">Complete digitalization of campus operations and introduction of smart classrooms.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6 py-2">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Research Excellence Award</h4>
                  <span className="text-sm text-gray-500">2021</span>
                </div>
                <p className="text-gray-600">State-level recognition for outstanding contributions to research and innovation.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legacy and Vision */}
        <Card>
          <CardHeader>
            <CardTitle>Legacy and Future Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">
                As SVRMC completes over five decades of service, it stands as a testament to the vision of its 
                founders. The college has successfully transformed thousands of lives, producing graduates who 
                have excelled in various fields including science, technology, commerce, arts, and public service.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Looking ahead, SVRMC is committed to maintaining its tradition of excellence while embracing 
                innovation and change. The college aims to become a leading institution in higher education, 
                contributing to society through quality education, research, and community engagement.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default History;