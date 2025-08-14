
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Award, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Scholarships = () => {
  const meritScholarships = [
    {
      name: "Principal's Merit Scholarship",
      eligibility: "Students with 95% and above in previous academic year",
      amount: "₹50,000 per annum",
      deadline: "June 30, 2025",
      status: "Open"
    },
    {
      name: "Academic Excellence Scholarship",
      eligibility: "Students with 90% and above in previous academic year",
      amount: "₹30,000 per annum",
      deadline: "June 30, 2025",
      status: "Open"
    },
    {
      name: "Department Topper Scholarship",
      eligibility: "Top 3 students in each department",
      amount: "₹25,000 per annum",
      deadline: "Based on results",
      status: "Automatic"
    }
  ];
  
  const needBasedScholarships = [
    {
      name: "Financial Need Scholarship",
      eligibility: "Students from economically weaker sections with family income below ₹2.5 lakhs per annum",
      amount: "Up to ₹40,000 per annum",
      deadline: "July 15, 2025",
      status: "Open"
    },
    {
      name: "First Generation Learners Scholarship",
      eligibility: "First generation college students with good academic performance",
      amount: "Up to ₹35,000 per annum",
      deadline: "July 15, 2025",
      status: "Open"
    }
  ];
  
  const specialCategoryScholarships = [
    {
      name: "Sports Excellence Scholarship",
      eligibility: "Students with national or state level achievements in sports",
      amount: "Up to ₹50,000 per annum",
      deadline: "August 15, 2025",
      status: "Open"
    },
    {
      name: "Cultural Talent Scholarship",
      eligibility: "Students with exceptional achievements in arts, music, dance, etc.",
      amount: "Up to ₹30,000 per annum",
      deadline: "August 15, 2025",
      status: "Open"
    },
    {
      name: "Differently Abled Student Scholarship",
      eligibility: "Students with disabilities as per government norms",
      amount: "Up to ₹40,000 per annum",
      deadline: "July 30, 2025",
      status: "Open"
    }
  ];

  const govtScholarships = [
    {
      name: "Central Sector Scholarship",
      eligibility: "Students with family income below ₹6 lakhs per annum and min 80% marks",
      amount: "Based on government norms",
      deadline: "Varies as per govt. notification",
      status: "Check official website"
    },
    {
      name: "State Merit Scholarship",
      eligibility: "State toppers in qualifying examinations",
      amount: "As per state government norms",
      deadline: "Varies as per govt. notification",
      status: "Check official website"
    },
    {
      name: "Post Matric Scholarship for SC/ST/OBC",
      eligibility: "Students belonging to SC/ST/OBC categories",
      amount: "As per government norms",
      deadline: "Varies as per govt. notification",
      status: "Check official website"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "Open":
        return <Badge className="bg-green-500">Open</Badge>;
      case "Closed":
        return <Badge variant="destructive">Closed</Badge>;
      case "Automatic":
        return <Badge className="bg-blue-500">Automatic</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-college-blue mb-4">Scholarships</h1>
            <p className="text-gray-600">
              SVRMC offers various scholarships to help students achieve their academic goals.
              Explore the scholarships available and find the right financial support for your education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto p-3 rounded-full bg-blue-100">
                  <Award className="h-6 w-6 text-college-blue" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">12+ College Scholarships</h3>
                <p className="text-gray-600 text-sm">Internal scholarships awarded by the college</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto p-3 rounded-full bg-blue-100">
                  <Users className="h-6 w-6 text-college-blue" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">500+ Students Benefited</h3>
                <p className="text-gray-600 text-sm">Students receiving financial aid annually</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader className="pb-2">
                <div className="mx-auto p-3 rounded-full bg-blue-100">
                  <Calendar className="h-6 w-6 text-college-blue" />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold">₹2.5+ Crores</h3>
                <p className="text-gray-600 text-sm">Total scholarship amount disbursed yearly</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            <Card id="merit">
              <CardHeader className="bg-blue-50">
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-college-blue" />
                  <CardTitle>Merit-Based Scholarships</CardTitle>
                </div>
                <CardDescription>Scholarships awarded based on academic performance</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {meritScholarships.map((scholarship, index) => (
                    <div key={index} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg text-college-blue">{scholarship.name}</h3>
                        {getStatusBadge(scholarship.status)}
                      </div>
                      <p className="text-sm text-gray-700 mt-2"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                      <p className="text-sm text-gray-700 mt-1"><strong>Amount:</strong> {scholarship.amount}</p>
                      <p className="text-sm text-gray-700 mt-1"><strong>Deadline:</strong> {scholarship.deadline}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card id="need-based">
              <CardHeader className="bg-green-50">
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-green-600" />
                  <CardTitle>Need-Based Scholarships</CardTitle>
                </div>
                <CardDescription>Scholarships awarded based on financial need</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {needBasedScholarships.map((scholarship, index) => (
                    <div key={index} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg text-college-blue">{scholarship.name}</h3>
                        {getStatusBadge(scholarship.status)}
                      </div>
                      <p className="text-sm text-gray-700 mt-2"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                      <p className="text-sm text-gray-700 mt-1"><strong>Amount:</strong> {scholarship.amount}</p>
                      <p className="text-sm text-gray-700 mt-1"><strong>Deadline:</strong> {scholarship.deadline}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card id="special-category">
              <CardHeader className="bg-purple-50">
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-purple-600" />
                  <CardTitle>Special Category Scholarships</CardTitle>
                </div>
                <CardDescription>Scholarships for students with special talents or needs</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {specialCategoryScholarships.map((scholarship, index) => (
                    <div key={index} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg text-college-blue">{scholarship.name}</h3>
                        {getStatusBadge(scholarship.status)}
                      </div>
                      <p className="text-sm text-gray-700 mt-2"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                      <p className="text-sm text-gray-700 mt-1"><strong>Amount:</strong> {scholarship.amount}</p>
                      <p className="text-sm text-gray-700 mt-1"><strong>Deadline:</strong> {scholarship.deadline}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card id="government">
              <CardHeader className="bg-amber-50">
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-amber-600" />
                  <CardTitle>Government Scholarships</CardTitle>
                </div>
                <CardDescription>Central and State Government scholarships facilitated through the college</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {govtScholarships.map((scholarship, index) => (
                    <div key={index} className="border rounded-md p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-lg text-college-blue">{scholarship.name}</h3>
                        {getStatusBadge(scholarship.status)}
                      </div>
                      <p className="text-sm text-gray-700 mt-2"><strong>Eligibility:</strong> {scholarship.eligibility}</p>
                      <p className="text-sm text-gray-700 mt-1"><strong>Amount:</strong> {scholarship.amount}</p>
                      <p className="text-sm text-gray-700 mt-1"><strong>Deadline:</strong> {scholarship.deadline}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Apply</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-3">
                  <li>Download the scholarship application form from the college website or collect it from the Scholarship Cell.</li>
                  <li>Fill in the application form completely with accurate information.</li>
                  <li>Attach all required documents as mentioned in the application form.</li>
                  <li>Submit the completed application to the Scholarship Cell before the deadline.</li>
                  <li>Track your application status through the student portal.</li>
                </ol>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="mt-4" asChild>
                  <Link to="/contact" className="flex items-center">
                    Contact Scholarship Cell <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarships;
