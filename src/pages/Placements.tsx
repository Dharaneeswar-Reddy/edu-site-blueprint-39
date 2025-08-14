
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Building, Users, Award, TrendingUp } from "lucide-react";

const Placements = () => {
  const topRecruiters = [
    "Microsoft", "TCS", "Infosys", "Wipro", "Amazon", 
    "IBM", "Accenture", "L&T Infotech", "Cognizant", "Tech Mahindra"
  ];

  const placementStats = [
    { year: "2024-25", placed: 382, totalStudents: 425, percentagePlaced: 90 },
    { year: "2023-24", placed: 364, totalStudents: 412, percentagePlaced: 88 },
    { year: "2022-23", placed: 345, totalStudents: 401, percentagePlaced: 86 },
    { year: "2021-22", placed: 302, totalStudents: 376, percentagePlaced: 80 }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-college-blue mb-4">Campus Placements</h1>
            <p className="text-gray-600">
              SVRMC takes pride in its impressive placement record with top companies across various sectors.
              Our dedicated Training and Placement Cell works tirelessly to prepare students for the industry.
            </p>
          </div>

          {/* Placement Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto p-3 rounded-full bg-blue-100">
                  <Briefcase className="h-6 w-6 text-college-blue" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-bold text-college-blue mt-3">90%+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Placement Rate</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto p-3 rounded-full bg-blue-100">
                  <Building className="h-6 w-6 text-college-blue" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-bold text-college-blue mt-3">150+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Recruiting Companies</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto p-3 rounded-full bg-blue-100">
                  <Award className="h-6 w-6 text-college-blue" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-bold text-college-blue mt-3">18 LPA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Highest Package</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto p-3 rounded-full bg-blue-100">
                  <TrendingUp className="h-6 w-6 text-college-blue" />
                </div>
                <CardTitle className="text-2xl lg:text-3xl font-bold text-college-blue mt-3">6.5 LPA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Average Package</p>
              </CardContent>
            </Card>
          </div>

          {/* Placement Statistics */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-college-blue">Placement Statistics</CardTitle>
              <CardDescription>Year-wise placement details of our students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border px-4 py-2 text-left">Academic Year</th>
                      <th className="border px-4 py-2 text-left">Students Placed</th>
                      <th className="border px-4 py-2 text-left">Total Students</th>
                      <th className="border px-4 py-2 text-left">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placementStats.map((stat, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border px-4 py-2">{stat.year}</td>
                        <td className="border px-4 py-2">{stat.placed}</td>
                        <td className="border px-4 py-2">{stat.totalStudents}</td>
                        <td className="border px-4 py-2">{stat.percentagePlaced}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Top Recruiters */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-college-blue">Our Top Recruiters</CardTitle>
              <CardDescription>Leading companies that recruit from our campus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {topRecruiters.map((company, index) => (
                  <div 
                    key={index} 
                    className="border rounded-md p-4 flex items-center justify-center h-20 bg-white hover:shadow-md transition-shadow"
                  >
                    <span className="font-medium text-gray-700">{company}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Training Programs */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-college-blue mb-4">Pre-Placement Training</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Our comprehensive training programs prepare students for successful careers by focusing on technical skills, 
              personality development, communication skills, and interview preparation.
            </p>
            
            <Button variant="outline" className="hover:bg-college-blue hover:text-white" asChild>
              <Link to="/contact" className="flex items-center">
                Contact Placement Cell <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Placements;
