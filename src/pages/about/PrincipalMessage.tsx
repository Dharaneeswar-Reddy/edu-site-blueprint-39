import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Quote, Mail, Phone, Award, GraduationCap } from "lucide-react";

const PrincipalMessage = () => {
  return (
    <PageLayout 
      title="Principal's Message" 
      description="A message from our esteemed Principal about SVRMC's commitment to excellence and student success."
    >
      <div className="space-y-8">
        
        {/* Principal's Profile */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Avatar className="h-40 w-40">
                  <AvatarImage src="/placeholder.svg" alt="Dr. K. Srinivas" />
                  <AvatarFallback className="text-2xl">KS</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-college-blue mb-2">Dr. K. Srinivas</h2>
                <p className="text-xl text-gray-600 mb-4">Principal, SVRMC</p>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                  <Badge variant="secondary">Ph.D. Physics</Badge>
                  <Badge variant="secondary">25+ Years Experience</Badge>
                  <Badge variant="secondary">Research Excellence</Badge>
                </div>
                
                <div className="flex flex-col gap-2 text-gray-600">
                  <div className="flex items-center justify-center md:justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>principal@svrmc.edu.in</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>+91-863-2345690</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Principal's Message */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Quote className="h-6 w-6 text-college-blue mr-2" />
              Message from the Principal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg font-medium text-college-blue">
                "Dear Students, Faculty, Staff, and Well-wishers,"
              </p>
              
              <p>
                It is with great pride and excitement that I welcome you to Shree Velagapudi Ramakrishna Memorial College. 
                As we embark on another academic year, I am reminded of our institution's unwavering commitment to 
                educational excellence and the holistic development of our students.
              </p>
              
              <p>
                SVRMC stands as a beacon of quality education in the region, with a rich legacy spanning over five decades. 
                Our college has consistently evolved to meet the changing demands of higher education while staying true 
                to our foundational values of integrity, excellence, and service. We have nurtured thousands of graduates 
                who have gone on to make significant contributions in their respective fields, bringing honor to our institution.
              </p>
              
              <p>
                In today's rapidly changing world, education is not just about acquiring knowledge; it's about developing 
                the ability to think critically, solve complex problems, and adapt to new challenges. At SVRMC, we are 
                committed to providing an educational experience that goes beyond traditional classroom learning. Our 
                faculty members are dedicated educators and researchers who bring both academic rigor and practical 
                experience to their teaching.
              </p>
              
              <p>
                We believe in the power of holistic education that nurtures not just the intellect but also the character 
                of our students. Our diverse range of academic programs, coupled with extensive co-curricular and 
                extracurricular activities, ensures that every student has the opportunity to discover and develop their 
                unique talents and interests.
              </p>
              
              <p>
                As we look toward the future, SVRMC is committed to embracing innovation and technology in education. 
                We are continuously upgrading our infrastructure, incorporating digital learning tools, and fostering 
                a culture of research and innovation. Our vision is to prepare students who are not just academically 
                competent but also socially conscious and globally competitive.
              </p>
              
              <p>
                To our students, I encourage you to make the most of your time here. Engage actively in your studies, 
                participate in research projects, join clubs and societies, and build meaningful relationships with 
                your peers and faculty. Remember that your education extends far beyond the classroom walls.
              </p>
              
              <p>
                To our faculty and staff, I express my heartfelt gratitude for your dedication and commitment to our 
                students' success. Your passion for teaching and mentoring is what makes SVRMC a truly special place 
                of learning.
              </p>
              
              <p>
                To our alumni and well-wishers, thank you for your continued support and association with SVRMC. 
                Your success stories inspire our current students and motivate us to strive for even greater heights.
              </p>
              
              <p className="text-lg font-medium text-college-blue">
                Together, let us work towards making SVRMC a center of excellence that continues to shape the leaders 
                and change-makers of tomorrow.
              </p>
              
              <div className="border-l-4 border-college-blue pl-6 py-4 bg-blue-50 rounded">
                <p className="font-medium">
                  "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Let us continue to harness this power to create positive change in our society.
                </p>
              </div>
              
              <p className="text-right font-medium text-college-blue">
                With warm regards,<br />
                Dr. K. Srinivas<br />
                Principal, SVRMC
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Achievements and Recognition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-6 w-6 text-yellow-500 mr-2" />
              Principal's Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-college-blue">Academic Qualifications</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Ph.D. in Physics, Andhra University
                  </li>
                  <li className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    M.Sc. Physics (Gold Medalist), Sri Venkateswara University
                  </li>
                  <li className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    B.Sc. Physics, Honors, Nagarjuna University
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-college-blue">Professional Experience</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 25+ years in higher education</li>
                  <li>• Former Head of Physics Department</li>
                  <li>• 50+ research publications</li>
                  <li>• Principal since 2018</li>
                  <li>• Member of various academic committees</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Awards and Recognition */}
        <Card>
          <CardHeader>
            <CardTitle>Awards and Recognition</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-yellow-700">Best Principal Award</h4>
                <p className="text-sm text-gray-600">State Education Department, 2022</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-blue-700">Research Excellence</h4>
                <p className="text-sm text-gray-600">UGC Recognition, 2020</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 text-green-700">Educational Leadership</h4>
                <p className="text-sm text-gray-600">APSCCE Award, 2021</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Schedule a Meeting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Office Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Appointments preferred via email or phone</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Office Location</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Principal's Office</p>
                  <p>Administrative Block, 2nd Floor</p>
                  <p>SVRMC Campus</p>
                  <p>Secretary: Ms. Lakshmi (+91-863-2345691)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default PrincipalMessage;