import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, Eye, Calendar, Users, Award } from "lucide-react";

const Magazines = () => {
  const magazines = [
    {
      title: "SVRMC Quarterly",
      description: "Official college magazine featuring academic achievements, research highlights, and student activities",
      type: "Academic",
      frequency: "Quarterly",
      latestIssue: "Vol. 15, Issue 2 - Winter 2024",
      cover: "/placeholder.svg"
    },
    {
      title: "Science Spectrum",
      description: "Research journal showcasing scientific innovations and discoveries by faculty and students",
      type: "Research",
      frequency: "Bi-annual",
      latestIssue: "Vol. 8, Issue 1 - 2024",
      cover: "/placeholder.svg"
    },
    {
      title: "Literary Waves",
      description: "Creative writing magazine featuring poetry, short stories, and essays by the college community",
      type: "Literary",
      frequency: "Annual",
      latestIssue: "Vol. 12 - 2024",
      cover: "/placeholder.svg"
    },
    {
      title: "Cultural Canvas",
      description: "Showcase of cultural activities, festivals, and artistic expressions within the campus",
      type: "Cultural",
      frequency: "Annual",
      latestIssue: "Vol. 10 - 2024",
      cover: "/placeholder.svg"
    }
  ];

  const archives = [
    { year: "2024", issues: 8 },
    { year: "2023", issues: 12 },
    { year: "2022", issues: 10 },
    { year: "2021", issues: 9 },
    { year: "2020", issues: 8 }
  ];

  return (
    <PageLayout 
      title="Magazines & Publications" 
      description="Explore our diverse collection of magazines and publications showcasing academic excellence and creative expressions."
    >
      <div className="space-y-8">
        
        {/* Overview Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">4</h3>
              <p className="text-gray-600">Active Publications</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">150+</h3>
              <p className="text-gray-600">Contributors</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">25+</h3>
              <p className="text-gray-600">Awards Won</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Download className="h-8 w-8 text-college-blue mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-college-blue">10K+</h3>
              <p className="text-gray-600">Downloads</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Magazines */}
        <Card>
          <CardHeader>
            <CardTitle>Current Publications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {magazines.map((magazine, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{magazine.title}</h3>
                      <div className="flex gap-2 mb-3">
                        <Badge variant="secondary">{magazine.type}</Badge>
                        <Badge variant="outline">{magazine.frequency}</Badge>
                      </div>
                    </div>
                    <img 
                      src={magazine.cover} 
                      alt={`${magazine.title} cover`}
                      className="w-16 h-20 object-cover rounded border"
                    />
                  </div>
                  
                  <p className="text-gray-600 mb-4">{magazine.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium">Latest Issue:</p>
                    <p className="text-sm text-gray-600">{magazine.latestIssue}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      Read Online
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Latest Articles */}
        <Card>
          <CardHeader>
            <CardTitle>Featured Articles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-college-blue pl-4 py-2">
                <h4 className="font-semibold">AI in Education: Transforming Learning Paradigms</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Dr. Priya Sharma explores the integration of artificial intelligence in modern educational practices.
                </p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  Published in Science Spectrum, Vol. 8, Issue 1
                </div>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-semibold">Sustainable Campus Initiatives: A Green Revolution</h4>
                <p className="text-sm text-gray-600 mt-1">
                  An overview of environmental conservation efforts undertaken by SVRMC community.
                </p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  Published in SVRMC Quarterly, Vol. 15, Issue 2
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-semibold">Student Poetry Collection: Voices of Tomorrow</h4>
                <p className="text-sm text-gray-600 mt-1">
                  A compilation of creative works by literature students reflecting contemporary themes.
                </p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <Calendar className="h-3 w-3 mr-1" />
                  Published in Literary Waves, Vol. 12
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submission Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">For Research Articles</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Original research work only</li>
                    <li>• Peer review process</li>
                    <li>• APA citation format</li>
                    <li>• Maximum 5000 words</li>
                    <li>• Include abstract and keywords</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">For Creative Writing</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Poetry: Maximum 50 lines</li>
                    <li>• Short stories: Maximum 2000 words</li>
                    <li>• Essays: Maximum 1500 words</li>
                    <li>• Original content required</li>
                    <li>• Proper formatting guidelines</li>
                  </ul>
                </div>
              </div>
              
              <Button className="w-full mt-4">Submit Article</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Archives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {archives.map((archive, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <span className="font-medium">{archive.year}</span>
                      <span className="text-sm text-gray-600 ml-2">({archive.issues} issues)</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Access
                    </Button>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                View Complete Archive
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Editorial Board */}
        <Card>
          <CardHeader>
            <CardTitle>Editorial Board</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold">Chief Editor</h4>
                <p className="text-gray-600">Dr. Rajesh Kumar</p>
                <p className="text-sm text-gray-500">Professor, English Department</p>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold">Associate Editor</h4>
                <p className="text-gray-600">Dr. Meera Patel</p>
                <p className="text-sm text-gray-500">Associate Professor, Physics</p>
              </div>
              
              <div className="text-center">
                <h4 className="font-semibold">Student Editor</h4>
                <p className="text-gray-600">Arjun Reddy</p>
                <p className="text-sm text-gray-500">Final Year, Computer Science</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Publications Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Submissions & Queries</h4>
                <p className="text-gray-600">Email: publications@svrmc.edu.in</p>
                <p className="text-gray-600">Phone: +91-863-2345681</p>
                <p className="text-gray-600">Office: Library Building, 1st Floor</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Publication Schedule</h4>
                <p className="text-gray-600">Quarterly: March, June, Sept, Dec</p>
                <p className="text-gray-600">Annual: December</p>
                <p className="text-gray-600">Submission Deadline: 15th of previous month</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </PageLayout>
  );
};

export default Magazines;