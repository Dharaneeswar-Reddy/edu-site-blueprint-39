
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialsCarousel = () => {
  return (
    <div className="mb-12">
      <h2 className="section-title">Student Testimonials</h2>
      <p className="text-muted-foreground mb-6">Hear from our students and alumni</p>
      <div className="max-w-3xl mx-auto">
        <Carousel className="animate-fade-in">
          <CarouselContent>
            <CarouselItem>
              <div className="bg-white p-8 rounded-lg shadow text-center border border-gray-100">
                <div className="mb-6">
                  <img 
                    src="https://source.unsplash.com/random/100x100?portrait,1" 
                    alt="Student" 
                    className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-college-gold"
                  />
                </div>
                <p className="italic mb-4">"The supportive faculty and excellent infrastructure at SVRMC helped me secure a placement at my dream company. The practical approach to education gave me an edge during interviews."</p>
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-muted-foreground">CSE Graduate, 2023</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-white p-8 rounded-lg shadow text-center border border-gray-100">
                <div className="mb-6">
                  <img 
                    src="https://source.unsplash.com/random/100x100?portrait,2" 
                    alt="Student" 
                    className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-college-gold"
                  />
                </div>
                <p className="italic mb-4">"SVRMC provided me with numerous opportunities to showcase my talents. The technical fests and workshops helped me develop both technical and soft skills essential for my career."</p>
                <div>
                  <h4 className="font-semibold">Rahul Patel</h4>
                  <p className="text-sm text-muted-foreground">ECE Graduate, 2022</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="bg-white p-8 rounded-lg shadow text-center border border-gray-100">
                <div className="mb-6">
                  <img 
                    src="https://source.unsplash.com/random/100x100?portrait,3" 
                    alt="Student" 
                    className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-college-gold"
                  />
                </div>
                <p className="italic mb-4">"The research opportunities at SVRMC are exceptional. The faculty encouraged me to pursue my research interests, which helped me secure admission for higher studies abroad."</p>
                <div>
                  <h4 className="font-semibold">Ananya Reddy</h4>
                  <p className="text-sm text-muted-foreground">Civil Engineering Graduate, 2023</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative ml-2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
