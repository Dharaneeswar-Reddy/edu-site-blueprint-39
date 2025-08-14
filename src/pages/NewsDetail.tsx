
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft, Calendar, Share2, Bookmark, Printer, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NewsDetail = () => {
  const { id } = useParams();
  const newsId = Number(id);
  
  const newsItems = {
    100: {
      title: "SVRMC Students Excel in National Robotics Competition",
      date: "May 20, 2025",
      image: "/lovable-uploads/60af87cc-1db6-4454-a9d2-88641715b200.png",
      content: `
        <p class="mb-4">The robotics team from Shri Velagapudi Ramakrishna Memorial College has achieved remarkable success at the National Robotics Competition held in Delhi last week. The team, comprising six undergraduate students from the Department of Mechanical Engineering and Computer Science, secured first place in the "Advanced Robotics Challenge" category and second place in the "Innovation in Automation" category.</p>
        
        <p class="mb-4">The competition, which saw participation from over 50 prestigious institutions across the country, tested participants' skills in designing, building, and programming robots to perform complex tasks. SVRMC's team impressed the judges with their innovative approach to solving the challenges and their technical prowess.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Innovative Design</h3>
        
        <p class="mb-4">The team's robot, named "Svayam," featured an advanced computer vision system that allowed it to identify and manipulate objects with remarkable precision. The design incorporated cutting-edge sensors and a custom-built control system that enabled swift adaptation to changing environmental conditions.</p>
        
        <p class="mb-4">"Our focus was on creating a versatile robot that could handle multiple tasks efficiently," said team leader Priya Sharma. "We spent months refining the design and programming algorithms to ensure optimal performance."</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Recognition from Industry Experts</h3>
        
        <p class="mb-4">The team's achievement has garnered recognition from industry experts, with several technology companies expressing interest in the students' work. Dr. Rajesh Kumar, Head of the Department of Mechanical Engineering, highlighted the significance of this accomplishment.</p>
        
        <p class="mb-4">"This victory demonstrates our students' exceptional talent and dedication," said Dr. Kumar. "It also underscores SVRMC's commitment to fostering innovation and providing students with opportunities to apply their theoretical knowledge in practical scenarios."</p>
      `,
      author: "Prof. Anuradha Sharma",
      authorRole: "Faculty Coordinator, Robotics Club",
      category: "Achievements",
      tags: ["Robotics", "Competition", "Student Achievement", "Technology"]
    },
    1: {
      title: "College Secures Top Rank in State Engineering Rankings",
      date: "May 18, 2025",
      image: "https://source.unsplash.com/random/800x400?campus,1",
      content: `
        <p class="mb-4">Shri Velagapudi Ramakrishna Memorial College has been ranked among the top engineering colleges in the state, recognizing our commitment to academic excellence and innovation. This prestigious recognition is based on a comprehensive assessment of various parameters, including academic performance, research output, infrastructure, faculty qualifications, and placement records.</p>
        
        <p class="mb-4">The rankings were announced by the State Higher Education Department after a rigorous evaluation process that involved on-site inspections and detailed analysis of data submitted by participating institutions.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Factors Contributing to the Success</h3>
        
        <p class="mb-4">Several factors contributed to SVRMC's outstanding performance in the rankings. The college's focus on research and innovation has resulted in numerous publications in reputed international journals and patents filed by faculty members and students.</p>
        
        <p class="mb-4">The state-of-the-art infrastructure, including advanced laboratories, modern classrooms, and digital learning resources, has created an environment conducive to learning and experimentation.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Principal's Message</h3>
        
        <p class="mb-4">Expressing pride in this achievement, Prof. M.S. Rao, Principal of SVRMC, said, "This recognition is a testament to the hard work and dedication of our faculty, staff, and students. We will continue to strive for excellence in education and research, with a focus on preparing students to meet the challenges of the evolving global scenario."</p>
      `,
      author: "Dr. K. Venkatesh",
      authorRole: "IQAC Coordinator",
      category: "Rankings",
      tags: ["Rankings", "Achievement", "Engineering Education", "Academic Excellence"]
    },
    2: {
      title: "New Research Center Inaugurated by Education Minister",
      date: "May 14, 2025",
      image: "/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png",
      content: `
        <p class="mb-4">The state-of-the-art research center at Shri Velagapudi Ramakrishna Memorial College was inaugurated by the Education Minister in a ceremony attended by distinguished guests, faculty members, and students. The new facility is designed to enhance the college's capabilities in advanced research across multiple disciplines.</p>
        
        <p class="mb-4">Equipped with cutting-edge technology and modern laboratories, the research center aims to foster innovation and provide a platform for collaborative research between academia and industry.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Features of the Research Center</h3>
        
        <p class="mb-4">The research center houses specialized laboratories for biotechnology, artificial intelligence, robotics, and materials science. It also includes a high-performance computing facility, a prototyping lab, and conference rooms for seminars and workshops.</p>
        
        <p class="mb-4">"This center represents our commitment to pushing the boundaries of knowledge and contributing to societal development through scientific research," said Prof. Raghavan, Director of the Research Center.</p>
        
        <h3 class="text-xl font-bold mb-2 mt-6">Education Minister's Address</h3>
        
        <p class="mb-4">In his inaugural address, the Education Minister emphasized the importance of research in higher education and commended SVRMC for its initiatives in promoting a culture of innovation and inquiry.</p>
        
        <p class="mb-4">"Institutions like SVRMC play a crucial role in advancing the nation's research capabilities and nurturing the next generation of scientists and innovators," the Minister stated. "This research center will not only benefit the students and faculty but also contribute to addressing real-world challenges through scientific solutions."</p>
      `,
      author: "Dr. Lakshmi Narayan",
      authorRole: "Director of Research",
      category: "Infrastructure",
      tags: ["Research", "Innovation", "Infrastructure", "Laboratory"]
    }
  };
  
  const currentNews = newsItems[newsId as keyof typeof newsItems];
  
  if (!currentNews) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">News article not found</h1>
          <p className="mb-8">The news article you are looking for does not exist or has been removed.</p>
          <Button asChild>
            <Link to="/news">Back to News</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedNews = Object.entries(newsItems)
    .filter(([key]) => Number(key) !== newsId)
    .map(([key, value]) => ({
      id: Number(key),
      title: value.title,
      date: value.date,
      image: value.image,
      category: value.category
    }))
    .slice(0, 3);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" className="pl-0 hover:bg-transparent" asChild>
            <Link to="/news" className="flex items-center text-gray-600 hover:text-college-blue">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to News
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={currentNews.image} 
                alt={currentNews.title} 
                className="w-full h-[400px] object-cover"
              />
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {currentNews.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> {currentNews.date}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold mb-6">{currentNews.title}</h1>
                
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 bg-college-blue rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {currentNews.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{currentNews.author}</p>
                    <p className="text-sm text-gray-500">{currentNews.authorRole}</p>
                  </div>
                </div>
                
                <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: currentNews.content }} />
                
                <div className="flex flex-wrap gap-2 mt-8">
                  {currentNews.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="border-t border-gray-200 mt-8 pt-6">
                  <div className="flex flex-wrap gap-4 items-center justify-between">
                    <p className="text-gray-600">Share this article:</p>
                    <div className="flex gap-3">
                      <Button variant="ghost" size="sm" className="rounded-full">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full">
                        <Printer className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-bold mb-4">Related News</h3>
              <div className="space-y-4">
                {relatedNews.map((news) => (
                  <Card key={news.id} className="hover:shadow-md transition-all">
                    <CardContent className="p-4 flex gap-3">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-24 h-24 object-cover rounded"
                      />
                      <div>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
                          {news.category}
                        </span>
                        <h4 className="font-medium line-clamp-2 mt-1 mb-1">
                          <Link to={`/news/${news.id}`} className="hover:text-college-blue transition-colors">
                            {news.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-gray-500">{news.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h3 className="font-bold mb-3">Categories</h3>
                <ul className="space-y-2">
                  <li><Link to="/news?category=Achievements" className="text-gray-600 hover:text-college-blue">Achievements</Link></li>
                  <li><Link to="/news?category=Events" className="text-gray-600 hover:text-college-blue">Events</Link></li>
                  <li><Link to="/news?category=Rankings" className="text-gray-600 hover:text-college-blue">Rankings</Link></li>
                  <li><Link to="/news?category=Infrastructure" className="text-gray-600 hover:text-college-blue">Infrastructure</Link></li>
                  <li><Link to="/news?category=Placements" className="text-gray-600 hover:text-college-blue">Placements</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetail;
