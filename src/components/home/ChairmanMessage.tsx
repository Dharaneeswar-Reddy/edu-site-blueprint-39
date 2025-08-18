import { ArrowRight } from "lucide-react";

const ChairmanMessage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/85f3d76b-36b0-4119-9ae0-75167cea9d0b.png" 
                alt="Chairman" 
                className="w-full h-auto"
              />
            </div>
            <div className="bg-college-blue text-white p-4 mt-4 rounded-lg">
              <h3 className="text-xl font-bold">Dr. Rajesh Kumar</h3>
              <p className="text-sm">Chairman</p>
              <p className="text-sm mt-1">Ph.D. in Educational Leadership</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="section-title">Chairman's Message</h2>
            <div className="space-y-4 text-gray-700">
              <p>Dear Students, Parents, and Visitors,</p>
              <p>It gives me immense pleasure to welcome you to Shri Velagapudi Ramakrishna Memorial College. For over four decades, SVRMC has been at the forefront of providing quality education and nurturing young minds to become future leaders.</p>
              <p>At SVRMC, we believe in a holistic approach to education that goes beyond textbooks and classrooms. Our aim is to develop well-rounded individuals who excel not only academically but also possess the skills and values necessary to face real-world challenges.</p>
              <p>Our dedicated faculty members are committed to creating a stimulating learning environment where curiosity is encouraged, critical thinking is developed, and innovation is fostered. The state-of-the-art infrastructure and modern facilities further enhance the learning experience of our students.</p>
              <p>We are proud of our alumni who have excelled in various fields and brought laurels to their alma mater. Their success stories serve as an inspiration for our current students and motivate us to continue our pursuit of excellence.</p>
              <p>As we move forward, we remain committed to our vision of being a center of excellence in education, research, and innovation. I invite you to be a part of the SVRMC family and join us in this exciting journey of learning and growth.</p>
              <p className="font-semibold">Warm regards,</p>
              <p className="font-semibold">Dr. Rajesh Kumar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;