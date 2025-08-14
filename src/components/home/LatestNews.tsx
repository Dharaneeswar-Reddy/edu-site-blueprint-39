
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface LatestNewsProps {
  news: NewsItem[];
}

const LatestNews = ({ news }: LatestNewsProps) => {
  // Add the robotics competition news as a featured item
  const featuredNews = {
    id: 100,
    title: "SVRMC Students Excel in National Robotics Competition",
    date: "May 20, 2025",
    image: "/lovable-uploads/0708f036-44a6-4d70-817d-74a8097f1e73.png",
    excerpt: "Our students showcased exceptional talent and innovation at the National Robotics Competition, winning top honors in multiple categories."
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="section-title">Latest News</h2>
        <Button variant="link" className="text-college-blue flex items-center" asChild>
          <Link to="/news">
            View All News <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Featured News */}
      <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <img 
            src={featuredNews.image} 
            alt={featuredNews.title} 
            className="w-full h-full object-cover max-h-[300px] md:max-h-none"
          />
          <CardContent className="p-6 flex flex-col justify-center">
            <div className="bg-college-blue text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
              Featured
            </div>
            <p className="text-sm text-muted-foreground mb-2">{featuredNews.date}</p>
            <h3 className="font-bold text-xl mb-3">{featuredNews.title}</h3>
            <p className="mb-4 text-gray-600">{featuredNews.excerpt}</p>
            <Link to={`/news/${featuredNews.id}`} className="text-college-blue hover:underline inline-flex items-center font-medium">
              Read Full Story <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </CardContent>
        </div>
      </Card>

      {/* Regular News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {news.map((newsItem, index) => (
          <Card 
            key={newsItem.id} 
            className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in cursor-pointer hover-scale"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img 
              src={newsItem.image} 
              alt={newsItem.title} 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-2">{newsItem.date}</p>
              <h3 className="font-bold text-lg mb-2">{newsItem.title}</h3>
              <Link to={`/news/${newsItem.id}`} className="text-college-blue hover:underline inline-flex items-center">
                Read More <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
