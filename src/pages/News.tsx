
import Layout from "@/components/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const News = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const newsItems = [
    {
      id: 100,
      title: "SVRMC Students Excel in National Robotics Competition",
      date: "May 20, 2025",
      image: "/lovable-uploads/60af87cc-1db6-4454-a9d2-88641715b200.png",
      excerpt: "Our students showcased exceptional talent and innovation at the National Robotics Competition, winning top honors in multiple categories.",
      category: "Achievements"
    },
    {
      id: 1,
      title: "College Secures Top Rank in State Engineering Rankings",
      date: "May 18, 2025",
      image: "https://source.unsplash.com/random/300x200?campus,1",
      excerpt: "SVRMC has been ranked among the top engineering colleges in the state, recognizing our commitment to academic excellence and innovation.",
      category: "Rankings"
    },
    {
      id: 2,
      title: "New Research Center Inaugurated by Education Minister",
      date: "May 14, 2025",
      image: "/lovable-uploads/52a8e7b1-5b22-4a0c-b1ec-450f99bfa9bb.png",
      excerpt: "The state-of-the-art research center was inaugurated by the Education Minister, enhancing our capabilities in advanced research.",
      category: "Infrastructure"
    },
    {
      id: 3,
      title: "Annual Technical Symposium Attracts Industry Leaders",
      date: "May 10, 2025",
      image: "https://source.unsplash.com/random/300x200?conference",
      excerpt: "The annual technical symposium saw participation from leading industry experts who shared insights on emerging technologies.",
      category: "Events"
    },
    {
      id: 4,
      title: "SVRMC Signs MoU with International Universities",
      date: "May 5, 2025",
      image: "https://source.unsplash.com/random/300x200?university",
      excerpt: "The college has signed Memorandums of Understanding with multiple international universities to facilitate student exchange programs.",
      category: "Partnerships"
    },
    {
      id: 5,
      title: "Campus Placement Drive Sees Record Offers",
      date: "April 28, 2025",
      image: "https://source.unsplash.com/random/300x200?interview",
      excerpt: "Over 95% of eligible students received job offers during this year's campus placement drive, setting a new record.",
      category: "Placements"
    }
  ];
  
  const filteredNews = newsItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">College News & Updates</h1>
          <p className="text-lg text-gray-600 mb-6">Stay updated with the latest news, events, and achievements at SVRMC</p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Search news..." 
              className="pl-10 py-6"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Featured News */}
        <div className="mb-12">
          <h2 className="section-title mb-8">Featured News</h2>
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <img 
                src="/lovable-uploads/60af87cc-1db6-4454-a9d2-88641715b200.png" 
                alt="SVRMC Students Excel in National Robotics Competition" 
                className="w-full h-full object-cover max-h-[400px] lg:max-h-none"
              />
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Achievements
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> May 20, 2025
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">SVRMC Students Excel in National Robotics Competition</h3>
                <p className="text-gray-600 mb-6">
                  Our students showcased exceptional talent and innovation at the National Robotics Competition, winning top honors in multiple categories. The team's innovative approach to solving complex robotics challenges impressed the judges and established SVRMC's position as a leader in technology education.
                </p>
                <Button className="w-fit" asChild>
                  <Link to="/news/100">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
        
        {/* All News */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title">Latest Updates</h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" /> Filter News
            </Button>
          </div>
          
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-medium bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
                        {news.category}
                      </span>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{news.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{news.excerpt}</p>
                    <Link 
                      to={`/news/${news.id}`} 
                      className="text-college-blue hover:underline inline-flex items-center font-medium"
                    >
                      Read More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No news found matching "{searchQuery}"</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or browse all our news below</p>
              <Button onClick={() => setSearchQuery("")}>View All News</Button>
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">Load More News</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default News;
