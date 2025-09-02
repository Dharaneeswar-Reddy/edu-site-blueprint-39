import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Clock, Users, BookOpen, Award, Download, Globe, Search, Trophy, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useStaff } from "@/hooks/useStaff";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const Library = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {
    staff: libraryStaff,
    loading: staffLoading
  } = useStaff("Library");
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };
  const heroImages = ["/lovable-uploads/65f4b0e6-34a6-4a76-89d9-2ad5814ea916.png", "/lovable-uploads/2966f044-90be-41d4-960a-8ecc255707ab.png", "/lovable-uploads/69a5922c-8de7-45f3-a479-e4b0b6f58065.png", "/lovable-uploads/8d4efd31-f8f9-4a60-baa8-79973940c0c1.png", "/lovable-uploads/fb4a7eeb-4035-49a1-879f-ccd9d8aee887.png", "/lovable-uploads/4c46f975-52e2-4da0-9a51-499a4307801b.png", "/lovable-uploads/2491335b-5c00-4304-b5e3-c98c1b8c78f3.png", "/lovable-uploads/ed67eb6a-8709-4d75-93bf-30663eb27c7e.png", "/lovable-uploads/deb710e1-e20c-4c6d-bfdb-9474b1aebb4d.png"];
  const galleryImages = ["/lovable-uploads/65f4b0e6-34a6-4a76-89d9-2ad5814ea916.png", "/lovable-uploads/2966f044-90be-41d4-960a-8ecc255707ab.png", "/lovable-uploads/69a5922c-8de7-45f3-a479-e4b0b6f58065.png", "/lovable-uploads/8d4efd31-f8f9-4a60-baa8-79973940c0c1.png", "/lovable-uploads/fb4a7eeb-4035-49a1-879f-ccd9d8aee887.png", "/lovable-uploads/4c46f975-52e2-4da0-9a51-499a4307801b.png", "/lovable-uploads/2491335b-5c00-4304-b5e3-c98c1b8c78f3.png", "/lovable-uploads/ed67eb6a-8709-4d75-93bf-30663eb27c7e.png", "/lovable-uploads/deb710e1-e20c-4c6d-bfdb-9474b1aebb4d.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  const libraryHoldings = [{
    category: "English",
    books: 3176,
    bookBank: 0,
    genLib: 3176,
    titleWise: 1779,
    type: "General Literature & Language Books"
  }, {
    category: "Telugu",
    books: 5903,
    bookBank: 0,
    genLib: 5903,
    titleWise: 3110,
    type: "Telugu Literature & Culture Books"
  }, {
    category: "Hindi",
    books: 1214,
    bookBank: 0,
    genLib: 1214,
    titleWise: 551,
    type: "Hindi Literature & Language Books"
  }, {
    category: "Commerce",
    books: 3050,
    bookBank: 543,
    genLib: 2507,
    titleWise: 1342,
    type: "Business & Commerce Books"
  }, {
    category: "Economics",
    books: 1708,
    bookBank: 412,
    genLib: 1296,
    titleWise: 798,
    type: "Economics & Policy Books"
  }, {
    category: "Political Science",
    books: 1642,
    bookBank: 326,
    genLib: 1316,
    titleWise: 893,
    type: "Political Science & Governance Books"
  }, {
    category: "History",
    books: 2593,
    bookBank: 323,
    genLib: 2270,
    titleWise: 1220,
    type: "History & Heritage Books"
  }, {
    category: "Mathematics",
    books: 2245,
    bookBank: 143,
    genLib: 2102,
    titleWise: 1033,
    type: "Mathematics & Statistics Books"
  }, {
    category: "Computer Science",
    books: 1247,
    bookBank: 208,
    genLib: 1039,
    titleWise: 500,
    type: "Computer Science & IT Books"
  }, {
    category: "Physics",
    books: 2470,
    bookBank: 382,
    genLib: 2088,
    titleWise: 1230,
    type: "Physics & Applied Sciences Books"
  }, {
    category: "Electronics",
    books: 1002,
    bookBank: 320,
    genLib: 682,
    titleWise: 541,
    type: "Electronics & Engineering Books"
  }, {
    category: "Chemistry",
    books: 3091,
    bookBank: 324,
    genLib: 2767,
    titleWise: 1229,
    type: "Chemistry & Chemical Sciences Books"
  }, {
    category: "Botany",
    books: 1555,
    bookBank: 250,
    genLib: 1305,
    titleWise: 855,
    type: "Botanical Sciences Books"
  }, {
    category: "Zoology",
    books: 1895,
    bookBank: 260,
    genLib: 1635,
    titleWise: 894,
    type: "Zoological Sciences Books"
  }, {
    category: "Biology",
    books: 208,
    bookBank: 0,
    genLib: 208,
    titleWise: 127,
    type: "General Biology Books"
  }, {
    category: "Reference & General",
    books: 12141,
    bookBank: 0,
    genLib: 12141,
    titleWise: 8273,
    type: "Reference Materials & General Collection"
  }];
  const achievements = ["Best Library Award 2016", "Library-attached Archaeological Museum, showcasing precious historical treasures, including the original Amaravathi Stupa, officially registered with the National Museum, Delhi. With government permission granted to establish the museum, it serves as a center of learning and heritage, inspiring students, researchers, and the community to explore India's rich cultural legacy.", "Rare collection of talapatrha grandhas from 16th century of padma puranamu and bhagavadgeetha written by 'pellamaram taata charyulu'"];
  return <PageLayout title="Central Library" description="A comprehensive learning resource center fostering knowledge, research, and academic excellence for the entire college community.">
      <div className="space-y-8">
        
        {/* Auto-scrolling Hero Images */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl">
          {heroImages.map((image, index) => <img key={index} src={image} alt={`Library ${index + 1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              
              
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
              Indian population lives in villages. Till recent times the village people have no easy access to education – scientific, technical and literature etc. We are happy to put here that our college as well as our library are playing a significant role in filling this vacuum in this forsaken rural area, NAGARAM.
            </p>
            <p>
              Our Library, located in a total rural backdrop, inhabited mostly by scheduled caste and backward class people, came into existence in the year 1969. The College and the library transformed the educational scenario of this backward area. The students of these rural surroundings have been immensely benefited from the library. It literally helped to ignite their minds.
            </p>
            <p>
              The Library building stands majestically as a focal point amidst a beautiful garden with sylvan surroundings. There are numerous plants encompassing the building from the heat of the scorching sun. The flowering plants, the sylvan surroundings and the landscape of the college campus visible through the glass panels of the library building gives a veritable feast to the eyes of the readers at the library.
            </p>
            <p>
              Nearly five decades ago, to put precisely in the year 1969, the College and the Library were started with a noble mission to kindle light into the lives of the poor people of this forsaken backward area by imparting education. This building was constructed by The KCP Ltd., Vuyyuru, the pioneers in sugar manufacturing, are the munificent donors of this magnificent landmark, along with the furniture. The chairs and tables are fiber make. The racks are from 'Godrej and Vinar'. We also have catalogue cabinets and the process of computerization of Library stock has been taken up by using 'Soul software'. The reading room has capacity to seat 150 readers. The total plinth area of the building is around 12000 sft. The ground floor is consisting of reading room, reference room, stock room, issue counter and the Librarian's room. The first floor is also used for the stocks as well as reading room.
            </p>
            <p>
              The library has a most unique annexure to it - an 'Archaeological Museum'. Several photos, portraits of eminent scholars, Literatures, noble personalities and philanthropists adorning the walls of the reading room, shower inspiration to the young minds. The noble mission of our library is service oriented. We provide open access system, audio, video services and display of clippings of different items. We always guide students and staff in the selection of worthy and right books to study.
            </p>
            <p>
              The ambience in the library helped to organize various seminars and debates by faculty for the benefit of students.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-college-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-college-blue">45,140+</div>
                <div className="text-sm text-gray-600">Books</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Globe className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">199,500+</div>
                <div className="text-sm text-gray-600">E-Books (N-LIST)</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">150</div>
                <div className="text-sm text-gray-600">Seating Capacity</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">9</div>
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
                  To be a Center of Excellence in Knowledge and Learning, research, and innovation while empowering rural youth and community through equitable access to information and lifelong education.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-college-blue mb-2">Mission</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>1. To provide high-quality print, digital, and cultural resources accessible to students, faculty, rural youth, and the wider community.</li>
                  <li>2. To adopt modern ICT tools that bridge the urban–rural knowledge gap.</li>
                  <li>3. To foster a learner-friendly environment that encourages curiosity, creativity, and lifelong learning among all sections of society.</li>
                  <li>4. To promote reading culture and information literacy in rural areas through outreach, awareness, and extension services.</li>
                  <li>5. To collaborate with national and global knowledge networks, ensuring our users remain connected to world-class developments in education and research.</li>
                  <li>6. To preserve and showcase local heritage and rural wisdom alongside global knowledge.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3 text-college-blue">Objectives ("Opening Minds, Bridging Communities, Empowering Rural Youth.")</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Support Academic Excellence – Provide quality resources to enhance teaching, learning, and research.</li>
                <li>• Empower Rural Youth – Bridge the urban–rural knowledge gap and enable first-generation learners.</li>
                <li>• Serve the Community – Promote inclusive learning for students, local residents, and rural communities.</li>
                <li>• Promote Reading & Lifelong Learning – Inspire curiosity, creativity, and continuous learning.</li>
                <li>• Facilitate Digital Literacy – Equip users with skills to access and use e-resources and online platforms effectively.</li>
                <li>• Preserve Heritage & Knowledge – Maintain archives and cultural resources for education and community enrichment.</li>
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
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-right">No. of Books</TableHead>
                  <TableHead className="text-right">Book Bank</TableHead>
                  <TableHead className="text-right">Gen-Lib</TableHead>
                  <TableHead className="text-right">Title-wise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {libraryHoldings.map((item, index) => <TableRow key={index}>
                    <TableCell className="font-medium">{item.category}</TableCell>
                    <TableCell className="text-right font-semibold text-college-blue">
                      {item.books.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">{item.bookBank || 0}</TableCell>
                    <TableCell className="text-right">{item.genLib}</TableCell>
                    <TableCell className="text-right">{item.titleWise}</TableCell>
                  </TableRow>)}
                <TableRow className="border-t-2 font-bold">
                  <TableCell className="font-bold">Total</TableCell>
                  <TableCell className="text-right font-bold text-college-blue">45,140</TableCell>
                  <TableCell className="text-right font-bold">3,491</TableCell>
                  <TableCell className="text-right font-bold">41,649</TableCell>
                  <TableCell className="text-right font-bold">24,375</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-college-blue mb-2">Additional Digital Resources</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium">E-Books (N-LIST):</span> 1,99,500+
                </div>
                <div>
                  <span className="font-medium">E-Books (NDL):</span> 6,00,000+
                </div>
                <div>
                  <span className="font-medium">Journals Access:</span> 6,000+
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Library Rules */}
        <Card>
          <CardHeader>
            <CardTitle>Library Rules & Regulations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-college-blue">Rules and Regulations</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <h5 className="font-medium mb-2">1. Membership and Access</h5>
                    <ul className="space-y-1 ml-4">
                      <li>• Library membership is open to all college students, faculty, staff, rural youth, and community members as per library policies.</li>
                      <li>• Members must carry a valid library ID or issued library card to enter and use the facilities.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">2. Timing and Conduct</h5>
                    <ul className="space-y-1 ml-4">
                      <li>• The library is open during the scheduled hours; members are expected to maintain silence and discipline.</li>
                      <li>• Eating, drinking, and mobile phone usage inside the library are prohibited.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">3. Borrowing and Returning Materials</h5>
                    <ul className="space-y-1 ml-4">
                      <li>• Books, journals, and digital resources can be borrowed according to membership type and loan period.</li>
                      <li>• Members must return materials on or before the due date; overdue fines will be applicable.</li>
                      <li>• Lost or damaged items must be reported immediately and replaced or compensated.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">4. Use of Digital Resources</h5>
                    <ul className="space-y-1 ml-4">
                      <li>• Library computers and e-resources are to be used for academic, research, and community learning purposes only.</li>
                      <li>• Users can download, copy, or share content with proper permission.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">5. Rural Youth and Community Programs</h5>
                    <ul className="space-y-1 ml-4">
                      <li>• Special sessions, workshops, and outreach programs will be organized for rural youth and local community members.</li>
                      <li>• Participants are expected to follow library rules and respect resources during these programs.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">6. Preservation and Care</h5>
                    <ul className="space-y-1 ml-4">
                      <li>• Members must handle books, journals, and other resources carefully to maintain their condition.</li>
                      <li>• Rare collections, heritage materials, and archives must be consulted under supervision.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">7. Facilities and Behavior</h5>
                    <ul className="space-y-1 ml-4">
                      <li>• Furniture, computers, and other library facilities must be used responsibly.</li>
                      <li>• Any misconduct, theft, or damage to property will lead to suspension of library privileges.</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">8. Suggestions and Feedback</h5>
                    <ul className="space-y-1 ml-4">
                      <li>• Members are encouraged to provide suggestions to improve library services, especially for rural youth and community engagement.</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-college-blue">Borrowing Policy</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-sm text-gray-700">
                    <h5 className="font-medium">Borrowing Limits & Duration:</h5>
                    <ul className="space-y-1">
                      <li>• <strong>Students:</strong> May borrow 2 books for 15 days</li>
                      <li>• <strong>Faculty:</strong> May borrow 10 books for 30 days</li>
                      <li>• <strong>Research Scholars:</strong> May borrow 5 books for 21 days</li>
                      <li>• <strong>Renewal:</strong> Renewal is allowed once if the book has no pending reservations</li>
                    </ul>
                  </div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <h5 className="font-medium">Fines & Policies:</h5>
                    <ul className="space-y-1">
                      <li>• <strong>Overdue Fine:</strong> ₹1 per day for each overdue book</li>
                      <li>• <strong>Lost Books:</strong> Any lost or damaged book must be replaced or compensated at the current value</li>
                    </ul>
                  </div>
                </div>
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
              {achievements.map((achievement, index) => <div key={index} className="flex items-center p-3 bg-yellow-50 rounded-lg">
                  <Award className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium">{achievement}</span>
                </div>)}
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
                <img src="/lovable-uploads/ab0cf371-3554-4dd8-8788-77c2c2ec991d.png" alt="Sri Sajja Srinivasa Rao - Chief Librarian" className="w-full max-w-sm mx-auto rounded-lg shadow-md" />
              </div>
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-college-blue mb-1">Sri Sajja Srinivasa Rao</h3>
                  <p className="text-lg text-gray-600 mb-4">Chief Librarian</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Qualifications</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• M.C.M – Master in Computer Management</li>
                      <li>• MLIS – Master in Library and Information Science</li>
                      <li>• 35+ years' Experience</li>
                      <li>• Skillful in Computer Science</li>
                      <li>• Skillful in PC troubleshooting and networking</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Contact Information</h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-college-blue" />
                        <span>Srinivas.svrm@gmail.com</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-college-blue" />
                        <span>+91-9963465428</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-college-blue" />
                        <span>Central Library Building, Ground Floor</span>
                      </div>
                    </div>
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
            {staffLoading ? <div className="text-center py-8">Loading staff information...</div> : libraryStaff.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {libraryStaff
                  .sort((a, b) => {
                    // HODs first, then others alphabetically
                    const aIsHOD = a.designation.toLowerCase().includes('hod') || a.designation.toLowerCase().includes('head of department');
                    const bIsHOD = b.designation.toLowerCase().includes('hod') || b.designation.toLowerCase().includes('head of department');
                    
                    if (aIsHOD && !bIsHOD) return -1;
                    if (!aIsHOD && bIsHOD) return 1;
                    return a.name.localeCompare(b.name);
                  })
                  .map(staff => <div key={staff.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={staff.photo_url || ""} alt={staff.name} />
                        <AvatarFallback>{getInitials(staff.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold text-college-blue">{staff.name}</h3>
                        <p className="text-gray-600">{staff.designation}</p>
                        {staff.department && <Badge variant="secondary" className="mt-1">
                            {staff.department}
                          </Badge>}
                      </div>
                    </div>

                    {staff.qualification && <div className="mb-3">
                        <h4 className="font-medium text-sm mb-1">Qualifications</h4>
                        <p className="text-sm text-gray-600">{staff.qualification}</p>
                      </div>}

                    {staff.experience && <div className="mb-3">
                        <h4 className="font-medium text-sm mb-1">Experience</h4>
                        <p className="text-sm text-gray-600">{staff.experience}</p>
                      </div>}

                    {(staff.email || staff.phone) && <div className="space-y-2">
                        {staff.email && <div className="flex items-center text-sm text-gray-600">
                            <Mail className="h-4 w-4 mr-2 text-college-blue" />
                            <span>{staff.email}</span>
                          </div>}
                        {staff.phone && <div className="flex items-center text-sm text-gray-600">
                            <Phone className="h-4 w-4 mr-2 text-college-blue" />
                            <span>{staff.phone}</span>
                          </div>}
                      </div>}

                    {staff.bio && <div className="mt-3 pt-3 border-t">
                        <p className="text-sm text-gray-700">
                          {staff.bio.length > 100 ? `${staff.bio.substring(0, 100)}...` : staff.bio}
                        </p>
                      </div>}
                  </div>)}
              </div> : <div className="text-center py-8 text-gray-500">
                No staff information available for the Library department.
                <br />
                <span className="text-sm">Staff can be added through the admin panel.</span>
              </div>}
          </CardContent>
        </Card>

        {/* Photo Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Photo Gallery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={image} 
                    alt={`Library Gallery ${index + 1}`} 
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
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
                    <span>Monday - Saturday:</span>
                    <span className="font-medium">9:00 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Public Holidays:</span>
                    <span className="font-medium text-red-600">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Summer Timings:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
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
                    <span>+91-9963465428</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-college-blue" />
                    <span>Central Library Building, Ground Floor</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>;
};
export default Library;