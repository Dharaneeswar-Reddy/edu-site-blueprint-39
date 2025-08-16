import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Target, Heart, Star } from "lucide-react";

const VisionMission = () => {
  return (
    <PageLayout 
      title="Vision & Mission" 
      description="Our guiding principles and commitment to excellence in education and character development."
    >
      <div className="space-y-8">
        
        {/* Vision */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Eye className="h-8 w-8 text-college-blue mr-3" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                "To be a premier institution of higher learning that empowers students with knowledge, 
                skills, and values to become responsible global citizens and leaders who contribute 
                meaningfully to society."
              </p>
              <p>
                We envision SVRMC as a center of academic excellence that fosters innovation, critical 
                thinking, and holistic development, preparing students to meet the challenges of a 
                rapidly evolving world while remaining grounded in ethical principles and social responsibility.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mission */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Target className="h-8 w-8 text-green-600 mr-3" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                "To provide quality education that combines academic rigor with practical application, 
                fostering intellectual curiosity, creativity, and character development in our students."
              </p>
              <p>
                Our mission is to create an inclusive learning environment that nurtures talent, 
                promotes research and innovation, and instills values of integrity, service, and 
                lifelong learning while contributing to the socio-economic development of the region.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Core Values */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              Core Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-700">Excellence</h4>
                  <p className="text-gray-600">Striving for the highest standards in teaching, learning, and research.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-700">Integrity</h4>
                  <p className="text-gray-600">Upholding honesty, transparency, and ethical conduct in all endeavors.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-purple-700">Innovation</h4>
                  <p className="text-gray-600">Encouraging creativity, critical thinking, and innovative approaches to learning.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-orange-700">Inclusivity</h4>
                  <p className="text-gray-600">Promoting diversity, equality, and accessibility for all members of our community.</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700">Service</h4>
                  <p className="text-gray-600">Committed to serving society and contributing to community development.</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-indigo-700">Collaboration</h4>
                  <p className="text-gray-600">Fostering teamwork, partnerships, and cooperative learning environments.</p>
                </div>
                
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-teal-700">Sustainability</h4>
                  <p className="text-gray-600">Promoting environmental consciousness and sustainable practices.</p>
                </div>
                
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-pink-700">Lifelong Learning</h4>
                  <p className="text-gray-600">Encouraging continuous growth and adaptation to changing knowledge landscapes.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Institutional Objectives */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              Institutional Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Academic Excellence</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide quality undergraduate and postgraduate programs</li>
                  <li>• Maintain high academic standards and innovative curriculum</li>
                  <li>• Foster research culture among faculty and students</li>
                  <li>• Encourage interdisciplinary learning and collaboration</li>
                  <li>• Promote continuous faculty development</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Student Development</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Develop critical thinking and problem-solving skills</li>
                  <li>• Enhance communication and leadership abilities</li>
                  <li>• Provide career guidance and placement support</li>
                  <li>• Encourage participation in extracurricular activities</li>
                  <li>• Foster entrepreneurial mindset and innovation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Social Responsibility</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Serve the educational needs of the local community</li>
                  <li>• Promote social awareness and civic engagement</li>
                  <li>• Support sustainable development initiatives</li>
                  <li>• Encourage volunteerism and community service</li>
                  <li>• Bridge the gap between academia and society</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-college-blue">Infrastructure & Technology</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Develop state-of-the-art facilities and infrastructure</li>
                  <li>• Integrate technology in teaching and learning</li>
                  <li>• Provide modern laboratory and library facilities</li>
                  <li>• Ensure accessible and inclusive campus environment</li>
                  <li>• Maintain sustainable and eco-friendly practices</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vision 2030 */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle>Vision 2030: Strategic Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-3 text-purple-700">Academic Leadership</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Top 100 NIRF ranking</li>
                  <li>• International accreditation</li>
                  <li>• 50+ research publications annually</li>
                  <li>• Industry-aligned curriculum</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-3 text-purple-700">Global Recognition</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• International collaborations</li>
                  <li>• Student exchange programs</li>
                  <li>• Global alumni network</li>
                  <li>• World-class infrastructure</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-3 text-purple-700">Social Impact</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 100% placement rate</li>
                  <li>• Community development projects</li>
                  <li>• Sustainable campus initiatives</li>
                  <li>• Digital literacy programs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default VisionMission;