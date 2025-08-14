
import { useState } from "react";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Grid3X3, GalleryVertical } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("campus");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");

  const galleryItems = {
    campus: [
      { id: 1, src: "/lovable-uploads/9ecf085a-3abc-45e7-844b-b132bfa85970.png", alt: "Main Campus Building" },
      { id: 2, src: "/lovable-uploads/b010e240-0ffe-43a4-884e-04e9e6094c36.png", alt: "College Entrance Gate" },
      { id: 3, src: "/lovable-uploads/c2330428-4591-4e58-92a3-ff6d9918a338.png", alt: "Lecture Hall Complex" },
      { id: 4, src: "/lovable-uploads/fd7697be-4da9-4c9f-99c3-16a23c2dc964.png", alt: "Students Center" },
      { id: 5, src: "/lovable-uploads/dd09abc5-6c94-4cbf-898d-c7df488183a6.png", alt: "Computer Laboratory" },
      { id: 6, src: "/lovable-uploads/2132c67c-81c1-4c7b-a949-3054c289f2ce.png", alt: "Sports Complex" }
    ],
    events: [
      { id: 1, src: "/lovable-uploads/061b3c84-914c-4bb5-893f-d12d6cff9d3f.png", alt: "NCC Cadets Formation" },
      { id: 2, src: "/lovable-uploads/a2d2ff22-61cc-47fe-8ef4-7086790f77d0.png", alt: "NCC Group Photo" },
      { id: 3, src: "/lovable-uploads/17bb2e0f-adc8-46fd-b6dc-aa370c366ef2.png", alt: "NCC Parade Review" },
      { id: 4, src: "/lovable-uploads/c845d941-c566-4910-8dbb-82f90fb04f82.png", alt: "NCC Drill Formation" },
      { id: 5, src: "/lovable-uploads/b1fc6422-ad59-4662-83db-90f4d62b1001.png", alt: "Academic Seminar" },
      { id: 6, src: "/lovable-uploads/85f3d76b-36b0-4119-9ae0-75167cea9d0b.png", alt: "Lecture Hall" }
    ],
    achievements: [
      { id: 1, src: "/lovable-uploads/d85fb3d3-b73a-4321-ba55-69d5399a79a5.png", alt: "Top Rank Achievement" },
      { id: 2, src: "/lovable-uploads/a64e202d-8654-4eb7-9a72-956203b85f88.png", alt: "Research Center Excellence" },
      { id: 3, src: "/lovable-uploads/0708f036-44a6-4d70-817d-74a8097f1e73.png", alt: "Robotics Competition" },
      { id: 4, src: "/lovable-uploads/d870c473-3320-4d6a-9dd4-15ab9ceab52a.png", alt: "NBA Accreditation" },
      { id: 5, src: "/lovable-uploads/455edc55-96fe-44fc-a8d0-2b69c6dd6e92.png", alt: "NAAC A Grade" },
      { id: 6, src: "/lovable-uploads/33bce374-c279-4e5c-afa1-9a764d7977c4.png", alt: "UGC Recognition" }
    ],
    sports: [
      { id: 1, src: "/lovable-uploads/662ebac1-9113-46ee-b212-a9a1526878d4.png", alt: "Cricket Equipment" },
      { id: 2, src: "/lovable-uploads/3135e1f8-603d-4960-af26-bdc4f401f693.png", alt: "Basketball" },
      { id: 3, src: "/lovable-uploads/5eef37d5-a7a2-416d-9fb3-7df167c87f7e.png", alt: "Annual Athletic Meet" },
      { id: 4, src: "/lovable-uploads/8ca0ef83-413e-4894-9e73-7361e0c0106c.png", alt: "Sports Achievement" }
    ]
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
                              src={item.src} 
                              alt={item.alt} 
                              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                            />
                          </AspectRatio>
                          <div className="p-3 bg-white">
                            <p className="text-sm font-medium text-gray-700">{item.alt}</p>
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
