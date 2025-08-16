import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, Search, Clock, Users, Download, Globe } from "lucide-react";

const Library = () => {
  return (
    <PageLayout 
      title="Library" 
      description="Central Library - A treasure trove of knowledge and learning resources for students and faculty."
    >
      <div className="space-y-8">
        
        {/* Library Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <Book className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">25,000+</h3>
              <p className="text-gray-600">Books</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Globe className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">500+</h3>
              <p className="text-gray-600">E-Books</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">150</h3>
              <p className="text-gray-600">Seating Capacity</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Clock className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">12 hrs</h3>
              <p className="text-gray-600">Daily Open</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Access */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Access</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Search className="h-6 w-6 mb-2" />
                <span>Online Catalog</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Download className="h-6 w-6 mb-2" />
                <span>E-Resources</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center">
                <Book className="h-6 w-6 mb-2" />
                <span>Digital Library</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Library Services */}
        <Card>
          <CardHeader>
            <CardTitle>Library Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">For Students</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Book lending and returning</li>
                  <li>• Reference and consultation services</li>
                  <li>• Internet and computer access</li>
                  <li>• Photocopying facilities</li>
                  <li>• Group study rooms</li>
                  <li>• Career guidance resources</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">For Faculty</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Research support services</li>
                  <li>• Inter-library loan facility</li>
                  <li>• Database access</li>
                  <li>• Book recommendation system</li>
                  <li>• Thesis and dissertation binding</li>
                  <li>• Academic writing support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Collections */}
        <Card>
          <CardHeader>
            <CardTitle>Library Collections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-blue-700">Science & Technology</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Physics - 2,500 books</li>
                  <li>• Chemistry - 2,200 books</li>
                  <li>• Mathematics - 1,800 books</li>
                  <li>• Computer Science - 2,000 books</li>
                  <li>• Biotechnology - 1,500 books</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-700">Humanities & Social Sciences</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Literature - 3,000 books</li>
                  <li>• History - 1,200 books</li>
                  <li>• Political Science - 1,000 books</li>
                  <li>• Economics - 1,500 books</li>
                  <li>• Philosophy - 800 books</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Special Collections</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Rare Books Collection</li>
                  <li>• Local History Archives</li>
                  <li>• Government Publications</li>
                  <li>• Thesis Collection</li>
                  <li>• Periodicals & Journals</li>
                </ul>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">General Rules</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Maintain silence in the library</li>
                  <li>• Keep mobile phones on silent mode</li>
                  <li>• No food or drinks allowed</li>
                  <li>• Handle books with care</li>
                  <li>• Return books on due date</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Borrowing Policy</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Students: 3 books for 15 days</li>
                  <li>• Faculty: 10 books for 30 days</li>
                  <li>• Renewal: 1 time if no reservation</li>
                  <li>• Fine: ₹2 per day for overdue books</li>
                  <li>• Replacement cost for lost books</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Library Timings */}
        <Card>
          <CardHeader>
            <CardTitle>Library Timings & Contact</CardTitle>
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
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Contact Information</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Librarian: Dr. Priya Sharma</p>
                  <p>Phone: +91-863-2345679</p>
                  <p>Email: library@svrmc.edu.in</p>
                  <p>Location: Main Building, 2nd Floor</p>
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