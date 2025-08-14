import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      course: "Computer Science Engineering",
      message: "The faculty at this college is exceptional. They provided me with the knowledge and skills needed to excel in my career.",
      rating: 5
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      course: "Mechanical Engineering",
      message: "Great infrastructure and learning environment. The practical exposure helped me land my dream job.",
      rating: 5
    },
    {
      id: 3,
      name: "Anita Reddy",
      course: "Electronics and Communication",
      message: "Amazing research opportunities and supportive faculty. This college shaped my future in the best way possible.",
      rating: 5
    }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Student Testimonials</h2>
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.message}"</p>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.course}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default TestimonialsCarousel;