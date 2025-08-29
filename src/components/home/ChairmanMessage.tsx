import { ArrowRight } from "lucide-react";

const VicePresidentMessage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/69a5e469-616f-4fe5-9e58-87c598505f45.png" 
                alt="Vice President" 
                className="w-full h-auto"
              />
            </div>
            <div className="bg-college-blue text-white p-4 mt-4 rounded-lg">
              <h3 className="text-xl font-bold">Smt. Nanditha Prasad</h3>
              <p className="text-sm">Vice-President</p>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="section-title">Vice President's Message</h2>
            <div className="space-y-4 text-gray-700">
              <p>It is my privilege to welcome you to Sri Velagapudi Ramakrishna Memorial College. Since its inception, SVRM has stood for excellence, integrity, and service, shaping students into responsible citizens and future leaders.</p>
              <p>We remain committed to a holistic education that blends academics with critical thinking, innovation, and values. With our dedicated faculty and vibrant campus life, we strive to help every student realize their fullest potential.</p>
              <p>Together, let us uphold the vision of our founder, Sri Velagapudi Ramakrishna, and continue building a legacy of learning and service to society.</p>
              <p className="font-semibold">Warm regards,</p>
              <p className="font-semibold">Smt. Nanditha Prasad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VicePresidentMessage;