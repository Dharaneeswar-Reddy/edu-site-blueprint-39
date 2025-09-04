
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Grid3X3, GalleryVertical } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import useGalleryImages from "@/hooks/useGalleryImages";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("campus");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
  
  // Fetch dynamic gallery images from database
  const { images: campusImages } = useGalleryImages("campus");
  const { images: eventsImages } = useGalleryImages("events");
  const { images: achievementsImages } = useGalleryImages("achievements");
  const { images: sportsImages } = useGalleryImages("sports");

  // Fallback static images if no dynamic content
  const fallbackGalleryItems = {
    campus: [
      { id: 1, image_url: "/lovable-uploads/9ecf085a-3abc-45e7-844b-b132bfa85970.png", title: "Main Campus Building" },
      { id: 2, image_url: "/lovable-uploads/b010e240-0ffe-43a4-884e-04e9e6094c36.png", title: "College Entrance Gate" },
      { id: 3, image_url: "/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png", title: "Lecture Hall Complex" },
      { id: 4, image_url: "/lovable-uploads/fd7697be-4da9-4c9f-99c3-16a23c2dc964.png", title: "Students Center" },
      { id: 5, image_url: "/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png", title: "Computer Laboratory" },
      { id: 6, image_url: "/lovable-uploads/2132c67c-81c1-4c7b-a949-3054c289f2ce.png", title: "Sports Complex" }
    ],
    events: [
      { id: 1, image_url: "/lovable-uploads/061b3c84-914c-4bb5-893f-d12d6cff9d3f.png", title: "NCC Cadets Formation" },
      { id: 2, image_url: "/lovable-uploads/a2d2ff22-61cc-47fe-8ef4-7086790f77d0.png", title: "NCC Group Photo" },
      { id: 3, image_url: "/lovable-uploads/17bb2e0f-adc8-46fd-b6dc-aa370c366ef2.png", title: "NCC Parade Review" },
      { id: 4, image_url: "/lovable-uploads/c845d941-c566-4910-8dbb-82f90fb04f82.png", title: "NCC Drill Formation" },
      { id: 5, image_url: "/lovable-uploads/b1fc6422-ad59-4662-83db-90f4d62b1001.png", title: "Academic Seminar" },
      { id: 6, image_url: "/lovable-uploads/85f3d76b-36b0-4119-9ae0-75167cea9d0b.png", title: "Lecture Hall" }
    ],
    achievements: [
      { id: 4, image_url: "/lovable-uploads/d870c473-3320-4d6a-9dd4-15ab9ceab52a.png", title: "NBA Accreditation" },
      { id: 5, image_url: "/lovable-uploads/455edc55-96fe-44fc-a8d0-2b69c6dd6e92.png", title: "NAAC A Grade" },
      { id: 6, image_url: "/lovable-uploads/33bce374-c279-4e5c-afa1-9a764d7977c4.png", title: "UGC Recognition" }
    ],
    sports: [
      { id: 1, image_url: "/lovable-uploads/0a24c18b-02f9-4923-8b35-69a39638563c.png", title: "Gym Equipment" },
      { id: 2, image_url: "/lovable-uploads/159135ff-efea-4c77-a668-803d3c9b66aa.png", title: "Sports Training" },
      { id: 3, image_url: "/lovable-uploads/f904993f-8b09-4343-bb50-d6155ec79f58.png", title: "Physical Education" },
      { id: 4, image_url: "/lovable-uploads/2983da9b-4ea9-4555-9587-2eeacf219b67.png", title: "Sports Facilities" },
      { id: 5, image_url: "/lovable-uploads/b668c276-535b-4004-80ce-3ab7742ddb38.png", title: "Fitness Center" },
      { id: 6, image_url: "/lovable-uploads/8406d4c8-0d8c-46c1-8232-83529137997f.png", title: "Sports Ground" },
      { id: 7, image_url: "/lovable-uploads/dbef153d-61c2-4837-aae4-ccdaf1963618.png", title: "Athletic Training" },
      { id: 8, image_url: "/lovable-uploads/c22a7a50-9dcb-46f9-8ac6-e8d8a4610e1b.png", title: "Sports Activities" },
      { id: 9, image_url: "/lovable-uploads/10892d74-b7cb-4944-8cce-627d22c30f62.png", title: "Team Sports" }
    ]
  };

  // Use dynamic images if available, otherwise fallback to static
  const galleryItems = {
    campus: campusImages.length > 0 ? campusImages : fallbackGalleryItems.campus,
    events: eventsImages.length > 0 ? eventsImages : fallbackGalleryItems.events,
    achievements: achievementsImages.length > 0 ? achievementsImages : fallbackGalleryItems.achievements,
    sports: sportsImages.length > 0 ? sportsImages : fallbackGalleryItems.sports
  };

  return (
    <Layout>
      <section className="pt-32 pb-12 relative">
        {/* Hero Background */}
        <div 
          className="absolute top-0 left-0 w-full h-64 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url("/lovable-uploads/9ecf085a-3abc-45e7-844b-b132bfa85970.png")', 
            backgroundPosition: 'center 40%' 
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Campus Photo Gallery</h1>
            <p className="text-gray-200">
              Explore our vibrant campus life, events, achievements, and sporting activities through our photo gallery.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-college-blue mb-4 sm:mb-0">Browse Gallery</h2>
              <ToggleGroup 
                type="single" 
                value={viewMode} 
                onValueChange={(value) => value && setViewMode(value as "grid" | "masonry")} 
                className="border border-gray-200 rounded-md"
              >
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  <Grid3X3 className="h-5 w-5" />
                </ToggleGroupItem>
                <ToggleGroupItem value="masonry" aria-label="Masonry view">
                  <GalleryVertical className="h-5 w-5" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <Tabs defaultValue="campus" className="w-full" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="campus" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Campus</TabsTrigger>
                <TabsTrigger value="events" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Events</TabsTrigger>
                <TabsTrigger value="achievements" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Achievements</TabsTrigger>
                <TabsTrigger value="sports" className="bg-college-blue text-white data-[state=active]:bg-college-gold data-[state=active]:text-black">Sports</TabsTrigger>
              </TabsList>
              
              {Object.keys(galleryItems).map(category => (
                <TabsContent key={category} value={category}>
                  <div className={`${viewMode === "grid" ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4' : 'columns-1 sm:columns-2 md:columns-3 gap-4'}`}>
                    {galleryItems[category as keyof typeof galleryItems].map((item) => (
                      <Card key={item.id} className={`overflow-hidden hover:shadow-lg transition-shadow ${viewMode === "masonry" ? "mb-4 break-inside-avoid" : ""}`}>
                        <CardContent className="p-0">
                          <AspectRatio ratio={4/3} className="bg-muted">
                            <img 
                              src={item.image_url} 
                              alt={item.title} 
                              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                            />
                          </AspectRatio>
                          <div className="p-3 bg-white">
                            <p className="text-sm font-medium text-gray-700">{item.title}</p>
                            {item.description && (
                              <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
