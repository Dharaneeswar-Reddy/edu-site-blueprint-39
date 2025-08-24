import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, Users, BookOpen, Award, Download, Globe, Search, Trophy, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const Library = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png",
    "/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png",
    "/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png",
    "/lovable-uploads/4b78b0b7-424d-41e9-b09c-4108e1edd3c0.png"
  ];

  const galleryImages = [
    "/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png",
    "/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png",
    "/lovable-uploads/aa64612b-a2c2-4fc2-b645-b756306336a0.png",
    "/lovable-uploads/4b78b0b7-424d-41e9-b09c-4108e1edd3c0.png",
    "/lovable-uploads/71dea894-961d-4fd6-ac1f-78e8db8d93b4.png",
    "/lovable-uploads/828ea20e-f759-4b97-aa60-3dc97555221f.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const libraryHoldings = [
    { category: "Science & Technology", books: 8500, type: "Books, Journals, E-Resources" },
    { category: "Humanities & Social Sciences", books: 7200, type: "Books, Research Papers" },
    { category: "Literature & Languages", books: 6800, type: "Books, Manuscripts" },
    { category: "Reference Materials", books: 1500, type: "Encyclopedias, Dictionaries" },
    { category: "Digital Resources", books: 2500, type: "E-Books, Online Databases" },
    { category: "Periodicals & Journals", books: 450, type: "Print & Electronic Journals" },
    { category: "Thesis & Dissertations", books: 850, type: "Student Research Works" },
    { category: "Rare Books Collection", books: 200, type: "Historical & Special Collections" }
  ];

  const libraryStaff = [
    {
      name: "Dr. Priya Sharma",
      designation: "Chief Librarian",
      qualification: "Ph.D. in Library Science, MLIS",
      experience: "15 years",
      photo: "/lovable-uploads/female-professor-1.jpg"
    },
    {
      name: "Mr. Rajesh Kumar",
      designation: "Assistant Librarian",
      qualification: "MLIS, B.Ed",
      experience: "8 years",
      photo: "/lovable-uploads/male-professor-1.jpg"
    },
    {
      name: "Ms. Anjali Reddy",
      designation: "Digital Resources Manager",
      qualification: "MLIS, PG Dip. in IT",
      experience: "6 years",
      photo: "/lovable-uploads/female-professor-2.jpg"
    },
    {
      name: "Mr. Suresh Babu",
      designation: "Technical Assistant",
      qualification: "Diploma in Library Science",
      experience: "12 years",
      photo: "/lovable-uploads/male-professor-2.jpg"
    }
  ];

  const achievements = [
    "Best College Library Award - State Level (2023)",
    "Digital Transformation Excellence Award (2022)",
    "Outstanding Service Award from University (2021)",
    "Green Library Initiative Recognition (2020)",
    "Student Satisfaction Excellence Award (2019)"
  ];

  return (
    <PageLayout 
      title="Central Library" 
      description="A comprehensive learning resource center fostering knowledge, research, and academic excellence for the entire college community."
    >
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Library ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Central Library</h1>
              <p className="text-xl md:text-2xl">Gateway to Knowledge & Research</p>
            </div>
          </div>
        </div>

        {/* About Library */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-college-blue" />
              About Our Library
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              The Central Library of SVRM College serves as the intellectual heart of our institution, providing 
              comprehensive information resources and services to support teaching, learning, and research activities. 
              Our library houses an extensive collection of over 28,000 books, 500+ e-books, and numerous digital resources.
            </p>
            <p>
              With a seating capacity of 150 students and modern facilities including high-speed internet, 
              digital databases, and quiet study spaces, our library creates an ideal environment for academic 
              pursuits. We are committed to fostering a culture of reading, research, and lifelong learning.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">28,000+</div>
                <div className="text-sm text-gray-600">Books</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">E-Books</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">150</div>
                <div className="text-sm text-gray-600">Seating Capacity</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">12</div>
                <div className="text-sm text-gray-600">Hours Daily</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vision, Mission & Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Vision & Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-college-blue mb-2">Vision</h4>
                <p className="text-sm text-gray-700">
                  To be a world-class academic library that empowers learning, fosters research excellence, 
                  and serves as a gateway to global knowledge resources for the academic community.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-college-blue mb-2">Mission</h4>
                <p className="text-sm text-gray-700">
                  To provide comprehensive information services, promote digital literacy, support academic 
                  research, and create an inclusive learning environment that enhances educational outcomes 
                  and scholarly achievements.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Support curriculum and research activities with relevant resources</li>
                <li>• Promote information literacy and digital skills among users</li>
                <li>• Provide equal access to information for all members</li>
                <li>• Foster collaborative learning and knowledge sharing</li>
                <li>• Preserve and organize knowledge for future generations</li>
                <li>• Enhance research capabilities through modern technology</li>
                <li>• Create a conducive environment for academic excellence</li>
                <li>• Support faculty research and publication activities</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Library Holdings */}
        <Card>
          <CardHeader>
            <CardTitle>Library Holdings & Collections</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Collection Category</TableHead>
                  <TableHead className="text-right">Number of Items</TableHead>
                  <TableHead>Type of Materials</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {libraryHoldings.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell className="text-right font-semibold text-college-blue">
                      {item.books.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-gray-600">{item.type}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Library Rules */}
        <Card>
          <CardHeader>
            <CardTitle>Library Rules & Regulations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-college-blue">General Rules</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Maintain absolute silence in reading areas</li>
                  <li>• Mobile phones must be on silent mode</li>
                  <li>• No food or beverages allowed inside</li>
                  <li>• Handle all materials with care</li>
                  <li>• Follow proper check-in/check-out procedures</li>
                  <li>• Respect other users and library property</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-college-blue">Borrowing Policy</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Students: 3 books for 15 days</li>
                  <li>• Faculty: 10 books for 30 days</li>
                  <li>• Research Scholars: 5 books for 21 days</li>
                  <li>• Renewal allowed once if no reservations</li>
                  <li>• Fine: ₹2 per day for overdue materials</li>
                  <li>• Lost books must be replaced or paid for</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-college-blue" />
              Library Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center p-3 bg-yellow-50 rounded-lg">
                  <Award className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* E-Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-college-blue" />
              Digital Resources & Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Online Databases</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Access to JSTOR, IEEE, Springer, and other premium databases
                </p>
                <Button variant="outline" size="sm">Access Now</Button>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Digital Library</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Comprehensive collection of e-books, research papers, and theses
                </p>
                <Button variant="outline" size="sm">Browse Collection</Button>
              </div>
              
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Download className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Research Support</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Citation tools, research guides, and academic writing resources
                </p>
                <Button variant="outline" size="sm">Get Support</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Librarian Profile */}
        <Card>
          <CardHeader>
            <CardTitle>Chief Librarian Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-1">
                <img 
                  src="/lovable-uploads/female-professor-1.jpg" 
                  alt="Dr. Priya Sharma - Chief Librarian"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-md"
                />
              </div>
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-college-blue mb-1">Dr. Priya Sharma</h3>
                  <p className="text-lg text-gray-600 mb-4">Chief Librarian</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Qualifications</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Ph.D. in Library & Information Science</li>
                      <li>• MLIS - Master of Library Science</li>
                      <li>• B.Ed. in Education</li>
                      <li>• Certificate in Digital Library Management</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Experience & Achievements</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 15+ years in library management</li>
                      <li>• Published 25+ research papers</li>
                      <li>• Expert in digital library systems</li>
                      <li>• Member of Indian Library Association</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    librarian@svrmc.edu.in
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    +91-863-2345679
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Main Building, 2nd Floor
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Library Staff */}
        <Card>
          <CardHeader>
            <CardTitle>Library Staff</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {libraryStaff.map((staff, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <img 
                      src={staff.photo} 
                      alt={staff.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="font-semibold text-lg mb-1">{staff.name}</h4>
                    <p className="text-college-blue font-medium mb-2">{staff.designation}</p>
                    <p className="text-sm text-gray-600 mb-1">{staff.qualification}</p>
                    <Badge variant="secondary">{staff.experience}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Photo Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Photo Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={image} 
                    alt={`Library Gallery ${index + 1}`}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Working Hours & Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6 text-college-blue" />
              Library Timings & Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Working Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Holidays:</span>
                    <span className="font-medium text-red-600">Closed</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Contact Information</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-college-blue" />
                    <span>library@svrmc.edu.in</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-college-blue" />
                    <span>+91-863-2345679</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-college-blue" />
                    <span>Main Building, 2nd Floor</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default Library;