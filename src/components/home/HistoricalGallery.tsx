import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const HistoricalGallery = () => {
  const historicalImages = [
    {
      src: "/lovable-uploads/003761c8-21ea-431f-b686-daaa89289a77.png",
      alt: "Foundation stone laid by President Sri V.V. Giri",
      caption: "Foundation stone laid by President of India, Sri V.V. Giri"
    },
    {
      src: "/lovable-uploads/7a24c2ce-e1fa-4e29-9298-994587287b76.png",
      alt: "A Rich Tradition of Discipline and Learning",
      caption: "AP History Congress - A Rich Tradition of Discipline and Learning"
    },
    {
      src: "/lovable-uploads/106dbe77-c38e-40f8-a8ff-e4ef8bf83d80.png",
      alt: "Aerial View of College Town",
      caption: "Aerial View of College and Surrounding Town"
    },
    {
      src: "/lovable-uploads/22d1b775-7f93-42dd-b3d9-3de870ca21e3.png",
      alt: "Aerial View of Campus Buildings",
      caption: "Aerial View of SVRMC Campus Buildings"
    },
    {
      src: "/lovable-uploads/bcf46b8d-3b9a-4d4c-9141-60084c7ccb4e.png",
      alt: "Students Forming SVRMC",
      caption: "Students Creating SVRMC Formation - College Unity and Spirit"
    },
    {
      src: "/lovable-uploads/5d1d1740-7329-4875-84f6-c30f1ccc1f3b.png",
      alt: "Dr. Kosaraju Lakshmi Narayana Memorial",
      caption: "Dr. Kosaraju Lakshmi Narayana Bhavan - Sports Hall Building"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Our Heritage</h2>
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {historicalImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-lg overflow-hidden shadow-lg bg-white p-4 hover:shadow-xl transition-shadow h-full">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[300px] object-cover rounded-lg mb-4"
                    />
                    <p className="text-center text-gray-600 text-sm font-medium">{image.caption}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HistoricalGallery;