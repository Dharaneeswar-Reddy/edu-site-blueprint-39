
import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Results = () => {
  const [regno, setRegno] = useState("");
  const [semester, setSemester] = useState("");
  const [isResult, setIsResult] = useState(false);
  const { toast } = useToast();

  const sampleResult = {
    name: "Student Name",
    regno: "SVR190001",
    department: "Computer Science Engineering",
    semester: "5",
    results: [
      { subject: "Computer Networks", code: "CS501", credits: 4, grade: "A", status: "Pass" },
      { subject: "Database Management Systems", code: "CS502", credits: 4, grade: "A+", status: "Pass" },
      { subject: "Operating Systems", code: "CS503", credits: 3, grade: "B+", status: "Pass" },
      { subject: "Software Engineering", code: "CS504", credits: 3, grade: "A", status: "Pass" },
      { subject: "Computer Architecture", code: "CS505", credits: 3, grade: "B", status: "Pass" },
      { subject: "Web Development Lab", code: "CS506", credits: 2, grade: "O", status: "Pass" },
    ],
    gpa: 9.2
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!regno || !semester) {
      toast({
        title: "Missing Information",
        description: "Please enter both registration number and select semester.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, this would be an API call
    // For demo purposes, we'll just show the sample result
    setTimeout(() => {
      setIsResult(true);
      toast({
        title: "Results Retrieved",
        description: "Successfully fetched results for registration number " + regno,
      });
    }, 1000);
  };

  const resetForm = () => {
    setRegno("");
    setSemester("");
    setIsResult(false);
  };

  const getGradeColor = (grade: string) => {
    switch(grade) {
      case "O":
      case "A+":
        return "text-green-600";
      case "A":
        return "text-green-500";
      case "B+":
      case "B":
        return "text-blue-600";
      case "C":
        return "text-yellow-600";
      default:
        return "text-red-600";
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-college-blue mb-4">Examination Results</h1>
            <p className="text-gray-600">
              Enter your registration number and select the semester to view your results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {!isResult ? (
              <Card>
                <CardHeader>
                  <CardTitle>Result Portal</CardTitle>
                  <CardDescription>Enter your details to check results</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="regno">Registration Number</Label>
                        <Input 
                          id="regno" 
                          placeholder="e.g. SVR190001" 
                          value={regno}
                          onChange={(e) => setRegno(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="semester">Semester</Label>
                        <Select value={semester} onValueChange={setSemester}>
                          <SelectTrigger id="semester">
                            <SelectValue placeholder="Select semester" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Semester 1</SelectItem>
                            <SelectItem value="2">Semester 2</SelectItem>
                            <SelectItem value="3">Semester 3</SelectItem>
                            <SelectItem value="4">Semester 4</SelectItem>
                            <SelectItem value="5">Semester 5</SelectItem>
                            <SelectItem value="6">Semester 6</SelectItem>
                            <SelectItem value="7">Semester 7</SelectItem>
                            <SelectItem value="8">Semester 8</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button type="submit" className="w-full">Check Results</Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader className="bg-college-blue text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-white">Semester {sampleResult.semester} Results</CardTitle>
                      <CardDescription className="text-gray-200">
                        {sampleResult.department}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-200">Registration No.</p>
                      <p className="font-medium">{sampleResult.regno}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <h3 className="font-medium text-lg">{sampleResult.name}</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border px-4 py-2 text-left">Subject Code</th>
                          <th className="border px-4 py-2 text-left">Subject Name</th>
                          <th className="border px-4 py-2 text-center">Credits</th>
                          <th className="border px-4 py-2 text-center">Grade</th>
                          <th className="border px-4 py-2 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sampleResult.results.map((subject, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="border px-4 py-2">{subject.code}</td>
                            <td className="border px-4 py-2">{subject.subject}</td>
                            <td className="border px-4 py-2 text-center">{subject.credits}</td>
                            <td className="border px-4 py-2 text-center">
                              <span className={`font-medium ${getGradeColor(subject.grade)}`}>
                                {subject.grade}
                              </span>
                            </td>
                            <td className="border px-4 py-2 text-center">
                              <span className={subject.status === "Pass" ? "text-green-600" : "text-red-600"}>
                                {subject.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="flex justify-between items-center mt-8 p-4 bg-gray-50 rounded-md">
                    <div>
                      <p className="text-sm text-gray-600">Semester GPA</p>
                      <p className="text-2xl font-bold text-college-blue">{sampleResult.gpa}</p>
                    </div>
                    <div>
                      <Button onClick={resetForm}>Check Another Result</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            
            <div className="mt-8 text-sm text-gray-500">
              <p><strong>Note:</strong> For any discrepancy in results, please contact the examination cell within 7 days of result publication.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Results;
